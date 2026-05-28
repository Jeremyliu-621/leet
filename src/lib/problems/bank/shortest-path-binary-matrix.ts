import type { Problem } from '../types';

export const problem: Problem = {
  id: 'shortest-path-binary-matrix',
  title: 'Shortest Path in Binary Matrix',
  difficulty: 'medium',
  tags: ['shortest-path', 'graph', 'arrays'],
  description: `Given an \`n x n\` binary matrix \`grid\`, return the length of the **shortest clear path** from the top-left cell \`(0, 0)\` to the bottom-right cell \`(n - 1, n - 1)\`. If there is no such path, return \`-1\`.

A clear path is a path from \`(0, 0)\` to \`(n - 1, n - 1)\` such that:
- All the visited cells are **0**.
- All the adjacent cells in the path are **8-directionally connected** (horizontally, vertically, or diagonally adjacent).

The **length** of a clear path is the number of visited cells.`,
  constraints: [
    'n == grid.length',
    'n == grid[i].length',
    '1 <= n <= 100',
    'grid[i][j] is 0 or 1',
  ],
  examples: [
    {
      input: 'grid = [[0,1],[1,0]]',
      output: '2',
      explanation: 'Path: (0,0)→(1,1) — a diagonal step through two clear cells.',
    },
    {
      input: 'grid = [[0,0,0],[1,1,0],[1,1,0]]',
      output: '4',
      explanation: 'Path: (0,0)→(0,1)→(1,2)→(2,2) — length 4.',
    },
  ],
  hints: [
    'Use BFS from (0,0), exploring all 8 directions. Each level of BFS adds 1 to path length.',
    'If grid[0][0] or grid[n-1][n-1] is 1, return -1 immediately.',
    'Mark cells as visited by setting them to 1 to avoid revisiting.',
  ],
  functionName: 'shortestPathBinaryMatrix',
  params: ['grid'],
  starterCode: {
    javascript: `function shortestPathBinaryMatrix(grid) {

}`,
    typescript: "function shortestPathBinaryMatrix(grid: number[][]): number {\n\n}",

    python: `def shortestPathBinaryMatrix(grid):
    pass`,
  },
  visibleTests: [
    { args: [[[0, 1], [1, 0]]], expected: 2 },
    { args: [[[0, 0, 0], [1, 1, 0], [1, 1, 0]]], expected: 4 },
  ],
  hiddenTests: [
    { args: [[[1, 0, 0], [1, 1, 0], [1, 1, 0]]], expected: -1 },
    { args: [[[0]]], expected: 1 },
    { args: [[[0, 0], [0, 0]]], expected: 2 },
    { args: [[[0, 0, 0], [0, 1, 0], [0, 0, 0]]], expected: 4 },
    { args: [[[0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0]]], expected: 5 },
  ],
};
