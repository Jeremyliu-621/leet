import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-the-minimum-area-to-cover-all-ones-ii',
  title: 'Find the Minimum Area to Cover All Ones II',
  difficulty: 'hard',
  tags: ['arrays', 'binary-search'],
  description: `You are given a 2D **binary** array \`grid\`. You need to find **3 non-overlapping rectangles** with **horizontal** and **vertical** sides such that all the 1s in \`grid\` are covered by these rectangles.

Return the **minimum** possible sum of the area of these rectangles.

Note that the rectangles are allowed to cover cells that do not contain 1s, and the 3 rectangles must cover **all** the 1s.`,
  constraints: [
    '1 <= grid.length, grid[i].length <= 30',
    'grid[i][j] is either 0 or 1.',
    'There are at least 3 cells with the value of 1 in the grid.',
  ],
  examples: [
    {
      input: 'grid = [[1,0,1],[1,1,1]]',
      output: '5',
      explanation: 'One optimal split: top-left [1], top-right [1], bottom [1,1,1]. Areas: 1+1+3=5.',
    },
    {
      input: 'grid = [[1,0,0],[0,1,0],[0,0,1]]',
      output: '3',
      explanation: 'Three 1×1 rectangles each covering one diagonal cell. 1+1+1=3.',
    },
  ],
  hints: [
    'Level 1: Try all 6 ways to partition the grid into 3 non-overlapping axis-aligned rectangles: (a) 2 horizontal cuts, (b) 2 vertical cuts, (c) 1 horizontal + 1 vertical in 4 orientations.',
    'Level 2: For each partition, compute the minimum bounding box of all 1s in each sub-region. If a region has no 1s, its area is 0. The total area = sum of the 3 bounding boxes.',
    'Level 3: Precompute a helper `minBox(r1,c1,r2,c2)` that finds min bounding box area of 1s in that subgrid. Then enumerate: 2 horizontal splits i,j in [0,rows]; 2 vertical splits; mixed splits.',
  ],
  functionName: 'minimumSum',
  params: ['grid'],
  starterCode: {
    javascript: 'function minimumSum(grid) {\n  // your code here\n}\n',
    typescript: 'function minimumSum(grid: number[][]): number {\n  // your code here\n}\n',
    python: 'def minimumSum(grid):\n    # your code here\n    pass\n',
  },
  visibleTests: [
    {
      args: [[[1,0,1],[1,1,1]]],
      expected: 5,
    },
    {
      args: [[[1,0,0],[0,1,0],[0,0,1]]],
      expected: 3,
    },
  ],
  hiddenTests: [
    {
      args: [[[1,0,0],[0,0,0],[0,0,1]]],
      expected: 2,
    },
    {
      args: [[[1,1,0,1,1]]],
      expected: 4,
    },
    {
      args: [[[1,0],[0,1],[1,0]]],
      expected: 3,
    },
  ],
};
