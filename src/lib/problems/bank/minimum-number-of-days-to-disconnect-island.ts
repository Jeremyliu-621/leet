import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-number-of-days-to-disconnect-island',
  title: 'Minimum Number of Days to Disconnect Island',
  difficulty: 'hard',
  tags: ['arrays', 'graph'],
  description: `You are given an \`m x n\` binary grid \`grid\` where \`1\` represents land and \`0\` represents water. An island is a maximal 4-directionally connected group of \`1\`s.

The grid is said to be **connected** if we have exactly one island, otherwise it is said to be **disconnected**.

In one day, you are allowed to change **any single** land cell \`(x, y)\` into a water cell \`(x, y)\`.

Return the **minimum number of days** to disconnect the grid.`,
  constraints: [
    'm == grid.length',
    'n == grid[i].length',
    '1 <= m, n <= 30',
    'grid[i][j] is either 0 or 1.',
  ],
  examples: [
    {
      input: 'grid = [[0,1,1,0],[0,1,1,0],[0,0,0,0]]',
      output: '2',
      explanation: 'We need to remove 2 land cells to disconnect.',
    },
    {
      input: 'grid = [[1,1]]',
      output: '2',
    },
    {
      input: 'grid = [[1,1,0,1,1],[1,1,1,1,1],[1,1,0,1,1],[1,1,0,1,1]]',
      output: '1',
    },
  ],
  hints: [
    'The answer is 0, 1, or 2. It\'s never more than 2.',
    'Check day 0: if the number of islands != 1, return 0.',
    'Check day 1: try removing each land cell and see if the grid becomes disconnected. If yes, return 1.',
    'Otherwise, return 2 (always achievable by removing a corner cell).',
    'Count islands using BFS/DFS.',
  ],
  functionName: 'minDays',
  params: ['grid'],
  starterCode: {
    javascript: `function minDays(grid) {

}`,
    typescript: "function minDays(grid: number[][]): number {\n\n}",

    python: `def minDays(grid):
    pass`,
  },
  visibleTests: [
    { args: [[[0, 1, 1, 0], [0, 1, 1, 0], [0, 0, 0, 0]]], expected: 2 },
    { args: [[[1, 1]]], expected: 2 },
    { args: [[[1, 1, 0, 1, 1], [1, 1, 1, 1, 1], [1, 1, 0, 1, 1], [1, 1, 0, 1, 1]]], expected: 1 },
  ],
  hiddenTests: [
    { args: [[[1]]], expected: 1 },
    { args: [[[0]]], expected: 0 },
    { args: [[[1, 0], [0, 1]]], expected: 0 },
    { args: [[[1, 1, 1], [1, 1, 1], [1, 1, 1]]], expected: 2 },
    { args: [[[0, 1, 0], [1, 1, 1], [0, 1, 0]]], expected: 1 },
  ],
};
