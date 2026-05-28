import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-value-positive-step-sum',
  title: 'Find the Minimum Value to Get a Positive Step by Step Sum',
  difficulty: 'easy',
  tags: ['arrays'],
  description: `Given an array of integers \`nums\`, you start with an initial **positive** value \`startValue\`.

In each iteration, you calculate the step by step sum of \`startValue\` plus elements in \`nums\` (from left to right).

Return the minimum **positive** value of \`startValue\` such that the step by step sum is never less than 1.`,
  constraints: [
    '`1 <= nums.length <= 100`',
    '`-100 <= nums[i] <= 100`',
  ],
  examples: [
    {
      input: 'nums = [-3,2,-3,4,2]',
      output: '5',
      explanation: 'With startValue=5: 5, 2, 4, 1, 5, 7. The minimum step sum is 1.',
    },
    {
      input: 'nums = [1,2]',
      output: '1',
    },
    {
      input: 'nums = [1,-2,-3]',
      output: '5',
    },
  ],
  hints: [
    'Compute prefix sums. The minimum prefix sum determines how much startValue needs to be. startValue = max(1, 1 - minPrefixSum).',
    'The running prefix sum must stay above 0. Track the minimum prefix sum seen; the answer is `max(1, 1 - minPrefixSum)`.',
    `\`\`\`js
let min = 0, sum = 0;
for (const n of nums) { sum += n; min = Math.min(min, sum); }
return Math.max(1, 1 - min);\`\`\``
  ],
  functionName: 'minStartValue',
  params: ['nums'],
  starterCode: {
    javascript: `function minStartValue(nums) {

}`,
    typescript: "function minStartValue(nums: number[]): number {\n\n}",

    python: `def minStartValue(nums):
    pass`,
  },
  visibleTests: [
    { args: [[-3, 2, -3, 4, 2]], expected: 5 },
    { args: [[1, 2]], expected: 1 },
    { args: [[1, -2, -3]], expected: 5 },
  ],
  hiddenTests: [
    { args: [[0]], expected: 1 },
    { args: [[-1]], expected: 2 },
    { args: [[1]], expected: 1 },
    { args: [[-5, -3, -2]], expected: 11 },
    { args: [[2, 3, -9, -1, 3, -7, 9, -3]], expected: 10 },
  ],
};
