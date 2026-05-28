import type { Problem } from '../types';

export const problem: Problem = {
  id: 'kth-smallest-element-in-sorted-matrix',
  title: 'Kth Smallest Element in a Sorted Matrix',
  difficulty: 'medium',
  tags: ['binary-search'],
  description: `Given an \`n x n\` matrix where each of the rows and columns is sorted in ascending order, return the \`k\`th smallest element in the matrix.

Note that it is the \`k\`th smallest element in the **sorted order**, not the \`k\`th **distinct** element.

You must find a solution with a memory complexity better than \`O(n^2)\`.`,
  constraints: [
    'n == matrix.length == matrix[i].length',
    '1 <= n <= 300',
    '-10^9 <= matrix[i][j] <= 10^9',
    'All rows and columns of matrix are guaranteed to be sorted in non-decreasing order.',
    '1 <= k <= n^2',
  ],
  examples: [
    {
      input: 'matrix = [[1,5,9],[10,11,13],[12,13,15]], k = 8',
      output: '13',
      explanation: 'The elements in sorted order are [1,5,9,10,11,12,13,13,15], and the 8th smallest is 13.',
    },
    {
      input: 'matrix = [[-5]], k = 1',
      output: '-5',
    },
  ],
  hints: [
    'Binary search on the value range [matrix[0][0], matrix[n-1][n-1]].',
    'For a mid value, count how many elements are ≤ mid by walking from bottom-left: move right if matrix[row][col] ≤ mid, else move up.',
    'Find the smallest value where the count ≥ k.',
  ],
  functionName: 'kthSmallest',
  params: ['matrix', 'k'],
  starterCode: {
    javascript: `function kthSmallest(matrix, k) {

}`,
    typescript: "function kthSmallest(matrix: number[][], k: number): number {\n\n}",

    python: `def kthSmallest(matrix, k):
    pass`,
  },
  visibleTests: [
    { args: [[[1, 5, 9], [10, 11, 13], [12, 13, 15]], 8], expected: 13 },
    { args: [[[-5]], 1], expected: -5 },
  ],
  hiddenTests: [
    { args: [[[1]], 1], expected: 1 },
    { args: [[[1, 2], [3, 4]], 3], expected: 3 },
    { args: [[[1, 2], [3, 4]], 1], expected: 1 },
    { args: [[[1, 2], [1, 3]], 2], expected: 1 },
  ],
};
