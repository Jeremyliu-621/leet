import type { Problem } from '../types';

export const problem: Problem = {
  id: 'sum-of-imbalance-numbers-of-all-subarrays',
  title: 'Sum of Imbalance Numbers of All Subarrays',
  difficulty: 'medium',
  tags: ['arrays', 'hash-map'],
  description: `The **imbalance number** of a 0-indexed integer array \`arr\` of length \`n\` is defined as the number of indices in \`sarr = sort(arr)\` such that \`sarr[i+1] - sarr[i] > 1\` where \`0 <= i < n - 1\`.

Here \`sort(arr)\` represents the operation of sorting \`arr\` in non-decreasing order.

Given a 0-indexed integer array \`nums\`, return the **sum of imbalance numbers** of all the subarrays of \`nums\`.

A subarray is a contiguous non-empty sequence of elements within an array.`,
  constraints: [
    '`1 <= nums.length <= 1000`',
    '`1 <= nums[i] <= nums.length`',
  ],
  examples: [
    {
      input: 'nums = [2,3,1,4]',
      output: '3',
      explanation: 'Subarrays with non-zero imbalance: [3,1]→1, [1,4]→1, [3,1,4]→1. Total = 3.',
    },
    {
      input: 'nums = [1,3,3,3,5]',
      output: '8',
    },
  ],
  hints: [
    'O(n²) brute force: for each subarray, compute the sorted sequence and count gaps > 1.',
    'For a fixed left endpoint, maintain a sorted set as you extend right. Track new gaps created by inserting each element.',
    'Efficient approach: for each pair (i, j) where j appears in the sorted subarray after i with gap > 1, count the number of subarrays where this gap exists.',
  ],
  functionName: 'sumImbalanceNumbers',
  params: ['nums'],
  starterCode: {
    javascript: `function sumImbalanceNumbers(nums) {

}`,
    typescript: 'function sumImbalanceNumbers(nums: number[]): number {\n\n}',
    python: `def sumImbalanceNumbers(nums):
    pass`,
  },
  visibleTests: [
    { args: [[2, 3, 1, 4]], expected: 3 },
    { args: [[1, 3, 3, 3, 5]], expected: 8 },
  ],
  hiddenTests: [
    { args: [[1]], expected: 0 },
    { args: [[1, 2]], expected: 0 },
    { args: [[1, 3]], expected: 1 },
    { args: [[3, 1, 2]], expected: 1 },
    { args: [[1, 2, 3, 4, 5]], expected: 0 },
  ],
};
