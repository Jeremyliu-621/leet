import { useEffect, useRef, useState, useCallback } from 'react';
import type { JudgeResult, TestVerdict } from '../../../lib/judge';

/** Terminal entry types for the output log. */
type TerminalEntry =
  | { type: 'system'; text: string }
  | { type: 'stdout'; text: string }
  | { type: 'stderr'; text: string }
  | { type: 'pass'; testIndex: number; input: string; durationMs?: number }
  | { type: 'fail'; testIndex: number; input: string; expected: string; actual: string }
  | { type: 'error'; testIndex: number; input: string; error: string }
  | { type: 'summary'; outcome: string; passed: number; total: number; durationMs?: number };

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
  const timestamp = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });

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
        durationMs: verdict.durationMs,
      });
    } else if (verdict.status === 'fail') {
      entries.push({
        type: 'fail',
        testIndex: verdict.index,
        input: verdict.input,
        expected: displayValue(verdict.expected),
        actual: displayValue(verdict.actual),
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

interface TerminalPanelProps {
  /** null = no run yet; undefined = running in progress */
  result: JudgeResult | null | undefined;
  mode: 'run' | 'submit';
}

function TerminalEntry({ entry }: { entry: TerminalEntry }) {
  switch (entry.type) {
    case 'system':
      return (
        <div className="text-faint select-text">
          {entry.text}
        </div>
      );
    case 'stdout':
      return (
        <div className="text-muted select-text pl-2 border-l-2 border-border">
          <span className="text-faint mr-2">stdout</span>{entry.text}
        </div>
      );
    case 'stderr':
      return (
        <div className="text-text select-text pl-2 border-l-2 border-border-strong">
          <span className="text-faint mr-2">stderr</span>{entry.text}
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
            {entry.input && <span className="text-muted ml-2">({entry.input})</span>}
          </div>
          <div className="pl-4">
            <span className="text-faint">Expected: </span>
            <span className="text-muted">{entry.expected}</span>
          </div>
          <div className="pl-4">
            <span className="text-faint">Actual:   </span>
            <span className="text-text">{entry.actual}</span>
          </div>
        </div>
      );
    case 'error':
      return (
        <div className="select-text space-y-0.5">
          <div>
            <span className="text-text font-semibold">ERROR</span>
            <span className="text-faint ml-2">Test {entry.testIndex + 1}</span>
          </div>
          <div className="pl-4 text-text">{entry.error}</div>
        </div>
      );
    case 'summary': {
      const isAccepted = entry.outcome === 'accepted';
      return (
        <div className={`py-1 ${isAccepted ? 'text-accent font-bold' : 'text-text font-semibold'}`}>
          {OUTCOME_LABELS[entry.outcome] ?? entry.outcome.toUpperCase()}
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
 * Terminal-style output panel that replaces the old VerdictPanel.
 * Shows console output, test results, and execution info in a scrollable
 * terminal with a monospace font, resembling a real terminal/console.
 */
export function TerminalPanel({ result, mode }: TerminalPanelProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [history, setHistory] = useState<TerminalEntry[][]>([]);
  const [activeTab, setActiveTab] = useState<'output' | 'testcases'>('output');
  const prevResultRef = useRef<JudgeResult | null | undefined>(null);

  // When a new result arrives, build entries and add to history.
  useEffect(() => {
    if (result && result !== prevResultRef.current && result !== undefined) {
      const entries = buildEntries(result, mode);
      setHistory((prev) => [...prev, entries]);
      prevResultRef.current = result;
    }
  }, [result, mode]);

  // Auto-scroll to bottom when new entries are added.
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history, result]);

  const handleClear = useCallback(() => {
    setHistory([]);
    prevResultRef.current = null;
  }, []);

  const allEntries = history.flat();

  return (
    <div className="flex flex-col" role="region" aria-label="Terminal output">
      {/* Tab bar */}
      <div className="flex items-center justify-between border-b border-border bg-surface">
        <div className="flex">
          <button
            type="button"
            onClick={() => setActiveTab('output')}
            className={[
              'px-3 py-1.5 font-mono text-[10px] uppercase tracking-widest transition-colors',
              activeTab === 'output'
                ? 'text-text border-b-2 border-accent'
                : 'text-faint hover:text-muted',
            ].join(' ')}
          >
            Terminal
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('testcases')}
            className={[
              'px-3 py-1.5 font-mono text-[10px] uppercase tracking-widest transition-colors',
              activeTab === 'testcases'
                ? 'text-text border-b-2 border-accent'
                : 'text-faint hover:text-muted',
            ].join(' ')}
          >
            Test Results
          </button>
        </div>
        <button
          type="button"
          onClick={handleClear}
          className="px-2 py-1 mr-1 font-mono text-[9px] uppercase tracking-wider text-faint hover:text-muted transition-colors"
          title="Clear terminal"
          aria-label="Clear terminal output"
        >
          clear
        </button>
      </div>

      {/* Terminal body */}
      <div
        ref={scrollRef}
        className="overflow-y-auto bg-bg font-mono text-xs leading-relaxed"
        style={{ minHeight: '120px', maxHeight: '280px' }}
      >
        {activeTab === 'output' ? (
          <div className="p-3 space-y-1">
            {/* Running indicator */}
            {result === undefined && (
              <div className="text-faint animate-pulse">
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
        ) : (
          <div className="p-3 space-y-2">
            {result === undefined && (
              <div className="text-faint animate-pulse font-mono text-xs">Running tests...</div>
            )}
            {result === null && (
              <div className="text-faint font-mono text-xs">No test results yet. Click Run or Submit.</div>
            )}
            {result && result.verdicts.length > 0 && (
              <>
                {/* Summary */}
                <div className="flex items-center gap-3 pb-2 border-b border-border">
                  <span
                    className={`font-mono text-xs font-semibold uppercase ${
                      result.outcome === 'accepted' ? 'text-accent' : 'text-text'
                    }`}
                  >
                    {OUTCOME_LABELS[result.outcome] ?? result.outcome}
                  </span>
                  <span className="font-mono text-xs text-muted">
                    {result.passed}/{result.total} passed
                  </span>
                  {result.totalDurationMs !== undefined && (
                    <span className="font-mono text-xs text-faint tabular-nums">
                      {result.totalDurationMs}ms
                    </span>
                  )}
                </div>

                {/* Individual test results */}
                {result.verdicts.map((verdict) => (
                  <TestResultCard key={verdict.index} verdict={verdict} />
                ))}
              </>
            )}
            {result && result.verdicts.length === 0 && result.message && (
              <div className="space-y-2">
                <div className="font-mono text-xs font-semibold text-text uppercase">
                  {OUTCOME_LABELS[result.outcome] ?? result.outcome}
                </div>
                <pre className="font-mono text-xs text-muted whitespace-pre-wrap">{result.message}</pre>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

/** Compact test result card for the Test Results tab. */
function TestResultCard({ verdict }: { verdict: TestVerdict }) {
  const [expanded, setExpanded] = useState(false);
  const label = `Test ${verdict.index + 1}`;

  return (
    <div className="rounded border border-border bg-surface-2">
      <button
        type="button"
        onClick={() => setExpanded((e) => !e)}
        className="flex w-full items-center gap-2 px-3 py-2 text-left"
        aria-expanded={expanded}
      >
        <span
          className={`font-mono text-[10px] font-semibold uppercase ${
            verdict.status === 'pass' ? 'text-accent' : 'text-text'
          }`}
        >
          {verdict.status === 'pass' ? 'PASS' : verdict.status === 'fail' ? 'FAIL' : 'ERROR'}
        </span>
        <span className="font-mono text-[10px] text-faint">{label}</span>
        {verdict.status === 'pass' && verdict.durationMs !== undefined && (
          <span className="ml-auto font-mono text-[10px] text-faint tabular-nums">
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
            <div>
              <span className="text-faint">Input: </span>
              <span className="text-muted">{verdict.input}</span>
            </div>
          )}
          {verdict.status === 'fail' && (
            <>
              <div>
                <span className="text-faint">Expected: </span>
                <span className="text-muted">{displayValue(verdict.expected)}</span>
              </div>
              <div>
                <span className="text-faint">Actual: </span>
                <span className="text-text">{displayValue(verdict.actual)}</span>
              </div>
            </>
          )}
          {verdict.status === 'error' && (
            <div>
              <span className="text-faint">Error: </span>
              <span className="text-text">{verdict.error}</span>
            </div>
          )}
          {verdict.logs.length > 0 && (
            <div className="border-t border-border pt-1 mt-1">
              <span className="text-faint text-[10px] uppercase">Console Output</span>
              {verdict.logs.map((log, i) => (
                <div key={i} className="text-muted pl-2">{log}</div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
