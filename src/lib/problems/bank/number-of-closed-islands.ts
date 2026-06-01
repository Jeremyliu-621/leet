import type { Problem } from '../types';

export const problem: Problem = {
  id: 'number-of-closed-islands',
  title: 'Number of Closed Islands',
  difficulty: 'medium',
  tags: ['graph', 'arrays'],
  description: `Given a 2D grid consisting of \`0\`s (land) and \`1\`s (water).

An **island** is a maximal 4-directionally connected group of \`0\`s and a **closed island** is an island **totally** (all left, top, right, bottom) surrounded by \`1\`s.

Return the number of **closed islands**.`,
  constraints: ['1 <= grid.length, grid[0].length <= 100', 'grid[i][j] is 0 or 1'],
  examples: [
    {
      input: 'grid = [[1,1,1,1,1,1,1,0],[1,0,0,0,0,1,1,0],[1,0,1,0,1,1,1,0],[1,0,0,0,0,1,0,1],[1,1,1,1,1,1,1,0]]',
      output: '2',
    },
    {
      input: 'grid = [[0,0,1,0,0],[0,1,0,1,0],[0,1,1,1,0],[0,0,0,0,0]]',
      output: '1',
    },
  ],
  hints: [
    'Level 1: Any land cell (0) touching the border cannot be part of a closed island. Start by DFS/BFS from every border 0, marking those cells as visited (or flood-filling them to 1).',
    'Level 2: After sinking border-connected land, iterate the interior of the grid. Each unvisited 0 you encounter is the start of a new closed island — DFS to mark the whole component and increment your counter.',
    'Level 3: The DFS helper needs only to mark cells visited; the closed-island count increments once per component start in the main loop (not once per cell). Use the four cardinal directions and guard against out-of-bounds and already-visited cells.',
  ],
  functionName: 'closedIsland',
  params: ['grid'],
  starterCode: {
    javascript: `function closedIsland(grid) {
  const rows = grid.length, cols = grid[0].length;
  function dfs(r, c) {
    if (r < 0 || r >= rows || c < 0 || c >= cols || grid[r][c] === 1) return;
    grid[r][c] = 1; // mark visited by sinking to water
    dfs(r + 1, c); dfs(r - 1, c); dfs(r, c + 1); dfs(r, c - 1);
  }
  // Sink all border-connected land
  for (let r = 0; r < rows; r++) { dfs(r, 0); dfs(r, cols - 1); }
  for (let c = 0; c < cols; c++) { dfs(0, c); dfs(rows - 1, c); }
  // Count remaining closed islands
  let count = 0;
  for (let r = 1; r < rows - 1; r++) {
    for (let c = 1; c < cols - 1; c++) {
      if (grid[r][c] === 0) { dfs(r, c); count++; }
    }
  }
  return count;
}`,
    typescript: `function closedIsland(grid: number[][]): number {
  const rows = grid.length, cols = grid[0].length;
  function dfs(r: number, c: number): void {
    if (r < 0 || r >= rows || c < 0 || c >= cols || grid[r][c] === 1) return;
    grid[r][c] = 1;
    dfs(r + 1, c); dfs(r - 1, c); dfs(r, c + 1); dfs(r, c - 1);
  }
  for (let r = 0; r < rows; r++) { dfs(r, 0); dfs(r, cols - 1); }
  for (let c = 0; c < cols; c++) { dfs(0, c); dfs(rows - 1, c); }
  let count = 0;
  for (let r = 1; r < rows - 1; r++) {
    for (let c = 1; c < cols - 1; c++) {
      if (grid[r][c] === 0) { dfs(r, c); count++; }
    }
  }
  return count;
}`,
    python: `def closedIsland(grid):
    rows, cols = len(grid), len(grid[0])
    def dfs(r, c):
        if r < 0 or r >= rows or c < 0 or c >= cols or grid[r][c] == 1:
            return
        grid[r][c] = 1
        dfs(r + 1, c); dfs(r - 1, c); dfs(r, c + 1); dfs(r, c - 1)
    for r in range(rows):
        dfs(r, 0); dfs(r, cols - 1)
    for c in range(cols):
        dfs(0, c); dfs(rows - 1, c)
    count = 0
    for r in range(1, rows - 1):
        for c in range(1, cols - 1):
            if grid[r][c] == 0:
                dfs(r, c)
                count += 1
    return count`,
  },
  visibleTests: [
    { args: [[[1,1,1,1,1,1,1,0],[1,0,0,0,0,1,1,0],[1,0,1,0,1,1,1,0],[1,0,0,0,0,1,0,1],[1,1,1,1,1,1,1,0]]], expected: 2 },
    { args: [[[0,0,1,0,0],[0,1,0,1,0],[0,1,1,1,0],[0,0,0,0,0]]], expected: 1 },
  ],
  hiddenTests: [
    { args: [[[1,1,1],[1,0,1],[1,1,1]]], expected: 1 },
    { args: [[[0,1,1,0],[1,1,1,1],[1,1,1,1],[0,1,1,0]]], expected: 0 },
    { args: [[[1,1,1,1],[1,0,0,1],[1,0,0,1],[1,1,1,1]]], expected: 1 },
    { args: [[[1,1,1,1,1],[1,0,1,0,1],[1,0,1,0,1],[1,0,0,0,1],[1,1,1,1,1]]], expected: 1 },
    { args: [[[1,1,1,1,1,1],[1,0,0,0,0,1],[1,0,1,0,0,1],[1,0,0,0,0,1],[1,1,1,1,1,1]]], expected: 1 },
    { args: [[[0,0,0],[0,0,0],[0,0,0]]], expected: 0 },
    { args: [[[1,0,1],[0,0,0],[1,0,1]]], expected: 0 },
  ],
};
