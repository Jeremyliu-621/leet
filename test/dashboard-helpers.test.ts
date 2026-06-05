import { describe, it, expect } from 'vitest';
import {
  buildContributionCalendar,
  buildAttemptedProblems,
  computeLanguageBreakdown,
  computeHeadlineStats,
} from '../src/pages/dashboard/dashboard-helpers';
import { getAllProblems } from '../src/lib/problems';
import { localDateString } from '../src/lib/streak';
import type { SolvedProblemRecord, StreakDay, SubmissionRecord } from '../src/lib/types';

function makeSolve(
  problemId: string,
  overrides: Partial<SolvedProblemRecord> = {},
): SolvedProblemRecord {
  return {
    problemId,
    solvedAt: Date.UTC(2026, 0, 15),
    durationMs: 30_000,
    attempts: 1,
    language: 'javascript',
    domain: 'reddit.com',
    ...overrides,
  };
}

function makeSubmission(overrides: Partial<SubmissionRecord> = {}): SubmissionRecord {
  return {
    attempt: 1,
    timestamp: Date.UTC(2026, 0, 10),
    outcome: 'wrong-answer',
    passCount: 1,
    totalTests: 3,
    ...overrides,
  };
}

describe('buildContributionCalendar', () => {
  const today = new Date(2026, 5, 1); // June 1 2026, local

  it('produces a weeks×7 grid of the requested width', () => {
    const cal = buildContributionCalendar([], today, 53);
    expect(cal.weeks).toHaveLength(53);
    for (const col of cal.weeks) expect(col).toHaveLength(7);
  });

  it('totals only non-future solves and counts active days', () => {
    const history: StreakDay[] = [
      { date: localDateString(new Date(2026, 4, 20)), solved: 3, failed: 1 },
      { date: localDateString(new Date(2026, 4, 21)), solved: 2, failed: 0 },
    ];
    const cal = buildContributionCalendar(history, today, 53);
    expect(cal.totalSolved).toBe(5);
    expect(cal.activeDays).toBe(2);
  });

  it('flags days after today as inFuture and excludes them from totals', () => {
    const future = localDateString(new Date(2026, 5, 5)); // after today
    const history: StreakDay[] = [{ date: future, solved: 9, failed: 0 }];
    const cal = buildContributionCalendar(history, today, 53);
    expect(cal.totalSolved).toBe(0);
    const futureCell = cal.weeks.flat().find((c) => c.date === future);
    expect(futureCell?.inFuture).toBe(true);
  });

  it('includes today and marks it not-in-future', () => {
    const cal = buildContributionCalendar([], today, 53);
    const todayKey = localDateString(today);
    const cell = cal.weeks.flat().find((c) => c.date === todayKey);
    expect(cell).toBeDefined();
    expect(cell?.inFuture).toBe(false);
  });

  it('surfaces at least one month label', () => {
    const cal = buildContributionCalendar([], today, 53);
    expect(cal.monthLabels.some((m) => m !== null)).toBe(true);
  });
});

describe('buildAttemptedProblems', () => {
  it('returns an empty list for no data', () => {
    expect(buildAttemptedProblems([], {})).toEqual([]);
  });

  it('marks solved problems as solved with their metadata', () => {
    const p = getAllProblems()[0];
    if (!p) return;
    const list = buildAttemptedProblems(
      [makeSolve(p.id, { attempts: 4, language: 'python', durationMs: 12_000 })],
      {},
    );
    expect(list).toHaveLength(1);
    expect(list[0]).toMatchObject({
      problemId: p.id,
      status: 'solved',
      attempts: 4,
      language: 'python',
      durationMs: 12_000,
    });
  });

  it('keeps the most recent solve when a problem is solved twice', () => {
    const p = getAllProblems()[0];
    if (!p) return;
    const list = buildAttemptedProblems(
      [
        makeSolve(p.id, { solvedAt: 100, attempts: 5 }),
        makeSolve(p.id, { solvedAt: 200, attempts: 2 }),
      ],
      {},
    );
    expect(list).toHaveLength(1);
    expect(list[0]?.attempts).toBe(2);
    expect(list[0]?.lastActivityAt).toBe(200);
  });

  it('includes unsolved submission history as attempted', () => {
    const p = getAllProblems()[0];
    if (!p) return;
    const list = buildAttemptedProblems([], {
      [p.id]: [makeSubmission(), makeSubmission({ attempt: 2, language: 'javascript' })],
    });
    expect(list).toHaveLength(1);
    expect(list[0]).toMatchObject({ status: 'attempted', attempts: 2, language: 'javascript' });
  });

  it('does not duplicate a problem that is both solved and in submission history', () => {
    const p = getAllProblems()[0];
    if (!p) return;
    const list = buildAttemptedProblems([makeSolve(p.id)], { [p.id]: [makeSubmission()] });
    expect(list).toHaveLength(1);
    expect(list[0]?.status).toBe('solved');
  });

  it('skips unknown problem ids', () => {
    const list = buildAttemptedProblems([makeSolve('nope-not-real')], {
      'also-not-real': [makeSubmission()],
    });
    expect(list).toEqual([]);
  });

  it('sorts by most recent activity first', () => {
    const ps = getAllProblems().slice(0, 2);
    if (ps.length < 2) return;
    const list = buildAttemptedProblems(
      [
        makeSolve(ps[0]!.id, { solvedAt: 100 }),
        makeSolve(ps[1]!.id, { solvedAt: 500 }),
      ],
      {},
    );
    expect(list[0]?.problemId).toBe(ps[1]!.id);
  });
});

describe('computeLanguageBreakdown', () => {
  it('is empty for no solves', () => {
    expect(computeLanguageBreakdown([])).toEqual([]);
  });

  it('counts distinct problems per language, sorted descending', () => {
    const ps = getAllProblems().slice(0, 3);
    if (ps.length < 3) return;
    const breakdown = computeLanguageBreakdown([
      makeSolve(ps[0]!.id, { language: 'python' }),
      makeSolve(ps[1]!.id, { language: 'python' }),
      makeSolve(ps[2]!.id, { language: 'javascript' }),
    ]);
    expect(breakdown[0]).toEqual({ language: 'python', count: 2 });
    expect(breakdown[1]).toEqual({ language: 'javascript', count: 1 });
  });
});

describe('computeHeadlineStats', () => {
  it('returns zeros for no solves', () => {
    expect(computeHeadlineStats([])).toEqual({
      totalSolves: 0,
      totalSolvedMs: 0,
      avgAttempts: 0,
      fastestMs: null,
    });
  });

  it('aggregates time, average attempts, and fastest solve over distinct problems', () => {
    const ps = getAllProblems().slice(0, 2);
    if (ps.length < 2) return;
    const stats = computeHeadlineStats([
      makeSolve(ps[0]!.id, { durationMs: 10_000, attempts: 1 }),
      makeSolve(ps[1]!.id, { durationMs: 30_000, attempts: 3 }),
    ]);
    expect(stats.totalSolves).toBe(2);
    expect(stats.totalSolvedMs).toBe(40_000);
    expect(stats.avgAttempts).toBe(2);
    expect(stats.fastestMs).toBe(10_000);
  });
});
