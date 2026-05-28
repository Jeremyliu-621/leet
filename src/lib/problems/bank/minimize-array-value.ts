import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimize-array-value',
  title: 'Minimize Maximum of Array',
  difficulty: 'medium',
  tags: ['arrays', 'binary-search'],
  description: `You are given a **0-indexed** array \`nums\` of \`n\` non-negative integers.

In one operation, choose an index \`i\` where \`1 <= i < n\`, then:
- Decrease \`nums[i]\` by 1
- Increase \`nums[i - 1]\` by 1

Return the **minimum** possible maximum of \`nums\` after any number of operations.`,
  constraints: [
    'n == nums.length',
    '2 <= n <= 10^5',
    '0 <= nums[i] <= 10^9',
  ],
  examples: [
    {
      input: 'nums = [3,7,1,6]',
      output: '5',
      explanation: 'The optimal answer equals the maximum ceil(prefix_sum / length) over all prefixes.',
    },
    {
      input: 'nums = [10,1]',
      output: '10',
      explanation: 'nums[0] can only increase (we can only move values left), so the answer is at least nums[0] = 10.',
    },
  ],
  hints: [
    'Operations can only move values to the left, so nums[0] can only grow.',
    'The minimum possible maximum equals max over all i of ceil((nums[0] + ... + nums[i]) / (i + 1)).',
    'Iterate through prefixes, tracking the running sum, and compute the ceiling of the average.',
  ],
  functionName: 'minimizeArrayValue',
  params: ['nums'],
  starterCode: {
    javascript: `function minimizeArrayValue(nums) {

}`,
    typescript: "function minimizeArrayValue(nums: number[]): number {\n\n}",

    python: `def minimizeArrayValue(nums):
    pass`,
  },
  visibleTests: [
    { args: [[3,7,1,6]], expected: 5 },
    { args: [[10,1]], expected: 10 },
  ],
  hiddenTests: [
    { args: [[1]], expected: 1 },
    { args: [[1,2,3,4,5]], expected: 3 },
    { args: [[4,4,4,4]], expected: 4 },
    { args: [[1,1,1,1]], expected: 1 },
    { args: [[13,13,13]], expected: 13 },
  ],
};
