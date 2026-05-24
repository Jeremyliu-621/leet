import type { Problem } from '../types';

export const problem: Problem = {
  id: 'move-zeros',
  title: 'Move Zeros To End',
  difficulty: 'easy',
  tags: ['two-pointers'],
  description: `Given an integer array \`nums\`, return a **new** array with all zeros moved to the end while preserving the relative order of the non-zero elements.

For example, \`[0, 1, 0, 3, 12]\` becomes \`[1, 3, 12, 0, 0]\`.

The original array must not be modified. A two-pointer approach processes the array in a single pass: one pointer tracks the next position for a non-zero element, and the other scans forward.`,
  constraints: [
    '0 <= nums.length <= 1000',
    '-10000 <= nums[i] <= 10000',
    'All values in nums are integers.',
  ],
  examples: [
    {
      input: 'nums = [0,1,0,3,12]',
      output: '[1,3,12,0,0]',
      explanation: 'Non-zero elements 1, 3, 12 keep their order; two zeros move to the back.',
    },
    {
      input: 'nums = [0]',
      output: '[0]',
      explanation: 'A single zero stays where it is.',
    },
    {
      input: 'nums = [1,2,3]',
      output: '[1,2,3]',
      explanation: 'No zeros to move.',
    },
  ],
  hints: [
    'Think about splitting the problem into two parts: collecting the non-zero elements, then filling in the remaining positions with zeros.',
    'Filter out the zeros to get the non-zero prefix, then append enough zeros to fill the original length: `const nonZero = nums.filter(n => n !== 0); return [...nonZero, ...Array(nums.length - nonZero.length).fill(0)];`',
    'Two-pointer approach: copy `nums`, maintain a write pointer `w = 0`. For each element, if it is non-zero, write it at `out[w++]`. Then fill positions `w` to end with 0.',
  ],
  functionName: 'moveZeros',
  params: ['nums'],
  starterCode: {
    javascript: 'function moveZeros(nums) {\n  // your code here\n}\n',
    python: 'def moveZeros(nums):\n    # your code here\n    pass\n',
  },
  visibleTests: [
    { args: [[0, 1, 0, 3, 12]], expected: [1, 3, 12, 0, 0] },
    { args: [[0]], expected: [0] },
    { args: [[1, 2, 3]], expected: [1, 2, 3] },
  ],
  hiddenTests: [
    { args: [[]], expected: [] },
    { args: [[0, 0, 0]], expected: [0, 0, 0] },
    { args: [[1, 0, 0, 2]], expected: [1, 2, 0, 0] },
    { args: [[0, 0, 1]], expected: [1, 0, 0] },
    { args: [[-1, 0, -2, 0, -3]], expected: [-1, -2, -3, 0, 0] },
    { args: [[7, 8, 9]], expected: [7, 8, 9] },
  ],
};
