import { useState, useCallback } from 'react';
import type { CustomTestStatus } from '../../../lib/judge';

interface CustomTestPanelProps {
  /** Positional parameter names for the problem's function. */
  params: readonly string[];
  /** Called when the user clicks "Run Custom". Receives parsed arg values. */
  onRun: (args: unknown[]) => Promise<void>;
  /** Result of the most recent custom run. */
  result: CustomTestStatus;
  /** Initial argument values to pre-fill (e.g. from first visible test). */
  defaultArgs?: readonly unknown[];
}

/** Attempts JSON.parse; returns { ok, value } so callers can show inline errors. */
function parseArg(raw: string): { ok: true; value: unknown } | { ok: false } {
  try {
    return { ok: true, value: JSON.parse(raw) };
  } catch {
    return { ok: false };
  }
}

function displayResult(result: CustomTestStatus): React.ReactNode {
  if (result.status === 'idle') return null;
  if (result.status === 'running') {
    return (
      <div
        className="mt-3 font-mono text-xs text-faint motion-safe:animate-pulse"
        role="status"
        aria-live="polite"
      >
        Running...
      </div>
    );
  }
  if (result.status === 'timeout') {
    return (
      <div
        className="mt-3 rounded border border-border bg-surface-2 px-3 py-2"
        role="status"
        aria-live="polite"
      >
        <span className="font-mono text-xs font-semibold text-text">TIME LIMIT EXCEEDED</span>
      </div>
    );
  }
  if (result.status === 'error') {
    return (
      <div
        className="mt-3 rounded border border-border bg-surface-2 px-3 py-2 space-y-1"
        role="status"
        aria-live="polite"
      >
        <span className="font-mono text-[10px] uppercase tracking-wider text-faint">Error</span>
        <code className="block font-mono text-xs text-muted">{result.message}</code>
      </div>
    );
  }
  // ok
  return (
    <div
      className="mt-3 rounded border border-border bg-surface-2 px-3 py-2 space-y-1"
      role="status"
      aria-live="polite"
    >
      <div className="flex items-baseline gap-2">
        <span className="font-mono text-[10px] uppercase tracking-wider text-faint">Output</span>
        {result.durationMs !== undefined && (
          <span className="font-mono text-[10px] text-faint tabular-nums">
            {result.durationMs} ms
          </span>
        )}
      </div>
      <code className="block font-mono text-xs text-accent font-medium">{result.output}</code>
    </div>
  );
}

/**
 * Collapsible "Custom test" drawer that lets users supply their own argument
 * values, run the code, and see the raw output without a predefined expected.
 */
export function CustomTestPanel({ params, onRun, result, defaultArgs }: CustomTestPanelProps) {
  const [open, setOpen] = useState(false);
  const [rawArgs, setRawArgs] = useState<string[]>(() =>
    params.map((_, i) => {
      const def = defaultArgs?.[i];
      return def !== undefined ? JSON.stringify(def) : '';
    }),
  );
  const [parseErrors, setParseErrors] = useState<boolean[]>(() => params.map(() => false));

  const handleRun = useCallback(async () => {
    const parsed: unknown[] = [];
    const errors = params.map((_, i) => {
      const r = parseArg(rawArgs[i] ?? '');
      if (r.ok) {
        parsed.push(r.value);
        return false;
      }
      return true;
    });
    setParseErrors(errors);
    if (errors.some(Boolean)) return;
    await onRun(parsed);
  }, [params, rawArgs, onRun]);

  const isRunning = result.status === 'running';

  return (
    <div className="shrink-0 border-t border-border">
      {/* Toggle header */}
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-controls="custom-test-body"
        aria-label={open ? 'Collapse custom test panel' : 'Expand custom test panel'}
        className="flex w-full items-center justify-between px-4 py-2 text-left transition-colors hover:bg-surface-2 focus:outline-none focus-visible:ring-1 focus-visible:ring-accent"
      >
        <span className="font-mono text-[10px] uppercase tracking-widest text-faint">
          Custom test
        </span>
        <svg
          className={`h-3 w-3 flex-shrink-0 text-faint transition-transform duration-150 ${open ? 'rotate-180' : ''}`}
          viewBox="0 0 12 12"
          fill="none"
          aria-hidden="true"
        >
          <path d="M2 4.5l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {open && (
        <div id="custom-test-body" className="px-4 pb-3">
          <div className="space-y-2">
            {params.map((param, i) => {
              const error = parseErrors[i] ?? false;
              const inputId = `custom-arg-${i}`;
              return (
                <div key={param}>
                  <label
                    htmlFor={inputId}
                    className="mb-1 block font-mono text-[10px] uppercase tracking-wider text-faint"
                  >
                    {param}
                  </label>
                  <input
                    id={inputId}
                    type="text"
                    spellCheck={false}
                    placeholder="JSON value"
                    value={rawArgs[i] ?? ''}
                    onChange={(e) => {
                      const next = [...rawArgs];
                      next[i] = e.target.value;
                      setRawArgs(next);
                      if (parseErrors[i]) {
                        const errs = [...parseErrors];
                        errs[i] = false;
                        setParseErrors(errs);
                      }
                    }}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' && !isRunning) void handleRun();
                    }}
                    aria-invalid={error}
                    aria-describedby={error ? `${inputId}-err` : undefined}
                    className={[
                      'w-full rounded-sm border bg-bg px-2.5 py-1.5 font-mono text-xs text-text placeholder-faint transition-colors',
                      'focus:outline focus:outline-2 focus:outline-offset-1 focus:outline-accent',
                      error ? 'border-border-strong' : 'border-border hover:border-border-strong',
                    ].join(' ')}
                  />
                  {error && (
                    <p
                      id={`${inputId}-err`}
                      className="mt-0.5 font-mono text-[10px] text-muted"
                      role="alert"
                    >
                      Invalid JSON
                    </p>
                  )}
                </div>
              );
            })}
          </div>

          <button
            type="button"
            onClick={() => void handleRun()}
            disabled={isRunning}
            aria-label="Run custom test case"
            className="mt-3 inline-flex items-center gap-1.5 rounded-sm border border-border px-3 py-1.5 font-mono text-[11px] text-muted transition-all hover:border-border-strong hover:text-text hover:bg-surface-2 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-accent disabled:cursor-not-allowed disabled:opacity-40"
          >
            {isRunning && (
              <svg
                className="h-3 w-3 motion-safe:animate-spin"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeOpacity="0.25"
                />
                <path fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
            )}
            {isRunning ? 'running...' : 'run custom'}
          </button>

          {displayResult(result)}
        </div>
      )}
    </div>
  );
}
