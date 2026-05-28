import type { Problem } from '../types';

export const problem: Problem = {
  id: 'bricks-falling-when-hit',
  title: 'Bricks Falling When Hit',
  difficulty: 'hard',
  tags: ['simulation', 'union-find', 'arrays'],
  description: `You are given an \`m x n\` binary grid, where each \`1\` represents a brick and each \`0\` represents an empty space. A brick is **stable** if:
- It is directly connected to the **top** of the grid, or
- At least one other brick in its four adjacent cells is stable.

You are given an array \`hits\`, the sequence of bricks you will erase (one per step). Each step erases the brick at position \`hits[i] = [r_i, c_i]\` (if there is one). After each erasure, some bricks may no longer be stable and will **fall**.

Return an array \`result\`, where \`result[i]\` is the number of bricks that **fall** after the \`i\`-th erasure (not counting the erased brick itself, which just disappears).`,
  constraints: [
    'm == grid.length',
    'n == grid[0].length',
    '1 <= m, n <= 200',
    '1 <= hits.length <= 4 * 10^4',
    '0 <= hits[i][0] < m',
    '0 <= hits[i][1] < n',
    'grid[i][j] is 0 or 1',
    'All (r_i, c_i) are unique',
  ],
  examples: [
    {
      input: 'grid = [[1,0,0,0],[1,1,1,0]], hits = [[1,0]]',
      output: '[2]',
      explanation:
        'Erasing (1,0) disconnects bricks (1,1) and (1,2) from the top. Both fall.',
    },
    {
      input: 'grid = [[1,0,0,0],[1,1,0,0]], hits = [[1,1],[1,0]]',
      output: '[0,0]',
      explanation:
        'Hit (1,1): brick (1,0) remains connected via the top row. 0 fall. Hit (1,0): it was already gone effectively.',
    },
  ],
  hints: [
    'Process hits in **reverse order**: instead of removing bricks, add them back one at a time. Use Union-Find with a virtual "top" node that connects to all bricks in row 0.',
    'Before reversing, erase all hits from the grid. Build the initial Union-Find state. Then re-add each hit brick (in reverse); after each union, the number of bricks that would have fallen when that brick was removed equals (new top-component size) - (old top-component size) - 1.',
    '```js\nfunction hitBricks(grid, hits) {\n  const m = grid.length, n = grid[0].length;\n  const g = grid.map(r => [...r]);\n  for (const [r, c] of hits) g[r][c] = 0;\n  const TOP = m * n;\n  const parent = Array.from({length: m*n+1}, (_, i) => i);\n  const size = new Array(m*n+1).fill(1);\n  // build UF, union, then reverse hits...\n}\n```',
  ],
  functionName: 'hitBricks',
  params: ['grid', 'hits'],
  starterCode: {
    javascript: 'function hitBricks(grid, hits) {\n  \n}\n',
    typescript: "function hitBricks(grid: number[][], hits: number[][]): number[] {\n  \n}",

    python: 'def hitBricks(grid, hits):\n    pass\n',
  },
  visibleTests: [
    {
      args: [[[1, 0, 0, 0], [1, 1, 1, 0]], [[1, 0]]],
      expected: [2],
    },
    {
      args: [[[1, 0, 0, 0], [1, 1, 0, 0]], [[1, 1], [1, 0]]],
      expected: [0, 0],
    },
  ],
  hiddenTests: [
    {
      args: [[[1], [1], [1], [1], [1]], [[3, 0], [4, 0], [1, 0], [2, 0], [0, 0]]],
      expected: [1, 0, 1, 0, 0],
    },
    {
      args: [[[1, 1, 1], [0, 1, 0], [0, 1, 0]], [[0, 2]]],
      expected: [0],
    },
    {
      args: [[[1, 0], [1, 1]], [[0, 0]]],
      expected: [2],
    },
    {
      args: [[[0, 1, 1], [1, 1, 1]], [[0, 0]]],
      expected: [0],
    },
  ],
};
