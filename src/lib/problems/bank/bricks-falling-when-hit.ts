import type { Problem } from '../types';

export const problem: Problem = {
  id: 'bricks-falling-when-hit',
  title: 'Bricks Falling When Hit',
  difficulty: 'hard',
  tags: ['simulation', 'union-find', 'arrays'],
  description: `You are given an \`m x n\` binary grid, where each \`1\` represents a brick and each \`0\` represents an empty space. A brick is **stable** if:
- It is directly connected to the **top** of the grid, or
- At least one other brick in its four adjacent cells is stable.

You are given an array \`hits\`, the sequence of bricks you will erase (one per step). Each step erases the brick at position \`hits[i] = [r_i, c_i]\` (if there is one). After each erasure, some bricks may no longer be stable and will **fall**.

Return an array \`result\`, where \`result[i]\` is the number of bricks that **fall** after the \`i\`-th erasure (not counting the erased brick itself, which just disappears).`,
  constraints: [
    'm == grid.length',
    'n == grid[0].length',
    '1 <= m, n <= 200',
    '1 <= hits.length <= 4 * 10^4',
    '0 <= hits[i][0] < m',
    '0 <= hits[i][1] < n',
    'grid[i][j] is 0 or 1',
    'All (r_i, c_i) are unique',
  ],
  examples: [
    {
      input: 'grid = [[1,0,0,0],[1,1,1,0]], hits = [[1,0]]',
      output: '[2]',
      explanation:
        'Erasing (1,0) disconnects bricks (1,1) and (1,2) from the top. Both fall.',
    },
    {
      input: 'grid = [[1,0,0,0],[1,1,0,0]], hits = [[1,1],[1,0]]',
      output: '[0,0]',
      explanation:
        'Hit (1,1): brick (1,0) remains connected via the top row. 0 fall. Hit (1,0): it was already gone effectively.',
    },
  ],
  hints: [
    'Process hits in **reverse order**: instead of removing bricks, add them back one at a time. Use Union-Find with a virtual "top" node that connects to all bricks in row 0.',
    'Before reversing, erase all hits from the grid. Build the initial Union-Find state. Then re-add each hit brick (in reverse); after each union, the number of bricks that would have fallen when that brick was removed equals (new top-component size) - (old top-component size) - 1.',
    '```js\nfunction hitBricks(grid, hits) {\n  const m = grid.length, n = grid[0].length;\n  const g = grid.map(r => [...r]);\n  for (const [r, c] of hits) g[r][c] = 0;\n  const TOP = m * n;\n  const parent = Array.from({length: m*n+1}, (_, i) => i);\n  const size = new Array(m*n+1).fill(1);\n  // build UF, union, then reverse hits...\n}\n```',
  ],
  functionName: 'hitBricks',
  params: ['grid', 'hits'],
  starterCode: {
    javascript: `function hitBricks(grid, hits) {
  const m = grid.length, n = grid[0].length;
  // Work on a copy; erase all hit bricks first
  const g = grid.map(r => [...r]);
  for (const [r, c] of hits) g[r][c] = 0;

  const TOP = m * n;
  const parent = Array.from({length: m * n + 1}, (_, i) => i);
  const size = new Array(m * n + 1).fill(1);

  function find(x) {
    while (parent[x] !== x) { parent[x] = parent[parent[x]]; x = parent[x]; }
    return x;
  }
  function union(x, y) {
    x = find(x); y = find(y);
    if (x === y) return;
    if (size[x] < size[y]) { const t = x; x = y; y = t; }
    parent[y] = x;
    size[x] += size[y];
  }
  function idx(r, c) { return r * n + c; }

  // Build initial union-find for the grid after all hits
  for (let r = 0; r < m; r++) {
    for (let c = 0; c < n; c++) {
      if (!g[r][c]) continue;
      if (r === 0) union(idx(r, c), TOP);
      if (r > 0 && g[r - 1][c]) union(idx(r, c), idx(r - 1, c));
      if (c > 0 && g[r][c - 1]) union(idx(r, c), idx(r, c - 1));
    }
  }

  const dirs = [[1, 0], [-1, 0], [0, 1], [0, -1]];
  const result = new Array(hits.length).fill(0);

  for (let i = hits.length - 1; i >= 0; i--) {
    const [r, c] = hits[i];
    if (!grid[r][c]) continue; // was already empty
    const prevTopSize = size[find(TOP)];
    g[r][c] = 1;
    if (r === 0) union(idx(r, c), TOP);
    for (const [dr, dc] of dirs) {
      const nr = r + dr, nc = c + dc;
      if (nr >= 0 && nr < m && nc >= 0 && nc < n && g[nr][nc]) {
        union(idx(r, c), idx(nr, nc));
      }
    }
    const newTopSize = size[find(TOP)];
    result[i] = Math.max(0, newTopSize - prevTopSize - 1);
  }
  return result;
}`,
    typescript: `function hitBricks(grid: number[][], hits: number[][]): number[] {
  const m = grid.length, n = grid[0].length;
  const g = grid.map(r => [...r]);
  for (const [r, c] of hits) g[r][c] = 0;

  const TOP = m * n;
  const parent = Array.from({length: m * n + 1}, (_, i) => i);
  const size = new Array(m * n + 1).fill(1);

  function find(x: number): number {
    while (parent[x] !== x) { parent[x] = parent[parent[x]]!; x = parent[x]!; }
    return x;
  }
  function union(x: number, y: number): void {
    x = find(x); y = find(y);
    if (x === y) return;
    if (size[x]! < size[y]!) { const t = x; x = y; y = t; }
    parent[y] = x;
    size[x]! += size[y]!;
  }
  function idx(r: number, c: number): number { return r * n + c; }

  for (let r = 0; r < m; r++) {
    for (let c = 0; c < n; c++) {
      if (!g[r][c]) continue;
      if (r === 0) union(idx(r, c), TOP);
      if (r > 0 && g[r - 1][c]) union(idx(r, c), idx(r - 1, c));
      if (c > 0 && g[r][c - 1]) union(idx(r, c), idx(r, c - 1));
    }
  }

  const dirs = [[1, 0], [-1, 0], [0, 1], [0, -1]];
  const result = new Array(hits.length).fill(0);

  for (let i = hits.length - 1; i >= 0; i--) {
    const [r, c] = hits[i]!;
    if (!grid[r!][c!]) continue;
    const prevTopSize = size[find(TOP)]!;
    g[r!][c!] = 1;
    if (r === 0) union(idx(r!, c!), TOP);
    for (const [dr, dc] of dirs) {
      const nr = r! + dr!, nc = c! + dc!;
      if (nr >= 0 && nr < m && nc >= 0 && nc < n && g[nr][nc]) {
        union(idx(r!, c!), idx(nr, nc));
      }
    }
    const newTopSize = size[find(TOP)]!;
    result[i] = Math.max(0, newTopSize - prevTopSize - 1);
  }
  return result;
}`,
    python: `def hitBricks(grid, hits):
    m, n = len(grid), len(grid[0])
    g = [row[:] for row in grid]
    for r, c in hits:
        g[r][c] = 0

    TOP = m * n
    parent = list(range(m * n + 1))
    size = [1] * (m * n + 1)

    def find(x):
        while parent[x] != x:
            parent[x] = parent[parent[x]]
            x = parent[x]
        return x

    def union(x, y):
        x, y = find(x), find(y)
        if x == y:
            return
        if size[x] < size[y]:
            x, y = y, x
        parent[y] = x
        size[x] += size[y]

    def idx(r, c):
        return r * n + c

    for r in range(m):
        for c in range(n):
            if not g[r][c]:
                continue
            if r == 0:
                union(idx(r, c), TOP)
            if r > 0 and g[r - 1][c]:
                union(idx(r, c), idx(r - 1, c))
            if c > 0 and g[r][c - 1]:
                union(idx(r, c), idx(r, c - 1))

    dirs = [(1, 0), (-1, 0), (0, 1), (0, -1)]
    result = [0] * len(hits)

    for i in range(len(hits) - 1, -1, -1):
        r, c = hits[i]
        if not grid[r][c]:
            continue
        prev_top = size[find(TOP)]
        g[r][c] = 1
        if r == 0:
            union(idx(r, c), TOP)
        for dr, dc in dirs:
            nr, nc = r + dr, c + dc
            if 0 <= nr < m and 0 <= nc < n and g[nr][nc]:
                union(idx(r, c), idx(nr, nc))
        new_top = size[find(TOP)]
        result[i] = max(0, new_top - prev_top - 1)

    return result
`,
  },
  visibleTests: [
    {
      args: [[[1, 0, 0, 0], [1, 1, 1, 0]], [[1, 0]]],
      expected: [2],
    },
    {
      args: [[[1, 0, 0, 0], [1, 1, 0, 0]], [[1, 1], [1, 0]]],
      expected: [0, 0],
    },
  ],
  hiddenTests: [
    {
      args: [[[1], [1], [1], [1], [1]], [[3, 0], [4, 0], [1, 0], [2, 0], [0, 0]]],
      expected: [1, 0, 1, 0, 0],
    },
    {
      args: [[[1, 1, 1], [0, 1, 0], [0, 1, 0]], [[0, 2]]],
      expected: [0],
    },
    {
      args: [[[1, 0], [1, 1]], [[0, 0]]],
      expected: [2],
    },
    {
      args: [[[0, 1, 1], [1, 1, 1]], [[0, 0]]],
      expected: [0],
    },
  ],
};
