import type { Problem } from '../types';

export const problem: Problem = {
  id: 'shortest-bridge',
  title: 'Shortest Bridge',
  difficulty: 'hard',
  tags: ['graph'],
  description: `You are given an \`n x n\` binary matrix \`grid\` where \`1\` represents land and \`0\` represents water.

An **island** is a 4-directionally connected group of \`1\`s not connected to any other \`1\`s.

There are **exactly two islands** in \`grid\`.

You may change \`0\`s to \`1\`s to connect the two islands to form **one island**.

Return the **smallest number of \`0\`s you must flip** to connect the two islands.`,
  constraints: [
    'n == grid.length == grid[i].length',
    '2 <= n <= 100',
    'grid[i][j] is either 0 or 1',
    'There are exactly two islands in grid',
  ],
  examples: [
    {
      input: 'grid = [[0,1],[1,0]]',
      output: '1',
    },
    {
      input: 'grid = [[0,1,0],[0,0,0],[0,0,1]]',
      output: '2',
    },
    {
      input: 'grid = [[1,1,1,1,1],[1,0,0,0,1],[1,0,1,0,1],[1,0,0,0,1],[1,1,1,1,1]]',
      output: '1',
    },
  ],
  hints: [
    'Level 1: DFS to mark all cells of the first island (color them 2). Then BFS from all cells of the first island simultaneously — expanding outward layer by layer. The first time we reach a cell with value 1 (the second island), return the step count.',
    'Level 2: Find the first land cell (any 1). DFS from it, coloring first island as 2 and adding all its cells to a BFS queue. Then BFS: expand queue, incrementing distance. First time we see a 1 cell, that distance is the answer.',
    'Level 3: DFS paints first island 2 and seeds BFS queue. BFS expands each frontier: dist++, visits 0 cells (add to queue as 2), stops on 1 cell returning dist.',
  ],
  functionName: 'shortestBridge',
  params: ['grid'],
  starterCode: {
    javascript: 'function shortestBridge(grid) {\n  // your code here\n}\n',
    python: 'def shortestBridge(grid):\n    # your code here\n    pass\n',
  },
  visibleTests: [
    { args: [[[0, 1], [1, 0]]], expected: 1 },
    { args: [[[0, 1, 0], [0, 0, 0], [0, 0, 1]]], expected: 2 },
    { args: [[[1, 1, 1, 1, 1], [1, 0, 0, 0, 1], [1, 0, 1, 0, 1], [1, 0, 0, 0, 1], [1, 1, 1, 1, 1]]], expected: 1 },
  ],
  hiddenTests: [
    { args: [[[0, 1, 0], [0, 0, 0], [1, 0, 0]]], expected: 2 },
    { args: [[[1, 0], [0, 1]]], expected: 1 },
    { args: [[[1, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 1]]], expected: 7 },
  ],
};
