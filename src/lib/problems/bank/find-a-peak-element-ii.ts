import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-a-peak-element-ii',
  title: 'Find a Peak Element II',
  difficulty: 'medium',
  tags: ['arrays', 'binary-search'],
  description: `A **peak** element in a 2D grid is an element that is **strictly greater** than all of its **adjacent** neighbors to the left, right, top, and bottom.

Given a **0-indexed** \`m x n\` matrix \`mat\` where **no two adjacent cells are equal**, find **any** peak element \`mat[i][j]\` and return *the length 2 array* \`[i, j]\`.

You may assume that the entire matrix is surrounded by an **outer perimeter** with the value \`-1\` in each cell.

You must write an algorithm that runs in **O(m log n)** or **O(n log m)** time.`,
  constraints: [
    'm == mat.length',
    'n == mat[i].length',
    '1 <= m, n <= 500',
    '1 <= mat[i][j] <= 10^5',
    'No two adjacent cells are equal.',
  ],
  examples: [
    {
      input: 'mat = [[1,4],[3,2]]',
      output: '[0,1]',
      explanation: '4 is a peak element: neighbors are 1 (left) and 2 (below). Both smaller.',
    },
    {
      input: 'mat = [[1,2,1],[2,3,2],[1,2,1]]',
      output: '[1,1]',
      explanation: '3 is the unique peak: greater than 2 (up, down, left, right).',
    },
  ],
  hints: [
    'Binary search on rows: for the middle row, find the column with the maximum value.',
    'If that maximum is greater than its vertical neighbors in adjacent rows, it is a peak.',
    'Otherwise, move toward the side with the larger neighbor — a peak must exist in that direction.',
  ],
  functionName: 'findPeakGrid',
  params: ['mat'],
  starterCode: {
    javascript: `function findPeakGrid(mat) {
  const m = mat.length;
  let lo = 0, hi = m - 1;
  while (lo < hi) {
    const mid = (lo + hi) >> 1;
    let maxCol = 0;
    for (let c = 1; c < mat[mid].length; c++) if (mat[mid][c] > mat[mid][maxCol]) maxCol = c;
    if (mat[mid][maxCol] < mat[mid + 1][maxCol]) lo = mid + 1;
    else hi = mid;
  }
  let maxCol = 0;
  for (let c = 1; c < mat[lo].length; c++) if (mat[lo][c] > mat[lo][maxCol]) maxCol = c;
  return [lo, maxCol];
}`,
    typescript: `function findPeakGrid(mat: number[][]): number[] {
  const m = mat.length;
  let lo = 0, hi = m - 1;
  while (lo < hi) {
    const mid = (lo + hi) >> 1;
    let maxCol = 0;
    for (let c = 1; c < mat[mid]!.length; c++) if (mat[mid]![c]! > mat[mid]![maxCol]!) maxCol = c;
    if (mat[mid]![maxCol]! < mat[mid + 1]![maxCol]!) lo = mid + 1;
    else hi = mid;
  }
  let maxCol = 0;
  for (let c = 1; c < mat[lo]!.length; c++) if (mat[lo]![c]! > mat[lo]![maxCol]!) maxCol = c;
  return [lo, maxCol];
}`,
    python: `def findPeakGrid(mat):
    mat = [list(row.to_py() if hasattr(row, 'to_py') else row) for row in (mat.to_py() if hasattr(mat, 'to_py') else mat)]
    m = len(mat)
    lo, hi = 0, m - 1
    while lo < hi:
        mid = (lo + hi) // 2
        max_col = max(range(len(mat[mid])), key=lambda c: mat[mid][c])
        if mat[mid][max_col] < mat[mid + 1][max_col]: lo = mid + 1
        else: hi = mid
    max_col = max(range(len(mat[lo])), key=lambda c: mat[lo][c])
    return [lo, max_col]`,
  },
  visibleTests: [
    { args: [[[1, 4], [3, 2]]], expected: [0, 1] },
    { args: [[[1, 2, 1], [2, 3, 2], [1, 2, 1]]], expected: [1, 1] },
    { args: [[[1, 2, 3]]], expected: [0, 2] },
    { args: [[[5], [3]]], expected: [0, 0] },
    { args: [[[3, 5, 2], [4, 6, 1], [7, 8, 9]]], expected: [2, 2] },
  ],
  hiddenTests: [
    { args: [[[1]]], expected: [0, 0] },
    { args: [[[1, 3, 2], [4, 5, 6], [7, 8, 9]]], expected: [2, 2] },
    { args: [[[2, 1], [1, 2]]], expected: [0, 0] },
    { args: [[[1, 2], [3, 4]]], expected: [1, 1] },
    { args: [[[5, 4, 3], [4, 3, 2], [3, 2, 1]]], expected: [0, 0] },
  ],
};
