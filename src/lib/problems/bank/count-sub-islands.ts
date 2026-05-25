import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-sub-islands',
  title: 'Count Sub Islands',
  difficulty: 'medium',
  tags: ['graph', 'arrays'],
  description: `You are given two \`m x n\` binary matrices \`grid1\` and \`grid2\` containing only \`0\`'s (representing water) and \`1\`'s (representing land). An **island** is a group of \`1\`'s connected **4-directionally** (horizontal or vertical).

An island in \`grid2\` is considered a **sub-island** if there is an island in \`grid1\` that contains **all** the cells that make up this island in \`grid2\`.

Return the **number** of islands in \`grid2\` that are considered **sub-islands**.`,
  constraints: [
    'm == grid1.length == grid2.length',
    'n == grid1[i].length == grid2[i].length',
    '1 <= m, n <= 500',
    'grid1[i][j] and grid2[i][j] are either 0 or 1',
  ],
  examples: [
    {
      input: 'grid1 = [[1,1,1,0,0],[0,1,1,1,1],[0,0,0,0,0],[1,0,0,0,0],[1,1,0,1,1]], grid2 = [[1,1,1,0,0],[0,0,1,1,1],[0,1,0,0,0],[1,0,1,1,1],[0,1,0,1,0]]',
      output: '3',
    },
    {
      input: 'grid1 = [[1,0,1,0,1],[1,1,1,1,1],[0,0,0,0,0],[1,1,1,1,1],[1,0,1,0,1]], grid2 = [[0,0,0,0,0],[1,1,1,1,1],[0,1,0,1,0],[0,1,0,1,0],[1,0,0,0,1]]',
      output: '2',
    },
  ],
  hints: [
    'DFS/BFS over each island in grid2.',
    'An island in grid2 is a sub-island only if every cell it covers is also 1 in grid1.',
    'Always fully explore each island (don\'t short-circuit) to ensure all cells are marked visited.',
  ],
  functionName: 'countSubIslands',
  params: ['grid1', 'grid2'],
  starterCode: {
    javascript: 'function countSubIslands(grid1, grid2) {\n\n}\n',
    python: 'def countSubIslands(grid1, grid2):\n    pass\n',
  },
  visibleTests: [
    {
      args: [
        [[1, 1, 1, 0, 0], [0, 1, 1, 1, 1], [0, 0, 0, 0, 0], [1, 0, 0, 0, 0], [1, 1, 0, 1, 1]],
        [[1, 1, 1, 0, 0], [0, 0, 1, 1, 1], [0, 1, 0, 0, 0], [1, 0, 1, 1, 1], [0, 1, 0, 1, 0]],
      ],
      expected: 3,
    },
    {
      args: [
        [[1, 0, 1, 0, 1], [1, 1, 1, 1, 1], [0, 0, 0, 0, 0], [1, 1, 1, 1, 1], [1, 0, 1, 0, 1]],
        [[0, 0, 0, 0, 0], [1, 1, 1, 1, 1], [0, 1, 0, 1, 0], [0, 1, 0, 1, 0], [1, 0, 0, 0, 1]],
      ],
      expected: 2,
    },
  ],
  hiddenTests: [
    { args: [[[1]], [[1]]], expected: 1 },
    { args: [[[0]], [[1]]], expected: 0 },
    { args: [[[1, 1], [1, 1]], [[1, 0], [0, 1]]], expected: 2 },
    { args: [[[1, 0], [0, 1]], [[1, 1], [0, 0]]], expected: 0 },
  ],
};
