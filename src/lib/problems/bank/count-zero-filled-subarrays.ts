import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-zero-filled-subarrays',
  title: 'Count Zero-Filled Subarrays',
  difficulty: 'medium',
  tags: ['arrays', 'math'],
  description: `Given an integer array \`nums\`, return the number of **subarrays** filled with \`0\`.

A **subarray** is a contiguous non-empty sequence of elements within an array.`,
  constraints: [
    '1 <= nums.length <= 10^5',
    '-10^9 <= nums[i] <= 10^9',
  ],
  examples: [
    {
      input: 'nums = [0,0,0]',
      output: '6',
      explanation: 'Subarrays of all zeros: [0],[0],[0],[0,0],[0,0],[0,0,0] = 6.',
    },
    {
      input: 'nums = [1,0,0,1]',
      output: '3',
      explanation: '[0],[0],[0,0] — the run of two zeros contributes 2*(2+1)/2 = 3 subarrays.',
    },
    {
      input: 'nums = [1,2,3]',
      output: '0',
      explanation: 'No zeros, so no zero-filled subarrays.',
    },
  ],
  hints: [
    'Track the current run of consecutive zeros.',
    'A run of length k contributes k*(k+1)/2 subarrays, but you can accumulate by adding the run length each step.',
    'When run = r, adding ans += r is equivalent.',
  ],
  functionName: 'zeroFilledSubarray',
  params: ['nums'],
  starterCode: {
    javascript: `function zeroFilledSubarray(nums) {

}`,
    typescript: "function zeroFilledSubarray(nums: number[]): number {\n\n}",

    python: `def zeroFilledSubarray(nums):
    pass`,
  },
  visibleTests: [
    { args: [[0, 0, 0]], expected: 6 },
    { args: [[1, 0, 0, 1]], expected: 3 },
    { args: [[1, 2, 3]], expected: 0 },
  ],
  hiddenTests: [
    { args: [[0]], expected: 1 },
    { args: [[0, 0]], expected: 3 },
    { args: [[0, 0, 0, 0]], expected: 10 },
    { args: [[1, 0, 0, 0, 1, 0]], expected: 7 },
  ],
};
