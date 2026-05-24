import type { Problem } from '../types';

export const problem: Problem = {
  id: 'search-2d-matrix-ii',
  title: 'Search a 2D Matrix II',
  difficulty: 'medium',
  tags: ['binary-search', 'arrays'],
  description: `Write an efficient algorithm that searches for a value \`target\` in an \`m x n\` integer matrix \`matrix\`. This matrix has the following properties:

- Integers in each row are sorted in ascending order from left to right.
- Integers in each column are sorted in ascending order from top to bottom.`,
  constraints: [
    '`m == matrix.length`',
    '`n == matrix[i].length`',
    '`1 <= n, m <= 300`',
    '`-10^9 <= matrix[i][j] <= 10^9`',
    'All the integers in each row are **sorted** in ascending order',
    'All the integers in each column are **sorted** in ascending order',
    '`-10^9 <= target <= 10^9`',
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
    'Start at the top-right corner. If the current element equals target, return true. If it is greater than target, move left. If it is less, move down.',
    'This eliminates one row or column at each step, giving O(m + n) time.',
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
      args: [[[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]], 5],
      expected: true,
    },
    {
      args: [[[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]], 20],
      expected: false,
    },
  ],
  hiddenTests: [
    { args: [[[1]], 0], expected: false },
    { args: [[[1]], 1], expected: true },
    { args: [[[1,3,5],[2,4,6],[8,9,10]], 4], expected: true },
    { args: [[[1,3,5],[2,4,6],[8,9,10]], 7], expected: false },
  ],
};
