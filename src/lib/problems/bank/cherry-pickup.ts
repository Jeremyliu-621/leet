import type { Problem } from '../types';

export const problem: Problem = {
  id: 'cherry-pickup',
  title: 'Cherry Pickup',
  difficulty: 'hard',
  tags: ['dynamic-programming', 'arrays'],
  description: `You are given an \`n x n\` grid representing a field of cherries, each cell is one of three possible integers:

- \`0\` means the cell is empty, so you can pass through,
- \`1\` means the cell contains a cherry that you can pick up and pass through, or
- \`-1\` means the cell contains a thorn that blocks your way.

Return the maximum number of cherries you can collect by following the rules below:

- Starting at position \`(0, 0)\` and reaching \`(n - 1, n - 1)\` by moving right or down through valid path cells (cells with value \`0\` or \`1\`).
- After reaching \`(n - 1, n - 1)\`, returning to \`(0, 0)\` by moving left or up through valid path cells.
- When passing through a path cell containing a cherry, you pick it up, and the cell becomes an empty cell \`0\`.
- If there is no valid path between \`(0, 0)\` and \`(n - 1, n - 1)\`, then no cherries can be collected.`,
  constraints: [
    'n == grid.length',
    'n == grid[i].length',
    '1 <= n <= 50',
    'grid[i][j] is -1, 0, or 1',
    'grid[0][0] != -1',
    'grid[n - 1][n - 1] != -1',
  ],
  examples: [
    {
      input: 'grid = [[0,1,-1],[1,0,-1],[1,1,1]]',
      output: '5',
      explanation: 'The player started at (0, 0) and went down, down, right, right to reach (2, 2). 4 cherries collected. Then returned up, up, left, left picking up 1 cherry at (0, 1). Total = 5.',
    },
    {
      input: 'grid = [[1,1,-1],[1,-1,1],[-1,1,1]]',
      output: '0',
      explanation: 'Going from (0,0) to (2,2) is not possible without hitting a thorn.',
    },
  ],
  hints: [
    'Model this as two people simultaneously walking from (0,0) to (n-1,n-1).',
    'Let dp[t][r1][r2] = max cherries when both are on diagonal t (r1+c1 = r2+c2 = t), person 1 at row r1, person 2 at row r2.',
    'If r1 == r2, count the cherry once; otherwise count both.',
    'Transitions: each person can come from the cell above or from the left.',
  ],
  functionName: 'cherryPickup',
  params: ['grid'],
  starterCode: {
    javascript: `function cherryPickup(grid) {
  const n = grid.length;
  // dp[r1][r2] = max cherries when both walkers on same diagonal t, person1 at row r1
  let dp = Array.from({ length: n }, () => new Array(n).fill(-Infinity));
  dp[0][0] = grid[0][0];
  for (let t = 1; t <= 2 * (n - 1); t++) {
    const ndp = Array.from({ length: n }, () => new Array(n).fill(-Infinity));
    for (let r1 = Math.max(0, t - n + 1); r1 <= Math.min(t, n - 1); r1++) {
      const c1 = t - r1;
      if (c1 < 0 || c1 >= n || grid[r1][c1] === -1) continue;
      for (let r2 = r1; r2 <= Math.min(t, n - 1); r2++) {
        const c2 = t - r2;
        if (c2 < 0 || c2 >= n || grid[r2][c2] === -1) continue;
        const cherries = r1 === r2 ? grid[r1][c1] : grid[r1][c1] + grid[r2][c2];
        let best = -Infinity;
        for (const pr1 of [r1, r1 - 1]) {
          for (const pr2 of [r2, r2 - 1]) {
            if (pr1 >= 0 && pr2 >= 0) best = Math.max(best, dp[pr1][pr2]);
          }
        }
        if (best !== -Infinity) ndp[r1][r2] = Math.max(ndp[r1][r2], best + cherries);
      }
    }
    dp = ndp;
  }
  return Math.max(0, dp[n - 1][n - 1]);
}`,
    typescript: `function cherryPickup(grid: number[][]): number {
  const n = grid.length;
  let dp: number[][] = Array.from({ length: n }, () => new Array(n).fill(-Infinity));
  dp[0]![0] = grid[0]![0]!;
  for (let t = 1; t <= 2 * (n - 1); t++) {
    const ndp: number[][] = Array.from({ length: n }, () => new Array(n).fill(-Infinity));
    for (let r1 = Math.max(0, t - n + 1); r1 <= Math.min(t, n - 1); r1++) {
      const c1 = t - r1;
      if (c1 < 0 || c1 >= n || grid[r1]![c1] === -1) continue;
      for (let r2 = r1; r2 <= Math.min(t, n - 1); r2++) {
        const c2 = t - r2;
        if (c2 < 0 || c2 >= n || grid[r2]![c2] === -1) continue;
        const cherries = r1 === r2 ? grid[r1]![c1]! : grid[r1]![c1]! + grid[r2]![c2]!;
        let best = -Infinity;
        for (const pr1 of [r1, r1 - 1]) {
          for (const pr2 of [r2, r2 - 1]) {
            if (pr1 >= 0 && pr2 >= 0) best = Math.max(best, dp[pr1]![pr2]!);
          }
        }
        if (best !== -Infinity) ndp[r1]![r2] = Math.max(ndp[r1]![r2]!, best + cherries);
      }
    }
    dp = ndp;
  }
  return Math.max(0, dp[n - 1]![n - 1]!);
}`,
    python: `def cherryPickup(grid):
    n = len(grid)
    NEG_INF = float('-inf')
    dp = [[NEG_INF] * n for _ in range(n)]
    dp[0][0] = grid[0][0]
    for t in range(1, 2 * (n - 1) + 1):
        ndp = [[NEG_INF] * n for _ in range(n)]
        for r1 in range(max(0, t - n + 1), min(t, n - 1) + 1):
            c1 = t - r1
            if c1 < 0 or c1 >= n or grid[r1][c1] == -1:
                continue
            for r2 in range(r1, min(t, n - 1) + 1):
                c2 = t - r2
                if c2 < 0 or c2 >= n or grid[r2][c2] == -1:
                    continue
                cherries = grid[r1][c1] if r1 == r2 else grid[r1][c1] + grid[r2][c2]
                best = max(
                    dp[pr1][pr2]
                    for pr1 in (r1, r1 - 1) for pr2 in (r2, r2 - 1)
                    if pr1 >= 0 and pr2 >= 0
                )
                if best != NEG_INF:
                    ndp[r1][r2] = max(ndp[r1][r2], best + cherries)
        dp = ndp
    return max(0, dp[n - 1][n - 1])`,
  },
  visibleTests: [
    { args: [[[0, 1, -1], [1, 0, -1], [1, 1, 1]]], expected: 5 },
    { args: [[[1, 1, -1], [1, -1, 1], [-1, 1, 1]]], expected: 0 },
  ],
  hiddenTests: [
    { args: [[[1]]], expected: 1 },
    { args: [[[0, 0, 0], [0, 0, 0], [0, 0, 0]]], expected: 0 },
    { args: [[[1, 1, 1], [1, 1, 1], [1, 1, 1]]], expected: 8 },
    { args: [[[1, 0, 0, 0, 0], [0, 0, 0, 0, 1], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 1]]], expected: 3 },
  ],
};
