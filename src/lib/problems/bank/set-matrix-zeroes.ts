import type { Problem } from '../types';

export const problem: Problem = {
  id: 'set-matrix-zeroes',
  title: 'Set Matrix Zeroes',
  difficulty: 'medium',
  tags: ['arrays'],
  description: `Given an \`m x n\` integer matrix \`matrix\`, if an element is \`0\`, set its entire row and column to \`0\`'s.

You must do it **in place**.`,
  constraints: [
    '`m == matrix.length`',
    '`n == matrix[0].length`',
    '`1 <= m, n <= 200`',
    '`-2^31 <= matrix[i][j] <= 2^31 - 1`',
  ],
  examples: [
    {
      input: 'matrix = [[1,1,1],[1,0,1],[1,1,1]]',
      output: '[[1,0,1],[0,0,0],[1,0,1]]',
    },
    {
      input: 'matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]',
      output: '[[0,0,0,0],[0,4,5,0],[0,3,1,0]]',
    },
  ],
  hints: [
    'Use the first row and first column as markers for which rows and columns should be zeroed. Track separately whether the first row and first column themselves should be zeroed.',
    'In a two-pass approach: first mark rows/columns using the first row/column as flags, then zero the cells, then handle the first row/column.',
  ],
  functionName: 'setZeroes',
  params: ['matrix'],
  starterCode: {
    javascript: `function setZeroes(matrix) {

  return matrix;
}`,
    python: `def setZeroes(matrix):
    pass
    return matrix`,
  },
  visibleTests: [
    { args: [[[1, 1, 1], [1, 0, 1], [1, 1, 1]]], expected: [[1, 0, 1], [0, 0, 0], [1, 0, 1]] },
    { args: [[[0, 1, 2, 0], [3, 4, 5, 2], [1, 3, 1, 5]]], expected: [[0, 0, 0, 0], [0, 4, 5, 0], [0, 3, 1, 0]] },
  ],
  hiddenTests: [
    { args: [[[1]]], expected: [[1]] },
    { args: [[[0]]], expected: [[0]] },
    { args: [[[1, 2], [3, 0]]], expected: [[1, 0], [0, 0]] },
    { args: [[[1, 0, 3], [4, 5, 6], [7, 8, 9]]], expected: [[0, 0, 0], [4, 0, 6], [7, 0, 9]] },
    { args: [[[0, 0, 0], [0, 0, 0]]], expected: [[0, 0, 0], [0, 0, 0]] },
  ],
};
