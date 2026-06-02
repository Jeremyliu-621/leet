import type { Problem } from '../types';

export const problem: Problem = {
  id: 'number-of-enclaves',
  title: 'Number of Enclaves',
  difficulty: 'medium',
  tags: ['graph'],
  description: `You are given an \`m x n\` binary matrix \`grid\`, where \`0\` represents sea and \`1\` represents land.

A move consists of walking from one land cell to another adjacent (4-directional) land cell, or walking off the boundary of the grid.

Return the number of **land cells** in the grid from which we **cannot** walk off the boundary of the grid in any number of moves.`,
  constraints: [
    'm == grid.length',
    'n == grid[i].length',
    '1 <= m, n <= 500',
    'grid[i][j] is either 0 or 1.',
  ],
  examples: [
    {
      input: 'grid = [[0,0,0,0],[1,0,1,0],[0,1,1,0],[0,0,0,0]]',
      output: '3',
      explanation: 'The land cells at (1,2), (2,1), and (2,2) cannot reach the boundary. The cell at (1,0) is on the boundary.',
    },
    {
      input: 'grid = [[0,1,1,0],[0,0,1,0],[0,0,1,0],[0,0,0,0]]',
      output: '0',
      explanation: 'All land cells are connected to the boundary.',
    },
  ],
  hints: [
    'Level 1: Cells connected to the boundary cannot be enclaves. Start a BFS/DFS from every land cell on the border, marking reachable land cells. The remaining unmarked land cells are enclaves.',
    'Level 2: Flood-fill (set to 0) every land cell reachable from any border land cell. Count remaining 1s — those are the enclaves.',
    'Level 3: `const m=grid.length,n=grid[0].length; const dfs=(r,c)=>{if(r<0||r>=m||c<0||c>=n||!grid[r][c])return;grid[r][c]=0;[[1,0],[-1,0],[0,1],[0,-1]].forEach(([dr,dc])=>dfs(r+dr,c+dc));}; for(let r=0;r<m;r++){dfs(r,0);dfs(r,n-1);} for(let c=0;c<n;c++){dfs(0,c);dfs(m-1,c);} return grid.flat().reduce((s,v)=>s+v,0);`',
  ],
  functionName: 'numEnclaves',
  params: ['grid'],
  starterCode: {
    javascript: 'function numEnclaves(grid) {\n  const m = grid.length, n = grid[0].length;\n  const dfs = (r, c) => {\n    if (r < 0 || r >= m || c < 0 || c >= n || !grid[r][c]) return;\n    grid[r][c] = 0;\n    [[1,0],[-1,0],[0,1],[0,-1]].forEach(([dr,dc]) => dfs(r+dr, c+dc));\n  };\n  for (let r = 0; r < m; r++) { dfs(r, 0); dfs(r, n - 1); }\n  for (let c = 0; c < n; c++) { dfs(0, c); dfs(m - 1, c); }\n  return grid.flat().reduce((s, v) => s + v, 0);\n}\n',
    typescript: "function numEnclaves(grid: number[][]): number {\n  const m = grid.length, n = grid[0]!.length;\n  const dfs = (r: number, c: number): void => {\n    if (r < 0 || r >= m || c < 0 || c >= n || !grid[r]![c]) return;\n    grid[r]![c] = 0;\n    [[1,0],[-1,0],[0,1],[0,-1]].forEach(([dr,dc]) => dfs(r+dr!, c+dc!));\n  };\n  for (let r = 0; r < m; r++) { dfs(r, 0); dfs(r, n - 1); }\n  for (let c = 0; c < n; c++) { dfs(0, c); dfs(m - 1, c); }\n  return grid.flat().reduce((s, v) => s + v, 0);\n}",

    python: 'def numEnclaves(grid):\n    if hasattr(grid, \'to_py\'): grid = grid.to_py()\n    grid = [[int(v) for v in (r.to_py() if hasattr(r,\'to_py\') else r)] for r in grid]\n    m, n = len(grid), len(grid[0])\n    def dfs(r, c):\n        if r<0 or r>=m or c<0 or c>=n or not grid[r][c]: return\n        grid[r][c] = 0\n        for dr,dc in [(1,0),(-1,0),(0,1),(0,-1)]: dfs(r+dr, c+dc)\n    for r in range(m): dfs(r, 0); dfs(r, n-1)\n    for c in range(n): dfs(0, c); dfs(m-1, c)\n    return sum(grid[r][c] for r in range(m) for c in range(n))\n',
  },
  visibleTests: [
    {
      args: [[[0,0,0,0],[1,0,1,0],[0,1,1,0],[0,0,0,0]]],
      expected: 3,
    },
    {
      args: [[[0,1,1,0],[0,0,1,0],[0,0,1,0],[0,0,0,0]]],
      expected: 0,
    },
  ],
  hiddenTests: [
    {
      args: [[[0,0],[1,1]]],
      expected: 0,
    },
    {
      args: [[[0,0,0],[0,1,0],[0,0,0]]],
      expected: 1,
    },
    {
      args: [[[1,1,1],[1,0,1],[1,1,1]]],
      expected: 0,
    },
    {
      args: [[[0,0,0,0,0],[0,1,1,1,0],[0,1,0,1,0],[0,1,1,1,0],[0,0,0,0,0]]],
      expected: 8,
    },
    {
      args: [[[0]]],
      expected: 0,
    },
  ],
};
