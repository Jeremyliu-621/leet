import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximum-subarray',
  title: 'Maximum Subarray',
  difficulty: 'medium',
  tags: ['arrays', 'dynamic-programming'],
  description: `Given an integer array \`nums\`, find the **contiguous subarray** (containing at least one number) which has the **largest sum** and return its sum.

A **subarray** is a contiguous part of an array.`,
  constraints: [
    '1 <= nums.length <= 10^5',
    '-10^4 <= nums[i] <= 10^4',
  ],
  examples: [
    {
      input: 'nums = [-2,1,-3,4,-1,2,1,-5,4]',
      output: '6',
      explanation: 'The subarray [4,-1,2,1] has the largest sum = 6.',
    },
    {
      input: 'nums = [1]',
      output: '1',
      explanation: 'The only subarray [1] has sum 1.',
    },
  ],
  hints: [
    'Use Kadane\'s algorithm: keep a running sum, reset it when it drops below the current element.',
    'At each position, the best subarray ending here is either just nums[i], or the previous best subarray extended by nums[i].',
    'Track the global best alongside the local running sum.',
  ],
  functionName: 'maxSubArray',
  params: ['nums'],
  starterCode: {
    javascript: `function maxSubArray(nums) {

}`,
    typescript: "function maxSubArray(nums: number[]): number {\n\n}",

    python: `def maxSubArray(nums):
    pass`,
  },
  visibleTests: [
    { args: [[-2, 1, -3, 4, -1, 2, 1, -5, 4]], expected: 6 },
    { args: [[1]], expected: 1 },
  ],
  hiddenTests: [
    { args: [[5, 4, -1, 7, 8]], expected: 23 },
    { args: [[-1, -2, -3]], expected: -1 },
    { args: [[-2, 1]], expected: 1 },
    { args: [[0]], expected: 0 },
  ],
};
