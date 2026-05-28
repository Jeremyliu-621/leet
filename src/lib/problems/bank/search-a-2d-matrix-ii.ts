import type { Problem } from '../types';

export const problem: Problem = {
  id: 'search-a-2d-matrix-ii',
  title: 'Search a 2D Matrix II',
  difficulty: 'medium',
  tags: ['arrays', 'binary-search', 'two-pointers'],
  description: `Write an efficient algorithm that searches for a value \`target\` in an \`m x n\` integer matrix. This matrix has the following properties:

- Integers in each row are sorted in ascending order from left to right.
- Integers in each column are sorted in ascending order from top to bottom.`,
  constraints: [
    'm == matrix.length',
    'n == matrix[i].length',
    '1 <= n, m <= 300',
    '-10^9 <= matrix[i][j] <= 10^9',
    '-10^9 <= target <= 10^9',
  ],
  examples: [
    {
      input: 'matrix = [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]], target = 5',
      output: 'true',
    },
    {
      input: 'matrix = [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]], target = 20',
      output: 'false',
    },
  ],
  hints: [
    'Start from the **top-right corner**. Each step you can definitively eliminate a row or a column.',
    'If matrix[row][col] == target, return true. If it is greater than target, move left (col--). If it is less, move down (row++).',
    'Continue until row >= m or col < 0. This runs in O(m + n) — much better than brute force.',
  ],
  functionName: 'searchMatrix',
  params: ['matrix', 'target'],
  starterCode: {
    javascript: `function searchMatrix(matrix, target) {

}`,
    python: `def searchMatrix(matrix, target):
    pass`,
  },
  visibleTests: [
    {
      args: [[[1, 4, 7, 11, 15], [2, 5, 8, 12, 19], [3, 6, 9, 16, 22], [10, 13, 14, 17, 24], [18, 21, 23, 26, 30]], 5],
      expected: true,
    },
    {
      args: [[[1, 4, 7, 11, 15], [2, 5, 8, 12, 19], [3, 6, 9, 16, 22], [10, 13, 14, 17, 24], [18, 21, 23, 26, 30]], 20],
      expected: false,
    },
    { args: [[[-1, 3]], 3], expected: true },
  ],
  hiddenTests: [
    { args: [[[1, 1]], 0], expected: false },
    { args: [[[1, 1]], 1], expected: true },
    {
      args: [[[1, 4, 7, 11, 15], [2, 5, 8, 12, 19], [3, 6, 9, 16, 22], [10, 13, 14, 17, 24], [18, 21, 23, 26, 30]], 1],
      expected: true,
    },
    {
      args: [[[1, 4, 7, 11, 15], [2, 5, 8, 12, 19], [3, 6, 9, 16, 22], [10, 13, 14, 17, 24], [18, 21, 23, 26, 30]], 30],
      expected: true,
    },
    { args: [[[1, 2, 3, 4, 5], [6, 7, 8, 9, 10]], 7], expected: true },
    { args: [[[1, 2, 3, 4, 5], [6, 7, 8, 9, 10]], 11], expected: false },
  ],
};
