import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-the-sum-of-the-power-of-all-subsequences',
  title: 'Find the Sum of the Power of All Subsequences',
  difficulty: 'hard',
  tags: ['arrays', 'dynamic-programming', 'math'],
  description: `You are given an integer array \`nums\` of length \`n\` and a **positive** integer \`k\`.

The **power** of an array is defined as the number of **subsequences** with a sum **equal to** \`k\`.

Return the **sum of power** of all subsequences of \`nums\`.

Since the answer may be very large, return it modulo \`10^9 + 7\`.`,
  constraints: [
    '1 <= n <= 100',
    '1 <= nums[i] <= 10^4',
    '1 <= k <= 10^5',
  ],
  examples: [
    {
      input: 'nums = [1, 2, 3], k = 3',
      output: '6',
      explanation: 'Subsequences summing to 3: [3] (appears in 4 outer subsequences) and [1,2] (appears in 2 outer subsequences). Total = 4+2 = 6.',
    },
    {
      input: 'nums = [2, 3, 3], k = 5',
      output: '4',
      explanation: 'Subsequences summing to 5: [2,3] (index 1) appears in 2 outer subs, [2,3] (index 2) appears in 2 outer subs. Total = 4.',
    },
    {
      input: 'nums = [1, 2, 3, 4], k = 2',
      output: '8',
      explanation: '[2] appears in 8 outer subsequences ([2], [1,2], [2,3], [2,4], [1,2,3], [1,2,4], [2,3,4], [1,2,3,4]).',
    },
  ],
  hints: [
    'For each subsequence T that sums to k, it contributes 2^(n - |T|) to the answer, since any subset of the remaining elements can be freely included or excluded.',
    'Use 2D DP: dp[i][j] = number of subsequences of the first elements considered that use exactly i elements and have sum j.',
    'The answer is sum over all lengths i of dp[i][k] * 2^(n-i) mod (10^9+7).',
  ],
  functionName: 'sumOfPower',
  params: ['nums', 'k'],
  starterCode: {
    javascript: `function sumOfPower(nums, k) {
  // your code here
}`,
    typescript: `function sumOfPower(nums: number[], k: number): number {
  // your code here
}`,
    python: `def sumOfPower(nums, k):
    # your code here
    pass`,
  },
  visibleTests: [
    { args: [[1, 2, 3], 3], expected: 6 },
    { args: [[2, 3, 3], 5], expected: 4 },
    { args: [[1, 2, 3, 4], 2], expected: 8 },
    { args: [[1], 1], expected: 1 },
    { args: [[1, 1], 2], expected: 1 },
  ],
  hiddenTests: [
    { args: [[1, 1, 1], 2], expected: 6 },
    { args: [[2, 2, 2], 2], expected: 12 },
    { args: [[1, 2, 3, 4, 5], 5], expected: 32 },
    { args: [[3, 3, 3], 3], expected: 12 },
    { args: [[1, 2], 3], expected: 1 },
    { args: [[5], 5], expected: 1 },
    { args: [[1, 1, 1, 1], 3], expected: 8 },
    { args: [[2, 4, 6], 6], expected: 6 },
  ],
};
