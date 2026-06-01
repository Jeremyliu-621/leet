import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximum-sum-increasing-subsequence',
  title: 'Maximum Sum Increasing Subsequence',
  difficulty: 'medium',
  tags: ['arrays', 'dynamic-programming'],
  description: `Given an integer array \`nums\`, return the **maximum possible sum** of a **strictly increasing subsequence** of \`nums\`.

A **subsequence** is a sequence derived from the array by deleting some or no elements without changing the order of the remaining elements. A subsequence is **strictly increasing** if each element is greater than the previous one.

Every single element by itself is a valid subsequence.`,
  constraints: [
    '1 <= nums.length <= 1000',
    '1 <= nums[i] <= 10^5',
  ],
  examples: [
    {
      input: 'nums = [1,101,2,3,100,4,5]',
      output: '106',
      explanation: 'The subsequence [1,2,3,100] is strictly increasing and has sum 106, which is the maximum.',
    },
    {
      input: 'nums = [3,10,2,1,20]',
      output: '33',
      explanation: 'The subsequence [3,10,20] is strictly increasing with sum 33.',
    },
    {
      input: 'nums = [3,2,6,4,5]',
      output: '12',
      explanation: 'The subsequence [3,4,5] sums to 12. Other increasing subsequences like [3,6] (sum 9) or [2,4,5] (sum 11) are smaller.',
    },
  ],
  hints: [
    'This is a variant of the Longest Increasing Subsequence problem. Instead of tracking length, track the maximum sum ending at each index.',
    'Define `dp[i]` as the maximum sum of an increasing subsequence that ends at index `i`. The base case is `dp[i] = nums[i]` (single element).',
    'For each index `i`, look back at every index `j < i`. If `nums[j] < nums[i]`, you can extend the subsequence ending at `j` with `nums[i]`. Update `dp[i] = max(dp[i], dp[j] + nums[i])`.',
    'The final answer is the maximum value across all `dp[i]`.',
  ],
  functionName: 'maxSumIncreasingSubseq',
  params: ['nums'],
  starterCode: {
    javascript: 'function maxSumIncreasingSubseq(nums) {\n  // your code here\n}\n',
    typescript: `function maxSumIncreasingSubseq(nums: number[]): number {

}`,
    python: 'def maxSumIncreasingSubseq(nums):\n    # your code here\n    pass\n',
  },
  visibleTests: [
    { args: [[1, 101, 2, 3, 100, 4, 5]], expected: 106 },
    { args: [[3, 10, 2, 1, 20]], expected: 33 },
    { args: [[3, 2, 6, 4, 5]], expected: 12 },
  ],
  hiddenTests: [
    { args: [[10, 5, 4, 3]], expected: 10 },
    { args: [[1]], expected: 1 },
    { args: [[5, 1, 2, 3, 4]], expected: 10 },
    { args: [[1, 2, 3, 4, 5]], expected: 15 },
    { args: [[100, 1, 2, 3, 4]], expected: 100 },
    { args: [[1, 2, 100, 3, 4, 5]], expected: 103 },
    { args: [[3, 3, 3]], expected: 3 },
  ],
};
