import type { Problem } from '../types';

export const problem: Problem = {
  id: 'shortest-path-binary-matrix',
  title: 'Shortest Path in Binary Matrix',
  difficulty: 'medium',
  tags: ['graph', 'arrays'],
  description: `Given an \`n × n\` binary matrix \`grid\`, return the length of the shortest **clear path** from the top-left cell \`(0, 0)\` to the bottom-right cell \`(n - 1, n - 1)\`.

A clear path is a path where every cell is \`0\`. You may move in **8 directions** (horizontal, vertical, or diagonal) in each step. The length of a clear path is the number of cells visited (including start and end).

Return \`-1\` if no such path exists.`,
  constraints: [
    'n == grid.length == grid[i].length',
    '1 <= n <= 100',
    'grid[i][j] is 0 or 1',
  ],
  examples: [
    {
      input: 'grid = [[0,1],[1,0]]',
      output: '2',
      explanation: 'The path is (0,0) → (1,1) — 2 cells.',
    },
    {
      input: 'grid = [[0,0,0],[1,1,0],[1,1,0]]',
      output: '4',
      explanation: 'The path is (0,0)→(0,1)→(0,2)→(1,2)→(2,2) — wait, that\'s 5 steps but with 8-directional movement: (0,0)→(0,1)→(1,2)→(2,2) is 4 cells.',
    },
    {
      input: 'grid = [[1,0,0],[1,1,0],[1,1,0]]',
      output: '-1',
      explanation: 'Start cell is blocked.',
    },
  ],
  hints: [
    'Level 1: Use BFS from (0,0). Each cell has up to 8 neighbors. Track visited cells to avoid revisiting.',
    'Level 2: BFS guarantees the first time you reach (n-1,n-1) is with the minimum number of steps.',
    'Level 3: If grid[0][0] == 1 or grid[n-1][n-1] == 1, immediately return -1.',
  ],
  functionName: 'shortestPathBinaryMatrix',
  params: ['grid'],
  starterCode: {
    javascript: `function shortestPathBinaryMatrix(grid) {
  const n = grid.length;
  if (grid[0][0] === 1 || grid[n-1][n-1] === 1) return -1;
  if (n === 1) return 1;
  const dirs = [[-1,-1],[-1,0],[-1,1],[0,-1],[0,1],[1,-1],[1,0],[1,1]];
  const visited = Array.from({length: n}, () => new Array(n).fill(false));
  visited[0][0] = true;
  const queue = [[0, 0, 1]];
  while (queue.length) {
    const [r, c, d] = queue.shift();
    for (const [dr, dc] of dirs) {
      const nr = r + dr, nc = c + dc;
      if (nr < 0 || nr >= n || nc < 0 || nc >= n || visited[nr][nc] || grid[nr][nc] === 1) continue;
      if (nr === n-1 && nc === n-1) return d + 1;
      visited[nr][nc] = true;
      queue.push([nr, nc, d + 1]);
    }
  }
  return -1;
}`,
    typescript: `function shortestPathBinaryMatrix(grid: number[][]): number {
  const n = grid.length;
  if (grid[0]![0] === 1 || grid[n-1]![n-1] === 1) return -1;
  if (n === 1) return 1;
  const dirs = [[-1,-1],[-1,0],[-1,1],[0,-1],[0,1],[1,-1],[1,0],[1,1]];
  const visited = Array.from({length: n}, () => new Array(n).fill(false));
  visited[0]![0] = true;
  const queue: [number, number, number][] = [[0, 0, 1]];
  while (queue.length) {
    const [r, c, d] = queue.shift()!;
    for (const [dr, dc] of dirs) {
      const nr = r + dr!, nc = c + dc!;
      if (nr < 0 || nr >= n || nc < 0 || nc >= n || (visited[nr]![nc]) || grid[nr]![nc] === 1) continue;
      if (nr === n-1 && nc === n-1) return d + 1;
      visited[nr]![nc] = true;
      queue.push([nr, nc, d + 1]);
    }
  }
  return -1;
}`,
    python: `def shortestPathBinaryMatrix(grid):
    grid = [list(row.to_py() if hasattr(row, 'to_py') else row) for row in (grid.to_py() if hasattr(grid, 'to_py') else grid)]
    n = len(grid)
    if grid[0][0] == 1 or grid[n-1][n-1] == 1: return -1
    if n == 1: return 1
    from collections import deque
    dirs = [(-1,-1),(-1,0),(-1,1),(0,-1),(0,1),(1,-1),(1,0),(1,1)]
    visited = [[False]*n for _ in range(n)]
    visited[0][0] = True
    q = deque([(0, 0, 1)])
    while q:
        r, c, d = q.popleft()
        for dr, dc in dirs:
            nr, nc = r+dr, c+dc
            if 0 <= nr < n and 0 <= nc < n and not visited[nr][nc] and grid[nr][nc] == 0:
                if nr == n-1 and nc == n-1: return d+1
                visited[nr][nc] = True
                q.append((nr, nc, d+1))
    return -1`,
  },
  visibleTests: [
    { args: [[[0, 1], [1, 0]]], expected: 2 },
    { args: [[[0, 0, 0], [1, 1, 0], [1, 1, 0]]], expected: 4 },
    { args: [[[1, 0, 0], [1, 1, 0], [1, 1, 0]]], expected: -1 },
  ],
  hiddenTests: [
    { args: [[[0]]], expected: 1 },
    { args: [[[0, 0], [0, 0]]], expected: 2 },
    { args: [[[0, 0, 0], [0, 0, 0], [0, 0, 0]]], expected: 3 },
    { args: [[[0, 1], [0, 0]]], expected: 2 },
    { args: [[[0, 0, 0], [1, 0, 1], [0, 0, 0]]], expected: 3 },
  ],
};
