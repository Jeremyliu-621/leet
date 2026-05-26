import type { Problem } from '../types';

export const problem: Problem = {
  id: 'domino-tromino-tiling',
  title: 'Domino and Tromino Tiling',
  difficulty: 'medium',
  tags: ['dynamic-programming'],
  description: `You have two types of tiles: a \`2 x 1\` domino shape and a tromino shape. You may rotate these shapes.

Given an integer \`n\`, return the number of ways to tile a \`2 x n\` board. Since the answer may be very large, return it **modulo** \`10^9 + 7\`.

In a tiling, every square must be covered by a tile. Two tilings are different if and only if there are two 4-directionally adjacent cells on the board such that exactly one of the tilings has both squares occupied by the same tile.`,
  constraints: [
    '1 <= n <= 1000',
  ],
  examples: [
    {
      input: 'n = 3',
      output: '5',
      explanation: 'The five different ways are shown in the problem diagram.',
    },
    {
      input: 'n = 1',
      output: '1',
    },
  ],
  hints: [
    'Let dp[i] be the number of ways to tile a 2xi board.',
    'The recurrence is dp[i] = 2*dp[i-1] + dp[i-3] for i >= 3.',
    'Base cases: dp[0] = 1, dp[1] = 1, dp[2] = 2.',
    'The 2*dp[i-1] accounts for placing a vertical domino or two horizontal dominoes; dp[i-3] accounts for the L-shaped tromino configurations.',
  ],
  functionName: 'numTilings',
  params: ['n'],
  starterCode: {
    javascript: `function numTilings(n) {

}`,
    python: `def numTilings(n):
    `,
  },
  visibleTests: [
    { args: [3], expected: 5 },
    { args: [1], expected: 1 },
  ],
  hiddenTests: [
    { args: [2], expected: 2 },
    { args: [4], expected: 11 },
    { args: [5], expected: 24 },
    { args: [10], expected: 1255 },
    { args: [30], expected: 312342182 },
    { args: [1000], expected: 979232805 },
  ],
};
