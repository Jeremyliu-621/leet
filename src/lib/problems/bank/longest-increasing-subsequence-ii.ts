import type { Problem } from '../types';

export const problem: Problem = {
  id: 'longest-increasing-subsequence-ii',
  title: 'Longest Increasing Subsequence II',
  difficulty: 'hard',
  tags: ['arrays', 'dynamic-programming'],
  description: `You are given an integer array \`nums\` and an integer \`k\`. Find the **longest subsequence** of \`nums\` that meets the following requirements:

- The subsequence is **strictly increasing**.
- The **difference** between adjacent elements in the subsequence is at most \`k\`.

Return the **length** of the longest such subsequence.

A **subsequence** is derived from an array by deleting some elements without changing the order.`,
  constraints: [
    '1 <= nums.length <= 10^5',
    '1 <= nums[i], k <= 10^5',
  ],
  examples: [
    {
      input: 'nums = [4,2,1,4,3,4,5,8,15], k = 3',
      output: '5',
      explanation:
        'The longest subsequence is [1,3,4,5,8] with differences [2,1,1,3] all ≤ 3. Length = 5.',
    },
    {
      input: 'nums = [7,4,5,1,8,12,4,7], k = 5',
      output: '4',
      explanation:
        'The longest subsequence is [4,5,8,12] with differences [1,3,4] all ≤ 5. Length = 4.',
    },
    {
      input: 'nums = [1,5], k = 1',
      output: '1',
      explanation: 'No two elements are within k=1 of each other while increasing.',
    },
  ],
  hints: [
    'Level 1: Define dp[v] = length of longest valid subsequence ending with value v. For each nums[i], dp[nums[i]] = max(dp[max(0, nums[i]-k)..nums[i]-1]) + 1. You need efficient range max queries.',
    'Level 2: Use a segment tree over values 1..max(nums). For each num, query the max dp value in range [num-k, num-1], then update position num with the new dp value.',
    'Level 3: Build a segment tree with point-update and range-max-query. For each element v in nums (left to right), query max in [max(1,v-k), v-1], set dp = query+1, update tree at position v with dp. Return overall max dp.',
  ],
  functionName: 'lengthOfLIS',
  params: ['nums', 'k'],
  starterCode: {
    javascript: 'function lengthOfLIS(nums, k) {\n  // your code here\n}\n',
    typescript: 'function lengthOfLIS(nums: number[], k: number): number {\n  // your code here\n}\n',
    python: 'def lengthOfLIS(nums, k):\n    # your code here\n    pass\n',
  },
  visibleTests: [
    {
      args: [[4,2,1,4,3,4,5,8,15], 3],
      expected: 5,
    },
    {
      args: [[7,4,5,1,8,12,4,7], 5],
      expected: 4,
    },
    {
      args: [[1,5], 1],
      expected: 1,
    },
  ],
  hiddenTests: [
    {
      args: [[1], 1],
      expected: 1,
    },
    {
      args: [[1,2,3,4,5], 1],
      expected: 5,
    },
    {
      args: [[5,4,3,2,1], 2],
      expected: 1,
    },
    {
      args: [[3,1,4,1,5,9,2,6,5,3], 4],
      expected: 4,
    },
    {
      args: [[1,2,3,4,5,6,7,8,9,10], 100],
      expected: 10,
    },
    {
      args: [[10,9,8,7,6,5,4,3,2,1], 1],
      expected: 1,
    },
  ],
};
