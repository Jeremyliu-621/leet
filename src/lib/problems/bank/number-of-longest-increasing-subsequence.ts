import type { Problem } from '../types';

export const problem: Problem = {
  id: 'number-of-longest-increasing-subsequence',
  title: 'Number of Longest Increasing Subsequence',
  difficulty: 'medium',
  tags: ['dynamic-programming'],
  description: `Given an integer array \`nums\`, return the number of longest strictly increasing subsequences.`,
  constraints: [
    '1 <= nums.length <= 2000',
    '-10^6 <= nums[i] <= 10^6',
  ],
  examples: [
    {
      input: 'nums = [1,3,5,4,7]',
      output: '2',
      explanation: 'The two longest increasing subsequences are [1,3,5,7] and [1,3,4,7].',
    },
    {
      input: 'nums = [2,2,2,2,2]',
      output: '5',
      explanation: 'The length of the longest increasing subsequence is 1, and there are 5 of them.',
    },
  ],
  hints: [
    'Let dp[i] = length of LIS ending at index i, cnt[i] = number of such subsequences.',
    'For each j < i with nums[j] < nums[i]: if dp[j]+1 > dp[i], update dp[i] and set cnt[i]=cnt[j]. If dp[j]+1 == dp[i], add cnt[j] to cnt[i].',
    'Answer = sum of cnt[i] for all i where dp[i] equals the global maximum.',
  ],
  functionName: 'findNumberOfLIS',
  params: ['nums'],
  starterCode: {
    javascript: `function findNumberOfLIS(nums) {

}`,
    python: `def findNumberOfLIS(nums):
    pass`,
  },
  visibleTests: [
    { args: [[1, 3, 5, 4, 7]], expected: 2 },
    { args: [[2, 2, 2, 2, 2]], expected: 5 },
  ],
  hiddenTests: [
    { args: [[1, 2, 3]], expected: 1 },
    { args: [[1]], expected: 1 },
    { args: [[2, 1]], expected: 2 },
    { args: [[1, 2, 1, 2]], expected: 3 },
  ],
};
