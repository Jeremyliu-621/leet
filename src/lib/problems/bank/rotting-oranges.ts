import type { Problem } from '../types';

export const problem: Problem = {
  id: 'rotting-oranges',
  title: 'Rotting Oranges',
  difficulty: 'medium',
  tags: ['graph'],
  description: `You are given an \`m x n\` grid where each cell can have one of three values:
- \`0\` representing an **empty** cell
- \`1\` representing a **fresh** orange
- \`2\` representing a **rotten** orange

Every minute, any fresh orange that is **4-directionally adjacent** to a rotten orange becomes rotten.

Return the **minimum number of minutes** that must elapse until no cell has a fresh orange. If this is impossible, return \`-1\`.

**Approach:** Multi-source BFS starting from all initially-rotten oranges simultaneously. Count minutes elapsed. After BFS, if any fresh orange remains, return \`-1\`.`,
  constraints: [
    'm == grid.length',
    'n == grid[i].length',
    '1 <= m, n <= 10',
    'grid[i][j] is 0, 1, or 2',
  ],
  examples: [
    {
      input: 'grid = [[2,1,1],[1,1,0],[0,1,1]]',
      output: '4',
      explanation: 'After 4 minutes all oranges are rotten.',
    },
    {
      input: 'grid = [[2,1,1],[0,1,1],[1,0,1]]',
      output: '-1',
      explanation: 'The bottom-left fresh orange can never be reached.',
    },
  ],
  hints: [
    'Enqueue all initially-rotten oranges. BFS outward level by level — each level = 1 minute.',
    'Decrement a fresh-orange counter when converting a fresh orange to rotten.',
    'After BFS, if the fresh-orange counter is still > 0, return -1; otherwise return the minute count.',
  ],
  functionName: 'orangesRotting',
  params: ['grid'],
  preamble: {},
  starterCode: {
    javascript: 'function orangesRotting(grid) {\n  \n}\n',
    python: 'def orangesRotting(grid):\n    pass\n',
  },
  visibleTests: [
    { args: [[[2, 1, 1], [1, 1, 0], [0, 1, 1]]], expected: 4 },
    { args: [[[2, 1, 1], [0, 1, 1], [1, 0, 1]]], expected: -1 },
    { args: [[[0, 2]]], expected: 0 },
  ],
  hiddenTests: [
    { args: [[[2, 2], [2, 2]]], expected: 0 },
    { args: [[[1]]], expected: -1 },
    { args: [[[2, 1, 1], [1, 1, 1], [0, 1, 2]]], expected: 2 },
    { args: [[[1, 2]]], expected: 1 },
  ],
};
