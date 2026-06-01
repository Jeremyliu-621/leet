import type { Problem } from '../types';

export const problem: Problem = {
  id: 'matrix-diagonal-sum',
  title: 'Matrix Diagonal Sum',
  difficulty: 'easy',
  tags: ['arrays'],
  description: `Given a square matrix \`mat\`, return the **sum** of the matrix diagonals.

Only include the sum of all the elements on the primary diagonal and all the elements on the secondary diagonal that are not part of the primary diagonal.`,
  constraints: [
    'n == mat.length == mat[i].length',
    '1 <= n <= 100',
    '1 <= mat[i][j] <= 100',
  ],
  examples: [
    {
      input: 'mat = [[1,2,3],[4,5,6],[7,8,9]]',
      output: '25',
      explanation:
        'Primary diagonal: 1+5+9=15. Secondary diagonal: 3+5+7=15. Center 5 counted once. Total: 1+5+9+3+7=25.',
    },
    {
      input: 'mat = [[1,1,1,1],[1,1,1,1],[1,1,1,1],[1,1,1,1]]',
      output: '8',
      explanation:
        'n=4 (even). Primary and secondary diagonals each sum to 4. No overlap. Total: 4+4=8.',
    },
  ],
  hints: [
    'Iterate over each row i. Add mat[i][i] (primary) and mat[i][n-1-i] (secondary).',
    'If n is odd, the center element mat[n/2][n/2] lies on both diagonals — subtract it once to avoid double-counting.',
    'Return the total sum.',
  ],
  functionName: 'diagonalSum',
  params: ['mat'],
  starterCode: {
    javascript: `function diagonalSum(mat) {
  const n = mat.length;
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += mat[i][i] + mat[i][n - 1 - i];
  }
  if (n % 2 === 1) sum -= mat[Math.floor(n / 2)][Math.floor(n / 2)];
  return sum;
}`,
    typescript: `function diagonalSum(mat: number[][]): number {
  const n = mat.length;
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += mat[i]![i]! + mat[i]![n - 1 - i]!;
  }
  if (n % 2 === 1) sum -= mat[Math.floor(n / 2)]![Math.floor(n / 2)]!;
  return sum;
}`,
    python: `def diagonalSum(mat):
    mat = [list(r.to_py() if hasattr(r, 'to_py') else r) for r in (mat.to_py() if hasattr(mat, 'to_py') else mat)]
    n = len(mat)
    s = sum(mat[i][i] + mat[i][n - 1 - i] for i in range(n))
    if n % 2 == 1: s -= mat[n // 2][n // 2]
    return s`,
  },
  visibleTests: [
    { args: [[[1, 2, 3], [4, 5, 6], [7, 8, 9]]], expected: 25 },
    { args: [[[1, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1]]], expected: 8 },
    { args: [[[5]]], expected: 5 },
    { args: [[[1, 2], [3, 4]]], expected: 10 },
    { args: [[[1, 0, 0, 0], [0, 1, 0, 0], [0, 0, 1, 0], [0, 0, 0, 1]]], expected: 4 },
  ],
  hiddenTests: [
    { args: [[[1, 2], [2, 1]]], expected: 6 },
    { args: [[[4, 3, 2], [3, 1, 3], [2, 3, 4]]], expected: 13 },
    { args: [[[0]]], expected: 0 },
    { args: [[[2, 0], [0, 2]]], expected: 4 },
    { args: [[[1, 0, 1], [0, 5, 0], [1, 0, 1]]], expected: 9 },
  ],
};
