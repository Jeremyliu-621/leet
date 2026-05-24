import type { Problem } from '../types';

export const problem: Problem = {
  id: 'house-robber',
  title: 'House Robber',
  difficulty: 'medium',
  tags: ['dynamic-programming', 'arrays'],
  description: `You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed. The only constraint stopping you from robbing all of them is that **adjacent houses have security systems connected** — if two adjacent houses are broken into on the same night, the alarm will go off.

Given an integer array \`nums\` representing the amount of money at each house, return the **maximum amount of money you can rob** without alerting the police.`,
  constraints: [
    '0 <= nums.length <= 100',
    '0 <= nums[i] <= 400',
  ],
  examples: [
    {
      input: 'nums = [1,2,3,1]',
      output: '4',
      explanation: 'Rob house 1 (1) and house 3 (3).',
    },
    {
      input: 'nums = [2,7,9,3,1]',
      output: '12',
      explanation: 'Rob house 1 (2), house 3 (9), and house 5 (1).',
    },
  ],
  hints: [
    "You can't rob adjacent houses. At each house you have two choices: rob it (and skip the previous) or skip it (and carry forward the best so far from previous houses).",
    'Let `dp[i]` = max money robbing houses 0..i. The recurrence is `dp[i] = max(dp[i-1], dp[i-2] + nums[i])`. You only need the last two values, so use two variables.',
    '`let prev2 = 0, prev1 = 0; for (const n of nums) { const curr = Math.max(prev1, prev2 + n); prev2 = prev1; prev1 = curr; } return prev1;`',
  ],
  functionName: 'rob',
  params: ['nums'],
  starterCode: {
    javascript: 'function rob(nums) {\n  \n}\n',
    python: 'def rob(nums: list[int]) -> int:\n    pass\n',
  },
  visibleTests: [
    { args: [[1, 2, 3, 1]], expected: 4 },
    { args: [[2, 7, 9, 3, 1]], expected: 12 },
    { args: [[0]], expected: 0 },
    { args: [[5, 5]], expected: 5 },
  ],
  hiddenTests: [
    { args: [[]], expected: 0 },
    { args: [[1, 1, 1, 1]], expected: 2 },
    { args: [[2, 1, 1, 2]], expected: 4 },
  ],
};
