import type { Problem } from '../types';

export const problem: Problem = {
  id: 'sum-of-all-submatrix-sums',
  title: 'Sum of All Submatrix Sums',
  difficulty: 'medium',
  tags: ['arrays', 'math'],
  description: `Given an \`m x n\` integer matrix, return the **sum of all submatrix sums**.

A **submatrix** is any contiguous rectangular region of the matrix (at least 1×1). The **sum** of a submatrix is the total of all its elements.

**Key insight:** rather than enumerating every submatrix, consider how many submatrices each cell contributes to. Cell \`(i, j)\` (0-indexed) is included in every submatrix whose top-left corner is at row \`r ≤ i\` and column \`c ≤ j\`, and whose bottom-right corner is at row \`r2 ≥ i\` and column \`c2 ≥ j\`. Count those choices and multiply by the cell's value.`,
  constraints: [
    '1 <= m, n <= 50',
    '-100 <= matrix[i][j] <= 100',
  ],
  examples: [
    {
      input: 'matrix = [[1,2],[3,4]]',
      output: '40',
      explanation:
        'There are 9 submatrices. Their sums are: [1]=1, [2]=2, [3]=3, [4]=4, [1,2]=3, [3,4]=7, [[1],[3]]=4, [[2],[4]]=6, [[1,2],[3,4]]=10. Total = 1+2+3+4+3+7+4+6+10 = 40.',
    },
    {
      input: 'matrix = [[2]]',
      output: '2',
      explanation: 'Only one submatrix (the whole matrix) with sum 2.',
    },
    {
      input: 'matrix = [[1,1,1],[1,1,1]]',
      output: '40',
      explanation:
        'In a 2×3 all-ones matrix, each cell (i,j) contributes (i+1)(m−i)(j+1)(n−j) times. The contributions are 6, 8, 6, 6, 8, 6 = 40.',
    },
  ],
  hints: [
    'Brute force is O(m²n²) — enumerate every pair of top-left and bottom-right corners and sum the region. That is correct but think about whether you can compute each cell\'s contribution directly.',
    'Cell (i, j) (0-indexed, m rows, n cols) belongs to every submatrix whose top-left row ≤ i AND top-left col ≤ j AND bottom-right row ≥ i AND bottom-right col ≥ j. Count the independent row choices and column choices separately.',
    'The number of valid top-left rows is `(i + 1)` and valid bottom-right rows is `(m - i)`, giving `(i+1)(m-i)` row-pair choices. Similarly `(j+1)(n-j)` column-pair choices. Total contribution of cell (i,j) = `matrix[i][j] * (i+1) * (m-i) * (j+1) * (n-j)`. Sum this over all cells.',
  ],
  functionName: 'sumSubmatrixSums',
  params: ['matrix'],
  starterCode: {
    javascript: `function sumSubmatrixSums(matrix) {
  // your code here
}`,
    python: `def sumSubmatrixSums(matrix):
    # your code here
    pass`,
  },
  visibleTests: [
    { args: [[[1, 2], [3, 4]]], expected: 40 },
    { args: [[[2]]], expected: 2 },
    { args: [[[1, 1, 1], [1, 1, 1]]], expected: 40 },
  ],
  hiddenTests: [
    { args: [[[0]]], expected: 0 },
    { args: [[[1, 2, 3]]], expected: 20 },
    { args: [[[1], [2], [3]]], expected: 20 },
    { args: [[[-1, 2], [3, -4]]], expected: 0 },
    { args: [[[1, 0], [0, 1]]], expected: 8 },
    { args: [[[2, 2], [2, 2]]], expected: 32 },
  ],
};
