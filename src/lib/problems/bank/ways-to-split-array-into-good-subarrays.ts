import type { Problem } from '../types';

export const problem: Problem = {
  id: 'ways-to-split-array-into-good-subarrays',
  title: 'Ways to Split Array Into Good Subarrays',
  difficulty: 'medium',
  tags: ['arrays', 'math'],
  description: `You are given a binary array \`nums\`.

A subarray of an array is **good** if it contains **exactly one** element with the value \`1\`.

You need to split the array \`nums\` into some number of **good** subarrays. Return *the number of ways* you can split \`nums\`. As the answer may be very large, return it **modulo** \`10^9 + 7\`.

A subarray is a contiguous **non-empty** part of an array.`,
  constraints: [
    '1 <= nums.length <= 10^5',
    '0 <= nums[i] <= 1',
  ],
  examples: [
    {
      input: 'nums = [0,1,0,0,1]',
      output: '3',
      explanation:
        'There are 3 ways: [0,1] [0,0,1]; [0,1,0] [0,1]; [0,1,0,0] [1]. Between the two 1s (indices 1 and 4) there are 2 zeros, giving 3 places to split (at index 2, 3, or 4).',
    },
    {
      input: 'nums = [0,1,0]',
      output: '1',
      explanation: 'The only valid split is the full array [0,1,0].',
    },
  ],
  hints: [
    'If there are no 1s, there is no valid split — return 0.',
    'Between consecutive 1s at positions i and j, there are (j - i) choices of where to place the split boundary.',
    'Multiply together the (j - i) choices between each pair of adjacent 1s. Use modular arithmetic.',
  ],
  functionName: 'numberOfGoodSubarraySplits',
  params: ['nums'],
  starterCode: {
    javascript: 'function numberOfGoodSubarraySplits(nums) {\n\n}\n',
    typescript: 'function numberOfGoodSubarraySplits(nums: number[]): number {\n\n}\n',
    python: 'def numberOfGoodSubarraySplits(nums):\n    pass\n',
  },
  visibleTests: [
    { args: [[0,1,0,0,1]], expected: 3 },
    { args: [[0,1,0]], expected: 1 },
  ],
  hiddenTests: [
    { args: [[0,0,0]], expected: 0 },
    { args: [[1]], expected: 1 },
    { args: [[1,0,1]], expected: 2 },
    { args: [[1,1]], expected: 1 },
    { args: [[0,1,1,0]], expected: 1 },
    { args: [[1,0,0,0,1,0,0,1]], expected: 12 },
    { args: [[0,0,1,0,0,1,0,0,1,0,0]], expected: 9 },
  ],
};
