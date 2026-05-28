import type { Problem } from '../types';

export const problem: Problem = {
  id: 'number-of-closed-islands',
  title: 'Number of Closed Islands',
  difficulty: 'medium',
  tags: ['graph', 'arrays'],
  description: `Given a 2D grid consisting of \`0\`s (land) and \`1\`s (water).

An **island** is a maximal 4-directionally connected group of \`0\`s and a **closed island** is an island **totally** (all left, top, right, bottom) surrounded by \`1\`s.

Return the number of **closed islands**.`,
  constraints: ['1 <= grid.length, grid[0].length <= 100', 'grid[i][j] is 0 or 1'],
  examples: [
    {
      input: 'grid = [[1,1,1,1,1,1,1,0],[1,0,0,0,0,1,1,0],[1,0,1,0,1,1,1,0],[1,0,0,0,0,1,0,1],[1,1,1,1,1,1,1,0]]',
      output: '2',
    },
    {
      input: 'grid = [[0,0,1,0,0],[0,1,0,1,0],[0,1,1,1,0],[0,0,0,0,0]]',
      output: '1',
    },
  ],
  hints: [
    'First, use DFS/BFS from all boundary land cells (0s) to mark reachable land as visited.',
    'Then count the remaining unvisited connected components of 0s — each is a closed island.',
    'Alternatively, DFS from each unvisited 0: return false if you reach a boundary, true if fully enclosed.',
  ],
  functionName: 'closedIsland',
  params: ['grid'],
  starterCode: {
    javascript: 'function closedIsland(grid) {\n\n}\n',
    python: 'def closedIsland(grid):\n    pass\n',
  },
  visibleTests: [
    { args: [[[1,1,1,1,1,1,1,0],[1,0,0,0,0,1,1,0],[1,0,1,0,1,1,1,0],[1,0,0,0,0,1,0,1],[1,1,1,1,1,1,1,0]]], expected: 2 },
    { args: [[[0,0,1,0,0],[0,1,0,1,0],[0,1,1,1,0],[0,0,0,0,0]]], expected: 1 },
  ],
  hiddenTests: [
    { args: [[[1,1,1],[1,0,1],[1,1,1]]], expected: 1 },
    { args: [[[0,1,1,0],[1,1,1,1],[1,1,1,1],[0,1,1,0]]], expected: 0 },
    { args: [[[1,1,1,1],[1,0,0,1],[1,0,0,1],[1,1,1,1]]], expected: 1 },
  ],
};
