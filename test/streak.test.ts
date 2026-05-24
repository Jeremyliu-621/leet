import { describe, it, expect } from 'vitest';
import {
  EMPTY_SUMMARY,
  MAX_HISTORY_DAYS,
  damageStreak,
  daysBetween,
  localDateString,
  recordFail,
  recordSolve,
} from '../src/lib/streak/streak';
import type { StreakDay, StreakSummary } from '../src/lib/types';

describe('daysBetween', () => {
  it('returns the whole-day delta', () => {
    expect(daysBetween('2026-05-23', '2026-05-22')).toBe(1);
    expect(daysBetween('2026-05-22', '2026-05-23')).toBe(-1);
    expect(daysBetween('2026-05-23', '2026-05-23')).toBe(0);
    expect(daysBetween('2026-06-01', '2026-05-30')).toBe(2);
  });
});

describe('localDateString', () => {
  it('formats a Date as YYYY-MM-DD in local time', () => {
    const d = new Date(2026, 4, 23, 14, 30); // 2026-05-23 local
    expect(localDateString(d)).toBe('2026-05-23');
  });
});

describe('recordSolve', () => {
  it('starts the streak from zero', () => {
    const next = recordSolve(EMPTY_SUMMARY, [], { today: '2026-05-23' });
    expect(next.summary.current).toBe(1);
    expect(next.summary.longest).toBe(1);
    expect(next.summary.lastSolvedDate).toBe('2026-05-23');
    expect(next.summary.damaged).toBe(false);
    expect(next.history).toEqual([{ date: '2026-05-23', solved: 1, failed: 0 }]);
  });

  it('extends the streak when the next solve is the very next day', () => {
    const start: StreakSummary = { current: 4, longest: 4, lastSolvedDate: '2026-05-22', damaged: false };
    const next = recordSolve(start, [], { today: '2026-05-23' });
    expect(next.summary.current).toBe(5);
    expect(next.summary.longest).toBe(5);
  });

  it('resets to 1 when a day is skipped', () => {
    const start: StreakSummary = { current: 7, longest: 7, lastSolvedDate: '2026-05-20', damaged: false };
    const next = recordSolve(start, [], { today: '2026-05-23' });
    expect(next.summary.current).toBe(1);
    expect(next.summary.longest).toBe(7); // preserved
  });

  it('does not double-count same-day repeat solves but adds to history.solved', () => {
    const start: StreakSummary = { current: 3, longest: 3, lastSolvedDate: '2026-05-23', damaged: false };
    const history: StreakDay[] = [{ date: '2026-05-23', solved: 1, failed: 0 }];
    const next = recordSolve(start, history, { today: '2026-05-23' });
    expect(next.summary.current).toBe(3);
    expect(next.history.find((d) => d.date === '2026-05-23')?.solved).toBe(2);
  });

  it('clears the "damaged" flag on a successful solve', () => {
    const start: StreakSummary = { current: 0, longest: 5, lastSolvedDate: '2026-05-22', damaged: true };
    const next = recordSolve(start, [], { today: '2026-05-23' });
    expect(next.summary.damaged).toBe(false);
  });

  it('caps history to MAX_HISTORY_DAYS', () => {
    const history: StreakDay[] = Array.from({ length: MAX_HISTORY_DAYS }, (_, i) => ({
      date: `synthetic-${i}`,
      solved: 1,
      failed: 0,
    }));
    const next = recordSolve(EMPTY_SUMMARY, history, { today: '2026-05-23' });
    expect(next.history).toHaveLength(MAX_HISTORY_DAYS);
    expect(next.history[next.history.length - 1]?.date).toBe('2026-05-23');
  });
});

describe('recordFail', () => {
  it('flags damaged but does not change current/longest', () => {
    const start: StreakSummary = { current: 4, longest: 4, lastSolvedDate: '2026-05-22', damaged: false };
    const next = recordFail(start, [], { today: '2026-05-23' });
    expect(next.summary.damaged).toBe(true);
    expect(next.summary.current).toBe(4);
    expect(next.summary.longest).toBe(4);
    expect(next.history).toEqual([{ date: '2026-05-23', solved: 0, failed: 1 }]);
  });
});

describe('damageStreak', () => {
  it('resets current to 0, preserves longest, flags damaged', () => {
    const start: StreakSummary = { current: 9, longest: 12, lastSolvedDate: '2026-05-22', damaged: false };
    const next = damageStreak(start);
    expect(next.current).toBe(0);
    expect(next.longest).toBe(12);
    expect(next.damaged).toBe(true);
    expect(next.lastSolvedDate).toBe('2026-05-22');
  });
});
