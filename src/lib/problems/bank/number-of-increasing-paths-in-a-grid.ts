import type { Problem } from '../types';

export const problem: Problem = {
  id: 'number-of-increasing-paths-in-a-grid',
  title: 'Number of Increasing Paths in a Grid',
  difficulty: 'hard',
  tags: ['arrays', 'dynamic-programming'],
  description: `You are given an \`m x n\` integer matrix \`grid\`, where you can move from a cell to any **adjacent** cell in all 4 directions.

Return the **number of strictly increasing paths** in the grid such that you can start from **any** cell and end at **any** cell. Since the answer may be very large, return it **modulo** \`10^9 + 7\`.

Two paths are considered different if they do not have exactly the same sequence of visited cells.

**Example 1:**
\`\`\`
Input: grid = [[1,1],[3,4]]
Output: 8
\`\`\`

**Example 2:**
\`\`\`
Input: grid = [[1],[2]]
Output: 3
\`\`\`

**Constraints:**
- \`m == grid.length\`
- \`n == grid[i].length\`
- \`1 <= m, n <= 1000\`
- \`1 <= grid[i][j] <= 10^5\``,
  constraints: [
    '1 <= m, n <= 1000',
    '1 <= grid[i][j] <= 10^5',
  ],
  examples: [
    { input: 'grid = [[1,1],[3,4]]', output: '8' },
    { input: 'grid = [[1],[2]]', output: '3' },
  ],
  hints: [
    'Use DFS with memoization. For each cell, count strictly increasing paths starting at that cell.',
    'dp[r][c] = 1 + sum of dp[nr][nc] for all neighbors (nr, nc) where grid[nr][nc] > grid[r][c].',
    'Answer = sum of dp[r][c] for all cells, mod 10^9+7.',
  ],
  functionName: 'countPaths',
  params: ['grid'],
  starterCode: {
    javascript: `function countPaths(grid) {
  const MOD = 1000000007;
  const m = grid.length, n = grid[0].length;
  const dp = Array.from({length: m}, () => new Array(n).fill(-1));
  const dirs = [[0,1],[0,-1],[1,0],[-1,0]];
  function dfs(r, c) {
    if (dp[r][c] !== -1) return dp[r][c];
    let count = 1;
    for (const [dr, dc] of dirs) {
      const nr = r + dr, nc = c + dc;
      if (nr >= 0 && nr < m && nc >= 0 && nc < n && grid[nr][nc] > grid[r][c])
        count = (count + dfs(nr, nc)) % MOD;
    }
    dp[r][c] = count; return count;
  }
  let ans = 0;
  for (let r = 0; r < m; r++) for (let c = 0; c < n; c++) ans = (ans + dfs(r, c)) % MOD;
  return ans;
}`,
    typescript: `function countPaths(grid: number[][]): number {
  const MOD = 1000000007;
  const m = grid.length, n = grid[0]!.length;
  const dp: number[][] = Array.from({length: m}, () => new Array(n).fill(-1));
  const dirs = [[0,1],[0,-1],[1,0],[-1,0]];
  function dfs(r: number, c: number): number {
    if (dp[r]![c]! !== -1) return dp[r]![c]!;
    let count = 1;
    for (const dir of dirs) {
      const nr = r + dir[0]!, nc = c + dir[1]!;
      if (nr >= 0 && nr < m && nc >= 0 && nc < n && grid[nr]![nc]! > grid[r]![c]!)
        count = (count + dfs(nr, nc)) % MOD;
    }
    dp[r]![c] = count; return count;
  }
  let ans = 0;
  for (let r = 0; r < m; r++) for (let c = 0; c < n; c++) ans = (ans + dfs(r, c)) % MOD;
  return ans;
}`,
    python: `def countPaths(grid):
    if hasattr(grid, 'to_py'): grid = grid.to_py()
    grid = [[int(v) for v in (r.to_py() if hasattr(r,'to_py') else r)] for r in grid]
    MOD = 10**9+7; m, n = len(grid), len(grid[0])
    dp = [[-1]*n for _ in range(m)]
    def dfs(r, c):
        if dp[r][c] != -1: return dp[r][c]
        count = 1
        for dr, dc in ((0,1),(0,-1),(1,0),(-1,0)):
            nr, nc = r+dr, c+dc
            if 0 <= nr < m and 0 <= nc < n and grid[nr][nc] > grid[r][c]:
                count = (count+dfs(nr,nc))%MOD
        dp[r][c] = count; return count
    ans = 0
    for r in range(m):
        for c in range(n): ans = (ans+dfs(r,c))%MOD
    return ans`,
  },
  visibleTests: [
    { args: [[[1, 1], [3, 4]]], expected: 8 },
    { args: [[[1], [2]]], expected: 3 },
    { args: [[[1]]], expected: 1 },
  ],
  hiddenTests: [
    { args: [[[1, 2], [3, 4]]], expected: 10 },
    { args: [[[3, 1], [2, 4]]], expected: 8 },
    { args: [[[1, 2, 3]]], expected: 6 },
    { args: [[[1, 2], [2, 1]]], expected: 8 },
  ],
};
