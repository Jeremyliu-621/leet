import { getProblemById } from '../../lib/problems';
import { localDateString } from '../../lib/streak';
import type {
  Difficulty,
  SolvedProblemRecord,
  StreakDay,
  SubmissionRecord,
  SupportedLanguage,
} from '../../lib/types';

// Pure data-aggregation helpers for the dashboard page. Kept separate from the
// React component so they can be unit-tested without a DOM, mirroring
// popup-helpers.ts.

// --- Contribution calendar -------------------------------------------------

export interface CalendarCell {
  /** Local calendar day, "YYYY-MM-DD". */
  date: string;
  solved: number;
  failed: number;
  /** True for grid cells that fall after today (padding in the final column). */
  inFuture: boolean;
}

export interface ContributionCalendar {
  /** Columns of 7 days each, Sunday (top) → Saturday (bottom). */
  weeks: CalendarCell[][];
  /** One label per column: an abbreviated month name, or null. */
  monthLabels: (string | null)[];
  /** Total solves across the visible range. */
  totalSolved: number;
  /** Number of days with at least one solve. */
  activeDays: number;
}

const MONTH_ABBR = [
  'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
  'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
];

/**
 * Build a GitHub-style contribution grid for the `weeks` columns ending on the
 * week containing `today`. Columns are aligned to calendar weeks starting
 * Sunday; days after `today` are flagged `inFuture` so the UI can render them
 * as inert padding.
 */
export function buildContributionCalendar(
  history: readonly StreakDay[],
  today: Date = new Date(),
  weeks = 53,
): ContributionCalendar {
  const byDate = new Map<string, StreakDay>(history.map((d) => [d.date, d]));

  const todayMidnight = new Date(today);
  todayMidnight.setHours(0, 0, 0, 0);
  const todayKey = localDateString(todayMidnight);

  // Sunday of the current week, then step back to the first column's Sunday.
  const gridStart = new Date(todayMidnight);
  gridStart.setDate(todayMidnight.getDate() - todayMidnight.getDay() - (weeks - 1) * 7);

  const columns: CalendarCell[][] = [];
  const monthLabels: (string | null)[] = [];
  let totalSolved = 0;
  let activeDays = 0;
  let reachedToday = false;

  for (let w = 0; w < weeks; w++) {
    const column: CalendarCell[] = [];
    let columnMonthLabel: string | null = null;

    for (let d = 0; d < 7; d++) {
      const cellDate = new Date(gridStart);
      cellDate.setDate(gridStart.getDate() + w * 7 + d);
      const key = localDateString(cellDate);
      const entry = byDate.get(key);
      const solved = entry?.solved ?? 0;
      const failed = entry?.failed ?? 0;
      const inFuture = reachedToday && key !== todayKey ? true : key > todayKey;

      if (!inFuture) {
        totalSolved += solved;
        if (solved > 0) activeDays += 1;
      }
      if (key === todayKey) reachedToday = true;

      // Label the column on the row that holds the 1st of a month.
      if (cellDate.getDate() === 1) columnMonthLabel = MONTH_ABBR[cellDate.getMonth()] ?? null;

      column.push({ date: key, solved, failed, inFuture });
    }

    columns.push(column);
    monthLabels.push(columnMonthLabel);
  }

  return { weeks: columns, monthLabels, totalSolved, activeDays };
}

// --- Attempted / solved problem list ---------------------------------------

export type AttemptStatus = 'solved' | 'attempted';

export interface AttemptedProblem {
  problemId: string;
  title: string;
  difficulty: Difficulty;
  status: AttemptStatus;
  /** Submission count (solved: attempts before passing; attempted: history length). */
  attempts: number;
  language: SupportedLanguage | null;
  /** Wall-clock time on the solving session, when known. */
  durationMs: number | null;
  /** solvedAt for solved problems, else the most recent submission timestamp. */
  lastActivityAt: number;
  /** Blocked host that triggered the solve, when known. */
  domain: string | null;
}

/**
 * Merge solve history and unsolved submission history into one list of every
 * problem the user has touched, newest activity first. A problem counts as
 * `solved` if it appears in `solved` (submission history is cleared on solve),
 * otherwise `attempted`. Unknown problem ids (removed from the bank) are
 * skipped. The most recent solve wins when a problem was solved more than once.
 */
export function buildAttemptedProblems(
  solved: readonly SolvedProblemRecord[],
  submissionHistory: Readonly<Record<string, readonly SubmissionRecord[]>>,
): AttemptedProblem[] {
  const result: AttemptedProblem[] = [];
  const solvedIds = new Set<string>();

  // Most recent solve per problem id.
  const latestSolve = new Map<string, SolvedProblemRecord>();
  for (const record of solved) {
    const prev = latestSolve.get(record.problemId);
    if (!prev || record.solvedAt > prev.solvedAt) latestSolve.set(record.problemId, record);
  }

  for (const [problemId, record] of latestSolve) {
    const problem = getProblemById(problemId);
    if (!problem) continue;
    solvedIds.add(problemId);
    result.push({
      problemId,
      title: problem.title,
      difficulty: problem.difficulty,
      status: 'solved',
      attempts: record.attempts,
      language: record.language,
      durationMs: record.durationMs,
      lastActivityAt: record.solvedAt,
      domain: record.domain || null,
    });
  }

  for (const [problemId, history] of Object.entries(submissionHistory)) {
    if (solvedIds.has(problemId) || history.length === 0) continue;
    const problem = getProblemById(problemId);
    if (!problem) continue;
    const last = history[history.length - 1]!;
    result.push({
      problemId,
      title: problem.title,
      difficulty: problem.difficulty,
      status: 'attempted',
      attempts: history.length,
      language: last.language ?? null,
      durationMs: null,
      lastActivityAt: last.timestamp,
      domain: null,
    });
  }

  result.sort((a, b) => b.lastActivityAt - a.lastActivityAt);
  return result;
}

// --- Language usage --------------------------------------------------------

export interface LanguageCount {
  language: SupportedLanguage;
  count: number;
}

/**
 * Count distinct solved problems per language (most recent solve's language
 * wins for a re-solved problem), sorted by count descending.
 */
export function computeLanguageBreakdown(
  solved: readonly SolvedProblemRecord[],
): LanguageCount[] {
  const latest = new Map<string, SolvedProblemRecord>();
  for (const record of solved) {
    const prev = latest.get(record.problemId);
    if (!prev || record.solvedAt > prev.solvedAt) latest.set(record.problemId, record);
  }

  const counts = new Map<SupportedLanguage, number>();
  for (const record of latest.values()) {
    counts.set(record.language, (counts.get(record.language) ?? 0) + 1);
  }

  return [...counts.entries()]
    .map(([language, count]) => ({ language, count }))
    .sort((a, b) => b.count - a.count);
}

// --- Headline stats --------------------------------------------------------

export interface HeadlineStats {
  totalSolves: number;
  totalSolvedMs: number;
  /** Mean submissions-to-solve across distinct solved problems (0 if none). */
  avgAttempts: number;
  /** Fastest solve duration in ms across solved problems (null if none). */
  fastestMs: number | null;
}

/**
 * Roll up time invested, average attempts, and fastest solve. Counts each
 * problem once (most recent solve), so re-solving doesn't inflate the figures.
 */
export function computeHeadlineStats(solved: readonly SolvedProblemRecord[]): HeadlineStats {
  const latest = new Map<string, SolvedProblemRecord>();
  for (const record of solved) {
    const prev = latest.get(record.problemId);
    if (!prev || record.solvedAt > prev.solvedAt) latest.set(record.problemId, record);
  }

  let totalMs = 0;
  let totalAttempts = 0;
  let fastestMs: number | null = null;
  for (const record of latest.values()) {
    totalMs += record.durationMs;
    totalAttempts += record.attempts;
    if (fastestMs === null || record.durationMs < fastestMs) fastestMs = record.durationMs;
  }

  const totalSolves = latest.size;
  return {
    totalSolves,
    totalSolvedMs: totalMs,
    avgAttempts: totalSolves === 0 ? 0 : totalAttempts / totalSolves,
    fastestMs,
  };
}
