import type { Problem } from '../types';

export const problem: Problem = {
  id: 'largest-divisible-subset',
  title: 'Largest Divisible Subset',
  difficulty: 'medium',
  tags: ['dynamic-programming'],
  description: `Given a set of **distinct** positive integers \`nums\`, return the largest subset \`answer\` such that every pair \`(answer[i], answer[j])\` of elements in this subset satisfies:

- \`answer[i] % answer[j] == 0\`, or
- \`answer[j] % answer[i] == 0\`

If there are multiple solutions, return **any** of them.`,
  constraints: [
    '1 <= nums.length <= 1000',
    '1 <= nums[i] <= 2 * 10^9',
    'All the integers in nums are unique.',
  ],
  examples: [
    {
      input: 'nums = [1,2,3]',
      output: '[1,2]',
      explanation: '[1,3] is also accepted.',
    },
    {
      input: 'nums = [1,2,4,8]',
      output: '[1,2,4,8]',
    },
  ],
  hints: [
    'Sort the array. If a subset is divisible, it forms a chain after sorting.',
    'Use DP: dp[i] = length of largest divisible subset ending at nums[i].',
    'For each i, check all j < i: if nums[i] % nums[j] == 0, dp[i] = max(dp[i], dp[j]+1).',
    'Backtrack through the dp array to reconstruct the subset.',
  ],
  functionName: 'largestDivisibleSubsetRunner',
  params: ['nums'],
  preamble: {
    javascript: `function largestDivisibleSubsetRunner(nums) {
  return largestDivisibleSubset(nums).slice().sort((a, b) => a - b);
}`,
    python: `def largestDivisibleSubsetRunner(nums):
    return sorted(largestDivisibleSubset(nums))
`,
  },
  starterCode: {
    javascript: `function largestDivisibleSubset(nums) {
  // Return largest subset where every pair divides
}`,
    python: `def largestDivisibleSubset(nums):
    # Return largest subset where every pair divides
    pass`,
  },
  visibleTests: [
    { args: [[1, 2, 3]], expected: [1, 2] },
    { args: [[1, 2, 4, 8]], expected: [1, 2, 4, 8] },
    { args: [[1]], expected: [1] },
  ],
  hiddenTests: [
    { args: [[2, 3, 4, 9, 8]], expected: [2, 4, 8] },
    { args: [[3, 5, 10, 20, 15]], expected: [5, 10, 20] },
    { args: [[1, 2, 3, 6]], expected: [1, 2, 6] },
    { args: [[5, 9, 18, 54, 108]], expected: [9, 18, 54, 108] },
  ],
};
