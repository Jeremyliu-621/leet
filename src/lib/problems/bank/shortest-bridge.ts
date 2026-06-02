import type { Problem } from '../types';

export const problem: Problem = {
  id: 'shortest-bridge',
  title: 'Shortest Bridge',
  difficulty: 'hard',
  tags: ['graph'],
  description: `You are given an \`n x n\` binary matrix \`grid\` where \`1\` represents land and \`0\` represents water.

An **island** is a 4-directionally connected group of \`1\`s not connected to any other \`1\`s.

There are **exactly two islands** in \`grid\`.

You may change \`0\`s to \`1\`s to connect the two islands to form **one island**.

Return the **smallest number of \`0\`s you must flip** to connect the two islands.`,
  constraints: [
    'n == grid.length == grid[i].length',
    '2 <= n <= 100',
    'grid[i][j] is either 0 or 1',
    'There are exactly two islands in grid',
  ],
  examples: [
    {
      input: 'grid = [[0,1],[1,0]]',
      output: '1',
    },
    {
      input: 'grid = [[0,1,0],[0,0,0],[0,0,1]]',
      output: '2',
    },
    {
      input: 'grid = [[1,1,1,1,1],[1,0,0,0,1],[1,0,1,0,1],[1,0,0,0,1],[1,1,1,1,1]]',
      output: '1',
    },
  ],
  hints: [
    'Level 1: DFS to mark all cells of the first island (color them 2). Then BFS from all cells of the first island simultaneously — expanding outward layer by layer. The first time we reach a cell with value 1 (the second island), return the step count.',
    'Level 2: Find the first land cell (any 1). DFS from it, coloring first island as 2 and adding all its cells to a BFS queue. Then BFS: expand queue, incrementing distance. First time we see a 1 cell, that distance is the answer.',
    'Level 3: DFS paints first island 2 and seeds BFS queue. BFS expands each frontier: dist++, visits 0 cells (add to queue as 2), stops on 1 cell returning dist.',
  ],
  functionName: 'shortestBridge',
  params: ['grid'],
  starterCode: {
    javascript: `function shortestBridge(grid) {
  const n = grid.length;
  const dirs = [[0,1],[0,-1],[1,0],[-1,0]];
  const q = [];
  function dfs(r, c) {
    if (r < 0 || r >= n || c < 0 || c >= n || grid[r][c] !== 1) return;
    grid[r][c] = 2; q.push([r, c, 0]);
    for (const [dr, dc] of dirs) dfs(r+dr, c+dc);
  }
  let seeded = false;
  for (let r = 0; r < n && !seeded; r++)
    for (let c = 0; c < n && !seeded; c++)
      if (grid[r][c] === 1) { dfs(r, c); seeded = true; }
  while (q.length) {
    const [r, c, d] = q.shift();
    for (const [dr, dc] of dirs) {
      const nr = r+dr, nc = c+dc;
      if (nr < 0 || nr >= n || nc < 0 || nc >= n || grid[nr][nc] === 2) continue;
      if (grid[nr][nc] === 1) return d;
      grid[nr][nc] = 2; q.push([nr, nc, d+1]);
    }
  }
  return 0;
}`,
    typescript: `function shortestBridge(grid: number[][]): number {
  const n = grid.length;
  const dirs = [[0,1],[0,-1],[1,0],[-1,0]];
  const q: [number, number, number][] = [];
  function dfs(r: number, c: number): void {
    if (r < 0 || r >= n || c < 0 || c >= n || grid[r]![c] !== 1) return;
    grid[r]![c] = 2; q.push([r, c, 0]);
    for (const dir of dirs) dfs(r+dir[0]!, c+dir[1]!);
  }
  let seeded = false;
  for (let r = 0; r < n && !seeded; r++)
    for (let c = 0; c < n && !seeded; c++)
      if (grid[r]![c] === 1) { dfs(r, c); seeded = true; }
  while (q.length) {
    const [r, c, d] = q.shift()!;
    for (const dir of dirs) {
      const nr = r+dir[0]!, nc = c+dir[1]!;
      if (nr < 0 || nr >= n || nc < 0 || nc >= n || grid[nr]![nc] === 2) continue;
      if (grid[nr]![nc] === 1) return d;
      grid[nr]![nc] = 2; q.push([nr, nc, d+1]);
    }
  }
  return 0;
}`,
    python: `def shortestBridge(grid):
    if hasattr(grid, 'to_py'): grid = grid.to_py()
    grid = [[int(v) for v in (row.to_py() if hasattr(row,'to_py') else row)] for row in grid]
    n = len(grid); dirs = [(0,1),(0,-1),(1,0),(-1,0)]
    from collections import deque
    q = deque()
    def dfs(r, c):
        if r < 0 or r >= n or c < 0 or c >= n or grid[r][c] != 1: return
        grid[r][c] = 2; q.append((r, c, 0))
        for dr, dc in dirs: dfs(r+dr, c+dc)
    seeded = False
    for r in range(n):
        for c in range(n):
            if grid[r][c] == 1: dfs(r, c); seeded = True; break
        if seeded: break
    while q:
        r, c, d = q.popleft()
        for dr, dc in dirs:
            nr, nc = r+dr, c+dc
            if nr < 0 or nr >= n or nc < 0 or nc >= n or grid[nr][nc] == 2: continue
            if grid[nr][nc] == 1: return d
            grid[nr][nc] = 2; q.append((nr, nc, d+1))
    return 0`,
  },
  visibleTests: [
    { args: [[[0, 1], [1, 0]]], expected: 1 },
    { args: [[[0, 1, 0], [0, 0, 0], [0, 0, 1]]], expected: 2 },
    { args: [[[1, 1, 1, 1, 1], [1, 0, 0, 0, 1], [1, 0, 1, 0, 1], [1, 0, 0, 0, 1], [1, 1, 1, 1, 1]]], expected: 1 },
  ],
  hiddenTests: [
    { args: [[[0, 1, 0], [0, 0, 0], [1, 0, 0]]], expected: 2 },
    { args: [[[1, 0], [0, 1]]], expected: 1 },
    { args: [[[1, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 1]]], expected: 7 },
  ],
};
