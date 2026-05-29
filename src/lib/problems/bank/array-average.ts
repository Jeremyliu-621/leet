import type { Problem } from '../types';

export const problem: Problem = {
  id: 'array-average',
  title: 'Array Average',
  difficulty: 'easy',
  tags: ['arrays', 'math'],
  description: `Given an integer array \`nums\`, return the **average** (mean) of all elements as a floating-point number.`,
  constraints: [
    '1 <= nums.length <= 10^4',
    '-10^4 <= nums[i] <= 10^4',
  ],
  examples: [
    {
      input: 'nums = [1,2,3,4,5]',
      output: '3.0',
      explanation: 'Sum = 15, count = 5. Average = 15 / 5 = 3.0.',
    },
    {
      input: 'nums = [10,20]',
      output: '15.0',
      explanation: 'Sum = 30, count = 2. Average = 30 / 2 = 15.0.',
    },
    {
      input: 'nums = [7]',
      output: '7.0',
      explanation: 'A single-element array has average equal to that element.',
    },
  ],
  hints: [
    'Sum all elements, then divide by nums.length.',
    'In JavaScript, use nums.reduce((s,v) => s+v, 0) / nums.length.',
    'Ensure you use floating-point division — in most languages, dividing two integers may truncate.',
  ],
  functionName: 'arrayAverage',
  params: ['nums'],
  starterCode: {
    javascript: `function arrayAverage(nums) {

}`,
    typescript: `function arrayAverage(nums: number[]): number {

}`,
    python: `def arrayAverage(nums: list[int]) -> float:
    pass`,
  },
  visibleTests: [
    { args: [[1, 2, 3, 4, 5]], expected: 3.0 },
    { args: [[10, 20]], expected: 15.0 },
    { args: [[7]], expected: 7.0 },
  ],
  hiddenTests: [
    { args: [[0]], expected: 0.0 },
    { args: [[1, 1]], expected: 1.0 },
    { args: [[-4, 4]], expected: 0.0 },
    { args: [[2, 4, 6]], expected: 4.0 },
    { args: [[1, 2, 3]], expected: 2.0 },
    { args: [[-3, -1, 1, 3]], expected: 0.0 },
    { args: [[100, 200, 300]], expected: 200.0 },
    { args: [[5, 5, 5, 5]], expected: 5.0 },
  ],
};
