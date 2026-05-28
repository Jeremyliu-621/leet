import type { Problem } from '../types';

export const problem: Problem = {
  id: 'number-of-increasing-paths-in-a-grid',
  title: 'Number of Increasing Paths in a Grid',
  difficulty: 'hard',
  tags: ['arrays', 'dynamic-programming'],
  description: `You are given an \`m x n\` integer matrix \`grid\`, where you can move from a cell to any **adjacent** cell in all 4 directions.

Return the **number of strictly increasing paths** in the grid such that you can start from **any** cell and end at **any** cell. Since the answer may be very large, return it **modulo** \`10^9 + 7\`.

Two paths are considered different if they do not have exactly the same sequence of visited cells.

**Example 1:**
\`\`\`
Input: grid = [[1,1],[3,4]]
Output: 8
\`\`\`

**Example 2:**
\`\`\`
Input: grid = [[1],[2]]
Output: 3
\`\`\`

**Constraints:**
- \`m == grid.length\`
- \`n == grid[i].length\`
- \`1 <= m, n <= 1000\`
- \`1 <= grid[i][j] <= 10^5\``,
  constraints: [
    '1 <= m, n <= 1000',
    '1 <= grid[i][j] <= 10^5',
  ],
  examples: [
    { input: 'grid = [[1,1],[3,4]]', output: '8' },
    { input: 'grid = [[1],[2]]', output: '3' },
  ],
  hints: [
    'Use DFS with memoization. For each cell, count strictly increasing paths starting at that cell.',
    'dp[r][c] = 1 + sum of dp[nr][nc] for all neighbors (nr, nc) where grid[nr][nc] > grid[r][c].',
    'Answer = sum of dp[r][c] for all cells, mod 10^9+7.',
  ],
  functionName: 'countPaths',
  params: ['grid'],
  starterCode: {
    javascript: 'function countPaths(grid) {\n  // your code here\n}\n',
    typescript: "function countPaths(grid: number[][]): number {\n  // your code here\n}",

    python: 'def countPaths(grid):\n    pass\n',
  },
  visibleTests: [
    { args: [[[1, 1], [3, 4]]], expected: 8 },
    { args: [[[1], [2]]], expected: 3 },
    { args: [[[1]]], expected: 1 },
  ],
  hiddenTests: [
    { args: [[[1, 2], [3, 4]]], expected: 10 },
    { args: [[[3, 1], [2, 4]]], expected: 8 },
    { args: [[[1, 2, 3]]], expected: 6 },
    { args: [[[1, 2], [2, 1]]], expected: 8 },
  ],
};
