import type { Problem } from '../types';

export const problem: Problem = {
  id: 'matrix-block-sum',
  title: 'Matrix Block Sum',
  difficulty: 'medium',
  tags: ['arrays', 'dynamic-programming'],
  description: `Given a \`m x n\` matrix \`mat\` and an integer \`k\`, return *a matrix* \`answer\` *where each* \`answer[i][j]\` *is the sum of all elements* \`mat[r][c]\` *for*:

- \`i - k <= r <= i + k\`
- \`j - k <= c <= j + k\`
- \`(r, c)\` is a valid position in the matrix.`,
  constraints: [
    'm == mat.length',
    'n == mat[i].length',
    '1 <= m, n, k <= 100',
    '1 <= mat[i][j] <= 100',
  ],
  examples: [
    {
      input: 'mat = [[1,2,3],[4,5,6],[7,8,9]], k = 1',
      output: '[[12,21,16],[27,45,33],[24,39,28]]',
      explanation: 'Each cell sums the block within ±1 distance.',
    },
    {
      input: 'mat = [[1,2,3],[4,5,6],[7,8,9]], k = 2',
      output: '[[45,45,45],[45,45,45],[45,45,45]]',
      explanation: 'k=2 covers the whole 3x3 matrix for every cell.',
    },
  ],
  hints: [
    'Use a 2D prefix sum array to answer range queries in O(1) each.',
    'Build prefix[i][j] = sum of mat[0..i-1][0..j-1].',
    'For each cell (i,j), clamp r1=i-k, c1=j-k, r2=i+k, c2=j+k to matrix bounds and use the prefix sum formula.',
  ],
  functionName: 'matrixBlockSum',
  params: ['mat', 'k'],
  starterCode: {
    javascript: `function matrixBlockSum(mat, k) {

}`,
    python: `def matrixBlockSum(mat, k):
    pass`,
  },
  visibleTests: [
    { args: [[[1, 2, 3], [4, 5, 6], [7, 8, 9]], 1], expected: [[12, 21, 16], [27, 45, 33], [24, 39, 28]] },
    { args: [[[1, 2, 3], [4, 5, 6], [7, 8, 9]], 2], expected: [[45, 45, 45], [45, 45, 45], [45, 45, 45]] },
  ],
  hiddenTests: [
    { args: [[[1]], 1], expected: [[1]] },
    { args: [[[1, 2], [3, 4]], 1], expected: [[10, 10], [10, 10]] },
    { args: [[[1, 2, 3]], 1], expected: [[3, 6, 5]] },
    { args: [[[1], [2], [3]], 1], expected: [[3], [6], [5]] },
  ],
};
