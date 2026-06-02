import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-rows-with-all-zeros',
  title: 'Count Rows With All Zeros',
  difficulty: 'easy',
  tags: ['arrays', 'math'],
  description: `Given a 2D integer matrix, return the **number of rows** where every element is \`0\`.`,
  constraints: [
    '1 <= matrix.length <= 100',
    '1 <= matrix[i].length <= 100',
    '0 <= matrix[i][j] <= 10^4',
  ],
  examples: [
    {
      input: 'matrix = [[0,0,0],[1,2,3],[0,0,0]]',
      output: '2',
      explanation: 'Row 0 and row 2 consist entirely of zeros. Row 1 has non-zero values.',
    },
    {
      input: 'matrix = [[1,0],[0,1]]',
      output: '0',
      explanation: 'Neither row consists entirely of zeros.',
    },
    {
      input: 'matrix = [[0]]',
      output: '1',
      explanation: 'The single row contains only 0, so it qualifies.',
    },
  ],
  hints: [
    'For each row, check whether every element equals 0.',
    'Use Array.every() in JavaScript or all() in Python to test all elements in a row.',
    'Count the rows that pass the all-zero check.',
  ],
  functionName: 'countRowsWithAllZeros',
  params: ['matrix'],
  starterCode: {
    javascript: `function countRowsWithAllZeros(matrix) {
  return matrix.filter(row => row.every(v => v === 0)).length;
}`,
    typescript: `function countRowsWithAllZeros(matrix: number[][]): number {
  return matrix.filter(row => row.every(v => v === 0)).length;
}`,
    python: `def countRowsWithAllZeros(matrix: list[list[int]]) -> int:
    return sum(1 for row in matrix if all(v == 0 for v in row))`,
  },
  visibleTests: [
    { args: [[[0, 0, 0], [1, 2, 3], [0, 0, 0]]], expected: 2 },
    { args: [[[1, 0], [0, 1]]], expected: 0 },
    { args: [[[0]]], expected: 1 },
  ],
  hiddenTests: [
    { args: [[[1, 2, 3], [4, 5, 6]]], expected: 0 },
    { args: [[[0, 0], [0, 0]]], expected: 2 },
    { args: [[[0, 0, 0], [0, 0, 0], [0, 0, 0]]], expected: 3 },
    { args: [[[1, 0, 0], [0, 0, 0], [1, 1, 1]]], expected: 1 },
    { args: [[[0, 1, 0], [0, 0, 0]]], expected: 1 },
    { args: [[[5]]], expected: 0 },
    { args: [[[0, 0], [1, 0], [0, 0]]], expected: 2 },
    { args: [[[0, 0, 1], [0, 0, 0], [2, 0, 0]]], expected: 1 },
  ],
};
