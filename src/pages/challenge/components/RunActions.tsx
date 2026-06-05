interface RunActionsProps {
  onRun: () => void;
  onSubmit: () => void;
  isRunning: boolean;
  /** Which action produced the in-flight run, so only that button spins. */
  verdictMode: 'run' | 'submit';
  /** null = unlimited; <= 0 disables Submit. */
  attemptsRemaining: number | null;
  /** Compact variant for narrow contexts (smaller padding). */
  size?: 'sm' | 'md';
}

function Spinner() {
  return (
    <svg className="h-3.5 w-3.5 motion-safe:animate-spin" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" strokeOpacity="0.25" />
      <path fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
    </svg>
  );
}

/**
 * LeetCode-style Run / Submit cluster: a single rounded container holding a
 * neutral "Run" (play icon) and a green "Submit" (cloud-up icon), split by a
 * hairline divider. Lives in the top bar, centered, the way LeetCode does it.
 */
export function RunActions({
  onRun,
  onSubmit,
  isRunning,
  verdictMode,
  attemptsRemaining,
  size = 'md',
}: RunActionsProps) {
  const submitDisabled = isRunning || (attemptsRemaining !== null && attemptsRemaining <= 0);
  const pad = size === 'sm' ? 'px-3 py-1' : 'px-4 py-1.5';
  const textSize = size === 'sm' ? 'text-[11px]' : 'text-[12px]';

  return (
    <div className="inline-flex items-center overflow-hidden rounded-lg border border-border bg-surface-2 shadow-sm transition-shadow hover:shadow-md">
      <button
        type="button"
        onClick={onRun}
        disabled={isRunning}
        aria-keyshortcuts="Control+Enter Meta+Enter"
        aria-label="Run visible test cases"
        title="Run (⌘↵)"
        className={`inline-flex items-center gap-1.5 ${pad} font-sans ${textSize} font-medium text-text transition-colors hover:bg-surface active:bg-bg focus:outline-none focus-visible:bg-surface disabled:cursor-not-allowed disabled:opacity-50`}
      >
        {isRunning && verdictMode === 'run' ? (
          <Spinner />
        ) : (
          <svg width="13" height="13" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
            {/* Solid play triangle */}
            <path d="M5 3.4a.7.7 0 0 1 1.06-.6l6.5 4.0a.7.7 0 0 1 0 1.2l-6.5 4.0A.7.7 0 0 1 5 11.6V3.4Z" />
          </svg>
        )}
        {isRunning && verdictMode === 'run' ? 'Running' : 'Run'}
      </button>
      <span className="h-5 w-px bg-border" aria-hidden="true" />
      <button
        type="button"
        onClick={onSubmit}
        disabled={submitDisabled}
        aria-keyshortcuts="Control+Shift+Enter Meta+Shift+Enter"
        aria-label="Submit solution against all test cases"
        title="Submit (⌘⇧↵)"
        className={`inline-flex items-center gap-1.5 ${pad} font-sans ${textSize} font-semibold text-success transition-colors hover:bg-surface active:bg-bg focus:outline-none focus-visible:bg-surface disabled:cursor-not-allowed disabled:opacity-50`}
      >
        {isRunning && verdictMode === 'submit' ? (
          <Spinner />
        ) : (
          <svg width="15" height="15" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            {/* Clean cloud */}
            <path d="M5 13a3.2 3.2 0 0 1-.4-6.37A3.8 3.8 0 0 1 11.3 5.4 2.8 2.8 0 0 1 11.5 13H5Z" />
            {/* Upload arrow into the cloud */}
            <path d="M8 13.2V7.4" />
            <path d="M6.1 9.1 8 7.1l1.9 2" />
          </svg>
        )}
        {isRunning && verdictMode === 'submit' ? 'Submitting' : 'Submit'}
      </button>
    </div>
  );
}
