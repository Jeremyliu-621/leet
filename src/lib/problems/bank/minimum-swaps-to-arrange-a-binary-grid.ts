import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-swaps-to-arrange-a-binary-grid',
  title: 'Minimum Swaps to Arrange a Binary Grid',
  difficulty: 'medium',
  tags: ['arrays', 'simulation'],
  description: `Given an \`n × n\` binary \`grid\`, in one step you may choose any two adjacent rows of the grid and swap them.

Return the **minimum** number of steps needed to arrange the grid so that all the cells above the main diagonal are zero. If it is not possible, return \`-1\`.

A cell \`grid[i][j]\` is above the main diagonal if \`j > i\`.

For example, for \`n = 3\`, the target upper-right triangle (above diagonal) looks like:
\`\`\`
* 0 0
* * 0
* * *
\`\`\`
where \`*\` can be \`0\` or \`1\`.`,
  constraints: [
    'n == grid.length',
    'n == grid[i].length',
    '1 <= n <= 200',
    'grid[i][j] is 0 or 1',
  ],
  examples: [
    {
      input: 'grid = [[0,0,1],[0,1,1],[1,1,1]]',
      output: '-1',
      explanation: 'No row has enough trailing zeros to satisfy the upper-triangle constraint.',
    },
    {
      input: 'grid = [[1,0,0],[1,1,0],[1,1,1]]',
      output: '0',
      explanation: 'Already arranged correctly. Row 0 has 2 trailing zeros, row 1 has 1.',
    },
    {
      input: 'grid = [[0,0,1],[0,1,0],[1,0,0]]',
      output: '3',
      explanation: 'Row with 2 trailing zeros must bubble up to position 0 (2 swaps), then row with 1 trailing zero to position 1 (1 swap). Total = 3.',
    },
  ],
  hints: [
    'For row i to satisfy the upper-triangle constraint, it must have at least n-1-i trailing zeros.',
    'Greedy: for each row i, find the nearest row at or below i that has enough trailing zeros, and swap it up.',
    'If no such row exists for some position i, return -1.',
  ],
  functionName: 'minSwaps',
  params: ['grid'],
  starterCode: {
    javascript: `function minSwaps(grid) {
  // your code here
}`,
    typescript: `function minSwaps(grid: number[][]): number {
  // your code here
}`,
    python: `def minSwaps(grid):
    # your code here
    pass`,
  },
  visibleTests: [
    { args: [[[0,0,1],[0,1,1],[1,1,1]]], expected: -1 },
    { args: [[[1,0,0],[1,1,0],[1,1,1]]], expected: 0 },
    { args: [[[0,0,1],[0,1,0],[1,0,0]]], expected: 3 },
    { args: [[[0,1],[1,0]]], expected: 1 },
    { args: [[[1,0],[0,1]]], expected: 0 },
  ],
  hiddenTests: [
    { args: [[[1,1,1,0],[1,1,0,0],[1,0,0,0],[0,0,0,0]]], expected: 3 },
    { args: [[[1,1,0],[0,0,1],[1,0,0]]], expected: 2 },
    { args: [[[1,1,1],[0,1,0],[0,0,1]]], expected: -1 },
    { args: [[[1]]], expected: 0 },
    { args: [[[1,1],[1,0]]], expected: 1 },
    { args: [[[0,0,0,0],[1,0,0,0],[1,1,0,0],[1,1,1,0]]], expected: 0 },
    { args: [[[1,0,0,0],[0,0,0,0],[1,1,0,0],[1,1,1,0]]], expected: 0 },
    { args: [[[0,0],[0,0]]], expected: 0 },
    { args: [[[0,1,0],[1,0,0],[0,0,1]]], expected: 1 },
    { args: [[[1,1,0,0],[0,1,0,0],[1,0,0,1],[1,0,0,0]]], expected: 3 },
  ],
};
