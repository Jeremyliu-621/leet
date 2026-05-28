import type { Problem } from '../types';

export const problem: Problem = {
  id: 'max-sum-of-rectangle-no-larger-than-k',
  title: 'Max Sum of Rectangle No Larger Than K',
  difficulty: 'hard',
  tags: ['arrays', 'binary-search'],
  description: `Given an \`m x n\` matrix \`matrix\` and an integer \`k\`, return the **max sum of a rectangle** in the matrix such that its sum is **no larger than** \`k\`.

It is guaranteed that there will be a rectangle with a sum no larger than \`k\`.`,
  constraints: [
    '`m == matrix.length`',
    '`n == matrix[i].length`',
    '`1 <= m, n <= 100`',
    '`-100 <= matrix[i][j] <= 100`',
    '`-10^5 <= k <= 10^5`',
  ],
  examples: [
    {
      input: 'matrix = [[1,0,1],[0,-2,3]], k = 2',
      output: '2',
      explanation: 'The rectangle [[0,1],[-2,3]] has sum 2.',
    },
    {
      input: 'matrix = [[2,2,-1]], k = 3',
      output: '3',
      explanation: 'The full row sums to 3.',
    },
  ],
  hints: [
    'Fix two column indices c1 and c2. Compress the 2D problem: compute row_sum[r] = sum of matrix[r][c1..c2]. Now find the max subarray sum ≤ k in row_sum.',
    'To find the max subarray sum ≤ k: use prefix sums. For each prefix sum P[i], find the smallest previous prefix P[j] ≥ P[i] - k. Then P[i] - P[j] ≤ k is maximized.',
    'Maintain a sorted list of seen prefix sums and use binary search (bisect_left) to find the ideal previous prefix in O(log n). Total complexity: O(n^2 * m * log m).',
  ],
  functionName: 'maxSumSubmatrix',
  params: ['matrix', 'k'],
  starterCode: {
    javascript: `function maxSumSubmatrix(matrix, k) {

}`,
    python: `def maxSumSubmatrix(matrix, k):
    pass`,
  },
  visibleTests: [
    { args: [[[1,0,1],[0,-2,3]], 2], expected: 2 },
    { args: [[[2,2,-1]], 3], expected: 3 },
  ],
  hiddenTests: [
    { args: [[[2,2,-1]], 0], expected: -1 },
    { args: [[[5,-4,-3,4],[-3,-4,4,5],[5,1,5,-4]], 8], expected: 8 },
    { args: [[[1]], 1], expected: 1 },
    { args: [[[1,2],[3,4]], 5], expected: 4 },
  ],
};
