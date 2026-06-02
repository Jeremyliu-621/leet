import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-operations-to-write-the-letter-y-on-a-grid',
  title: 'Minimum Operations to Write the Letter Y on a Grid',
  difficulty: 'medium',
  tags: ['arrays', 'math'],
  description: `You are given a **0-indexed** \`n x n\` grid where \`n\` is **odd**, and \`grid[r][c]\` is \`0\`, \`1\`, or \`2\`.

We say there is a **Y** in the grid if the Y consists of:
- A **top-left diagonal** arm: all cells where \`r == c\` and \`r <= n / 2\`.
- A **top-right diagonal** arm: all cells where \`r + c == n - 1\` and \`r <= n / 2\`.
- A **vertical stem**: all cells where \`c == n / 2\` and \`r >= n / 2\`.

The **letter Y** is written on the grid if:
- **All** Y-cells have the **same** value.
- **All** non-Y-cells have the **same** value.
- The Y-cell value and non-Y-cell value are **different**.

In one operation you can change the value of any cell to \`0\`, \`1\`, or \`2\`.

Return *the **minimum** number of operations needed to write the letter Y on the grid.*`,
  constraints: [
    '3 <= n <= 49',
    'n is odd.',
    '0 <= grid[i][j] <= 2',
  ],
  examples: [
    {
      input: 'grid = [[1,2,2],[1,1,0],[0,1,0]]',
      output: '3',
      explanation: 'Y-cells (for n=3): (0,0)=1, (0,2)=2, (1,1)=1, (2,1)=1. Setting Y to 1 costs 1 (change (0,2)). Setting non-Y to 0 costs 2 (change (1,0)=1, (0,1)=2). Total = 3.',
    },
    {
      input: 'grid = [[2,1,2],[2,2,1],[2,2,2]]',
      output: '3',
      explanation: 'Y-cells: (0,0)=2, (0,2)=2, (1,1)=2, (2,1)=2. All Y-cells already 2. Non-Y-cells: (0,1)=1,(1,0)=2,(1,2)=1,(2,0)=2,(2,2)=2. Set non-Y to 1: cost = 3 (the three 2s in non-Y). Total = 3.',
    },
  ],
  hints: [
    'Collect frequency counts of {0,1,2} separately for Y-cells and non-Y-cells.',
    'For each pair (v1, v2) where v1 ≠ v2, cost = (Y-cells not equal to v1) + (non-Y-cells not equal to v2).',
    'Take the minimum over all 6 valid (v1, v2) pairs.',
  ],
  functionName: 'minimumOperationsToWriteY',
  params: ['grid'],
  starterCode: {
    javascript: `function minimumOperationsToWriteY(grid) {
  const n = grid.length;
  const mid = Math.floor(n / 2);
  const yFreq = [0, 0, 0];
  const nonYFreq = [0, 0, 0];
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      const isY = (i === j && i <= mid) || (i + j === n - 1 && i <= mid) || (j === mid && i >= mid);
      if (isY) yFreq[grid[i][j]]++;
      else nonYFreq[grid[i][j]]++;
    }
  }
  const yTotal = yFreq[0] + yFreq[1] + yFreq[2];
  const nonYTotal = nonYFreq[0] + nonYFreq[1] + nonYFreq[2];
  let ans = Infinity;
  for (let v1 = 0; v1 <= 2; v1++) {
    for (let v2 = 0; v2 <= 2; v2++) {
      if (v1 === v2) continue;
      ans = Math.min(ans, (yTotal - yFreq[v1]) + (nonYTotal - nonYFreq[v2]));
    }
  }
  return ans;
}`,
    typescript: `function minimumOperationsToWriteY(grid: number[][]): number {
  const n = grid.length;
  const mid = Math.floor(n / 2);
  const yFreq = [0, 0, 0];
  const nonYFreq = [0, 0, 0];
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      const isY = (i === j && i <= mid) || (i + j === n - 1 && i <= mid) || (j === mid && i >= mid);
      if (isY) yFreq[grid[i][j]!]++;
      else nonYFreq[grid[i][j]!]++;
    }
  }
  const yTotal = yFreq[0]! + yFreq[1]! + yFreq[2]!;
  const nonYTotal = nonYFreq[0]! + nonYFreq[1]! + nonYFreq[2]!;
  let ans = Infinity;
  for (let v1 = 0; v1 <= 2; v1++) {
    for (let v2 = 0; v2 <= 2; v2++) {
      if (v1 === v2) continue;
      ans = Math.min(ans, (yTotal - yFreq[v1]!) + (nonYTotal - nonYFreq[v2]!));
    }
  }
  return ans;
}`,
    python: `def minimumOperationsToWriteY(grid: list[list[int]]) -> int:
    n = len(grid)
    mid = n // 2
    y_freq = [0, 0, 0]
    non_y_freq = [0, 0, 0]
    for i in range(n):
        for j in range(n):
            is_y = (i == j and i <= mid) or (i + j == n - 1 and i <= mid) or (j == mid and i >= mid)
            if is_y:
                y_freq[grid[i][j]] += 1
            else:
                non_y_freq[grid[i][j]] += 1
    y_total = sum(y_freq)
    non_y_total = sum(non_y_freq)
    ans = float('inf')
    for v1 in range(3):
        for v2 in range(3):
            if v1 == v2:
                continue
            ans = min(ans, (y_total - y_freq[v1]) + (non_y_total - non_y_freq[v2]))
    return ans`,
  },
  visibleTests: [
    { args: [[[1, 2, 2], [1, 1, 0], [0, 1, 0]]], expected: 3 },
    { args: [[[2, 1, 2], [2, 2, 1], [2, 2, 2]]], expected: 3 },
    { args: [[[0, 0, 0], [0, 0, 0], [0, 0, 0]]], expected: 4 },
    { args: [[[1, 1, 1], [1, 1, 1], [1, 1, 1]]], expected: 4 },
  ],
  hiddenTests: [
    { args: [[[0, 0, 1], [0, 0, 1], [0, 1, 2]]], expected: 4 },
    { args: [[[1, 0, 2], [0, 1, 0], [0, 1, 0]]], expected: 1 },
    { args: [[[2, 2, 2], [2, 2, 2], [2, 2, 2]]], expected: 4 },
    { args: [[[0, 1, 2], [0, 2, 1], [0, 2, 0]]], expected: 3 },
    { args: [[[0, 2, 0], [2, 0, 2], [0, 2, 0]]], expected: 3 },
    { args: [[[1, 2, 0], [2, 0, 1], [2, 0, 2]]], expected: 2 },
  ],
};
