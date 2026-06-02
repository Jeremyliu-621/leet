import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-number-of-operations-to-satisfy-conditions',
  title: 'Minimum Number of Operations to Satisfy Conditions',
  difficulty: 'medium',
  tags: ['dynamic-programming'],
  description: `You are given a 2D matrix \`grid\` of size \`m × n\`. In one operation you may change any cell's value. Return the **minimum number of operations** needed so that:

1. All cells in the **same column** have the **same value**.
2. Adjacent columns (columns \`j\` and \`j + 1\`) have **different** values.

The values you may assign to any cell are the digits \`0\` through \`9\`.`,
  constraints: [
    '1 <= n == grid[0].length <= 10^3',
    '1 <= m == grid.length <= 10^3',
    '0 <= grid[i][j] <= 9',
  ],
  examples: [
    {
      input: 'grid = [[1,0,2],[1,0,2]]',
      output: '0',
      explanation: 'Each column is already uniform, and adjacent columns have different values (1 ≠ 0, 0 ≠ 2).',
    },
    {
      input: 'grid = [[1,1,1],[0,0,0]]',
      output: '3',
      explanation: 'One valid assignment: col 0 → 1 (1 change), col 1 → 0 (1 change), col 2 → 1 (1 change). Total = 3.',
    },
    {
      input: 'grid = [[1],[2],[3]]',
      output: '2',
      explanation: 'Single column; choose the most frequent value (1, 2, or 3 each appear once). Pick any and change the other two: cost = 2.',
    },
  ],
  hints: [
    'For each column c and digit d, compute cost[c][d] = (number of rows) − (count of d in column c). This is the minimum changes needed to make column c all equal to d.',
    'Use DP: dp[d] = minimum total cost to set column c to digit d, given optimal choices for columns 0..c.',
    'Transition: dp_new[d] = cost[c][d] + min(dp[d\'] for d\' ≠ d). To compute the min over d\' ≠ d efficiently, track the two smallest values in the previous DP layer.',
    'Return min(dp[d]) after processing all columns.',
  ],
  functionName: 'minimumOperations',
  params: ['grid'],
  starterCode: {
    javascript: `function minimumOperations(grid) {
  const m = grid.length, n = grid[0].length;
  let dp = new Array(10).fill(0);
  for (let j = 0; j < n; j++) {
    const freq = new Array(10).fill(0);
    for (let i = 0; i < m; i++) freq[grid[i][j]]++;
    const cost = freq.map(f => m - f);
    let min1 = Infinity, min2 = Infinity, argMin = 0;
    for (let d = 0; d < 10; d++) {
      if (dp[d] < min1) { min2 = min1; min1 = dp[d]; argMin = d; }
      else if (dp[d] < min2) min2 = dp[d];
    }
    dp = cost.map((c, d) => c + (d === argMin ? min2 : min1));
  }
  return Math.min(...dp);
}`,
    typescript: `function minimumOperations(grid: number[][]): number {
  const m = grid.length, n = grid[0]!.length;
  let dp = new Array<number>(10).fill(0);
  for (let j = 0; j < n; j++) {
    const freq = new Array<number>(10).fill(0);
    for (let i = 0; i < m; i++) freq[grid[i]![j]!]!++;
    const cost = freq.map(f => m - f);
    let min1 = Infinity, min2 = Infinity, argMin = 0;
    for (let d = 0; d < 10; d++) {
      if (dp[d]! < min1) { min2 = min1; min1 = dp[d]!; argMin = d; }
      else if (dp[d]! < min2) min2 = dp[d]!;
    }
    dp = cost.map((c, d) => c + (d === argMin ? min2 : min1));
  }
  return Math.min(...dp);
}`,
    python: `def minimumOperations(grid):
    if hasattr(grid, 'to_py'): grid = grid.to_py()
    grid = [[int(v) for v in (r.to_py() if hasattr(r, 'to_py') else r)] for r in grid]
    m, n = len(grid), len(grid[0])
    dp = [0] * 10
    for j in range(n):
        freq = [0] * 10
        for i in range(m): freq[grid[i][j]] += 1
        cost = [m - f for f in freq]
        min1 = min2 = float('inf'); arg_min = 0
        for d in range(10):
            if dp[d] < min1: min2 = min1; min1 = dp[d]; arg_min = d
            elif dp[d] < min2: min2 = dp[d]
        dp = [cost[d] + (min2 if d == arg_min else min1) for d in range(10)]
    return min(dp)`,
  },
  visibleTests: [
    { args: [[[1, 0, 2], [1, 0, 2]]], expected: 0 },
    { args: [[[1, 1, 1], [0, 0, 0]]], expected: 3 },
    { args: [[[1], [2], [3]]], expected: 2 },
  ],
  hiddenTests: [
    { args: [[[0, 1], [1, 0]]], expected: 2 },
    { args: [[[0, 0], [0, 0]]], expected: 2 },
  ],
};
