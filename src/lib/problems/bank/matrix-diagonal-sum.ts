import type { Problem } from '../types';

export const problem: Problem = {
  id: 'matrix-diagonal-sum',
  title: 'Matrix Diagonal Sum',
  difficulty: 'easy',
  tags: ['arrays', 'math'],
  description: `Given a square matrix \`mat\`, return the sum of the matrix diagonals.

Only include the sum of all the elements on the primary diagonal and all the elements on the secondary diagonal that are not part of the primary diagonal.`,
  constraints: [
    '`n == mat.length == mat[i].length`',
    '`1 <= n <= 100`',
    '`1 <= mat[i][j] <= 100`',
  ],
  examples: [
    {
      input: 'mat = [[1,2,3],[4,5,6],[7,8,9]]',
      output: '25',
      explanation: 'Diagonals: [1,5,9] and [3,5,7]. Sum = 1+5+9+3+7 = 25 (5 counted once).',
    },
    {
      input: 'mat = [[1,1,1,1],[1,1,1,1],[1,1,1,1],[1,1,1,1]]',
      output: '8',
    },
    {
      input: 'mat = [[5]]',
      output: '5',
    },
  ],
  hints: [
    'Iterate i from 0 to n-1. Add mat[i][i] (primary) and mat[i][n-1-i] (secondary). If n is odd, subtract mat[n/2][n/2] (counted twice).',
  ],
  functionName: 'diagonalSum',
  params: ['mat'],
  starterCode: {
    javascript: `function diagonalSum(mat) {

}`,
    python: `def diagonalSum(mat):
    pass`,
  },
  visibleTests: [
    { args: [[[1, 2, 3], [4, 5, 6], [7, 8, 9]]], expected: 25 },
    { args: [[[1, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1]]], expected: 8 },
    { args: [[[5]]], expected: 5 },
  ],
  hiddenTests: [
    { args: [[[1, 0], [0, 1]]], expected: 2 },
    { args: [[[1, 2], [3, 4]]], expected: 10 },
    { args: [[[1, 0, 0], [0, 0, 0], [0, 0, 1]]], expected: 2 },
    { args: [[[3, 3, 3], [3, 3, 3], [3, 3, 3]]], expected: 15 },
    { args: [[[10, 0, 0, 0], [0, 10, 0, 0], [0, 0, 10, 0], [0, 0, 0, 10]]], expected: 40 },
  ],
};
