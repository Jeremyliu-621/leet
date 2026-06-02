import type { Problem } from '../types';

export const problem: Problem = {
  id: 'k-weakest-rows-in-a-matrix',
  title: 'The K Weakest Rows in a Matrix',
  difficulty: 'easy',
  tags: ['arrays', 'binary-search'],
  description: `You are given an \`m x n\` binary matrix \`mat\` of \`1\`s (representing soldiers) and \`0\`s (representing civilians). The soldiers are positioned **in front** of the civilians in each row, meaning all the \`1\`s will appear to the left of all the \`0\`s in each row.

A row \`i\` is **weaker** than a row \`j\` if one of the following is true:
- The number of soldiers in row \`i\` is less than the number of soldiers in row \`j\`.
- Both rows have the same number of soldiers and \`i < j\`.

Return **the indices of the \`k\` weakest rows** in the matrix ordered from weakest to strongest.`,
  constraints: [
    'm == mat.length',
    'n == mat[i].length',
    '2 <= n, m <= 100',
    '1 <= k <= m',
    'matrix[i][j] is either 0 or 1',
    'All 1s appear before 0s in each row',
  ],
  examples: [
    {
      input: 'mat = [[1,1,0,0,0],[1,1,1,1,0],[1,0,0,0,0],[1,1,0,0,0],[1,1,1,1,1]], k = 3',
      output: '[2, 0, 3]',
      explanation: 'Row strengths are [2, 4, 1, 2, 5]. Sorted: row 2 (1 soldier), row 0 (2, index 0 < 3), row 3 (2, index 3).',
    },
    {
      input: 'mat = [[1,0,0,0],[1,1,1,1],[1,0,0,0],[1,0,0,0]], k = 2',
      output: '[0, 2]',
      explanation: 'Rows 0, 2, and 3 each have 1 soldier. The two weakest are index 0 and 2.',
    },
  ],
  hints: [
    'Use binary search to count soldiers (1s) in each row since all 1s come before 0s.',
    'Create pairs of (soldierCount, rowIndex), sort them, and return the first k indices.',
    '```js\nfunction kWeakestRows(mat, k) {\n  const strengths = mat.map((row, i) => {\n    let lo = 0, hi = row.length;\n    while (lo < hi) {\n      const mid = (lo + hi) >> 1;\n      if (row[mid] === 1) lo = mid + 1; else hi = mid;\n    }\n    return [lo, i];\n  });\n  strengths.sort((a, b) => a[0] - b[0] || a[1] - b[1]);\n  return strengths.slice(0, k).map(([, i]) => i);\n}\n```',
  ],
  functionName: 'kWeakestRows',
  params: ['mat', 'k'],
  starterCode: {
    javascript: `function kWeakestRows(mat, k) {
  const strengths = mat.map((row, i) => {
    let lo = 0, hi = row.length;
    while (lo < hi) { const mid = (lo + hi) >> 1; if (row[mid] === 1) lo = mid + 1; else hi = mid; }
    return [lo, i];
  });
  strengths.sort((a, b) => a[0] - b[0] || a[1] - b[1]);
  return strengths.slice(0, k).map(([, i]) => i);
}`,
    typescript: `function kWeakestRows(mat: number[][], k: number): number[] {
  const strengths = mat.map((row, i) => {
    let lo = 0, hi = row.length;
    while (lo < hi) { const mid = (lo + hi) >> 1; if (row[mid] === 1) lo = mid + 1; else hi = mid; }
    return [lo, i];
  });
  strengths.sort((a, b) => a[0] - b[0] || a[1] - b[1]);
  return strengths.slice(0, k).map(([, i]) => i);
}`,
    python: `def kWeakestRows(mat, k):
    def count_soldiers(row):
        lo, hi = 0, len(row)
        while lo < hi:
            mid = (lo + hi) // 2
            if row[mid] == 1: lo = mid + 1
            else: hi = mid
        return lo
    strengths = sorted(enumerate(mat), key=lambda x: (count_soldiers(x[1]), x[0]))
    return [i for i, _ in strengths[:k]]`,
  },
  visibleTests: [
    {
      args: [[[1, 1, 0, 0, 0], [1, 1, 1, 1, 0], [1, 0, 0, 0, 0], [1, 1, 0, 0, 0], [1, 1, 1, 1, 1]], 3],
      expected: [2, 0, 3],
    },
    {
      args: [[[1, 0, 0, 0], [1, 1, 1, 1], [1, 0, 0, 0], [1, 0, 0, 0]], 2],
      expected: [0, 2],
    },
  ],
  hiddenTests: [
    {
      args: [[[1, 1, 1], [1, 0, 0], [0, 0, 0]], 2],
      expected: [2, 1],
    },
    {
      args: [[[1, 0], [0, 0], [1, 1]], 1],
      expected: [1],
    },
    {
      args: [[[1, 1], [1, 1]], 1],
      expected: [0],
    },
    {
      args: [[[0, 0], [0, 0], [1, 0]], 2],
      expected: [0, 1],
    },
    {
      args: [[[1, 1, 0], [1, 0, 0], [1, 1, 0]], 2],
      expected: [1, 0],
    },
    {
      args: [[[1, 1, 1, 1, 1], [1, 0, 0, 0, 0], [1, 1, 0, 0, 0], [1, 1, 1, 0, 0], [1, 1, 1, 1, 0]], 4],
      expected: [1, 2, 3, 4],
    },
  ],
};
