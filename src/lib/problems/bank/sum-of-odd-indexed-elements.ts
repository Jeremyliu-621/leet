import type { Problem } from '../types';

export const problem: Problem = {
  id: 'sum-of-odd-indexed-elements',
  title: 'Sum of Odd-Indexed Elements',
  difficulty: 'easy',
  tags: ['arrays'],
  description: `Given an integer array \`nums\`, return the **sum of all elements at odd indices** (indices 1, 3, 5, …).

Indices are **0-based**, so the first element is at index 0 (even), the second at index 1 (odd), and so on.`,
  constraints: [
    '1 <= nums.length <= 10^4',
    '-10^9 <= nums[i] <= 10^9',
  ],
  examples: [
    {
      input: 'nums = [1,2,3,4,5]',
      output: '6',
      explanation: 'Elements at odd indices: nums[1]=2, nums[3]=4. Sum = 2+4 = 6.',
    },
    {
      input: 'nums = [10,20,30]',
      output: '20',
      explanation: 'Only nums[1]=20 is at an odd index.',
    },
    {
      input: 'nums = [7]',
      output: '0',
      explanation: 'There are no elements at odd indices (only index 0 exists).',
    },
  ],
  hints: [
    'Use a loop starting at index 1, incrementing by 2 (i.e., i = 1, 3, 5, …).',
    'Alternatively, use reduce: sum v when i % 2 === 1, otherwise skip.',
    'An array of length 1 has no odd-indexed elements, so return 0.',
  ],
  functionName: 'sumOddIndexed',
  params: ['nums'],
  starterCode: {
    javascript: `function sumOddIndexed(nums) {

}`,
    typescript: `function sumOddIndexed(nums: number[]): number {

}`,
    python: `def sumOddIndexed(nums: list[int]) -> int:
    pass`,
  },
  visibleTests: [
    { args: [[1, 2, 3, 4, 5]], expected: 6 },
    { args: [[10, 20, 30]], expected: 20 },
    { args: [[7]], expected: 0 },
  ],
  hiddenTests: [
    { args: [[1, 1]], expected: 1 },
    { args: [[0, 0, 0, 0]], expected: 0 },
    { args: [[-1, -2, -3, -4]], expected: -6 },
    { args: [[5, 3, 5, 3]], expected: 6 },
    { args: [[1, 2]], expected: 2 },
    { args: [[1, 2, 3, 4, 5, 6]], expected: 12 },
    { args: [[100, 200, 300, 400]], expected: 600 },
    { args: [[0, 1, 0, 1, 0]], expected: 2 },
  ],
};
