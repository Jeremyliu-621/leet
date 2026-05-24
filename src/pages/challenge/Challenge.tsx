import { useState, useEffect, useRef, useCallback } from 'react';
import type { SupportedLanguage, UserPreferences } from '../../lib/types';
import type { Problem } from '../../lib/problems/types';
import type { JudgeResult } from '../../lib/judge';
import type { ChallengeFailureReason } from '../../lib/messaging/runtime';
import { getValue, updateValue } from '../../lib/storage';
import { pickChallengeProblem } from '../../lib/problems';
import { runTests, warmPython } from '../../lib/judge';
import { DEFAULT_PREFERENCES } from '../../lib/storage/defaults';
import { parseTargetParam, extractDomain } from './challenge-helpers';
import { TopBar } from './components/TopBar';
import { ProblemPanel } from './components/ProblemPanel';
import { EditorPanel } from './components/EditorPanel';

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

type RunMode = 'run' | 'submit';

/** Seconds deducted from the challenge timer per revealed hint. */
const HINT_COST_SECONDS = 60;

/** Languages a given problem ships starter code for, in display order. */
function availableLanguagesFor(problem: Problem): SupportedLanguage[] {
  const langs: SupportedLanguage[] = ['javascript'];
  if (problem.starterCode.python) {
    langs.push('python');
  }
  return langs;
}

type PageState =
  | { status: 'loading' }
  | { status: 'no-problem' }
  | { status: 'ready'; problem: Problem; prefs: UserPreferences };

// ---------------------------------------------------------------------------
// Empty / loading states
// ---------------------------------------------------------------------------

function LoadingScreen() {
  return (
    <div className="flex h-full items-center justify-center bg-bg">
      <span className="font-mono text-xs text-faint">Loading challenge…</span>
    </div>
  );
}

function NoProblemScreen() {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-3 bg-bg px-8 text-center">
      <span className="font-mono text-sm font-semibold text-text">No problem available</span>
      <p className="max-w-sm text-xs leading-relaxed text-muted">
        The problem bank could not return a challenge matching your current settings. Adjust your
        difficulty and tag preferences in Settings, then try again.
      </p>
    </div>
  );
}

function NoTargetBanner() {
  return (
    <div className="shrink-0 border-b border-border bg-surface-2 px-5 py-2.5">
      <p className="font-mono text-[10px] text-faint">
        No blocked site detected — running in standalone mode.
      </p>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Main component
// ---------------------------------------------------------------------------

/**
 * The full challenge screen. Parses the `?target=` query param, loads
 * preferences and picks a problem, then presents the two-column editor UI.
 *
 * Behaviour:
 * - Timer counts down from prefs.challengeTimeLimitSec; hitting 0 fails.
 * - Run executes visible tests only; Submit runs all tests.
 * - On accept, sends `leetlock/grant-unlock` and redirects to the target.
 * - On failure, sends `leetlock/fail-challenge` with the configured action.
 */
export function Challenge() {
  // Parse target URL once — stable reference.
  const targetUrl = useRef<string | null>(parseTargetParam(window.location.search));
  const domain = useRef<string | null>(
    targetUrl.current ? extractDomain(targetUrl.current) : null,
  );
  // True once a programmatic navigation (accepted → target, or failure → SW)
  // is in flight. The beforeunload handler skips its prompt while this is set
  // so the user doesn't see "Leave site?" right after solving correctly.
  const isResolvingRef = useRef(false);

  // Page-level state machine.
  const [pageState, setPageState] = useState<PageState>({ status: 'loading' });

  // Editor code — mirrors the CodeMirror document.
  const [code, setCode] = useState('');

  // Active language. Set on init from the user's preference (falling back to
  // JS if the picked problem doesn't ship the preferred language).
  const [language, setLanguage] = useState<SupportedLanguage>('javascript');

  // Timer state.
  const [secondsLeft, setSecondsLeft] = useState(DEFAULT_PREFERENCES.challengeTimeLimitSec);

  // Run/submit state.
  // null = no run yet; undefined = run in flight; JudgeResult = completed run.
  const [isRunning, setIsRunning] = useState(false);
  const [verdict, setVerdict] = useState<JudgeResult | null | undefined>(null);
  const [verdictMode, setVerdictMode] = useState<RunMode>('run');
  const [attempts, setAttempts] = useState(0);

  // Streak (loaded from storage in a future phase; placeholder 0 for now).
  const [streak] = useState(0);

  // -------------------------------------------------------------------------
  // Load prefs + pick problem (once on mount)
  // -------------------------------------------------------------------------

  useEffect(() => {
    let cancelled = false;

    async function init() {
      let prefs: UserPreferences;
      try {
        prefs = await getValue('userPreferences');
      } catch {
        // chrome.storage unavailable (e.g. running outside extension context)
        prefs = DEFAULT_PREFERENCES;
      }

      if (cancelled) return;

      const problem = pickChallengeProblem(prefs);
      if (!problem) {
        setPageState({ status: 'no-problem' });
        return;
      }

      // Pick the user's preferred language if the problem ships it; otherwise
      // fall back to JavaScript (which is always present).
      const preferred = prefs.preferredLanguage;
      const initialLanguage: SupportedLanguage =
        preferred === 'python' && problem.starterCode.python ? 'python' : 'javascript';
      const initialStarter =
        initialLanguage === 'python' && problem.starterCode.python
          ? problem.starterCode.python
          : problem.starterCode.javascript;

      setLanguage(initialLanguage);
      setCode(initialStarter);
      setSecondsLeft(prefs.challengeTimeLimitSec);
      setPageState({ status: 'ready', problem, prefs });

      // Warm Pyodide while the user is reading the problem, so the first
      // Run / Submit doesn't pay the cold-boot cost. Only when the user
      // starts in Python — JS users don't need this.
      if (initialLanguage === 'python') {
        void warmPython();
      }
    }

    void init();
    return () => {
      cancelled = true;
    };
  }, []);

  // -------------------------------------------------------------------------
  // Countdown timer
  // -------------------------------------------------------------------------

  const handleFail = useCallback(
    async (reason: ChallengeFailureReason, prefs: UserPreferences) => {
      // The SW is about to close or redirect this tab — suppress the
      // beforeunload prompt that would otherwise interrupt that navigation.
      isResolvingRef.current = true;

      let tabId: number | undefined;
      try {
        const tab = await chrome.tabs.getCurrent();
        tabId = tab?.id;
      } catch {
        // Not in an extension context — silently skip.
      }

      try {
        await chrome.runtime.sendMessage({
          type: 'leetlock/fail-challenge',
          domain: domain.current ?? '',
          reason,
          failureAction: prefs.failureAction,
          redirectUrl: prefs.redirectUrl,
          tabId,
        });
      } catch {
        // Service worker not yet implemented (Phase 5) — ignore for now.
      }
    },
    [],
  );

  // Block accidental tab-close / refresh while a challenge is in progress.
  // The browser shows its generic "Leave site?" confirmation; if the user
  // confirms, the tab closes (silent give-up — a future polish item is to
  // also dispatch a fail-challenge in pagehide so the streak takes the hit).
  useEffect(() => {
    if (pageState.status !== 'ready') return;
    function onBeforeUnload(event: BeforeUnloadEvent): void {
      if (isResolvingRef.current) return;
      event.preventDefault();
      // Legacy browsers require returnValue to be set explicitly.
      event.returnValue = '';
    }
    window.addEventListener('beforeunload', onBeforeUnload);
    return () => window.removeEventListener('beforeunload', onBeforeUnload);
  }, [pageState.status]);

  useEffect(() => {
    if (pageState.status !== 'ready') return;
    const { prefs } = pageState;

    const id = setInterval(() => {
      setSecondsLeft((prev) => {
        const next = prev - 1;
        if (next <= 0) {
          clearInterval(id);
          void handleFail('timeout', prefs);
          return 0;
        }
        return next;
      });
    }, 1000);

    return () => clearInterval(id);
  }, [pageState, handleFail]);

  // -------------------------------------------------------------------------
  // Run handler — visible tests only
  // -------------------------------------------------------------------------

  const handleRun = useCallback(async () => {
    if (pageState.status !== 'ready' || isRunning) return;
    const { problem } = pageState;

    setIsRunning(true);
    setVerdictMode('run');
    setVerdict(undefined); // undefined = in-flight sentinel

    try {
      const result = await runTests({
        code,
        problem,
        language,
        tests: problem.visibleTests,
        timeoutMs: 4000,
      });
      setVerdict(result);
    } catch (err) {
      // runTests rejects only if the sandbox itself fails to load.
      setVerdict({
        outcome: 'compile-error',
        passed: 0,
        total: problem.visibleTests.length,
        verdicts: [],
        message: err instanceof Error ? err.message : 'The code sandbox failed to load.',
      });
    } finally {
      setIsRunning(false);
    }
  }, [pageState, isRunning, code, language]);

  // -------------------------------------------------------------------------
  // Submit handler — all tests
  // -------------------------------------------------------------------------

  const handleSubmit = useCallback(async () => {
    if (pageState.status !== 'ready' || isRunning) return;
    const { problem, prefs } = pageState;

    setIsRunning(true);
    setVerdictMode('submit');
    setVerdict(undefined); // undefined = in-flight sentinel

    try {
      const result = await runTests({
        code,
        problem,
        language,
        tests: [...problem.visibleTests, ...problem.hiddenTests],
        timeoutMs: 6000,
      });
      setVerdict(result);

      if (result.outcome === 'accepted') {
        // About to navigate back to the target — suppress the beforeunload prompt.
        isResolvingRef.current = true;
        // Notify service worker → grant unlock token.
        try {
          await chrome.runtime.sendMessage({
            type: 'leetlock/grant-unlock',
            domain: domain.current ?? '',
            problemId: problem.id,
            durationMs: prefs.unlockDurationMin * 60 * 1000,
          });
        } catch {
          // SW not yet wired (Phase 6) — continue to redirect anyway.
        }

        // Redirect back to the original target.
        if (targetUrl.current) {
          window.location.href = targetUrl.current;
        } else {
          // No target (standalone mode) — just close.
          try {
            window.close();
          } catch {
            // ignore
          }
        }
      } else {
        // Failed submission — increment attempt counter.
        const newAttempts = attempts + 1;
        setAttempts(newAttempts);

        if (newAttempts >= prefs.maxSubmissionAttempts) {
          await handleFail('attempts-exhausted', prefs);
        }
      }
    } catch (err) {
      setVerdict({
        outcome: 'compile-error',
        passed: 0,
        total: problem.visibleTests.length + problem.hiddenTests.length,
        verdicts: [],
        message: err instanceof Error ? err.message : 'The code sandbox failed to load.',
      });
    } finally {
      setIsRunning(false);
    }
  }, [pageState, isRunning, code, language, attempts, handleFail]);

  // -------------------------------------------------------------------------
  // Language switch handler — replaces the editor doc with the new starter
  // and persists the user's preference. WIP code is lost; user can undo.
  // -------------------------------------------------------------------------

  const handleLanguageChange = useCallback(
    (next: SupportedLanguage) => {
      if (pageState.status !== 'ready' || next === language) return;
      const { problem } = pageState;
      const nextStarter =
        next === 'python' && problem.starterCode.python
          ? problem.starterCode.python
          : problem.starterCode.javascript;
      setLanguage(next);
      setCode(nextStarter);
      // First time switching to Python this session? Warm Pyodide now so
      // the next Run isn't the user's first encounter with the cold-boot.
      if (next === 'python') {
        void warmPython();
      }
      // Persist the new preference so future challenges open in this language.
      void (async () => {
        try {
          await updateValue('userPreferences', (curr) => ({ ...curr, preferredLanguage: next }));
        } catch {
          /* storage unavailable — preference is in-session only */
        }
      })();
    },
    [pageState, language],
  );

  // -------------------------------------------------------------------------
  // Give up handler
  // -------------------------------------------------------------------------

  const handleGiveUp = useCallback(async () => {
    if (pageState.status !== 'ready') return;
    await handleFail('gave-up', pageState.prefs);
  }, [pageState, handleFail]);

  // -------------------------------------------------------------------------
  // Render
  // -------------------------------------------------------------------------

  if (pageState.status === 'loading') {
    return <LoadingScreen />;
  }

  if (pageState.status === 'no-problem') {
    return <NoProblemScreen />;
  }

  const { problem, prefs } = pageState;
  const attemptsRemaining =
    prefs.maxSubmissionAttempts !== Infinity
      ? Math.max(0, prefs.maxSubmissionAttempts - attempts)
      : null;

  return (
    <div className="flex h-full flex-col overflow-hidden bg-bg text-text">
      <TopBar secondsLeft={secondsLeft} prefs={prefs} streak={streak} />

      {/* No-target banner — informational only, does not block usage */}
      {!targetUrl.current && <NoTargetBanner />}

      {/*
       * Two-column layout:
       *   - Left (problem panel): 5 parts, min-w-0 so text wraps correctly.
       *   - Right (editor panel): 7 parts.
       * Stacks vertically below ~900px via flex-col on narrow viewports.
       */}
      <main
        className="min-h-0 flex-1 flex flex-col lg:flex-row overflow-hidden"
        aria-label="Challenge workspace"
      >
        {/* Problem panel — scrollable independently */}
        <div className="flex flex-col overflow-hidden border-border lg:border-r lg:w-5/12 max-lg:border-b max-lg:max-h-[45vh]">
          <ProblemPanel
            problem={problem}
            hintCostLabel="1 min"
            onHintRevealed={() => setSecondsLeft((s) => Math.max(0, s - HINT_COST_SECONDS))}
          />
        </div>

        {/* Editor panel — fixed, no scroll on the outer shell */}
        <div className="flex min-h-0 flex-1 flex-col overflow-hidden">
          <EditorPanel
            starterCode={
              language === 'python' && problem.starterCode.python
                ? problem.starterCode.python
                : problem.starterCode.javascript
            }
            language={language}
            availableLanguages={availableLanguagesFor(problem)}
            onLanguageChange={handleLanguageChange}
            editorKeymap={prefs.editorKeymap}
            onChange={setCode}
            onRun={() => void handleRun()}
            onSubmit={() => void handleSubmit()}
            onGiveUp={prefs.allowGiveUp ? () => void handleGiveUp() : undefined}
            isRunning={isRunning}
            verdict={verdict}
            verdictMode={verdictMode}
            showGiveUp={prefs.allowGiveUp}
            attemptsRemaining={attemptsRemaining}
          />
        </div>
      </main>
    </div>
  );
}
