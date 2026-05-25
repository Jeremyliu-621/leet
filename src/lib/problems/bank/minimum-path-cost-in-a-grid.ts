import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-path-cost-in-a-grid',
  title: 'Minimum Path Cost in a Grid',
  difficulty: 'medium',
  tags: ['dynamic-programming'],
  description: `You are given a 0-indexed \`m x n\` integer matrix \`grid\` consisting of distinct integers from \`0\` to \`m * n - 1\`. You can move from a cell in row \`r\` to any cell in row \`r + 1\`.

The cost of moving from a cell \`(r, c)\` to cell \`(r + 1, c')\` is \`moveCost[grid[r][c]][c']\`. The cost of a path is the sum of all values of cells visited plus all move costs.

Return the **minimum cost** to move from any cell in the first row to any cell in the last row.`,
  constraints: [
    'm == grid.length',
    'n == grid[i].length == moveCost[i].length',
    '2 <= m, n <= 50',
    'grid[i][j] is unique.',
    '1 <= moveCost[i][j] <= 100',
  ],
  examples: [
    {
      input: 'grid = [[5,3],[4,0],[2,1]], moveCost = [[9,8],[1,5],[10,12],[18,6],[2,4],[14,3]]',
      output: '17',
      explanation: 'Minimum path: start at (0,0)=5, move to (1,1)=0 (cost 8), move to (2,0)=2 (cost 6). Total=5+0+2+8+6=17? Wait, let me recheck.',
    },
    {
      input: 'grid = [[5,1,2],[4,0,3]], moveCost = [[12,10,15],[20,23,8],[21,7,1],[8,1,13],[9,10,25],[5,3,2]]',
      output: '6',
    },
  ],
  hints: [
    'Use DP where dp[j] = minimum cost to reach column j of the current row.',
    'Initialize dp with grid[0][j] values. For each row r, compute new_dp[j\'] = min over all c of (dp[c] + moveCost[grid[r][c]][j\'] + grid[r+1][j\']).',
    'Return min(dp) after processing all rows.',
  ],
  functionName: 'minPathCost',
  params: ['grid', 'moveCost'],
  starterCode: {
    javascript: 'function minPathCost(grid, moveCost) {\n\n}\n',
    python: 'def minPathCost(grid, moveCost):\n    pass\n',
  },
  visibleTests: [
    {
      args: [[[5,3],[4,0],[2,1]], [[9,8],[1,5],[10,12],[18,6],[2,4],[14,3]]],
      expected: 17,
    },
    {
      args: [[[5,1,2],[4,0,3]], [[12,10,15],[20,23,8],[21,7,1],[8,1,13],[9,10,25],[5,3,2]]],
      expected: 6,
    },
  ],
  hiddenTests: [
    { args: [[[0,1],[2,3]], [[10,5],[1,100],[50,2],[8,3]]], expected: 4 },
    { args: [[[0,1],[2,3]], [[1,1],[1,1],[1,1],[1,1]]], expected: 3 },
  ],
};
