import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-ways-group-overlapping-ranges',
  title: 'Count Ways to Group Overlapping Ranges',
  difficulty: 'medium',
  tags: ['arrays'],
  description: `You are given a 2D integer array \`ranges\` where \`ranges[i] = [start_i, end_i]\` denotes that all integers between \`start_i\` and \`end_i\` (inclusive) are contained in the \`i\`th range.

You are to split \`ranges\` into **two groups** (possibly empty) such that:

- Each range belongs to exactly one group.
- Any two **overlapping** ranges must belong to the **same group**.

Two ranges are said to overlap if there exists at least one integer that is present in both ranges.

Return the **total number of ways** to split \`ranges\` into two groups. Since the answer may be very large, return it modulo \`10^9 + 7\`.`,
  constraints: [
    '1 <= ranges.length <= 10^5',
    '0 <= start_i <= end_i <= 10^9',
  ],
  examples: [
    {
      input: 'ranges = [[6,10],[5,15]]',
      output: '2',
      explanation: 'The two ranges overlap, so they must be in the same group. 2 ways: both in group 1 or both in group 2.',
    },
    {
      input: 'ranges = [[1,3],[10,20],[2,5],[4,8]]',
      output: '4',
      explanation: 'Ranges [1,3],[2,5],[4,8] overlap and form one component. [10,20] is separate. 2 * 2 = 4.',
    },
  ],
  hints: [
    'Sort ranges by start. Merge overlapping ranges to count connected components.',
    'Two ranges overlap if start_i <= end_{i-1} (after sorting). Otherwise they form separate components.',
    'Answer = 2^(number of components) mod 10^9+7.',
  ],
  functionName: 'countWays',
  params: ['ranges'],
  starterCode: {
    javascript: 'function countWays(ranges) {\n\n}\n',
    typescript: "function countWays(ranges: number[][]): number {\n\n}",

    python: 'def countWays(ranges):\n    pass\n',
  },
  visibleTests: [
    { args: [[[6,10],[5,15]]], expected: 2 },
    { args: [[[1,3],[10,20],[2,5],[4,8]]], expected: 4 },
  ],
  hiddenTests: [
    { args: [[[1,2]]], expected: 2 },
    { args: [[[1,2],[3,4]]], expected: 4 },
    { args: [[[1,10],[2,3],[5,8]]], expected: 2 },
    { args: [[[1,2],[3,4],[5,6]]], expected: 8 },
  ],
};
