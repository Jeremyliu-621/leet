import type { Problem } from '../types';

export const problem: Problem = {
  id: 'number-of-black-blocks',
  title: 'Number of Black Blocks',
  difficulty: 'medium',
  tags: ['arrays', 'hash-map'],
  description: `You are given two integers \`m\` and \`n\` representing the dimensions of a **0-indexed** \`m x n\` grid. You are also given a 2D integer array \`coordinates\` where \`coordinates[i] = [x, y]\` indicates that the cell at grid \`[x][y]\` is **black**. All cells not in \`coordinates\` are **white**.

A **block** is a \`2 x 2\` subgrid of the grid. Return a **0-indexed** integer array \`arr\` of size \`5\` where \`arr[i]\` is the number of blocks that contain exactly \`i\` black cells.`,
  constraints: [
    '2 <= m, n <= 10^5',
    '0 <= coordinates.length <= 10^4',
    'coordinates[i].length == 2',
    '0 <= coordinates[i][0] < m',
    '0 <= coordinates[i][1] < n',
    'All coordinates are distinct.',
  ],
  examples: [
    {
      input: 'm = 3, n = 3, coordinates = [[0,0]]',
      output: '[3,1,0,0,0]',
      explanation:
        'The 4 blocks in a 3×3 grid start at (0,0), (0,1), (1,0), (1,1). Only the block at (0,0) contains the black cell. So arr[0]=3, arr[1]=1.',
    },
    {
      input: 'm = 3, n = 3, coordinates = [[0,0],[1,1],[0,2]]',
      output: '[0,2,2,0,0]',
      explanation:
        'Block (0,0): cells (0,0),(0,1),(1,0),(1,1) → 2 black. Block (0,1): (0,1),(0,2),(1,1),(1,2) → 2 black. Block (1,0): (1,0),(1,1),(2,0),(2,1) → 1 black. Block (1,1): (1,1),(1,2),(2,1),(2,2) → 1 black.',
    },
  ],
  hints: [
    'Level 1: A 2×2 block starts at (r,c) and covers cells (r,c), (r,c+1), (r+1,c), (r+1,c+1). Each black cell at (x,y) contributes to blocks starting at (x-1,y-1), (x-1,y), (x,y-1), (x,y).',
    'Level 2: Use a Map to count how many black cells fall in each block. For each black cell (x,y), increment the count for each valid block corner (r,c) where r ∈ [x-1,x] and c ∈ [y-1,y], with r ≥ 0, c ≥ 0, r < m-1, c < n-1.',
    'Level 3: Total blocks = (m-1)*(n-1). Sum map values for arr[1..4]. arr[0] = total - sum(arr[1..4]).',
  ],
  functionName: 'countBlackBlocks',
  params: ['m', 'n', 'coordinates'],
  starterCode: {
    javascript: 'function countBlackBlocks(m, n, coordinates) {\n  // your code here\n}\n',
    typescript: 'function countBlackBlocks(m: number, n: number, coordinates: number[][]): number[] {\n  // your code here\n}\n',
    python: 'def countBlackBlocks(m, n, coordinates):\n    # your code here\n    pass\n',
  },
  visibleTests: [
    {
      args: [3, 3, [[0,0]]],
      expected: [3,1,0,0,0],
    },
    {
      args: [3, 3, [[0,0],[1,1],[0,2]]],
      expected: [0,2,2,0,0],
    },
  ],
  hiddenTests: [
    {
      args: [2, 2, []],
      expected: [1,0,0,0,0],
    },
    {
      args: [2, 2, [[0,0],[0,1],[1,0],[1,1]]],
      expected: [0,0,0,0,1],
    },
    {
      args: [4, 4, [[0,0],[1,1]]],
      expected: [5,3,1,0,0],
    },
    {
      args: [3, 3, []],
      expected: [4,0,0,0,0],
    },
  ],
};
