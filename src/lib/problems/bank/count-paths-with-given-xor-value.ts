import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-paths-with-given-xor-value',
  title: 'Count Paths With the Given XOR Value',
  difficulty: 'medium',
  tags: ['arrays', 'dynamic-programming'],
  description: `You are given a 2D integer array \`grid\` with size \`m x n\`. You are also given an integer \`k\`.

Your task is to calculate the number of paths you can take from the top-left cell \`(0, 0)\` to the bottom-right cell \`(m - 1, n - 1)\` while satisfying the following constraints:

- You can either move to the right or move downward. Formally, from cell \`(row, col)\`, you can move to cell \`(row, col + 1)\` or cell \`(row + 1, col)\`.
- The XOR of all the numbers on the path must be equal to \`k\`.

Return the total number of such paths.`,
  constraints: [
    '1 <= m, n <= 50',
    '0 <= grid[i][j] <= 15',
    '0 <= k <= 15',
  ],
  examples: [
    {
      input: 'grid = [[2,1,5],[7,10,0],[12,6,4]], k = 11',
      output: '3',
      explanation:
        'Three paths from (0,0) to (2,2) have XOR equal to 11: Right→Down→Down→Right, Down→Right→Right→Down, and Down→Down→Right→Right.',
    },
    {
      input: 'grid = [[1,3],[3,2]], k = 0',
      output: '2',
      explanation:
        'Both paths give XOR=0: Right→Down: 1^3^2=0; Down→Right: 1^3^2=0.',
    },
  ],
  hints: [
    'Use DP: dp[i][j][x] = number of paths from (0,0) to (i,j) with XOR value x.',
    'XOR values range from 0 to 15 since all grid values are at most 15.',
    'Transitions come from the cell above and the cell to the left.',
  ],
  functionName: 'countPathsWithXorValue',
  params: ['grid', 'k'],
  starterCode: {
    javascript: `function countPathsWithXorValue(grid, k) {
  const m = grid.length, n = grid[0].length;
  const dp = Array.from({length: m}, () =>
    Array.from({length: n}, () => new Array(16).fill(0)));
  dp[0][0][grid[0][0]] = 1;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (i === 0 && j === 0) continue;
      const val = grid[i][j];
      for (let x = 0; x < 16; x++) {
        const prev = x ^ val;
        if (i > 0) dp[i][j][x] += dp[i-1][j][prev];
        if (j > 0) dp[i][j][x] += dp[i][j-1][prev];
      }
    }
  }
  return dp[m-1][n-1][k] || 0;
}`,
    typescript: `function countPathsWithXorValue(grid: number[][], k: number): number {
  const m = grid.length, n = grid[0]!.length;
  const dp: number[][][] = Array.from({length: m}, () =>
    Array.from({length: n}, () => new Array(16).fill(0)));
  dp[0]![0]![grid[0]![0]!] = 1;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (i === 0 && j === 0) continue;
      const val = grid[i]![j]!;
      for (let x = 0; x < 16; x++) {
        const prev = x ^ val;
        if (i > 0) dp[i]![j]![x]! += dp[i-1]![j]![prev]!;
        if (j > 0) dp[i]![j]![x]! += dp[i]![j-1]![prev]!;
      }
    }
  }
  return dp[m-1]![n-1]![k] ?? 0;
}`,
    python: `def countPathsWithXorValue(grid, k):
    m, n = len(grid), len(grid[0])
    dp = [[[0] * 16 for _ in range(n)] for _ in range(m)]
    dp[0][0][grid[0][0]] = 1
    for i in range(m):
        for j in range(n):
            if i == 0 and j == 0:
                continue
            val = grid[i][j]
            for x in range(16):
                prev = x ^ val
                if i > 0:
                    dp[i][j][x] += dp[i-1][j][prev]
                if j > 0:
                    dp[i][j][x] += dp[i][j-1][prev]
    return dp[m-1][n-1][k]`,
  },
  visibleTests: [
    { args: [[[2, 1, 5], [7, 10, 0], [12, 6, 4]], 11], expected: 3 },
    { args: [[[1, 3], [3, 2]], 0], expected: 2 },
  ],
  hiddenTests: [
    { args: [[[1]], 1], expected: 1 },
    { args: [[[1]], 0], expected: 0 },
    { args: [[[1, 2], [3, 4]], 7], expected: 1 },
    { args: [[[1, 2], [3, 4]], 6], expected: 1 },
    { args: [[[0, 0, 0], [0, 0, 0]], 0], expected: 3 },
    { args: [[[3, 3], [3, 3]], 3], expected: 2 },
    { args: [[[1, 0], [0, 1]], 0], expected: 2 },
    { args: [[[15, 1], [1, 15]], 1], expected: 2 },
  ],
};
