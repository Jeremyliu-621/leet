import type { TestCase } from '../problems/types';
import type { RunResponse } from '../messaging/messages';
import { deepEqual } from './deep-equal';

/** Result for a single test, after comparing the Worker's output to `expected`. */
export type TestVerdict =
  | { index: number; status: 'pass'; input: string; logs: readonly string[]; durationMs?: number }
  | {
      index: number;
      status: 'fail';
      input: string;
      expected: unknown;
      actual: unknown;
      logs: readonly string[];
      durationMs?: number;
    }
  | { index: number; status: 'error'; input: string; error: string; logs: readonly string[] };

/** Overall result of a run. */
export type JudgeOutcome =
  | 'accepted'
  | 'wrong-answer'
  | 'runtime-error'
  | 'timeout'
  | 'compile-error';

export interface JudgeResult {
  outcome: JudgeOutcome;
  passed: number;
  total: number;
  verdicts: readonly TestVerdict[];
  /** Human-readable detail for whole-run failures (timeout, compile error). */
  message?: string;
  /** Sum of all per-test execution times in ms. Undefined if not measured. */
  totalDurationMs?: number;
}

/** Formats the args of a test case into a human-readable string. */
function formatArgs(args: readonly unknown[]): string {
  return args.map(a => { try { return JSON.stringify(a); } catch { return String(a); } }).join(', ');
}

/**
 * Turns a raw {@link RunResponse} plus the original test cases into a judged
 * result. Pure and deterministic — the unit-tested core of the runner.
 */
export function buildVerdict(tests: readonly TestCase[], response: RunResponse): JudgeResult {
  if (!response.ok) {
    return {
      outcome: response.reason === 'timeout' ? 'timeout' : 'compile-error',
      passed: 0,
      total: tests.length,
      verdicts: [],
      message: response.error,
    };
  }

  const verdicts: TestVerdict[] = [];
  let passed = 0;
  let sawError = false;
  let totalDurationMs = 0;
  let hasDuration = false;

  for (let i = 0; i < tests.length; i++) {
    const test = tests[i];
    const outcome = response.outcomes[i];

    if (test === undefined || outcome === undefined) {
      // Defensive: the Worker returned fewer outcomes than there were tests.
      sawError = true;
      verdicts.push({
        index: i,
        status: 'error',
        input: '',
        error: 'No result was produced for this test.',
        logs: [],
      });
      continue;
    }

    const input = formatArgs(test.args);

    if (outcome.status === 'threw') {
      sawError = true;
      verdicts.push({ index: i, status: 'error', input, error: outcome.error, logs: outcome.logs });
      continue;
    }

    const durationMs = outcome.durationMs;
    if (typeof durationMs === 'number' && isFinite(durationMs) && durationMs >= 0) {
      totalDurationMs += durationMs;
      hasDuration = true;
    }

    if (deepEqual(outcome.value, test.expected)) {
      passed++;
      verdicts.push({ index: i, status: 'pass', input, logs: outcome.logs, durationMs });
    } else {
      verdicts.push({
        index: i,
        status: 'fail',
        input,
        expected: test.expected,
        actual: outcome.value,
        logs: outcome.logs,
        durationMs,
      });
    }
  }

  let outcome: JudgeOutcome;
  if (sawError) {
    outcome = 'runtime-error';
  } else if (passed === tests.length) {
    outcome = 'accepted';
  } else {
    outcome = 'wrong-answer';
  }

  return {
    outcome,
    passed,
    total: tests.length,
    verdicts,
    totalDurationMs: hasDuration ? totalDurationMs : undefined,
  };
}
