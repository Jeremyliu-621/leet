import type { Problem } from '../types';

export const problem: Problem = {
  id: 'ball-through-inclined-grid',
  title: 'Ball Through an Inclined Grid',
  difficulty: 'medium',
  tags: ['arrays', 'simulation'],
  description: `You have an \`m × n\` grid where each cell contains an inclined board. A board inclined to the **right** is represented by \`1\` and a board inclined to the **left** is represented by \`-1\`.

A ball is dropped from the **top** of the grid (above row 0), one per column. The ball rolls based on the inclinations it encounters:

- On a \`1\` board (\\), the ball moves to the **right** column.
- On a \`-1\` board (/), the ball moves to the **left** column.

A ball gets **stuck** (returns \`-1\`) if:
- It tries to move left from column 0 or right from column \`n-1\`.
- It encounters a **V-shape**: two adjacent boards form a valley (e.g., the current cell is \`1\` pointing right, but the cell to the right is \`-1\` pointing left — they form \\/).

For each of the \`n\` balls (one per column), simulate and return an array where \`answer[j]\` is the **column where the ball exits at the bottom**, or \`-1\` if it gets stuck.`,
  constraints: [
    '1 <= m, n <= 100',
    'grid[i][j] is either 1 or -1',
  ],
  examples: [
    {
      input: 'grid = [[1,1,1,-1,-1],[1,1,1,-1,-1],[-1,-1,-1,1,1],[1,1,1,1,-1],[-1,-1,-1,-1,-1]]',
      output: '[1,-1,-1,-1,-1]',
      explanation: 'Only the ball dropped at column 0 makes it through; it exits at column 1.',
    },
    {
      input: 'grid = [[-1]]',
      output: '[-1]',
      explanation: 'The ball immediately tries to go left from column 0 — stuck.',
    },
    {
      input: 'grid = [[1,1,1,1,1,1]]',
      output: '[1,2,3,4,5,-1]',
      explanation: 'All boards lean right. Each ball shifts one column to the right. The ball starting at column 5 tries to move to column 6 (out of bounds) and gets stuck.',
    },
  ],
  hints: [
    'For each ball, simulate its path row by row. Track the current column `col`. In each row, if `grid[row][col] === 1`, the ball wants to move right: check that `col+1 < n` and `grid[row][col+1] === 1` (otherwise V-shape or wall — stuck).',
    'Similarly for `grid[row][col] === -1` (move left): check that `col-1 >= 0` and `grid[row][col-1] === -1`. If either check fails, the ball is stuck.',
    'After passing all `m` rows without getting stuck, the ball exits at `col`. Repeat for each starting column.',
  ],
  functionName: 'findBall',
  params: ['grid'],
  starterCode: {
    javascript: `function findBall(grid) {\n  \n}`,
    python: `def findBall(grid):\n    pass`,
  },
  visibleTests: [
    {
      args: [[[1,1,1,-1,-1],[1,1,1,-1,-1],[-1,-1,-1,1,1],[1,1,1,1,-1],[-1,-1,-1,-1,-1]]],
      expected: [1,-1,-1,-1,-1],
    },
    {
      args: [[[-1]]],
      expected: [-1],
    },
    {
      args: [[[1,1,1,1,1,1]]],
      expected: [1,2,3,4,5,-1],
    },
  ],
  hiddenTests: [
    {
      args: [[[1,-1],[1,-1]]],
      expected: [-1,-1],
    },
    {
      args: [[[1,1],[1,1]]],
      expected: [-1,-1],
    },
    {
      args: [[[1,1,1,1]]],
      expected: [1,2,3,-1],
    },
    {
      args: [[[-1,-1,-1,-1]]],
      expected: [-1,0,1,2],
    },
    {
      args: [[[1,1],[-1,-1],[1,1]]],
      expected: [1,-1],
    },
  ],
};
