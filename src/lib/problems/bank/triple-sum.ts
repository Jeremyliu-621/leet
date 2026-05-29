import type { Problem } from '../types';

export const problem: Problem = {
  id: 'triple-sum',
  title: 'Triple Sum',
  difficulty: 'easy',
  tags: ['arrays', 'math'],
  description: `Given an integer array \`nums\` with at least three elements, return the **sum of the first three elements** — that is, \`nums[0] + nums[1] + nums[2]\`.`,
  constraints: [
    '3 <= nums.length <= 10^4',
    '0 <= nums[i] <= 10^5',
  ],
  examples: [
    {
      input: 'nums = [1,2,3]',
      output: '6',
      explanation: '1 + 2 + 3 = 6.',
    },
    {
      input: 'nums = [4,5,6,7]',
      output: '15',
      explanation: 'The first three elements are 4, 5, and 6. 4 + 5 + 6 = 15.',
    },
    {
      input: 'nums = [10,20,30,40,50]',
      output: '60',
      explanation: 'The first three elements are 10, 20, and 30. 10 + 20 + 30 = 60.',
    },
  ],
  hints: [
    'You only need the first three elements of the array.',
    'Access them with nums[0], nums[1], and nums[2], then add them together.',
    'Alternatively, use nums.slice(0, 3).reduce((a, b) => a + b, 0).',
  ],
  functionName: 'tripleSum',
  params: ['nums'],
  starterCode: {
    javascript: `function tripleSum(nums) {

}`,
    typescript: `function tripleSum(nums: number[]): number {

}`,
    python: `def tripleSum(nums: list[int]) -> int:
    pass`,
  },
  visibleTests: [
    { args: [[1, 2, 3]], expected: 6 },
    { args: [[4, 5, 6, 7]], expected: 15 },
    { args: [[10, 20, 30, 40, 50]], expected: 60 },
  ],
  hiddenTests: [
    { args: [[0, 0, 1]], expected: 1 },
    { args: [[1, 1, 1]], expected: 3 },
    { args: [[3, 7, 2, 9]], expected: 12 },
    { args: [[100, 200, 300]], expected: 600 },
    { args: [[5, 5, 5, 5, 5]], expected: 15 },
    { args: [[0, 1, 2]], expected: 3 },
    { args: [[9, 1, 5]], expected: 15 },
    { args: [[2, 4, 6, 8]], expected: 12 },
  ],
};
