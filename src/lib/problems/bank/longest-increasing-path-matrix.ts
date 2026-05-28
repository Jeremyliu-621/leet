import type { Problem } from '../types';

export const problem: Problem = {
  id: 'longest-increasing-path-matrix',
  title: 'Longest Increasing Path in a Matrix',
  difficulty: 'hard',
  tags: ['graph'],
  description: `Given an \`m x n\` integers matrix, return the length of the longest increasing path in \`matrix\`.

From each cell, you can either move in four directions: left, right, up, or down. You **may not** move **diagonally** or move **outside** the boundary (i.e., wrap-around is not allowed).`,
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
      explanation: 'The longest increasing path is [1, 2, 6, 9].',
    },
    {
      input: 'matrix = [[3,4,5],[3,2,6],[2,2,1]]',
      output: '4',
      explanation: 'The longest increasing path is [3, 4, 5, 6].',
    },
    {
      input: 'matrix = [[1]]',
      output: '1',
    },
  ],
  hints: [
    'Use DFS with memoization. For each cell, compute the longest increasing path starting there.',
    'memo[i][j] = longest increasing path starting from (i,j). Cache to avoid recomputation.',
    'From cell (i,j), try all 4 neighbors that have a strictly greater value.',
  ],
  functionName: 'longestIncreasingPath',
  params: ['matrix'],
  starterCode: {
    javascript: `function longestIncreasingPath(matrix) {
  // Return length of longest increasing path
}`,
    python: `def longestIncreasingPath(matrix):
    # Return length of longest increasing path
    pass`,
  },
  visibleTests: [
    { args: [[[9,9,4],[6,6,8],[2,1,1]]], expected: 4 },
    { args: [[[3,4,5],[3,2,6],[2,2,1]]], expected: 4 },
    { args: [[[1]]], expected: 1 },
  ],
  hiddenTests: [
    { args: [[[1,2],[2,3]]], expected: 3 },
    { args: [[[1,2,3],[6,5,4],[7,8,9]]], expected: 9 },
    { args: [[[3,3,3],[3,1,3],[3,3,3]]], expected: 2 },
    { args: [[[7,7,5],[2,4,6],[8,2,0]]], expected: 4 },
  ],
};
