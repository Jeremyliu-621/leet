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
  const m = mat.length, n = mat[0].length;
  const pre = Array.from({length: m+1}, () => new Array(n+1).fill(0));
  for (let i = 1; i <= m; i++)
    for (let j = 1; j <= n; j++)
      pre[i][j] = mat[i-1][j-1] + pre[i-1][j] + pre[i][j-1] - pre[i-1][j-1];
  const sum = (r1, c1, r2, c2) => pre[r2][c2] - pre[r1][c2] - pre[r2][c1] + pre[r1][c1];
  return Array.from({length: m}, (_, i) =>
    Array.from({length: n}, (_, j) =>
      sum(Math.max(0,i-k), Math.max(0,j-k), Math.min(m,i+k+1), Math.min(n,j+k+1))));
}`,
    typescript: `function matrixBlockSum(mat: number[][], k: number): number[][] {
  const m = mat.length, n = mat[0].length;
  const pre = Array.from({length: m+1}, () => new Array(n+1).fill(0));
  for (let i = 1; i <= m; i++)
    for (let j = 1; j <= n; j++)
      pre[i][j] = mat[i-1][j-1] + pre[i-1][j] + pre[i][j-1] - pre[i-1][j-1];
  const sum = (r1: number, c1: number, r2: number, c2: number) =>
    pre[r2][c2] - pre[r1][c2] - pre[r2][c1] + pre[r1][c1];
  return Array.from({length: m}, (_, i) =>
    Array.from({length: n}, (_, j) =>
      sum(Math.max(0,i-k), Math.max(0,j-k), Math.min(m,i+k+1), Math.min(n,j+k+1))));
}`,
    python: `def matrixBlockSum(mat, k):
    m, n = len(mat), len(mat[0])
    pre = [[0]*(n+1) for _ in range(m+1)]
    for i in range(1, m+1):
        for j in range(1, n+1):
            pre[i][j] = mat[i-1][j-1] + pre[i-1][j] + pre[i][j-1] - pre[i-1][j-1]
    def s(r1, c1, r2, c2): return pre[r2][c2] - pre[r1][c2] - pre[r2][c1] + pre[r1][c1]
    return [[s(max(0,i-k), max(0,j-k), min(m,i+k+1), min(n,j+k+1)) for j in range(n)] for i in range(m)]`,
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
