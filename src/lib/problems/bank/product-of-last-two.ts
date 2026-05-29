import type { Problem } from '../types';

export const problem: Problem = {
  id: 'product-of-last-two',
  title: 'Product of Last Two',
  difficulty: 'easy',
  tags: ['arrays', 'math'],
  description: `Given an integer array \`nums\` with at least two elements, return the **product of the last two elements** — that is, \`nums[n-2] * nums[n-1]\` where \`n\` is the length of the array.`,
  constraints: [
    '2 <= nums.length <= 10^4',
    '1 <= nums[i] <= 10^3',
  ],
  examples: [
    {
      input: 'nums = [1,2,3,4]',
      output: '12',
      explanation: 'The last two elements are 3 and 4. Their product is 3 * 4 = 12.',
    },
    {
      input: 'nums = [5,6]',
      output: '30',
      explanation: 'The last two elements are 5 and 6. Their product is 5 * 6 = 30.',
    },
    {
      input: 'nums = [3,2,1]',
      output: '2',
      explanation: 'The last two elements are 2 and 1. Their product is 2 * 1 = 2.',
    },
  ],
  hints: [
    'Access the last element with nums[nums.length - 1] and the second-to-last with nums[nums.length - 2].',
    'Multiply those two values together.',
    'In Python you can use negative indexing: nums[-1] * nums[-2].',
  ],
  functionName: 'productOfLastTwo',
  params: ['nums'],
  starterCode: {
    javascript: `function productOfLastTwo(nums) {

}`,
    typescript: `function productOfLastTwo(nums: number[]): number {

}`,
    python: `def productOfLastTwo(nums: list[int]) -> int:
    pass`,
  },
  visibleTests: [
    { args: [[1, 2, 3, 4]], expected: 12 },
    { args: [[5, 6]], expected: 30 },
    { args: [[3, 2, 1]], expected: 2 },
  ],
  hiddenTests: [
    { args: [[10, 5, 2]], expected: 10 },
    { args: [[1, 1, 1, 1]], expected: 1 },
    { args: [[2, 3, 4, 5, 6]], expected: 30 },
    { args: [[7, 8]], expected: 56 },
    { args: [[100, 200, 300]], expected: 60000 },
    { args: [[9, 1]], expected: 9 },
    { args: [[4, 5, 6, 7, 8]], expected: 56 },
    { args: [[1, 2]], expected: 2 },
  ],
};
