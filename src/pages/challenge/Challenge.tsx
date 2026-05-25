import { useState, useEffect, useRef, useCallback } from 'react';
import type { SupportedLanguage, SubmissionRecord, UserPreferences } from '../../lib/types';
import type { Problem } from '../../lib/problems/types';
import type { JudgeResult } from '../../lib/judge';
import type { ChallengeFailureReason } from '../../lib/messaging/runtime';
import { getValue, updateValue } from '../../lib/storage';
import { pickChallengeProblem } from '../../lib/problems';
import { runTests, warmPython, runCustomArgs } from '../../lib/judge';
import type { CustomTestStatus } from '../../lib/judge';
import { DEFAULT_PREFERENCES } from '../../lib/storage/defaults';
import { resolveTheme } from '../../lib/theme';
import { parseTargetParam, extractDomain } from './challenge-helpers';
import { TopBar } from './components/TopBar';
import { ProblemPanel } from './components/ProblemPanel';
import { EditorPanel } from './components/EditorPanel';
import { CustomTestPanel } from './components/CustomTestPanel';
import { SubmissionsPanel } from './components/SubmissionsPanel';

/** Maximum submissions persisted per problem to cap storage usage. */
const MAX_HISTORY_PER_PROBLEM = 20;

// ---------------------------------------------------------------------------
// Draggable splitter
// ---------------------------------------------------------------------------

const PANEL_MIN_PCT = 20;
const PANEL_MAX_PCT = 80;

interface SplitterProps {
  onDrag: (newPct: number) => void;
  onDragEnd: (finalPct: number) => void;
  containerRef: React.RefObject<HTMLElement | null>;
  currentPct: number;
}

/** Keyboard step size for arrow-key resizing (percentage points). */
const SPLITTER_STEP = 2;

function DraggableSplitter({ onDrag, onDragEnd, containerRef, currentPct }: SplitterProps) {
  const isDraggingRef = useRef(false);

  const handlePointerDown = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      e.preventDefault();
      isDraggingRef.current = true;
      (e.target as HTMLDivElement).setPointerCapture(e.pointerId);
    },
    [],
  );

  const handlePointerMove = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      if (!isDraggingRef.current || !containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const rawPct = ((e.clientX - rect.left) / rect.width) * 100;
      const clamped = Math.min(PANEL_MAX_PCT, Math.max(PANEL_MIN_PCT, rawPct));
      onDrag(clamped);
    },
    [onDrag, containerRef],
  );

  const handlePointerUp = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      if (!isDraggingRef.current || !containerRef.current) return;
      isDraggingRef.current = false;
      const rect = containerRef.current.getBoundingClientRect();
      const rawPct = ((e.clientX - rect.left) / rect.width) * 100;
      const clamped = Math.min(PANEL_MAX_PCT, Math.max(PANEL_MIN_PCT, rawPct));
      onDragEnd(clamped);
    },
    [onDragEnd, containerRef],
  );

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLDivElement>) => {
      let delta = 0;
      if (e.key === 'ArrowLeft' || e.key === 'ArrowDown') delta = -SPLITTER_STEP;
      else if (e.key === 'ArrowRight' || e.key === 'ArrowUp') delta = SPLITTER_STEP;
      else if (e.key === 'Home') { onDragEnd(PANEL_MIN_PCT); return; }
      else if (e.key === 'End') { onDragEnd(PANEL_MAX_PCT); return; }
      else return;
      e.preventDefault();
      const next = Math.min(PANEL_MAX_PCT, Math.max(PANEL_MIN_PCT, currentPct + delta));
      onDragEnd(next);
    },
    [currentPct, onDragEnd],
  );

  return (
    <div
      role="separator"
      aria-orientation="vertical"
      aria-label="Resize panels"
      aria-valuenow={Math.round(currentPct)}
      aria-valuemin={PANEL_MIN_PCT}
      aria-valuemax={PANEL_MAX_PCT}
      tabIndex={0}
      className="group relative hidden w-1 shrink-0 cursor-col-resize bg-border transition-colors hover:bg-border-strong focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-1 focus-visible:ring-offset-bg lg:flex items-center justify-center"
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onKeyDown={handleKeyDown}
    >
      {/* Visual drag handle dot */}
      <div className="absolute h-8 w-1 rounded-full bg-border-strong opacity-0 transition-opacity group-hover:opacity-100 group-active:opacity-100" />
    </div>
  );
}

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

type RunMode = 'run' | 'submit';

/** Seconds deducted from the challenge timer per revealed hint. */
const HINT_COST_SECONDS = 60;

/** Languages available for a given problem, in display order. */
function availableLanguagesFor(problem: Problem): SupportedLanguage[] {
  // TypeScript uses the JS starter code (TS is a superset of JS), so it is
  // always available regardless of whether the problem ships a separate TS
  // starter. Python requires an explicit starter.
  const langs: SupportedLanguage[] = ['javascript', 'typescript'];
  if (problem.starterCode.python) {
    langs.push('python');
  }
  return langs;
}

/** Returns the starter code for a given language, falling back to JS. */
function starterCodeFor(problem: Problem, language: SupportedLanguage): string {
  if (language === 'python' && problem.starterCode.python) {
    return problem.starterCode.python;
  }
  // TypeScript uses the JS starter — it is valid TypeScript.
  return problem.starterCode.javascript;
}

type PageState =
  | { status: 'loading' }
  | { status: 'no-problem' }
  | { status: 'ready'; problem: Problem; prefs: UserPreferences }
  | { status: 'solved-standalone'; problemTitle: string };

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

function SolvedStandaloneScreen({ problemTitle }: { problemTitle: string }) {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-6 bg-bg px-8 text-center">
      <div className="space-y-2">
        <p className="font-mono text-xs uppercase tracking-widest text-faint">Accepted</p>
        <h1 className="text-lg font-semibold text-text">{problemTitle}</h1>
        <p className="text-xs text-muted">Challenge complete.</p>
      </div>
      <div className="flex gap-3">
        <button
          type="button"
          onClick={() => window.location.reload()}
          className={[
            'rounded-sm border border-accent bg-accent px-4 py-2',
            'font-mono text-xs font-medium text-on-accent',
            'hover:opacity-90 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-accent',
            'transition-opacity',
          ].join(' ')}
        >
          Try another →
        </button>
        <button
          type="button"
          onClick={() => window.close()}
          className={[
            'rounded-sm border border-border px-4 py-2',
            'font-mono text-xs text-muted',
            'hover:border-border-strong hover:text-text focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-accent',
            'transition-colors',
          ].join(' ')}
        >
          Close
        </button>
      </div>
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

  // Resolved theme — 'dark' or 'light'. Derived from prefs.theme and OS setting.
  const [resolvedTheme, setResolvedTheme] = useState<'dark' | 'light'>('dark');

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

  // Streak — loaded from storage after mount.
  const [streak, setStreak] = useState(0);

  // Custom test state.
  const [customTestResult, setCustomTestResult] = useState<CustomTestStatus>({ status: 'idle' });

  // Per-session submission history (Submit clicks only). Persisted to storage
  // so history survives a page reload. Cleared on acceptance.
  const [submissions, setSubmissions] = useState<SubmissionRecord[]>([]);
  // Ref mirrors submissions so handlers can read the current list synchronously
  // without closures going stale, enabling direct persistence after each update.
  const submissionsRef = useRef<SubmissionRecord[]>([]);
  useEffect(() => {
    submissionsRef.current = submissions;
  }, [submissions]);

  // Externally-triggered editor content restore (from SubmissionsPanel "restore" action).
  // The `version` counter forces the effect to re-fire even for identical code strings.
  const [resetCode, setResetCode] = useState<{ content: string; version: number } | undefined>();
  const handleRestoreCode = useCallback((content: string) => {
    setResetCode((prev) => ({ content, version: (prev?.version ?? 0) + 1 }));
  }, []);

  // Problem panel width as a percentage of the two-column container.
  // Initialised from prefs once `pageState` transitions to 'ready'.
  const [panelPct, setPanelPct] = useState(DEFAULT_PREFERENCES.problemPanelWidthPct);

  // Fullscreen editor mode — hides the problem panel so the editor takes full width.
  const [isEditorFullscreen, setIsEditorFullscreen] = useState(false);
  const handleToggleFullscreen = useCallback(
    () => setIsEditorFullscreen((v) => !v),
    [],
  );

  // Ref for the two-column container — used by DraggableSplitter to compute
  // pointer positions as a fraction of the container width.
  const splitContainerRef = useRef<HTMLElement | null>(null);

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

      // Pick the user's preferred language if the problem supports it.
      // TypeScript is always available (uses JS starter). Python requires an
      // explicit starter in the problem definition.
      const preferred = prefs.preferredLanguage;
      const initialLanguage: SupportedLanguage =
        preferred === 'python' && problem.starterCode.python
          ? 'python'
          : preferred === 'typescript'
          ? 'typescript'
          : 'javascript';
      const initialStarter = starterCodeFor(problem, initialLanguage);

      // Restore any in-progress draft from a previous session.
      let restoreLanguage = initialLanguage;
      let restoreCode = initialStarter;
      try {
        const drafts = await getValue('draftCode');
        const draft = drafts[problem.id];
        if (draft && draft.code !== initialStarter) {
          restoreLanguage = draft.language;
          restoreCode = draft.code;
        }
      } catch {
        /* storage unavailable — proceed with fresh starter */
      }

      setLanguage(restoreLanguage);
      setCode(restoreCode);
      setSecondsLeft(prefs.challengeTimeLimitSec);
      setPanelPct(prefs.problemPanelWidthPct);
      setPageState({ status: 'ready', problem, prefs });
      setResolvedTheme(resolveTheme(prefs.theme));
      document.title = `${problem.title} — LeetLock`;

      // Restore persisted submission history for this problem — non-critical.
      void (async () => {
        try {
          const allHistory = await getValue('submissionHistory');
          const prior = allHistory[problem.id];
          if (prior && prior.length > 0 && !cancelled) {
            setSubmissions(prior);
          }
        } catch {
          /* storage unavailable */
        }
      })();

      // Load streak summary in the background — non-critical, fails silently.
      void (async () => {
        try {
          const summary = await getValue('streakSummary');
          if (!cancelled) setStreak(summary.current);
        } catch {
          /* storage unavailable */
        }
      })();

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
    if (prefs.theme !== 'system') return;
    const media = window.matchMedia('(prefers-color-scheme: dark)');
    const listener = () => setResolvedTheme(media.matches ? 'dark' : 'light');
    media.addEventListener('change', listener);
    return () => media.removeEventListener('change', listener);
  }, [pageState]);

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

    const totalTests = problem.visibleTests.length + problem.hiddenTests.length;
    const attemptNumber = attempts + 1;

    try {
      const result = await runTests({
        code,
        problem,
        language,
        tests: [...problem.visibleTests, ...problem.hiddenTests],
        timeoutMs: 6000,
      });
      setVerdict(result);

      // Record the submission.
      const outcomeMap: Partial<Record<typeof result.outcome, SubmissionRecord['outcome']>> = {
        accepted: 'accepted',
        'wrong-answer': 'wrong-answer',
        'runtime-error': 'runtime-error',
        timeout: 'timeout',
        'compile-error': 'runtime-error',
      };
      const newRecord: SubmissionRecord = {
        attempt: attemptNumber,
        timestamp: Date.now(),
        outcome: outcomeMap[result.outcome] ?? 'runtime-error',
        passCount: result.passed,
        totalTests: result.total,
        durationMs: result.totalDurationMs,
        code,
      };
      const updatedSubmissions = [...submissionsRef.current, newRecord];
      setSubmissions(updatedSubmissions);

      if (result.outcome === 'accepted') {
        // About to navigate back to the target — suppress the beforeunload prompt.
        isResolvingRef.current = true;
        // Clear the saved draft and submission history — problem is solved.
        try {
          await updateValue('draftCode', (drafts) => {
            const { [problem.id]: _, ...rest } = drafts;
            return rest;
          });
        } catch {
          /* storage unavailable */
        }
        try {
          await updateValue('submissionHistory', (history) => {
            const { [problem.id]: _, ...rest } = history;
            return rest;
          });
        } catch {
          /* storage unavailable */
        }
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

        // Brief pause so the user sees their "Accepted" verdict before navigating.
        await new Promise<void>((resolve) => setTimeout(resolve, 1200));

        // Redirect back to the original target.
        if (targetUrl.current) {
          window.location.href = targetUrl.current;
        } else {
          // No target (standalone/practice mode) — show a "try another" screen.
          setPageState({ status: 'solved-standalone', problemTitle: problem.title });
        }
      } else {
        // Failed submission — persist history and increment attempt counter.
        void (async () => {
          try {
            await updateValue('submissionHistory', (history) => ({
              ...history,
              [problem.id]: updatedSubmissions.slice(-MAX_HISTORY_PER_PROBLEM),
            }));
          } catch {
            /* storage unavailable */
          }
        })();
        const newAttempts = attempts + 1;
        setAttempts(newAttempts);

        if (newAttempts >= prefs.maxSubmissionAttempts) {
          await handleFail('attempts-exhausted', prefs);
        }
      }
    } catch (err) {
      const errorRecord: SubmissionRecord = {
        attempt: attemptNumber,
        timestamp: Date.now(),
        outcome: 'runtime-error',
        passCount: 0,
        totalTests,
        code,
      };
      const updatedOnError = [...submissionsRef.current, errorRecord];
      setSubmissions(updatedOnError);
      setVerdict({
        outcome: 'compile-error',
        passed: 0,
        total: totalTests,
        verdicts: [],
        message: err instanceof Error ? err.message : 'The code sandbox failed to load.',
      });
      void (async () => {
        try {
          await updateValue('submissionHistory', (history) => ({
            ...history,
            [problem.id]: updatedOnError.slice(-MAX_HISTORY_PER_PROBLEM),
          }));
        } catch {
          /* storage unavailable */
        }
      })();
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
      setLanguage(next);
      setCode(starterCodeFor(problem, next));
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
  // Draft code auto-save (800 ms debounce; prunes entries older than 7 days)
  // -------------------------------------------------------------------------

  useEffect(() => {
    if (pageState.status !== 'ready') return;
    const { problem } = pageState;
    const starter = starterCodeFor(problem, language);
    // Don't persist the unmodified starter — nothing to restore.
    if (code === starter) return;

    const id = setTimeout(() => {
      void (async () => {
        try {
          await updateValue('draftCode', (drafts) => {
            const cutoff = Date.now() - 7 * 24 * 60 * 60 * 1000;
            const pruned = Object.fromEntries(
              Object.entries(drafts).filter(([, e]) => e.savedAt >= cutoff),
            );
            return { ...pruned, [problem.id]: { code, language, savedAt: Date.now() } };
          });
        } catch {
          /* storage unavailable — draft lost silently */
        }
      })();
    }, 800);
    return () => clearTimeout(id);
  }, [code, language, pageState]);

  // -------------------------------------------------------------------------
  // Custom test handler
  // -------------------------------------------------------------------------

  const handleCustomRun = useCallback(
    async (args: unknown[]) => {
      if (pageState.status !== 'ready') return;
      setCustomTestResult({ status: 'running' });
      const result = await runCustomArgs({
        code,
        functionName: pageState.problem.functionName,
        args,
        language,
        timeoutMs: 4000,
      });
      setCustomTestResult(result);
    },
    [pageState, code, language],
  );

  // -------------------------------------------------------------------------
  // Splitter drag handlers
  // -------------------------------------------------------------------------

  const handleSplitterDrag = useCallback((newPct: number) => {
    setPanelPct(newPct);
  }, []);

  const handleSplitterDragEnd = useCallback((finalPct: number) => {
    setPanelPct(finalPct);
    void (async () => {
      try {
        await updateValue('userPreferences', (curr) => ({
          ...curr,
          problemPanelWidthPct: finalPct,
        }));
      } catch {
        /* storage unavailable */
      }
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

  if (pageState.status === 'solved-standalone') {
    return <SolvedStandaloneScreen problemTitle={pageState.problemTitle} />;
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
       *   - Left (problem panel): dynamic width set via inline style (desktop).
       *   - A 4px draggable splitter bar.
       *   - Right (editor panel): flex-1, takes the remaining space.
       * Stacks vertically below the `lg` breakpoint.
       */}
      <main
        ref={splitContainerRef}
        className="min-h-0 flex-1 flex flex-col lg:flex-row overflow-hidden"
        aria-label="Challenge workspace"
      >
        {/* Problem panel — scrollable independently.
            Hidden in fullscreen editor mode. On mobile (flex-col), !w-full
            overrides the inline percentage style. On desktop (flex-row), the
            inline width drives the draggable split. */}
        <div
          className={`flex flex-col overflow-hidden border-border lg:border-r max-lg:border-b max-lg:max-h-[45vh] max-lg:!w-full${isEditorFullscreen ? ' hidden' : ''}`}
          style={{ width: `${panelPct}%` }}
        >
          <ProblemPanel
            problem={problem}
            hintCostLabel="1 min"
            onHintRevealed={() => setSecondsLeft((s) => Math.max(0, s - HINT_COST_SECONDS))}
          />
        </div>

        {/* Drag handle — only visible on desktop (lg+) and not in fullscreen */}
        {!isEditorFullscreen && (
          <DraggableSplitter
            onDrag={handleSplitterDrag}
            onDragEnd={handleSplitterDragEnd}
            containerRef={splitContainerRef}
            currentPct={panelPct}
          />
        )}

        {/* Editor panel — fixed, no scroll on the outer shell */}
        <div className="flex min-h-0 flex-1 flex-col overflow-hidden">
          <EditorPanel
            starterCode={starterCodeFor(problem, language)}
            language={language}
            availableLanguages={availableLanguagesFor(problem)}
            onLanguageChange={handleLanguageChange}
            editorKeymap={prefs.editorKeymap}
            fontSize={prefs.editorFontSize}
            indentSize={prefs.editorIndentSize}
            onChange={setCode}
            onRun={() => void handleRun()}
            onSubmit={() => void handleSubmit()}
            onGiveUp={prefs.allowGiveUp ? () => void handleGiveUp() : undefined}
            isRunning={isRunning}
            verdict={verdict}
            verdictMode={verdictMode}
            showGiveUp={prefs.allowGiveUp}
            attemptsRemaining={attemptsRemaining}
            isFullscreen={isEditorFullscreen}
            onToggleFullscreen={handleToggleFullscreen}
            resolvedTheme={resolvedTheme}
            resetCode={resetCode}
          />
          {/* Custom test drawer — collapses below the verdict/action bar */}
          <CustomTestPanel
            params={problem.params}
            onRun={handleCustomRun}
            result={customTestResult}
          />
          {/* Submission history — appears after first submit, collapsible */}
          <SubmissionsPanel submissions={submissions} onRestore={handleRestoreCode} />
        </div>
      </main>
    </div>
  );
}
