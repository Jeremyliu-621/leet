import type { Problem } from '../types';

export const problem: Problem = {
  id: 'shortest-path-in-grid-with-obstacles-elimination',
  title: 'Shortest Path in a Grid with Obstacles Elimination',
  difficulty: 'hard',
  tags: ['shortest-path', 'graph', 'arrays'],
  description: `You are given an \`m x n\` integer matrix \`grid\` where each cell is either \`0\` (empty) or \`1\` (obstacle). In one step, you can move up, down, left, or right from and to an empty cell.

Return the minimum number of steps to walk from the upper left corner \`(0, 0)\` to the lower right corner \`(m - 1, n - 1)\` given that you can eliminate at most \`k\` obstacles. If it is not possible to find such a walk, return \`-1\`.`,
  constraints: [
    'm == grid.length',
    'n == grid[i].length',
    '1 <= m, n <= 40',
    '1 <= k <= m * n',
    'grid[i][j] == 0 or 1',
    'grid[0][0] == grid[m - 1][n - 1] == 0',
  ],
  examples: [
    {
      input: 'grid = [[0,0,0],[1,1,0],[0,0,0],[0,1,1],[0,0,0]], k = 1',
      output: '6',
      explanation: 'The shortest path without any obstacle elimination has 10 steps. The shortest path with one elimination is: (0,0)→(1,0) (eliminate obstacle) →(2,0)→(3,0)→(4,0)→(4,1)→(4,2), which is 6 steps.',
    },
    {
      input: 'grid = [[0,1,1],[1,1,1],[1,0,0]], k = 1',
      output: '-1',
      explanation: 'We need to eliminate at least 4 obstacles to find a path. k = 1 is not enough.',
    },
  ],
  hints: [
    'Use BFS where each state is (row, col, obstacles_remaining). The BFS level corresponds to the number of steps taken.',
    'A state (r, c, k) is valid if 0 <= r < m, 0 <= c < n, and k >= 0. Mark a state as visited once you first reach it to avoid revisiting.',
    'Initialize the queue with (0, 0, k). For each neighbor: if it is a 0-cell, push (nr, nc, k) if not visited; if it is a 1-cell and k > 0, push (nr, nc, k-1) if that state is not visited.',
  ],
  functionName: 'shortestPath',
  params: ['grid', 'k'],
  starterCode: {
    javascript: 'function shortestPath(grid, k) {\n  \n}\n',
    typescript: "function shortestPath(grid: number[][], k: number): number {\n  \n}",

    python: 'def shortestPath(grid, k):\n    pass\n',
  },
  visibleTests: [
    {
      args: [[[0,0,0],[1,1,0],[0,0,0],[0,1,1],[0,0,0]], 1],
      expected: 6,
    },
    {
      args: [[[0,1,1],[1,1,1],[1,0,0]], 1],
      expected: -1,
    },
  ],
  hiddenTests: [
    // 1x1 grid: already at destination
    { args: [[[0]], 0], expected: 0 },
    // 1x2 grid: one step right, no obstacle
    { args: [[[0,0]], 0], expected: 1 },
    // 3x3 grid with two columns of obstacles; go around the bottom
    // grid: 0 1 0 / 0 1 0 / 0 0 0 — path (0,0)→(1,0)→(2,0)→(2,1)→(2,2) = 4 steps, no elimination needed
    { args: [[[0,1,0],[0,1,0],[0,0,0]], 0], expected: 4 },
    // same grid, k=1 can also do it in 4 steps (no need to eliminate)
    { args: [[[0,1,0],[0,1,0],[0,0,0]], 1], expected: 4 },
    // 5x5 snake maze: right-down path uses 1 elimination for 8 steps (Manhattan distance)
    // grid: 0 0 0 0 0 / 1 1 1 1 0 / 0 0 0 0 0 / 0 1 1 1 1 / 0 0 0 0 0
    // path (0,0)→(0,1)→(0,2)→(0,3)→(0,4)→(1,4)→(2,4)→(3,4)[obstacle, elim]→(4,4) = 8 steps
    {
      args: [[[0,0,0,0,0],[1,1,1,1,0],[0,0,0,0,0],[0,1,1,1,1],[0,0,0,0,0]], 1],
      expected: 8,
    },
    // completely blocked path with k=0 (both adjacent cells are obstacles)
    { args: [[[0,1],[1,0]], 0], expected: -1 },
    // same grid with k=1: eliminate one obstacle, 2 steps (e.g. right to (0,1) then down to (1,1))
    { args: [[[0,1],[1,0]], 1], expected: 2 },
  ],
};
