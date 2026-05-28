import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-ways-to-group-overlapping-ranges',
  title: 'Count Ways to Group Overlapping Ranges',
  difficulty: 'medium',
  tags: ['arrays', 'math'],
  description: `You are given a 2D integer array \`ranges\` where \`ranges[i] = [start_i, end_i]\` denotes that all integers between \`start_i\` and \`end_i\` (inclusive) are contained in the \`i\`th range.

You are to split \`ranges\` into **two** (possibly empty) groups such that:

- Each range belongs to exactly one group.
- Any two **overlapping** ranges must belong to the **same** group.

Two ranges are said to be overlapping if there exists at least one integer present in both ranges.

Return the **number of ways** to split \`ranges\` into two groups. Since the answer may be very large, return it **modulo** \`10^9 + 7\`.`,
  constraints: [
    '1 <= ranges.length <= 10^5',
    '0 <= start_i <= end_i <= 10^9',
  ],
  examples: [
    {
      input: 'ranges = [[6,10],[5,15]]',
      output: '2',
      explanation: 'The two ranges overlap, so they must be in the same group. There are 2 ways (assign that group to group 1 or group 2).',
    },
    {
      input: 'ranges = [[1,3],[10,20],[2,5],[4,8]]',
      output: '4',
      explanation: 'After sorting: [1,3],[2,5],[4,8] all overlap and form one connected group; [10,20] is separate. 2 groups → 2^2 = 4 ways.',
    },
    {
      input: 'ranges = [[1,2],[3,4]]',
      output: '4',
      explanation: 'No overlap between [1,2] and [3,4], so 2 independent groups → 2^2 = 4.',
    },
  ],
  hints: [
    'Sort ranges by start time.',
    'Merge overlapping ranges using a sweep: track the maximum right endpoint seen so far.',
    'When a new range\'s start exceeds the current max right endpoint, it starts a new connected component.',
    'Count k connected components and return 2^k mod (10^9 + 7).',
  ],
  functionName: 'countWays',
  params: ['ranges'],
  starterCode: {
    javascript: 'function countWays(ranges) {\n  \n}\n',
    python: 'def countWays(ranges):\n    pass\n',
  },
  visibleTests: [
    { args: [[[6, 10], [5, 15]]], expected: 2 },
    { args: [[[1, 3], [10, 20], [2, 5], [4, 8]]], expected: 4 },
    { args: [[[1, 2], [3, 4]]], expected: 4 },
  ],
  hiddenTests: [
    { args: [[[1, 1]]], expected: 2 },
    { args: [[[1, 10], [2, 3], [4, 5]]], expected: 2 },
    { args: [[[1, 2], [3, 4], [5, 6]]], expected: 8 },
    { args: [[[0, 0], [1, 1], [2, 2]]], expected: 8 },
    { args: [[[0, 1000000000]]], expected: 2 },
  ],
};
