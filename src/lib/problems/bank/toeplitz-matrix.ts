import type { Problem } from '../types';

export const problem: Problem = {
  id: 'toeplitz-matrix',
  title: 'Toeplitz Matrix',
  difficulty: 'easy',
  tags: ['arrays'],
  description: `Given an \`m x n\` \`matrix\`, return \`true\` if the matrix is Toeplitz. Otherwise, return \`false\`.

A matrix is **Toeplitz** if every diagonal from top-left to bottom-right has the same elements.`,
  constraints: [
    'm == matrix.length',
    'n == matrix[i].length',
    '1 <= m, n <= 20',
    '0 <= matrix[i][j] <= 99',
  ],
  examples: [
    {
      input: 'matrix = [[1,2,3,4],[5,1,2,3],[9,5,1,2]]',
      output: 'true',
      explanation: 'Every diagonal from top-left to bottom-right has the same value.',
    },
    {
      input: 'matrix = [[1,2],[2,2]]',
      output: 'false',
      explanation: 'The diagonal starting at (0,0) has values 1 and 2 — not all the same.',
    },
  ],
  hints: [
    'For each cell (i, j) where i > 0 and j > 0, check that matrix[i][j] === matrix[i-1][j-1].',
    'If any cell fails this check, return false. Otherwise return true.',
  ],
  functionName: 'isToeplitzMatrix',
  params: ['matrix'],
  starterCode: {
    javascript: `function isToeplitzMatrix(matrix) {

}`,
    python: `def isToeplitzMatrix(matrix):
    pass`,
  },
  visibleTests: [
    { args: [[[1, 2, 3, 4], [5, 1, 2, 3], [9, 5, 1, 2]]], expected: true },
    { args: [[[1, 2], [2, 2]]], expected: false },
    { args: [[[1]]], expected: true },
  ],
  hiddenTests: [
    { args: [[[1, 2], [3, 1]]], expected: true },
    { args: [[[1, 2, 3]]], expected: true },
    { args: [[[1], [2], [3]]], expected: true },
    { args: [[[1, 2], [3, 4]]], expected: false },
    { args: [[[36, 59, 71], [22, 36, 59], [95, 22, 36]]], expected: true },
  ],
};
