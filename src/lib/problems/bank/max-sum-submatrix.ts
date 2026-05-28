import type { Problem } from '../types';

export const problem: Problem = {
  id: 'max-sum-submatrix',
  title: 'Maximum Sum Rectangle in 2D Matrix',
  difficulty: 'hard',
  tags: ['dynamic-programming', 'arrays'],
  description: `Given an \`m x n\` integer matrix \`matrix\`, find the **submatrix** (contiguous rectangular subregion) with the **maximum sum** and return that sum.

**Approach hint:** For each pair of row boundaries \`(top, bottom)\`, compress the rows into a 1D array of column sums, then apply **Kadane's algorithm** to find the maximum subarray sum of that 1D array.

**Example:**
\`\`\`
matrix = [
  [1, -2,  3],
  [4,  5, -6],
  [-3, 2,  1]
]
\`\`\`
The submatrix \`[[1,-2],[4,5]]\` (rows 0-1, cols 0-1) has sum **8**.
Actually \`[[4,5]]\` has sum **9**. Let's recalculate: The best submatrix is \`[[4,5]]\` → sum **9**.`,
  constraints: [
    '1 <= m, n <= 200',
    '-100 <= matrix[i][j] <= 100',
  ],
  examples: [
    {
      input: 'matrix = [[1,-2,3],[4,5,-6],[-3,2,1]]',
      output: '9',
      explanation: 'The single row [4, 5] gives sum 9.',
    },
    {
      input: 'matrix = [[2,1],[-5,-1]]',
      output: '3',
      explanation: 'Submatrix [[2,1]] has sum 3.',
    },
    {
      input: 'matrix = [[-1,-2],[-3,-4]]',
      output: '-1',
      explanation: 'All values are negative; best single cell is -1.',
    },
  ],
  hints: [
    'Iterate over all pairs of top and bottom row boundaries. For each pair, create a 1D array `colSum` where `colSum[j]` = sum of `matrix[i][j]` for `top <= i <= bottom`.',
    'Apply Kadane\'s algorithm on `colSum` to find the maximum subarray sum. This is O(n) per pair of rows.',
    'Overall time complexity is O(m² × n). Track the maximum across all row-pair combinations.',
  ],
  functionName: 'maxSumSubmatrix',
  params: ['matrix'],
  starterCode: {
    javascript: `function maxSumSubmatrix(matrix) {
  // Return the maximum sum over all submatrices (contiguous rectangular regions)
}`,
    typescript: "function maxSumSubmatrix(matrix: number[][]): number {\n  // Return the maximum sum over all submatrices (contiguous rectangular regions)\n}",

    python: `def maxSumSubmatrix(matrix: list[list[int]]) -> int:
    # Return the maximum sum over all submatrices (contiguous rectangular regions)
    pass`,
  },
  visibleTests: [
    { args: [[[1, -2, 3], [4, 5, -6], [-3, 2, 1]]], expected: 9 },
    { args: [[[2, 1], [-5, -1]]], expected: 3 },
    { args: [[[-1, -2], [-3, -4]]], expected: -1 },
    { args: [[[5]]], expected: 5 },
  ],
  hiddenTests: [
    { args: [[[0, -2, -7, 0], [9, 2, -6, 2], [-4, 1, -4, 1], [-1, 8, 0, -2]]], expected: 15 },
    { args: [[[1, 2, -1, -4, -20], [-8, -3, 4, 2, 1], [3, 8, 10, 1, 3], [-4, -1, 1, 7, -6]]], expected: 29 },
    { args: [[[1, 2], [3, 4]]], expected: 10 },
    { args: [[[-3, -4, 5], [-5, 2, 3], [0, -2, 1]]], expected: 9 },
    { args: [[[1, -1], [-1, 1]]], expected: 1 },
  ],
};
