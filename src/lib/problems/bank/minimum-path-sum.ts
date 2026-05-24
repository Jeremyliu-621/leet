import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-path-sum',
  title: 'Minimum Path Sum',
  difficulty: 'medium',
  tags: ['dynamic-programming', 'arrays'],
  description: `Given an \`m × n\` grid filled with non-negative integers, find a path from the **top-left** to the **bottom-right** corner that minimizes the sum of all numbers along the path.

You can only move **right** or **down** at each step.

Use dynamic programming: \`dp[i][j] = grid[i][j] + min(dp[i-1][j], dp[i][j-1])\`. The first row and column can only be reached by moving in one direction, so their values are prefix sums.`,
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
      explanation: 'Path 1→3→1→1→1 = 7.',
    },
    {
      input: 'grid = [[1,2,3],[4,5,6]]',
      output: '12',
      explanation: 'Path 1→2→3→6 = 12.',
    },
  ],
  hints: [
    'You can only move right or down, so `dp[i][j]` depends only on `dp[i-1][j]` (from above) and `dp[i][j-1]` (from the left). Initialize the first row and column as cumulative sums since there\'s only one way to reach them.',
    '`dp[i][j] = grid[i][j] + min(dp[i-1][j], dp[i][j-1])` for i,j > 0. For the first row: `dp[0][j] = dp[0][j-1] + grid[0][j]`. For the first column: `dp[i][0] = dp[i-1][0] + grid[i][0]`. Answer is `dp[m-1][n-1]`.',
    '`const m = grid.length, n = grid[0].length; const dp = grid.map(r => [...r]); for (let j = 1; j < n; j++) dp[0][j] += dp[0][j-1]; for (let i = 1; i < m; i++) dp[i][0] += dp[i-1][0]; for (let i = 1; i < m; i++) for (let j = 1; j < n; j++) dp[i][j] += Math.min(dp[i-1][j], dp[i][j-1]); return dp[m-1][n-1];`',
  ],
  functionName: 'minPathSum',
  params: ['grid'],
  starterCode: {
    javascript: 'function minPathSum(grid) {\n  // your code here\n}\n',
    python: 'def minPathSum(grid: list[list[int]]) -> int:\n    # your code here\n    pass\n',
  },
  visibleTests: [
    { args: [[[1, 3, 1], [1, 5, 1], [4, 2, 1]]], expected: 7 },
    { args: [[[1, 2, 3], [4, 5, 6]]], expected: 12 },
    { args: [[[1]]], expected: 1 },
    { args: [[[1, 2], [1, 1]]], expected: 3 },
  ],
  hiddenTests: [
    { args: [[[0, 0, 0], [0, 0, 0]]], expected: 0 },
    { args: [[[1, 2], [3, 4]]], expected: 7 },
    { args: [[[1, 2, 5], [3, 2, 1]]], expected: 6 },
  ],
};
