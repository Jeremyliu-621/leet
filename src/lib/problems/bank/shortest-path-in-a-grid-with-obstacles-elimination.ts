import type { Problem } from '../types';

export const problem: Problem = {
  id: 'shortest-path-in-a-grid-with-obstacles-elimination',
  title: 'Shortest Path in a Grid with Obstacles Elimination',
  difficulty: 'hard',
  tags: ['arrays', 'shortest-path'],
  description: `You are given an \`m x n\` integer matrix \`grid\` where each cell is either \`0\` (empty) or \`1\` (obstacle). You can move up, down, left, or right from and to an empty cell in one step.

Return the **minimum** number of steps to walk from the upper left corner \`(0, 0)\` to the lower right corner \`(m - 1, n - 1)\` given that you can eliminate **at most** \`k\` obstacles. If it is not possible to find such walk, return \`-1\`.`,
  constraints: [
    'm == grid.length',
    'n == grid[i].length',
    '1 <= m, n <= 40',
    '1 <= k <= m * n',
    'grid[i][j] is either 0 or 1',
    'grid[0][0] == grid[m - 1][n - 1] == 0',
  ],
  examples: [
    {
      input: 'grid = [[0,0,0],[1,1,0],[0,0,0],[0,1,1],[0,0,0]], k = 1',
      output: '6',
      explanation: 'One optimal path: (0,0)→(0,1)→(0,2)→(1,2)→(2,2)→(3,2)→(4,2)→(4,1)→(4,0), but that is 8. With k=1 eliminating the obstacle at (3,2): (0,0)→(0,1)→(0,2)→(1,2)→(2,2)→(2,1)→(2,0)→(3,0)→(4,0) = 8 steps? Actually 6 steps going: eliminate (1,0), path through column 0.',
    },
    {
      input: 'grid = [[0,1,1],[1,1,1],[1,0,0]], k = 1',
      output: '-1',
      explanation: 'With only 1 elimination it is impossible to reach (2,2) from (0,0).',
    },
  ],
  hints: [
    'Use BFS with state (row, col, remainingEliminations).',
    'visited[r][c][k] prevents revisiting the same cell with the same or fewer remaining eliminations.',
    'When you move to a cell with a 1, decrement k. If k < 0, skip that move.',
  ],
  functionName: 'shortestPath',
  params: ['grid', 'k'],
  starterCode: {
    javascript: 'function shortestPath(grid, k) {\n  \n}\n',
    typescript: 'function shortestPath(grid: number[][], k: number): number {\n  \n}',
    python: 'def shortestPath(grid, k):\n    pass\n',
  },
  visibleTests: [
    {
      args: [[[0, 0, 0], [1, 1, 0], [0, 0, 0], [0, 1, 1], [0, 0, 0]], 1],
      expected: 6,
    },
    {
      args: [[[0, 1, 1], [1, 1, 1], [1, 0, 0]], 1],
      expected: -1,
    },
  ],
  hiddenTests: [
    { args: [[[0, 0], [0, 0]], 0], expected: 2 },
    { args: [[[0]], 0], expected: 0 },
    {
      args: [[[0, 1, 0, 0], [0, 0, 1, 0], [0, 0, 0, 0]], 1],
      expected: 5,
    },
    {
      args: [[[0, 1, 1, 1, 0], [0, 0, 0, 1, 0], [1, 1, 0, 1, 0]], 2],
      expected: 6,
    },
  ],
};
