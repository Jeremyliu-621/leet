import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-right-shifts-to-sort-the-array',
  title: 'Minimum Right Shifts to Sort the Array',
  difficulty: 'easy',
  tags: ['arrays'],
  description: `You are given a **0-indexed** array \`nums\` of length \`n\` containing **distinct** positive integers.

Return the **minimum** number of **right shifts** required to sort \`nums\`, or **-1** if it's impossible.

A right shift on \`nums\` moves the last element to the front:
- \`[a₀, a₁, ..., aₙ₋₂, aₙ₋₁]\` → \`[aₙ₋₁, a₀, a₁, ..., aₙ₋₂]\``,
  constraints: [
    '1 <= nums.length <= 100',
    '1 <= nums[i] <= 100',
    'nums contains distinct integers.',
  ],
  examples: [
    {
      input: 'nums = [3,4,5,1,2]',
      output: '2',
      explanation:
        'After 1 right shift: [2,3,4,5,1]. After 2 right shifts: [1,2,3,4,5], which is sorted.',
    },
    {
      input: 'nums = [1,3,5]',
      output: '0',
      explanation: 'The array is already sorted.',
    },
    {
      input: 'nums = [2,1,4]',
      output: '-1',
      explanation: 'No number of right shifts can sort this array.',
    },
  ],
  hints: [
    'Find all positions i where nums[i] > nums[(i+1) % n] (a "break" in the sorted order).',
    'If there are 0 breaks, the array is already sorted → return 0.',
    'If there is exactly 1 break at index i, return n - 1 - i right shifts.',
    'If there are 2 or more breaks, return -1.',
  ],
  functionName: 'minimumRightShifts',
  params: ['nums'],
  starterCode: {
    javascript: `function minimumRightShifts(nums) {\n  \n}`,
    typescript: `function minimumRightShifts(nums: number[]): number {\n  \n}`,
    python: `def minimumRightShifts(nums):\n    `,
  },
  visibleTests: [
    { args: [[3, 4, 5, 1, 2]], expected: 2 },
    { args: [[1, 3, 5]], expected: 0 },
    { args: [[2, 1, 4]], expected: -1 },
  ],
  hiddenTests: [
    { args: [[3, 4, 5, 1, 2]], expected: 2 },
    { args: [[1, 3, 5]], expected: 0 },
    { args: [[2, 1, 4]], expected: -1 },
    { args: [[1]], expected: 0 },
    { args: [[2, 1]], expected: 1 },
    { args: [[1, 2]], expected: 0 },
    { args: [[5, 1, 2, 3, 4]], expected: 4 },
    { args: [[3, 5, 1, 2, 4]], expected: -1 },
  ],
};
