import type { Problem } from '../types';

export const problem: Problem = {
  id: 'merge-intervals',
  title: 'Merge Intervals',
  difficulty: 'medium',
  tags: ['arrays'],
  description: `Given an array of \`intervals\` where \`intervals[i] = [start, end]\`, merge all overlapping intervals and return an array of the non-overlapping intervals that cover all the intervals in the input.`,
  constraints: [
    '`1 <= intervals.length <= 10⁴`',
    '`intervals[i].length == 2`',
    '`0 <= start <= end <= 10⁴`',
  ],
  examples: [
    {
      input: 'intervals = [[1,3],[2,6],[8,10],[15,18]]',
      output: '[[1,6],[8,10],[15,18]]',
      explanation: 'Since intervals [1,3] and [2,6] overlap, merge them into [1,6].',
    },
    {
      input: 'intervals = [[1,4],[4,5]]',
      output: '[[1,5]]',
      explanation: 'Intervals [1,4] and [4,5] are considered overlapping.',
    },
  ],
  hints: [
    'Sort intervals by their start time.',
    'Walk through the sorted intervals. Keep a "current" interval. If the next interval\'s start ≤ current\'s end, merge by extending current\'s end to max(current.end, next.end).',
    'Otherwise, push current to the result and start a new current interval.',
  ],
  functionName: 'merge',
  params: ['intervals'],
  starterCode: {
    javascript: `function merge(intervals) {

}`,
    python: `def merge(intervals):
    pass`,
  },
  visibleTests: [
    { args: [[[1, 3], [2, 6], [8, 10], [15, 18]]], expected: [[1, 6], [8, 10], [15, 18]] },
    { args: [[[1, 4], [4, 5]]], expected: [[1, 5]] },
    { args: [[[1, 4]]], expected: [[1, 4]] },
  ],
  hiddenTests: [
    { args: [[[1, 4], [0, 4]]], expected: [[0, 4]] },
    { args: [[[1, 4], [2, 3]]], expected: [[1, 4]] },
    { args: [[[1, 2], [3, 4], [5, 6]]], expected: [[1, 2], [3, 4], [5, 6]] },
  ],
};
