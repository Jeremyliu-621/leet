import type { Problem } from '../types';

export const problem: Problem = {
  id: 'largest-subarray-length-k',
  title: 'Largest Subarray of Length K',
  difficulty: 'easy',
  tags: ['arrays', 'two-pointers'],
  description: `Given an integer array \`nums\` and an integer \`k\`, return the **largest** contiguous subarray of length \`k\`.

A subarray \`a\` is larger than subarray \`b\` if, at the first position where they differ, \`a\` has a greater element than \`b\`. It is guaranteed there is a unique answer.`,
  constraints: [
    '1 <= k <= nums.length <= 10^5',
    '1 <= nums[i] <= 10^9',
    'The answer is guaranteed to be unique.',
  ],
  examples: [
    {
      input: 'nums = [1,4,5,2,3], k = 3',
      output: '[5,2,3]',
      explanation: 'Subarrays of length 3: [1,4,5], [4,5,2], [5,2,3]. The largest starts at index 2 because 5 > 4 > 1.',
    },
    {
      input: 'nums = [1,4,5,2,3], k = 4',
      output: '[4,5,2,3]',
      explanation: 'Subarrays of length 4: [1,4,5,2], [4,5,2,3]. 4 > 1 at the first position, so [4,5,2,3] is largest.',
    },
  ],
  hints: [
    'The largest subarray of length k starts at the index of the maximum element among nums[0..n-k].',
    'Find the index of the maximum value in nums[0] through nums[n-k], then return the slice of length k starting there.',
    `\`\`\`js
function largestSubarray(nums, k) {
  let bestStart = 0;
  for (let i = 1; i <= nums.length-k; i++)
    if (nums[i] > nums[bestStart]) bestStart = i;
  return nums.slice(bestStart, bestStart+k);
}\`\`\``,
  ],
  functionName: 'largestSubarray',
  params: ['nums', 'k'],
  starterCode: {
    javascript: `function largestSubarray(nums, k) {\n\n}`,
    typescript: "function largestSubarray(nums: number[], k: number): number[] {\n\n}",

    python: `def largestSubarray(nums, k):\n    pass`,
  },
  visibleTests: [
    { args: [[1, 4, 5, 2, 3], 3], expected: [5, 2, 3] },
    { args: [[1, 4, 5, 2, 3], 4], expected: [4, 5, 2, 3] },
  ],
  hiddenTests: [
    { args: [[1, 2, 3], 3], expected: [1, 2, 3] },
    { args: [[1], 1], expected: [1] },
    { args: [[1, 2, 3, 4, 5], 2], expected: [4, 5] },
    { args: [[5, 3, 1, 7, 2], 3], expected: [5, 3, 1] },
  ],
};
