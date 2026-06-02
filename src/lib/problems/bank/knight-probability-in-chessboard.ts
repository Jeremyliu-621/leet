import type { Problem } from '../types';

export const problem: Problem = {
  id: 'knight-probability-in-chessboard',
  title: 'Knight Probability in Chessboard',
  difficulty: 'medium',
  tags: ['dynamic-programming'],
  description: `On an \`n x n\` chessboard, a knight starts at row \`row\` and column \`column\` and attempts to make exactly \`k\` moves. Each move selects uniformly at random from up to 8 L-shaped moves. Return the probability that the knight remains on the board after all \`k\` moves.`,
  constraints: [
    '`1 <= n <= 25`',
    '`0 <= k <= 100`',
    '`0 <= row, column <= n - 1`',
  ],
  examples: [
    {
      input: 'n = 3, k = 2, row = 0, column = 0',
      output: '0.0625',
      explanation: 'From (0,0): 2 valid moves → (1,2) and (2,1). From each, 1 valid move stays on board. Probability = 2/8 * 1/8 * 2 = 2/64 = 0.03125? Actually 2*(1/64)=0.03125... wait: from (0,0) to 2 squares, each has 1/8 chance. From each of those squares, only 2 squares reachable on a 3x3, but only ones on board count. 2*(1/8)*(2/8)=4/64=0.0625.',
    },
    {
      input: 'n = 1, k = 0, row = 0, column = 0',
      output: '1.0',
      explanation: 'Already at the only cell; no moves needed.',
    },
  ],
  hints: [
    'Let dp[r][c] = probability of being at (r,c) after some number of moves. Start with dp[row][column]=1.0.',
    'After each move, compute new_dp[nr][nc] += dp[r][c]/8 for each of 8 knight moves that stay on board.',
    'Sum all dp[r][c] values after k moves to get the probability of remaining on the board.',
  ],
  functionName: 'knightProbability',
  params: ['n', 'k', 'row', 'column'],
  starterCode: {
    javascript: `function knightProbability(n, k, row, column) {
  const dirs = [[1,2],[1,-2],[-1,2],[-1,-2],[2,1],[2,-1],[-2,1],[-2,-1]];
  let dp = Array.from({length: n}, () => new Array(n).fill(0));
  dp[row][column] = 1;
  for (let m = 0; m < k; m++) {
    const ndp = Array.from({length: n}, () => new Array(n).fill(0));
    for (let r = 0; r < n; r++) for (let c = 0; c < n; c++) {
      if (dp[r][c] === 0) continue;
      for (const [dr, dc] of dirs) {
        const nr = r + dr, nc = c + dc;
        if (nr >= 0 && nr < n && nc >= 0 && nc < n) ndp[nr][nc] += dp[r][c] / 8;
      }
    }
    dp = ndp;
  }
  return dp.reduce((s, row) => s + row.reduce((a, b) => a + b, 0), 0);
}`,
    typescript: `function knightProbability(n: number, k: number, row: number, column: number): number {
  const dirs = [[1,2],[1,-2],[-1,2],[-1,-2],[2,1],[2,-1],[-2,1],[-2,-1]];
  let dp = Array.from({length: n}, () => new Array(n).fill(0));
  dp[row][column] = 1;
  for (let m = 0; m < k; m++) {
    const ndp = Array.from({length: n}, () => new Array(n).fill(0));
    for (let r = 0; r < n; r++) for (let c = 0; c < n; c++) {
      if (dp[r][c] === 0) continue;
      for (const [dr, dc] of dirs) {
        const nr = r + dr, nc = c + dc;
        if (nr >= 0 && nr < n && nc >= 0 && nc < n) ndp[nr][nc] += dp[r][c] / 8;
      }
    }
    dp = ndp;
  }
  return dp.reduce((s, row) => s + row.reduce((a: number, b: number) => a + b, 0), 0);
}`,
    python: `def knightProbability(n, k, row, column):
    dirs = [(1,2),(1,-2),(-1,2),(-1,-2),(2,1),(2,-1),(-2,1),(-2,-1)]
    dp = [[0.0]*n for _ in range(n)]
    dp[row][column] = 1.0
    for _ in range(k):
        ndp = [[0.0]*n for _ in range(n)]
        for r in range(n):
            for c in range(n):
                if dp[r][c] == 0: continue
                for dr, dc in dirs:
                    nr, nc = r+dr, c+dc
                    if 0 <= nr < n and 0 <= nc < n:
                        ndp[nr][nc] += dp[r][c] / 8
        dp = ndp
    return sum(dp[r][c] for r in range(n) for c in range(n))`,
  },
  visibleTests: [
    { args: [3, 2, 0, 0], expected: 0.0625 },
    { args: [1, 0, 0, 0], expected: 1.0 },
    { args: [25, 2, 2, 2], expected: 0.65625 },
  ],
  hiddenTests: [
    { args: [3, 3, 0, 0], expected: 0.015625 },
    { args: [5, 1, 2, 2], expected: 1.0 },
    { args: [8, 3, 4, 4], expected: 0.62109375 },
    { args: [3, 0, 1, 1], expected: 1.0 },
  ],
};
