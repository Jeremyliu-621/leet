import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-fertile-pyramids-in-a-land',
  title: 'Count Fertile Pyramids in a Land',
  difficulty: 'hard',
  tags: ['arrays', 'dynamic-programming'],
  description: `A farmer has a rectangular grid of land with \`m\` rows and \`n\` columns that can be divided into unit cells. Each cell is either **fertile** (represented by a \`1\`) or **barren** (represented by a \`0\`). All cells outside the grid are considered barren.

A **pyramid** is a set of cells with the following criteria:
- The number of cells it contains is **greater than 1**.
- The **apex** of a pyramid is in the **topmost** row of the pyramid (or **bottommost** row for an inverted pyramid).
- The cells contained in the pyramid, **excluding the apex**, have a width that is **one more** than the row above it (or below it for an inverted pyramid).
- All the **cells** in the pyramid are **fertile**.

An **inverse pyramid** is similar to a pyramid but the apex is at the **bottommost** row.

Return the **total number** of pyramids and inverse pyramids in the grid.`,
  constraints: [
    'm == grid.length',
    'n == grid[i].length',
    '1 <= m, n <= 1000',
    'grid[i][j] is either 0 or 1',
  ],
  examples: [
    {
      input: 'grid = [[0,1,1,0],[1,1,1,1]]',
      output: '2',
      explanation: '2 inverse pyramids of height 2 with apex at (1,1) and (1,2).',
    },
    {
      input: 'grid = [[1,1,1],[1,1,1]]',
      output: '2',
      explanation: '2 pyramids of height 2 centered at (0,1) going down, and 2 inverse pyramids.',
    },
    {
      input: 'grid = [[1,0,1],[0,0,0],[1,0,1]]',
      output: '0',
    },
    {
      input: 'grid = [[1,1,1,1,0],[1,1,1,1,1],[1,1,1,1,1],[0,1,0,0,1]]',
      output: '13',
    },
  ],
  hints: [
    'For upward pyramids, dp[i][j] = max height of pyramid with apex at (i,j). If grid[i][j]=0, dp=0. Otherwise dp[i][j] = min(dp[i+1][j-1], dp[i+1][j], dp[i+1][j+1]) + 1.',
    'Sum all dp[i][j] values: each entry of value h contributes h pyramids (heights 2..h+1, all sharing this apex).',
    'For inverse pyramids, reverse the row order of the grid and apply the same DP.',
    'Total = count_upward(grid) + count_upward(reversed_grid). Both return the sum of (dp[i][j] - 1) values across the grid (subtract 1 because height-1 is a single cell, not a valid pyramid).',
  ],
  functionName: 'countPyramids',
  params: ['grid'],
  starterCode: {
    javascript: `function countPyramids(grid) {
  const m = grid.length, n = grid[0].length;
  function countUp(g) {
    const dp = g.map(row => [...row]);
    for (let i = m - 2; i >= 0; i--) {
      for (let j = 1; j < n - 1; j++) {
        if (dp[i][j]) dp[i][j] = Math.min(dp[i+1][j-1], dp[i+1][j], dp[i+1][j+1]) + 1;
      }
    }
    return dp.reduce((s, row) => s + row.reduce((rs, v) => rs + Math.max(0, v - 1), 0), 0);
  }
  return countUp(grid) + countUp([...grid].reverse());
}`,
    typescript: `function countPyramids(grid: number[][]): number {
  const m = grid.length, n = grid[0]!.length;
  function countUp(g: number[][]): number {
    const dp = g.map(row => [...row]);
    for (let i = m - 2; i >= 0; i--) {
      for (let j = 1; j < n - 1; j++) {
        if (dp[i]![j]) dp[i]![j] = Math.min(dp[i+1]![j-1]!, dp[i+1]![j]!, dp[i+1]![j+1]!) + 1;
      }
    }
    return dp.reduce((s, row) => s + row.reduce((rs, v) => rs + Math.max(0, v - 1), 0), 0);
  }
  return countUp(grid) + countUp([...grid].reverse());
}`,
    python: `def countPyramids(grid):
    m, n = len(grid), len(grid[0])
    def count_up(g):
        dp = [row[:] for row in g]
        for i in range(m - 2, -1, -1):
            for j in range(1, n - 1):
                if dp[i][j]:
                    dp[i][j] = min(dp[i+1][j-1], dp[i+1][j], dp[i+1][j+1]) + 1
        return sum(max(0, v - 1) for row in dp for v in row)
    return count_up(grid) + count_up(grid[::-1])`,
  },
  visibleTests: [
    { args: [[[0,1,1,0],[1,1,1,1]]], expected: 2 },
    { args: [[[1,1,1],[1,1,1]]], expected: 2 },
    { args: [[[1,0,1],[0,0,0],[1,0,1]]], expected: 0 },
    { args: [[[1,1,1,1,0],[1,1,1,1,1],[1,1,1,1,1],[0,1,0,0,1]]], expected: 13 },
  ],
  hiddenTests: [
    { args: [[[1]]], expected: 0 },
    { args: [[[1,1],[1,1]]], expected: 0 },
    { args: [[[1,1,1]]], expected: 0 },
    { args: [[[1],[1],[1]]], expected: 0 },
    { args: [[[1,1,1],[1,1,1],[1,1,1]]], expected: 4 },
    { args: [[[0,0,0],[0,0,0]]], expected: 0 },
  ],
};
