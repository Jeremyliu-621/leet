import type { Problem } from '../types';

export const problem: Problem = {
  id: 'paths-in-matrix-whose-sum-is-divisible-by-k',
  title: 'Paths in Matrix Whose Sum Is Divisible by K',
  difficulty: 'hard',
  tags: ['dynamic-programming', 'arrays'],
  description: `You are given a **0-indexed** \`m x n\` integer matrix \`grid\` and an integer \`k\`. You are at position \`(0, 0)\` and you want to reach position \`(m - 1, n - 1)\`. You can only move **right** or **down**.

Return *the number of paths where the sum of the elements on the path is divisible by \`k\`*. Since the answer may be very large, return it **modulo** \`10^9 + 7\`.`,
  constraints: [
    'm == grid.length',
    'n == grid[i].length',
    '1 <= m, n <= 5',
    '1 <= grid[i][j] <= 100',
    '1 <= k <= 50',
  ],
  examples: [
    {
      input: 'grid = [[5,2,4],[3,0,5],[0,7,2]], k = 3',
      output: '2',
      explanation: 'Two paths have sum divisible by 3.',
    },
    {
      input: 'grid = [[0,0]], k = 5',
      output: '1',
      explanation: 'Only path: (0,0)→(0,1), sum=0 which is divisible by 5.',
    },
    {
      input: 'grid = [[7,3,4,9],[2,3,6,2],[2,3,7,0]], k = 1',
      output: '10',
      explanation: 'All C(5,2)=10 paths have sums divisible by 1.',
    },
  ],
  hints: [
    'Level 1: Use DP where dp[i][j][r] = number of paths from (0,0) to (i,j) with path sum ≡ r (mod k).',
    'Level 2: Transition: dp[i][j][r] = dp[i-1][j][prev] + dp[i][j-1][prev] where prev = (r - grid[i][j] % k + k) % k.',
    'Level 3: Answer is dp[m-1][n-1][0]. Initialize dp[0][0][grid[0][0] % k] = 1.',
  ],
  functionName: 'numberOfPaths',
  params: ['grid', 'k'],
  starterCode: {
    javascript: `function numberOfPaths(grid, k) {
  const MOD = 1_000_000_007n;
  const m = grid.length, n = grid[0].length;
  const dp = Array.from({length: m}, () =>
    Array.from({length: n}, () => new Array(k).fill(0n))
  );
  dp[0][0][grid[0][0] % k] = 1n;
  for (let j = 1; j < n; j++) {
    const v = grid[0][j] % k;
    for (let r = 0; r < k; r++)
      dp[0][j][r] = dp[0][j-1][(r - v + k) % k];
  }
  for (let i = 1; i < m; i++) {
    const v = grid[i][0] % k;
    for (let r = 0; r < k; r++)
      dp[i][0][r] = dp[i-1][0][(r - v + k) % k];
  }
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      const v = grid[i][j] % k;
      for (let r = 0; r < k; r++) {
        const prev = (r - v + k) % k;
        dp[i][j][r] = (dp[i-1][j][prev] + dp[i][j-1][prev]) % MOD;
      }
    }
  }
  return Number(dp[m-1][n-1][0]);
}`,
    typescript: `function numberOfPaths(grid: number[][], k: number): number {
  const MOD = 1_000_000_007n;
  const m = grid.length, n = grid[0]!.length;
  const dp: bigint[][][] = Array.from({length: m}, () =>
    Array.from({length: n}, () => new Array<bigint>(k).fill(0n))
  );
  dp[0]![0]![grid[0]![0]! % k] = 1n;
  for (let j = 1; j < n; j++) {
    const v = grid[0]![j]! % k;
    for (let r = 0; r < k; r++)
      dp[0]![j]![r] = dp[0]![j-1]![(r - v + k) % k]!;
  }
  for (let i = 1; i < m; i++) {
    const v = grid[i]![0]! % k;
    for (let r = 0; r < k; r++)
      dp[i]![0]![r] = dp[i-1]![0]![(r - v + k) % k]!;
  }
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      const v = grid[i]![j]! % k;
      for (let r = 0; r < k; r++) {
        const prev = (r - v + k) % k;
        dp[i]![j]![r] = (dp[i-1]![j]![prev]! + dp[i]![j-1]![prev]!) % MOD;
      }
    }
  }
  return Number(dp[m-1]![n-1]![0]);
}`,
    python: `def numberOfPaths(grid, k):
    if hasattr(grid, 'to_py'): grid = grid.to_py()
    grid = [[int(x) for x in (row.to_py() if hasattr(row,'to_py') else row)] for row in grid]
    k = int(k)
    MOD = 10**9 + 7
    m, n = len(grid), len(grid[0])
    dp = [[[0]*k for _ in range(n)] for _ in range(m)]
    dp[0][0][grid[0][0] % k] = 1
    for j in range(1, n):
        v = grid[0][j] % k
        for r in range(k):
            dp[0][j][r] = dp[0][j-1][(r - v) % k]
    for i in range(1, m):
        v = grid[i][0] % k
        for r in range(k):
            dp[i][0][r] = dp[i-1][0][(r - v) % k]
    for i in range(1, m):
        for j in range(1, n):
            v = grid[i][j] % k
            for r in range(k):
                prev = (r - v) % k
                dp[i][j][r] = (dp[i-1][j][prev] + dp[i][j-1][prev]) % MOD
    return dp[m-1][n-1][0]`,
  },
  visibleTests: [
    { args: [[[5, 2, 4], [3, 0, 5], [0, 7, 2]], 3], expected: 2 },
    { args: [[[0, 0]], 5], expected: 1 },
    { args: [[[7, 3, 4, 9], [2, 3, 6, 2], [2, 3, 7, 0]], 1], expected: 10 },
  ],
  hiddenTests: [
    { args: [[[1]], 1], expected: 1 },
    { args: [[[1]], 2], expected: 0 },
    { args: [[[5, 2], [3, 4]], 3], expected: 1 },
    { args: [[[3, 2], [2, 1]], 3], expected: 2 },
    { args: [[[2, 3, 4], [5, 6, 7], [8, 9, 10]], 5], expected: 2 },
  ],
};
