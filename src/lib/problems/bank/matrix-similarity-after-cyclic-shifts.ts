import type { Problem } from '../types';

export const problem: Problem = {
  id: 'matrix-similarity-after-cyclic-shifts',
  title: 'Matrix Similarity After Cyclic Shifts',
  difficulty: 'easy',
  tags: ['arrays', 'simulation', 'math'],
  description: `You are given a **0-indexed** integer matrix \`mat\` of size \`m × n\` and an integer \`k\`. You have to cyclically right-shift even-indexed rows and cyclically left-shift odd-indexed rows by 1 position for \`k\` times.

Return \`true\` if the final matrix equals the initial matrix, \`false\` otherwise.`,
  constraints: [
    '`1 <= m <= 25`',
    '`1 <= n <= 25`',
    '`0 <= mat[i][j] <= 25`',
    '`0 <= k <= 50`',
  ],
  examples: [
    {
      input: 'mat = [[1,2,3],[4,5,6],[7,8,9]], k = 4',
      output: 'false',
      explanation: 'After 4 shifts, even rows shift right by 4 and odd rows shift left by 4. Since 4 % 3 ≠ 0 (n = 3), the matrix changes.',
    },
    {
      input: 'mat = [[2,2],[2,2]], k = 3',
      output: 'true',
      explanation: 'All elements are identical so any shift produces the same matrix.',
    },
    {
      input: 'mat = [[1,2]], k = 2',
      output: 'true',
      explanation: 'After 2 right-shifts on the single even-indexed row of length 2, every element returns to its original position.',
    },
  ],
  hints: [
    'After `k` operations, each even-indexed row has been cyclically right-shifted by `k` positions, and each odd-indexed row has been cyclically left-shifted by `k` positions.',
    'A cyclic shift of length `n` by `k` positions returns to the original if and only if `k % n == 0`.',
    'There is one edge case: if every element in a row is the same, shifts never change the row regardless of `k`.',
  ],
  functionName: 'areSimilar',
  params: ['mat', 'k'],
  starterCode: {
    javascript: `function areSimilar(mat, k) {
  const rows = mat.length, cols = mat[0].length;
  const shift = k % cols;
  if (shift === 0) return true;
  for (let r = 0; r < rows; r++) {
    const d = r % 2 === 0 ? shift : cols - shift;
    for (let c = 0; c < cols; c++) {
      if (mat[r][c] !== mat[r][(c + d) % cols]) return false;
    }
  }
  return true;
}`,
    typescript: `function areSimilar(mat: number[][], k: number): boolean {
  const rows = mat.length, cols = mat[0].length;
  const shift = k % cols;
  if (shift === 0) return true;
  for (let r = 0; r < rows; r++) {
    const d = r % 2 === 0 ? shift : cols - shift;
    for (let c = 0; c < cols; c++) {
      if (mat[r][c] !== mat[r][(c + d) % cols]) return false;
    }
  }
  return true;
}`,
    python: `def areSimilar(mat: list[list[int]], k: int) -> bool:
    rows, cols = len(mat), len(mat[0])
    shift = k % cols
    if shift == 0: return True
    for r in range(rows):
        d = shift if r % 2 == 0 else cols - shift
        for c in range(cols):
            if mat[r][c] != mat[r][(c + d) % cols]: return False
    return True`,
  },
  visibleTests: [
    { args: [[[1, 2, 3], [4, 5, 6], [7, 8, 9]], 4], expected: false },
    { args: [[[2, 2], [2, 2]], 3], expected: true },
    { args: [[[1, 2]], 2], expected: true },
  ],
  hiddenTests: [
    { args: [[[1, 2, 3], [4, 5, 6], [7, 8, 9]], 3], expected: true },
    { args: [[[1, 2, 3], [4, 5, 6]], 6], expected: true },
    { args: [[[1, 2, 3, 4], [5, 6, 7, 8]], 1], expected: false },
    { args: [[[1]], 0], expected: true },
    { args: [[[5, 5, 5], [1, 2, 3]], 1], expected: false },
    { args: [[[5, 5, 5], [1, 2, 3]], 3], expected: true },
    { args: [[[1, 2, 3], [4, 5, 6], [7, 8, 9]], 0], expected: true },
    { args: [[[1, 2], [3, 4], [5, 6]], 2], expected: true },
    { args: [[[1, 2], [3, 4], [5, 6]], 1], expected: false },
  ],
};
