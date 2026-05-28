import type { Problem } from '../types';

export const problem: Problem = {
  id: 'constrained-subsequence-sum',
  title: 'Constrained Subsequence Sum',
  difficulty: 'hard',
  tags: ['dynamic-programming', 'heap'],
  description: `Given an integer array \`nums\` and a positive integer \`k\`, return the **maximum sum** of a **non-empty** subsequence of that array such that for every two **consecutive** integers in the subsequence, \`nums[i]\` and \`nums[j]\`, where \`i < j\`, it is required that \`j - i <= k\`.

A subsequence of an array is obtained by deleting some number of elements (can be zero) from the array, leaving the remaining elements in their original order.`,
  constraints: [
    '1 <= k <= nums.length <= 10^5',
    '-10^4 <= nums[i] <= 10^4',
  ],
  examples: [
    { input: 'nums = [10,2,-10,5,20], k = 2', output: '37', explanation: 'Subsequence is [10,2,5,20]: 10+2+5+20=37. Each consecutive pair has index gap ≤ 2.' },
    { input: 'nums = [-1,-2,-3], k = 1', output: '-1', explanation: 'Must pick at least one element. Best is the max element, -1.' },
    { input: 'nums = [10,-2,-10,-5,20], k = 2', output: '23', explanation: 'Subsequence [10,-2,-5,20] with gaps 1,2,1 all ≤ 2.' },
  ],
  hints: [
    'Define dp[i] = max sum of a valid subsequence ending at index i.',
    'dp[i] = nums[i] + max(0, max(dp[j] for j in [i-k, i-1])).',
    'Use a monotonic deque to efficiently track the maximum dp value in the sliding window of size k.',
  ],
  functionName: 'constrainedSubsetSum',
  params: ['nums', 'k'],
  starterCode: {
    javascript: 'function constrainedSubsetSum(nums, k) {\n\n}\n',
    python: 'def constrainedSubsetSum(nums, k):\n    pass\n',
  },
  visibleTests: [
    { args: [[10, 2, -10, 5, 20], 2], expected: 37 },
    { args: [[-1, -2, -3], 1], expected: -1 },
    { args: [[10, -2, -10, -5, 20], 2], expected: 23 },
  ],
  hiddenTests: [
    { args: [[1], 1], expected: 1 },
    { args: [[5, 3, 1, 4, 2], 2], expected: 15 },
    { args: [[-5, -1, -2, -3], 1], expected: -1 },
  ],
};
