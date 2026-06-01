import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximum-amount-of-money-robot-can-earn',
  title: 'Maximum Amount of Money Robot Can Earn',
  difficulty: 'medium',
  tags: ['arrays', 'dynamic-programming'],
  description: `You are given an \`n × m\` integer grid \`coins\`. A cell \`coins[i][j]\` represents:
- A **positive** value: coins collected when passing through.
- A **negative** value: coins lost (robber cells).

A robot starts at \`(0, 0)\` and must reach \`(n-1, m-1)\` by moving **right** or **down** only.

The robot can **neutralize** at most **2 robber cells** along its path, setting their value to 0.

Return the **maximum** total coins the robot can collect.`,
  constraints: [
    '1 <= n, m <= 500',
    '-1000 <= coins[i][j] <= 1000',
  ],
  examples: [
    {
      input: 'coins = [[1,2],[3,4]]',
      output: '8',
      explanation: 'All values are positive. Best path: (0,0)→(1,0)→(1,1) = 1+3+4 = 8.',
    },
    {
      input: 'coins = [[-5,5,0],[5,-5,5],[0,5,5]]',
      output: '15',
      explanation:
        'Path (0,0)→(0,1)→(1,1)→(1,2)→(2,2) has values -5,5,-5,5,5. Neutralizing both -5s gives 0+5+0+5+5=15.',
    },
  ],
  hints: [
    'Use DP with a third dimension tracking how many robber cells have been neutralized (0, 1, or 2).',
    'dp[i][j][k] = max coins at cell (i,j) having used k neutralizations.',
    'At each negative cell, choose to take the loss or spend a neutralization (if k < 2) to set it to 0.',
  ],
  functionName: 'maximumAmount',
  params: ['coins'],
  starterCode: {
    javascript: `function maximumAmount(coins) {\n\n}`,
    typescript: `function maximumAmount(coins: number[][]): number {

}`,
    python: `def maximumAmount(coins: list[list[int]]) -> int:\n    pass`,
  },
  visibleTests: [
    { args: [[[1, 2], [3, 4]]], expected: 8 },
    { args: [[[-5, 5, 0], [5, -5, 5], [0, 5, 5]]], expected: 15 },
  ],
  hiddenTests: [
    { args: [[[1]]], expected: 1 },
    { args: [[[-1]]], expected: 0 },
    { args: [[[-1, -2], [-3, -4]]], expected: -1 },
    { args: [[[0, -1], [-1, 0]]], expected: 0 },
    { args: [[[1, -1, 1], [-1, 1, -1], [1, -1, 1]]], expected: 3 },
  ],
};
