import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-of-smaller-numbers-after-self-bit',
  title: 'Count of Smaller Numbers After Self (BIT)',
  difficulty: 'hard',
  tags: ['binary-indexed-tree', 'arrays'],
  description: `Given an integer array \`nums\`, return an integer array \`counts\` where \`counts[i]\` is the number of smaller elements to the **right** of \`nums[i]\`.`,
  constraints: [
    '1 <= nums.length <= 10^5',
    '-10^4 <= nums[i] <= 10^4',
  ],
  examples: [
    {
      input: 'nums = [5,2,6,1]',
      output: '[2,1,1,0]',
      explanation: 'To the right of 5 are [2,6,1] — 2 elements smaller. To the right of 2 are [6,1] — 1 smaller. To the right of 6 is [1] — 1 smaller. Nothing to the right of 1.',
    },
    {
      input: 'nums = [-1]',
      output: '[0]',
    },
    {
      input: 'nums = [-1,-1]',
      output: '[0,0]',
    },
  ],
  hints: [
    'Coordinate compress: map the values to the range [1, m] (sorted unique values). Then iterate from right to left, querying the BIT for prefixSum(rank−1) to count smaller elements already seen.',
    'After querying, update the BIT at position `rank` with +1 to register the current element.',
    'Build a sorted list of unique values and use binary search (bisect) to find each value\'s 1-indexed rank. BIT prefix query up to rank−1 gives the count of smaller elements seen to the right so far.',
  ],
  functionName: 'countSmaller',
  params: ['nums'],
  starterCode: {
    javascript: 'function countSmaller(nums) {\n  \n}\n',
    typescript: "function countSmaller(nums: number[]): number[] {\n  \n}",

    python: 'def countSmaller(nums):\n    pass\n',
  },
  visibleTests: [
    { args: [[5,2,6,1]], expected: [2,1,1,0] },
    { args: [[-1]], expected: [0] },
    { args: [[-1,-1]], expected: [0,0] },
  ],
  hiddenTests: [
    { args: [[1]], expected: [0] },
    { args: [[2,0,1]], expected: [2,0,0] },
    { args: [[1,2,3,4,5]], expected: [0,0,0,0,0] },
    { args: [[5,4,3,2,1]], expected: [4,3,2,1,0] },
    { args: [[3,3,3,3]], expected: [0,0,0,0] },
  ],
};
