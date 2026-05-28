import type { Problem } from '../types';

export const problem: Problem = {
  id: 'all-paths-source-to-target-backtrack',
  title: 'All Paths in Grid: Source to Target',
  difficulty: 'medium',
  tags: ['arrays', 'backtracking'],
  description: `You are given an \`m × n\` grid of \`0\`s and \`1\`s. \`0\` represents an open cell and \`1\` represents a wall. Starting at the top-left cell \`(0, 0)\` and ending at the bottom-right cell \`(m-1, n-1)\`, find **all distinct paths** from source to target.

You may only move **right** or **down** at each step. Both the source and target are guaranteed to be open (\`0\`). Return the number of distinct paths (not the paths themselves).

If no path exists, return \`0\`.`,
  constraints: [
    '1 <= m, n <= 8',
    'grid[i][j] is 0 or 1',
    'grid[0][0] == 0 and grid[m-1][n-1] == 0',
  ],
  examples: [
    {
      input: 'grid = [[0,0,0],[0,1,0],[0,0,0]]',
      output: '2',
      explanation: 'The center cell is blocked. Two paths go around it: right-right-down-down and down-down-right-right.',
    },
    {
      input: 'grid = [[0,0],[0,0]]',
      output: '2',
      explanation: 'Right-then-down, or down-then-right.',
    },
    {
      input: 'grid = [[0,1],[0,0]]',
      output: '1',
      explanation: 'Only the down-then-right path is valid.',
    },
  ],
  hints: [
    'Use backtracking (or recursion with memoization). From each cell `(r, c)`, try moving right `(r, c+1)` or down `(r+1, c)` if the cell is in bounds and not a wall.',
    'Base case: when you reach `(m-1, n-1)`, return 1 (found a path). If the current cell is out of bounds or a wall, return 0.',
    'This is equivalent to counting paths in a DAG — memoize results keyed by `(r, c)` to avoid recomputation.',
  ],
  functionName: 'countPaths',
  params: ['grid'],
  starterCode: {
    javascript: `function countPaths(grid) {\n  \n}`,
    typescript: "function countPaths(grid: number[][]): number {\n  \n}",

    python: `def countPaths(grid):\n    pass`,
  },
  visibleTests: [
    { args: [[[0,0,0],[0,1,0],[0,0,0]]], expected: 2 },
    { args: [[[0,0],[0,0]]], expected: 2 },
    { args: [[[0,1],[0,0]]], expected: 1 },
    { args: [[[0]]], expected: 1 },
  ],
  hiddenTests: [
    { args: [[[0,0,0],[0,0,0],[0,0,0]]], expected: 6 },
    { args: [[[0,1],[1,0]]], expected: 0 },
    { args: [[[0,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,0]]], expected: 4 },
    { args: [[[0,0,0,0],[0,0,0,0]]], expected: 4 },
    { args: [[[0,0,0],[1,1,0],[0,0,0]]], expected: 1 },
  ],
};
