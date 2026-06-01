import { useEffect, useRef, useState, useCallback, type RefObject } from 'react';
import type { JudgeResult, TestVerdict } from '../../../lib/judge';

const TRUNCATE_AT = 160;

/** Truncates a string for compact display. */
function truncate(s: string): { text: string; truncated: boolean } {
  if (s.length <= TRUNCATE_AT) return { text: s, truncated: false };
  return { text: s.slice(0, TRUNCATE_AT) + '…', truncated: true };
}

/** One-line copy button using the Clipboard API. */
function CopyButton({ value }: { value: string }) {
  const [copied, setCopied] = useState(false);
  const handleCopy = useCallback(() => {
    void navigator.clipboard.writeText(value).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    });
  }, [value]);
  return (
    <button
      type="button"
      onClick={handleCopy}
      aria-label="Copy to clipboard"
      className="ml-1 text-faint hover:text-muted transition-colors align-middle focus:outline-none focus-visible:ring-1 focus-visible:ring-accent focus-visible:rounded-sm"
      style={{ fontSize: '9px', letterSpacing: '0.05em' }}
    >
      {copied ? '✓' : 'copy'}
    </button>
  );
}

/** Expandable value display with truncation. */
function ValueDisplay({ value }: { value: string }) {
  const { text, truncated } = truncate(value);
  const [expanded, setExpanded] = useState(false);
  if (!truncated) {
    return <span className="text-muted break-all">{value}</span>;
  }
  return (
    <>
      <span className="text-muted break-all">{expanded ? value : text}</span>
      <button
        type="button"
        onClick={() => setExpanded((v) => !v)}
        aria-label={expanded ? 'Show less of this value' : `Show ${value.length - TRUNCATE_AT} more characters`}
        aria-expanded={expanded}
        className="ml-1 text-faint hover:text-muted transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-accent focus-visible:rounded-sm"
        style={{ fontSize: '9px' }}
      >
        {expanded ? 'less' : `+${value.length - TRUNCATE_AT} chars`}
      </button>
    </>
  );
}

/**
 * Shows a concise diff hint when expected and actual are both arrays.
 * Highlights the first differing index so the user can quickly spot the
 * off-by-one / wrong-element error without mentally comparing long arrays.
 */
function ArrayDiffHint({ expected, actual }: { expected: unknown; actual: unknown }) {
  if (!Array.isArray(expected) || !Array.isArray(actual)) return null;

  const diffIndices: number[] = [];
  const maxLen = Math.max(expected.length, actual.length);
  for (let i = 0; i < maxLen; i++) {
    try {
      if (JSON.stringify(expected[i]) !== JSON.stringify(actual[i])) {
        diffIndices.push(i);
      }
    } catch {
      diffIndices.push(i);
    }
  }

  if (diffIndices.length === 0) return null;

  const lenDiff = actual.length - expected.length;
  const lenNote =
    lenDiff !== 0
      ? ` · length ${actual.length} vs ${expected.length}`
      : '';

  const label =
    diffIndices.length === 1
      ? `diff at index ${diffIndices[0]}${lenNote}`
      : `${diffIndices.length} diffs (first: index ${diffIndices[0]})${lenNote}`;

  return (
    <div className="pl-4 text-[10px] text-faint tabular-nums" aria-label={`Array diff: ${label}`}>
      ↳ {label}
    </div>
  );
}

/**
 * Computes a human-readable string diff hint for two string values.
 * Returns null when no hint is applicable (not strings, or equal).
 * Exported for unit testing; rendering is separate.
 */
export function computeStringDiff(
  expected: unknown,
  actual: unknown,
): { type: 'length-only'; label: string } | { type: 'char-diff'; charIndex: number; expectedChar: string; actualChar: string; lenNote: string } | null {
  if (typeof expected !== 'string' || typeof actual !== 'string') return null;
  if (expected === actual) return null;

  const minLen = Math.min(expected.length, actual.length);
  let firstDiff = -1;
  for (let i = 0; i < minLen; i++) {
    if (expected[i] !== actual[i]) {
      firstDiff = i;
      break;
    }
  }

  const lenNote =
    expected.length !== actual.length
      ? ` · length ${actual.length} vs ${expected.length}`
      : '';

  if (firstDiff === -1) {
    // Strings agree up to the shorter one's end; only length differs.
    const diff = Math.abs(actual.length - expected.length);
    const label =
      actual.length > expected.length
        ? `actual is ${diff} char${diff !== 1 ? 's' : ''} longer`
        : `actual is ${diff} char${diff !== 1 ? 's' : ''} shorter`;
    return { type: 'length-only', label };
  }

  return {
    type: 'char-diff',
    charIndex: firstDiff,
    expectedChar: expected[firstDiff] ?? '',
    actualChar: actual[firstDiff] ?? '',
    lenNote,
  };
}

/**
 * Returns a human-readable "off by N" description for two numeric values.
 * Returns null when values are equal, non-finite, or not numbers.
 * Exported for unit testing.
 */
export function computeNumberDiff(expected: unknown, actual: unknown): string | null {
  if (typeof expected !== 'number' || typeof actual !== 'number') return null;
  if (!isFinite(expected) || !isFinite(actual) || expected === actual) return null;
  const diff = actual - expected;
  const sign = diff > 0 ? '+' : '';
  return `off by ${sign}${diff}`;
}

/**
 * Shows a diff hint when expected and actual are both finite numbers.
 * Reports "off by N" so the user can spot off-by-one or scaling errors.
 */
function NumberDiffHint({ expected, actual }: { expected: unknown; actual: unknown }) {
  const label = computeNumberDiff(expected, actual);
  if (!label) return null;
  return (
    <div className="pl-4 text-[10px] text-faint tabular-nums" aria-label={`Number diff: ${label}`}>
      ↳ {label}
    </div>
  );
}

/**
 * Shows a concise diff hint when expected and actual are both strings.
 * Highlights the first diverging character position for quick debugging.
 */
function StringDiffHint({ expected, actual }: { expected: unknown; actual: unknown }) {
  const diff = computeStringDiff(expected, actual);
  if (!diff) return null;

  if (diff.type === 'length-only') {
    return (
      <div className="pl-4 text-[10px] text-faint tabular-nums" aria-label={`String diff: ${diff.label}`}>
        ↳ {diff.label}
      </div>
    );
  }

  const label = `first diff at char ${diff.charIndex}: expected '${diff.expectedChar}' · got '${diff.actualChar}'${diff.lenNote}`;
  return (
    <div className="pl-4 text-[10px] text-faint tabular-nums" aria-label={`String diff: ${label}`}>
      ↳ char {diff.charIndex}: expected{' '}
      <span className="text-muted">'{diff.expectedChar}'</span>
      {' · '}got{' '}
      <span className="text-muted">'{diff.actualChar}'</span>
      {diff.lenNote}
    </div>
  );
}

/**
 * Compact dot matrix showing pass/fail/error status for all test cases at a glance.
 * Only rendered when there are multiple verdicts. Each dot is a button — clicking
 * a dot scrolls the corresponding TestResultCard into view.
 *
 * Dot states:
 *   pass  → filled accent square (white on dark, black on light)
 *   fail  → outlined square (border only)
 *   error → filled muted square
 */
function TestDotMatrix({ verdicts, scrollContainerRef }: { verdicts: readonly TestVerdict[]; scrollContainerRef: RefObject<HTMLDivElement | null> }) {
  if (verdicts.length === 0) return null;
  const passed = verdicts.filter(v => v.status === 'pass').length;
  const failed = verdicts.length - passed;
  return (
    <div
      className="flex flex-wrap gap-1 pb-2"
      role="group"
      aria-label={`Test results: ${passed} passed, ${failed} failed. Click a dot to jump to that test.`}
    >
      {verdicts.map((v) => (
        <button
          key={v.index}
          type="button"
          title={`Test ${v.index + 1}: ${v.status}`}
          aria-label={`Jump to Test ${v.index + 1} (${v.status})`}
          onClick={() => {
            const container = scrollContainerRef.current;
            const card = document.getElementById(`test-result-card-${v.index}`);
            if (!container || !card) return;
            container.scrollTo({ top: card.offsetTop - container.offsetTop - 8, behavior: 'smooth' });
          }}
          className={[
            'w-2.5 h-2.5 rounded-sm flex-shrink-0 cursor-pointer transition-opacity hover:opacity-70 focus:outline-none focus:ring-1 focus:ring-accent focus:ring-offset-1',
            v.status === 'pass'
              ? 'bg-accent'
              : v.status === 'error'
              ? 'bg-muted'
              : 'border border-text',
          ].join(' ')}
        />
      ))}
    </div>
  );
}

/** Terminal entry types for the output log. */
type TerminalEntry =
  | { type: 'system'; text: string }
  | { type: 'stdout'; text: string }
  | { type: 'stderr'; text: string }
  | { type: 'pass'; testIndex: number; input: string; output: string; durationMs?: number }
  | { type: 'fail'; testIndex: number; input: string; expected: string; actual: string; rawExpected: unknown; rawActual: unknown }
  | { type: 'error'; testIndex: number; input: string; error: string }
  | { type: 'summary'; outcome: string; passed: number; total: number; durationMs?: number; mode: 'run' | 'submit' }
  | { type: 'run-separator'; runNumber: number };

function displayValue(v: unknown): string {
  if (v === undefined) return 'undefined';
  if (v === null) return 'null';
  try {
    return JSON.stringify(v);
  } catch {
    return String(v);
  }
}

/** Builds terminal entries from a JudgeResult. */
function buildEntries(result: JudgeResult, mode: 'run' | 'submit'): TerminalEntry[] {
  const entries: TerminalEntry[] = [];
  const timestamp = new Date().toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  });

  entries.push({
    type: 'system',
    text: `[${timestamp}] ${mode === 'submit' ? 'Submitting' : 'Running'} ${result.total} test case${result.total !== 1 ? 's' : ''}...`,
  });

  // Global failures (compile error, timeout with no per-test results)
  if (result.verdicts.length === 0 && result.message) {
    entries.push({ type: 'stderr', text: result.message });
    entries.push({
      type: 'summary',
      outcome: result.outcome,
      passed: result.passed,
      total: result.total,
      durationMs: result.totalDurationMs,
      mode,
    });
    return entries;
  }

  for (const verdict of result.verdicts) {
    // Add any console.log output first
    if (verdict.logs.length > 0) {
      for (const log of verdict.logs) {
        entries.push({ type: 'stdout', text: log });
      }
    }

    if (verdict.status === 'pass') {
      entries.push({
        type: 'pass',
        testIndex: verdict.index,
        input: verdict.input,
        output: displayValue(verdict.output),
        durationMs: verdict.durationMs,
      });
    } else if (verdict.status === 'fail') {
      entries.push({
        type: 'fail',
        testIndex: verdict.index,
        input: verdict.input,
        expected: displayValue(verdict.expected),
        actual: displayValue(verdict.actual),
        rawExpected: verdict.expected,
        rawActual: verdict.actual,
      });
    } else {
      entries.push({
        type: 'error',
        testIndex: verdict.index,
        input: verdict.input,
        error: verdict.error,
      });
    }
  }

  entries.push({ type: 'system', text: '' });
  entries.push({
    type: 'summary',
    outcome: result.outcome,
    passed: result.passed,
    total: result.total,
    durationMs: result.totalDurationMs,
    mode,
  });

  return entries;
}

const OUTCOME_LABELS: Record<string, string> = {
  accepted: 'ACCEPTED',
  'wrong-answer': 'WRONG ANSWER',
  'runtime-error': 'RUNTIME ERROR',
  timeout: 'TIME LIMIT EXCEEDED',
  'compile-error': 'COMPILE ERROR',
};

/** Returns the human-readable outcome label, accounting for run vs submit context. */
function outcomeLabel(outcome: string, mode: 'run' | 'submit'): string {
  if (outcome === 'accepted' && mode === 'run') return 'TESTS PASSED';
  return OUTCOME_LABELS[outcome] ?? outcome.toUpperCase();
}

interface TerminalPanelProps {
  /** null = no run yet; undefined = running in progress */
  result: JudgeResult | null | undefined;
  mode: 'run' | 'submit';
  /** Whether the panel body is collapsed to just the tab bar. */
  collapsed?: boolean;
  /** Called when the user clicks the collapse/expand toggle. */
  onToggleCollapsed?: () => void;
  /** Height of the terminal body in px (only applies when not collapsed). */
  bodyHeight?: number;
}

function TerminalEntry({ entry }: { entry: TerminalEntry }) {
  switch (entry.type) {
    case 'run-separator':
      return (
        <div className="flex items-center gap-2 py-1 select-none" aria-hidden="true">
          <div className="flex-1 h-px bg-border" />
          <span className="font-mono text-[9px] uppercase tracking-widest text-faint">
            Run {entry.runNumber}
          </span>
          <div className="flex-1 h-px bg-border" />
        </div>
      );
    case 'system':
      return <div className="text-faint select-text">{entry.text}</div>;
    case 'stdout':
      return (
        <div className="text-muted select-text pl-2 border-l-2 border-border">
          <span className="text-faint mr-2">stdout</span>
          {entry.text}
        </div>
      );
    case 'stderr':
      return (
        <div className="text-text select-text pl-2 border-l-2 border-border-strong">
          <span className="text-faint mr-2">stderr</span>
          {entry.text}
        </div>
      );
    case 'pass':
      return (
        <div className="select-text">
          <span className="text-accent font-semibold">PASS</span>
          <span className="text-faint ml-2">Test {entry.testIndex + 1}</span>
          {entry.input && <span className="text-muted ml-2">({entry.input})</span>}
          {entry.durationMs !== undefined && (
            <span className="text-faint ml-2 tabular-nums">{entry.durationMs}ms</span>
          )}
        </div>
      );
    case 'fail':
      return (
        <div className="select-text space-y-0.5">
          <div>
            <span className="text-text font-semibold">FAIL</span>
            <span className="text-faint ml-2">Test {entry.testIndex + 1}</span>
            {entry.input && <span className="text-muted ml-2">({truncate(entry.input).text})</span>}
          </div>
          <div className="pl-4 flex items-start gap-1">
            <span className="text-faint shrink-0">Expected:</span>
            <ValueDisplay value={entry.expected} />
            <CopyButton value={entry.expected} />
          </div>
          <div className="pl-4 flex items-start gap-1">
            <span className="text-faint shrink-0">Actual:</span>
            <ValueDisplay value={entry.actual} />
            <CopyButton value={entry.actual} />
          </div>
          <NumberDiffHint expected={entry.rawExpected} actual={entry.rawActual} />
          <ArrayDiffHint expected={entry.rawExpected} actual={entry.rawActual} />
          <StringDiffHint expected={entry.rawExpected} actual={entry.rawActual} />
        </div>
      );
    case 'error':
      return (
        <div className="select-text space-y-0.5">
          <div>
            <span className="text-text font-semibold">ERROR</span>
            <span className="text-faint ml-2">Test {entry.testIndex + 1}</span>
          </div>
          <div className="pl-4 flex items-start gap-1">
            <span className="text-text break-all">{entry.error}</span>
            <CopyButton value={entry.error} />
          </div>
        </div>
      );
    case 'summary': {
      const isAccepted = entry.outcome === 'accepted';
      return (
        <div className={`py-1 ${isAccepted ? 'text-accent font-bold' : 'text-text font-semibold'}`}>
          {outcomeLabel(entry.outcome, entry.mode)}
          <span className="text-muted font-normal ml-3">
            {entry.passed}/{entry.total} passed
          </span>
          {entry.durationMs !== undefined && (
            <span className="text-faint font-normal ml-2 tabular-nums">{entry.durationMs}ms</span>
          )}
        </div>
      );
    }
  }
}

/**
 * Compact strip showing pass count for each run in this session.
 * Only rendered when there are 2+ completed runs.
 * Example: "Run 1  2/5 · Run 2  4/5 · Run 3  5/5"
 */
function RunHistoryBar({ history }: { history: TerminalEntry[][] }) {
  // Extract the summary entry from each run (last 'summary' in the run's entries).
  const summaries = history
    .map((run) => run.slice().reverse().find((e) => e.type === 'summary'))
    .filter((e): e is Extract<TerminalEntry, { type: 'summary' }> => e !== undefined && e.type === 'summary');

  if (summaries.length < 2) return null;

  return (
    <div
      className="flex items-center gap-2 pb-2 mb-1 border-b border-border overflow-x-auto flex-nowrap"
      aria-label={`Run history: ${summaries.length} runs`}
    >
      <span className="shrink-0 font-mono text-[9px] uppercase tracking-wider text-faint">history</span>
      {summaries.map((s, i) => (
        <span key={i} className="shrink-0 flex items-center gap-1">
          {i > 0 && <span className="text-border-strong" aria-hidden="true">→</span>}
          <span
            className={`font-mono text-[10px] tabular-nums ${
              s.outcome === 'accepted' ? 'text-accent' : 'text-muted'
            }`}
            aria-label={`Run ${i + 1}: ${s.passed} of ${s.total} passed`}
          >
            {s.passed}/{s.total}
          </span>
        </span>
      ))}
    </div>
  );
}

/**
 * Terminal-style output panel that replaces the old VerdictPanel.
 * Shows console output, test results, and execution info in a scrollable
 * terminal with a monospace font, resembling a real terminal/console.
 */
const TERMINAL_TABS: ReadonlyArray<'output' | 'testcases'> = ['output', 'testcases'];

export function TerminalPanel({ result, mode, collapsed = false, onToggleCollapsed, bodyHeight }: TerminalPanelProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const tabListRef = useRef<HTMLDivElement>(null);
  const [history, setHistory] = useState<TerminalEntry[][]>([]);
  const [activeTab, setActiveTab] = useState<'output' | 'testcases'>('output');
  const prevResultRef = useRef<JudgeResult | null | undefined>(null);

  const handleTabKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key !== 'ArrowRight' && e.key !== 'ArrowDown' && e.key !== 'ArrowLeft' && e.key !== 'ArrowUp') return;
      e.preventDefault();
      const idx = TERMINAL_TABS.indexOf(activeTab);
      const nextIdx =
        e.key === 'ArrowRight' || e.key === 'ArrowDown'
          ? (idx + 1) % TERMINAL_TABS.length
          : (idx - 1 + TERMINAL_TABS.length) % TERMINAL_TABS.length;
      setActiveTab(TERMINAL_TABS[nextIdx]!);
      const tabList = tabListRef.current;
      if (tabList) {
        const buttons = tabList.querySelectorAll<HTMLButtonElement>('button[role="tab"]');
        buttons[nextIdx]?.focus();
      }
    },
    [activeTab],
  );

  // "Failures only" filter in the Test Results tab.
  const [showFailuresOnly, setShowFailuresOnly] = useState(false);

  // Track whether the last switch to testcases was due to a failure
  // so we can scroll to top to show the summary and first failure.
  const switchedToTestcasesRef = useRef(false);

  // When a new result arrives, build entries and add to history.
  useEffect(() => {
    if (result && result !== prevResultRef.current && result !== undefined) {
      const entries = buildEntries(result, mode);
      setHistory((prev) => {
        // Insert a run separator before every run after the first
        const runNumber = prev.length + 1;
        const separator: TerminalEntry = { type: 'run-separator', runNumber };
        return prev.length === 0 ? [entries] : [...prev, [separator, ...entries]];
      });
      prevResultRef.current = result;
      // Reset filter so stale "failures only" doesn't carry over to a new run.
      setShowFailuresOnly(false);
      // Auto-expand the panel so the user sees the result immediately.
      if (collapsed) {
        onToggleCollapsed?.();
      }
      // Auto-switch to test results on any failure so the user immediately
      // sees the first failing test expanded.
      if (result.outcome !== 'accepted' && result.verdicts.length > 0) {
        setActiveTab('testcases');
        switchedToTestcasesRef.current = true;
      }
    }
  }, [result, mode, collapsed, onToggleCollapsed]);

  // Auto-scroll: scroll to bottom in terminal output, scroll to top in testcases
  // (so users see the summary + first failure, not the last test).
  useEffect(() => {
    if (!scrollRef.current) return;
    if (activeTab === 'testcases' && switchedToTestcasesRef.current) {
      scrollRef.current.scrollTop = 0;
      switchedToTestcasesRef.current = false;
    } else if (activeTab === 'output') {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history, result, activeTab]);

  const handleClear = useCallback(() => {
    setHistory([]);
    prevResultRef.current = null;
  }, []);

  const [copied, setCopied] = useState(false);
  const handleCopyOutput = useCallback(() => {
    const all = history.flat();
    if (all.length === 0) return;
    const lines = all.map((e) => {
      switch (e.type) {
        case 'system': return e.text;
        case 'stdout': return `stdout: ${e.text}`;
        case 'stderr': return `stderr: ${e.text}`;
        case 'pass':   return `PASS  Test ${e.testIndex + 1}${e.input ? ` (${e.input})` : ''}${e.durationMs !== undefined ? ` ${e.durationMs}ms` : ''}`;
        case 'fail':
          return [
            `FAIL  Test ${e.testIndex + 1}${e.input ? ` (${e.input})` : ''}`,
            `  Expected: ${e.expected}`,
            `  Actual:   ${e.actual}`,
          ].join('\n');
        case 'error':
          return [`ERROR Test ${e.testIndex + 1}`, `  ${e.error}`].join('\n');
        case 'summary': {
          const label = e.outcome === 'accepted' && e.mode === 'run' ? 'TESTS PASSED' : (OUTCOME_LABELS[e.outcome] ?? e.outcome.toUpperCase());
          return `${label}  ${e.passed}/${e.total} passed${e.durationMs !== undefined ? ` ${e.durationMs}ms` : ''}`;
        }
        case 'run-separator':
          return `\n──── Run ${e.runNumber} ────`;
      }
    });
    void navigator.clipboard.writeText(lines.join('\n')).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    });
  }, [history]);

  const allEntries = history.flat();

  // Build a screen-reader announcement whenever a new verdict arrives.
  const verdictAnnouncement =
    result != null && result !== undefined
      ? `${outcomeLabel(result.outcome, mode)}: ${result.passed} of ${result.total} tests passed.`
      : result === undefined
        ? 'Running tests…'
        : null;

  return (
    <div className="flex flex-col" role="region" aria-label="Terminal output">
      {/* Screen-reader live region — announces verdict changes without disrupting visual flow. */}
      <div aria-live="polite" aria-atomic="true" className="sr-only">
        {verdictAnnouncement}
      </div>
      {/* Tab bar */}
      <div className="flex items-center justify-between border-b border-border bg-surface">
        <div ref={tabListRef} role="tablist" aria-label="Terminal panels" className="flex">
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === 'output'}
            aria-controls="terminal-panel-output"
            id="terminal-tab-output"
            tabIndex={activeTab === 'output' ? 0 : -1}
            onClick={() => setActiveTab('output')}
            onKeyDown={handleTabKeyDown}
            className={[
              'px-3 py-1.5 font-mono text-[10px] uppercase tracking-widest transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-accent',
              activeTab === 'output'
                ? 'text-text border-b-2 border-accent'
                : 'text-faint hover:text-muted',
            ].join(' ')}
          >
            Terminal
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === 'testcases'}
            aria-controls="terminal-panel-testcases"
            id="terminal-tab-testcases"
            tabIndex={activeTab === 'testcases' ? 0 : -1}
            onClick={() => setActiveTab('testcases')}
            onKeyDown={handleTabKeyDown}
            className={[
              'px-3 py-1.5 font-mono text-[10px] uppercase tracking-widest transition-colors flex items-center gap-1.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-accent',
              activeTab === 'testcases'
                ? 'text-text border-b-2 border-accent'
                : 'text-faint hover:text-muted',
            ].join(' ')}
          >
            Test Results
            {/* Count badge: shows X/Y when a result exists; animated dots while running */}
            {result === undefined ? (
              <span className="tabular-nums motion-safe:animate-pulse" aria-hidden="true">···</span>
            ) : result != null ? (
              <span
                className={`tabular-nums ${result.outcome === 'accepted' ? 'text-accent' : ''}`}
                aria-label={`${result.passed} of ${result.total} passed`}
              >
                {result.passed}/{result.total}
              </span>
            ) : null}
          </button>
        </div>
        <div className="flex items-center gap-0.5 mr-1">
          {allEntries.length > 0 && (
            <button
              type="button"
              onClick={handleCopyOutput}
              className="px-2 py-1 font-mono text-[9px] uppercase tracking-wider text-faint hover:text-muted transition-colors focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-accent"
              title="Copy terminal output"
              aria-label="Copy terminal output to clipboard"
            >
              {copied ? '✓' : 'copy'}
            </button>
          )}
          <button
            type="button"
            onClick={handleClear}
            className="px-2 py-1 font-mono text-[9px] uppercase tracking-wider text-faint hover:text-muted transition-colors focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-accent"
            title="Clear terminal"
            aria-label="Clear terminal output"
          >
            clear
          </button>
          {onToggleCollapsed && (
            <button
              type="button"
              onClick={onToggleCollapsed}
              aria-label={collapsed ? 'Expand terminal panel' : 'Collapse terminal panel'}
              aria-pressed={collapsed}
              title={collapsed ? 'Expand terminal' : 'Collapse terminal'}
              className="px-1.5 py-1 font-mono text-[10px] text-faint hover:text-muted transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-accent"
            >
              {collapsed ? '▲' : '▼'}
            </button>
          )}
        </div>
      </div>

      {/* Terminal body — hidden when collapsed */}
      <div
        ref={scrollRef}
        className="overflow-y-auto bg-bg font-mono text-xs leading-relaxed"
        style={collapsed ? { display: 'none' } : { height: bodyHeight ? `${bodyHeight}px` : undefined, minHeight: '80px', maxHeight: bodyHeight ? undefined : '280px' }}
        aria-hidden={collapsed}
      >
        <div
          id="terminal-panel-output"
          role="tabpanel"
          aria-labelledby="terminal-tab-output"
          hidden={activeTab !== 'output'}
          className="p-3 space-y-1"
        >
          {/* Running indicator */}
          {result === undefined && (
            <div role="status" className="text-faint motion-safe:animate-pulse">
              <span className="mr-1">$</span> Running...
            </div>
          )}

          {/* Empty state */}
          {allEntries.length === 0 && result !== undefined && (
            <div className="text-faint">
              <span className="mr-1">$</span> Run your code to see output here
            </div>
          )}

          {/* History entries */}
          {allEntries.map((entry, i) => (
            <TerminalEntry key={i} entry={entry} />
          ))}
        </div>

        <div
          id="terminal-panel-testcases"
          role="tabpanel"
          aria-labelledby="terminal-tab-testcases"
          hidden={activeTab !== 'testcases'}
          className="p-3 space-y-2"
        >
          {result === undefined && (
            <div role="status" aria-live="polite" className="text-faint motion-safe:animate-pulse font-mono text-xs">Running tests...</div>
          )}
          {result === null && (
            <div className="text-faint font-mono text-xs">
              No test results yet. Click Run or Submit.
            </div>
          )}
          {result && result.verdicts.length > 0 && (
            <>
              {/* Run history — compact pass-count progression across all runs */}
              <RunHistoryBar history={history} />

              {/* Dot matrix — quick visual overview of pass/fail pattern */}
              <TestDotMatrix verdicts={result.verdicts} scrollContainerRef={scrollRef} />

              {/* Summary */}
              <div className="flex items-center gap-3 pb-2 border-b border-border">
                <span
                  className={`font-mono text-xs font-semibold uppercase ${
                    result.outcome === 'accepted' ? 'text-accent' : 'text-text'
                  }`}
                >
                  {outcomeLabel(result.outcome, mode)}
                </span>
                <span className="font-mono text-xs text-muted">
                  {result.passed}/{result.total} passed
                </span>
                {result.totalDurationMs !== undefined && (
                  <span className="font-mono text-xs text-faint tabular-nums">
                    {result.totalDurationMs}ms
                  </span>
                )}
                {result.outcome === 'accepted' && mode === 'run' ? (
                  <span className="font-mono text-[10px] text-faint ml-auto">
                    submit to run all tests
                  </span>
                ) : result.outcome !== 'accepted' && result.passed < result.total ? (
                  <button
                    type="button"
                    onClick={() => setShowFailuresOnly((v) => !v)}
                    aria-pressed={showFailuresOnly}
                    className={[
                      'ml-auto font-mono text-[9px] uppercase tracking-wider px-1.5 py-0.5 rounded border transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-accent',
                      showFailuresOnly
                        ? 'border-text text-text bg-surface-2'
                        : 'border-border text-faint hover:text-muted hover:border-muted',
                    ].join(' ')}
                  >
                    {showFailuresOnly ? 'show all' : 'failures only'}
                  </button>
                ) : null}
              </div>

              {/* Individual test results — key includes passed count so cards
                  reset their expand state when a new result arrives.
                  In failures-only mode all non-pass cards start expanded. */}
              {(() => {
                const filtered = showFailuresOnly
                  ? result.verdicts.filter((v) => v.status !== 'pass')
                  : result.verdicts;
                const firstFailIdx = showFailuresOnly
                  ? -1  // all failures auto-expand in filter mode
                  : result.verdicts.findIndex((v) => v.status !== 'pass');
                return filtered.map((verdict, i) => (
                  <TestResultCard
                    key={`${result.passed}-${verdict.index}-${showFailuresOnly ? 'f' : 'a'}`}
                    verdict={verdict}
                    autoExpand={showFailuresOnly ? verdict.status !== 'pass' : i === firstFailIdx}
                  />
                ));
              })()}
            </>
          )}
          {result && result.verdicts.length === 0 && result.message && (
            <div className="space-y-2">
              <div className="font-mono text-xs font-semibold text-text uppercase">
                {outcomeLabel(result.outcome, mode)}
              </div>
              <pre className="font-mono text-xs text-muted whitespace-pre-wrap">
                {result.message}
              </pre>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

/** Compact test result card for the Test Results tab. */
function TestResultCard({ verdict, autoExpand }: { verdict: TestVerdict; autoExpand?: boolean }) {
  const [expanded, setExpanded] = useState(autoExpand ?? false);
  const label = `Test ${verdict.index + 1}`;

  return (
    <div id={`test-result-card-${verdict.index}`} className="rounded border border-border bg-surface-2">
      <button
        type="button"
        onClick={() => setExpanded((e) => !e)}
        className="flex w-full items-center gap-2 px-3 py-2 text-left focus:outline-none focus-visible:ring-1 focus-visible:ring-inset focus-visible:ring-accent"
        aria-expanded={expanded}
        aria-label={`${label} — ${verdict.status.toUpperCase()}${expanded ? ', collapse details' : ', expand details'}`}
      >
        <span
          className={`font-mono text-[10px] font-semibold uppercase ${
            verdict.status === 'pass' ? 'text-accent' : 'text-text'
          }`}
        >
          {verdict.status === 'pass' ? 'PASS' : verdict.status === 'fail' ? 'FAIL' : 'ERROR'}
        </span>
        <span className="font-mono text-[10px] text-faint">{label}</span>
        {(verdict.status === 'pass' || verdict.status === 'fail') && verdict.durationMs !== undefined && (
          <span className="font-mono text-[10px] text-faint tabular-nums ml-2">
            {verdict.durationMs}ms
          </span>
        )}
        <span className="ml-auto font-mono text-[10px] text-faint" aria-hidden="true">
          {expanded ? '▲' : '▼'}
        </span>
      </button>

      {expanded && (
        <div className="border-t border-border px-3 py-2 space-y-1 font-mono text-xs">
          {verdict.input && (
            <div className="flex items-start gap-1">
              <span className="text-faint shrink-0">Input: </span>
              <span className="text-muted break-all">{verdict.input}</span>
              <CopyButton value={verdict.input} />
            </div>
          )}
          {verdict.status === 'pass' && (
            <div className="flex items-start gap-1">
              <span className="text-faint shrink-0">Output:</span>
              <ValueDisplay value={displayValue(verdict.output)} />
              <CopyButton value={displayValue(verdict.output)} />
            </div>
          )}
          {verdict.status === 'fail' && (
            <>
              <div className="flex items-start gap-1">
                <span className="text-faint shrink-0">Expected:</span>
                <ValueDisplay value={displayValue(verdict.expected)} />
                <CopyButton value={displayValue(verdict.expected)} />
              </div>
              <div className="flex items-start gap-1">
                <span className="text-faint shrink-0">Actual:</span>
                <ValueDisplay value={displayValue(verdict.actual)} />
                <CopyButton value={displayValue(verdict.actual)} />
              </div>
              <NumberDiffHint expected={verdict.expected} actual={verdict.actual} />
              <ArrayDiffHint expected={verdict.expected} actual={verdict.actual} />
              <StringDiffHint expected={verdict.expected} actual={verdict.actual} />
            </>
          )}
          {verdict.status === 'error' && (
            <div className="flex items-start gap-1">
              <span className="text-faint shrink-0">Error:</span>
              <span className="text-text break-all">{verdict.error}</span>
              <CopyButton value={verdict.error} />
            </div>
          )}
          {verdict.logs.length > 0 && (
            <div className="border-t border-border pt-1 mt-1">
              <span className="text-faint text-[10px] uppercase">Console Output</span>
              {verdict.logs.map((log, i) => (
                <div key={i} className="text-muted pl-2">
                  {log}
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
