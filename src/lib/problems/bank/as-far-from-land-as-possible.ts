import type { Problem } from '../types';

export const problem: Problem = {
  id: 'as-far-from-land-as-possible',
  title: 'As Far from Land as Possible',
  difficulty: 'medium',
  tags: ['graph'],
  description: `Given an \`n x n\` grid containing only values \`0\` (water) and \`1\` (land), find a **water cell** such that its distance to the nearest land cell is **maximized** and return that maximum distance. The distance used is the **Manhattan distance**: \`|x1 - x2| + |y1 - y2|\`.\n\nReturn \`-1\` if no water or no land cells exist.`,
  constraints: [
    'n == grid.length',
    'n == grid[i].length',
    '1 <= n <= 100',
    'grid[i][j] is either 0 or 1',
  ],
  examples: [
    {
      input: 'grid = [[1,0,1],[0,0,0],[1,0,1]]',
      output: '2',
      explanation: 'The water cell at (1,1) has the maximum distance of 2 to any land cell.',
    },
    {
      input: 'grid = [[1,0,0],[0,0,0],[0,0,0]]',
      output: '4',
      explanation: 'The water cell at (2,2) has the maximum distance of 4 to the land cell at (0,0).',
    },
  ],
  hints: [
    'This is a classic multi-source BFS problem. Start BFS from all land cells simultaneously (push all land cells into queue at distance 0).',
    'Expand BFS wave by wave. The last water cell to be reached is the farthest one. Track the maximum distance encountered.',
    'Initialize a distance array with -1 for water and 0 for land. BFS processes each cell once. Return the maximum distance found, or -1 if no water or no land exists.',
  ],
  functionName: 'maxDistance',
  params: ['grid'],
  starterCode: {
    javascript: `function maxDistance(grid) {\n  // your code here\n}\n`,
    python: `def maxDistance(grid):\n    # your code here\n    pass\n`,
  },
  visibleTests: [
    { args: [[[1,0,1],[0,0,0],[1,0,1]]], expected: 2 },
    { args: [[[1,0,0],[0,0,0],[0,0,0]]], expected: 4 },
    { args: [[[1,1,1],[1,1,1],[1,1,1]]], expected: -1 },
  ],
  hiddenTests: [
    { args: [[[0,0,0],[0,0,0],[0,0,0]]], expected: -1 },
    { args: [[[1,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,1]]], expected: 3 },
    { args: [[[1,0],[0,0]]], expected: 2 },
    { args: [[[0,1],[0,0]]], expected: 2 },
    { args: [[[1,1],[0,1]]], expected: 1 },
    { args: [[[1,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,1]]], expected: 4 },
  ],
};
