import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-falling-path-sum',
  title: 'Minimum Falling Path Sum',
  difficulty: 'medium',
  tags: ['dynamic-programming'],
  description: `Given an \`n x n\` array of integers \`matrix\`, return the **minimum sum** of any **falling path** through \`matrix\`.

A **falling path** starts at any element in the first row and chooses the element in the next row that is either directly below or diagonally left/right. Specifically, the next element from position \`(row, col)\` will be at \`(row+1, col-1)\`, \`(row+1, col)\`, or \`(row+1, col+1)\`.`,
  constraints: [
    'n == matrix.length == matrix[i].length',
    '1 <= n <= 100',
    '-100 <= matrix[i][j] <= 100',
  ],
  examples: [
    {
      input: 'matrix = [[2,1,3],[6,5,4],[7,8,9]]',
      output: '13',
      explanation: 'Path: 1 → 5 → 7 = 13.',
    },
    {
      input: 'matrix = [[-19,57],[-40,-5]]',
      output: '-59',
      explanation: 'Path: -19 → -40 = -59.',
    },
  ],
  hints: [
    'Level 1: Use dynamic programming row by row. For each cell, the minimum cost to reach it equals its value plus the minimum of the three cells above it (above-left, above, above-right).',
    'Level 2: Modify the matrix in-place or use a dp array. For row i > 0: dp[i][j] = matrix[i][j] + min(dp[i-1][j-1], dp[i-1][j], dp[i-1][j+1]). Handle boundary columns. Answer is min of last row.',
    'Level 3: for(let i=1;i<matrix.length;i++)for(let j=0;j<matrix[i].length;j++){const prev=[matrix[i-1][j]];if(j>0)prev.push(matrix[i-1][j-1]);if(j<matrix[i].length-1)prev.push(matrix[i-1][j+1]);matrix[i][j]+=Math.min(...prev);}return Math.min(...matrix[matrix.length-1]);',
  ],
  functionName: 'minFallingPathSum',
  params: ['matrix'],
  starterCode: {
    javascript: 'function minFallingPathSum(matrix) {\n  // your code here\n}\n',
    python: 'def minFallingPathSum(matrix):\n    # your code here\n    pass\n',
  },
  visibleTests: [
    { args: [[[2, 1, 3], [6, 5, 4], [7, 8, 9]]], expected: 13 },
    { args: [[[-19, 57], [-40, -5]]], expected: -59 },
  ],
  hiddenTests: [
    { args: [[[5]]], expected: 5 },
    { args: [[[1, 2], [3, 4]]], expected: 4 },
    { args: [[[-1, -2], [-3, -4]]], expected: -6 },
    { args: [[[100, -40, -100], [1, 1, 1], [1, 1, 1]]], expected: -98 },
  ],
};
