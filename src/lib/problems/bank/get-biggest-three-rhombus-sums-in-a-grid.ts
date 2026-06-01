import type { Problem } from '../types';

export const problem: Problem = {
  id: 'get-biggest-three-rhombus-sums-in-a-grid',
  title: 'Get Biggest Three Rhombus Sums in a Grid',
  difficulty: 'medium',
  tags: ['arrays', 'math', 'simulation'],
  description: `You are given an \`m x n\` integer matrix \`grid\`.

A **rhombus sum** is the sum of the elements that form **the border** of a regular rhombus shape in \`grid\`. The rhombus must have each of the four corners located in some row of the matrix. Every unit rhombus has a size defined by the length of **each side** and consists of border elements only. For example, the rhombus with a side length of 1 is a single element; the rhombus with side length of 2 is a diamond shape formed by 4 elements.

Return the **biggest three distinct rhombus sums** in the \`grid\` in **descending order**. If there are fewer than three distinct values, return all of them.

A **rhombus** centered at \`(r, c)\` with side length \`k\`:
- Consists of cells on the 4 diagonal arms extending to distance k from the center.
- Includes \`4k\` cells when k ≥ 1 (single cell when k = 0).`,
  constraints: [
    'm == grid.length',
    'n == grid[i].length',
    '1 <= m, n <= 50',
    '1 <= grid[i][j] <= 10^5',
  ],
  examples: [
    {
      input: 'grid = [[3,4,5,1,3],[3,3,4,2,3],[20,30,200,40,10],[1,5,5,4,1],[4,3,2,2,5]]',
      output: '[228,216,211]',
      explanation:
        'The biggest rhombus sum is 228 (the large rhombus centered at (2,2) with size 2: 30+40+5+5+200+3+4... summing the 8 border cells). The second biggest is 216, third is 211.',
    },
    {
      input: 'grid = [[1,2,3],[4,5,6],[7,8,9]]',
      output: '[20,9,8]',
      explanation:
        'The rhombus of size 1 centered at (1,1) has sum 2+4+6+8=20 (the 4 border cells). The next biggest distinct values are single cells 9 and 8.',
    },
    {
      input: 'grid = [[1,2],[3,4]]',
      output: '[4,3,2]',
      explanation:
        'No rhombus of size ≥ 1 fits in a 2×2 grid. The 3 biggest distinct single-cell values are 4, 3, 2.',
    },
  ],
  hints: [
    'Level 1: For each cell (r, c), iterate over all possible rhombus sizes k = 0, 1, 2, ... while the rhombus fits in the grid (r-k ≥ 0, r+k < m, c-k ≥ 0, c+k < n). For k=0 the sum is grid[r][c]; for k≥1 sum the 4k border cells.',
    'Level 2: To traverse the border of a rhombus of size k centered at (r, c), walk along each of the 4 diagonal arms: top→right (k steps), right→bottom (k steps), bottom→left (k steps), left→top (k steps). Each arm contributes k cells.',
    'Level 3: Maintain a sorted set of at most 3 distinct sums. For each new sum, insert it and remove the smallest if the set exceeds size 3. At the end, return the set sorted in descending order.',
  ],
  functionName: 'getBiggestThree',
  params: ['grid'],
  starterCode: {
    javascript: `function getBiggestThree(grid) {
  const m = grid.length, n = grid[0].length;
  const top3 = new Set();
  const addToTop3 = (v) => {
    top3.add(v);
    if (top3.size > 3) {
      let min = Infinity;
      for (const x of top3) min = Math.min(min, x);
      top3.delete(min);
    }
  };
  for (let r = 0; r < m; r++) {
    for (let c = 0; c < n; c++) {
      addToTop3(grid[r][c]);
      for (let k = 1; r - k >= 0 && r + k < m && c - k >= 0 && c + k < n; k++) {
        let s = 0;
        for (let i = 0; i < k; i++) {
          s += grid[r - k + i][c + i] + grid[r + i][c + k - i]
             + grid[r + k - i][c - i] + grid[r - i][c - k + i];
        }
        addToTop3(s);
      }
    }
  }
  return [...top3].sort((a, b) => b - a);
}`,
    typescript: `function getBiggestThree(grid: number[][]): number[] {
  const m = grid.length, n = grid[0]!.length;
  const top3 = new Set<number>();
  const addToTop3 = (v: number) => {
    top3.add(v);
    if (top3.size > 3) {
      let min = Infinity;
      for (const x of top3) min = Math.min(min, x);
      top3.delete(min);
    }
  };
  for (let r = 0; r < m; r++) {
    for (let c = 0; c < n; c++) {
      addToTop3(grid[r]![c]!);
      for (let k = 1; r - k >= 0 && r + k < m && c - k >= 0 && c + k < n; k++) {
        let s = 0;
        for (let i = 0; i < k; i++) {
          s += grid[r - k + i]![c + i]! + grid[r + i]![c + k - i]!
             + grid[r + k - i]![c - i]! + grid[r - i]![c - k + i]!;
        }
        addToTop3(s);
      }
    }
  }
  return [...top3].sort((a, b) => b - a);
}`,
    python: `def getBiggestThree(grid):
    m, n = len(grid), len(grid[0])
    top3 = set()

    def add_to_top3(v):
        top3.add(v)
        if len(top3) > 3:
            top3.discard(min(top3))

    for r in range(m):
        for c in range(n):
            add_to_top3(grid[r][c])
            k = 1
            while r - k >= 0 and r + k < m and c - k >= 0 and c + k < n:
                s = 0
                for i in range(k):
                    s += grid[r - k + i][c + i]
                    s += grid[r + i][c + k - i]
                    s += grid[r + k - i][c - i]
                    s += grid[r - i][c - k + i]
                add_to_top3(s)
                k += 1

    return sorted(top3, reverse=True)`,
  },
  visibleTests: [
    {
      args: [[[3,4,5,1,3],[3,3,4,2,3],[20,30,200,40,10],[1,5,5,4,1],[4,3,2,2,5]]],
      expected: [228, 216, 211],
    },
    {
      args: [[[1,2,3],[4,5,6],[7,8,9]]],
      expected: [20, 9, 8],
    },
    {
      args: [[[1,2],[3,4]]],
      expected: [4, 3, 2],
    },
  ],
  hiddenTests: [
    {
      args: [[[1]]],
      expected: [1],
    },
    {
      args: [[[1,1],[1,1]]],
      expected: [1],
    },
    {
      args: [[[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]]],
      expected: [44, 40, 28],
    },
    {
      args: [[[5,5,5],[5,5,5],[5,5,5]]],
      expected: [20, 5],
    },
    {
      args: [[[1,3,2],[3,5,4],[2,4,6]]],
      expected: [14, 6, 5],
    },
  ],
};
