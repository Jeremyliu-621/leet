import type { Problem } from '../types';

export const problem: Problem = {
  id: 'set-matrix-zeroes',
  title: 'Set Matrix Zeroes',
  difficulty: 'medium',
  tags: ['arrays'],
  description: `Given an \`m x n\` integer matrix, if an element is \`0\`, set its entire row and column to \`0\`s.

You must do it **in place**.`,
  constraints: [
    'm == matrix.length',
    'n == matrix[0].length',
    '1 <= m, n <= 200',
    '-2^31 <= matrix[i][j] <= 2^31 - 1',
  ],
  examples: [
    {
      input: 'matrix = [[1,1,1],[1,0,1],[1,1,1]]',
      output: '[[1,0,1],[0,0,0],[1,0,1]]',
      explanation: 'The zero at position [1][1] zeros out row 1 and column 1.',
    },
    {
      input: 'matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]',
      output: '[[0,0,0,0],[0,4,5,0],[0,3,1,0]]',
      explanation: 'Zeros at [0][0] and [0][3] zero out row 0, col 0, and col 3.',
    },
  ],
  hints: [
    'Use the first row and first column as markers for which rows/columns should be zeroed.',
    'Before overwriting the first row/column as markers, separately record whether the first row or first column itself originally contained a zero.',
    'Two passes: first mark, then zero out.',
  ],
  functionName: 'setZeroes',
  params: ['matrix'],
  starterCode: {
    javascript: `function setZeroes(matrix) {

}`,
    python: `def setZeroes(matrix):
    pass`,
  },
  visibleTests: [
    { args: [[[1, 1, 1], [1, 0, 1], [1, 1, 1]]], expected: [[1, 0, 1], [0, 0, 0], [1, 0, 1]] },
    { args: [[[0, 1, 2, 0], [3, 4, 5, 2], [1, 3, 1, 5]]], expected: [[0, 0, 0, 0], [0, 4, 5, 0], [0, 3, 1, 0]] },
  ],
  hiddenTests: [
    { args: [[[1]]], expected: [[1]] },
    { args: [[[0]]], expected: [[0]] },
    { args: [[[1, 2], [3, 0]]], expected: [[1, 0], [0, 0]] },
    { args: [[[1, 0, 3]]], expected: [[0, 0, 0]] },
    { args: [[[1, 2, 3], [4, 0, 6], [7, 8, 9]]], expected: [[1, 0, 3], [0, 0, 0], [7, 0, 9]] },
    { args: [[[0, 1, 2], [3, 4, 5], [6, 7, 8]]], expected: [[0, 0, 0], [0, 4, 5], [0, 7, 8]] },
    { args: [[[1, 0, 3], [4, 5, 6], [7, 8, 9]]], expected: [[0, 0, 0], [4, 0, 6], [7, 0, 9]] },
  ],
};
