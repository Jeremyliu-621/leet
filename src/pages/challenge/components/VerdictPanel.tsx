import { useEffect, useRef, useState } from 'react';
import type { JudgeResult, TestVerdict } from '../../../lib/judge';

const TRUNCATE_LEN = 200;

/** Serialises a judge value for display — handles arrays, objects, primitives. */
function displayValue(v: unknown): string {
  if (v === undefined) return 'undefined';
  if (v === null) return 'null';
  try {
    return JSON.stringify(v);
  } catch {
    return String(v);
  }
}

/** Returns how many elements differ between two arrays, or null if not comparable. */
function arrayDiffCount(expected: unknown, actual: unknown): number | null {
  if (!Array.isArray(expected) || !Array.isArray(actual)) return null;
  if (expected.length !== actual.length) return null;
  let diffs = 0;
  for (let i = 0; i < expected.length; i++) {
    if (JSON.stringify(expected[i]) !== JSON.stringify(actual[i])) diffs++;
  }
  return diffs;
}

function TruncatedValue({ raw }: { raw: string }) {
  const [expanded, setExpanded] = useState(false);
  const needsTruncation = raw.length > TRUNCATE_LEN;
  const displayed = needsTruncation && !expanded ? raw.slice(0, TRUNCATE_LEN) + '…' : raw;
  return (
    <span>
      <code className="font-mono text-xs text-text break-all">{displayed}</code>
      {needsTruncation && (
        <button
          type="button"
          onClick={() => setExpanded((e) => !e)}
          className="ml-1.5 font-mono text-[9px] uppercase tracking-wider text-muted hover:text-text transition-colors"
          aria-label={expanded ? 'Show less' : 'Show full value'}
        >
          {expanded ? 'less' : `+${raw.length - TRUNCATE_LEN} chars`}
        </button>
      )}
    </span>
  );
}

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);
  function handleCopy() {
    void navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    });
  }
  return (
    <button
      type="button"
      onClick={handleCopy}
      className="ml-1 font-mono text-[9px] uppercase tracking-wider text-muted hover:text-text transition-colors"
      title="Copy to clipboard"
      aria-label={copied ? 'Copied' : 'Copy to clipboard'}
    >
      {copied ? 'copied' : 'copy'}
    </button>
  );
}

interface SingleVerdictProps {
  verdict: TestVerdict;
  index: number;
}

function SingleVerdict({ verdict, index }: SingleVerdictProps) {
  const label = `Test ${index + 1}`;

  if (verdict.status === 'pass') {
    return (
      <div
        className="flex items-center gap-2 rounded-sm border border-border bg-surface-2 px-3 py-2"
        aria-label={`${label}: passed`}
      >
        <span className="font-mono text-[10px] uppercase tracking-wider text-muted">{label}</span>
        <span className="font-mono text-xs font-semibold text-accent">pass</span>
        {verdict.input && (
          <span className="font-mono text-[10px] text-muted truncate max-w-[300px]">{verdict.input}</span>
        )}
        {verdict.durationMs !== undefined && (
          <span className="ml-auto font-mono text-[10px] text-muted tabular-nums">
            {verdict.durationMs} ms
          </span>
        )}
      </div>
    );
  }

  if (verdict.status === 'fail') {
    const diffCount = arrayDiffCount(verdict.expected, verdict.actual);
    const expectedStr = displayValue(verdict.expected);
    const actualStr = displayValue(verdict.actual);
    return (
      <div
        className="rounded-card border border-border-strong bg-surface-2 p-3"
        aria-label={`${label}: failed`}
      >
        <div className="mb-2 flex items-center gap-2">
          <span className="font-mono text-[10px] uppercase tracking-wider text-muted">{label}</span>
          <span className="font-mono text-xs font-medium text-text">wrong answer</span>
          {diffCount !== null && diffCount > 0 && (
            <span className="font-mono text-[10px] text-muted">
              {diffCount} of {(verdict.expected as unknown[]).length} differ
            </span>
          )}
        </div>
        <div className="space-y-1.5">
          {verdict.input && (
            <div className="flex flex-wrap gap-x-3 gap-y-0.5 items-baseline">
              <span className="font-mono text-[10px] uppercase tracking-wider text-muted w-16 shrink-0">
                input
              </span>
              <code className="font-mono text-xs text-text break-all">{verdict.input}</code>
              <CopyButton text={verdict.input} />
            </div>
          )}
          <div className="flex flex-wrap gap-x-3 gap-y-0.5 items-baseline">
            <span className="font-mono text-[10px] uppercase tracking-wider text-muted w-16 shrink-0">
              expected
            </span>
            <TruncatedValue raw={expectedStr} />
            <CopyButton text={expectedStr} />
          </div>
          <div className="flex flex-wrap gap-x-3 gap-y-0.5 items-baseline">
            <span className="font-mono text-[10px] uppercase tracking-wider text-muted w-16 shrink-0">
              actual
            </span>
            <TruncatedValue raw={actualStr} />
            <CopyButton text={actualStr} />
          </div>
        </div>
        {verdict.logs.length > 0 && (
          <div className="mt-2 border-t border-border pt-2">
            {verdict.logs.map((line, i) => (
              <code key={i} className="block font-mono text-[11px] text-muted">
                {line}
              </code>
            ))}
          </div>
        )}
      </div>
    );
  }

  // status === 'error'
  return (
    <div
      className="rounded-card border border-border-strong bg-surface-2 p-3"
      aria-label={`${label}: error`}
    >
      <div className="mb-2 flex items-center gap-2">
        <span className="font-mono text-[10px] uppercase tracking-wider text-muted">{label}</span>
        <span className="font-mono text-xs font-medium text-text">runtime error</span>
      </div>
      {verdict.input && (
        <div className="mb-1.5 flex flex-wrap gap-x-3 gap-y-0.5 items-baseline">
          <span className="font-mono text-[10px] uppercase tracking-wider text-muted w-16 shrink-0">
            input
          </span>
          <code className="font-mono text-xs text-text break-all">{verdict.input}</code>
        </div>
      )}
      <code className="block font-mono text-xs text-text">{verdict.error}</code>
      {verdict.logs.length > 0 && (
        <div className="mt-2 border-t border-border pt-2">
          {verdict.logs.map((line, i) => (
            <code key={i} className="block font-mono text-[11px] text-muted">
              {line}
            </code>
          ))}
        </div>
      )}
    </div>
  );
}

interface VerdictPanelProps {
  /** null = no run yet; undefined = running in progress */
  result: JudgeResult | null | undefined;
  mode: 'run' | 'submit';
}

/** Full-run outcome banner — only shown after submit or on global error. */
function OutcomeBanner({ result }: { result: JudgeResult }) {
  if (result.outcome === 'accepted') {
    return (
      <div
        className="rounded-card bg-accent px-4 py-3"
        aria-label="All tests passed"
        role="status"
      >
        <div className="flex items-baseline gap-3">
          <span className="font-mono text-sm font-bold uppercase tracking-widest text-on-accent">
            accepted
          </span>
          <span className="font-mono text-xs text-on-accent opacity-60">
            {result.passed}/{result.total} passed
          </span>
          {result.totalDurationMs !== undefined && (
            <span className="font-mono text-xs text-on-accent opacity-50">
              {result.totalDurationMs} ms
            </span>
          )}
        </div>
      </div>
    );
  }

  if (result.outcome === 'timeout') {
    return (
      <div className="rounded-card border border-border-strong bg-surface-2 px-4 py-3" role="status">
        <span className="font-mono text-sm font-semibold text-text">time limit exceeded</span>
        {result.message && (
          <p className="mt-1 font-mono text-xs text-muted">{result.message}</p>
        )}
      </div>
    );
  }

  if (result.outcome === 'compile-error') {
    return (
      <div className="rounded-card border border-border-strong bg-surface-2 px-4 py-3" role="status">
        <span className="font-mono text-sm font-semibold text-text">compile error</span>
        {result.message && (
          <code className="mt-1 block font-mono text-xs text-muted">{result.message}</code>
        )}
      </div>
    );
  }

  // wrong-answer or runtime-error — show summary count
  return (
    <div className="rounded-card border border-border bg-surface-2 px-4 py-3" role="status">
      <div className="flex items-baseline gap-3">
        <span className="font-mono text-sm font-semibold text-text">
          {result.outcome === 'runtime-error' ? 'runtime error' : 'wrong answer'}
        </span>
        <span className="font-mono text-xs text-muted">
          {result.passed}/{result.total} passed
        </span>
      </div>
    </div>
  );
}

/** Compact summary shown in run-mode when all visible tests pass. */
function RunSummaryBanner({ result }: { result: JudgeResult }) {
  const allPass = result.verdicts.length > 0 && result.verdicts.every((v) => v.status === 'pass');
  if (!allPass) return null;
  return (
    <div
      className="flex items-baseline gap-3 rounded-sm border border-border bg-surface-2 px-3 py-2"
      aria-label={`${result.passed} of ${result.verdicts.length} visible tests passed`}
    >
      <span className="font-mono text-xs font-semibold text-accent">
        {result.passed}/{result.verdicts.length} passed
      </span>
      <span className="font-mono text-[10px] text-muted">visible tests</span>
      {result.totalDurationMs !== undefined && (
        <span className="ml-auto font-mono text-[10px] text-muted tabular-nums">
          {result.totalDurationMs} ms total
        </span>
      )}
    </div>
  );
}

/**
 * The verdict region below the editor. Shows per-test pass/fail after "Run",
 * and a full outcome banner after "Submit". Uses aria-live so screen readers
 * announce updates without requiring focus.
 */
export function VerdictPanel({ result, mode }: VerdictPanelProps) {
  const firstFailRef = useRef<HTMLDivElement>(null);

  // Scroll to first failure after a new submit result arrives.
  useEffect(() => {
    if (result && mode === 'submit' && result.outcome !== 'accepted') {
      firstFailRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }, [result, mode]);

  // Still running
  if (result === undefined) {
    return (
      <div
        className="px-4 py-3"
        role="status"
        aria-live="polite"
        aria-label="Running tests"
      >
        <span className="font-mono text-xs text-muted">running</span>
        <span className="ml-1.5 animate-pulse font-mono text-xs text-muted" aria-hidden="true">
          · · ·
        </span>
      </div>
    );
  }

  // No result yet — empty state
  if (result === null) {
    return (
      <div
        className="px-4 py-3"
        role="status"
        aria-live="polite"
        aria-label="No results yet"
      />
    );
  }

  return (
    <div
      className="space-y-2 px-4 py-3"
      role="status"
      aria-live="polite"
      aria-label="Test results"
    >
      {/* Outcome banner after submit, or on compile/timeout (no per-test verdicts) */}
      {(mode === 'submit' || result.verdicts.length === 0) && (
        <OutcomeBanner result={result} />
      )}

      {/* In run mode: compact pass summary when all visible tests pass */}
      {mode === 'run' && result.verdicts.length > 0 && (
        <RunSummaryBanner result={result} />
      )}

      {/* Per-test verdict cards */}
      {result.verdicts.length > 0 && (
        <div className="space-y-2">
          {(() => {
            let firstFailSeen = false;
            return result.verdicts.map((verdict) => {
              const isFirstFail = !firstFailSeen && verdict.status !== 'pass';
              if (isFirstFail) firstFailSeen = true;
              return (
                <div key={verdict.index} ref={isFirstFail ? firstFailRef : undefined}>
                  <SingleVerdict verdict={verdict} index={verdict.index} />
                </div>
              );
            });
          })()}
        </div>
      )}
    </div>
  );
}
