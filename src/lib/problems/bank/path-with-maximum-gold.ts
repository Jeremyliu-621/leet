import type { Problem } from '../types';

export const problem: Problem = {
  id: 'path-with-maximum-gold',
  title: 'Path with Maximum Gold',
  difficulty: 'medium',
  tags: ['backtracking', 'arrays'],
  description: `In a gold mine \`grid\` of size \`m x n\`, each cell in this mine has an integer representing the amount of gold in that cell, \`0\` if it is empty.

Return the maximum amount of gold you can collect under the conditions:

- Every time you are located in a cell you will collect all the gold in that cell.
- From your position, you can walk one step to the left, right, up, or down.
- You can't visit the same cell more than once.
- Never visit a cell with \`0\` gold.
- You can start and stop collecting gold from **any** position in the grid that has some gold.`,
  constraints: [
    'm == grid.length',
    'n == grid[i].length',
    '1 <= m, n <= 15',
    '0 <= grid[i][j] <= 100',
    'There are at most 25 cells containing gold.',
  ],
  examples: [
    {
      input: 'grid = [[0,6,0],[5,8,7],[0,9,0]]',
      output: '24',
      explanation: 'Path: 9 -> 8 -> 7. Total: 24.',
    },
    {
      input: 'grid = [[1,0,7],[2,0,6],[3,4,5],[0,3,0],[9,0,20]]',
      output: '28',
      explanation: 'Path: 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7. Total: 28.',
    },
  ],
  hints: [
    'Use DFS with backtracking from every non-zero cell.',
    'Before visiting a cell, save its value, set it to 0 (mark as visited), recurse in all 4 directions, then restore.',
    'Track the maximum gold collected across all DFS calls.',
  ],
  functionName: 'getMaximumGold',
  params: ['grid'],
  starterCode: {
    javascript: 'function getMaximumGold(grid) {\n\n}\n',
    typescript: "function getMaximumGold(grid: number[][]): number {\n\n}",

    python: 'def getMaximumGold(grid):\n    pass\n',
  },
  visibleTests: [
    { args: [[[0,6,0],[5,8,7],[0,9,0]]], expected: 24 },
    { args: [[[1,0,7],[2,0,6],[3,4,5],[0,3,0],[9,0,20]]], expected: 28 },
  ],
  hiddenTests: [
    { args: [[[1]]], expected: 1 },
    { args: [[[0]]], expected: 0 },
    { args: [[[1,0,4]]], expected: 4 },
    { args: [[[1,2,3],[0,0,4]]], expected: 10 },
  ],
};
