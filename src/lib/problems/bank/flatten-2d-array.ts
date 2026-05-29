import type { Problem } from '../types';

export const problem: Problem = {
  id: 'flatten-2d-array',
  title: 'Flatten 2D Array',
  difficulty: 'easy',
  tags: ['arrays'],
  description: `Given a 2D integer matrix, return a **flattened** 1D array containing all elements in row-major order (left to right, top to bottom).`,
  constraints: [
    '1 <= matrix.length <= 100',
    '1 <= matrix[i].length <= 100',
    '-10^4 <= matrix[i][j] <= 10^4',
  ],
  examples: [
    {
      input: 'matrix = [[1,2,3],[4,5,6]]',
      output: '[1,2,3,4,5,6]',
      explanation: 'Row 0 contributes [1,2,3] and row 1 contributes [4,5,6].',
    },
    {
      input: 'matrix = [[7,8],[9,10],[11,12]]',
      output: '[7,8,9,10,11,12]',
      explanation: 'Three rows of two elements each, concatenated in order.',
    },
    {
      input: 'matrix = [[5]]',
      output: '[5]',
      explanation: 'A single-element matrix flattens to a single-element array.',
    },
  ],
  hints: [
    'Iterate over each row, then over each element in the row, pushing to a result array.',
    'In JavaScript, Array.prototype.flat() or concat with spread can flatten one level.',
    'In Python, a list comprehension [v for row in matrix for v in row] works cleanly.',
  ],
  functionName: 'flatten2dArray',
  params: ['matrix'],
  starterCode: {
    javascript: `function flatten2dArray(matrix) {

}`,
    typescript: `function flatten2dArray(matrix: number[][]): number[] {

}`,
    python: `def flatten2dArray(matrix: list[list[int]]) -> list[int]:
    pass`,
  },
  visibleTests: [
    { args: [[[1, 2, 3], [4, 5, 6]]], expected: [1, 2, 3, 4, 5, 6] },
    { args: [[[7, 8], [9, 10], [11, 12]]], expected: [7, 8, 9, 10, 11, 12] },
    { args: [[[5]]], expected: [5] },
  ],
  hiddenTests: [
    { args: [[[1]]], expected: [1] },
    { args: [[[1, 2], [3, 4]]], expected: [1, 2, 3, 4] },
    { args: [[[-1, -2], [3, 4]]], expected: [-1, -2, 3, 4] },
    { args: [[[0, 0, 0]]], expected: [0, 0, 0] },
    { args: [[[1, 2, 3], [4, 5, 6], [7, 8, 9]]], expected: [1, 2, 3, 4, 5, 6, 7, 8, 9] },
    { args: [[[10], [20], [30]]], expected: [10, 20, 30] },
    { args: [[[5, 3], [1, 9], [2, 7]]], expected: [5, 3, 1, 9, 2, 7] },
    { args: [[[100, -100]]], expected: [100, -100] },
  ],
};
