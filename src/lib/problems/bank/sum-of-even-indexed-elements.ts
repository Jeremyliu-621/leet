import type { Problem } from '../types';

export const problem: Problem = {
  id: 'sum-of-even-indexed-elements',
  title: 'Sum of Even-Indexed Elements',
  difficulty: 'easy',
  tags: ['arrays'],
  description: `Given an integer array \`nums\`, return the sum of all elements at **even** indices (0-indexed). Indices 0, 2, 4, ... are even.`,
  constraints: [
    '1 <= nums.length <= 100',
    '-1000 <= nums[i] <= 1000',
  ],
  examples: [
    {
      input: 'nums = [1,2,3,4,5]',
      output: '9',
      explanation: 'Elements at even indices: nums[0]=1, nums[2]=3, nums[4]=5. Sum = 1+3+5 = 9.',
    },
    {
      input: 'nums = [10,20,30]',
      output: '40',
      explanation: 'Elements at even indices: nums[0]=10, nums[2]=30. Sum = 10+30 = 40.',
    },
    {
      input: 'nums = [7]',
      output: '7',
      explanation: 'Only nums[0]=7 exists at an even index. Sum = 7.',
    },
  ],
  hints: [
    'Iterate over the array and accumulate elements at indices where `i % 2 === 0`.',
    'Use a for loop with step 2: `for (let i = 0; i < nums.length; i += 2)` to visit only even indices.',
    'No special edge cases beyond single-element arrays — the loop handles them naturally since index 0 is always even.',
  ],
  functionName: 'sumEvenIndexed',
  params: ['nums'],
  starterCode: {
    javascript: `function sumEvenIndexed(nums) {

}`,
    typescript: `function sumEvenIndexed(nums: number[]): number {

}`,
    python: `def sumEvenIndexed(nums):
    pass`,
  },
  visibleTests: [
    { args: [[1, 2, 3, 4, 5]], expected: 9 },
    { args: [[10, 20, 30]], expected: 40 },
    { args: [[7]], expected: 7 },
  ],
  hiddenTests: [
    { args: [[2, 4, 6, 8]], expected: 8 },
    { args: [[-1, -2, -3, -4, -5]], expected: -9 },
    { args: [[1, 1, 1, 1, 1, 1]], expected: 3 },
    { args: [[100, 200, 300, 400, 500]], expected: 900 },
    { args: [[5, 5]], expected: 5 },
    { args: [[0, 0, 0, 0]], expected: 0 },
    { args: [[3, 7, 2, 8, 5, 1, 4]], expected: 14 },
    { args: [[1000, 999, 1000]], expected: 2000 },
  ],
};
