import type { Problem } from '../types';

export const problem: Problem = {
  id: 'cherry-pickup-ii',
  title: 'Cherry Pickup II',
  difficulty: 'hard',
  tags: ['dynamic-programming'],
  description: `You are given a \`rows x cols\` matrix \`grid\` representing a field of cherries where \`grid[i][j]\` represents the number of cherries that you can collect from the \`(i, j)\` cell.

You have two robots that can collect cherries for you:

- **Robot #1** is located at the top-left corner \`(0, 0)\`.
- **Robot #2** is located at the top-right corner \`(0, cols - 1)\`.

Return the **maximum** number of cherries collection using both robots by following the rules below:

- From a cell \`(i, j)\`, robots can move to cell \`(i + 1, j - 1)\`, \`(i + 1, j)\`, or \`(i + 1, j + 1)\`.
- When any robot is passing through a cell, it picks up all cherries, and the cell becomes an empty cell.
- When both robots stay on the same cell, only one of them takes the cherries.
- Both robots cannot move outside of the grid at any moment.
- Both robots should reach the bottom row in the grid.`,
  constraints: [
    'rows == grid.length',
    'cols == grid[i].length',
    '2 <= rows, cols <= 70',
    '0 <= grid[i][j] <= 100',
  ],
  examples: [
    {
      input: 'grid = [[3,1,1],[2,5,1],[1,5,5],[2,1,1]]',
      output: '24',
      explanation:
        'Robot 1 path: (0,0) → (1,1) → (2,2) → (3,1). Robot 2 path: (0,3) → (1,2) → (2,1) → (3,2). Cherries = 3+5+5+1+1+1+5+1+2 = 24.',
    },
    {
      input: 'grid = [[1,0,0,0,0,0,1],[2,0,0,0,0,3,0],[2,0,9,0,0,0,0],[0,3,0,5,4,0,0],[1,0,2,3,0,0,6]]',
      output: '28',
    },
  ],
  hints: [
    'Both robots move row by row simultaneously. Model state as (row, col1, col2).',
    'Use 3D DP where dp[r][c1][c2] = max cherries when robot1 is at column c1 and robot2 is at column c2 on row r.',
    'Transition: try all 9 combinations of the 3 moves for each robot. Add grid[r][c1] + grid[r][c2] (subtract once if c1==c2).',
  ],
  functionName: 'cherryPickup',
  params: ['grid'],
  starterCode: {
    javascript: 'function cherryPickup(grid) {\n\n}\n',
    typescript: "function cherryPickup(grid: number[][]): number {\n\n}",

    python: 'def cherryPickup(grid):\n    pass\n',
  },
  visibleTests: [
    {
      args: [[[3,1,1],[2,5,1],[1,5,5],[2,1,1]]],
      expected: 24,
    },
    {
      args: [[[1,0,0,0,0,0,1],[2,0,0,0,0,3,0],[2,0,9,0,0,0,0],[0,3,0,5,4,0,0],[1,0,2,3,0,0,6]]],
      expected: 28,
    },
  ],
  hiddenTests: [
    { args: [[[1,1],[1,1]]], expected: 4 },
    { args: [[[0,0,0],[0,0,0],[0,0,0]]], expected: 0 },
    { args: [[[1,2,3],[0,2,0],[1,2,1]]], expected: 9 },
    { args: [[[4,3,2,1],[1,2,3,4],[5,5,5,5],[1,1,1,1]]], expected: 23 },
  ],
};
