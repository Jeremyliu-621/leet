import type { Problem } from '../types';

export const problem: Problem = {
  id: 'smallest-range-covering-elements-from-k-lists',
  title: 'Smallest Range Covering Elements From K Lists',
  difficulty: 'hard',
  tags: ['arrays', 'heap', 'sliding-window'],
  description: `You have \`k\` lists of sorted integers in **non-decreasing** order. Find the **smallest** range \`[a, b]\` that includes at least one number from each of the \`k\` lists.

We define the range \`[a, b]\` where \`b - a\` is as small as possible and \`a\` is as small as possible if there is a tie.

Return the result as an array \`[a, b]\`.`,
  constraints: [
    'nums.length == k',
    '1 <= k <= 3500',
    '1 <= nums[i].length <= 50',
    '-10^5 <= nums[i][j] <= 10^5',
    'nums[i] is sorted in non-decreasing order.',
  ],
  examples: [
    {
      input: 'nums = [[4,10,15,24,26],[0,9,12,20],[5,18,22,30]]',
      output: '[20,24]',
      explanation: 'Range [20,24] contains 24 from list 1, 20 from list 2, 22 from list 3.',
    },
    {
      input: 'nums = [[1,2,3],[1,2,3],[1,2,3]]',
      output: '[1,1]',
      explanation: 'Range [1,1] contains 1 from each list.',
    },
  ],
  hints: [
    'Use a min-heap containing one element from each list: (value, listIndex, elementIndex).',
    'Track the current maximum value across all k elements in the heap.',
    'The current range is [heap_min, current_max]. Pop the minimum, update range if better, advance that list.',
  ],
  functionName: 'smallestRange',
  params: ['nums'],
  starterCode: {
    javascript: 'function smallestRange(nums) {\n  \n}\n',
    typescript: 'function smallestRange(nums: number[][]): number[] {\n  \n}',
    python: 'def smallestRange(nums):\n    pass\n',
  },
  visibleTests: [
    {
      args: [[[4, 10, 15, 24, 26], [0, 9, 12, 20], [5, 18, 22, 30]]],
      expected: [20, 24],
    },
    { args: [[[1, 2, 3], [1, 2, 3], [1, 2, 3]]], expected: [1, 1] },
  ],
  hiddenTests: [
    { args: [[[10, 13], [11]]], expected: [10, 11] },
    { args: [[[1], [2], [3]]], expected: [1, 3] },
    { args: [[[1, 2], [2, 3], [3, 4]]], expected: [2, 3] },
  ],
};
