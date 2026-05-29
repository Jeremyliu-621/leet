import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximum-difference-between-adjacent-elements-in-a-circular-array',
  title: 'Maximum Difference Between Adjacent Elements in a Circular Array',
  difficulty: 'easy',
  tags: ['arrays'],
  description: `Given a **circular** array \`nums\`, return the **maximum** absolute difference between adjacent elements.

In a circular array, the first and last elements are also considered adjacent.`,
  constraints: [
    '2 <= nums.length <= 100',
    '-100 <= nums[i] <= 100',
  ],
  examples: [
    {
      input: 'nums = [1,2,4]',
      output: '3',
      explanation: 'Adjacent diffs: |1-2|=1, |2-4|=2, |4-1|=3 (last to first). Maximum is 3.',
    },
    {
      input: 'nums = [-1,-2,-3,-4]',
      output: '3',
      explanation: 'Adjacent diffs: 1, 1, 1, |-4-(-1)|=3. Maximum is 3.',
    },
    {
      input: 'nums = [-3,-10,-6,-1]',
      output: '7',
      explanation: 'Adjacent diffs: 7, 4, 5, 2. Maximum is 7.',
    },
  ],
  hints: [
    'Iterate through all adjacent pairs including the wrap-around (last to first).',
    'For each pair, compute the absolute difference.',
    'Return the maximum of all these differences.',
  ],
  functionName: 'maxAdjacentDistance',
  params: ['nums'],
  starterCode: {
    javascript: `function maxAdjacentDistance(nums) {\n  \n}`,
    typescript: `function maxAdjacentDistance(nums: number[]): number {\n  \n}`,
    python: `def maxAdjacentDistance(nums):\n    `,
  },
  visibleTests: [
    { args: [[1, 2, 4]], expected: 3 },
    { args: [[-1, -2, -3, -4]], expected: 3 },
    { args: [[-3, -10, -6, -1]], expected: 7 },
  ],
  hiddenTests: [
    { args: [[1, 2, 4]], expected: 3 },
    { args: [[-1, -2, -3, -4]], expected: 3 },
    { args: [[-3, -10, -6, -1]], expected: 7 },
    { args: [[0, 0, 0]], expected: 0 },
    { args: [[1, 100]], expected: 99 },
    { args: [[1, 3]], expected: 2 },
    { args: [[2, 5, 1, 4]], expected: 4 },
    { args: [[5, -5]], expected: 10 },
  ],
};
