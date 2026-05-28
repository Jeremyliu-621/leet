import type { Problem } from '../types';

export const problem: Problem = {
  id: 'max-area-of-island',
  title: 'Max Area of Island',
  difficulty: 'medium',
  tags: ['graph'],
  description: `You are given an \`m x n\` binary matrix \`grid\`. An **island** is a group of \`1\`s (land) connected **4-directionally** (horizontally or vertically). You may assume all four edges of the grid are surrounded by water.

Return the **maximum area** of an island in \`grid\`. If there is no island, return \`0\`.

**Approach:** DFS or BFS from each unvisited \`1\` cell. Count the cells reachable from each starting cell; track the maximum across all islands.`,
  constraints: [
    'm == grid.length',
    'n == grid[i].length',
    '1 <= m, n <= 50',
    'grid[i][j] is 0 or 1',
  ],
  examples: [
    {
      input: 'grid = [[0,0,1,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,1,1,0,1,0,0,0,0,0,0,0,0],[0,1,0,0,1,1,0,0,1,0,1,0,0],[0,1,0,0,1,1,0,0,1,1,1,0,0],[0,0,0,0,0,0,0,0,0,0,1,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,0,0,0,0,0,0,1,1,0,0,0,0]]',
      output: '6',
      explanation: 'The answer is not 11 — you can only count the area of islands.',
    },
    {
      input: 'grid = [[0,0,0,0,0,0,0,0]]',
      output: '0',
      explanation: 'No land cells.',
    },
  ],
  hints: [
    'DFS from each unvisited `1`: mark visited cells as `0` (or use a separate visited set) to avoid revisiting.',
    'Count every cell visited in a DFS call — that\'s the island\'s area.',
    'Return 1 + dfs(up) + dfs(down) + dfs(left) + dfs(right) from each cell.',
  ],
  functionName: 'maxAreaOfIsland',
  params: ['grid'],
  preamble: {},
  starterCode: {
    javascript: 'function maxAreaOfIsland(grid) {\n  \n}\n',
    python: 'def maxAreaOfIsland(grid):\n    pass\n',
  },
  visibleTests: [
    {
      args: [
        [
          [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
          [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0],
          [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
        ],
      ],
      expected: 6,
    },
    { args: [[[0, 0, 0, 0, 0, 0, 0, 0]]], expected: 0 },
    { args: [[[1, 1], [1, 0]]], expected: 3 },
  ],
  hiddenTests: [
    { args: [[[1]]], expected: 1 },
    { args: [[[1, 0], [0, 1]]], expected: 1 },
    { args: [[[1, 1, 1], [0, 1, 0], [1, 1, 1]]], expected: 7 },
    { args: [[[1, 1, 0, 0], [1, 1, 0, 0], [0, 0, 1, 1], [0, 0, 1, 1]]], expected: 4 },
  ],
};
