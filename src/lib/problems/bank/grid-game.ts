import type { Problem } from '../types';

export const problem: Problem = {
  id: 'grid-game',
  title: 'Grid Game',
  difficulty: 'medium',
  tags: ['arrays'],
  description: `You are given a **0-indexed** 2D array \`grid\` of size \`2 × n\`, where \`grid[r][c]\` represents the number of points in the cell \`(r, c)\`.

Two robots play a game on this grid:

- **Robot 1** starts at \`(0, 0)\` and must reach \`(1, n-1)\`. It can only move right or down. When it passes through a cell it collects all the points and leaves that cell empty (0).
- **Robot 2** then starts at \`(0, 0)\` and must also reach \`(1, n-1)\`, moving right or down, collecting points from the remaining cells.

Robot 1 wants to **minimize** the number of points Robot 2 can collect. Robot 2 plays **optimally** to maximize its score.

Return the **minimum** number of points Robot 2 can collect.`,
  constraints: [
    '`grid.length == 2`',
    '`n == grid[0].length`',
    '`1 <= n <= 5 * 10^4`',
    '`1 <= grid[i][j] <= 10^5`',
  ],
  examples: [
    {
      input: 'grid = [[2,3,1,4],[0,2,1,1]]',
      output: '4',
      explanation: 'Robot 1 turns down at column 2. Robot 2 can take the top-right suffix (sum 4) or the bottom-left prefix (sum 2). Robot 2 picks 4.',
    },
    {
      input: 'grid = [[3,3,1],[8,5,2]]',
      output: '4',
      explanation: 'Robot 1 turns at column 1. Top suffix = 1, bottom prefix = 8. Robot 2 picks max(1,8)? Robot 1 tries all columns to minimize Robot 2\'s best option.',
    },
  ],
  hints: [
    'If Robot 1 turns down at column c, Robot 2 has two choices: collect the top row from column c+1 to n-1, or collect the bottom row from column 0 to c-1.',
    'Precompute prefix sums for both rows so you can evaluate each turn column in O(1).',
    'Robot 1 wants to minimize max(topSuffix[c+1], bottomPrefix[c]). Iterate over all columns and track the minimum.',
  ],
  functionName: 'gridGame',
  params: ['grid'],
  starterCode: {
    javascript: `function gridGame(grid) {

}`,
    typescript: "function gridGame(grid: number[][]): number {\n\n}",

    python: `def gridGame(grid):
    pass`,
  },
  visibleTests: [
    { args: [[[2, 3, 1, 4], [0, 2, 1, 1]]], expected: 3 },
    { args: [[[3, 3, 1], [8, 5, 2]]], expected: 4 },
    { args: [[[1, 3, 1, 15], [1, 3, 3, 1]]], expected: 7 },
  ],
  hiddenTests: [
    { args: [[[1, 1], [1, 1]]], expected: 1 },
    { args: [[[20, 3, 20], [1, 1, 1]]], expected: 2 },
    { args: [[[1, 2, 3, 4, 5], [5, 4, 3, 2, 1]]], expected: 9 },
  ],
};
