import { describe, it, expect } from 'vitest';
import {
  getAllProblems,
  getProblemById,
  filterProblems,
  selectProblem,
  pickChallengeProblem,
} from '../src/lib/problems';

describe('problem selector', () => {
  it('exposes the full bank', () => {
    expect(getAllProblems().length).toBeGreaterThan(0);
  });

  it('looks problems up by id', () => {
    const first = getAllProblems()[0];
    expect(first).toBeDefined();
    expect(getProblemById(first!.id)).toBe(first);
    expect(getProblemById('does-not-exist')).toBeUndefined();
  });

  it('filters by difficulty', () => {
    const easy = filterProblems({ difficulties: ['easy'] });
    expect(easy.length).toBeGreaterThan(0);
    expect(easy.every((p) => p.difficulty === 'easy')).toBe(true);
    const hard = filterProblems({ difficulties: ['hard'] });
    expect(hard.length).toBeGreaterThan(0);
    expect(hard.every((p) => p.difficulty === 'hard')).toBe(true);
  });

  it('filters by tag', () => {
    const arrays = filterProblems({ tags: ['arrays'] });
    expect(arrays.length).toBeGreaterThan(0);
    expect(arrays.every((p) => p.tags.includes('arrays'))).toBe(true);
  });

  it('treats an empty filter as "all problems"', () => {
    expect(filterProblems({})).toHaveLength(getAllProblems().length);
  });

  it('excludes ids', () => {
    const all = getAllProblems();
    const excluded = all[0]!.id;
    const remaining = filterProblems({ excludeIds: [excluded] });
    expect(remaining.some((p) => p.id === excluded)).toBe(false);
    expect(remaining).toHaveLength(all.length - 1);
  });

  it('selects deterministically with an injected random source', () => {
    const matches = filterProblems({ tags: ['arrays'] });
    const first = selectProblem({ tags: ['arrays'] }, () => 0);
    const last = selectProblem({ tags: ['arrays'] }, () => 0.999999);
    expect(first).toBe(matches[0]);
    expect(last).toBe(matches[matches.length - 1]);
  });

  it('returns undefined when nothing in the bank matches the filter', () => {
    // No problem uses a hypothetical 'insane' difficulty level
    // (Difficulty type only has easy | medium | hard, so we test a tag combo
    // that guarantees zero matches — e.g., hard+math when no hard math exists)
    expect(selectProblem({ difficulties: ['easy'], tags: ['stack'], excludeIds: [
      'balanced-brackets', 'remove-adjacent-dupes', 'next-greater-element',
      'daily-temperatures', 'evaluate-rpn', 'min-stack', 'implement-queue-using-stacks',
      'maximum-nesting-depth',
      'number-of-students-eating-lunch',
      'number-of-students-unable-to-eat-lunch',
      'make-string-great',
      'minimum-string-length',
      'minimum-length-string-operations',
      'students-unable-to-eat-lunch',
      'valid-parentheses',
      'find-resultant-array-after-removing-anagrams',
      'baseball-game',
      'next-greater-element-i',
      'remove-outermost-parentheses',
      'remove-all-adjacent-duplicates-in-string',
      'minimum-string-length-after-removing-substrings',
      'implement-stack-using-queues',
    ] })).toBeUndefined();
  });

  it('always picks a challenge problem, relaxing the filter as needed', () => {
    // With no difficulty + very narrow tag combo, it falls back gracefully.
    const picked = pickChallengeProblem(
      { difficulties: ['hard'], tags: ['dynamic-programming'] },
      { random: () => 0 },
    );
    expect(picked).toBeDefined();
  });

  it('filters by dynamic-programming tag', () => {
    const dp = filterProblems({ tags: ['dynamic-programming'] });
    expect(dp.length).toBeGreaterThan(0);
    expect(dp.every((p) => p.tags.includes('dynamic-programming'))).toBe(true);
    // At least the 5 backfilled classic DP problems should appear.
    const ids = dp.map((p) => p.id);
    expect(ids).toContain('climbing-stairs');
    expect(ids).toContain('fibonacci-number');
    expect(ids).toContain('word-break');
    expect(ids).toContain('edit-distance');
    expect(ids).toContain('longest-increasing-subsequence');
  });

  it('filters by graph tag', () => {
    const graph = filterProblems({ tags: ['graph'] });
    expect(graph.length).toBeGreaterThan(0);
    expect(graph.every((p) => p.tags.includes('graph'))).toBe(true);
    const ids = graph.map((p) => p.id);
    expect(ids).toContain('flood-fill');
    expect(ids).toContain('number-of-islands');
    expect(ids).toContain('course-schedule');
  });

  it('filters by backtracking tag', () => {
    const bt = filterProblems({ tags: ['backtracking'] });
    expect(bt.length).toBeGreaterThan(0);
    expect(bt.every((p) => p.tags.includes('backtracking'))).toBe(true);
    const ids = bt.map((p) => p.id);
    expect(ids).toContain('permutations');
    expect(ids).toContain('subsets');
    expect(ids).toContain('subsets-ii');
    expect(ids).toContain('combination-sum');
    expect(ids).toContain('letter-combinations-phone');
    expect(ids).toContain('generate-parentheses');
    expect(ids).toContain('sudoku-solver');
  });

  it('respects difficulty when it is satisfiable', () => {
    const picked = pickChallengeProblem({ difficulties: ['easy'], tags: [] }, { random: () => 0 });
    expect(picked?.difficulty).toBe('easy');
  });
});
