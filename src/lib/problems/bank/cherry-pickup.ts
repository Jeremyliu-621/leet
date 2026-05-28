import type { Problem } from '../types';

export const problem: Problem = {
  id: 'cherry-pickup',
  title: 'Cherry Pickup',
  difficulty: 'hard',
  tags: ['dynamic-programming', 'arrays'],
  description: `You are given an \`n x n\` grid representing a field of cherries, each cell is one of three possible integers:

- \`0\` means the cell is empty, so you can pass through,
- \`1\` means the cell contains a cherry that you can pick up and pass through, or
- \`-1\` means the cell contains a thorn that blocks your way.

Return the maximum number of cherries you can collect by following the rules below:

- Starting at position \`(0, 0)\` and reaching \`(n - 1, n - 1)\` by moving right or down through valid path cells (cells with value \`0\` or \`1\`).
- After reaching \`(n - 1, n - 1)\`, returning to \`(0, 0)\` by moving left or up through valid path cells.
- When passing through a path cell containing a cherry, you pick it up, and the cell becomes an empty cell \`0\`.
- If there is no valid path between \`(0, 0)\` and \`(n - 1, n - 1)\`, then no cherries can be collected.`,
  constraints: [
    'n == grid.length',
    'n == grid[i].length',
    '1 <= n <= 50',
    'grid[i][j] is -1, 0, or 1',
    'grid[0][0] != -1',
    'grid[n - 1][n - 1] != -1',
  ],
  examples: [
    {
      input: 'grid = [[0,1,-1],[1,0,-1],[1,1,1]]',
      output: '5',
      explanation: 'The player started at (0, 0) and went down, down, right, right to reach (2, 2). 4 cherries collected. Then returned up, up, left, left picking up 1 cherry at (0, 1). Total = 5.',
    },
    {
      input: 'grid = [[1,1,-1],[1,-1,1],[-1,1,1]]',
      output: '0',
      explanation: 'Going from (0,0) to (2,2) is not possible without hitting a thorn.',
    },
  ],
  hints: [
    'Model this as two people simultaneously walking from (0,0) to (n-1,n-1).',
    'Let dp[t][r1][r2] = max cherries when both are on diagonal t (r1+c1 = r2+c2 = t), person 1 at row r1, person 2 at row r2.',
    'If r1 == r2, count the cherry once; otherwise count both.',
    'Transitions: each person can come from the cell above or from the left.',
  ],
  functionName: 'cherryPickup',
  params: ['grid'],
  starterCode: {
    javascript: 'function cherryPickup(grid) {\n\n}\n',
    python: 'def cherryPickup(grid):\n    pass\n',
  },
  visibleTests: [
    { args: [[[0, 1, -1], [1, 0, -1], [1, 1, 1]]], expected: 5 },
    { args: [[[1, 1, -1], [1, -1, 1], [-1, 1, 1]]], expected: 0 },
  ],
  hiddenTests: [
    { args: [[[1]]], expected: 1 },
    { args: [[[0, 0, 0], [0, 0, 0], [0, 0, 0]]], expected: 0 },
    { args: [[[1, 1, 1], [1, 1, 1], [1, 1, 1]]], expected: 8 },
    { args: [[[1, 0, 0, 0, 0], [0, 0, 0, 0, 1], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 1]]], expected: 3 },
  ],
};
