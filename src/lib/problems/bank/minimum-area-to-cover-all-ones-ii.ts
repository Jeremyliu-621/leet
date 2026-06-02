import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-area-to-cover-all-ones-ii',
  title: 'Minimum Area to Cover All Ones II',
  difficulty: 'hard',
  tags: ['arrays', 'math'],
  description: `You are given a 2D binary array \`grid\`. You need to find **3 non-overlapping rectangles** with **horizontal and vertical edges** that together cover all cells with value \`1\`.

Return the **minimum** sum of the areas of these three rectangles. Each rectangle is axis-aligned (sides parallel to grid edges). Rectangles may share an edge but not interior cells. A rectangle that contains no \`1\`s has area 0 and may be omitted.

**Note:** Rectangles in this context are defined as the smallest bounding rectangle that covers the \`1\`s assigned to it — you cannot split a region's \`1\`s across two rectangles arbitrarily; instead you partition the grid into up to 3 regions via straight cuts.`,
  constraints: [
    '1 <= grid.length, grid[0].length <= 30',
    'grid[i][j] is either 0 or 1.',
    'The input is generated such that there is at least one 1 in grid.',
  ],
  examples: [
    {
      input: 'grid = [[1,0,1],[1,1,1]]',
      output: '5',
      explanation:
        'One optimal split: top-right rectangle covers [0][2] (area 1), bottom-left covers [1][0] (area 1), middle rectangle covers [1][1..[1][2] and [0][0..0][1] region. Actually split horizontally: top row as 2 rectangles [0][0] (area 1) and [0][2] (area 1), bottom row as one rectangle (area 3) → total 5.',
    },
    {
      input: 'grid = [[1,0,1,0],[0,1,0,1]]',
      output: '5',
      explanation:
        'Split into 3 sections covering the four 1s with minimum total bounding area = 5.',
    },
  ],
  hints: [
    'There are only 6 ways to divide a grid into 3 non-overlapping rectangles using axis-aligned cuts: two horizontal cuts (HHH), two vertical cuts (VVV), one horizontal then one vertical in the top half (H then V|top), one horizontal then one vertical in the bottom half (H then V|bot), one vertical then one horizontal in the left half (V then H|left), one vertical then one horizontal in the right half (V then H|right).',
    'For each of the 6 configurations, iterate over all possible cut positions. For each sub-rectangle, compute its bounding box of 1s (shrink to tight bounds). The area is `(maxRow - minRow + 1) * (maxCol - minCol + 1)` if any 1s are present, else 0.',
    'Use 2D prefix sums to quickly count 1s in any sub-rectangle in O(1). To find the tight bounding box of 1s in a sub-rectangle, scan rows and columns — O(m + n) per query — which is fast enough for 30×30 grids.',
  ],
  functionName: 'minimumSumOfAreas',
  params: ['grid'],
  starterCode: {
    javascript: `function minimumSumOfAreas(grid) {
  const m = grid.length, n = grid[0].length;
  function box(r1, r2, c1, c2) {
    if (r1 > r2 || c1 > c2) return 0;
    let mr = r2, xr = r1, mc = c2, xc = c1, found = false;
    for (let r = r1; r <= r2; r++) for (let c = c1; c <= c2; c++) if (grid[r][c]) {
      found = true; if (r < mr) mr = r; if (r > xr) xr = r; if (c < mc) mc = c; if (c > xc) xc = c;
    }
    return found ? (xr-mr+1)*(xc-mc+1) : 0;
  }
  let best = Infinity;
  for (let i = 1; i < m; i++) for (let j = i; j < m; j++)
    best = Math.min(best, box(0,i-1,0,n-1)+box(i,j,0,n-1)+box(j+1,m-1,0,n-1));
  for (let i = 1; i < n; i++) for (let j = i; j < n; j++)
    best = Math.min(best, box(0,m-1,0,i-1)+box(0,m-1,i,j)+box(0,m-1,j+1,n-1));
  for (let r = 1; r < m; r++) for (let c = 1; c < n; c++) {
    best = Math.min(best, box(0,r-1,0,c-1)+box(0,r-1,c,n-1)+box(r,m-1,0,n-1));
    best = Math.min(best, box(0,r-1,0,n-1)+box(r,m-1,0,c-1)+box(r,m-1,c,n-1));
    best = Math.min(best, box(0,r-1,0,c-1)+box(r,m-1,0,c-1)+box(0,m-1,c,n-1));
    best = Math.min(best, box(0,m-1,0,c-1)+box(0,r-1,c,n-1)+box(r,m-1,c,n-1));
  }
  return best;
}`,
    typescript: `function minimumSumOfAreas(grid: number[][]): number {
  const m = grid.length, n = grid[0]!.length;
  function box(r1: number, r2: number, c1: number, c2: number): number {
    if (r1 > r2 || c1 > c2) return 0;
    let mr = r2, xr = r1, mc = c2, xc = c1, found = false;
    for (let r = r1; r <= r2; r++) for (let c = c1; c <= c2; c++) if (grid[r]![c]) {
      found = true; if (r < mr) mr = r; if (r > xr) xr = r; if (c < mc) mc = c; if (c > xc) xc = c;
    }
    return found ? (xr-mr+1)*(xc-mc+1) : 0;
  }
  let best = Infinity;
  for (let i = 1; i < m; i++) for (let j = i; j < m; j++)
    best = Math.min(best, box(0,i-1,0,n-1)+box(i,j,0,n-1)+box(j+1,m-1,0,n-1));
  for (let i = 1; i < n; i++) for (let j = i; j < n; j++)
    best = Math.min(best, box(0,m-1,0,i-1)+box(0,m-1,i,j)+box(0,m-1,j+1,n-1));
  for (let r = 1; r < m; r++) for (let c = 1; c < n; c++) {
    best = Math.min(best, box(0,r-1,0,c-1)+box(0,r-1,c,n-1)+box(r,m-1,0,n-1));
    best = Math.min(best, box(0,r-1,0,n-1)+box(r,m-1,0,c-1)+box(r,m-1,c,n-1));
    best = Math.min(best, box(0,r-1,0,c-1)+box(r,m-1,0,c-1)+box(0,m-1,c,n-1));
    best = Math.min(best, box(0,m-1,0,c-1)+box(0,r-1,c,n-1)+box(r,m-1,c,n-1));
  }
  return best;
}`,
    python: `def minimumSumOfAreas(grid):
    if hasattr(grid, 'to_py'): grid = grid.to_py()
    grid = [[int(v) for v in (r.to_py() if hasattr(r,'to_py') else r)] for r in grid]
    m, n = len(grid), len(grid[0])
    def box(r1, r2, c1, c2):
        if r1 > r2 or c1 > c2: return 0
        mr, xr, mc, xc = r2, r1, c2, c1; found = False
        for r in range(r1, r2+1):
            for c in range(c1, c2+1):
                if grid[r][c]:
                    found = True
                    mr = min(mr,r); xr = max(xr,r); mc = min(mc,c); xc = max(xc,c)
        return (xr-mr+1)*(xc-mc+1) if found else 0
    best = float('inf')
    for i in range(1,m):
        for j in range(i,m):
            best = min(best, box(0,i-1,0,n-1)+box(i,j,0,n-1)+box(j+1,m-1,0,n-1))
    for i in range(1,n):
        for j in range(i,n):
            best = min(best, box(0,m-1,0,i-1)+box(0,m-1,i,j)+box(0,m-1,j+1,n-1))
    for r in range(1,m):
        for c in range(1,n):
            best = min(best, box(0,r-1,0,c-1)+box(0,r-1,c,n-1)+box(r,m-1,0,n-1))
            best = min(best, box(0,r-1,0,n-1)+box(r,m-1,0,c-1)+box(r,m-1,c,n-1))
            best = min(best, box(0,r-1,0,c-1)+box(r,m-1,0,c-1)+box(0,m-1,c,n-1))
            best = min(best, box(0,m-1,0,c-1)+box(0,r-1,c,n-1)+box(r,m-1,c,n-1))
    return best`,
  },
  visibleTests: [
    {
      args: [
        [
          [1, 0, 1],
          [1, 1, 1],
        ],
      ],
      expected: 5,
    },
    {
      args: [
        [
          [1, 0, 1, 0],
          [0, 1, 0, 1],
        ],
      ],
      expected: 5,
    },
  ],
  hiddenTests: [
    { args: [[[1, 1], [1, 0]]], expected: 3 },
    {
      args: [
        [
          [1, 0],
          [0, 1],
        ],
      ],
      expected: 2,
    },
    {
      args: [
        [
          [1, 1],
          [1, 1],
        ],
      ],
      expected: 4,
    },
    {
      args: [
        [
          [1, 0, 0],
          [0, 0, 0],
          [0, 0, 1],
        ],
      ],
      expected: 2,
    },
    {
      args: [
        [
          [1, 1, 1],
          [1, 1, 1],
          [1, 1, 1],
        ],
      ],
      expected: 9,
    },
    {
      args: [
        [
          [1, 0, 0, 1],
          [0, 0, 0, 0],
          [1, 0, 0, 1],
        ],
      ],
      expected: 5,
    },
  ],
};
