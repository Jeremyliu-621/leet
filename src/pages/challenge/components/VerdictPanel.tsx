import type { JudgeResult, TestVerdict } from '../../../lib/judge';

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
        <span className="font-mono text-[10px] uppercase tracking-wider text-faint">{label}</span>
        <span className="font-mono text-xs font-semibold text-accent">pass</span>
      </div>
    );
  }

  if (verdict.status === 'fail') {
    return (
      <div
        className="rounded-card border border-border-strong bg-surface-2 p-3"
        aria-label={`${label}: failed`}
      >
        <div className="mb-2 flex items-center gap-2">
          <span className="font-mono text-[10px] uppercase tracking-wider text-faint">{label}</span>
          <span className="font-mono text-xs font-medium text-muted">wrong answer</span>
        </div>
        <div className="space-y-1.5">
          <div className="flex flex-wrap gap-x-3 gap-y-0.5">
            <span className="font-mono text-[10px] uppercase tracking-wider text-faint w-16">
              expected
            </span>
            <code className="font-mono text-xs text-text">{displayValue(verdict.expected)}</code>
          </div>
          <div className="flex flex-wrap gap-x-3 gap-y-0.5">
            <span className="font-mono text-[10px] uppercase tracking-wider text-faint w-16">
              actual
            </span>
            <code className="font-mono text-xs text-muted">{displayValue(verdict.actual)}</code>
          </div>
        </div>
        {verdict.logs.length > 0 && (
          <div className="mt-2 border-t border-border pt-2">
            {verdict.logs.map((line, i) => (
              <code key={i} className="block font-mono text-[11px] text-faint">
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
        <span className="font-mono text-[10px] uppercase tracking-wider text-faint">{label}</span>
        <span className="font-mono text-xs font-medium text-muted">runtime error</span>
      </div>
      <code className="block font-mono text-xs text-muted">{verdict.error}</code>
      {verdict.logs.length > 0 && (
        <div className="mt-2 border-t border-border pt-2">
          {verdict.logs.map((line, i) => (
            <code key={i} className="block font-mono text-[11px] text-faint">
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

/**
 * The verdict region below the editor. Shows per-test pass/fail after "Run",
 * and a full outcome banner after "Submit". Uses aria-live so screen readers
 * announce updates without requiring focus.
 */
export function VerdictPanel({ result, mode }: VerdictPanelProps) {
  // Still running
  if (result === undefined) {
    return (
      <div
        className="px-4 py-3"
        role="status"
        aria-live="polite"
        aria-label="Running tests"
      >
        <span className="font-mono text-xs text-faint">running</span>
        {/* Static dot indicator — no animation per design spec */}
        <span className="ml-1.5 font-mono text-xs text-faint" aria-hidden="true">
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
      {/* Outcome banner only after submit, or on compile/timeout (no per-test verdicts) */}
      {(mode === 'submit' || result.verdicts.length === 0) && (
        <OutcomeBanner result={result} />
      )}

      {/* Per-test verdicts (only for visible tests on Run; all on Submit) */}
      {result.verdicts.length > 0 && (
        <div className="space-y-2">
          {result.verdicts.map((verdict) => (
            <SingleVerdict key={verdict.index} verdict={verdict} index={verdict.index} />
          ))}
        </div>
      )}
    </div>
  );
}
