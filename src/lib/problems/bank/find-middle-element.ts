import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-middle-element',
  title: 'Find Middle Element',
  difficulty: 'easy',
  tags: ['arrays'],
  description: `Given an integer array \`nums\` with an **odd** number of elements, return the **middle element** — the element at index \`Math.floor(nums.length / 2)\`.`,
  constraints: [
    '1 <= nums.length <= 10^4',
    'nums.length is odd.',
    '-10^4 <= nums[i] <= 10^4',
  ],
  examples: [
    {
      input: 'nums = [1,2,3,4,5]',
      output: '3',
      explanation: 'Length 5; middle index is 2. nums[2] = 3.',
    },
    {
      input: 'nums = [7,8,9]',
      output: '8',
      explanation: 'Length 3; middle index is 1. nums[1] = 8.',
    },
    {
      input: 'nums = [42]',
      output: '42',
      explanation: 'Single element; middle index is 0.',
    },
  ],
  hints: [
    'The middle index is Math.floor(nums.length / 2).',
    'Return nums[Math.floor(nums.length / 2)].',
    'Since nums.length is always odd, integer division gives the exact middle.',
  ],
  functionName: 'findMiddleElement',
  params: ['nums'],
  starterCode: {
    javascript: `function findMiddleElement(nums) {

}`,
    typescript: `function findMiddleElement(nums: number[]): number {

}`,
    python: `def findMiddleElement(nums: list[int]) -> int:
    pass`,
  },
  visibleTests: [
    { args: [[1, 2, 3, 4, 5]], expected: 3 },
    { args: [[7, 8, 9]], expected: 8 },
    { args: [[42]], expected: 42 },
  ],
  hiddenTests: [
    { args: [[5]], expected: 5 },
    { args: [[1, 2, 3]], expected: 2 },
    { args: [[10, 20, 30, 40, 50]], expected: 30 },
    { args: [[-5, 0, 5]], expected: 0 },
    { args: [[3, 1, 4, 1, 5]], expected: 4 },
    { args: [[100, 200, 300, 400, 500, 600, 700]], expected: 400 },
    { args: [[9, 7, 5, 3, 1, 0, 2]], expected: 3 },
    { args: [[1, 1, 1]], expected: 1 },
  ],
};
