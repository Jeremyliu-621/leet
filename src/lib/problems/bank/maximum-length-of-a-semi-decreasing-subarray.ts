import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximum-length-of-a-semi-decreasing-subarray',
  title: 'Maximum Length of a Semi-Decreasing Subarray',
  difficulty: 'medium',
  tags: ['arrays', 'binary-search'],
  description: `You are given a **0-indexed** integer array \`nums\`.

A subarray \`nums[i..j]\` (with \`i < j\`) is called **semi-decreasing** if its first element is **strictly greater** than its last element: \`nums[i] > nums[j]\`.

Return the **maximum length** of a semi-decreasing subarray of \`nums\`, or \`0\` if no such subarray exists.`,
  constraints: [
    '`1 <= nums.length <= 10^5`',
    '`1 <= nums[i] <= 10^9`',
  ],
  examples: [
    {
      input: 'nums = [7,6,5,4,3,2,1]',
      output: '7',
      explanation: 'The entire array is semi-decreasing since nums[0]=7 > nums[6]=1.',
    },
    {
      input: 'nums = [1,2,3,4,5]',
      output: '0',
      explanation: 'The array is strictly increasing so no first element is greater than any later element.',
    },
    {
      input: 'nums = [3,5,2,1,4]',
      output: '4',
      explanation: 'Subarrays [3,5,2,1] (3>1) and [5,2,1,4] (5>4) both have length 4.',
    },
  ],
  hints: [
    'For a fixed right endpoint j, the best left endpoint i is the leftmost index where nums[i] > nums[j].',
    'Only "prefix maxima" can be optimal left endpoints: if nums[i] > nums[k] for some i < k < j with nums[k] > nums[j], then i is still a better choice than k.',
    'Build the list of prefix maxima (strictly increasing values from left to right). For each j, binary search this list to find the leftmost prefix max with value > nums[j].',
  ],
  functionName: 'maxSubarrayLength',
  params: ['nums'],
  starterCode: {
    javascript: `function maxSubarrayLength(nums) {

}`,
    typescript: `function maxSubarrayLength(nums: number[]): number {

}`,
    python: `def maxSubarrayLength(nums):
    pass`,
  },
  visibleTests: [
    { args: [[7, 6, 5, 4, 3, 2, 1]], expected: 7 },
    { args: [[1, 2, 3, 4, 5]], expected: 0 },
    { args: [[3, 5, 2, 1, 4]], expected: 4 },
  ],
  hiddenTests: [
    { args: [[1]], expected: 0 },
    { args: [[2, 1]], expected: 2 },
    { args: [[1, 2]], expected: 0 },
    { args: [[1, 1, 1]], expected: 0 },
    { args: [[5, 4, 3, 2, 1]], expected: 5 },
    { args: [[4, 3, 5, 2, 1]], expected: 5 },
    { args: [[3, 1, 2]], expected: 3 },
  ],
};
