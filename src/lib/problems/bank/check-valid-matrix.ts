import type { Problem } from '../types';

export const problem: Problem = {
  id: 'check-valid-matrix',
  title: 'Check Whether a Matrix is Valid',
  difficulty: 'easy',
  tags: ['arrays', 'hash-map'],
  description: `An \`n x n\` matrix is **valid** if every row and every column contains all the integers from \`1\` to \`n\` (inclusive).

Given an \`n x n\` integer matrix \`matrix\`, return \`true\` if the matrix is valid, and \`false\` otherwise.`,
  constraints: [
    'n == matrix.length == matrix[i].length',
    '1 <= n <= 100',
    '1 <= matrix[i][j] <= n',
  ],
  examples: [
    {
      input: 'matrix = [[1,2,3],[3,1,2],[2,3,1]]',
      output: 'true',
      explanation: 'Each row and column is a permutation of [1,2,3].',
    },
    {
      input: 'matrix = [[1,1,1],[1,2,3],[1,2,3]]',
      output: 'false',
      explanation: 'Row 0 has three 1s.',
    },
  ],
  hints: [
    'Level 1: For each row, check that it contains all values 1..n using a Set. Do the same for each column.',
    'Level 2: Build a Set of values for each row and column, compare size to n and ensure all values are 1..n.',
    'Level 3: const n=matrix.length;const ok=arr=>new Set(arr).size===n&&arr.every(v=>v>=1&&v<=n);return matrix.every(ok)&&Array.from({length:n},(_,j)=>matrix.map(r=>r[j])).every(ok);',
  ],
  functionName: 'checkValid',
  params: ['matrix'],
  starterCode: {
    javascript: `function checkValid(matrix) {
  const n = matrix.length;
  const ok = arr => new Set(arr).size === n && arr.every(v => v >= 1 && v <= n);
  return matrix.every(ok) && Array.from({length:n}, (_, j) => matrix.map(r => r[j])).every(ok);
}`,
    typescript: `function checkValid(matrix: number[][]): boolean {
  const n = matrix.length;
  const ok = (arr: number[]) => new Set(arr).size === n && arr.every(v => v >= 1 && v <= n);
  return matrix.every(ok) && Array.from({length:n}, (_, j) => matrix.map(r => r[j]!)).every(ok);
}`,
    python: `def checkValid(matrix):
    matrix = list(matrix.to_py()) if hasattr(matrix, 'to_py') else list(matrix)
    matrix = [[v for v in (row.to_py() if hasattr(row, 'to_py') else row)] for row in matrix]
    n = len(matrix)
    def ok(arr): return len(set(arr)) == n and all(1 <= v <= n for v in arr)
    return all(ok(row) for row in matrix) and all(ok([matrix[r][c] for r in range(n)]) for c in range(n))`,
  },
  visibleTests: [
    { args: [[[1, 2, 3], [3, 1, 2], [2, 3, 1]]], expected: true },
    { args: [[[1, 1, 1], [1, 2, 3], [1, 2, 3]]], expected: false },
  ],
  hiddenTests: [
    { args: [[[1]]], expected: true },
    { args: [[[1, 2], [2, 1]]], expected: true },
    { args: [[[1, 2], [1, 2]]], expected: false },
    { args: [[[2, 1], [2, 1]]], expected: false },
    { args: [[[1, 2, 3, 4], [2, 1, 4, 3], [3, 4, 1, 2], [4, 3, 2, 1]]], expected: true },
  ],
};
