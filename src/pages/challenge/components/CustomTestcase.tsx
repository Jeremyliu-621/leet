import { useState, useCallback } from 'react';

interface CustomTestcaseProps {
  /** Parameter names for the current problem (e.g. ['nums', 'target']). */
  params: readonly string[];
  /** Called when the user clicks "Run Custom" with a parsed args array. */
  onRun: (args: unknown[]) => void;
  /** Whether a custom run is in progress. */
  isRunning: boolean;
  /**
   * Output from the most recent custom run.
   * null = no run yet; undefined = running; string = completed (actual value as JSON).
   */
  output: string | null | undefined;
  /** Error message from the most recent custom run (parse error or runtime error). */
  error: string | null;
}

/**
 * A panel that lets the user enter custom test-case arguments in JSON format
 * and immediately see the actual output from their code (without pass/fail
 * comparison against an expected value).
 */
export function CustomTestcase({ params, onRun, isRunning, output, error }: CustomTestcaseProps) {
  // The placeholder shows how to format the args array.
  const placeholder = `[${params.map((p) => `/* ${p} */`).join(', ')}]`;

  const [inputValue, setInputValue] = useState('');
  const [parseError, setParseError] = useState<string | null>(null);

  const handleRun = useCallback(() => {
    const raw = inputValue.trim();
    if (!raw) {
      setParseError('Enter arguments as a JSON array, e.g. [[1,2,3], 9]');
      return;
    }
    let parsed: unknown;
    try {
      parsed = JSON.parse(raw);
    } catch (e) {
      setParseError(`JSON parse error: ${e instanceof Error ? e.message : String(e)}`);
      return;
    }
    if (!Array.isArray(parsed)) {
      setParseError('Arguments must be a JSON array, e.g. [[1,2,3], 9]');
      return;
    }
    setParseError(null);
    onRun(parsed);
  }, [inputValue, onRun]);

  const displayError = parseError ?? error;

  return (
    <div className="flex h-full flex-col gap-2 px-4 py-3">
      {/* Input area */}
      <div className="flex flex-col gap-1">
        <label className="font-mono text-[10px] uppercase tracking-widest text-faint">
          Args (JSON array)
          {params.length > 0 && (
            <span className="ml-2 normal-case text-[10px] text-faint opacity-70">
              — {params.join(', ')}
            </span>
          )}
        </label>
        <textarea
          aria-label="Custom test-case arguments (JSON array)"
          rows={3}
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
            setParseError(null);
          }}
          onKeyDown={(e) => {
            // Ctrl/Cmd+Enter submits.
            if (e.key === 'Enter' && (e.metaKey || e.ctrlKey)) {
              e.preventDefault();
              handleRun();
            }
          }}
          placeholder={placeholder}
          spellCheck={false}
          className="w-full resize-none rounded-sm border border-border bg-bg px-3 py-2 font-mono text-xs text-text placeholder-faint focus:border-border-strong focus:outline-none"
        />
      </div>

      {/* Error */}
      {displayError && (
        <p role="alert" className="font-mono text-xs text-muted">
          {displayError}
        </p>
      )}

      {/* Output */}
      {output !== null && output !== undefined && !parseError && (
        <div>
          <span className="font-mono text-[10px] uppercase tracking-widest text-faint">Output</span>
          <code className="mt-1 block font-mono text-xs text-text">{output}</code>
        </div>
      )}
      {output === undefined && !parseError && (
        <span className="font-mono text-xs text-faint">running · · ·</span>
      )}

      {/* Run button */}
      <div className="mt-auto flex justify-end">
        <button
          type="button"
          onClick={handleRun}
          disabled={isRunning}
          aria-label="Run custom test case"
          aria-keyshortcuts="Control+Enter Meta+Enter"
          className="rounded-sm border border-border px-3 py-1.5 font-mono text-xs text-muted transition-colors hover:border-border-strong hover:text-text focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-accent disabled:cursor-not-allowed disabled:opacity-40"
        >
          {isRunning ? 'running' : 'run'}
        </button>
      </div>
    </div>
  );
}
