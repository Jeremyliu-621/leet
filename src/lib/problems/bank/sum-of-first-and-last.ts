import type { Problem } from '../types';

export const problem: Problem = {
  id: 'sum-of-first-and-last',
  title: 'Sum of First and Last',
  difficulty: 'easy',
  tags: ['arrays', 'math'],
  description: `Given an integer array \`nums\` with at least one element, return the **sum** of the first element and the last element.`,
  constraints: [
    '1 <= nums.length <= 10^4',
    '-10^4 <= nums[i] <= 10^4',
  ],
  examples: [
    {
      input: 'nums = [1,2,3,4,5]',
      output: '6',
      explanation: 'First element is 1, last is 5. 1 + 5 = 6.',
    },
    {
      input: 'nums = [10,20,30]',
      output: '40',
      explanation: 'First element is 10, last is 30. 10 + 30 = 40.',
    },
    {
      input: 'nums = [7]',
      output: '14',
      explanation: 'Single element: first and last are both 7. 7 + 7 = 14.',
    },
  ],
  hints: [
    'Access nums[0] and nums[nums.length - 1] and return their sum.',
    'In Python, nums[0] + nums[-1] is the idiomatic one-liner.',
    'For a single-element array, the first and last elements are the same, so you add the element to itself.',
  ],
  functionName: 'sumOfFirstAndLast',
  params: ['nums'],
  starterCode: {
    javascript: `function sumOfFirstAndLast(nums) {

}`,
    typescript: `function sumOfFirstAndLast(nums: number[]): number {

}`,
    python: `def sumOfFirstAndLast(nums: list[int]) -> int:
    pass`,
  },
  visibleTests: [
    { args: [[1, 2, 3, 4, 5]], expected: 6 },
    { args: [[10, 20, 30]], expected: 40 },
    { args: [[7]], expected: 14 },
  ],
  hiddenTests: [
    { args: [[1, 1]], expected: 2 },
    { args: [[5, 3]], expected: 8 },
    { args: [[-5, 5]], expected: 0 },
    { args: [[0, 0]], expected: 0 },
    { args: [[1, 2, 3]], expected: 4 },
    { args: [[-10, 0, 10]], expected: 0 },
    { args: [[100, 1, 1, 1, 50]], expected: 150 },
    { args: [[0]], expected: 0 },
  ],
};
