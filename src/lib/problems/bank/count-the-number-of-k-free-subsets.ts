import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-the-number-of-k-free-subsets',
  title: 'Count the Number of K-Free Subsets',
  difficulty: 'medium',
  tags: ['arrays', 'dynamic-programming'],
  description: `You are given an integer array \`nums\` with **distinct** values, and an integer \`k\`.

A subset is called **k-free** if it does **not** contain any two elements \`a\` and \`b\` such that \`|a - b| == k\`.

Return the **number of k-free subsets** of \`nums\`. Since the answer may be large, return it modulo \`10^9 + 7\`.`,
  constraints: [
    '1 <= nums.length <= 50',
    '1 <= nums[i] <= 1000',
    'All values in nums are distinct.',
    '1 <= k <= 1000',
  ],
  examples: [
    {
      input: 'nums = [1,2,3,4], k = 1',
      output: '8',
      explanation: 'k-free subsets: {}, {1}, {2}, {3}, {4}, {1,3}, {1,4}, {2,4}. Total: 8.',
    },
    {
      input: 'nums = [1,2,3,4], k = 2',
      output: '9',
      explanation: 'Groups by residue mod 2: {1,3} and {2,4}. Each group has 3 k-free subsets (exclude one or both). 3×3=9.',
    },
  ],
  hints: [
    'Group elements by their residue modulo k. Elements in different groups can never conflict.',
    'Within each group, sort elements. Two elements conflict iff they differ by exactly k (i.e., are adjacent in sorted order within the same group).',
    'For each group of size m, count independent subsets of a path graph (no two adjacent chosen): this follows a Fibonacci-like recurrence dp[i] = dp[i-1] + dp[i-2].',
  ],
  functionName: 'countKFreeSubsets',
  params: ['nums', 'k'],
  starterCode: {
    javascript: 'function countKFreeSubsets(nums, k) {\n  \n}\n',
    typescript: 'function countKFreeSubsets(nums: number[], k: number): number {\n  \n}',
    python: 'def countKFreeSubsets(nums, k):\n    pass\n',
  },
  visibleTests: [
    { args: [[1, 2, 3, 4], 1], expected: 8 },
    { args: [[1, 2, 3, 4], 2], expected: 9 },
  ],
  hiddenTests: [
    { args: [[1, 2, 3], 1], expected: 5 },
    { args: [[1], 5], expected: 2 },
    { args: [[1, 2], 3], expected: 4 },
    { args: [[3, 6, 9], 3], expected: 5 },
  ],
};
