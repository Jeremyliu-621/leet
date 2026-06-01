import type { Problem } from '../types';

export const problem: Problem = {
  id: 'subarray-with-elements-greater-than-varying-threshold',
  title: 'Subarray With Elements Greater Than Varying Threshold',
  difficulty: 'hard',
  tags: ['arrays', 'stack', 'union-find'],
  description: `You are given an integer array \`nums\` and an integer \`threshold\`.

Find any subarray of \`nums\` of length \`k\` such that **every** element in the subarray is greater than \`threshold / k\`.

Return the **size** of any such subarray. If there is no such subarray, return \`-1\`.

**Note:** A subarray is a contiguous part of the array.

**Key insight:** For a subarray of length \`k\`, we need every element > \`threshold / k\`, which means the **minimum** element of the subarray must satisfy \`min > threshold / k\`, or equivalently \`min * k > threshold\`.

For each element \`nums[i]\`, find the maximum length of a subarray where \`nums[i]\` is the minimum. If \`nums[i] * maxLen > threshold\`, that subarray is valid.`,
  constraints: [
    '`1 <= nums.length <= 10^5`',
    '`1 <= nums[i] <= 10^9`',
    '`1 <= threshold <= 10^9`',
  ],
  examples: [
    {
      input: 'nums = [1,3,4,3,1], threshold = 6',
      output: '3',
      explanation:
        'The subarray [3,4,3] has length 3. threshold / 3 = 2, and every element (3, 4, 3) is greater than 2. So the answer is 3.',
    },
    {
      input: 'nums = [6,5,6,5,8], threshold = 7',
      output: '1',
      explanation:
        'The subarray [8] has length 1. threshold / 1 = 7, and 8 > 7. So the answer is 1.',
    },
  ],
  hints: [
    'For each element nums[i] as the minimum of some subarray, what is the longest subarray where it stays the minimum? Use a monotonic stack to find the nearest-smaller-element to the left and right.',
    'If left[i] is the nearest index with nums[left[i]] < nums[i], and right[i] is the nearest index with nums[right[i]] < nums[i], then the maximum subarray length with nums[i] as minimum is right[i] - left[i] - 1.',
    'For each i, check if nums[i] * (right[i] - left[i] - 1) > threshold. The first i that satisfies this gives a valid subarray length.',
  ],
  functionName: 'validSubarraySize',
  params: ['nums', 'threshold'],
  starterCode: {
    javascript: `function validSubarraySize(nums, threshold) {

}`,
    typescript: `function validSubarraySize(nums: number[], threshold: number): number {

}`,
    python: `def validSubarraySize(nums, threshold):
    pass`,
  },
  visibleTests: [
    { args: [[1, 3, 4, 3, 1], 6], expected: 3 },
    { args: [[6, 5, 6, 5, 8], 7], expected: 3 },
  ],
  hiddenTests: [
    { args: [[1, 2, 3], 5], expected: -1 },
    { args: [[10], 5], expected: 1 },
    { args: [[1, 1, 1], 0], expected: 1 },
    { args: [[3, 4, 3, 2], 4], expected: 2 },
    { args: [[5, 5, 5, 5], 19], expected: 4 },
    { args: [[5, 5, 5, 5], 20], expected: -1 },
    { args: [[5, 5, 5, 5], 4], expected: 1 },
    { args: [[1000000000], 999999999], expected: 1 },
    { args: [[2, 1, 2], 2], expected: 3 },
  ],
};
