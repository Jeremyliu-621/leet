import type { Problem } from '../types';

export const problem: Problem = {
  id: 'escape-the-spreading-fire',
  title: 'Escape the Spreading Fire',
  difficulty: 'hard',
  tags: ['graph', 'shortest-path', 'binary-search'],
  description: `You are given a **0-indexed** 2D integer array \`grid\` of size \`m x n\` that represents a forest. Each cell has one of the following values:
- \`0\` represents **grass**.
- \`1\` represents **fire**.
- \`2\` represents a **wall** (cannot be passed through).

The fire spreads to adjacent grass cells **every minute**. You start at cell \`(0, 0)\` and need to reach the **safehouse** at cell \`(m-1, n-1)\`. Every minute:
1. The fire spreads to each adjacent grass cell (4-directionally).
2. You can move to an adjacent grass cell, or stay put.

Return the **maximum number of minutes** you can wait before starting to move such that you can safely reach the safehouse. If it is impossible to reach the safehouse at all, return \`-1\`. If you can always reach the safehouse regardless of the fire, return \`10^9\`.

You are safe at the safehouse if you and the fire reach the safehouse at the **same time**, or if you arrive before the fire.`,
  constraints: [
    'm == grid.length',
    'n == grid[i].length',
    '2 <= m, n <= 300',
    '4 <= m * n <= 2 * 10^4',
    'grid[i][j] is either 0, 1, or 2',
    'grid[0][0] == grid[m-1][n-1] == 0',
  ],
  examples: [
    {
      input: 'grid = [[0,2,0,0,0,0,0],[0,0,0,2,2,1,0],[0,2,0,0,1,2,0],[0,0,2,2,2,0,2],[0,0,0,0,0,0,0]]',
      output: '3',
      explanation: 'Waiting 3 minutes, then moving along the bottom row reaches the safehouse just as the fire arrives.',
    },
    {
      input: 'grid = [[0,0,0,0],[0,1,2,0],[0,2,0,0]]',
      output: '-1',
      explanation: 'The fire cannot be avoided.',
    },
    {
      input: 'grid = [[0,0,0],[2,2,0],[1,2,0]]',
      output: '1000000000',
      explanation: 'The fire is blocked and can never reach the safehouse.',
    },
  ],
  hints: [
    'First, BFS from all fire cells simultaneously to compute `fireDist[r][c]` = the earliest time fire reaches cell `(r,c)`. Then `personDist[r][c]` = earliest time you can reach `(r,c)` starting at time `wait`.',
    'Binary search on the wait time `t`. For a given wait time `t`, BFS/DFS from `(0,0)` starting at time `t`: you can visit cell `(r,c)` at time `t + personDist[r][c]` only if that is ≤ `fireDist[r][c]` (or = for the safehouse specifically).',
    'The answer is the largest `t` for which you can reach the safehouse. Binary search `t` in range `[0, m*n]`. If even `t=0` is impossible, return -1. If `t=m*n` is possible, return 10^9.',
  ],
  functionName: 'maximumMinutes',
  params: ['grid'],
  starterCode: {
    javascript: 'function maximumMinutes(grid) {\n  \n}\n',
    typescript: "function maximumMinutes(grid: number[][]): number {\n  \n}",

    python: 'def maximumMinutes(grid):\n    pass\n',
  },
  visibleTests: [
    {
      args: [[[0,2,0,0,0,0,0],[0,0,0,2,2,1,0],[0,2,0,0,1,2,0],[0,0,2,2,2,0,2],[0,0,0,0,0,0,0]]],
      expected: 3,
    },
    {
      args: [[[0,0,0,0],[0,1,2,0],[0,2,0,0]]],
      expected: -1,
    },
    {
      args: [[[0,0,0],[2,2,0],[1,2,0]]],
      expected: 1000000000,
    },
  ],
  hiddenTests: [
    {
      args: [[[0,0],[0,0]]],
      expected: 1000000000,
    },
    {
      args: [[[0,0,0],[0,0,0],[0,0,0]]],
      expected: 1000000000,
    },
    {
      args: [[[0,1],[0,0]]],
      expected: -1,
    },
    {
      args: [[[0,0,1],[0,2,0],[0,0,0]]],
      expected: -1,
    },
    {
      args: [[[0,0,0,0,0],[0,1,2,0,0],[0,2,0,0,0],[0,0,0,0,0]]],
      expected: -1,
    },
  ],
};
