import type { Problem } from '../types';

export const problem: Problem = {
  id: 'single-number-iii',
  title: 'Single Number III',
  difficulty: 'medium',
  tags: ['bit-manipulation', 'arrays', 'math'],
  description: `Given an integer array \`nums\`, in which exactly two elements appear only once and all the other elements appear exactly twice. Find the two elements that appear only once. You can return the answer in **any order**.

You must write an algorithm that runs in linear runtime complexity and uses only constant extra space.`,
  constraints: [
    '2 <= nums.length <= 3 * 10^4',
    '-2^31 <= nums[i] <= 2^31 - 1',
    'Each integer in nums will appear twice, only two integers will appear once.',
  ],
  examples: [
    {
      input: 'nums = [1,2,1,3,2,5]',
      output: '[3,5]',
      explanation: '3 and 5 each appear once.',
    },
    {
      input: 'nums = [-1,0]',
      output: '[-1,0]',
    },
    {
      input: 'nums = [0,1]',
      output: '[0,1]',
    },
  ],
  hints: [
    'XOR all numbers; result is XOR of the two unique numbers.',
    'Find any set bit in the XOR result; use it to partition numbers into two groups.',
    'XOR each group independently to isolate each unique number.',
  ],
  functionName: 'singleNumberIII',
  params: ['nums'],
  starterCode: {
    javascript: 'function singleNumberIII(nums) {\n  \n}\n',
    typescript: "function singleNumberIII(nums: number[]): number[] {\n  \n}",

    python: 'def singleNumberIII(nums):\n    pass\n',
  },
  visibleTests: [
    { args: [[1, 2, 1, 3, 2, 5]], expected: [3, 5] },
    { args: [[-1, 0]], expected: [-1, 0] },
    { args: [[0, 1]], expected: [0, 1] },
  ],
  hiddenTests: [
    { args: [[2, 3]], expected: [2, 3] },
    { args: [[1, 2, 2, 3, 3, 4]], expected: [1, 4] },
    { args: [[5, 5, 6, 7, 7, 8]], expected: [6, 8] },
    { args: [[10, 20, 10, 30, 20, 40]], expected: [30, 40] },
  ],
};
