import type { Problem } from '../types';

export const problem: Problem = {
  id: 'smallest-range-covering-k-lists',
  title: 'Smallest Range Covering Elements from K Lists',
  difficulty: 'hard',
  tags: ['heap', 'sliding-window'],
  description: `You have \`k\` lists of sorted integers. Find the **smallest range** \`[a, b]\` such that there is at least one number from each list within the range.

The range \`[a, b]\` is smaller than \`[c, d]\` if \`b - a < d - c\`, or \`a < c\` when \`b - a == d - c\`.

Return the range as \`[a, b]\`.`,
  constraints: [
    'nums.length == k',
    '1 <= k <= 3500',
    '1 <= nums[i].length <= 50',
    '-10^5 <= nums[i][j] <= 10^5',
    'nums[i] is sorted in non-decreasing order',
  ],
  examples: [
    {
      input: 'nums = [[4,10,15,24,26],[0,9,12,20],[5,18,22,30]]',
      output: '[20,24]',
      explanation:
        'List 0: 24, List 1: 20, List 2: 22. All three lists contribute a value in [20,24].',
    },
    {
      input: 'nums = [[1,2,3],[1,2,3],[1,2,3]]',
      output: '[1,1]',
      explanation: 'The value 1 appears in all three lists.',
    },
  ],
  hints: [
    'Use a min-heap containing the current smallest element from each list.',
    'Track the current maximum value across all lists.',
    'Pop the minimum, update the range [min, max], then push the next element from that list. Stop when any list is exhausted.',
  ],
  functionName: 'smallestRange',
  params: ['nums'],
  starterCode: {
    javascript: `function smallestRange(nums) {

}`,
    typescript: "function smallestRange(nums: number[][]): number[] {\n\n}",

    python: `def smallestRange(nums: list[list[int]]) -> list[int]:
    pass`,
  },
  visibleTests: [
    {
      args: [[[4, 10, 15, 24, 26], [0, 9, 12, 20], [5, 18, 22, 30]]],
      expected: [20, 24],
    },
    {
      args: [[[1, 2, 3], [1, 2, 3], [1, 2, 3]]],
      expected: [1, 1],
    },
  ],
  hiddenTests: [
    {
      args: [[[1], [1]]],
      expected: [1, 1],
    },
    {
      args: [[[1, 5], [2, 6], [3, 7]]],
      expected: [1, 3],
    },
    {
      args: [[[10, 15], [1, 5], [7, 12]]],
      expected: [5, 10],
    },
    {
      args: [[[1], [2], [3]]],
      expected: [1, 3],
    },
  ],
};
