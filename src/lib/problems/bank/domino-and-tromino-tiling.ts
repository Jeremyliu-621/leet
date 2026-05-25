import type { Problem } from '../types';

export const problem: Problem = {
  id: 'domino-and-tromino-tiling',
  title: 'Domino and Tromino Tiling',
  difficulty: 'medium',
  tags: ['dynamic-programming'],
  description: `You have two types of tiles: a \`2 x 1\` domino shape and a tromino shape. You may rotate these shapes.

Given an integer \`n\`, return *the number of ways to tile a* \`2 x n\` *board*. Since the answer may be very large, return it **modulo** \`10^9 + 7\`.

In a tiling, every square must be covered by a tile. Two tilings are different if and only if there are two 4-directionally adjacent cells on the board such that exactly one of the tilings has both squares occupied by the same tile.`,
  constraints: [
    '1 <= n <= 1000',
  ],
  examples: [
    {
      input: 'n = 3',
      output: '5',
      explanation: 'The five ways to tile a 2×3 board are enumerable.',
    },
    {
      input: 'n = 1',
      output: '1',
    },
  ],
  hints: [
    'Let f(n) = number of ways to tile a 2×n board.',
    'f(0)=1, f(1)=1, f(2)=2.',
    'The recurrence is f(n) = 2·f(n−1) + f(n−3) for n≥3.',
  ],
  functionName: 'numTilings',
  params: ['n'],
  starterCode: {
    javascript: 'function numTilings(n) {\n\n}\n',
    python: 'def numTilings(n):\n    pass\n',
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
  ],
};
