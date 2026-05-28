import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximum-subarray-sum-with-length-divisible-by-k',
  title: 'Maximum Subarray Sum With Length Divisible by K',
  difficulty: 'medium',
  tags: ['arrays', 'hash-map'],
  description: `You are given an array of integers \`nums\` and a positive integer \`k\`. Return the **maximum** sum of a non-empty subarray of \`nums\` with a length **divisible by** \`k\`.`,
  constraints: [
    '1 <= nums.length <= 2 * 10^5',
    '1 <= k <= nums.length',
    '-10^9 <= nums[i] <= 10^9',
  ],
  examples: [
    {
      input: 'nums = [1,2,3,4,5], k = 2',
      output: '14',
      explanation: 'The subarray [2,3,4,5] (length 4, divisible by 2) has sum 14.',
    },
    {
      input: 'nums = [-1,-2,-3], k = 2',
      output: '-3',
      explanation: 'The best length-2 subarray is [-1,-2] with sum -3.',
    },
    {
      input: 'nums = [5,0,5,0,5,0], k = 3',
      output: '15',
      explanation: 'The full array [5,0,5,0,5,0] (length 6, divisible by 3) sums to 15.',
    },
  ],
  hints: [
    'Build a prefix-sum array. A subarray [l, r) has sum prefix[r] - prefix[l] and length r - l.',
    'r - l is divisible by k if and only if r ≡ l (mod k).',
    'For each right endpoint r (1-indexed), you need the minimum prefix[l] over all valid left endpoints l where l ≡ r (mod k) and l ≤ r - k. Maintain a running minimum per modular class, adding l = r - k at each step.',
  ],
  functionName: 'maximumSubarraySum',
  params: ['nums', 'k'],
  starterCode: {
    javascript: `function maximumSubarraySum(nums, k) {

}`,
    python: `def maximumSubarraySum(nums, k):
    pass`,
  },
  visibleTests: [
    { args: [[1, 2, 3, 4, 5], 2], expected: 14 },
    { args: [[-1, -2, -3], 2], expected: -3 },
    { args: [[5, 0, 5, 0, 5, 0], 3], expected: 15 },
  ],
  hiddenTests: [
    { args: [[1], 1], expected: 1 },
    { args: [[-5, -3, -1], 1], expected: -1 },
    { args: [[1, 2, 1, 2, 1, 2], 2], expected: 9 },
    { args: [[3, 1, 4, 1, 5, 9, 2], 3], expected: 23 },
    { args: [[-10, 5, -10, 5], 2], expected: -5 },
  ],
};
