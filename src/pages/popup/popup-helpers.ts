import { getProblemById } from '../../lib/problems';
import type { Difficulty, ProblemTag, SolvedProblemRecord } from '../../lib/types';

export interface SolvedStats {
  byDifficulty: Record<Difficulty, number>;
  byTag: Partial<Record<ProblemTag, number>>;
  total: number;
}

/**
 * Aggregates the solve history into per-difficulty and per-tag counts.
 * Each problem ID is counted at most once regardless of how many times it
 * appears in the history (multiple sessions on the same blocked site).
 */
export function computeSolvedStats(records: readonly SolvedProblemRecord[]): SolvedStats {
  const byDifficulty: Record<Difficulty, number> = { easy: 0, medium: 0, hard: 0 };
  const byTag: Partial<Record<ProblemTag, number>> = {};
  const seenProblems = new Set<string>();

  for (const record of records) {
    if (seenProblems.has(record.problemId)) continue;

    const problem = getProblemById(record.problemId);
    if (!problem) continue;

    seenProblems.add(record.problemId);

    byDifficulty[problem.difficulty] += 1;
    for (const tag of problem.tags) {
      byTag[tag] = (byTag[tag] ?? 0) + 1;
    }
  }

  return { byDifficulty, byTag, total: seenProblems.size };
}
