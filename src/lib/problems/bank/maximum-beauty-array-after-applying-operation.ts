import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximum-beauty-array-after-applying-operation',
  title: 'Maximum Beauty of an Array After Applying Operation',
  difficulty: 'medium',
  tags: ['arrays', 'sliding-window', 'binary-search'],
  description: `You are given a **0-indexed** array \`nums\` and a **non-negative** integer \`k\`.

In one operation, you can do the following:

- Choose an index \`i\` that **hasn't been chosen before** from the range \`[0, nums.length - 1]\`.
- Replace \`nums[i]\` with any integer from the range \`[nums[i] - k, nums[i] + k]\`.

The **beauty** of the array is the length of the longest subsequence consisting of **equal** elements.

Return the **maximum** possible beauty of the array \`nums\` after applying the operation any number of times.

**Note** that you can apply the operation to each index **only once**.

A **subsequence** of an array is a new array generated from the original array by deleting some elements (possibly none) without changing the order of the remaining elements.`,
  constraints: [
    '1 <= nums.length <= 10^5',
    '0 <= nums[i], k <= 10^5',
  ],
  examples: [
    {
      input: 'nums = [4,6,1,2], k = 2',
      output: '3',
      explanation: 'We can apply operations to change [4,6,1,2] such that nums = [4,4,3,4]. The longest subsequence of equal elements is of length 3.',
    },
    {
      input: 'nums = [1,1,1,1], k = 10',
      output: '4',
      explanation: 'All elements are already equal.',
    },
  ],
  hints: [
    'Each element nums[i] can be changed to any value in [nums[i]-k, nums[i]+k].',
    'Sort the array. Then find the longest window where nums[right] - nums[left] <= 2*k.',
    'Use a sliding window on the sorted array.',
  ],
  functionName: 'maximumBeauty',
  params: ['nums', 'k'],
  starterCode: {
    javascript: `function maximumBeauty(nums, k) {

}`,
    typescript: "function maximumBeauty(nums: number[], k: number): number {\n\n}",

    python: `def maximumBeauty(nums, k):
    pass`,
  },
  visibleTests: [
    { args: [[4, 6, 1, 2], 2], expected: 3 },
    { args: [[1, 1, 1, 1], 10], expected: 4 },
  ],
  hiddenTests: [
    { args: [[1], 0], expected: 1 },
    { args: [[1, 2, 3], 0], expected: 1 },
    { args: [[1, 5], 2], expected: 2 },
    { args: [[1, 3, 5], 1], expected: 2 },
  ],
};
