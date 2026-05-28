import type { Problem } from '../types';

export const problem: Problem = {
  id: 'longest-subarray-with-at-most-k-frequency',
  title: 'Longest Subarray With At Most K Frequency',
  difficulty: 'medium',
  tags: ['arrays', 'sliding-window', 'hash-map'],
  description: `You are given an integer array \`nums\` and an integer \`k\`.

The **frequency** of an element \`x\` is the number of times it occurs in an array.

An array is called **good** if the frequency of each element in this array is **less than or equal to** \`k\`.

Return *the length of the **longest** good subarray of* \`nums\`.

A **subarray** is a contiguous non-empty sequence of elements within an array.`,
  constraints: [
    '1 <= nums.length <= 10^5',
    '1 <= nums[i] <= 10^9',
    '1 <= k <= nums.length',
  ],
  examples: [
    {
      input: 'nums = [1,2,3,1,2,3,1,2], k = 2',
      output: '6',
      explanation: 'The longest good subarray is [1,2,3,1,2,3], length 6. Each element appears at most 2 times.',
    },
    {
      input: 'nums = [1,2,1,2,1,2,1,2], k = 1',
      output: '2',
      explanation: 'With k=1, any element can appear at most once. Longest good subarray has length 2.',
    },
    {
      input: 'nums = [5,5,5,5,5,5,5], k = 4',
      output: '4',
    },
  ],
  hints: [
    'Use a sliding window with a frequency map.',
    'Expand right, and when any element exceeds frequency k, shrink from the left.',
    'Track the window\'s maximum length throughout.',
  ],
  functionName: 'maxSubarrayLength',
  params: ['nums', 'k'],
  starterCode: {
    javascript: 'function maxSubarrayLength(nums, k) {\n\n}',
    typescript: "function maxSubarrayLength(nums: number[], k: number): number {\n\n}",

    python: 'def maxSubarrayLength(nums, k):\n    pass',
  },
  visibleTests: [
    { args: [[1, 2, 3, 1, 2, 3, 1, 2], 2], expected: 6 },
    { args: [[1, 2, 1, 2, 1, 2, 1, 2], 1], expected: 2 },
    { args: [[5, 5, 5, 5, 5, 5, 5], 4], expected: 4 },
  ],
  hiddenTests: [
    { args: [[1], 1], expected: 1 },
    { args: [[1, 2, 3], 1], expected: 3 },
    { args: [[1, 1, 1], 3], expected: 3 },
    { args: [[1, 2, 1, 1, 2], 2], expected: 4 },
    { args: [[1, 2, 3, 1, 2, 3], 1], expected: 3 },
  ],
};
