import type { Problem } from '../types';

export const problem: Problem = {
  id: 'stamping-the-grid',
  title: 'Stamping the Grid',
  difficulty: 'hard',
  tags: ['arrays', 'binary-indexed-tree'],
  description: `You are given an \`m x n\` binary matrix \`grid\` where each cell is either \`0\` (empty) or \`1\` (occupied).

You are also given an integer \`stampHeight\` and an integer \`stampWidth\`. We want to fit stamps such that:

- Each stamp must be placed completely within the grid.
- A stamp occupies a rectangular region of \`stampHeight x stampWidth\` cells.
- A stamp can only be placed on **empty** cells (cells with value \`0\`).
- Stamps **may overlap** each other.

We want to fit as many stamps as possible. Return \`true\` *if it is possible to fill all empty cells with stamps. Otherwise, return* \`false\`.`,
  constraints: [
    'm == grid.length',
    'n == grid[i].length',
    '1 <= m, n <= 10^5',
    '1 <= m * n <= 2 * 10^5',
    'grid[i][j] is either 0 or 1.',
    '1 <= stampHeight, stampWidth <= 10^5',
  ],
  examples: [
    {
      input: 'grid = [[1,0,0,0],[1,0,0,0],[1,0,0,0],[1,0,0,0],[1,0,0,0]], stampHeight = 4, stampWidth = 3',
      output: 'true',
      explanation:
        'We can place a single stamp of 4×3 covering rows 0-3 and columns 1-3. All empty cells are covered.',
    },
    {
      input: 'grid = [[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]], stampHeight = 2, stampWidth = 2',
      output: 'false',
      explanation:
        'No 2×2 stamp can be placed on cells that are all empty, so there will always be uncovered empty cells.',
    },
  ],
  hints: [
    'Level 1: Think about which positions can have a stamp placed (top-left corner). Then check if every empty cell is covered by at least one valid stamp.',
    'Level 2: Use a 2D prefix sum of grid to check if any stampHeight×stampWidth rectangle contains a 1 (making it invalid for a stamp). Build a "can stamp here" matrix. Then use a 2D prefix sum of that matrix to check if every 0-cell in grid is covered by at least one stamp.',
    'Level 3: O(m*n) time with two prefix sum passes: (1) stamp validity: a top-left (r,c) is valid if the sum in the rectangle [r..r+H-1][c..c+W-1] is zero; (2) coverage: for each 0-cell, check if any valid stamp covers it using its own prefix sum.',
  ],
  functionName: 'possibleToStamp',
  params: ['grid', 'stampHeight', 'stampWidth'],
  starterCode: {
    javascript: `function possibleToStamp(grid, stampHeight, stampWidth) {
  const m = grid.length, n = grid[0].length;
  // 2D prefix sum of grid (1 = blocked)
  const pre = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));
  for (let r = 1; r <= m; r++)
    for (let c = 1; c <= n; c++)
      pre[r][c] = grid[r-1][c-1] + pre[r-1][c] + pre[r][c-1] - pre[r-1][c-1];
  const query = (r1, c1, r2, c2) =>
    pre[r2][c2] - pre[r1-1][c2] - pre[r2][c1-1] + pre[r1-1][c1-1];
  // stamp[r][c] = 1 if a stamp with top-left at (r-1, c-1) is valid
  const stamp = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));
  for (let r = 1; r + stampHeight - 1 <= m; r++)
    for (let c = 1; c + stampWidth - 1 <= n; c++)
      if (query(r, c, r + stampHeight - 1, c + stampWidth - 1) === 0) stamp[r][c] = 1;
  // 2D prefix sum of stamp coverage
  const cov = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));
  for (let r = 1; r <= m; r++)
    for (let c = 1; c <= n; c++)
      cov[r][c] = stamp[r][c] + cov[r-1][c] + cov[r][c-1] - cov[r-1][c-1];
  const covQuery = (r1, c1, r2, c2) =>
    cov[r2][c2] - cov[r1-1][c2] - cov[r2][c1-1] + cov[r1-1][c1-1];
  // Every empty cell must be covered by at least one valid stamp
  for (let r = 1; r <= m; r++)
    for (let c = 1; c <= n; c++) {
      if (grid[r-1][c-1] === 1) continue;
      const r1 = Math.max(1, r - stampHeight + 1), c1 = Math.max(1, c - stampWidth + 1);
      if (covQuery(r1, c1, r, c) === 0) return false;
    }
  return true;
}`,
    typescript: `function possibleToStamp(grid: number[][], stampHeight: number, stampWidth: number): boolean {
  const m = grid.length, n = grid[0].length;
  const pre = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));
  for (let r = 1; r <= m; r++)
    for (let c = 1; c <= n; c++)
      pre[r][c] = grid[r-1][c-1] + pre[r-1][c] + pre[r][c-1] - pre[r-1][c-1];
  const query = (r1: number, c1: number, r2: number, c2: number) =>
    pre[r2][c2] - pre[r1-1][c2] - pre[r2][c1-1] + pre[r1-1][c1-1];
  const stamp = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));
  for (let r = 1; r + stampHeight - 1 <= m; r++)
    for (let c = 1; c + stampWidth - 1 <= n; c++)
      if (query(r, c, r + stampHeight - 1, c + stampWidth - 1) === 0) stamp[r][c] = 1;
  const cov = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));
  for (let r = 1; r <= m; r++)
    for (let c = 1; c <= n; c++)
      cov[r][c] = stamp[r][c] + cov[r-1][c] + cov[r][c-1] - cov[r-1][c-1];
  const covQuery = (r1: number, c1: number, r2: number, c2: number) =>
    cov[r2][c2] - cov[r1-1][c2] - cov[r2][c1-1] + cov[r1-1][c1-1];
  for (let r = 1; r <= m; r++)
    for (let c = 1; c <= n; c++) {
      if (grid[r-1][c-1] === 1) continue;
      const r1 = Math.max(1, r - stampHeight + 1), c1 = Math.max(1, c - stampWidth + 1);
      if (covQuery(r1, c1, r, c) === 0) return false;
    }
  return true;
}`,
    python: `def possibleToStamp(grid, stampHeight, stampWidth):
    m, n = len(grid), len(grid[0])
    # 2D prefix sum (1-indexed)
    pre = [[0] * (n + 1) for _ in range(m + 1)]
    for r in range(1, m + 1):
        for c in range(1, n + 1):
            pre[r][c] = grid[r-1][c-1] + pre[r-1][c] + pre[r][c-1] - pre[r-1][c-1]
    def query(r1, c1, r2, c2):
        return pre[r2][c2] - pre[r1-1][c2] - pre[r2][c1-1] + pre[r1-1][c1-1]
    # stamp[r][c] = 1 if top-left (r-1,c-1) is a valid stamp position
    stamp = [[0] * (n + 1) for _ in range(m + 1)]
    for r in range(1, m - stampHeight + 2):
        for c in range(1, n - stampWidth + 2):
            if query(r, c, r + stampHeight - 1, c + stampWidth - 1) == 0:
                stamp[r][c] = 1
    # 2D prefix sum of stamp
    cov = [[0] * (n + 1) for _ in range(m + 1)]
    for r in range(1, m + 1):
        for c in range(1, n + 1):
            cov[r][c] = stamp[r][c] + cov[r-1][c] + cov[r][c-1] - cov[r-1][c-1]
    def cov_query(r1, c1, r2, c2):
        return cov[r2][c2] - cov[r1-1][c2] - cov[r2][c1-1] + cov[r1-1][c1-1]
    for r in range(1, m + 1):
        for c in range(1, n + 1):
            if grid[r-1][c-1] == 1:
                continue
            r1 = max(1, r - stampHeight + 1)
            c1 = max(1, c - stampWidth + 1)
            if cov_query(r1, c1, r, c) == 0:
                return False
    return True`,
  },
  visibleTests: [
    {
      args: [[[1, 0, 0, 0], [1, 0, 0, 0], [1, 0, 0, 0], [1, 0, 0, 0], [1, 0, 0, 0]], 4, 3],
      expected: true,
    },
    {
      args: [[[1, 0, 0, 0], [0, 1, 0, 0], [0, 0, 1, 0], [0, 0, 0, 1]], 2, 2],
      expected: false,
    },
  ],
  hiddenTests: [
    { args: [[[0]], 1, 1], expected: true },
    { args: [[[1]], 1, 1], expected: true },
    { args: [[[0, 0], [0, 0]], 1, 1], expected: true },
    { args: [[[0, 1], [0, 0]], 2, 2], expected: false },
    { args: [[[0, 0, 0], [0, 0, 0], [0, 0, 0]], 2, 2], expected: true },
    { args: [[[0, 0, 0], [0, 1, 0], [0, 0, 0]], 2, 2], expected: false },
    { args: [[[0]], 2, 2], expected: false },
  ],
};
