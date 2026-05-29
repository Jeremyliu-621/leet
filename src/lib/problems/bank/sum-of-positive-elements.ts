import type { Problem } from '../types';

export const problem: Problem = {
  id: 'sum-of-positive-elements',
  title: 'Sum of Positive Elements',
  difficulty: 'easy',
  tags: ['arrays', 'math'],
  description: `Given an integer array \`nums\`, return the **sum of all positive elements** (elements strictly greater than 0). If there are no positive elements, return 0.`,
  constraints: [
    '1 <= nums.length <= 10^4',
    '-10^4 <= nums[i] <= 10^4',
  ],
  examples: [
    {
      input: 'nums = [1,-2,3,-4,5]',
      output: '9',
      explanation: 'Positive elements are 1, 3, and 5. Their sum is 9.',
    },
    {
      input: 'nums = [-1,-2,-3]',
      output: '0',
      explanation: 'No positive elements; return 0.',
    },
    {
      input: 'nums = [0,5,0,10]',
      output: '15',
      explanation: '0 is not positive, so only 5 and 10 are included. Sum = 15.',
    },
  ],
  hints: [
    'Filter the array for elements > 0, then sum the filtered values.',
    'A single reduce also works: accumulate the value only when it is positive.',
    'Remember 0 is not a positive number — use strict > 0, not >= 0.',
  ],
  functionName: 'sumOfPositiveElements',
  params: ['nums'],
  starterCode: {
    javascript: `function sumOfPositiveElements(nums) {

}`,
    typescript: `function sumOfPositiveElements(nums: number[]): number {

}`,
    python: `def sumOfPositiveElements(nums: list[int]) -> int:
    pass`,
  },
  visibleTests: [
    { args: [[1, -2, 3, -4, 5]], expected: 9 },
    { args: [[-1, -2, -3]], expected: 0 },
    { args: [[0, 5, 0, 10]], expected: 15 },
  ],
  hiddenTests: [
    { args: [[1]], expected: 1 },
    { args: [[-1]], expected: 0 },
    { args: [[0]], expected: 0 },
    { args: [[1, 2, 3, 4, 5]], expected: 15 },
    { args: [[-5, -4, -3, -2, -1]], expected: 0 },
    { args: [[0, 0, 0]], expected: 0 },
    { args: [[10, -10, 20, -20, 30]], expected: 60 },
    { args: [[-1, 0, 1]], expected: 1 },
  ],
};
