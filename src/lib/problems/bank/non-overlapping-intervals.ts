import type { Problem } from '../types';

export const problem: Problem = {
  id: 'non-overlapping-intervals',
  title: 'Non-overlapping Intervals',
  difficulty: 'medium',
  tags: ['arrays'],
  description: `Given an array of \`intervals\` where \`intervals[i] = [start, end]\`, return the **minimum number of intervals** you need to remove to make the rest non-overlapping.`,
  constraints: [
    '`1 <= intervals.length <= 10⁵`',
    '`intervals[i].length == 2`',
    '`-5 × 10⁴ <= start < end <= 5 × 10⁴`',
  ],
  examples: [
    {
      input: 'intervals = [[1,2],[2,3],[3,4],[1,3]]',
      output: '1',
      explanation: '[1,3] can be removed and the rest are non-overlapping.',
    },
    {
      input: 'intervals = [[1,2],[1,2],[1,2]]',
      output: '2',
      explanation: 'Two intervals need to be removed to make it non-overlapping.',
    },
    {
      input: 'intervals = [[1,2],[2,3]]',
      output: '0',
      explanation: 'These two intervals are already non-overlapping.',
    },
  ],
  hints: [
    'This is equivalent to finding the maximum number of non-overlapping intervals you can keep (then: answer = n − max_kept).',
    'Sort by end time (the earlier an interval ends, the more room it leaves for future intervals).',
    'Greedy: iterate through sorted intervals, keeping track of the end of the last kept interval. If the current start ≥ last end, keep it.',
  ],
  functionName: 'eraseOverlapIntervals',
  params: ['intervals'],
  starterCode: {
    javascript: `function eraseOverlapIntervals(intervals) {

}`,
    typescript: "function eraseOverlapIntervals(intervals: number[][]): number {\n\n}",

    python: `def eraseOverlapIntervals(intervals):
    pass`,
  },
  visibleTests: [
    { args: [[[1, 2], [2, 3], [3, 4], [1, 3]]], expected: 1 },
    { args: [[[1, 2], [1, 2], [1, 2]]], expected: 2 },
    { args: [[[1, 2], [2, 3]]], expected: 0 },
  ],
  hiddenTests: [
    { args: [[[0, 2], [1, 3], [2, 4], [3, 5], [4, 6]]], expected: 2 },
    { args: [[[1, 100], [11, 22], [1, 11], [2, 12]]], expected: 2 },
    { args: [[[1, 2]]], expected: 0 },
  ],
};
