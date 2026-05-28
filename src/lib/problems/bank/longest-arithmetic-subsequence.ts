import type { Problem } from '../types';

export const problem: Problem = {
  id: 'longest-arithmetic-subsequence',
  title: 'Longest Arithmetic Subsequence',
  difficulty: 'medium',
  tags: ['dynamic-programming'],
  description: `Given an array \`nums\` of integers, return the length of the longest arithmetic subsequence in \`nums\`.

A **subsequence** is a sequence that can be derived from \`nums\` by deleting some elements (possibly none) without changing the order of the remaining elements. An **arithmetic sequence** is a sequence that has a constant difference between consecutive elements.`,
  constraints: [
    '2 <= nums.length <= 1000',
    '0 <= nums[i] <= 500',
  ],
  examples: [
    {
      input: 'nums = [3,6,9,12]',
      output: '4',
      explanation: 'The entire array is arithmetic with difference 3.',
    },
    {
      input: 'nums = [9,4,7,2,10]',
      output: '3',
      explanation: '4, 7, 10 forms an arithmetic sequence with difference 3.',
    },
    {
      input: 'nums = [20,1,15,3,10,5,8]',
      output: '4',
      explanation: '20, 15, 10, 5 forms an arithmetic sequence with difference -5.',
    },
  ],
  hints: [
    'Use DP where dp[i] is a map from arithmetic difference to the length of the longest arithmetic subsequence ending at index i.',
    'For each pair (j, i) where j < i: diff = nums[i] - nums[j]; dp[i][diff] = (dp[j][diff] || 1) + 1.',
    'Track the global maximum across all dp[i][diff] values. The answer is at least 2.',
  ],
  functionName: 'longestArithSeqLength',
  params: ['nums'],
  starterCode: {
    javascript: `function longestArithSeqLength(nums) {
  // Return the length of the longest arithmetic subsequence
}`,
    typescript: "function longestArithSeqLength(nums: number[]): number {\n  // Return the length of the longest arithmetic subsequence\n}",

    python: `def longestArithSeqLength(nums):
    # Return the length of the longest arithmetic subsequence
    pass`,
  },
  visibleTests: [
    { args: [[3, 6, 9, 12]], expected: 4 },
    { args: [[9, 4, 7, 2, 10]], expected: 3 },
    { args: [[20, 1, 15, 3, 10, 5, 8]], expected: 4 },
  ],
  hiddenTests: [
    { args: [[1, 2, 3, 4, 5]], expected: 5 },
    { args: [[1, 3, 5, 7, 9]], expected: 5 },
    { args: [[1, 1, 1, 1]], expected: 4 },
    { args: [[1, 5, 7, 8, 5, 3, 4, 2, 1]], expected: 4 },
  ],
};
