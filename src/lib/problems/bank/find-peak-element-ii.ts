import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-peak-element-ii',
  title: 'Find a Peak Element II',
  difficulty: 'medium',
  tags: ['arrays', 'binary-search'],
  description: `A **peak** element in a 2D grid is an element that is **strictly greater** than all of its **adjacent** neighbors to the left, right, top, and bottom.

Given a **0-indexed** \`m x n\` matrix \`mat\` where **no two adjacent cells are equal**, find **any** peak element \`mat[i][j]\` and return *the length-2 array* \`[i, j]\`.

You may assume that the entire matrix is surrounded by an **outer perimeter** with the value \`-1\` in each cell.

You must write an algorithm that runs in \`O(m log(n))\` or \`O(n log(m))\` time.`,
  constraints: [
    '`m == mat.length`',
    '`n == mat[i].length`',
    '`1 <= m, n <= 500`',
    '`1 <= mat[i][j] <= 10^5`',
    'No two adjacent cells are equal.',
  ],
  examples: [
    {
      input: 'mat = [[1,4],[3,2]]',
      output: '[0,1]',
      explanation: 'mat[0][1] = 4 is a peak: neighbors are 1 (left) and 2 (below), both smaller.',
    },
    {
      input: 'mat = [[10,20,15],[21,30,14],[7,16,32]]',
      output: '[1,1]',
      explanation: 'mat[1][1] = 30 is a peak: neighbors are 20 (top), 14 (right), 16 (bottom), 21 (left), all smaller.',
    },
  ],
  hints: [
    'Binary search on columns: for a given mid column, find the row with the maximum element in that column.',
    'If the maximum in column mid is greater than both neighbors in the same row (mat[r][mid-1] and mat[r][mid+1]), then mat[r][mid] is a peak.',
    'Otherwise, move toward the side with the larger neighbor — a peak must exist there.',
    'This guarantees O(m log n) time since each binary search step scans one column in O(m).',
  ],
  functionName: 'findPeakGrid',
  params: ['mat'],
  starterCode: {
    javascript: `function findPeakGrid(mat) {
  const m = mat.length, n = mat[0].length;
  let lo = 0, hi = n - 1;
  while (lo <= hi) {
    const mid = (lo + hi) >> 1;
    let maxRow = 0;
    for (let r = 1; r < m; r++) if (mat[r][mid] > mat[maxRow][mid]) maxRow = r;
    const left = mid > 0 ? mat[maxRow][mid - 1] : -1;
    const right = mid < n - 1 ? mat[maxRow][mid + 1] : -1;
    if (mat[maxRow][mid] > left && mat[maxRow][mid] > right) return [maxRow, mid];
    if (left > right) hi = mid - 1; else lo = mid + 1;
  }
  return [-1, -1];
}`,
    typescript: `function findPeakGrid(mat: number[][]): number[] {
  const m = mat.length, n = mat[0]!.length;
  let lo = 0, hi = n - 1;
  while (lo <= hi) {
    const mid = (lo + hi) >> 1;
    let maxRow = 0;
    for (let r = 1; r < m; r++) if (mat[r]![mid]! > mat[maxRow]![mid]!) maxRow = r;
    const left = mid > 0 ? mat[maxRow]![mid - 1]! : -1;
    const right = mid < n - 1 ? mat[maxRow]![mid + 1]! : -1;
    if (mat[maxRow]![mid]! > left && mat[maxRow]![mid]! > right) return [maxRow, mid];
    if (left > right) hi = mid - 1; else lo = mid + 1;
  }
  return [-1, -1];
}`,
    python: `def findPeakGrid(mat):
    m, n = len(mat), len(mat[0])
    lo, hi = 0, n - 1
    while lo <= hi:
        mid = (lo + hi) // 2
        max_row = max(range(m), key=lambda r: mat[r][mid])
        left = mat[max_row][mid - 1] if mid > 0 else -1
        right = mat[max_row][mid + 1] if mid < n - 1 else -1
        if mat[max_row][mid] > left and mat[max_row][mid] > right:
            return [max_row, mid]
        if left > right: hi = mid - 1
        else: lo = mid + 1
    return [-1, -1]`,
  },
  visibleTests: [
    { args: [[[1, 4], [3, 2]]], expected: [1, 0] },
    { args: [[[10, 20, 15], [21, 30, 14], [7, 16, 32]]], expected: [1, 1] },
  ],
  hiddenTests: [
    { args: [[[1]]], expected: [0, 0] },
    { args: [[[1, 2]]], expected: [0, 1] },
    { args: [[[5, 1, 3]]], expected: [0, 0] },
    { args: [[[1, 2, 3], [4, 5, 6]]], expected: [1, 2] },
    { args: [[[3, 1], [2, 4]]], expected: [0, 0] },
    { args: [[[1, 3, 2], [4, 6, 5], [7, 9, 8]]], expected: [2, 1] },
  ],
};
