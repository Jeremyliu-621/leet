import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-operations-to-write-the-letter-y-on-a-grid',
  title: 'Minimum Operations to Write the Letter Y on a Grid',
  difficulty: 'medium',
  tags: ['arrays', 'simulation'],
  description: `You are given a **0-indexed** \`n x n\` grid where \`n\` is **odd**, and \`grid[r][c]\` is \`0\`, \`1\`, or \`2\`.

We say there is a **letter Y** written on the grid if the following conditions are all satisfied:

- The cell \`(i, i)\` belongs to the Y, for all \`0 <= i <= floor(n / 2)\`.
- The cell \`(i, n - 1 - i)\` belongs to the Y, for all \`0 <= i <= floor(n / 2)\`.
- The cell \`(i, floor(n / 2))\` belongs to the Y, for all \`floor(n / 2) <= i <= n - 1\`.

Two cells that share the letter Y must have the same value, and all cells **not** belonging to the Y must have the same value, and that value must be **different** from the value of the Y.

In one operation, you can change the value of any cell to \`0\`, \`1\`, or \`2\`. Return the **minimum** number of operations needed to write the letter Y on the grid.`,
  constraints: [
    '3 <= n <= 49',
    'n is odd.',
    '0 <= grid[i][j] <= 2',
  ],
  examples: [
    {
      input: 'grid = [[0,1,0],[0,1,0],[0,1,0]]',
      output: '3',
      explanation: 'Make Y cells = 1, non-Y cells = 0: change (0,0),(2,0),(2,2) → 3 ops.',
    },
    {
      input: 'grid = [[1,2,2],[1,1,2],[0,1,0]]',
      output: '4',
    },
  ],
  hints: [
    'Level 1: Identify which cells belong to the Y and which don\'t. For n×n with half = n/2 (integer division): Y cells are (i,i) and (i,n-1-i) for i≤half, plus (i,half) for i≥half.',
    'Level 2: Count value frequencies in Y cells and non-Y cells separately.',
    'Level 3: Try all 6 ordered pairs (v1, v2) with v1 ≠ v2 ∈ {0,1,2}. Cost = (Y cells not equal to v1) + (non-Y cells not equal to v2). Return the minimum.',
  ],
  functionName: 'minimumOperationsToWriteY',
  params: ['grid'],
  starterCode: {
    javascript: `function minimumOperationsToWriteY(grid) {
  const n = grid.length;
  const half = (n - 1) / 2;
  const yFreq = [0, 0, 0];
  const nFreq = [0, 0, 0];
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      const v = grid[i][j];
      const isY = (i === j && i <= half) || (i + j === n - 1 && i <= half) || (i >= half && j === half);
      if (isY) yFreq[v]++;
      else nFreq[v]++;
    }
  }
  const yT = yFreq[0] + yFreq[1] + yFreq[2];
  const nT = nFreq[0] + nFreq[1] + nFreq[2];
  let ans = Infinity;
  for (let v1 = 0; v1 <= 2; v1++) {
    for (let v2 = 0; v2 <= 2; v2++) {
      if (v1 === v2) continue;
      ans = Math.min(ans, (yT - yFreq[v1]) + (nT - nFreq[v2]));
    }
  }
  return ans;
}`,
    typescript: `function minimumOperationsToWriteY(grid: number[][]): number {
  const n = grid.length;
  const half = (n - 1) / 2;
  const yFreq = [0, 0, 0];
  const nFreq = [0, 0, 0];
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      const v = grid[i]![j]!;
      const isY = (i === j && i <= half) || (i + j === n - 1 && i <= half) || (i >= half && j === half);
      if (isY) yFreq[v]!++;
      else nFreq[v]!++;
    }
  }
  const yT = yFreq[0]! + yFreq[1]! + yFreq[2]!;
  const nT = nFreq[0]! + nFreq[1]! + nFreq[2]!;
  let ans = Infinity;
  for (let v1 = 0; v1 <= 2; v1++) {
    for (let v2 = 0; v2 <= 2; v2++) {
      if (v1 === v2) continue;
      ans = Math.min(ans, (yT - yFreq[v1]!) + (nT - nFreq[v2]!));
    }
  }
  return ans;
}`,
    python: `def minimumOperationsToWriteY(grid):
    grid = [list(row.to_py() if hasattr(row, 'to_py') else row) for row in (grid.to_py() if hasattr(grid, 'to_py') else grid)]
    n = len(grid)
    half = (n - 1) // 2
    y_freq = [0, 0, 0]
    n_freq = [0, 0, 0]
    for i in range(n):
        for j in range(n):
            v = grid[i][j]
            is_y = (i == j and i <= half) or (i + j == n - 1 and i <= half) or (i >= half and j == half)
            if is_y:
                y_freq[v] += 1
            else:
                n_freq[v] += 1
    y_total = sum(y_freq)
    n_total = sum(n_freq)
    ans = float('inf')
    for v1 in range(3):
        for v2 in range(3):
            if v1 == v2: continue
            ans = min(ans, (y_total - y_freq[v1]) + (n_total - n_freq[v2]))
    return ans`,
  },
  visibleTests: [
    { args: [[[0, 1, 0], [0, 1, 0], [0, 1, 0]]], expected: 3 },
    { args: [[[1, 2, 2], [1, 1, 2], [0, 1, 0]]], expected: 4 },
  ],
  hiddenTests: [
    { args: [[[1, 1, 1], [1, 1, 1], [1, 1, 1]]], expected: 4 },
    { args: [[[0, 1, 0], [1, 0, 1], [0, 1, 0]]], expected: 3 },
    { args: [[[2, 1, 2], [1, 2, 1], [2, 1, 2]]], expected: 3 },
    { args: [[[0, 2, 0], [2, 0, 2], [2, 0, 2]]], expected: 0 },
  ],
};
