import type { Problem } from '../types';

export const problem: Problem = {
  id: 'search-a-2d-matrix',
  title: 'Search a 2D Matrix',
  difficulty: 'medium',
  tags: ['arrays', 'binary-search'],
  description: `You are given an \`m x n\` integer matrix \`matrix\` with the following two properties:

- Each row is sorted in non-decreasing order.
- The first integer of each row is **greater than** the last integer of the previous row.

Given an integer \`target\`, return \`true\` if \`target\` is in the matrix or \`false\` otherwise.

Write a solution in **O(log(m * n))** time complexity.`,
  constraints: [
    'm == matrix.length',
    'n == matrix[i].length',
    '1 <= m, n <= 100',
    '-10^4 <= matrix[i][j] <= 10^4',
    '-10^4 <= target <= 10^4',
    'Matrix integers are in strictly increasing order.',
  ],
  examples: [
    {
      input: 'matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3',
      output: 'true',
    },
    {
      input: 'matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13',
      output: 'false',
    },
    {
      input: 'matrix = [[1]], target = 0',
      output: 'false',
    },
  ],
  hints: [
    'The matrix is essentially a sorted 1D array laid out in row-major order. A virtual index `k` in [0, m*n) maps to row `k // n` and column `k % n`.',
    'Run standard binary search on the virtual 1D index from 0 to m*n-1. At each mid, map back to row/col to read matrix[row][col].',
    '`let lo = 0, hi = m * n - 1; while (lo <= hi) { const mid = (lo + hi) >> 1; const v = matrix[Math.floor(mid / n)][mid % n]; if (v === target) return true; if (v < target) lo = mid + 1; else hi = mid - 1; } return false;`',
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
    { args: [[[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], 3], expected: true },
    { args: [[[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], 13], expected: false },
    { args: [[[1]], 0], expected: false },
  ],
  hiddenTests: [
    { args: [[[1]], 1], expected: true },
    { args: [[[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], 0], expected: false },
    { args: [[[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], 60], expected: true },
    { args: [[[1, 3]], 3], expected: true },
    { args: [[[1], [3], [5]], 3], expected: true },
    { args: [[[1], [3], [5]], 4], expected: false },
  ],
};
