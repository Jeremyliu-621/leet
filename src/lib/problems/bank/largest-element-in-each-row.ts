import type { Problem } from '../types';

export const problem: Problem = {
  id: 'largest-element-in-each-row',
  title: 'Largest Element in Each Row',
  difficulty: 'easy',
  tags: ['arrays', 'math'],
  description: `Given a 2D integer matrix, return an array where each element is the **largest value in the corresponding row** of the matrix.`,
  constraints: [
    '1 <= matrix.length <= 100',
    '1 <= matrix[i].length <= 100',
    '0 <= matrix[i][j] <= 10^4',
  ],
  examples: [
    {
      input: 'matrix = [[1,2,3],[4,5,6],[7,8,9]]',
      output: '[3,6,9]',
      explanation: 'The largest elements per row are 3, 6, and 9.',
    },
    {
      input: 'matrix = [[3,1],[5,2]]',
      output: '[3,5]',
      explanation: 'Row 0 has maximum 3 and row 1 has maximum 5.',
    },
    {
      input: 'matrix = [[5]]',
      output: '[5]',
      explanation: 'There is only one row with one element; the maximum is 5.',
    },
  ],
  hints: [
    'Iterate over each row and find its maximum element.',
    'Use Math.max(...row) in JavaScript or max(row) in Python for each row.',
    'Map each row to its maximum: matrix.map(row => Math.max(...row)).',
  ],
  functionName: 'largestElementInEachRow',
  params: ['matrix'],
  starterCode: {
    javascript: `function largestElementInEachRow(matrix) {
  return matrix.map(row => Math.max(...row));
}`,
    typescript: `function largestElementInEachRow(matrix: number[][]): number[] {
  return matrix.map(row => Math.max(...row));
}`,
    python: `def largestElementInEachRow(matrix):
    return [max(row) for row in matrix]`,
  },
  visibleTests: [
    { args: [[[1, 2, 3], [4, 5, 6], [7, 8, 9]]], expected: [3, 6, 9] },
    { args: [[[3, 1], [5, 2]]], expected: [3, 5] },
    { args: [[[5]]], expected: [5] },
  ],
  hiddenTests: [
    { args: [[[10, 2, 8], [1, 9, 3]]], expected: [10, 9] },
    { args: [[[1, 1, 1], [2, 2, 2], [3, 3, 3]]], expected: [1, 2, 3] },
    { args: [[[0, 5], [3, 1], [7, 2]]], expected: [5, 3, 7] },
    { args: [[[100, 200], [300, 400], [500, 600]]], expected: [200, 400, 600] },
    { args: [[[7, 3, 5], [2, 8, 4], [6, 1, 9]]], expected: [7, 8, 9] },
    { args: [[[1, 2], [3, 4]]], expected: [2, 4] },
    { args: [[[5, 5, 5]]], expected: [5] },
    { args: [[[4, 2, 9, 1], [6, 8, 3, 7]]], expected: [9, 8] },
  ],
};
