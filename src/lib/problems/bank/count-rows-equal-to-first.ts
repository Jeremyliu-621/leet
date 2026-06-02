import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-rows-equal-to-first',
  title: 'Count Rows Equal to First Row',
  difficulty: 'easy',
  tags: ['arrays'],
  description: `Given a 2D integer matrix, return the **number of rows** that are identical to the **first row**.`,
  constraints: [
    '1 <= matrix.length <= 100',
    '1 <= matrix[i].length <= 100',
    '0 <= matrix[i][j] <= 10^4',
    'All rows have the same length.',
  ],
  examples: [
    {
      input: 'matrix = [[1,2,3],[1,2,3],[4,5,6]]',
      output: '2',
      explanation: 'Row 0 and Row 1 are identical to the first row [1,2,3].',
    },
    {
      input: 'matrix = [[5,5],[5,5],[5,5]]',
      output: '3',
      explanation: 'All three rows equal [5,5].',
    },
    {
      input: 'matrix = [[1,2],[3,4],[5,6]]',
      output: '1',
      explanation: 'Only the first row equals itself; no other row matches.',
    },
  ],
  hints: [
    'The first row is matrix[0].',
    'Count how many rows r satisfy every(matrix[r][i] === matrix[0][i]) for all i.',
    'In JavaScript, row.every((v,i) => v === matrix[0][i]) checks element-wise equality.',
  ],
  functionName: 'countRowsEqualToFirst',
  params: ['matrix'],
  starterCode: {
    javascript: `function countRowsEqualToFirst(matrix) {
  const first = matrix[0];
  return matrix.filter(row => row.every((v, i) => v === first[i])).length;
}`,
    typescript: `function countRowsEqualToFirst(matrix: number[][]): number {
  const first = matrix[0]!;
  return matrix.filter(row => row.every((v, i) => v === first[i]!)).length;
}`,
    python: `def countRowsEqualToFirst(matrix: list[list[int]]) -> int:
    first = matrix[0]
    return sum(1 for row in matrix if row == first)`,
  },
  visibleTests: [
    { args: [[[1, 2, 3], [1, 2, 3], [4, 5, 6]]], expected: 2 },
    { args: [[[5, 5], [5, 5], [5, 5]]], expected: 3 },
    { args: [[[1, 2], [3, 4], [5, 6]]], expected: 1 },
  ],
  hiddenTests: [
    { args: [[[1]]], expected: 1 },
    { args: [[[1, 2], [1, 2]]], expected: 2 },
    { args: [[[1, 2], [1, 3]]], expected: 1 },
    { args: [[[0, 0], [0, 0], [0, 1]]], expected: 2 },
    { args: [[[3, 3, 3], [3, 3, 3], [3, 3, 3]]], expected: 3 },
    { args: [[[1, 2, 3], [4, 5, 6]]], expected: 1 },
    { args: [[[7, 8], [7, 8], [7, 9], [7, 8]]], expected: 3 },
    { args: [[[10, 20], [10, 20], [10, 20], [30, 40]]], expected: 3 },
  ],
};
