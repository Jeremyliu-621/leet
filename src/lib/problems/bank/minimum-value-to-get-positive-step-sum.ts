import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-value-to-get-positive-step-sum',
  title: 'Find the Minimum Value to Get Positive Step by Step Sum',
  difficulty: 'easy',
  tags: ['arrays'],
  description: `Given an array of integers \`nums\`, you start with an initial positive value \`startValue\`.

In each iteration, you calculate the step by step sum of \`startValue\` plus elements in \`nums\` (from left to right).

Return the minimum positive value of \`startValue\` such that the step by step sum is never less than 1.`,
  constraints: [
    '`1 <= nums.length <= 100`',
    '`-100 <= nums[i] <= 100`',
  ],
  examples: [
    {
      input: 'nums = [-3,2,-3,4,2]',
      output: '5',
      explanation: 'If startValue = 4, step by step sum is [1, 3, 0, 4, 6]. The sum drops to 0 at index 2. With startValue = 5, step by step sum is [2, 4, 1, 5, 7], always >= 1.',
    },
    {
      input: 'nums = [1,2]',
      output: '1',
      explanation: 'Minimum startValue = 1 is enough: [2, 4], always >= 1.',
    },
    {
      input: 'nums = [1,-2,-3]',
      output: '5',
    },
  ],
  hints: [
    'Track the prefix sum as you scan left to right. The minimum startValue is determined by the most negative prefix sum you encounter.',
    'If the minimum prefix sum is `minSum`, then startValue = max(1, 1 - minSum).',
  ],
  functionName: 'minStartValue',
  params: ['nums'],
  starterCode: {
    javascript: `function minStartValue(nums) {

}`,
    python: `def minStartValue(nums):
    pass`,
  },
  visibleTests: [
    { args: [[-3,2,-3,4,2]], expected: 5 },
    { args: [[1,2]], expected: 1 },
    { args: [[1,-2,-3]], expected: 5 },
  ],
  hiddenTests: [
    { args: [[0]], expected: 1 },
    { args: [[-1,-2,-3]], expected: 7 },
    { args: [[2,3,4,5]], expected: 1 },
    { args: [[-100]], expected: 101 },
  ],
};
