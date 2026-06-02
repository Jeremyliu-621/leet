import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-the-safest-path-in-a-grid',
  title: 'Find the Safest Path in a Grid',
  difficulty: 'medium',
  tags: ['shortest-path', 'binary-search', 'graph'],
  description: `You are given a **0-indexed** 2D matrix \`grid\` of size \`n x n\`, where \`grid[row][col]\` is either \`0\` (empty) or \`1\` (thief).

The **safeness factor** of a path is the **minimum** Manhattan-BFS distance from any cell on the path to any thief.

Return the **maximum safeness factor** of all paths leading from \`(0, 0)\` to \`(n-1, n-1)\`. You may move up, down, left, or right.

If there is no path from \`(0, 0)\` to \`(n-1, n-1)\`, return \`-1\`.`,
  constraints: [
    '`1 <= grid.length == n <= 400`',
    '`grid[i][j]` is either `0` or `1`.',
    'There is at least one thief in the `grid`.',
  ],
  examples: [
    {
      input: 'grid = [[1,0,0],[0,0,0],[0,0,1]]',
      output: '0',
      explanation:
        'Thieves are at corners (0,0) and (2,2). Any path must start at the thief or end at the thief, so the safeness factor is 0.',
    },
    {
      input: 'grid = [[0,0,1],[0,0,0],[0,0,0]]',
      output: '2',
      explanation:
        'The path (0,0) → (1,0) → (2,0) → (2,1) → (2,2) passes through cells with distances [2,3,4,3,2] from the thief; the minimum is 2.',
    },
    {
      input: 'grid = [[0,0,0],[0,0,1],[0,0,0]]',
      output: '1',
      explanation:
        'The path (0,0) → (1,0) → (2,0) → (2,1) → (2,2) has minimum thief distance 1 at (2,2). That is the best possible.',
    },
  ],
  hints: [
    'Run a **multi-source BFS** from all thief cells simultaneously to compute for every cell its distance to the nearest thief. Then binary-search on the answer `k` and check (BFS/DFS) whether there is a path from `(0,0)` to `(n-1,n-1)` using only cells with distance ≥ `k`.',
    'Binary search range: `lo = 0`, `hi = 2*n`. For the reachability check, seed the BFS only from `(0,0)` if `dist[0][0] >= k`, and visit only cells with `dist >= k`. If `(n-1,n-1)` is reached and its distance is also ≥ `k`, return `true`.',
    '```js\nfunction maximumSafenessFactor(grid) {\n  const n = grid.length;\n  const dist = Array.from({length:n}, () => new Array(n).fill(Infinity));\n  const q = [];\n  for (let i = 0; i < n; i++)\n    for (let j = 0; j < n; j++)\n      if (grid[i][j] === 1) { dist[i][j] = 0; q.push([i,j]); }\n  const dirs = [[0,1],[0,-1],[1,0],[-1,0]];\n  let head = 0;\n  while (head < q.length) {\n    const [r,c] = q[head++];\n    for (const [dr,dc] of dirs) {\n      const nr=r+dr, nc=c+dc;\n      if (nr>=0&&nr<n&&nc>=0&&nc<n&&dist[nr][nc]===Infinity) {\n        dist[nr][nc] = dist[r][c]+1; q.push([nr,nc]);\n      }\n    }\n  }\n  function ok(k) {\n    if (dist[0][0]<k||dist[n-1][n-1]<k) return false;\n    const seen = Array.from({length:n},()=>new Array(n).fill(false));\n    seen[0][0]=true;\n    const bq=[[0,0]]; let bh=0;\n    while (bh<bq.length) {\n      const [r,c]=bq[bh++];\n      if (r===n-1&&c===n-1) return true;\n      for (const [dr,dc] of dirs) {\n        const nr=r+dr,nc=c+dc;\n        if (nr>=0&&nr<n&&nc>=0&&nc<n&&!seen[nr][nc]&&dist[nr][nc]>=k){\n          seen[nr][nc]=true; bq.push([nr,nc]);\n        }\n      }\n    }\n    return false;\n  }\n  let lo=0,hi=2*n;\n  while (lo<hi){const mid=(lo+hi+1)>>1; if(ok(mid))lo=mid; else hi=mid-1;}\n  return lo;\n}\n```',
  ],
  functionName: 'maximumSafenessFactor',
  params: ['grid'],
  starterCode: {
    javascript: `function maximumSafenessFactor(grid) {
  const n = grid.length, dirs = [[0,1],[0,-1],[1,0],[-1,0]];
  const dist = Array.from({length: n}, () => new Array(n).fill(Infinity));
  const q = [];
  for (let i = 0; i < n; i++)
    for (let j = 0; j < n; j++)
      if (grid[i][j] === 1) { dist[i][j] = 0; q.push([i, j]); }
  let head = 0;
  while (head < q.length) {
    const [r, c] = q[head++];
    for (const [dr, dc] of dirs) {
      const nr = r + dr, nc = c + dc;
      if (nr >= 0 && nr < n && nc >= 0 && nc < n && dist[nr][nc] === Infinity) {
        dist[nr][nc] = dist[r][c] + 1; q.push([nr, nc]);
      }
    }
  }
  const ok = (k) => {
    if (dist[0][0] < k || dist[n-1][n-1] < k) return false;
    const seen = Array.from({length: n}, () => new Array(n).fill(false));
    seen[0][0] = true; const bq = [[0, 0]]; let bh = 0;
    while (bh < bq.length) {
      const [r, c] = bq[bh++];
      if (r === n-1 && c === n-1) return true;
      for (const [dr, dc] of dirs) {
        const nr = r + dr, nc = c + dc;
        if (nr >= 0 && nr < n && nc >= 0 && nc < n && !seen[nr][nc] && dist[nr][nc] >= k) {
          seen[nr][nc] = true; bq.push([nr, nc]);
        }
      }
    }
    return false;
  };
  let lo = 0, hi = 2 * n;
  while (lo < hi) { const mid = (lo + hi + 1) >> 1; if (ok(mid)) lo = mid; else hi = mid - 1; }
  return lo;
}`,
    typescript: `function maximumSafenessFactor(grid: number[][]): number {
  const n = grid.length, dirs = [[0,1],[0,-1],[1,0],[-1,0]];
  const dist = Array.from({length: n}, () => new Array(n).fill(Infinity));
  const q: number[][] = [];
  for (let i = 0; i < n; i++)
    for (let j = 0; j < n; j++)
      if (grid[i][j] === 1) { dist[i][j] = 0; q.push([i, j]); }
  let head = 0;
  while (head < q.length) {
    const [r, c] = q[head++];
    for (const [dr, dc] of dirs) {
      const nr = r + dr, nc = c + dc;
      if (nr >= 0 && nr < n && nc >= 0 && nc < n && dist[nr][nc] === Infinity) {
        dist[nr][nc] = dist[r][c] + 1; q.push([nr, nc]);
      }
    }
  }
  const ok = (k: number): boolean => {
    if (dist[0][0] < k || dist[n-1][n-1] < k) return false;
    const seen = Array.from({length: n}, () => new Array(n).fill(false));
    seen[0][0] = true; const bq: number[][] = [[0, 0]]; let bh = 0;
    while (bh < bq.length) {
      const [r, c] = bq[bh++];
      if (r === n-1 && c === n-1) return true;
      for (const [dr, dc] of dirs) {
        const nr = r + dr, nc = c + dc;
        if (nr >= 0 && nr < n && nc >= 0 && nc < n && !seen[nr][nc] && dist[nr][nc] >= k) {
          seen[nr][nc] = true; bq.push([nr, nc]);
        }
      }
    }
    return false;
  };
  let lo = 0, hi = 2 * n;
  while (lo < hi) { const mid = (lo + hi + 1) >> 1; if (ok(mid)) lo = mid; else hi = mid - 1; }
  return lo;
}`,
    python: `def maximumSafenessFactor(grid: list[list[int]]) -> int:
    from collections import deque
    n = len(grid); dirs = [(0,1),(0,-1),(1,0),(-1,0)]
    dist = [[float('inf')] * n for _ in range(n)]
    q = deque()
    for i in range(n):
        for j in range(n):
            if grid[i][j] == 1: dist[i][j] = 0; q.append((i, j))
    while q:
        r, c = q.popleft()
        for dr, dc in dirs:
            nr, nc = r + dr, c + dc
            if 0 <= nr < n and 0 <= nc < n and dist[nr][nc] == float('inf'):
                dist[nr][nc] = dist[r][c] + 1; q.append((nr, nc))
    def ok(k):
        if dist[0][0] < k or dist[n-1][n-1] < k: return False
        seen = [[False]*n for _ in range(n)]; seen[0][0] = True
        bq = deque([(0, 0)])
        while bq:
            r, c = bq.popleft()
            if r == n-1 and c == n-1: return True
            for dr, dc in dirs:
                nr, nc = r+dr, c+dc
                if 0<=nr<n and 0<=nc<n and not seen[nr][nc] and dist[nr][nc]>=k:
                    seen[nr][nc]=True; bq.append((nr,nc))
        return False
    lo, hi = 0, 2 * n
    while lo < hi:
        mid = (lo + hi + 1) // 2
        if ok(mid): lo = mid
        else: hi = mid - 1
    return lo`,
  },
  visibleTests: [
    { args: [[[1, 0, 0], [0, 0, 0], [0, 0, 1]]], expected: 0 },
    { args: [[[0, 0, 1], [0, 0, 0], [0, 0, 0]]], expected: 2 },
    { args: [[[0, 0, 0], [0, 0, 1], [0, 0, 0]]], expected: 1 },
  ],
  hiddenTests: [
    { args: [[[1]]], expected: 0 },
    { args: [[[0, 1], [0, 0]]], expected: 1 },
    {
      args: [
        [
          [0, 0, 0, 1],
          [0, 0, 0, 0],
          [0, 0, 0, 0],
          [1, 0, 0, 0],
        ],
      ],
      expected: 2,
    },
    { args: [[[0, 0], [1, 0]]], expected: 1 },
    { args: [[[1, 0], [0, 0]]], expected: 0 },
  ],
};
