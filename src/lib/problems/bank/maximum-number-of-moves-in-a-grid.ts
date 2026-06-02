import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximum-number-of-moves-in-a-grid',
  title: 'Maximum Number of Moves in a Grid',
  difficulty: 'medium',
  tags: ['dynamic-programming', 'arrays'],
  description: `You are given a **0-indexed** \`m x n\` matrix \`grid\` consisting of **positive** integers.

You can start at **any** cell in the first column of the matrix, and traverse the grid in the following way:

- From cell \`(row, col)\`, you can move to \`(row - 1, col + 1)\`, \`(row, col + 1)\`, or \`(row + 1, col + 1)\`.
- The value in the destination cell must be **strictly greater** than the value in the current cell.

Return the **maximum** number of moves that you can perform.`,
  constraints: [
    'm == grid.length',
    'n == grid[i].length',
    '2 <= m, n <= 1000',
    '4 <= grid[i][j] <= 10^6',
    'All values in grid are distinct.',
  ],
  examples: [
    {
      input: 'grid = [[2,4,3,5],[5,4,9,3],[3,4,2,11],[10,9,13,15]]',
      output: '3',
      explanation: 'Start at (0,0)=2, move to (0,1)=4, to (0,2)=3? No, must be strictly greater. Start at (3,0)=10, move to (2,1)=4? No. Best path: (0,0)=2→(0,1)=4→(1,2)=9→(1,3)=3? No. (3,0)=10→(2,1)=4? No. Correct answer path reaches col 3.',
    },
    {
      input: 'grid = [[3,2,4],[2,1,9],[1,1,7]]',
      output: '0',
      explanation: 'From any starting cell in column 0, no adjacent cell in column 1 has a strictly greater value.',
    },
  ],
  hints: [
    'Process columns left to right using DP.',
    'dp[row][col] = maximum moves to reach that cell (or -1 if unreachable).',
    'For each reachable cell, try the three diagonal moves to the next column if the value is strictly greater.',
  ],
  functionName: 'maxMoves',
  params: ['grid'],
  starterCode: {
    javascript: `function maxMoves(grid) {
  const m = grid.length, n = grid[0].length;
  let reachable = new Set(Array.from({length: m}, (_, i) => i));
  for (let c = 0; c < n - 1; c++) {
    const next = new Set();
    for (const r of reachable) {
      for (const dr of [-1, 0, 1]) {
        const nr = r + dr;
        if (nr >= 0 && nr < m && grid[nr][c+1] > grid[r][c]) next.add(nr);
      }
    }
    if (!next.size) return c;
    reachable = next;
  }
  return n - 1;
}`,
    typescript: `function maxMoves(grid: number[][]): number {
  const m = grid.length, n = grid[0]!.length;
  let reachable = new Set<number>(Array.from({length: m}, (_, i) => i));
  for (let c = 0; c < n - 1; c++) {
    const next = new Set<number>();
    for (const r of reachable) {
      for (const dr of [-1, 0, 1]) {
        const nr = r + dr;
        if (nr >= 0 && nr < m && grid[nr]![c+1]! > grid[r]![c]!) next.add(nr);
      }
    }
    if (!next.size) return c;
    reachable = next;
  }
  return n - 1;
}`,
    python: `def maxMoves(grid):
    if hasattr(grid, 'to_py'): grid = grid.to_py()
    grid = [[int(x) for x in (r.to_py() if hasattr(r, 'to_py') else r)] for r in grid]
    m, n = len(grid), len(grid[0])
    reachable = set(range(m))
    for c in range(n - 1):
        nxt = set()
        for r in reachable:
            for dr in (-1, 0, 1):
                nr = r + dr
                if 0 <= nr < m and grid[nr][c+1] > grid[r][c]:
                    nxt.add(nr)
        if not nxt: return c
        reachable = nxt
    return n - 1`,
  },
  visibleTests: [
    { args: [[[2, 4, 3, 5], [5, 4, 9, 3], [3, 4, 2, 11], [10, 9, 13, 15]]], expected: 3 },
    { args: [[[3, 2, 4], [2, 1, 9], [1, 1, 7]]], expected: 0 },
  ],
  hiddenTests: [
    { args: [[[1, 2], [3, 4]]], expected: 1 },
    { args: [[[4, 5, 6]]], expected: 2 },
    { args: [[[10, 1], [1, 10]]], expected: 1 },
    { args: [[[1, 9, 2], [2, 1, 3], [3, 2, 1]]], expected: 1 },
    { args: [[[5, 6, 7, 8]]], expected: 3 },
    { args: [[[8, 7, 6, 5]]], expected: 0 },
  ],
};
