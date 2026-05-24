import type { Problem } from '../types';

export const problem: Problem = {
  id: 'swim-in-rising-water',
  title: 'Swim in Rising Water',
  difficulty: 'hard',
  tags: ['graph', 'binary-search'],
  description: `You are given an \`n x n\` integer matrix \`grid\` where \`grid[i][j]\` is the elevation at that position. Each value in \`grid\` is unique.

You want to swim from the top-left corner \`(0, 0)\` to the bottom-right corner \`(n-1, n-1)\`. At time \`t\`, you can swim from a cell to an adjacent cell (up, down, left, right) if both cells have elevation **at most** \`t\`.

Return the **minimum time** \`t\` when you can reach \`(n-1, n-1)\` from \`(0, 0)\`.`,
  constraints: [
    'n == grid.length == grid[i].length',
    '1 <= n <= 50',
    '0 <= grid[i][j] < n²',
    'Each value in grid is unique',
  ],
  examples: [
    {
      input: 'grid = [[0,2],[1,3]]',
      output: '3',
      explanation:
        'At t=3, all cells are accessible: 0→1→3 or 0→2→3. Minimum t is 3.',
    },
    {
      input:
        'grid = [[0,1,2,3,4],[24,23,22,21,5],[12,13,14,15,16],[11,17,18,19,20],[10,9,8,7,6]]',
      output: '16',
    },
  ],
  hints: [
    'Binary search on the answer `t`: can we reach (n-1,n-1) if we can visit all cells with elevation ≤ t? Check reachability with BFS or DFS.',
    'Or use a Dijkstra-like approach: the "cost" to reach a cell is the maximum elevation on the path. Use a min-heap sorted by max elevation so far.',
    'With binary search + BFS: binary search t in [grid[0][0], n²-1]. For each t, BFS from (0,0) visiting only cells with elevation ≤ t. If (n-1,n-1) is reachable, try smaller t.',
  ],
  functionName: 'swimInWater',
  params: ['grid'],
  starterCode: {
    javascript: `function swimInWater(grid) {\n\n}`,
    python: `def swimInWater(grid):\n    pass`,
  },
  visibleTests: [
    { args: [[[0, 2], [1, 3]]], expected: 3 },
    {
      args: [
        [
          [0, 1, 2, 3, 4],
          [24, 23, 22, 21, 5],
          [12, 13, 14, 15, 16],
          [11, 17, 18, 19, 20],
          [10, 9, 8, 7, 6],
        ],
      ],
      expected: 16,
    },
  ],
  hiddenTests: [
    { args: [[[0]]], expected: 0 },
    { args: [[[0, 1], [2, 3]]], expected: 3 },
    { args: [[[3, 2], [0, 1]]], expected: 3 },
    { args: [[[0, 3], [1, 2]]], expected: 2 },
  ],
};
