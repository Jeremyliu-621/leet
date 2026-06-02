import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximum-number-of-fish-in-a-grid',
  title: 'Maximum Number of Fish in a Grid',
  difficulty: 'medium',
  tags: ['arrays', 'dynamic-programming'],
  description: `You are given a **0-indexed** 2D matrix \`grid\` of size \`m x n\`, where \`(r, c)\` represents:
- A **land** cell if \`grid[r][c] == 0\`, or
- A **water** cell containing \`grid[r][c]\` fish, if \`grid[r][c] > 0\`.

A fisher can start at any **water** cell \`(r, c)\` and can do the following operations any number of times:
- Catch all the fish at cell \`(r, c)\`, or
- Move to any adjacent water cell.

Return the **maximum** number of fish the fisher can catch if he chooses his starting cell optimally, or \`0\` if no water cell exists.

**Example 1:**
\`\`\`
Input: grid = [[0,2,1,0],[4,0,0,3],[1,0,0,4],[0,3,2,0]]
Output: 7
\`\`\`

**Example 2:**
\`\`\`
Input: grid = [[1,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,1]]
Output: 1
\`\`\`

**Constraints:**
- \`m == grid.length\`
- \`n == grid[i].length\`
- \`1 <= m, n <= 10\`
- \`0 <= grid[i][j] <= 10\``,
  constraints: [
    '1 <= m, n <= 10',
    '0 <= grid[i][j] <= 10',
  ],
  examples: [
    { input: 'grid = [[0,2,1,0],[4,0,0,3],[1,0,0,4],[0,3,2,0]]', output: '7' },
    { input: 'grid = [[1,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,1]]', output: '1' },
  ],
  hints: [
    'DFS from each unvisited water cell, summing all fish in the connected component.',
    'Track the maximum component sum across all starting cells.',
    'Mark visited cells to avoid double-counting within a component.',
  ],
  functionName: 'findMaxFish',
  params: ['grid'],
  starterCode: {
    javascript: `function findMaxFish(grid) {
  const m = grid.length, n = grid[0].length;
  function dfs(r, c) {
    if (r < 0 || r >= m || c < 0 || c >= n || grid[r][c] === 0) return 0;
    const fish = grid[r][c];
    grid[r][c] = 0;
    return fish + dfs(r+1,c) + dfs(r-1,c) + dfs(r,c+1) + dfs(r,c-1);
  }
  let ans = 0;
  for (let r = 0; r < m; r++) for (let c = 0; c < n; c++) ans = Math.max(ans, dfs(r, c));
  return ans;
}`,
    typescript: `function findMaxFish(grid: number[][]): number {
  const m = grid.length, n = grid[0]!.length;
  function dfs(r: number, c: number): number {
    if (r < 0 || r >= m || c < 0 || c >= n || !grid[r]![c]) return 0;
    const fish = grid[r]![c]!;
    grid[r]![c] = 0;
    return fish + dfs(r+1,c) + dfs(r-1,c) + dfs(r,c+1) + dfs(r,c-1);
  }
  let ans = 0;
  for (let r = 0; r < m; r++) for (let c = 0; c < n; c++) ans = Math.max(ans, dfs(r, c));
  return ans;
}`,
    python: `def findMaxFish(grid):
    if hasattr(grid, 'to_py'): grid = grid.to_py()
    grid = [[int(v) for v in (r.to_py() if hasattr(r,'to_py') else r)] for r in grid]
    m, n = len(grid), len(grid[0])
    def dfs(r, c):
        if r < 0 or r >= m or c < 0 or c >= n or grid[r][c] == 0: return 0
        fish = grid[r][c]; grid[r][c] = 0
        return fish + dfs(r+1,c) + dfs(r-1,c) + dfs(r,c+1) + dfs(r,c-1)
    ans = 0
    for r in range(m):
        for c in range(n): ans = max(ans, dfs(r, c))
    return ans`,
  },
  visibleTests: [
    { args: [[[0, 2, 1, 0], [4, 0, 0, 3], [1, 0, 0, 4], [0, 3, 2, 0]]], expected: 7 },
    { args: [[[1, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 1]]], expected: 1 },
    { args: [[[0, 0], [0, 0]]], expected: 0 },
  ],
  hiddenTests: [
    { args: [[[1, 2, 3]]], expected: 6 },
    { args: [[[5]]], expected: 5 },
    { args: [[[1, 0, 5], [0, 0, 0], [3, 0, 2]]], expected: 5 },
    { args: [[[1, 2], [3, 4]]], expected: 10 },
  ],
};
