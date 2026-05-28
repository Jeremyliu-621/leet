import type { Problem } from '../types';

export const problem: Problem = {
  id: 'lucky-numbers-in-a-matrix',
  title: 'Lucky Numbers in a Matrix',
  difficulty: 'easy',
  tags: ['arrays', 'math'],
  description: `Given an \`m x n\` matrix of **distinct** numbers, return all **lucky numbers** in the matrix in any order.

A **lucky number** is an element of the matrix such that it is the **minimum element** in its row and the **maximum element** in its column.`,
  constraints: [
    'm == mat.length',
    'n == mat[i].length',
    '1 <= n, m <= 50',
    '1 <= matrix[i][j] <= 10^5',
    'All elements in the matrix are distinct',
  ],
  examples: [
    {
      input: 'matrix = [[3,7,8],[9,11,13],[15,16,17]]',
      output: '[15]',
      explanation: '15 is the minimum of its row (row 2) and the maximum of its column (column 0).',
    },
    {
      input: 'matrix = [[1,10,4,2],[9,3,8,7],[15,16,17,12]]',
      output: '[12]',
      explanation: '12 is the minimum of its row (row 2) and the maximum of its column (column 3).',
    },
  ],
  hints: [
    'For each row, find the minimum element and note which column it is in. Then check if that element is also the maximum in its column.',
    'Precompute the column maximums: `colMax[j] = max of matrix[i][j] for all i`. Then iterate each row: find rowMin and its column index c. If rowMin === colMax[c], it is lucky.',
    'Two passes: (1) build `colMax` array by scanning all rows, (2) scan rows again — for each row find min and its column, check against `colMax`. Return all lucky values. Since elements are distinct, there is at most one lucky number.',
  ],
  functionName: 'luckyNumbers',
  params: ['matrix'],
  starterCode: {
    javascript: 'function luckyNumbers(matrix) {\n  \n}\n',
    typescript: "function luckyNumbers(matrix: number[][]): number[] {\n  \n}",

    python: 'def luckyNumbers(matrix):\n    pass\n',
  },
  visibleTests: [
    { args: [[[3, 7, 8], [9, 11, 13], [15, 16, 17]]], expected: [15] },
    { args: [[[1, 10, 4, 2], [9, 3, 8, 7], [15, 16, 17, 12]]], expected: [12] },
    { args: [[[7, 8], [1, 2]]], expected: [7] },
  ],
  hiddenTests: [
    { args: [[[1]]], expected: [1] },
    { args: [[[2, 1], [3, 4]]], expected: [3] },
    { args: [[[5, 10], [1, 2]]], expected: [5] },
    { args: [[[10, 9, 8], [7, 6, 5], [4, 3, 2]]], expected: [8] },
    { args: [[[1, 2], [3, 4]]], expected: [3] },
    { args: [[[11, 1, 2], [3, 4, 5], [6, 7, 8]]], expected: [] },
  ],
};
