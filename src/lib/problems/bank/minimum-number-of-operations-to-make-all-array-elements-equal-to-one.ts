import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-number-of-operations-to-make-all-array-elements-equal-to-one',
  title: 'Minimum Number of Operations to Make All Array Elements Equal to 1',
  difficulty: 'medium',
  tags: ['arrays', 'math'],
  description: `You are given a **0-indexed** array \`nums\` consiting of positive integers. You can do the following operation **any** number of times:

- Select an index \`i\` in the range \`[0, n - 1]\` and **replace** \`nums[i]\` with \`nums[i] * 2\`.

Wait — actually: select indices \`i\` and \`j\` such that \`0 <= i < j <= n - 1\` and replace \`nums[i]\` with \`gcd(nums[i], nums[j])\`.

Return the **minimum number of operations** to make all elements of \`nums\` equal to \`1\`. If it is impossible, return \`-1\`.`,
  constraints: [
    '2 <= nums.length <= 1000',
    '1 <= nums[i] <= 10^6',
  ],
  examples: [
    {
      input: 'nums = [2,6,3,4]',
      output: '4',
      explanation:
        'Shortest subarray with GCD=1 is [3,4] (length 2). Cost = (2-1) + (4-1) = 4.',
    },
    {
      input: 'nums = [2,10,6,14]',
      output: '-1',
      explanation: 'GCD of entire array is 2, so no subset can have GCD=1.',
    },
  ],
  hints: [
    'Level 1: If nums already has a 1, we need n - count(1s) operations to spread it.',
    'Level 2: Otherwise, find the shortest contiguous subarray with GCD = 1 (length L). We need L-1 operations to create a 1, then n-1 operations to spread it. Total = L + n - 2.',
    'Level 3: Find minimum L with O(n²) nested loops: for each i, expand j rightward computing running GCD; stop when GCD hits 1. If no such subarray, return -1.',
  ],
  functionName: 'minOperations',
  params: ['nums'],
  starterCode: {
    javascript: `function minOperations(nums) {

}`,
    typescript: `function minOperations(nums: number[]): number {

}`,
    python: `def minOperations(nums):
    pass`,
  },
  visibleTests: [
    { args: [[2, 6, 3, 4]], expected: 4 },
    { args: [[2, 10, 6, 14]], expected: -1 },
  ],
  hiddenTests: [
    { args: [[1, 3, 5]], expected: 2 },
    { args: [[4, 8, 12]], expected: -1 },
    { args: [[2, 3]], expected: 2 },
    { args: [[1, 1, 1]], expected: 0 },
    { args: [[6, 10, 15]], expected: 4 },
  ],
};
