import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-path-sum',
  title: 'Minimum Path Sum',
  difficulty: 'medium',
  tags: ['dynamic-programming', 'arrays'],
  description: `Given a \`m x n\` grid filled with non-negative numbers, find a path from the **top-left** to the **bottom-right** corner that **minimizes the sum** of all numbers along its path.

You can only move either **down** or **right** at any point in time.`,
  constraints: [
    'm == grid.length',
    'n == grid[i].length',
    '1 <= m, n <= 200',
    '0 <= grid[i][j] <= 200',
  ],
  examples: [
    {
      input: 'grid = [[1,3,1],[1,5,1],[4,2,1]]',
      output: '7',
      explanation: 'The path 1→3→1→1→1 has the minimum sum.',
    },
    {
      input: 'grid = [[1,2,3],[4,5,6]]',
      output: '12',
      explanation: 'The path 1→2→3→6 has the minimum sum.',
    },
  ],
  hints: [
    'Let `dp[i][j]` = minimum path sum to reach cell `(i, j)`. The first row can only be reached by moving right, and the first column can only be reached by moving down — fill those borders first.',
    'For any interior cell `dp[i][j] = grid[i][j] + min(dp[i-1][j], dp[i][j-1])`. You can modify the grid in-place to save space.',
    '`const dp = grid.map(r => [...r]); for (let i=1;i<m;i++) dp[i][0]+=dp[i-1][0]; for (let j=1;j<n;j++) dp[0][j]+=dp[0][j-1]; for (let i=1;i<m;i++) for (let j=1;j<n;j++) dp[i][j]+=Math.min(dp[i-1][j],dp[i][j-1]); return dp[m-1][n-1];`',
  ],
  functionName: 'minPathSum',
  params: ['grid'],
  starterCode: {
    javascript: 'function minPathSum(grid) {\n  \n}\n',
    typescript: "function minPathSum(grid: number[][]): number {\n  \n}",

    python: 'def minPathSum(grid: list[list[int]]) -> int:\n    pass\n',
  },
  visibleTests: [
    { args: [[[1, 3, 1], [1, 5, 1], [4, 2, 1]]], expected: 7 },
    { args: [[[1, 2, 3], [4, 5, 6]]], expected: 12 },
    { args: [[[0]]], expected: 0 },
    { args: [[[1, 2], [3, 4]]], expected: 7 },
  ],
  hiddenTests: [
    { args: [[[5]]], expected: 5 },
    { args: [[[1, 1, 1], [1, 1, 1], [1, 1, 1]]], expected: 5 },
    { args: [[[0, 0, 0], [0, 0, 0]]], expected: 0 },
    { args: [[[3, 8], [5, 2]]], expected: 10 },
  ],
};
