import type { Problem } from '../types';

export const problem: Problem = {
  id: 'longest-increasing-path-in-a-matrix',
  title: 'Longest Increasing Path in a Matrix',
  difficulty: 'hard',
  tags: ['arrays', 'dynamic-programming', 'graph'],
  description: `Given an \`m x n\` integers \`matrix\`, return the **length of the longest increasing path** in the matrix.

From each cell, you can move in four directions: left, right, up, or down. You **may not** move in a diagonal direction or move **outside** the boundary. You **may not** wrap around.

The path must be strictly increasing.`,
  constraints: [
    'm == matrix.length',
    'n == matrix[i].length',
    '1 <= m, n <= 200',
    '0 <= matrix[i][j] <= 2^31 - 1',
  ],
  examples: [
    {
      input: 'matrix = [[9,9,4],[6,6,8],[2,1,1]]',
      output: '4',
      explanation: 'The longest path is [1,2,6,9]. (Positions: [2][2]→[2][1]→[1][0]→[0][0]? No: [2][1]=1→[2][0]=2→[1][0]=6→[0][0]=9.)',
    },
    {
      input: 'matrix = [[3,4,5],[3,2,6],[2,2,1]]',
      output: '4',
      explanation: 'The path [3,4,5,6] follows [0][0]→[0][1]→[0][2]→[1][2].',
    },
    {
      input: 'matrix = [[1]]',
      output: '1',
    },
  ],
  hints: [
    'Use DFS with memoization. For each cell (r, c) compute the longest increasing path starting there. Cache the result so each cell is computed only once.',
    'The DFS recurrence: `memo[r][c] = 1 + max(dfs(neighbor) for each neighbor with a strictly greater value)`. If no neighbor is greater, the cell is a length-1 path.',
    'Initialize `memo` to all zeros. On the first visit to cell (r,c), compute and store the result. The final answer is the maximum value over all cells.',
  ],
  functionName: 'longestIncreasingPath',
  params: ['matrix'],
  starterCode: {
    javascript: `function longestIncreasingPath(matrix) {

}`,
    typescript: "function longestIncreasingPath(matrix: number[][]): number {\n\n}",

    python: `def longestIncreasingPath(matrix):
    pass`,
  },
  visibleTests: [
    { args: [[[9, 9, 4], [6, 6, 8], [2, 1, 1]]], expected: 4 },
    { args: [[[3, 4, 5], [3, 2, 6], [2, 2, 1]]], expected: 4 },
    { args: [[[1]]], expected: 1 },
  ],
  hiddenTests: [
    { args: [[[1, 2], [4, 3]]], expected: 4 },
    { args: [[[3, 3, 3], [3, 1, 3], [3, 3, 3]]], expected: 2 },
    { args: [[[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]]], expected: 10 },
    { args: [[[1, 2, 3], [6, 5, 4], [7, 8, 9]]], expected: 9 },
    { args: [[[1, 2, 3], [4, 5, 6]]], expected: 4 },
    { args: [[[0, 1], [3, 2]]], expected: 4 },
  ],
};
