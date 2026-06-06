import type { StreakDay, StreakSummary } from '../types';

// Streak tracking — daily solve/fail counts plus a current/longest summary.
// Pure helpers: the service worker / UI pass in the current values, get back
// the new ones, and decide where to persist.

/** Hard cap on stored daily history to keep storage.local bounded. */
export const MAX_HISTORY_DAYS = 365;

/** Format a Date as 'YYYY-MM-DD' in the local timezone. */
export function localDateString(date: Date = new Date()): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

/** Regex that validates a 'YYYY-MM-DD' date string (basic format check). */
const DATE_RE = /^\d{4}-\d{2}-\d{2}$/;

/** Whole-day distance (a − b) between two 'YYYY-MM-DD' strings, local. */
export function daysBetween(a: string, b: string): number {
  if (!DATE_RE.test(a) || !DATE_RE.test(b)) return NaN;
  const aMs = new Date(`${a}T00:00:00`).getTime();
  const bMs = new Date(`${b}T00:00:00`).getTime();
  if (Number.isNaN(aMs) || Number.isNaN(bMs)) return NaN;
  return Math.round((aMs - bMs) / (24 * 60 * 60 * 1000));
}

/** Empty initial summary, used on first run. */
export const EMPTY_SUMMARY: StreakSummary = {
  current: 0,
  longest: 0,
  lastSolvedDate: null,
  damaged: false,
};

export interface DayInput {
  /** Date the event happened; defaults to now. Ignored if `today` is set. */
  at?: Date;
  /** Explicit local-day override, useful for deterministic tests. */
  today?: string;
}

export interface StreakState {
  summary: StreakSummary;
  history: StreakDay[];
}

function upsertDay(
  history: readonly StreakDay[],
  date: string,
  patch: (day: StreakDay) => StreakDay,
): StreakDay[] {
  let found = false;
  const next = history.map((day) => {
    if (day.date === date) {
      found = true;
      return patch(day);
    }
    return day;
  });
  if (!found) {
    next.push(patch({ date, solved: 0, failed: 0 }));
  }
  return next.slice(-MAX_HISTORY_DAYS);
}

/** Record one solve; returns the next summary and capped history. */
export function recordSolve(
  summary: StreakSummary,
  history: readonly StreakDay[],
  input: DayInput = {},
): StreakState {
  const today = input.today ?? localDateString(input.at);
  const nextHistory = upsertDay(history, today, (day) => ({ ...day, solved: day.solved + 1 }));

  let current: number;
  if (summary.lastSolvedDate === null) {
    current = 1;
  } else if (summary.lastSolvedDate === today) {
    current = summary.current; // same-day repeat solve doesn't double-count
  } else {
    const delta = daysBetween(today, summary.lastSolvedDate);
    // NaN (malformed date in storage) is treated as a non-consecutive day.
    current = delta === 1 ? summary.current + 1 : 1;
  }
  const longest = Math.max(summary.longest, current);
  return {
    summary: { current, longest, lastSolvedDate: today, damaged: false },
    history: nextHistory,
  };
}

/** Record one failed challenge; marks the streak damaged for the day. */
export function recordFail(
  summary: StreakSummary,
  history: readonly StreakDay[],
  input: DayInput = {},
): StreakState {
  const today = input.today ?? localDateString(input.at);
  const nextHistory = upsertDay(history, today, (day) => ({ ...day, failed: day.failed + 1 }));
  return {
    summary: { ...summary, damaged: true },
    history: nextHistory,
  };
}

/**
 * Streak damage — fires when the user disables LeetMeow, removes a block rule
 * mid-cooldown, or takes any other anti-bypass-circumventing action. The
 * current streak resets, longest is preserved as a record of past discipline.
 */
export function damageStreak(summary: StreakSummary): StreakSummary {
  return {
    current: 0,
    longest: summary.longest,
    lastSolvedDate: summary.lastSolvedDate,
    damaged: true,
  };
}
