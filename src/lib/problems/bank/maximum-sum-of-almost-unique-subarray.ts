import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximum-sum-of-almost-unique-subarray',
  title: 'Maximum Sum of Almost Unique Subarray',
  difficulty: 'medium',
  tags: ['arrays', 'sliding-window', 'hash-map'],
  description: `You are given an integer array \`nums\` and two positive integers \`m\` and \`k\`.

Return the **maximum sum** of any subarray of length \`k\` that contains **at least \`m\` distinct elements**. Return \`0\` if no such subarray exists.

A subarray is a contiguous portion of the array.`,
  constraints: [
    '1 <= nums.length <= 2 * 10^4',
    '1 <= m <= k <= nums.length',
    '1 <= nums[i] <= 10^9',
  ],
  examples: [
    {
      input: 'nums = [2,6,7,3,1,7], m = 3, k = 4',
      output: '18',
      explanation: 'Subarrays of length 4: [2,6,7,3] has 4 distinct elements, sum 18; [7,3,1,7] has 3 distinct elements, sum 18. Maximum is 18.',
    },
    {
      input: 'nums = [5,9,9,2,4,5,4], m = 1, k = 3',
      output: '23',
      explanation: 'Every window of length 3 has at least 1 distinct element. [5,9,9] has sum 23, which is the maximum.',
    },
    {
      input: 'nums = [1,2,1,2,1,2,1], m = 3, k = 3',
      output: '0',
      explanation: 'No window of length 3 has 3 or more distinct elements (each window alternates between 1 and 2), so return 0.',
    },
  ],
  hints: [
    'Use a sliding window of fixed size k. Maintain a frequency map and the count of distinct elements.',
    'As you slide the window, add the new element to the right and remove the element leaving from the left.',
    'After each step (once the window has size k), if distinct count ≥ m, update the running maximum.',
  ],
  functionName: 'maxSum',
  params: ['nums', 'm', 'k'],
  starterCode: {
    javascript: `function maxSum(nums, m, k) {
  // your code here
}`,
    python: `def maxSum(nums, m, k):
    # your code here
    pass`,
  },
  visibleTests: [
    { args: [[2, 6, 7, 3, 1, 7], 3, 4], expected: 18 },
    { args: [[5, 9, 9, 2, 4, 5, 4], 1, 3], expected: 23 },
    { args: [[1, 2, 1, 2, 1, 2, 1], 3, 3], expected: 0 },
  ],
  hiddenTests: [
    { args: [[1, 2, 3, 4], 2, 3], expected: 9 },
    { args: [[1], 1, 1], expected: 1 },
  ],
};
