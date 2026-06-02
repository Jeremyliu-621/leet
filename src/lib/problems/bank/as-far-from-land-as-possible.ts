import type { Problem } from '../types';

export const problem: Problem = {
  id: 'as-far-from-land-as-possible',
  title: 'As Far from Land as Possible',
  difficulty: 'medium',
  tags: ['graph'],
  description: `Given an \`n x n\` grid containing only values \`0\` (water) and \`1\` (land), find a **water cell** such that its distance to the nearest land cell is **maximized** and return that maximum distance. The distance used is the **Manhattan distance**: \`|x1 - x2| + |y1 - y2|\`.\n\nReturn \`-1\` if no water or no land cells exist.`,
  constraints: [
    'n == grid.length',
    'n == grid[i].length',
    '1 <= n <= 100',
    'grid[i][j] is either 0 or 1',
  ],
  examples: [
    {
      input: 'grid = [[1,0,1],[0,0,0],[1,0,1]]',
      output: '2',
      explanation: 'The water cell at (1,1) has the maximum distance of 2 to any land cell.',
    },
    {
      input: 'grid = [[1,0,0],[0,0,0],[0,0,0]]',
      output: '4',
      explanation: 'The water cell at (2,2) has the maximum distance of 4 to the land cell at (0,0).',
    },
  ],
  hints: [
    'This is a classic multi-source BFS problem. Start BFS from all land cells simultaneously (push all land cells into queue at distance 0).',
    'Expand BFS wave by wave. The last water cell to be reached is the farthest one. Track the maximum distance encountered.',
    'Initialize a distance array with -1 for water and 0 for land. BFS processes each cell once. Return the maximum distance found, or -1 if no water or no land exists.',
  ],
  functionName: 'maxDistance',
  params: ['grid'],
  starterCode: {
    javascript: `function maxDistance(grid) {
  const n = grid.length;
  const dist = grid.map(r => r.map(v => v === 1 ? 0 : -1));
  const q = [];
  for (let r = 0; r < n; r++) for (let c = 0; c < n; c++) if (grid[r][c] === 1) q.push([r, c]);
  if (q.length === 0 || q.length === n * n) return -1;
  let head = 0, ans = -1;
  const dirs = [[0,1],[0,-1],[1,0],[-1,0]];
  while (head < q.length) {
    const [r, c] = q[head++];
    for (const [dr, dc] of dirs) {
      const nr = r+dr, nc = c+dc;
      if (nr>=0&&nr<n&&nc>=0&&nc<n&&dist[nr][nc]===-1) {
        dist[nr][nc] = dist[r][c] + 1; ans = Math.max(ans, dist[nr][nc]); q.push([nr, nc]);
      }
    }
  }
  return ans;
}`,
    typescript: `function maxDistance(grid: number[][]): number {
  const n = grid.length;
  const dist = grid.map(r => r.map(v => v === 1 ? 0 : -1));
  const q: [number,number][] = [];
  for (let r = 0; r < n; r++) for (let c = 0; c < n; c++) if (grid[r]![c] === 1) q.push([r, c]);
  if (q.length === 0 || q.length === n * n) return -1;
  let head = 0, ans = -1;
  const dirs: [number,number][] = [[0,1],[0,-1],[1,0],[-1,0]];
  while (head < q.length) {
    const [r, c] = q[head++]!;
    for (const [dr, dc] of dirs) {
      const nr = r+dr, nc = c+dc;
      if (nr>=0&&nr<n&&nc>=0&&nc<n&&dist[nr]![nc]===-1) {
        dist[nr]![nc] = dist[r]![c]! + 1; ans = Math.max(ans, dist[nr]![nc]!); q.push([nr, nc]);
      }
    }
  }
  return ans;
}`,
    python: `def maxDistance(grid):
    if hasattr(grid, 'to_py'): grid = grid.to_py()
    grid = [[int(v) for v in (r.to_py() if hasattr(r,'to_py') else r)] for r in grid]
    from collections import deque
    n = len(grid)
    dist = [[0 if grid[r][c]==1 else -1 for c in range(n)] for r in range(n)]
    q = deque([(r,c) for r in range(n) for c in range(n) if grid[r][c]==1])
    if not q or len(q) == n*n: return -1
    ans = -1
    while q:
        r, c = q.popleft()
        for dr, dc in ((0,1),(0,-1),(1,0),(-1,0)):
            nr, nc = r+dr, c+dc
            if 0<=nr<n and 0<=nc<n and dist[nr][nc]==-1:
                dist[nr][nc] = dist[r][c]+1; ans = max(ans, dist[nr][nc]); q.append((nr,nc))
    return ans`,
  },
  visibleTests: [
    { args: [[[1,0,1],[0,0,0],[1,0,1]]], expected: 2 },
    { args: [[[1,0,0],[0,0,0],[0,0,0]]], expected: 4 },
    { args: [[[1,1,1],[1,1,1],[1,1,1]]], expected: -1 },
  ],
  hiddenTests: [
    { args: [[[0,0,0],[0,0,0],[0,0,0]]], expected: -1 },
    { args: [[[1,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,1]]], expected: 3 },
    { args: [[[1,0],[0,0]]], expected: 2 },
    { args: [[[0,1],[0,0]]], expected: 2 },
    { args: [[[1,1],[0,1]]], expected: 1 },
    { args: [[[1,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,1]]], expected: 4 },
  ],
};
