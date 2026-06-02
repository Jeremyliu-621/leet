import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-submatrices-with-all-ones',
  title: 'Count Submatrices With All Ones',
  difficulty: 'medium',
  tags: ['arrays', 'dynamic-programming'],
  description: `Given an \`m x n\` binary matrix \`mat\`, return the number of **submatrices that have all ones**.`,
  constraints: [
    '`1 <= m, n <= 150`',
    '`mat[i][j]` is either `0` or `1`.',
  ],
  examples: [
    {
      input: 'mat = [[1,0,1],[1,1,0],[1,1,0]]',
      output: '13',
      explanation: 'There are 6 rectangles of side 1×1, 2 of 1×2, 3 of 2×1, 1 of 2×2, and 1 of 3×1.',
    },
    {
      input: 'mat = [[0,1,1,0],[0,1,1,1],[1,1,1,0]]',
      output: '24',
    },
  ],
  hints: [
    'For each cell, compute `height[j]` = the number of consecutive 1s above and including that cell in column j (0 if the current cell is 0).',
    'For each row, iterate over all pairs of columns (j, k) with k ≤ j. The number of valid submatrices ending at row i, right column j, left column k is `min(height[k], ..., height[j])`. Accumulate this as j decreases from right to left.',
    'The inner loop complexity per row is O(n²) and the height update is O(n), giving O(m × n²) overall.',
  ],
  functionName: 'numSubmat',
  params: ['mat'],
  starterCode: {
    javascript: `function numSubmat(mat) {
  const m = mat.length, n = mat[0].length;
  const height = new Array(n).fill(0);
  let count = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) height[j] = mat[i][j] === 1 ? height[j] + 1 : 0;
    for (let j = 0; j < n; j++) {
      let minH = height[j];
      for (let k = j; k >= 0; k--) {
        minH = Math.min(minH, height[k]);
        count += minH;
      }
    }
  }
  return count;
}`,
    typescript: `function numSubmat(mat: number[][]): number {
  const m = mat.length, n = mat[0]!.length;
  const height = new Array<number>(n).fill(0);
  let count = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) height[j] = mat[i]![j] === 1 ? height[j]! + 1 : 0;
    for (let j = 0; j < n; j++) {
      let minH = height[j]!;
      for (let k = j; k >= 0; k--) {
        minH = Math.min(minH, height[k]!);
        count += minH;
      }
    }
  }
  return count;
}`,
    python: `def numSubmat(mat):
    m, n = len(mat), len(mat[0])
    height = [0] * n
    count = 0
    for i in range(m):
        for j in range(n):
            height[j] = height[j] + 1 if mat[i][j] == 1 else 0
        for j in range(n):
            min_h = height[j]
            for k in range(j, -1, -1):
                min_h = min(min_h, height[k])
                count += min_h
    return count`,
  },
  visibleTests: [
    { args: [[[1, 0, 1], [1, 1, 0], [1, 1, 0]]], expected: 13 },
    { args: [[[0, 1, 1, 0], [0, 1, 1, 1], [1, 1, 1, 0]]], expected: 24 },
  ],
  hiddenTests: [
    { args: [[[1]]], expected: 1 },
    { args: [[[0]]], expected: 0 },
    { args: [[[1, 1], [1, 1]]], expected: 9 },
    { args: [[[1, 1, 1]]], expected: 6 },
    { args: [[[0, 0], [0, 0]]], expected: 0 },
    { args: [[[1, 0], [0, 1]]], expected: 2 },
    { args: [[[1, 1, 1], [1, 1, 1], [1, 1, 1]]], expected: 36 },
  ],
};
