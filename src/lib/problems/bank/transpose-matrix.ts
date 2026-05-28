import type { Problem } from '../types';

export const problem: Problem = {
  id: 'transpose-matrix',
  title: 'Transpose Matrix',
  difficulty: 'easy',
  tags: ['arrays'],
  description: `Given a 2D integer array \`matrix\`, return the **transpose** of \`matrix\`.

The transpose of a matrix is the matrix flipped over its main diagonal, switching the matrix's row and column indices.`,
  constraints: [
    'm == matrix.length',
    'n == matrix[i].length',
    '1 <= m, n <= 1000',
    '1 <= m * n <= 10^5',
    '-10^9 <= matrix[i][j] <= 10^9',
  ],
  examples: [
    {
      input: 'matrix = [[1,2,3],[4,5,6],[7,8,9]]',
      output: '[[1,4,7],[2,5,8],[3,6,9]]',
      explanation: 'Rows become columns: row 0 → col 0, row 1 → col 1, row 2 → col 2.',
    },
    {
      input: 'matrix = [[1,2,3],[4,5,6]]',
      output: '[[1,4],[2,5],[3,6]]',
      explanation: 'A 2×3 matrix becomes a 3×2 matrix after transposing.',
    },
  ],
  hints: [
    'The result has dimensions n × m (swapped from the input m × n).',
    'result[j][i] = matrix[i][j]',
    'In JavaScript: `matrix[0].map((_, j) => matrix.map(row => row[j]))`',
  ],
  functionName: 'transpose',
  params: ['matrix'],
  starterCode: {
    javascript: `function transpose(matrix) {

}`,
    typescript: "function transpose(matrix: number[][]): number[][] {\n\n}",

    python: `def transpose(matrix):
    pass`,
  },
  visibleTests: [
    {
      args: [[[1, 2, 3], [4, 5, 6], [7, 8, 9]]],
      expected: [[1, 4, 7], [2, 5, 8], [3, 6, 9]],
    },
    {
      args: [[[1, 2, 3], [4, 5, 6]]],
      expected: [[1, 4], [2, 5], [3, 6]],
    },
    {
      args: [[[1, 2], [3, 4]]],
      expected: [[1, 3], [2, 4]],
    },
  ],
  hiddenTests: [
    { args: [[[1]]], expected: [[1]] },
    { args: [[[1, 2, 3]]], expected: [[1], [2], [3]] },
    { args: [[[1], [2], [3]]], expected: [[1, 2, 3]] },
    { args: [[[1, 0], [0, 1]]], expected: [[1, 0], [0, 1]] },
    {
      args: [[[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12]]],
      expected: [[1, 4, 7, 10], [2, 5, 8, 11], [3, 6, 9, 12]],
    },
  ],
};
