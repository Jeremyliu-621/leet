import type { Problem } from '../types';

export const problem: Problem = {
  id: 'number-of-islands',
  title: 'Number of Islands',
  difficulty: 'medium',
  tags: ['graph', 'arrays'],
  description: `Given an \`m × n\` 2D binary grid where \`"1"\` represents land and \`"0"\` represents water, return the number of islands.

An **island** is surrounded by water and is formed by connecting adjacent land cells horizontally or vertically. You may assume all four edges of the grid are surrounded by water.`,
  constraints: [
    '`1 <= m, n <= 300`',
    '`grid[i][j]` is `"0"` or `"1"`',
  ],
  examples: [
    {
      input: 'grid = [["1","1","1","1","0"],["1","1","0","1","0"],["1","1","0","0","0"],["0","0","0","0","0"]]',
      output: '1',
      explanation: 'All land cells are connected — one island.',
    },
    {
      input: 'grid = [["1","1","0","0","0"],["1","1","0","0","0"],["0","0","1","0","0"],["0","0","0","1","1"]]',
      output: '3',
      explanation: 'Three disconnected land masses.',
    },
  ],
  params: ['grid'],
  functionName: 'numIslands',
  starterCode: {
    javascript: `function numIslands(grid) {
  let count = 0;
  const rows = grid.length, cols = grid[0].length;
  function dfs(r, c) {
    if (r < 0 || r >= rows || c < 0 || c >= cols || grid[r][c] !== '1') return;
    grid[r][c] = '0'; // mark visited
    dfs(r - 1, c); dfs(r + 1, c); dfs(r, c - 1); dfs(r, c + 1);
  }
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (grid[r][c] === '1') { count++; dfs(r, c); }
    }
  }
  return count;
}`,
    typescript: `function numIslands(grid: string[][]): number {
  let count = 0;
  const rows = grid.length, cols = grid[0]!.length;
  function dfs(r: number, c: number): void {
    if (r < 0 || r >= rows || c < 0 || c >= cols || grid[r]![c] !== '1') return;
    grid[r]![c] = '0'; // mark visited
    dfs(r - 1, c); dfs(r + 1, c); dfs(r, c - 1); dfs(r, c + 1);
  }
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (grid[r]![c] === '1') { count++; dfs(r, c); }
    }
  }
  return count;
}`,

    python: `def numIslands(grid):
    rows, cols = len(grid), len(grid[0])
    def dfs(r, c):
        if r < 0 or r >= rows or c < 0 or c >= cols or grid[r][c] != '1':
            return
        grid[r][c] = '0'  # mark visited
        dfs(r - 1, c); dfs(r + 1, c); dfs(r, c - 1); dfs(r, c + 1)
    count = 0
    for r in range(rows):
        for c in range(cols):
            if grid[r][c] == '1':
                count += 1
                dfs(r, c)
    return count`,
  },
  hints: [
    'Iterate every cell. When you find a "1", increment the island count and immediately flood-fill the entire island to mark it as visited.',
    'Flood-fill by DFS: change "1" to "0" in the current cell, then recurse on its 4 neighbors that are "1".',
    'The number of times you start a fresh DFS sweep (not a recursive call inside one) equals the number of islands.',
  ],
  visibleTests: [
    {
      args: [[['1','1','1','1','0'],['1','1','0','1','0'],['1','1','0','0','0'],['0','0','0','0','0']]],
      expected: 1,
    },
    {
      args: [[['1','1','0','0','0'],['1','1','0','0','0'],['0','0','1','0','0'],['0','0','0','1','1']]],
      expected: 3,
    },
    {
      args: [[['0','0','0'],['0','0','0']]],
      expected: 0,
    },
  ],
  hiddenTests: [
    {
      args: [[['1']]],
      expected: 1,
    },
    {
      args: [[['1','0','1'],['0','0','0'],['1','0','1']]],
      expected: 4,
    },
    {
      args: [[['1','1','1'],['0','1','0'],['1','1','1']]],
      expected: 1,
    },
    {
      args: [[['1','0'],['0','1']]],
      expected: 2,
    },
  ],
};
