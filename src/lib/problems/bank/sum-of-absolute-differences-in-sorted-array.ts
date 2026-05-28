import type { Problem } from '../types';

export const problem: Problem = {
  id: 'sum-of-absolute-differences-in-sorted-array',
  title: 'Sum of Absolute Differences in a Sorted Array',
  difficulty: 'medium',
  tags: ['arrays'],
  description: `You are given an integer array \`nums\` sorted in **non-decreasing** order.

Build and return an integer array \`result\` with the same length as \`nums\` such that \`result[i]\` is equal to the **summation of absolute differences** between \`nums[i]\` and all the other elements in the array.

In other words, \`result[i] = sum(|nums[i] - nums[j]|)\` where \`0 <= j < nums.length\` and \`j != i\`.`,
  constraints: [
    '2 <= nums.length <= 10^5',
    '1 <= nums[i] <= 10^4',
    'nums is sorted in non-decreasing order.',
  ],
  examples: [
    {
      input: 'nums = [2,3,5]',
      output: '[4,3,5]',
      explanation: 'result[0] = |2-2|+|2-3|+|2-5| = 0+1+3 = 4. result[1] = 0+1+2 = 3. result[2] = 3+2+0 = 5.',
    },
    {
      input: 'nums = [1,4,6,8,10]',
      output: '[24,15,13,15,21]',
      explanation: 'Use prefix sums for O(n) computation.',
    },
  ],
  hints: [
    'Build a prefix sum array. For index i: elements to the left contribute i*nums[i] - prefixSum[i], elements to the right contribute (suffixSum[i] - nums[i]) - (n-1-i)*nums[i].',
    'More precisely: leftSum = nums[i]*i - prefix[i-1]. rightSum = (prefix[n-1] - prefix[i]) - nums[i]*(n-1-i).',
    'This runs in O(n) — compute prefix sums first, then one pass for the result.',
  ],
  functionName: 'getSumAbsoluteDifferences',
  params: ['nums'],
  starterCode: {
    javascript: `function getSumAbsoluteDifferences(nums) {

}`,
    typescript: "function getSumAbsoluteDifferences(nums: number[]): number[] {\n\n}",

    python: `def getSumAbsoluteDifferences(nums):
    pass`,
  },
  visibleTests: [
    { args: [[2, 3, 5]], expected: [4, 3, 5] },
    { args: [[1, 4, 6, 8, 10]], expected: [24, 15, 13, 15, 21] },
  ],
  hiddenTests: [
    { args: [[1, 1]], expected: [0, 0] },
    { args: [[1, 2, 3, 4]], expected: [6, 4, 4, 6] },
    { args: [[1, 10]], expected: [9, 9] },
    { args: [[3, 3, 3]], expected: [0, 0, 0] },
  ],
};
