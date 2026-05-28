import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximum-sum-of-3-non-overlapping-subarrays',
  title: 'Maximum Sum of 3 Non-Overlapping Subarrays',
  difficulty: 'hard',
  tags: ['arrays', 'dynamic-programming'],
  description: `Given an integer array \`nums\` and an integer \`k\`, find three non-overlapping subarrays of length \`k\` with maximum sum and return them.

Return the result as a list of indices representing the starting position of each interval (0-indexed). If there are multiple answers, return the lexicographically smallest one.`,
  constraints: [
    '1 <= nums.length <= 2 * 10^4',
    '1 <= nums[i] < 2^16',
    '1 <= k <= floor(nums.length / 3)',
  ],
  examples: [
    {
      input: 'nums = [1,2,1,2,6,7,5,1], k = 2',
      output: '[0,3,5]',
      explanation: 'Subarrays [1,2], [2,6], [7,5] start at indices 0, 3, 5 and have sums 3, 8, 12 respectively.',
    },
    {
      input: 'nums = [1,2,1,2,1,2,1,2,1], k = 2',
      output: '[0,2,4]',
      explanation: 'Subarrays starting at [0,2,4] each have sum 3. The answer is lexicographically smallest.',
    },
  ],
  hints: [
    'Precompute sliding window sums of length k for all valid starting positions.',
    'Build a left[] array where left[i] is the index of the maximum window sum in w[0..i].',
    'Build a right[] array where right[i] is the index of the maximum window sum in w[i..end]. Use >= when scanning right-to-left to ensure lexicographic preference.',
    'Enumerate the middle window position j; the best left is left[j-k] and the best right is right[j+k]. Track the combination with the maximum total sum.',
  ],
  functionName: 'maxSumOfThreeSubarrays',
  params: ['nums', 'k'],
  starterCode: {
    javascript: `function maxSumOfThreeSubarrays(nums, k) {

}`,
    typescript: "function maxSumOfThreeSubarrays(nums: number[], k: number): number[] {\n\n}",

    python: `def maxSumOfThreeSubarrays(nums, k):
    `,
  },
  visibleTests: [
    { args: [[1, 2, 1, 2, 6, 7, 5, 1], 2], expected: [0, 3, 5] },
    { args: [[1, 2, 1, 2, 1, 2, 1, 2, 1], 2], expected: [0, 2, 4] },
  ],
  hiddenTests: [
    { args: [[1, 2, 3, 4, 5, 6, 7, 8, 9], 1], expected: [6, 7, 8] },
    { args: [[4, 3, 2, 1, 2, 3, 4, 5, 6, 7], 2], expected: [0, 6, 8] },
    { args: [[2, 1, 5, 1, 3, 2, 1, 1], 1], expected: [0, 2, 4] },
    { args: [[1, 1, 1, 1, 1, 1, 1, 1, 1], 3], expected: [0, 3, 6] },
    { args: [[9, 8, 7, 6, 5, 4, 3, 2, 1], 1], expected: [0, 1, 2] },
    { args: [[1, 1, 10, 1, 1, 10, 1, 1, 10], 1], expected: [2, 5, 8] },
  ],
};
