import type { Problem } from '../types';

export const problem: Problem = {
  id: 'making-a-large-island',
  title: 'Making A Large Island',
  difficulty: 'hard',
  tags: ['graph'],
  description: `You are given an \`n x n\` binary matrix \`grid\`. You are allowed to change **at most one** \`0\` to be \`1\`.

Return the **size of the largest island** in \`grid\` after applying this operation.

An island is a 4-directionally connected group of \`1\`s.`,
  constraints: [
    'n == grid.length',
    'n == grid[i].length',
    '1 <= n <= 500',
    'grid[i][j] is either 0 or 1',
  ],
  examples: [
    {
      input: 'grid = [[1,0],[0,1]]',
      output: '3',
      explanation: 'Change one 0 to 1 to connect the two 1-islands → size 3.',
    },
    {
      input: 'grid = [[1,1],[1,0]]',
      output: '4',
      explanation: 'Flip the 0 at [1][1]; the whole grid becomes one island.',
    },
    {
      input: 'grid = [[1,1],[1,1]]',
      output: '4',
      explanation: 'No 0 exists; the island already has size 4.',
    },
  ],
  hints: [
    'Label each island with a unique ID ≥ 2 using DFS, and record its size in a map.',
    'For each 0 cell, look at its 4 neighbours, collect distinct island IDs, sum up their sizes, and add 1 (for the flipped cell itself).',
    'Also take the maximum of the largest island found without any flip (in case no 0 exists or every 0 is surrounded only by walls).',
  ],
  functionName: 'largestIsland',
  params: ['grid'],
  starterCode: {
    javascript: `function largestIsland(grid) {
  const n = grid.length, dirs = [[0,1],[0,-1],[1,0],[-1,0]];
  let id = 2;
  const size = new Map();
  for (let r = 0; r < n; r++) {
    for (let c = 0; c < n; c++) {
      if (grid[r][c] !== 1) continue;
      const q = [[r, c]]; grid[r][c] = id; let s = 0, h = 0;
      while (h < q.length) {
        const [cr, cc] = q[h++]; s++;
        for (const [dr, dc] of dirs) {
          const nr = cr+dr, nc = cc+dc;
          if (nr>=0&&nr<n&&nc>=0&&nc<n&&grid[nr][nc]===1) { grid[nr][nc] = id; q.push([nr, nc]); }
        }
      }
      size.set(id++, s);
    }
  }
  let ans = size.size > 0 ? Math.max(...size.values()) : 0;
  for (let r = 0; r < n; r++) {
    for (let c = 0; c < n; c++) {
      if (grid[r][c] !== 0) continue;
      const seen = new Set(); let s = 1;
      for (const [dr, dc] of dirs) {
        const nr = r+dr, nc = c+dc;
        if (nr>=0&&nr<n&&nc>=0&&nc<n&&grid[nr][nc]>1&&!seen.has(grid[nr][nc])) {
          seen.add(grid[nr][nc]); s += size.get(grid[nr][nc]);
        }
      }
      ans = Math.max(ans, s);
    }
  }
  return ans;
}`,
    typescript: `function largestIsland(grid: number[][]): number {
  const n = grid.length, dirs = [[0,1],[0,-1],[1,0],[-1,0]];
  let id = 2;
  const size = new Map<number, number>();
  for (let r = 0; r < n; r++) {
    for (let c = 0; c < n; c++) {
      if (grid[r][c] !== 1) continue;
      const q: [number,number][] = [[r, c]]; grid[r][c] = id; let s = 0, h = 0;
      while (h < q.length) {
        const [cr, cc] = q[h++]; s++;
        for (const [dr, dc] of dirs) {
          const nr = cr+dr, nc = cc+dc;
          if (nr>=0&&nr<n&&nc>=0&&nc<n&&grid[nr][nc]===1) { grid[nr][nc] = id; q.push([nr, nc]); }
        }
      }
      size.set(id++, s);
    }
  }
  let ans = size.size > 0 ? Math.max(...size.values()) : 0;
  for (let r = 0; r < n; r++) {
    for (let c = 0; c < n; c++) {
      if (grid[r][c] !== 0) continue;
      const seen = new Set<number>(); let s = 1;
      for (const [dr, dc] of dirs) {
        const nr = r+dr, nc = c+dc;
        if (nr>=0&&nr<n&&nc>=0&&nc<n&&grid[nr][nc]>1&&!seen.has(grid[nr][nc])) {
          seen.add(grid[nr][nc]); s += size.get(grid[nr][nc])!;
        }
      }
      ans = Math.max(ans, s);
    }
  }
  return ans;
}`,
    python: `def largestIsland(grid):
    n = len(grid)
    dirs = [(0,1),(0,-1),(1,0),(-1,0)]
    island_id = 2; size = {}
    for r in range(n):
        for c in range(n):
            if grid[r][c] != 1: continue
            q = [(r, c)]; grid[r][c] = island_id; s = 0; h = 0
            while h < len(q):
                cr, cc = q[h]; h += 1; s += 1
                for dr, dc in dirs:
                    nr, nc = cr+dr, cc+dc
                    if 0<=nr<n and 0<=nc<n and grid[nr][nc]==1:
                        grid[nr][nc] = island_id; q.append((nr, nc))
            size[island_id] = s; island_id += 1
    ans = max(size.values(), default=0)
    for r in range(n):
        for c in range(n):
            if grid[r][c] != 0: continue
            seen = set(); s = 1
            for dr, dc in dirs:
                nr, nc = r+dr, c+dc
                if 0<=nr<n and 0<=nc<n and grid[nr][nc]>1 and grid[nr][nc] not in seen:
                    seen.add(grid[nr][nc]); s += size[grid[nr][nc]]
            ans = max(ans, s)
    return ans`,
  },
  visibleTests: [
    { args: [[[1,0],[0,1]]], expected: 3 },
    { args: [[[1,1],[1,0]]], expected: 4 },
    { args: [[[1,1],[1,1]]], expected: 4 },
  ],
  hiddenTests: [
    { args: [[[0,0],[0,0]]], expected: 1 },
    { args: [[[1,0,1],[0,0,0],[1,0,1]]], expected: 3 },
    { args: [[[1,1,0],[0,0,0],[0,0,1]]], expected: 3 },
    { args: [[[0,1],[1,0]]], expected: 3 },
    { args: [[[1]]], expected: 1 },
    { args: [[[0]]], expected: 1 },
  ],
};
