import type { Problem } from '../types';

export const problem: Problem = {
  id: 'transpose-2d-array',
  title: 'Transpose 2D Array',
  difficulty: 'easy',
  tags: ['arrays'],
  description: `Given a 2D matrix with m rows and n columns, return its **transpose** — a new matrix where rows and columns are swapped. The element at position [i][j] in the original becomes [j][i] in the result.`,
  constraints: [
    '1 <= matrix.length, matrix[0].length <= 100',
    '0 <= matrix[i][j] <= 10^4',
    'All rows have the same length.',
  ],
  examples: [
    {
      input: 'matrix = [[1,2,3],[4,5,6]]',
      output: '[[1,4],[2,5],[3,6]]',
      explanation: 'The 2×3 matrix becomes a 3×2 matrix. Column 0 ([1,4]) becomes row 0, etc.',
    },
    {
      input: 'matrix = [[1,2],[3,4],[5,6]]',
      output: '[[1,3,5],[2,4,6]]',
      explanation: 'The 3×2 matrix becomes a 2×3 matrix.',
    },
    {
      input: 'matrix = [[5]]',
      output: '[[5]]',
      explanation: 'A 1×1 matrix transposes to itself.',
    },
  ],
  hints: [
    'The resulting matrix has dimensions n×m if the original is m×n.',
    'result[j][i] = matrix[i][j] for all valid i, j.',
    'Build the result by iterating over columns of the original as rows of the transpose.',
  ],
  functionName: 'transpose2dArray',
  params: ['matrix'],
  starterCode: {
    javascript: `function transpose2dArray(matrix) {

}`,
    typescript: `function transpose2dArray(matrix: number[][]): number[][] {

}`,
    python: `def transpose2dArray(matrix: list[list[int]]) -> list[list[int]]:
    pass`,
  },
  visibleTests: [
    { args: [[[1, 2, 3], [4, 5, 6]]], expected: [[1, 4], [2, 5], [3, 6]] },
    { args: [[[1, 2], [3, 4], [5, 6]]], expected: [[1, 3, 5], [2, 4, 6]] },
    { args: [[[5]]], expected: [[5]] },
  ],
  hiddenTests: [
    { args: [[[1]]], expected: [[1]] },
    { args: [[[1, 2], [3, 4]]], expected: [[1, 3], [2, 4]] },
    { args: [[[1, 2, 3]]], expected: [[1], [2], [3]] },
    { args: [[[1], [2], [3]]], expected: [[1, 2, 3]] },
    { args: [[[0, 1], [2, 3], [4, 5]]], expected: [[0, 2, 4], [1, 3, 5]] },
    { args: [[[9, 8, 7], [6, 5, 4]]], expected: [[9, 6], [8, 5], [7, 4]] },
    { args: [[[1, 0], [0, 1]]], expected: [[1, 0], [0, 1]] },
    { args: [[[3, 1, 4], [1, 5, 9], [2, 6, 5]]], expected: [[3, 1, 2], [1, 5, 6], [4, 9, 5]] },
  ],
};
