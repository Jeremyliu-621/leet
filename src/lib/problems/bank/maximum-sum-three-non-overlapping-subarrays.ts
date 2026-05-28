import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximum-sum-three-non-overlapping-subarrays',
  title: 'Maximum Sum of 3 Non-Overlapping Subarrays',
  difficulty: 'hard',
  tags: ['dynamic-programming', 'sliding-window'],
  description: `Given an integer array \`nums\` and an integer \`k\`, find three non-overlapping subarrays of length \`k\` with **maximum sum** and return them.

Return the result as a list of indices representing the starting position of each subarray. If there are multiple valid answers, return the **lexicographically smallest** one.

**DP approach:** Compute all window sums. Use two passes to compute: \`left[i]\` = index of best window in \`[0..i]\`, \`right[i]\` = index of best window in \`[i..n-k]\`. Then sweep middle window and maximize \`left[j-k] + window[j] + right[j+k]\`.`,
  constraints: [
    '1 <= nums.length <= 2 * 10^4',
    '1 <= nums[i] < 2^16',
    '1 <= k <= floor(nums.length / 3)',
  ],
  examples: [
    {
      input: 'nums = [1,2,1,2,6,7,5,1], k = 2',
      output: '[0,3,5]',
      explanation: 'Subarrays [1,2], [2,6], [7,5] have sums 3, 8, 12. Total = 23.',
    },
    {
      input: 'nums = [1,2,1,2,1,2,1,2,1], k = 2',
      output: '[0,2,4]',
    },
  ],
  hints: [
    'Compute window sums w[i] = sum(nums[i..i+k-1]).',
    'left[i] = index of maximum w in [0..i]; right[i] = index of maximum w in [i..n-k]. For ties, prefer smaller index in left, larger index in right.',
    'Sweep j (middle window) from k to n-2k. Answer = [left[j-k], j, right[j+k]] that maximizes w[left[j-k]] + w[j] + w[right[j+k]].',
  ],
  functionName: 'maxSumOfThreeSubarrays',
  params: ['nums', 'k'],
  starterCode: {
    javascript: 'function maxSumOfThreeSubarrays(nums, k) {\n\n}\n',
    typescript: "function maxSumOfThreeSubarrays(nums: number[], k: number): number[] {\n\n}",

    python: 'def maxSumOfThreeSubarrays(nums: list, k: int) -> list:\n    pass\n',
  },
  visibleTests: [
    { args: [[1,2,1,2,6,7,5,1], 2], expected: [0,3,5] },
    { args: [[1,2,1,2,1,2,1,2,1], 2], expected: [0,2,4] },
  ],
  hiddenTests: [
    { args: [[1,2,3,4,5,6,7,8,9], 1], expected: [6,7,8] },
    { args: [[4,4,4,4,4], 1], expected: [0,1,2] },
    { args: [[1,2,1,3,1,2,1,3,1,2], 2], expected: [0,2,6] },
  ],
};
