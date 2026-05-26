import { useState, useEffect, useRef, useCallback } from 'react';
import type { SupportedLanguage, UserPreferences, EditorKeymap } from '../../lib/types';
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
import { DraggableSplitter } from './components/DraggableSplitter';

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

  // Editor appearance settings — mirrored from prefs but held in local state
  // so changes are immediately reflected without a full prefs reload.
  const [editorFontSize, setEditorFontSize] = useState(DEFAULT_PREFERENCES.editorFontSize);
  const [editorKeymap, setEditorKeymap] = useState<EditorKeymap>(DEFAULT_PREFERENCES.editorKeymap);
  const [editorTabSize, setEditorTabSize] = useState<2 | 4>(DEFAULT_PREFERENCES.editorTabSize);

  // Panel split ratio (left panel fraction of total width, in [0.2, 0.8]).
  const [splitRatio, setSplitRatio] = useState(DEFAULT_PREFERENCES.splitRatio);

  // Fullscreen editor mode — hides the problem panel. Not persisted (session only).
  const [fullscreen, setFullscreen] = useState(false);

  // Custom test-case state — for the "Testcase" tab in the bottom panel.
  const [isCustomRunning, setIsCustomRunning] = useState(false);
  const [customOutput, setCustomOutput] = useState<string | null | undefined>(null);
  const [customError, setCustomError] = useState<string | null>(null);

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
      // Seed editor appearance settings from prefs.
      setEditorFontSize(prefs.editorFontSize);
      setEditorKeymap(prefs.editorKeymap);
      setEditorTabSize(prefs.editorTabSize);
      setSplitRatio(prefs.splitRatio);
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

    const submitStartMs = Date.now();

    try {
      const result = await runTests({
        code,
        problem,
        language,
        tests: [...problem.visibleTests, ...problem.hiddenTests],
        timeoutMs: 6000,
      });
      setVerdict(result);

      // Record this submission attempt to history (fire-and-forget).
      const durationMs = Date.now() - submitStartMs;
      const record = {
        submittedAt: Date.now(),
        problemId: problem.id,
        problemTitle: problem.title,
        outcome: result.outcome,
        passed: result.passed,
        total: result.total,
        durationMs,
        language,
      };
      void (async () => {
        try {
          await updateValue('submissionHistory', (curr) => {
            const next = [record, ...curr];
            // Cap at 500 entries.
            return next.length > 500 ? next.slice(0, 500) : next;
          });
        } catch { /* storage unavailable */ }
      })();

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
  // Editor settings change handlers — update local state and persist to prefs
  // -------------------------------------------------------------------------

  const handleEditorFontSizeChange = useCallback((size: number) => {
    setEditorFontSize(size);
    void (async () => {
      try {
        await updateValue('userPreferences', (curr) => ({ ...curr, editorFontSize: size }));
      } catch { /* storage unavailable */ }
    })();
  }, []);

  const handleEditorKeymapChange = useCallback((km: EditorKeymap) => {
    setEditorKeymap(km);
    void (async () => {
      try {
        await updateValue('userPreferences', (curr) => ({ ...curr, editorKeymap: km }));
      } catch { /* storage unavailable */ }
    })();
  }, []);

  const handleEditorTabSizeChange = useCallback((size: 2 | 4) => {
    setEditorTabSize(size);
    void (async () => {
      try {
        await updateValue('userPreferences', (curr) => ({ ...curr, editorTabSize: size }));
      } catch { /* storage unavailable */ }
    })();
  }, []);

  // Custom test-case run — runs the user's code with arbitrary args (no expected comparison).
  const handleCustomRun = useCallback(async (args: unknown[]) => {
    if (pageState.status !== 'ready' || isCustomRunning) return;
    const { problem } = pageState;

    setIsCustomRunning(true);
    setCustomOutput(undefined); // in-flight
    setCustomError(null);

    try {
      // Use a unique sentinel for expected so the verdict is always 'fail'
      // (we only care about the actual output, not a pass/fail comparison).
      const SENTINEL = '__custom_test_sentinel__';
      const result = await runTests({
        code,
        problem,
        language,
        tests: [{ args, expected: SENTINEL }],
        timeoutMs: 4000,
      });
      if (result.outcome === 'compile-error' || result.outcome === 'timeout') {
        setCustomOutput(null);
        setCustomError(result.message ?? result.outcome);
      } else if (result.verdicts.length > 0) {
        const v = result.verdicts[0];
        if (v === undefined) {
          setCustomOutput(null);
          setCustomError('No output.');
        } else if (v.status === 'error') {
          setCustomOutput(null);
          setCustomError(v.error);
        } else if (v.status === 'fail') {
          // 'fail' because actual !== SENTINEL; actual is the real return value.
          let outputStr: string;
          try {
            outputStr = JSON.stringify(v.actual);
          } catch {
            outputStr = String(v.actual);
          }
          setCustomOutput(outputStr);
          setCustomError(null);
        } else {
          // 'pass' means the function returned the sentinel string — very unlikely but handle it.
          setCustomOutput(JSON.stringify(SENTINEL));
          setCustomError(null);
        }
      } else {
        setCustomOutput(null);
        setCustomError('No output.');
      }
    } catch (err) {
      setCustomOutput(null);
      setCustomError(err instanceof Error ? err.message : 'The code sandbox failed to load.');
    } finally {
      setIsCustomRunning(false);
    }
  }, [pageState, isCustomRunning, code, language]);

  // Split ratio — real-time update (no persistence on every mouse move).
  const handleSplitRatioChange = useCallback((ratio: number) => {
    setSplitRatio(ratio);
  }, []);

  // Commit split ratio to storage when dragging ends.
  const handleSplitRatioCommit = useCallback((ratio: number) => {
    setSplitRatio(ratio);
    void (async () => {
      try {
        await updateValue('userPreferences', (curr) => ({ ...curr, splitRatio: ratio }));
      } catch { /* storage unavailable */ }
    })();
  }, []);

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
       * Two-column layout with a draggable splitter on lg+ viewports.
       *   - Left (problem panel): controlled by splitRatio (e.g. 42%).
       *   - Splitter: 9px drag handle, visible only on lg+.
       *   - Right (editor panel): takes the remaining space.
       * Stacks vertically below lg via flex-col on narrow viewports.
       */}
      <main
        data-split-container
        className="min-h-0 flex-1 flex flex-col lg:flex-row overflow-hidden"
        aria-label="Challenge workspace"
      >
        {/* Problem panel — hidden in fullscreen mode */}
        {!fullscreen && (
          <div
            className="flex flex-col overflow-hidden max-lg:border-b max-lg:max-h-[45vh] lg:shrink-0"
            style={{ flexBasis: `${splitRatio * 100}%` }}
          >
            <ProblemPanel
              problem={problem}
              hintCostLabel="1 min"
              onHintRevealed={() => setSecondsLeft((s) => Math.max(0, s - HINT_COST_SECONDS))}
            />
          </div>
        )}

        {/* Draggable splitter — only when not in fullscreen mode */}
        {!fullscreen && (
          <DraggableSplitter
            onRatioChange={handleSplitRatioChange}
            onRatioCommit={handleSplitRatioCommit}
          />
        )}

        {/* Editor panel — fixed, no scroll on the outer shell */}
        <div className="flex min-h-0 flex-1 flex-col overflow-hidden">
          <EditorPanel
            fullscreen={fullscreen}
            onFullscreenToggle={() => setFullscreen((f) => !f)}
            starterCode={
              language === 'python' && problem.starterCode.python
                ? problem.starterCode.python
                : problem.starterCode.javascript
            }
            language={language}
            availableLanguages={availableLanguagesFor(problem)}
            onLanguageChange={handleLanguageChange}
            editorKeymap={editorKeymap}
            onEditorKeymapChange={handleEditorKeymapChange}
            editorFontSize={editorFontSize}
            onEditorFontSizeChange={handleEditorFontSizeChange}
            editorTabSize={editorTabSize}
            onEditorTabSizeChange={handleEditorTabSizeChange}
            onChange={setCode}
            onRun={() => void handleRun()}
            onSubmit={() => void handleSubmit()}
            onGiveUp={prefs.allowGiveUp ? () => void handleGiveUp() : undefined}
            isRunning={isRunning}
            verdict={verdict}
            verdictMode={verdictMode}
            showGiveUp={prefs.allowGiveUp}
            attemptsRemaining={attemptsRemaining}
            params={problem.params}
            onCustomRun={(args) => void handleCustomRun(args)}
            isCustomRunning={isCustomRunning}
            customOutput={customOutput}
            customError={customError}
          />
        </div>
      </main>
    </div>
  );
}
