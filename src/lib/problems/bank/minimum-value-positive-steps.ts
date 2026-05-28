import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-value-positive-steps',
  title: 'Find the Minimum Value to Guarantee a Positive Step-by-Step Sum',
  difficulty: 'easy',
  tags: ['arrays'],
  description: `Given an array of integers \`nums\`, you start with an initial positive value \`startValue\`.

In each iteration, you calculate the step-by-step sum of \`startValue\` plus elements in \`nums\` (from left to right).

Return the minimum **positive** value of \`startValue\` such that the step-by-step sum is never less than 1.`,
  constraints: [
    '1 <= nums.length <= 100',
    '-100 <= nums[i] <= 100',
  ],
  examples: [
    {
      input: 'nums = [-3,2,-3,4,2]',
      output: '5',
      explanation: 'If startValue = 4, sums become 1,3,0 — drops to 0. With startValue = 5: 2,4,1,5,7 — always ≥ 1.',
    },
    {
      input: 'nums = [1,2]',
      output: '1',
      explanation: 'Minimum positive startValue; sums: 2, 4.',
    },
    {
      input: 'nums = [1,-2,-3]',
      output: '5',
    },
  ],
  hints: [
    'Level 1: Compute prefix sums. The startValue must ensure startValue + prefixSum[i] >= 1 for all i.',
    'Level 2: startValue = max(1, 1 - min(prefixSums)).',
    'Level 3: let s=0,mn=Infinity;for(const n of nums){s+=n;mn=Math.min(mn,s);}return Math.max(1,1-mn);',
  ],
  functionName: 'minStartValue',
  params: ['nums'],
  starterCode: {
    javascript: 'function minStartValue(nums) {\n  // your code here\n}\n',
    python: 'def minStartValue(nums):\n    # your code here\n    pass\n',
  },
  visibleTests: [
    { args: [[-3, 2, -3, 4, 2]], expected: 5 },
    { args: [[1, 2]], expected: 1 },
    { args: [[1, -2, -3]], expected: 5 },
  ],
  hiddenTests: [
    { args: [[0]], expected: 1 },
    { args: [[-1]], expected: 2 },
    { args: [[100]], expected: 1 },
    { args: [[-100, -100]], expected: 201 },
    { args: [[1, -1, 1, -1, 1]], expected: 1 },
  ],
};
