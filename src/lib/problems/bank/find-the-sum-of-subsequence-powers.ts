import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-the-sum-of-subsequence-powers',
  title: 'Find the Sum of Subsequence Powers',
  difficulty: 'hard',
  tags: ['arrays', 'dynamic-programming'],
  description: `You are given an integer array \`nums\` of length \`n\`, and a **positive** integer \`k\`.

The **power** of a subsequence is defined as the **minimum** absolute difference between any two elements in the subsequence.

Return the **sum of powers** of **all** subsequences of \`nums\` that have length \`k\`.

Since the answer may be large, return it **modulo** \`10^9 + 7\`.`,
  constraints: [
    '2 <= n <= 50',
    '2 <= k <= n',
    '-10^9 <= nums[i] <= 10^9',
  ],
  examples: [
    {
      input: 'nums = [1,2,3,4], k = 3',
      output: '4',
      explanation: 'Subsequences: [1,2,3]→1, [1,2,4]→1, [1,3,4]→1, [2,3,4]→1. Sum = 4.',
    },
    {
      input: 'nums = [2,2], k = 2',
      output: '0',
      explanation: 'Only subsequence is [2,2] with power 0.',
    },
  ],
  hints: [
    'Sort nums first — the minimum difference in a subsequence equals the minimum of consecutive differences in the sorted subsequence.',
    'Use DP: dp[i][j] maps minimum_diff → count of length-j subsequences ending at index i.',
    'When extending a subsequence ending at index prev to index i, the new minimum diff = min(old_min_diff, nums[i] - nums[prev]).',
    'The answer is sum over all i and all d in dp[i][k] of d * count(d).',
  ],
  functionName: 'sumOfPowers',
  params: ['nums', 'k'],
  starterCode: {
    javascript: 'function sumOfPowers(nums, k) {\n  \n}\n',
    typescript: 'function sumOfPowers(nums: number[], k: number): number {\n  \n}',
    python: 'def sumOfPowers(nums, k):\n    pass\n',
  },
  visibleTests: [
    { args: [[1, 2, 3, 4], 3], expected: 4 },
    { args: [[2, 2], 2], expected: 0 },
  ],
  hiddenTests: [
    { args: [[4, 3, -1], 2], expected: 10 },
    { args: [[3, 1, 2], 2], expected: 4 },
    { args: [[1, 3, 3, 5], 3], expected: 4 },
    { args: [[1, 1, 1], 2], expected: 0 },
  ],
};
