// Message contracts for the code runner.
//
// Flow:  challenge page  --RunRequest-->  sandbox host page
//        sandbox host    --RunRequest-->  Web Worker
//        Web Worker      --RunResponse--> sandbox host page
//        sandbox host    --RunResponse--> challenge page
//
// The challenge page lives under a strict CSP and cannot run user code; the
// sandbox page has a relaxed CSP and hosts the Worker that actually executes it.

/** A test reduced to just the call arguments — all the Worker needs to run it. */
export interface RunnableTest {
  args: readonly unknown[];
}

/** Request to execute user code against a batch of tests. */
export interface RunRequest {
  type: 'run';
  requestId: string;
  /** User-submitted source code. */
  code: string;
  /** Name of the function the code is expected to define. */
  functionName: string;
  tests: readonly RunnableTest[];
  /** Hard wall-clock limit for the whole batch, in milliseconds. */
  timeoutMs: number;
  /**
   * Language to execute. Optional for backward compatibility; the sandbox
   * host defaults to `'javascript'` when absent. Python lands in M3 of
   * `docs/PYODIDE_PLAN.md`.
   */
  language?: 'javascript' | 'python';
}

/** Outcome of a single test executed by the Worker. */
export type TestOutcome =
  | { index: number; status: 'returned'; value: unknown; logs: readonly string[]; durationMs?: number }
  | { index: number; status: 'threw'; error: string; logs: readonly string[] };

/** Why a run failed before producing per-test outcomes. */
export type RunFailureReason = 'timeout' | 'compile-error' | 'no-function' | 'worker-error';

/** Result of a run, sent back toward the challenge page. */
export type RunResponse =
  | { type: 'result'; requestId: string; ok: true; outcomes: readonly TestOutcome[] }
  | { type: 'result'; requestId: string; ok: false; reason: RunFailureReason; error: string };

/** Sent once by the sandbox host page when it has loaded and can accept runs. */
export interface SandboxReady {
  type: 'sandbox-ready';
}
