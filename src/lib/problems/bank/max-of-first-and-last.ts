import type { Problem } from '../types';

export const problem: Problem = {
  id: 'max-of-first-and-last',
  title: 'Max of First and Last',
  difficulty: 'easy',
  tags: ['arrays'],
  description: `Given an integer array \`nums\` with at least one element, return the **maximum** of the first element and the last element.`,
  constraints: [
    '1 <= nums.length <= 10^4',
    '-10^4 <= nums[i] <= 10^4',
  ],
  examples: [
    {
      input: 'nums = [3,1,4,1,5,9,2,6]',
      output: '6',
      explanation: 'First element is 3, last is 6. max(3, 6) = 6.',
    },
    {
      input: 'nums = [10,5]',
      output: '10',
      explanation: 'First element is 10, last is 5. max(10, 5) = 10.',
    },
    {
      input: 'nums = [7]',
      output: '7',
      explanation: 'Single element: first and last are both 7.',
    },
  ],
  hints: [
    'Access nums[0] and nums[nums.length - 1].',
    'Return Math.max of those two values.',
    'In Python, max(nums[0], nums[-1]) works directly.',
  ],
  functionName: 'maxOfFirstAndLast',
  params: ['nums'],
  starterCode: {
    javascript: `function maxOfFirstAndLast(nums) {
  return Math.max(nums[0], nums[nums.length - 1]);
}`,
    typescript: `function maxOfFirstAndLast(nums: number[]): number {
  return Math.max(nums[0], nums[nums.length - 1]);
}`,
    python: `def maxOfFirstAndLast(nums: list[int]) -> int:
    return max(nums[0], nums[-1])`,
  },
  visibleTests: [
    { args: [[3, 1, 4, 1, 5, 9, 2, 6]], expected: 6 },
    { args: [[10, 5]], expected: 10 },
    { args: [[7]], expected: 7 },
  ],
  hiddenTests: [
    { args: [[1, 2]], expected: 2 },
    { args: [[5, 3]], expected: 5 },
    { args: [[-5, 5]], expected: 5 },
    { args: [[0, 0]], expected: 0 },
    { args: [[1, 1, 1]], expected: 1 },
    { args: [[-10, 0, 10]], expected: 10 },
    { args: [[100, 1, 1, 1, 50]], expected: 100 },
    { args: [[3, 3]], expected: 3 },
  ],
};
