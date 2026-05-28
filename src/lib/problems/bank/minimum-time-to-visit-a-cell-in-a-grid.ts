import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-time-to-visit-a-cell-in-a-grid',
  title: 'Minimum Time to Visit a Cell In a Grid',
  difficulty: 'hard',
  tags: ['arrays', 'binary-search'],
  description: `You are given an \`m x n\` matrix \`grid\` consisting of **non-negative** integers where \`grid[row][col]\` represents the **minimum** time required to be able to visit the cell \`(row, col)\`, which means you can visit the cell \`(row, col)\` only when the time you visit it is **greater than or equal to** \`grid[row][col]\`.

You are standing in the **top-left** cell of the matrix in the 0th second. You must move to an **adjacent** cell (4-directional) every second, but you may not leave the matrix.

Return the **minimum** time required in which you can visit the bottom-right cell of the matrix. If you cannot visit the bottom-right cell, then return \`-1\`.

**Example 1:**
\`\`\`
Input: grid = [[0,1,3,2],[5,1,2,5],[4,3,8,6]]
Output: 7
\`\`\`

**Example 2:**
\`\`\`
Input: grid = [[0,2,4],[3,2,1],[1,0,4]]
Output: -1
\`\`\`

**Constraints:**
- \`m == grid.length\`
- \`n == grid[i].length\`
- \`2 <= m, n <= 1000\`
- \`0 <= grid[i][j] <= 10^9\`
- \`grid[0][0] == 0\``,
  constraints: [
    '2 <= m, n <= 1000',
    '0 <= grid[i][j] <= 10^9',
    'grid[0][0] == 0',
  ],
  examples: [
    { input: 'grid = [[0,1,3,2],[5,1,2,5],[4,3,8,6]]', output: '7' },
    { input: 'grid = [[0,2,4],[3,2,1],[1,0,4]]', output: '-1' },
  ],
  hints: [
    'If grid[0][1] > 1 and grid[1][0] > 1, we cannot escape the top-left corner: return -1.',
    'Use a min-heap (Dijkstra). dist[r][c] = minimum time to reach (r,c).',
    'When moving to neighbor (nr,nc): arrivalTime = dist[r][c] + 1. If arrivalTime < grid[nr][nc], we may need to "wait" by bouncing back and forth. The extra wait is (grid[nr][nc] - arrivalTime), but we can only wait in increments of 2 — so actual arrival = grid[nr][nc] + ((grid[nr][nc] - arrivalTime) % 2).',
  ],
  functionName: 'minimumTime',
  params: ['grid'],
  starterCode: {
    javascript: 'function minimumTime(grid) {\n  // your code here\n}\n',
    python: 'def minimumTime(grid):\n    pass\n',
  },
  visibleTests: [
    { args: [[[0, 1, 3, 2], [5, 1, 2, 5], [4, 3, 8, 6]]], expected: 7 },
    { args: [[[0, 2, 4], [3, 2, 1], [1, 0, 4]]], expected: -1 },
    { args: [[[0, 1], [1, 0]]], expected: 2 },
  ],
  hiddenTests: [
    { args: [[[0, 0], [0, 0]]], expected: 2 },
    { args: [[[0, 1], [1, 2]]], expected: 2 },
    { args: [[[0, 1, 0], [0, 1, 0]]], expected: 3 },
    { args: [[[0, 10], [10, 10]]], expected: -1 },
  ],
};
