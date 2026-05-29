import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-value-to-get-positive-step-by-step-sum',
  title: 'Minimum Value to Get Positive Step by Step Sum',
  difficulty: 'easy',
  tags: ['arrays', 'math'],
  description: `Given an array of integers \`nums\`, you start with an initial positive value \`startValue\`.

In each iteration, you calculate the **step by step sum** of \`startValue\` plus elements in \`nums\` (from left to right).

Return the **minimum positive** value of \`startValue\` such that the step by step sum is **never less than 1**.`,
  constraints: [
    '1 <= nums.length <= 100',
    '-100 <= nums[i] <= 100',
  ],
  examples: [
    {
      input: 'nums = [-3,2,-3,4,2]',
      output: '5',
      explanation: 'With startValue = 5: 5+(-3)=2, 2+2=4, 4+(-3)=1, 1+4=5, 5+2=7. All ≥ 1.',
    },
    {
      input: 'nums = [1,2]',
      output: '1',
      explanation: 'With startValue = 1: 1+1=2, 2+2=4. All ≥ 1. 1 is already positive so no need for larger.',
    },
    {
      input: 'nums = [1,-2,-3]',
      output: '5',
      explanation: 'Minimum prefix sum is -4 at index 2 (1-2-3=-4). startValue = max(1, 1-(-4)) = 5.',
    },
  ],
  hints: [
    'Compute the prefix sums of the array.',
    'Find the minimum prefix sum (the lowest point the running total reaches).',
    'startValue = max(1, 1 - minPrefixSum).',
  ],
  functionName: 'minStartValue',
  params: ['nums'],
  starterCode: {
    javascript: `function minStartValue(nums) {\n  \n}`,
    typescript: `function minStartValue(nums: number[]): number {\n  \n}`,
    python: `def minStartValue(nums):\n    `,
  },
  visibleTests: [
    { args: [[-3, 2, -3, 4, 2]], expected: 5 },
    { args: [[1, 2]], expected: 1 },
    { args: [[1, -2, -3]], expected: 5 },
  ],
  hiddenTests: [
    { args: [[-3, 2, -3, 4, 2]], expected: 5 },
    { args: [[1, 2]], expected: 1 },
    { args: [[1, -2, -3]], expected: 5 },
    { args: [[-1, -1, -1]], expected: 4 },
    { args: [[1]], expected: 1 },
    { args: [[100, -99]], expected: 1 },
    { args: [[-5]], expected: 6 },
    { args: [[3, -5, 2, -3]], expected: 4 },
  ],
};
