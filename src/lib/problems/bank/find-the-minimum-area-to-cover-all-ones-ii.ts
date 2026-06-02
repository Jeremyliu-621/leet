import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-the-minimum-area-to-cover-all-ones-ii',
  title: 'Find the Minimum Area to Cover All Ones II',
  difficulty: 'hard',
  tags: ['arrays', 'binary-search'],
  description: `You are given a 2D **binary** array \`grid\`. You need to find **3 non-overlapping rectangles** with **horizontal** and **vertical** sides such that all the 1s in \`grid\` are covered by these rectangles.

Return the **minimum** possible sum of the area of these rectangles.

Note that the rectangles are allowed to cover cells that do not contain 1s, and the 3 rectangles must cover **all** the 1s.`,
  constraints: [
    '1 <= grid.length, grid[i].length <= 30',
    'grid[i][j] is either 0 or 1.',
    'There are at least 3 cells with the value of 1 in the grid.',
  ],
  examples: [
    {
      input: 'grid = [[1,0,1],[1,1,1]]',
      output: '5',
      explanation: 'One optimal split: top-left [1], top-right [1], bottom [1,1,1]. Areas: 1+1+3=5.',
    },
    {
      input: 'grid = [[1,0,0],[0,1,0],[0,0,1]]',
      output: '3',
      explanation: 'Three 1×1 rectangles each covering one diagonal cell. 1+1+1=3.',
    },
  ],
  hints: [
    'Level 1: Try all 6 ways to partition the grid into 3 non-overlapping axis-aligned rectangles: (a) 2 horizontal cuts, (b) 2 vertical cuts, (c) 1 horizontal + 1 vertical in 4 orientations.',
    'Level 2: For each partition, compute the minimum bounding box of all 1s in each sub-region. If a region has no 1s, its area is 0. The total area = sum of the 3 bounding boxes.',
    'Level 3: Precompute a helper `minBox(r1,c1,r2,c2)` that finds min bounding box area of 1s in that subgrid. Then enumerate: 2 horizontal splits i,j in [0,rows]; 2 vertical splits; mixed splits.',
  ],
  functionName: 'minimumSum',
  params: ['grid'],
  starterCode: {
    javascript: `function minimumSum(grid) {
  const m = grid.length, n = grid[0].length;
  function minBox(r1, c1, r2, c2) {
    let minR = Infinity, maxR = -1, minC = Infinity, maxC = -1;
    for (let r = r1; r <= r2; r++) for (let c = c1; c <= c2; c++) if (grid[r][c]) {
      if (r < minR) minR = r; if (r > maxR) maxR = r;
      if (c < minC) minC = c; if (c > maxC) maxC = c;
    }
    return maxR < 0 ? 0 : (maxR - minR + 1) * (maxC - minC + 1);
  }
  let ans = Infinity;
  for (let i = 0; i < m - 2; i++) for (let j = i + 1; j < m - 1; j++)
    ans = Math.min(ans, minBox(0,0,i,n-1) + minBox(i+1,0,j,n-1) + minBox(j+1,0,m-1,n-1));
  for (let i = 0; i < n - 2; i++) for (let j = i + 1; j < n - 1; j++)
    ans = Math.min(ans, minBox(0,0,m-1,i) + minBox(0,i+1,m-1,j) + minBox(0,j+1,m-1,n-1));
  for (let i = 0; i < m - 1; i++) for (let j = 0; j < n - 1; j++) {
    ans = Math.min(ans, minBox(0,0,i,n-1) + minBox(i+1,0,m-1,j) + minBox(i+1,j+1,m-1,n-1));
    ans = Math.min(ans, minBox(0,0,i,j) + minBox(0,j+1,i,n-1) + minBox(i+1,0,m-1,n-1));
    ans = Math.min(ans, minBox(0,0,m-1,j) + minBox(0,j+1,i,n-1) + minBox(i+1,j+1,m-1,n-1));
    ans = Math.min(ans, minBox(0,0,i,j) + minBox(i+1,0,m-1,j) + minBox(0,j+1,m-1,n-1));
  }
  return ans;
}
`,
    typescript: `function minimumSum(grid: number[][]): number {
  const m = grid.length, n = grid[0]!.length;
  function minBox(r1: number, c1: number, r2: number, c2: number): number {
    let minR = Infinity, maxR = -1, minC = Infinity, maxC = -1;
    for (let r = r1; r <= r2; r++) for (let c = c1; c <= c2; c++) if (grid[r]![c]) {
      if (r < minR) minR = r; if (r > maxR) maxR = r;
      if (c < minC) minC = c; if (c > maxC) maxC = c;
    }
    return maxR < 0 ? 0 : (maxR - minR + 1) * (maxC - minC + 1);
  }
  let ans = Infinity;
  for (let i = 0; i < m - 2; i++) for (let j = i + 1; j < m - 1; j++)
    ans = Math.min(ans, minBox(0,0,i,n-1) + minBox(i+1,0,j,n-1) + minBox(j+1,0,m-1,n-1));
  for (let i = 0; i < n - 2; i++) for (let j = i + 1; j < n - 1; j++)
    ans = Math.min(ans, minBox(0,0,m-1,i) + minBox(0,i+1,m-1,j) + minBox(0,j+1,m-1,n-1));
  for (let i = 0; i < m - 1; i++) for (let j = 0; j < n - 1; j++) {
    ans = Math.min(ans, minBox(0,0,i,n-1) + minBox(i+1,0,m-1,j) + minBox(i+1,j+1,m-1,n-1));
    ans = Math.min(ans, minBox(0,0,i,j) + minBox(0,j+1,i,n-1) + minBox(i+1,0,m-1,n-1));
    ans = Math.min(ans, minBox(0,0,m-1,j) + minBox(0,j+1,i,n-1) + minBox(i+1,j+1,m-1,n-1));
    ans = Math.min(ans, minBox(0,0,i,j) + minBox(i+1,0,m-1,j) + minBox(0,j+1,m-1,n-1));
  }
  return ans;
}
`,
    python: `def minimumSum(grid):
    if hasattr(grid, 'to_py'): grid = grid.to_py()
    grid = [[int(v) for v in (r.to_py() if hasattr(r,'to_py') else r)] for r in grid]
    m, n = len(grid), len(grid[0])
    def min_box(r1, c1, r2, c2):
        pts = [(r,c) for r in range(r1,r2+1) for c in range(c1,c2+1) if grid[r][c]]
        if not pts: return 0
        rs = [p[0] for p in pts]; cs = [p[1] for p in pts]
        return (max(rs)-min(rs)+1)*(max(cs)-min(cs)+1)
    ans = float('inf')
    for i in range(m-2):
        for j in range(i+1, m-1):
            ans = min(ans, min_box(0,0,i,n-1)+min_box(i+1,0,j,n-1)+min_box(j+1,0,m-1,n-1))
    for i in range(n-2):
        for j in range(i+1, n-1):
            ans = min(ans, min_box(0,0,m-1,i)+min_box(0,i+1,m-1,j)+min_box(0,j+1,m-1,n-1))
    for i in range(m-1):
        for j in range(n-1):
            ans = min(ans, min_box(0,0,i,n-1)+min_box(i+1,0,m-1,j)+min_box(i+1,j+1,m-1,n-1))
            ans = min(ans, min_box(0,0,i,j)+min_box(0,j+1,i,n-1)+min_box(i+1,0,m-1,n-1))
            ans = min(ans, min_box(0,0,m-1,j)+min_box(0,j+1,i,n-1)+min_box(i+1,j+1,m-1,n-1))
            ans = min(ans, min_box(0,0,i,j)+min_box(i+1,0,m-1,j)+min_box(0,j+1,m-1,n-1))
    return ans
`,
  },
  visibleTests: [
    {
      args: [[[1,0,1],[1,1,1]]],
      expected: 5,
    },
    {
      args: [[[1,0,0],[0,1,0],[0,0,1]]],
      expected: 3,
    },
  ],
  hiddenTests: [
    {
      args: [[[1,0,0],[0,0,0],[0,0,1]]],
      expected: 2,
    },
    {
      args: [[[1,1,0,1,1]]],
      expected: 4,
    },
    {
      args: [[[1,0],[0,1],[1,0]]],
      expected: 3,
    },
  ],
};
