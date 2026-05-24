import { describe, it, expect } from 'vitest';
import { buildVerdict } from '../src/lib/judge/verdict';
import type { TestCase } from '../src/lib/problems/types';
import type { RunResponse, TestOutcome } from '../src/lib/messaging/messages';

const tests: TestCase[] = [
  { args: [1, 2], expected: 3 },
  { args: [10, 5], expected: 15 },
];

function returned(index: number, value: unknown): TestOutcome {
  return { index, status: 'returned', value, logs: [] };
}

function okResponse(outcomes: TestOutcome[]): RunResponse {
  return { type: 'result', requestId: 'r', ok: true, outcomes };
}

describe('buildVerdict', () => {
  it('accepts a run where every test passes', () => {
    const result = buildVerdict(tests, okResponse([returned(0, 3), returned(1, 15)]));
    expect(result.outcome).toBe('accepted');
    expect(result.passed).toBe(2);
    expect(result.total).toBe(2);
    expect(result.verdicts.every((v) => v.status === 'pass')).toBe(true);
  });

  it('reports wrong-answer when a result mismatches', () => {
    const result = buildVerdict(tests, okResponse([returned(0, 3), returned(1, 99)]));
    expect(result.outcome).toBe('wrong-answer');
    expect(result.passed).toBe(1);
    const failing = result.verdicts[1];
    expect(failing?.status).toBe('fail');
    if (failing?.status === 'fail') {
      expect(failing.expected).toBe(15);
      expect(failing.actual).toBe(99);
    }
  });

  it('reports runtime-error when a test throws', () => {
    const result = buildVerdict(
      tests,
      okResponse([returned(0, 3), { index: 1, status: 'threw', error: 'TypeError: boom', logs: [] }]),
    );
    expect(result.outcome).toBe('runtime-error');
    expect(result.passed).toBe(1);
    expect(result.verdicts[1]?.status).toBe('error');
  });

  it('reports timeout for a timed-out run', () => {
    const response: RunResponse = {
      type: 'result',
      requestId: 'r',
      ok: false,
      reason: 'timeout',
      error: 'too slow',
    };
    const result = buildVerdict(tests, response);
    expect(result.outcome).toBe('timeout');
    expect(result.passed).toBe(0);
    expect(result.message).toBe('too slow');
  });

  it('reports compile-error for a non-timeout failure', () => {
    const response: RunResponse = {
      type: 'result',
      requestId: 'r',
      ok: false,
      reason: 'compile-error',
      error: 'SyntaxError: unexpected token',
    };
    const result = buildVerdict(tests, response);
    expect(result.outcome).toBe('compile-error');
    expect(result.message).toContain('SyntaxError');
  });

  it('handles a response with fewer outcomes than tests', () => {
    const result = buildVerdict(tests, okResponse([returned(0, 3)]));
    expect(result.outcome).toBe('runtime-error');
    expect(result.verdicts[1]?.status).toBe('error');
  });

  it('uses deep equality for array results', () => {
    const arrayTests: TestCase[] = [{ args: [[3, 1, 2]], expected: [1, 2, 3] }];
    const result = buildVerdict(arrayTests, okResponse([returned(0, [1, 2, 3])]));
    expect(result.outcome).toBe('accepted');
  });

  it('accumulates totalDurationMs from outcomes that carry durationMs', () => {
    const withTiming: RunResponse = {
      type: 'result',
      requestId: 'r',
      ok: true,
      outcomes: [
        { index: 0, status: 'returned', value: 3, logs: [], durationMs: 2 },
        { index: 1, status: 'returned', value: 15, logs: [], durationMs: 3 },
      ],
    };
    const result = buildVerdict(tests, withTiming);
    expect(result.outcome).toBe('accepted');
    expect(result.totalDurationMs).toBe(5);
    const v0 = result.verdicts[0];
    if (v0?.status === 'pass') expect(v0.durationMs).toBe(2);
    const v1 = result.verdicts[1];
    if (v1?.status === 'pass') expect(v1.durationMs).toBe(3);
  });

  it('leaves totalDurationMs undefined when no outcomes carry durationMs', () => {
    const result = buildVerdict(tests, okResponse([returned(0, 3), returned(1, 15)]));
    expect(result.totalDurationMs).toBeUndefined();
  });

  it('includes durationMs on failing verdicts and accumulates all test times', () => {
    const withTiming: RunResponse = {
      type: 'result',
      requestId: 'r',
      ok: true,
      outcomes: [
        { index: 0, status: 'returned', value: 3, logs: [], durationMs: 1 },
        { index: 1, status: 'returned', value: 99, logs: [], durationMs: 2 },
      ],
    };
    const result = buildVerdict(tests, withTiming);
    expect(result.outcome).toBe('wrong-answer');
    // totalDurationMs is the sum of ALL test timings (pass + fail).
    expect(result.totalDurationMs).toBe(3);
    const v0 = result.verdicts[0];
    if (v0?.status === 'pass') expect(v0.durationMs).toBe(1);
    const v1 = result.verdicts[1];
    if (v1?.status === 'fail') expect(v1.durationMs).toBe(2);
  });
});
