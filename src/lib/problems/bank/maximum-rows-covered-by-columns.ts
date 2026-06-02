import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximum-rows-covered-by-columns',
  title: 'Maximum Rows Covered by Columns',
  difficulty: 'medium',
  tags: ['arrays'],
  description: `You are given a 0-indexed \`m x n\` binary matrix \`matrix\` and an integer \`numSelect\`.

Your goal is to select exactly \`numSelect\` **distinct** columns from \`matrix\` such that you **maximize** the number of rows that are **covered** by the selected columns.

A row is **covered** by a set of columns if every cell in that row with a value of \`1\` is in one of the selected columns.

Return the **maximum** number of rows that can be covered by a selection of exactly \`numSelect\` columns.`,
  examples: [
    {
      input: 'matrix = [[0,0,0],[1,0,1],[0,1,1],[0,0,1]], numSelect = 2',
      output: '3',
      explanation: 'Select columns 0 and 2. Row 0 ([0,0,0]) is covered (no 1s). Row 1 ([1,0,1]) is covered (both 1s in selected cols). Row 2 ([0,1,1]) is NOT covered (col 1 not selected). Row 3 ([0,0,1]) is covered. So 3 rows covered.',
    },
    {
      input: 'matrix = [[1],[0]], numSelect = 1',
      output: '2',
      explanation: 'Selecting column 0 covers both rows.',
    },
  ],
  constraints: [
    'm == matrix.length',
    'n == matrix[i].length',
    '1 <= m, n <= 12',
    'matrix[i][j] is 0 or 1',
    '1 <= numSelect <= n',
  ],
  functionName: 'maximumRows',
  params: ['matrix', 'numSelect'],
  starterCode: {
    javascript: `function maximumRows(matrix, numSelect) {
  const m = matrix.length, n = matrix[0].length;
  const rowMasks = matrix.map(row => row.reduce((acc, v, j) => v ? acc | (1 << j) : acc, 0));
  let best = 0;
  for (let mask = 0; mask < (1 << n); mask++) {
    let bits = 0, m2 = mask; while (m2) { bits += m2 & 1; m2 >>= 1; }
    if (bits !== numSelect) continue;
    let count = 0;
    for (const rm of rowMasks) if ((rm & mask) === rm) count++;
    best = Math.max(best, count);
  }
  return best;
}`,
    typescript: `function maximumRows(matrix: number[][], numSelect: number): number {
  const m = matrix.length, n = matrix[0]!.length;
  const rowMasks = matrix.map(row => row.reduce((acc, v, j) => v ? acc | (1 << j) : acc, 0));
  let best = 0;
  for (let mask = 0; mask < (1 << n); mask++) {
    let bits = 0, m2 = mask; while (m2) { bits += m2 & 1; m2 >>= 1; }
    if (bits !== numSelect) continue;
    let count = 0;
    for (const rm of rowMasks) if ((rm & mask) === rm) count++;
    best = Math.max(best, count);
  }
  return best;
}`,
    python: `def maximumRows(matrix, numSelect):
    if hasattr(matrix, 'to_py'): matrix = matrix.to_py()
    matrix = [[int(x) for x in (r.to_py() if hasattr(r, 'to_py') else r)] for r in matrix]
    n = len(matrix[0])
    row_masks = [sum(v << j for j, v in enumerate(row)) for row in matrix]
    best = 0
    for mask in range(1 << n):
        if bin(mask).count('1') != numSelect: continue
        count = sum(1 for rm in row_masks if (rm & mask) == rm)
        best = max(best, count)
    return best`,
  },
  hints: [
    'Since n <= 12, enumerate all subsets of columns of size exactly numSelect using bitmask enumeration.',
    'Represent each row as a bitmask of which columns have a 1. A row is covered by a column set if `(rowMask & colMask) === rowMask`.',
    'Iterate all bitmasks from 0 to 2^n - 1, check if popcount == numSelect, then count covered rows.',
  ],
  visibleTests: [
    { args: [[[0, 0, 0], [1, 0, 1], [0, 1, 1], [0, 0, 1]], 2], expected: 3 },
    { args: [[[1], [0]], 1], expected: 2 },
    { args: [[[0, 1], [1, 0]], 1], expected: 1 },
  ],
  hiddenTests: [
    { args: [[[1, 1], [1, 0], [0, 1]], 1], expected: 1 },
    { args: [[[0, 0, 0], [0, 0, 0]], 1], expected: 2 },
    { args: [[[1, 0, 1], [0, 1, 0], [1, 1, 1]], 2], expected: 1 },
    { args: [[[1, 1, 1]], 3], expected: 1 },
    { args: [[[0, 1, 0], [1, 0, 1], [0, 1, 0]], 2], expected: 2 },
  ],
};
