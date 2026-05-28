import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-right-interval',
  title: 'Find Right Interval',
  difficulty: 'medium',
  tags: ['binary-search', 'arrays'],
  description: `You are given an array of \`intervals\`, where \`intervals[i] = [start_i, end_i]\` and each \`start_i\` is **unique**.

The **right interval** for an interval \`i\` is an interval \`j\` such that \`start_j >= end_i\` and \`start_j\` is **minimized**. Note that \`i\` may equal \`j\`.

Return an array of **right interval** indices for each interval \`i\`. If no **right interval** exists for interval \`i\`, then put \`-1\` at index \`i\`.`,
  constraints: [
    '1 <= intervals.length <= 2 * 10^4',
    'intervals[i].length == 2',
    '-10^6 <= start_i <= end_i <= 10^6',
    'The start point of each interval is unique',
  ],
  examples: [
    {
      input: 'intervals = [[1,2]]',
      output: '[-1]',
      explanation: 'There is only one interval in the collection, so it outputs -1.',
    },
    {
      input: 'intervals = [[3,4],[2,3],[1,2]]',
      output: '[-1,0,1]',
      explanation: 'For interval [3,4]: no start >= 4, so -1. For [2,3]: min start >= 3 is 3 (index 0). For [1,2]: min start >= 2 is 2 (index 1).',
    },
    {
      input: 'intervals = [[1,4],[2,3],[3,4]]',
      output: '[-1,2,-1]',
      explanation: 'For [1,4]: no start >= 4. For [2,3]: min start >= 3 is 3 (index 2). For [3,4]: no start >= 4.',
    },
  ],
  hints: [
    'Create a sorted array of (start, originalIndex) pairs.',
    'For each interval, binary search in the sorted starts array for the smallest start >= end_i.',
    'Return the original index of the found interval, or -1 if none.',
  ],
  functionName: 'findRightInterval',
  params: ['intervals'],
  starterCode: {
    javascript: `function findRightInterval(intervals) {

}`,
    typescript: "function findRightInterval(intervals: number[][]): number[] {\n\n}",

    python: `def findRightInterval(intervals):
    pass`,
  },
  visibleTests: [
    { args: [[[1, 2]]], expected: [-1] },
    { args: [[[3, 4], [2, 3], [1, 2]]], expected: [-1, 0, 1] },
    { args: [[[1, 4], [2, 3], [3, 4]]], expected: [-1, 2, -1] },
  ],
  hiddenTests: [
    { args: [[[1, 1]]], expected: [0] },
    { args: [[[1, 2], [2, 3]]], expected: [1, -1] },
    { args: [[[0, 1], [2, 3], [-1, 0]]], expected: [1, -1, 0] },
  ],
};
