import type { Problem } from '../types';

export const problem: Problem = {
  id: 'number-of-dice-rolls',
  title: 'Number of Dice Rolls With Target Sum',
  difficulty: 'medium',
  tags: ['dynamic-programming'],
  description: `You have \`n\` dice, each with \`k\` faces numbered from \`1\` to \`k\`. Given three integers \`n\`, \`k\`, and \`target\`, return the number of possible ways (out of the \`k^n\` total ways) to roll the dice so the sum of the face-up numbers equals \`target\`. Since the answer may be too large, return it **modulo** \`10^9 + 7\`.`,
  constraints: [
    '1 <= n, k <= 30',
    '1 <= target <= 1000',
  ],
  examples: [
    {
      input: 'n = 1, k = 6, target = 3',
      output: '1',
      explanation: 'You throw one die with 6 faces. There is only one way to get a target sum of 3.',
    },
    {
      input: 'n = 2, k = 6, target = 7',
      output: '6',
      explanation: '(1,6), (2,5), (3,4), (4,3), (5,2), (6,1).',
    },
    {
      input: 'n = 30, k = 30, target = 500',
      output: '222616187',
    },
  ],
  hints: [
    'Let dp[i][t] = number of ways to roll i dice with sum t. dp[0][0] = 1.',
    'For each die, iterate over all previous sums and all face values 1..k.',
    'dp[i][t] = sum over f=1..k of dp[i-1][t-f] (if t-f >= 0). Take mod at each step.',
  ],
  functionName: 'numRollsToTarget',
  params: ['n', 'k', 'target'],
  starterCode: {
    javascript: `function numRollsToTarget(n, k, target) {
  // Return number of ways to roll n k-faced dice to get target sum (mod 1e9+7)
}`,
    typescript: "function numRollsToTarget(n: number, k: number, target: number): number {\n  // Return number of ways to roll n k-faced dice to get target sum (mod 1e9+7)\n}",

    python: `def numRollsToTarget(n, k, target):
    # Return number of ways to roll n k-faced dice to get target sum (mod 10**9+7)
    pass`,
  },
  visibleTests: [
    { args: [1, 6, 3], expected: 1 },
    { args: [2, 6, 7], expected: 6 },
    { args: [30, 30, 500], expected: 222616187 },
  ],
  hiddenTests: [
    { args: [1, 6, 7], expected: 0 },
    { args: [2, 4, 5], expected: 4 },
    { args: [3, 6, 7], expected: 15 },
    { args: [2, 6, 12], expected: 1 },
  ],
};
