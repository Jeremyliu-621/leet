import type { Problem } from '../types';

export const problem: Problem = {
  id: 'number-of-dice-rolls-with-target-sum',
  title: 'Number of Dice Rolls With Target Sum',
  difficulty: 'medium',
  tags: ['dynamic-programming'],
  description: `You have \`n\` dice, each with \`k\` faces numbered from \`1\` to \`k\`.

Given three integers \`n\`, \`k\`, and \`target\`, return the number of possible ways (out of the \`k^n\` total ways) to roll the dice so the sum of the face-up numbers equals \`target\`.

Since the answer may be too large, return it **modulo 10^9 + 7**.`,
  constraints: [
    '1 <= n, k <= 30',
    '1 <= target <= 1000',
  ],
  examples: [
    {
      input: 'n = 1, k = 6, target = 3',
      output: '1',
      explanation: 'Roll the single die to get 3: 1 way.',
    },
    {
      input: 'n = 2, k = 6, target = 7',
      output: '6',
      explanation: '(1,6), (2,5), (3,4), (4,3), (5,2), (6,1): 6 ways.',
    },
    {
      input: 'n = 30, k = 30, target = 500',
      output: '222616187',
      explanation: 'Result modulo 10^9 + 7.',
    },
  ],
  hints: [
    'Define dp[i][s] = number of ways to get sum s using exactly i dice.',
    'For each die, add each face value 1..k to sums achieved with i-1 dice.',
    'dp[0][0] = 1 (zero dice, sum zero: one way). dp[i][s] = sum of dp[i-1][s-f] for f in 1..k where s-f >= 0.',
    'Take modulo 10^9+7 at each step to prevent overflow.',
  ],
  functionName: 'numRollsToTarget',
  params: ['n', 'k', 'target'],
  starterCode: {
    javascript: `function numRollsToTarget(n, k, target) {

}`,
    typescript: "function numRollsToTarget(n: number, k: number, target: number): number {\n\n}",

    python: `def numRollsToTarget(n, k, target):
    `,
  },
  visibleTests: [
    { args: [1, 6, 3], expected: 1 },
    { args: [2, 6, 7], expected: 6 },
    { args: [30, 30, 500], expected: 222616187 },
  ],
  hiddenTests: [
    { args: [1, 6, 7], expected: 0 },
    { args: [2, 6, 2], expected: 1 },
    { args: [3, 6, 10], expected: 27 },
    { args: [2, 5, 10], expected: 1 },
  ],
};
