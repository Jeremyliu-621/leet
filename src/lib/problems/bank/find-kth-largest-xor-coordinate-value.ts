import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-kth-largest-xor-coordinate-value',
  title: 'Find Kth Largest XOR Coordinate Value',
  difficulty: 'medium',
  tags: ['arrays', 'binary-search', 'hash-map'],
  description: `You are given a 2D matrix of size \`m x n\`, consisting of non-negative integers. You are also given an integer \`k\`.

The **value** of coordinate \`(a, b)\` of the matrix is the XOR of all \`matrix[i][j]\` where \`0 <= i <= a < m\` and \`0 <= j <= b < n\` (i.e., the XOR of all elements in the upper-left rectangle of \`matrix\` with corner \`(a, b)\`).

Find the \`k\`th **largest** value (1-indexed) of all the \`(a, b)\` coordinates.`,
  constraints: [
    '`m == matrix.length`',
    '`n == matrix[i].length`',
    '`1 <= m, n <= 1000`',
    '`0 <= matrix[i][j] <= 10^6`',
    '`1 <= k <= m * n`',
  ],
  examples: [
    {
      input: 'matrix = [[5,2],[1,6]], k = 1',
      output: '7',
      explanation: 'The XOR values are: (0,0)=5, (0,1)=7, (1,0)=4, (1,1)=0. The largest is 7.',
    },
    {
      input: 'matrix = [[5,2],[1,6]], k = 2',
      output: '5',
      explanation: 'The 2nd largest XOR value is 5.',
    },
    {
      input: 'matrix = [[5,2],[1,6]], k = 3',
      output: '4',
    },
  ],
  hints: [
    'Build a 2D prefix XOR array: prefix[i][j] = XOR of all matrix[r][c] for r<=i, c<=j.',
    'Use the inclusion-exclusion formula: prefix[i][j] = matrix[i][j] XOR prefix[i-1][j] XOR prefix[i][j-1] XOR prefix[i-1][j-1].',
    'Collect all m*n values into an array, sort descending, and return index k-1.',
    'Alternatively use a min-heap of size k for O(m*n*log k) time.',
  ],
  functionName: 'kthLargestValue',
  params: ['matrix', 'k'],
  starterCode: {
    javascript: `/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
function kthLargestValue(matrix, k) {

}`,
    typescript: `function kthLargestValue(matrix: number[][], k: number): number {

}`,
    python: `def kthLargestValue(matrix: list[list[int]], k: int) -> int:
    `,
  },
  visibleTests: [
    { args: [[[5, 2], [1, 6]], 1], expected: 7 },
    { args: [[[5, 2], [1, 6]], 2], expected: 5 },
    { args: [[[5, 2], [1, 6]], 3], expected: 4 },
  ],
  hiddenTests: [
    { args: [[[5, 2], [1, 6]], 4], expected: 0 },
    { args: [[[0]], 1], expected: 0 },
    { args: [[[1, 2, 3]], 2], expected: 1 },
    { args: [[[1], [2], [3]], 2], expected: 1 },
    { args: [[[1, 2], [3, 4]], 1], expected: 4 },
  ],
};
