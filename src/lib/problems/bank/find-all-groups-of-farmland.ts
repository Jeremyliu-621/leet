import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-all-groups-of-farmland',
  title: 'Find All Groups of Farmland',
  difficulty: 'medium',
  tags: ['arrays', 'simulation'],
  description: `You are given a **0-indexed** binary matrix \`land\` of size \`m × n\` where a \`0\` represents a forest cell and a \`1\` represents a farmland cell.

All groups of farmland form **axis-aligned rectangles**. For each such rectangle, return \`[r1, c1, r2, c2]\` where \`(r1, c1)\` is the top-left corner and \`(r2, c2)\` is the bottom-right corner (0-indexed).

Return the list of all rectangles in any order.`,
  constraints: [
    '`m == land.length`, `n == land[i].length`',
    '`1 <= m, n <= 300`',
    '`land[i][j]` is either `0` or `1`.',
    'Farmland groups are guaranteed to form rectangular shapes.',
  ],
  examples: [
    {
      input: 'land = [[1,0,0],[0,1,1],[0,1,1]]',
      output: '[[0,0,0,0],[1,1,2,2]]',
      explanation: 'Two farmland groups: a 1×1 block at (0,0), and a 2×2 block from (1,1) to (2,2).',
    },
    {
      input: 'land = [[1,1],[1,1]]',
      output: '[[0,0,1,1]]',
      explanation: 'The entire grid is one farmland group.',
    },
    {
      input: 'land = [[0]]',
      output: '[]',
      explanation: 'No farmland cells exist.',
    },
  ],
  hints: [
    'A cell is the **top-left corner** of a rectangle iff the cell above it and the cell to its left are both outside the grid or equal to 0.',
    'Once you find a top-left corner at `(r, c)`, scan right to find `c2` (last column in row `r` that is 1), then scan down to find `r2` (last row in column `c` that is 1).',
    `Every cell inside the rectangle will be skipped naturally: a cell at \`(r, c)\` with \`r > r1\` is blocked by the check "row above has a 1", and a cell at \`(r1, c)\` with \`c > c1\` is blocked by the check "column to the left has a 1".
\`\`\`js
function findFarmland(land) {
  const result = [];
  const m = land.length, n = land[0].length;
  for (let r = 0; r < m; r++) {
    for (let c = 0; c < n; c++) {
      if (!land[r][c]) continue;
      if (r > 0 && land[r-1][c]) continue;
      if (c > 0 && land[r][c-1]) continue;
      let r2 = r, c2 = c;
      while (r2 + 1 < m && land[r2+1][c]) r2++;
      while (c2 + 1 < n && land[r][c2+1]) c2++;
      result.push([r, c, r2, c2]);
    }
  }
  return result;
}
\`\`\``,
  ],
  functionName: 'findFarmland',
  params: ['land'],
  starterCode: {
    javascript: `function findFarmland(land) {
  const result = [];
  const m = land.length, n = land[0].length;
  for (let r = 0; r < m; r++) {
    for (let c = 0; c < n; c++) {
      if (!land[r][c]) continue;
      if (r > 0 && land[r-1][c]) continue;
      if (c > 0 && land[r][c-1]) continue;
      let r2 = r, c2 = c;
      while (r2 + 1 < m && land[r2+1][c]) r2++;
      while (c2 + 1 < n && land[r][c2+1]) c2++;
      result.push([r, c, r2, c2]);
    }
  }
  return result;
}`,
    typescript: `function findFarmland(land: number[][]): number[][] {
  const result: number[][] = [];
  const m = land.length, n = land[0]!.length;
  for (let r = 0; r < m; r++) {
    for (let c = 0; c < n; c++) {
      if (!land[r]![c]) continue;
      if (r > 0 && land[r-1]![c]) continue;
      if (c > 0 && land[r]![c-1]) continue;
      let r2 = r, c2 = c;
      while (r2 + 1 < m && land[r2+1]![c]) r2++;
      while (c2 + 1 < n && land[r]![c2+1]) c2++;
      result.push([r, c, r2, c2]);
    }
  }
  return result;
}`,
    python: `def findFarmland(land):
    m, n = len(land), len(land[0])
    result = []
    for r in range(m):
        for c in range(n):
            if not land[r][c]: continue
            if r > 0 and land[r-1][c]: continue
            if c > 0 and land[r][c-1]: continue
            r2, c2 = r, c
            while r2 + 1 < m and land[r2+1][c]: r2 += 1
            while c2 + 1 < n and land[r][c2+1]: c2 += 1
            result.append([r, c, r2, c2])
    return result`,
  },
  visibleTests: [
    { args: [[[1,0,0],[0,1,1],[0,1,1]]], expected: [[0,0,0,0],[1,1,2,2]] },
    { args: [[[1,1],[1,1]]], expected: [[0,0,1,1]] },
    { args: [[[0]]], expected: [] },
  ],
  hiddenTests: [
    { args: [[[1]]], expected: [[0,0,0,0]] },
    { args: [[[1,0,1]]], expected: [[0,0,0,0],[0,2,0,2]] },
    { args: [[[1],[0],[1]]], expected: [[0,0,0,0],[2,0,2,0]] },
    { args: [[[1,1,0,1,1],[1,1,0,1,1]]], expected: [[0,0,1,1],[0,3,1,4]] },
    { args: [[[0,0,0],[0,1,0],[0,0,0]]], expected: [[1,1,1,1]] },
    { args: [[[1,0],[0,0],[1,0]]], expected: [[0,0,0,0],[2,0,2,0]] },
    { args: [[[1,1,1],[0,0,0],[1,1,1]]], expected: [[0,0,0,2],[2,0,2,2]] },
    { args: [[[1,1],[1,1],[1,1]]], expected: [[0,0,2,1]] },
    { args: [[[0,1,0],[0,1,0]]], expected: [[0,1,1,1]] },
    { args: [[[0,0],[0,0]]], expected: [] },
  ],
};
