import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-swaps-to-arrange-a-binary-grid',
  title: 'Minimum Swaps to Arrange a Binary Grid',
  difficulty: 'medium',
  tags: ['arrays', 'simulation'],
  description: `Given an \`n × n\` binary \`grid\`, in one step you may choose any two adjacent rows of the grid and swap them.

Return the **minimum** number of steps needed to arrange the grid so that all the cells above the main diagonal are zero. If it is not possible, return \`-1\`.

A cell \`grid[i][j]\` is above the main diagonal if \`j > i\`.

For example, for \`n = 3\`, the target upper-right triangle (above diagonal) looks like:
\`\`\`
* 0 0
* * 0
* * *
\`\`\`
where \`*\` can be \`0\` or \`1\`.`,
  constraints: [
    'n == grid.length',
    'n == grid[i].length',
    '1 <= n <= 200',
    'grid[i][j] is 0 or 1',
  ],
  examples: [
    {
      input: 'grid = [[0,0,1],[0,1,1],[1,1,1]]',
      output: '-1',
      explanation: 'No row has enough trailing zeros to satisfy the upper-triangle constraint.',
    },
    {
      input: 'grid = [[1,0,0],[1,1,0],[1,1,1]]',
      output: '0',
      explanation: 'Already arranged correctly. Row 0 has 2 trailing zeros, row 1 has 1.',
    },
    {
      input: 'grid = [[0,0,1],[0,1,0],[1,0,0]]',
      output: '3',
      explanation: 'Row with 2 trailing zeros must bubble up to position 0 (2 swaps), then row with 1 trailing zero to position 1 (1 swap). Total = 3.',
    },
  ],
  hints: [
    'For row i to satisfy the upper-triangle constraint, it must have at least n-1-i trailing zeros.',
    'Greedy: for each row i, find the nearest row at or below i that has enough trailing zeros, and swap it up.',
    'If no such row exists for some position i, return -1.',
  ],
  functionName: 'minSwaps',
  params: ['grid'],
  starterCode: {
    javascript: `function minSwaps(grid) {
  const n = grid.length;
  const zeros = grid.map(row => { let t = 0; for (let j = n-1; j >= 0 && row[j] === 0; j--) t++; return t; });
  let swaps = 0;
  for (let i = 0; i < n; i++) {
    const need = n - 1 - i;
    let j = i;
    while (j < n && zeros[j] < need) j++;
    if (j === n) return -1;
    while (j > i) { [zeros[j], zeros[j-1]] = [zeros[j-1], zeros[j]]; j--; swaps++; }
  }
  return swaps;
}`,
    typescript: `function minSwaps(grid: number[][]): number {
  const n = grid.length;
  const zeros = grid.map(row => { let t = 0; for (let j = n-1; j >= 0 && row[j]! === 0; j--) t++; return t; });
  let swaps = 0;
  for (let i = 0; i < n; i++) {
    const need = n - 1 - i;
    let j = i;
    while (j < n && zeros[j]! < need) j++;
    if (j === n) return -1;
    while (j > i) { [zeros[j], zeros[j-1]] = [zeros[j-1]!, zeros[j]!]; j--; swaps++; }
  }
  return swaps;
}`,
    python: `def minSwaps(grid):
    if hasattr(grid, 'to_py'): grid = grid.to_py()
    grid = [[int(x) for x in (r.to_py() if hasattr(r, 'to_py') else r)] for r in grid]
    n = len(grid)
    zeros = []
    for row in grid:
        t = 0
        for j in range(n-1, -1, -1):
            if row[j] == 0: t += 1
            else: break
        zeros.append(t)
    swaps = 0
    for i in range(n):
        need = n - 1 - i
        j = i
        while j < n and zeros[j] < need: j += 1
        if j == n: return -1
        while j > i: zeros[j], zeros[j-1] = zeros[j-1], zeros[j]; j -= 1; swaps += 1
    return swaps`,
  },
  visibleTests: [
    { args: [[[0,0,1],[0,1,1],[1,1,1]]], expected: -1 },
    { args: [[[1,0,0],[1,1,0],[1,1,1]]], expected: 0 },
    { args: [[[0,0,1],[0,1,0],[1,0,0]]], expected: 3 },
    { args: [[[0,1],[1,0]]], expected: 1 },
    { args: [[[1,0],[0,1]]], expected: 0 },
  ],
  hiddenTests: [
    { args: [[[1,1,1,0],[1,1,0,0],[1,0,0,0],[0,0,0,0]]], expected: 3 },
    { args: [[[1,1,0],[0,0,1],[1,0,0]]], expected: 2 },
    { args: [[[1,1,1],[0,1,0],[0,0,1]]], expected: -1 },
    { args: [[[1]]], expected: 0 },
    { args: [[[1,1],[1,0]]], expected: 1 },
    { args: [[[0,0,0,0],[1,0,0,0],[1,1,0,0],[1,1,1,0]]], expected: 0 },
    { args: [[[1,0,0,0],[0,0,0,0],[1,1,0,0],[1,1,1,0]]], expected: 0 },
    { args: [[[0,0],[0,0]]], expected: 0 },
    { args: [[[0,1,0],[1,0,0],[0,0,1]]], expected: 1 },
    { args: [[[1,1,0,0],[0,1,0,0],[1,0,0,1],[1,0,0,0]]], expected: 3 },
  ],
};
