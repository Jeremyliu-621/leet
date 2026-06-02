import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-square-submatrices',
  title: 'Count Square Submatrices with All Ones',
  difficulty: 'medium',
  tags: ['dynamic-programming', 'arrays'],
  description: `Given a \`m * n\` matrix of ones and zeros, return how many **square** submatrices have all ones.`,
  constraints: [
    '1 <= arr.length <= 300',
    '1 <= arr[0].length <= 300',
    '0 <= arr[i][j] <= 1',
  ],
  examples: [
    {
      input: 'matrix = [[0,1,1,1],[1,1,1,1],[0,1,1,1]]',
      output: '15',
      explanation: 'There are 10 squares of side 1, 4 squares of side 2 and 1 square of side 3. Total = 15.',
    },
    {
      input: 'matrix = [[1,0,1],[1,1,0],[1,1,0]]',
      output: '7',
      explanation: 'There are 6 squares of side 1 and 1 square of side 2. Total = 7.',
    },
  ],
  hints: [
    'Define dp[i][j] = the size of the largest square having cell (i,j) as the bottom-right corner.',
    'dp[i][j] = min(dp[i-1][j], dp[i][j-1], dp[i-1][j-1]) + 1 when matrix[i][j] = 1.',
    'The number of squares with bottom-right corner at (i,j) is dp[i][j]. Sum them all.',
  ],
  functionName: 'countSquares',
  params: ['matrix'],
  starterCode: {
    javascript: `function countSquares(matrix) {
  const m = matrix.length, n = matrix[0].length;
  let total = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] && i > 0 && j > 0)
        matrix[i][j] = Math.min(matrix[i-1][j], matrix[i][j-1], matrix[i-1][j-1]) + 1;
      total += matrix[i][j];
    }
  }
  return total;
}`,
    typescript: `function countSquares(matrix: number[][]): number {
  const m = matrix.length, n = matrix[0]!.length;
  let total = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i]![j] && i > 0 && j > 0)
        matrix[i]![j] = Math.min(matrix[i-1]![j]!, matrix[i]![j-1]!, matrix[i-1]![j-1]!) + 1;
      total += matrix[i]![j]!;
    }
  }
  return total;
}`,
    python: `def countSquares(matrix):
    m, n = len(matrix), len(matrix[0])
    total = 0
    for i in range(m):
        for j in range(n):
            if matrix[i][j] and i > 0 and j > 0:
                matrix[i][j] = min(matrix[i-1][j], matrix[i][j-1], matrix[i-1][j-1]) + 1
            total += matrix[i][j]
    return total`,
  },
  visibleTests: [
    { args: [[[0, 1, 1, 1], [1, 1, 1, 1], [0, 1, 1, 1]]], expected: 15 },
    { args: [[[1, 0, 1], [1, 1, 0], [1, 1, 0]]], expected: 7 },
  ],
  hiddenTests: [
    { args: [[[1]]], expected: 1 },
    { args: [[[0]]], expected: 0 },
    { args: [[[1, 1], [1, 1]]], expected: 5 },
    { args: [[[1, 1, 1], [1, 1, 1], [1, 1, 1]]], expected: 14 },
  ],
};
