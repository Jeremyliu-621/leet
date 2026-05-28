import type { Problem } from '../types';

export const problem: Problem = {
  id: 'number-of-submatrices-that-sum-to-target',
  title: 'Number of Submatrices That Sum to Target',
  difficulty: 'hard',
  tags: ['arrays', 'dynamic-programming', 'hash-map'],
  description: `Given a \`matrix\` and a \`target\`, return the number of non-empty submatrices that sum to \`target\`.

A submatrix \`x1, y1, x2, y2\` is the set of all cells \`matrix[x][y]\` with \`x1 <= x <= x2\` and \`y1 <= y <= y2\`.

Two submatrices are different if they have some coordinate that is different.`,
  constraints: [
    '`1 <= matrix.length <= 100`',
    '`1 <= matrix[0].length <= 100`',
    '`-1000 <= matrix[i][j] <= 1000`',
    '`-10^8 <= target <= 10^8`',
  ],
  examples: [
    {
      input: 'matrix = [[0,1,0],[1,1,1],[0,1,0]], target = 0',
      output: '4',
      explanation: 'The four 1×1 submatrices containing 0.',
    },
    {
      input: 'matrix = [[1,-1],[-1,1]], target = 0',
      output: '5',
    },
    {
      input: 'matrix = [[904]], target = 0',
      output: '0',
    },
  ],
  hints: [
    'Reduce to 1-D: fix the top row r1 and bottom row r2, then collapse those rows into a 1-D column-sum array. Count subarrays in that 1-D array that sum to target.',
    'For the 1-D sub-problem, use a prefix-sum + hash map: count the number of previous prefix sums equal to (currentPrefixSum - target).',
    'Build the column sums incrementally: for each new bottom row r2, add row r2 to the column-sum array.',
    'Time complexity: O(m² × n) where m = number of rows and n = number of columns.',
  ],
  functionName: 'numSubmatrixSumTarget',
  params: ['matrix', 'target'],
  starterCode: {
    javascript: `/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {number}
 */
function numSubmatrixSumTarget(matrix, target) {

}`,
    python: `def numSubmatrixSumTarget(matrix: list[list[int]], target: int) -> int:
    `,
  },
  visibleTests: [
    { args: [[[0, 1, 0], [1, 1, 1], [0, 1, 0]], 0], expected: 4 },
    { args: [[[1, -1], [-1, 1]], 0], expected: 5 },
    { args: [[[904]], 0], expected: 0 },
  ],
  hiddenTests: [
    { args: [[[1]], 1], expected: 1 },
    { args: [[[1, 2], [3, 4]], 10], expected: 1 },
    { args: [[[1, 2], [3, 4]], 3], expected: 2 },
    { args: [[[0, 0], [0, 0]], 0], expected: 9 },
    { args: [[[1, 2, 3], [3, 2, 1]], 6], expected: 2 },
  ],
};
