import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-obstacle-removal-to-reach-corner',
  title: 'Minimum Obstacle Removal to Reach Corner',
  difficulty: 'hard',
  tags: ['graph'],
  description: `You are given a 0-indexed 2D integer array \`grid\` of size \`m x n\`. Each cell is either \`0\` (empty) or \`1\` (obstacle). Return the **minimum number of obstacles** to remove so you can move from the upper-left corner \`(0, 0)\` to the lower-right corner \`(m-1, n-1)\`.

You can move up, down, left, or right in one step.`,
  constraints: [
    '`m == grid.length`',
    '`n == grid[i].length`',
    '`1 <= m, n <= 10^5`',
    '`2 <= m * n <= 10^5`',
    '`grid[i][j]` is either `0` or `1`',
    '`grid[0][0] == grid[m-1][n-1] == 0`',
  ],
  examples: [
    {
      input: 'grid = [[0,1,1],[1,1,0],[1,1,0]]',
      output: '2',
      explanation: 'Remove obstacles at (0,1) and (1,1) (or equivalent 2-removal path).',
    },
    {
      input: 'grid = [[0,1,0,0,0],[0,1,0,1,0],[0,0,0,1,0]]',
      output: '0',
      explanation: 'A path of all zeros exists.',
    },
  ],
  hints: [
    'Model as a 0-1 BFS (deque-based BFS): moving to an empty cell (0) costs 0, moving to an obstacle (1) costs 1.',
    'Use a deque: push (cost+0, nr, nc) to the front for free moves, push (cost+1, nr, nc) to the back for obstacle removals.',
    'dist[r][c] = minimum obstacles removed to reach (r,c). Initialize dist[0][0]=0, all others = infinity.',
  ],
  functionName: 'minimumObstacles',
  params: ['grid'],
  starterCode: {
    javascript: `function minimumObstacles(grid) {

}`,
    python: `def minimumObstacles(grid):
    pass`,
  },
  visibleTests: [
    { args: [[[0,1,1],[1,1,0],[1,1,0]]], expected: 2 },
    { args: [[[0,1,0,0,0],[0,1,0,1,0],[0,0,0,1,0]]], expected: 0 },
  ],
  hiddenTests: [
    { args: [[[0,0,0],[0,1,0],[0,0,0]]], expected: 0 },
    { args: [[[0,1,1],[1,1,0]]], expected: 2 },
    { args: [[[0,0],[0,0]]], expected: 0 },
    { args: [[[0,1,0],[1,1,1],[0,1,0]]], expected: 2 },
  ],
};
