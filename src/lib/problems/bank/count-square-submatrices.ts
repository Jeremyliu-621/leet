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
    javascript: 'function countSquares(matrix) {\n\n}\n',
    typescript: "function countSquares(matrix: number[][]): number {\n\n}",

    python: 'def countSquares(matrix):\n    pass\n',
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
