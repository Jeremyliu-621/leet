import type { Problem } from '../types';

export const problem: Problem = {
  id: 'max-subarray-circular',
  title: 'Maximum Sum Circular Subarray',
  difficulty: 'medium',
  tags: ['arrays'],
  description: `Given a **circular integer array** \`nums\` of length \`n\`, return the **maximum possible sum** of a non-empty subarray of \`nums\`.

A **circular array** means the end of the array connects to the beginning. A subarray may only include each element of the fixed buffer \`nums\` at most once.`,
  constraints: [
    'n == nums.length',
    '1 <= n <= 3 * 10^4',
    '-3 * 10^4 <= nums[i] <= 3 * 10^4',
  ],
  examples: [
    {
      input: 'nums = [1,-2,3,-2]',
      output: '3',
      explanation: 'Subarray [3] has maximum sum 3.',
    },
    {
      input: 'nums = [5,-3,5]',
      output: '10',
      explanation: 'Subarray [5,5] (wraps around) has maximum sum 10.',
    },
    {
      input: 'nums = [-3,-2,-3]',
      output: '-2',
      explanation: 'Subarray [-2] has maximum sum -2.',
    },
  ],
  hints: [
    'The answer is either a normal (non-wrapping) max subarray, or a wrapping subarray.',
    'A wrapping subarray\'s sum = totalSum - (min subarray sum in the middle). So it equals totalSum - minSubarraySum.',
    'Edge case: if all numbers are negative, the circular answer equals totalSum - totalSum = 0, which is invalid. Return maxSubarray in that case.',
  ],
  functionName: 'maxSubarraySumCircular',
  params: ['nums'],
  starterCode: {
    javascript: `function maxSubarraySumCircular(nums) {
  // Return max sum circular subarray
}`,
    typescript: "function maxSubarraySumCircular(nums: number[]): number {\n  // Return max sum circular subarray\n}",

    python: `def maxSubarraySumCircular(nums):
    # Return max sum circular subarray
    pass`,
  },
  visibleTests: [
    { args: [[1, -2, 3, -2]], expected: 3 },
    { args: [[5, -3, 5]], expected: 10 },
    { args: [[-3, -2, -3]], expected: -2 },
  ],
  hiddenTests: [
    { args: [[1, 2, 3, 4, 5]], expected: 15 },
    { args: [[-1, 0]], expected: 0 },
    { args: [[3, -2, 2, -3]], expected: 3 },
    { args: [[-2, 1, -2]], expected: 1 },
  ],
};
