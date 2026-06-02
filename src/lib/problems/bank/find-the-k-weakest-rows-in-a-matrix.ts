import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-the-k-weakest-rows-in-a-matrix',
  title: 'Find the K Weakest Rows in a Matrix',
  difficulty: 'easy',
  tags: ['arrays', 'binary-search'],
  description: `You are given an \`m x n\` binary matrix \`mat\` of \`1\`'s (representing soldiers) and \`0\`'s (representing civilians). The soldiers are **positioned in front** of the civilians in each row, meaning all \`1\`'s come before \`0\`'s in each row.

A row \`i\` is **weaker** than a row \`j\` if one of the following is true:
- The number of soldiers in row \`i\` is less than the number of soldiers in row \`j\`.
- Both rows have the same number of soldiers and \`i < j\`.

Return the indices of the \`k\` weakest rows in the matrix ordered from weakest to strongest.

**Approach:** Count soldiers per row (sum or binary search for first 0). Sort row indices by (soldier count, index). Return first k.`,
  constraints: [
    'm == mat.length',
    'n == mat[i].length',
    '2 <= n, m <= 100',
    '1 <= k <= m',
    'matrix[i][j] is either 0 or 1.',
    'All 1\'s in row i come before all 0\'s.',
  ],
  examples: [
    {
      input: 'mat = [[1,1,0,0,0],[1,1,1,1,0],[1,0,0,0,0],[1,1,0,0,0],[1,1,1,1,1]], k = 3',
      output: '[2,0,3]',
      explanation: 'Soldier counts: row0=2, row1=4, row2=1, row3=2, row4=5. Sorted: row2(1), row0(2), row3(2), row1(4), row4(5). First 3: [2,0,3].',
    },
    {
      input: 'mat = [[1,0,0,0],[1,1,1,1],[1,1,0,0],[0,0,0,0]], k = 2',
      output: '[3,0]',
      explanation: 'Counts: row0=1, row1=4, row2=2, row3=0. Sorted: row3(0), row0(1), row2(2), row1(4). First 2: [3,0].',
    },
    {
      input: 'mat = [[1,1,1],[1,0,0],[0,0,0]], k = 2',
      output: '[2,1]',
    },
  ],
  hints: [
    'For each row compute the number of 1s (soldiers). Binary search for the first 0 works in O(log n).',
    'Create pairs [soldierCount, rowIndex], sort, return first k row indices.',
    '```js\nfunction kWeakestRows(mat, k) {\n  const rows = mat.map((row, i) => [row.reduce((s, v) => s + v, 0), i]);\n  rows.sort((a, b) => a[0] - b[0] || a[1] - b[1]);\n  return rows.slice(0, k).map(r => r[1]);\n}\n```',
  ],
  functionName: 'kWeakestRows',
  params: ['mat', 'k'],
  starterCode: {
    javascript: `function kWeakestRows(mat, k) {
  const rows = mat.map((row, i) => [row.reduce((s, v) => s + v, 0), i]);
  rows.sort((a, b) => a[0] - b[0] || a[1] - b[1]);
  return rows.slice(0, k).map(r => r[1]);
}`,
    typescript: `function kWeakestRows(mat: number[][], k: number): number[] {
  const rows = mat.map((row, i): [number, number] => [row.reduce((s, v) => s + v, 0), i]);
  rows.sort((a, b) => a[0] - b[0] || a[1] - b[1]);
  return rows.slice(0, k).map(r => r[1]);
}`,
    python: `def kWeakestRows(mat: list, k: int) -> list:
    rows = sorted(range(len(mat)), key=lambda i: (sum(mat[i]), i))
    return rows[:k]`,
  },
  visibleTests: [
    { args: [[[1, 1, 0, 0, 0], [1, 1, 1, 1, 0], [1, 0, 0, 0, 0], [1, 1, 0, 0, 0], [1, 1, 1, 1, 1]], 3], expected: [2, 0, 3] },
    { args: [[[1, 0, 0, 0], [1, 1, 1, 1], [1, 1, 0, 0], [0, 0, 0, 0]], 2], expected: [3, 0] },
    { args: [[[1, 1, 1], [1, 0, 0], [0, 0, 0]], 2], expected: [2, 1] },
  ],
  hiddenTests: [
    { args: [[[1, 0], [0, 0], [1, 1]], 1], expected: [1] },
    { args: [[[1, 1], [1, 1]], 2], expected: [0, 1] },
    { args: [[[1], [0]], 2], expected: [1, 0] },
    { args: [[[1, 1, 0], [1, 0, 0], [1, 1, 0]], 2], expected: [1, 0] },
    { args: [[[1, 1, 0], [1, 0, 0], [1, 1, 0]], 3], expected: [1, 0, 2] },
    { args: [[[0, 0, 0], [1, 1, 1], [1, 0, 0]], 2], expected: [0, 2] },
    { args: [[[1, 1, 1], [0, 0, 0], [1, 0, 0]], 3], expected: [1, 2, 0] },
  ],
};
