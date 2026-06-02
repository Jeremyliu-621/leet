import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximum-trailing-zeros-in-a-cornered-path',
  title: 'Maximum Trailing Zeros in a Cornered Path',
  difficulty: 'medium',
  tags: ['arrays', 'math'],
  description: `You are given a 2D integer array \`grid\` of size \`m x n\`, where each cell contains a positive integer.

A **cornered path** is defined as a set of adjacent cells with **at most** one turn. More specifically, the path should exclusively move either **horizontally** or **vertically** up to the turn (if it exists), without returning to a visited cell. After the turn, the path will then move exclusively in the **perpendicular** direction.

The **product** of a path is defined as the product of all the values in the path.

Return the **maximum** number of **trailing zeros** in the product of a cornered path found in \`grid\`.

Trailing zeros in an integer are the number of times the integer is divisible by \`10\`. \`10\` is divisible by both \`2\` and \`5\`, so it is the product of factors of \`2\` and \`5\`. To count trailing zeros, count the **minimum** of the number of factors of 2 and 5.`,
  constraints: [
    'm == grid.length',
    'n == grid[i].length',
    '1 <= m, n <= 10^5',
    '1 <= m * n <= 10^5',
    '1 <= grid[i][j] <= 1000',
  ],
  examples: [
    {
      input: 'grid = [[23,17,15,3,20],[8,1,20,27,11],[9,4,6,2,21],[40,9,1,10,6],[22,7,4,5,3]]',
      output: '3',
      explanation:
        'The path [40,9,1,10,6] from column 0 then right forms a cornered path with product divisible by 10^3.',
    },
    {
      input: 'grid = [[4,3,2],[7,6,1],[8,8,8]]',
      output: '0',
      explanation: 'No cornered path has a product with any trailing zeros.',
    },
  ],
  hints: [
    'Precompute prefix sums of factors-of-2 and factors-of-5 for each row and each column.',
    'For a corner at cell (i, j), a cornered path uses (some horizontal segment of row i) + (some vertical segment of column j). The path passes through (i, j) once.',
    'Try all 4 combinations of direction: left+up, left+down, right+up, right+down at each corner (i, j). Count min(twos, fives) for each and take the global maximum.',
  ],
  functionName: 'maxTrailingZeros',
  params: ['grid'],
  starterCode: {
    javascript: `function maxTrailingZeros(grid) {
  const m = grid.length, n = grid[0].length;
  const cnt = (v, p) => { let c = 0; while (v % p === 0) { c++; v /= p; } return c; };
  const r2 = [], r5 = [], c2 = [], c5 = [];
  for (let i = 0; i < m; i++) {
    r2[i] = new Array(n + 1).fill(0); r5[i] = new Array(n + 1).fill(0);
    for (let j = 0; j < n; j++) {
      r2[i][j + 1] = r2[i][j] + cnt(grid[i][j], 2);
      r5[i][j + 1] = r5[i][j] + cnt(grid[i][j], 5);
    }
  }
  for (let j = 0; j < n; j++) {
    c2[j] = new Array(m + 1).fill(0); c5[j] = new Array(m + 1).fill(0);
    for (let i = 0; i < m; i++) {
      c2[j][i + 1] = c2[j][i] + cnt(grid[i][j], 2);
      c5[j][i + 1] = c5[j][i] + cnt(grid[i][j], 5);
    }
  }
  let ans = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      const g2 = cnt(grid[i][j], 2), g5 = cnt(grid[i][j], 5);
      const combos = [
        [r2[i][j+1] + c2[j][i+1] - g2,   r5[i][j+1] + c5[j][i+1] - g5],
        [r2[i][j+1] + c2[j][m] - c2[j][i] - g2, r5[i][j+1] + c5[j][m] - c5[j][i] - g5],
        [r2[i][n] - r2[i][j] + c2[j][i+1] - g2, r5[i][n] - r5[i][j] + c5[j][i+1] - g5],
        [r2[i][n] - r2[i][j] + c2[j][m] - c2[j][i] - g2, r5[i][n] - r5[i][j] + c5[j][m] - c5[j][i] - g5],
      ];
      for (const [tw, fi] of combos) { const z = Math.min(tw, fi); if (z > ans) ans = z; }
    }
  }
  return ans;
}`,
    typescript: `function maxTrailingZeros(grid: number[][]): number {
  const m = grid.length, n = grid[0]!.length;
  const cnt = (v: number, p: number) => { let c = 0; while (v % p === 0) { c++; v /= p; } return c; };
  const r2: number[][] = [], r5: number[][] = [], c2: number[][] = [], c5: number[][] = [];
  for (let i = 0; i < m; i++) {
    r2[i] = new Array(n + 1).fill(0); r5[i] = new Array(n + 1).fill(0);
    for (let j = 0; j < n; j++) {
      r2[i]![j + 1] = r2[i]![j]! + cnt(grid[i]![j]!, 2);
      r5[i]![j + 1] = r5[i]![j]! + cnt(grid[i]![j]!, 5);
    }
  }
  for (let j = 0; j < n; j++) {
    c2[j] = new Array(m + 1).fill(0); c5[j] = new Array(m + 1).fill(0);
    for (let i = 0; i < m; i++) {
      c2[j]![i + 1] = c2[j]![i]! + cnt(grid[i]![j]!, 2);
      c5[j]![i + 1] = c5[j]![i]! + cnt(grid[i]![j]!, 5);
    }
  }
  let ans = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      const g2 = cnt(grid[i]![j]!, 2), g5 = cnt(grid[i]![j]!, 5);
      const combos: [number, number][] = [
        [r2[i]![j+1]! + c2[j]![i+1]! - g2,   r5[i]![j+1]! + c5[j]![i+1]! - g5],
        [r2[i]![j+1]! + c2[j]![m]! - c2[j]![i]! - g2, r5[i]![j+1]! + c5[j]![m]! - c5[j]![i]! - g5],
        [r2[i]![n]! - r2[i]![j]! + c2[j]![i+1]! - g2, r5[i]![n]! - r5[i]![j]! + c5[j]![i+1]! - g5],
        [r2[i]![n]! - r2[i]![j]! + c2[j]![m]! - c2[j]![i]! - g2, r5[i]![n]! - r5[i]![j]! + c5[j]![m]! - c5[j]![i]! - g5],
      ];
      for (const [tw, fi] of combos) { const z = Math.min(tw, fi); if (z > ans) ans = z; }
    }
  }
  return ans;
}`,
    python: `def maxTrailingZeros(grid):
    if hasattr(grid, 'to_py'): grid = [[int(x) for x in (r.to_py() if hasattr(r, 'to_py') else r)] for r in grid.to_py()]
    def cnt(v, p):
        c = 0
        while v % p == 0: c += 1; v //= p
        return c
    m, n = len(grid), len(grid[0])
    r2 = [[0]*(n+1) for _ in range(m)]
    r5 = [[0]*(n+1) for _ in range(m)]
    for i in range(m):
        for j in range(n):
            r2[i][j+1] = r2[i][j] + cnt(grid[i][j], 2)
            r5[i][j+1] = r5[i][j] + cnt(grid[i][j], 5)
    c2 = [[0]*(m+1) for _ in range(n)]
    c5 = [[0]*(m+1) for _ in range(n)]
    for j in range(n):
        for i in range(m):
            c2[j][i+1] = c2[j][i] + cnt(grid[i][j], 2)
            c5[j][i+1] = c5[j][i] + cnt(grid[i][j], 5)
    ans = 0
    for i in range(m):
        for j in range(n):
            g2, g5 = cnt(grid[i][j], 2), cnt(grid[i][j], 5)
            for tw, fi in [
                (r2[i][j+1]+c2[j][i+1]-g2, r5[i][j+1]+c5[j][i+1]-g5),
                (r2[i][j+1]+c2[j][m]-c2[j][i]-g2, r5[i][j+1]+c5[j][m]-c5[j][i]-g5),
                (r2[i][n]-r2[i][j]+c2[j][i+1]-g2, r5[i][n]-r5[i][j]+c5[j][i+1]-g5),
                (r2[i][n]-r2[i][j]+c2[j][m]-c2[j][i]-g2, r5[i][n]-r5[i][j]+c5[j][m]-c5[j][i]-g5),
            ]:
                z = min(tw, fi)
                if z > ans: ans = z
    return ans`,
  },
  visibleTests: [
    {
      args: [[[23, 17, 15, 3, 20], [8, 1, 20, 27, 11], [9, 4, 6, 2, 21], [40, 9, 1, 10, 6], [22, 7, 4, 5, 3]]],
      expected: 3,
    },
    {
      args: [[[4, 3, 2], [7, 6, 1], [8, 8, 8]]],
      expected: 0,
    },
  ],
  hiddenTests: [
    { args: [[[10]]], expected: 1 },
    { args: [[[2, 5], [5, 2]]], expected: 1 },
    { args: [[[10, 10]]], expected: 2 },
    { args: [[[10], [10]]], expected: 2 },
    { args: [[[1, 2], [5, 3]]], expected: 1 },
    { args: [[[100, 1], [1, 1]]], expected: 2 },
  ],
};
