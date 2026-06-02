import { describe, it, expect } from 'vitest';
import { computeSolvedStats } from '../src/pages/popup/popup-helpers';
import type { SolvedProblemRecord } from '../src/lib/types';
import { getAllProblems } from '../src/lib/problems';

function makeRecord(problemId: string, overrides: Partial<SolvedProblemRecord> = {}): SolvedProblemRecord {
  return {
    problemId,
    solvedAt: Date.now(),
    durationMs: 30_000,
    attempts: 1,
    language: 'javascript',
    domain: 'reddit.com',
    ...overrides,
  };
}

describe('computeSolvedStats', () => {
  it('returns zeros for an empty history', () => {
    const stats = computeSolvedStats([]);
    expect(stats.total).toBe(0);
    expect(stats.byDifficulty).toEqual({ easy: 0, medium: 0, hard: 0 });
    expect(stats.byTag).toEqual({});
  });

  it('counts a single known problem correctly', () => {
    const all = getAllProblems();
    expect(all.length).toBeGreaterThan(0);
    const first = all[0]!;
    const stats = computeSolvedStats([makeRecord(first.id)]);
    expect(stats.total).toBe(1);
    expect(stats.byDifficulty[first.difficulty]).toBe(1);
    for (const tag of first.tags) {
      expect(stats.byTag[tag]).toBe(1);
    }
  });

  it('deduplicates repeated solves of the same problem', () => {
    const all = getAllProblems();
    expect(all.length).toBeGreaterThan(0);
    const first = all[0]!;
    const stats = computeSolvedStats([
      makeRecord(first.id),
      makeRecord(first.id),
      makeRecord(first.id),
    ]);
    expect(stats.total).toBe(1);
    expect(stats.byDifficulty[first.difficulty]).toBe(1);
  });

  it('skips records for unknown problem IDs', () => {
    const stats = computeSolvedStats([makeRecord('does-not-exist-abc')]);
    expect(stats.total).toBe(0);
    expect(stats.byDifficulty).toEqual({ easy: 0, medium: 0, hard: 0 });
  });

  it('counts multiple distinct problems correctly', () => {
    const problems = getAllProblems();
    const easy = problems.find((p) => p.difficulty === 'easy');
    const medium = problems.find((p) => p.difficulty === 'medium');
    expect(easy).toBeDefined();
    expect(medium).toBeDefined();

    const stats = computeSolvedStats([makeRecord(easy!.id), makeRecord(medium!.id)]);
    expect(stats.total).toBe(2);
    expect(stats.byDifficulty.easy).toBeGreaterThanOrEqual(1);
    expect(stats.byDifficulty.medium).toBeGreaterThanOrEqual(1);
  });

  it('accumulates tag counts across multiple problems', () => {
    const problems = getAllProblems();
    const arraysProblems = problems.filter((p) => p.tags.includes('arrays')).slice(0, 2);
    expect(arraysProblems.length).toBeGreaterThanOrEqual(2);

    const stats = computeSolvedStats(arraysProblems.map((p) => makeRecord(p.id)));
    expect(stats.byTag['arrays']).toBe(2);
  });

  it('handles all bank problems without throwing', () => {
    const records = getAllProblems().map((p) => makeRecord(p.id));
    const stats = computeSolvedStats(records);
    expect(stats.total).toBe(getAllProblems().length);
    const diffTotal = stats.byDifficulty.easy + stats.byDifficulty.medium + stats.byDifficulty.hard;
    expect(diffTotal).toBe(stats.total);
  });
});
