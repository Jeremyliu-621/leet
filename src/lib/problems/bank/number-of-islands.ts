import type { Problem } from '../types';

export const problem: Problem = {
  id: 'number-of-islands',
  title: 'Number of Islands',
  difficulty: 'medium',
  tags: ['graph', 'arrays'],
  description: `Given an \`m × n\` 2D binary grid where \`"1"\` represents land and \`"0"\` represents water, return the number of islands.

An **island** is surrounded by water and is formed by connecting adjacent land cells horizontally or vertically. You may assume all four edges of the grid are surrounded by water.`,
  constraints: [
    '`1 <= m, n <= 300`',
    '`grid[i][j]` is `"0"` or `"1"`',
  ],
  examples: [
    {
      input: 'grid = [["1","1","1","1","0"],["1","1","0","1","0"],["1","1","0","0","0"],["0","0","0","0","0"]]',
      output: '1',
      explanation: 'All land cells are connected — one island.',
    },
    {
      input: 'grid = [["1","1","0","0","0"],["1","1","0","0","0"],["0","0","1","0","0"],["0","0","0","1","1"]]',
      output: '3',
      explanation: 'Three disconnected land masses.',
    },
  ],
  params: ['grid'],
  functionName: 'numIslands',
  starterCode: {
    javascript: `function numIslands(grid) {
  // DFS/BFS: count distinct connected components of "1"s
}`,
    python: `def numIslands(grid):
    # DFS/BFS: count distinct connected components of "1"s
    pass`,
  },
  hints: [
    'Iterate every cell. When you find a "1", increment the island count and immediately flood-fill the entire island to mark it as visited.',
    'Flood-fill by DFS: change "1" to "0" in the current cell, then recurse on its 4 neighbors that are "1".',
    'The number of times you start a fresh DFS sweep (not a recursive call inside one) equals the number of islands.',
  ],
  visibleTests: [
    {
      args: [[['1','1','1','1','0'],['1','1','0','1','0'],['1','1','0','0','0'],['0','0','0','0','0']]],
      expected: 1,
    },
    {
      args: [[['1','1','0','0','0'],['1','1','0','0','0'],['0','0','1','0','0'],['0','0','0','1','1']]],
      expected: 3,
    },
    {
      args: [[['0','0','0'],['0','0','0']]],
      expected: 0,
    },
  ],
  hiddenTests: [
    {
      args: [[['1']]],
      expected: 1,
    },
    {
      args: [[['1','0','1'],['0','0','0'],['1','0','1']]],
      expected: 4,
    },
    {
      args: [[['1','1','1'],['0','1','0'],['1','1','1']]],
      expected: 1,
    },
    {
      args: [[['1','0'],['0','1']]],
      expected: 2,
    },
  ],
};
