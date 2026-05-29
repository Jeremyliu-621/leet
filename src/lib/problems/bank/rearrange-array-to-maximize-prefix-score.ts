import type { Problem } from '../types';

export const problem: Problem = {
  id: 'rearrange-array-to-maximize-prefix-score',
  title: 'Rearrange Array to Maximize Prefix Score',
  difficulty: 'medium',
  tags: ['arrays'],
  description: `You are given a **0-indexed** integer array \`nums\`. You can rearrange the elements of \`nums\` to **any order**.

Return the maximum possible **prefix score** of \`nums\` after rearranging it. The **prefix score** of \`nums\` is the number of indices \`i\` (0-indexed) such that the prefix sum of \`nums[0..i]\` is **strictly positive**.`,
  constraints: [
    '`1 <= nums.length <= 10^5`',
    '`-10^6 <= nums[i] <= 10^6`',
  ],
  examples: [
    {
      input: 'nums = [2,-1,0,1,-3,3,-3]',
      output: '6',
      explanation: 'Sort descending: [3,2,1,0,-1,-3,-3]. Prefix sums: 3,5,6,6,5,2,−1. First 6 are positive.',
    },
    {
      input: 'nums = [-1,-2]',
      output: '0',
      explanation: 'Any order yields a non-positive first prefix sum.',
    },
  ],
  hints: [
    'To maximize positive prefix sums, place the largest elements first (sort descending).',
    'After sorting descending, scan the prefix sums from left to right and count while strictly positive.',
    'Once the running sum drops to ≤ 0 it will never recover, so you can stop.',
  ],
  functionName: 'maxScore',
  params: ['nums'],
  starterCode: {
    javascript: `function maxScore(nums) {

}`,
    typescript: `function maxScore(nums: number[]): number {

}`,
    python: `def maxScore(nums):
    pass`,
  },
  visibleTests: [
    { args: [[2, -1, 0, 1, -3, 3, -3]], expected: 6 },
    { args: [[-1, -2]], expected: 0 },
  ],
  hiddenTests: [
    { args: [[1]], expected: 1 },
    { args: [[-1]], expected: 0 },
    { args: [[0, 1]], expected: 2 },
    { args: [[-5, 3, -3, 2, -1]], expected: 4 },
    { args: [[1, 2, 3, 4, 5]], expected: 5 },
  ],
};
