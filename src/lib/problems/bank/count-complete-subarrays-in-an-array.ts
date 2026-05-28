import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-complete-subarrays-in-an-array',
  title: 'Count Complete Subarrays in an Array',
  difficulty: 'medium',
  tags: ['sliding-window', 'arrays', 'hash-map'],
  description: `You are given an array \`nums\` consisting of **positive** integers.

We call a subarray of an array **complete** if the following condition is satisfied:

- The number of **distinct** elements in the subarray is equal to the number of distinct elements in the whole array.

Return the number of **complete** subarrays.`,
  constraints: [
    '1 <= nums.length <= 1000',
    '1 <= nums[i] <= 2000',
  ],
  examples: [
    {
      input: 'nums = [1,3,1,2,2]',
      output: '4',
      explanation: 'Total distinct elements = 3 ({1,2,3}). Complete subarrays are [1,3,1,2,2], [1,3,1,2], [3,1,2,2], [3,1,2] — all have 3 distinct elements.',
    },
    {
      input: 'nums = [5,5,5,5]',
      output: '10',
      explanation: 'Total distinct elements = 1. Every subarray has exactly 1 distinct element, so all 10 subarrays are complete.',
    },
  ],
  hints: [
    'First find the total number of distinct elements in nums.',
    'Use a sliding window: for each left index, find the smallest right index where the window has all distinct elements.',
    'For a valid window starting at left, every extension of that window to the right is also valid.',
  ],
  functionName: 'countCompleteSubarrays',
  params: ['nums'],
  starterCode: {
    javascript: `function countCompleteSubarrays(nums) {

}`,
    python: `def countCompleteSubarrays(nums):
    pass`,
  },
  visibleTests: [
    { args: [[1, 3, 1, 2, 2]], expected: 4 },
    { args: [[5, 5, 5, 5]], expected: 10 },
  ],
  hiddenTests: [
    { args: [[1]], expected: 1 },
    { args: [[1, 2]], expected: 1 },
    { args: [[1, 2, 3]], expected: 1 },
    { args: [[1, 2, 1, 2]], expected: 6 },
  ],
};
