import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximum-strictly-increasing-cells-in-a-matrix',
  title: 'Maximum Strictly Increasing Cells in a Matrix',
  difficulty: 'hard',
  tags: ['arrays', 'dynamic-programming'],
  description: `Given a **1-indexed** \`m x n\` integer matrix \`mat\`, you can select any cell in the matrix as your starting point. From the current cell, you can move to any other cell in the **same row or column**, but only if the destination cell's value is **strictly greater** than the current cell's value.

Return the **maximum** number of cells you can visit in the matrix by starting from any cell.`,
  constraints: [
    'm == mat.length',
    'n == mat[i].length',
    '1 <= m, n <= 10^5',
    '1 <= m * n <= 10^5',
    '-10^5 <= mat[i][j] <= 10^5',
  ],
  examples: [
    {
      input: 'mat = [[3,1],[3,4]]',
      output: '2',
      explanation: 'Start at (1,1) with value 3. Move to (1,2) with value 4. Path length is 2.',
    },
    {
      input: 'mat = [[1,1],[1,1]]',
      output: '1',
      explanation: 'All values are equal, so you cannot move to any adjacent cell. Path length is 1.',
    },
    {
      input: 'mat = [[3,1,6],[-9,5,7]]',
      output: '4',
      explanation: 'Start at (2,1)=-9, move to (1,1)=3, then to (1,3)=6, then to (2,3)=7. Path length is 4.',
    },
  ],
  hints: [
    'Sort all cells by value. Process cells in increasing order; for each cell compute dp[i][j] = 1 + max(best in row i, best in col j) from strictly smaller values.',
    'After processing all cells with the same value, update rowBest[i] and colBest[j].',
    'Use rowBest[row] and colBest[col] arrays to track the maximum dp value seen so far in each row and column.',
  ],
  functionName: 'maxIncreasingCells',
  params: ['mat'],
  starterCode: {
    javascript: `function maxIncreasingCells(mat) {
  const m = mat.length, n = mat[0].length;
  const cells = [];
  for (let i = 0; i < m; i++) for (let j = 0; j < n; j++) cells.push([mat[i][j], i, j]);
  cells.sort((a, b) => a[0] - b[0]);
  const rowBest = new Array(m).fill(0), colBest = new Array(n).fill(0);
  let ans = 0, i = 0;
  while (i < cells.length) {
    let j = i;
    while (j < cells.length && cells[j][0] === cells[i][0]) j++;
    const updates = [];
    for (let k = i; k < j; k++) {
      const [, r, c] = cells[k];
      const dp = 1 + Math.max(rowBest[r], colBest[c]);
      updates.push([r, c, dp]);
      if (dp > ans) ans = dp;
    }
    for (const [r, c, dp] of updates) {
      if (dp > rowBest[r]) rowBest[r] = dp;
      if (dp > colBest[c]) colBest[c] = dp;
    }
    i = j;
  }
  return ans;
}`,
    typescript: `function maxIncreasingCells(mat: number[][]): number {
  const m = mat.length, n = mat[0]!.length;
  const cells: [number, number, number][] = [];
  for (let i = 0; i < m; i++) for (let j = 0; j < n; j++) cells.push([mat[i]![j]!, i, j]);
  cells.sort((a, b) => a[0] - b[0]);
  const rowBest = new Array<number>(m).fill(0), colBest = new Array<number>(n).fill(0);
  let ans = 0, i = 0;
  while (i < cells.length) {
    let j = i;
    while (j < cells.length && cells[j]![0] === cells[i]![0]) j++;
    const updates: [number, number, number][] = [];
    for (let k = i; k < j; k++) {
      const [, r, c] = cells[k]!;
      const dp = 1 + Math.max(rowBest[r]!, colBest[c]!);
      updates.push([r, c, dp]);
      if (dp > ans) ans = dp;
    }
    for (const [r, c, dp] of updates) {
      if (dp > rowBest[r]!) rowBest[r] = dp;
      if (dp > colBest[c]!) colBest[c] = dp;
    }
    i = j;
  }
  return ans;
}`,
    python: `def maxIncreasingCells(mat: list) -> int:
    if hasattr(mat, 'to_py'): mat = [[int(x) for x in (r.to_py() if hasattr(r, 'to_py') else r)] for r in mat.to_py()]
    m, n = len(mat), len(mat[0])
    cells = sorted((mat[i][j], i, j) for i in range(m) for j in range(n))
    row_best = [0] * m
    col_best = [0] * n
    ans = i = 0
    while i < len(cells):
        j = i
        while j < len(cells) and cells[j][0] == cells[i][0]: j += 1
        updates = []
        for k in range(i, j):
            _, r, c = cells[k]
            dp = 1 + max(row_best[r], col_best[c])
            updates.append((r, c, dp))
            if dp > ans: ans = dp
        for r, c, dp in updates:
            if dp > row_best[r]: row_best[r] = dp
            if dp > col_best[c]: col_best[c] = dp
        i = j
    return ans`,
  },
  visibleTests: [
    { args: [[[3, 1], [3, 4]]], expected: 2 },
    { args: [[[1, 1], [1, 1]]], expected: 1 },
    { args: [[[3, 1, 6], [-9, 5, 7]]], expected: 4 },
  ],
  hiddenTests: [
    { args: [[[1]]], expected: 1 },
    { args: [[[1, 2, 3]]], expected: 3 },
    { args: [[[1], [2], [3]]], expected: 3 },
    { args: [[[5, 4, 3], [2, 1, 0]]], expected: 4 },
    { args: [[[1, 2], [3, 4]]], expected: 3 },
  ],
};
