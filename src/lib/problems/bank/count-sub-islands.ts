import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-sub-islands',
  title: 'Count Sub Islands',
  difficulty: 'medium',
  tags: ['graph', 'arrays'],
  description: `You are given two \`m x n\` binary matrices \`grid1\` and \`grid2\` containing only \`0\`'s (representing water) and \`1\`'s (representing land). An **island** is a group of \`1\`'s connected **4-directionally** (horizontal or vertical).

An island in \`grid2\` is considered a **sub-island** if there is an island in \`grid1\` that contains **all** the cells that make up this island in \`grid2\`.

Return the **number** of islands in \`grid2\` that are considered **sub-islands**.`,
  constraints: [
    'm == grid1.length == grid2.length',
    'n == grid1[i].length == grid2[i].length',
    '1 <= m, n <= 500',
    'grid1[i][j] and grid2[i][j] are either 0 or 1',
  ],
  examples: [
    {
      input: 'grid1 = [[1,1,1,0,0],[0,1,1,1,1],[0,0,0,0,0],[1,0,0,0,0],[1,1,0,1,1]], grid2 = [[1,1,1,0,0],[0,0,1,1,1],[0,1,0,0,0],[1,0,1,1,1],[0,1,0,1,0]]',
      output: '3',
    },
    {
      input: 'grid1 = [[1,0,1,0,1],[1,1,1,1,1],[0,0,0,0,0],[1,1,1,1,1],[1,0,1,0,1]], grid2 = [[0,0,0,0,0],[1,1,1,1,1],[0,1,0,1,0],[0,1,0,1,0],[1,0,0,0,1]]',
      output: '2',
    },
  ],
  hints: [
    'DFS/BFS over each island in grid2.',
    'An island in grid2 is a sub-island only if every cell it covers is also 1 in grid1.',
    'Always fully explore each island (don\'t short-circuit) to ensure all cells are marked visited.',
  ],
  functionName: 'countSubIslands',
  params: ['grid1', 'grid2'],
  starterCode: {
    javascript: `function countSubIslands(grid1, grid2) {
  const m = grid1.length, n = grid1[0].length;
  let count = 0;
  function dfs(i, j) {
    if (i < 0 || i >= m || j < 0 || j >= n || grid2[i][j] === 0) return true;
    grid2[i][j] = 0;
    const valid = grid1[i][j] === 1;
    const t = dfs(i-1,j), b = dfs(i+1,j), l = dfs(i,j-1), r = dfs(i,j+1);
    return valid && t && b && l && r;
  }
  for (let i = 0; i < m; i++) for (let j = 0; j < n; j++) if (grid2[i][j] === 1 && dfs(i,j)) count++;
  return count;
}`,
    typescript: `function countSubIslands(grid1: number[][], grid2: number[][]): number {
  const m = grid1.length, n = grid1[0]!.length;
  let count = 0;
  function dfs(i: number, j: number): boolean {
    if (i < 0 || i >= m || j < 0 || j >= n || grid2[i]![j] === 0) return true;
    grid2[i]![j] = 0;
    const valid = grid1[i]![j] === 1;
    const t = dfs(i-1,j), b = dfs(i+1,j), l = dfs(i,j-1), r = dfs(i,j+1);
    return valid && t && b && l && r;
  }
  for (let i = 0; i < m; i++) for (let j = 0; j < n; j++) if (grid2[i]![j] === 1 && dfs(i,j)) count++;
  return count;
}`,
    python: `def countSubIslands(grid1, grid2):
    m, n = len(grid1), len(grid1[0])
    def dfs(i, j):
        if i < 0 or i >= m or j < 0 or j >= n or grid2[i][j] == 0:
            return True
        grid2[i][j] = 0
        valid = grid1[i][j] == 1
        t = dfs(i-1, j)
        b = dfs(i+1, j)
        l = dfs(i, j-1)
        r = dfs(i, j+1)
        return valid and t and b and l and r
    count = 0
    for i in range(m):
        for j in range(n):
            if grid2[i][j] == 1 and dfs(i, j):
                count += 1
    return count`,
  },
  visibleTests: [
    {
      args: [
        [[1, 1, 1, 0, 0], [0, 1, 1, 1, 1], [0, 0, 0, 0, 0], [1, 0, 0, 0, 0], [1, 1, 0, 1, 1]],
        [[1, 1, 1, 0, 0], [0, 0, 1, 1, 1], [0, 1, 0, 0, 0], [1, 0, 1, 1, 1], [0, 1, 0, 1, 0]],
      ],
      expected: 3,
    },
    {
      args: [
        [[1, 0, 1, 0, 1], [1, 1, 1, 1, 1], [0, 0, 0, 0, 0], [1, 1, 1, 1, 1], [1, 0, 1, 0, 1]],
        [[0, 0, 0, 0, 0], [1, 1, 1, 1, 1], [0, 1, 0, 1, 0], [0, 1, 0, 1, 0], [1, 0, 0, 0, 1]],
      ],
      expected: 2,
    },
  ],
  hiddenTests: [
    { args: [[[1]], [[1]]], expected: 1 },
    { args: [[[0]], [[1]]], expected: 0 },
    { args: [[[1, 1], [1, 1]], [[1, 0], [0, 1]]], expected: 2 },
    { args: [[[1, 0], [0, 1]], [[1, 1], [0, 0]]], expected: 0 },
  ],
};
