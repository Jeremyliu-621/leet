import type { Problem } from '../types';

export const problem: Problem = {
  id: 'rotate-matrix',
  title: 'Rotate Image',
  difficulty: 'medium',
  tags: ['arrays'],
  description: `You are given an \`n x n\` 2D matrix representing an image. Rotate the image by **90 degrees clockwise**.

You have to rotate the image **in-place**, which means you have to modify the input 2D matrix directly. Do **not** allocate another 2D matrix.

Return the modified matrix.`,
  examples: [
    {
      input: 'matrix = [[1,2,3],[4,5,6],[7,8,9]]',
      output: '[[7,4,1],[8,5,2],[9,6,3]]',
      explanation: 'Rotating 90 degrees clockwise.',
    },
    {
      input: 'matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]',
      output: '[[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]',
    },
  ],
  constraints: [
    'n == matrix.length == matrix[i].length',
    '1 <= n <= 20',
    '-1000 <= matrix[i][j] <= 1000',
  ],
  functionName: 'rotateMatrix',
  params: ['matrix'],
  starterCode: {
    javascript: 'function rotateMatrix(matrix) {\n  // your code here\n  return matrix;\n}\n',
    python: 'def rotateMatrix(matrix):\n    # your code here\n    return matrix\n',
  },
  hints: [
    'A 90-degree clockwise rotation can be decomposed into two simpler operations: first transpose the matrix (swap matrix[i][j] with matrix[j][i]), then reverse each row.',
    'After transposing, each row of the transposed matrix corresponds to a column of the original, in reverse order.',
    'Both transpose and row-reversal can be done in-place without extra memory.',
  ],
  visibleTests: [
    { args: [[[1, 2, 3], [4, 5, 6], [7, 8, 9]]], expected: [[7, 4, 1], [8, 5, 2], [9, 6, 3]] },
    {
      args: [[[5, 1, 9, 11], [2, 4, 8, 10], [13, 3, 6, 7], [15, 14, 12, 16]]],
      expected: [[15, 13, 2, 5], [14, 3, 4, 1], [12, 6, 8, 9], [16, 7, 10, 11]],
    },
    { args: [[[1]]], expected: [[1]] },
  ],
  hiddenTests: [
    { args: [[[1, 2], [3, 4]]], expected: [[3, 1], [4, 2]] },
    { args: [[[0, 0, 0], [0, 1, 0], [0, 0, 0]]], expected: [[0, 0, 0], [0, 1, 0], [0, 0, 0]] },
  ],
};
