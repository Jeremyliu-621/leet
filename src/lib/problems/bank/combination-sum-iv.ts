import type { Problem } from '../types';

export const problem: Problem = {
  id: 'combination-sum-iv',
  title: 'Combination Sum IV',
  difficulty: 'medium',
  tags: ['dynamic-programming'],
  description: `Given an array of **distinct** positive integers \`nums\` and a positive integer \`target\`, return the **number of possible ordered combinations** that add up to \`target\`.

The order of elements **matters**: \`(1, 2)\` and \`(2, 1)\` are different combinations.

You can use each number in \`nums\` an unlimited number of times.`,
  constraints: [
    '1 <= nums.length <= 200',
    '1 <= nums[i] <= 1000',
    'All elements of nums are unique.',
    '1 <= target <= 1000',
  ],
  examples: [
    {
      input: 'nums = [1,2,3], target = 4',
      output: '7',
      explanation:
        'The 7 ordered combinations: (1,1,1,1), (1,1,2), (1,2,1), (1,3), (2,1,1), (2,2), (3,1).',
    },
    {
      input: 'nums = [9], target = 3',
      output: '0',
      explanation: '9 > 3, so no combination can reach the target.',
    },
    {
      input: 'nums = [1,2], target = 3',
      output: '3',
      explanation:
        'The 3 ordered combinations: (1,1,1), (1,2), (2,1).',
    },
  ],
  hints: [
    'Think of `dp[i]` = number of ordered ways to reach sum `i`. Base case: `dp[0] = 1`.',
    'For each `i` from 1 to `target`, iterate over every number `n` in `nums`. If `n <= i`, add `dp[i - n]` to `dp[i]`.',
    '`const dp = new Array(target + 1).fill(0); dp[0] = 1; for (let i = 1; i <= target; i++) { for (const n of nums) { if (n <= i) dp[i] += dp[i - n]; } } return dp[target];`',
  ],
  functionName: 'combinationSum4',
  params: ['nums', 'target'],
  starterCode: {
    javascript: 'function combinationSum4(nums, target) {\n  // your code here\n}\n',
    typescript: "function combinationSum4(nums: number[], target: number): number {\n  // your code here\n}",

    python: 'def combinationSum4(nums, target):\n    # your code here\n    pass\n',
  },
  visibleTests: [
    { args: [[1, 2, 3], 4], expected: 7 },
    { args: [[9], 3], expected: 0 },
    { args: [[1, 2], 3], expected: 3 },
  ],
  hiddenTests: [
    { args: [[1], 1], expected: 1 },
    { args: [[1], 5], expected: 1 },
    { args: [[1, 2], 4], expected: 5 },
    { args: [[2, 3, 5], 7], expected: 5 },
    { args: [[1, 2, 3], 5], expected: 13 },
    { args: [[3, 4, 5, 6, 7, 8, 9, 10], 3], expected: 1 },
    { args: [[1, 2, 3], 1], expected: 1 },
  ],
};
