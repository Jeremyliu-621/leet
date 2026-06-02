import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximum-amount-of-money-robot-can-earn',
  title: 'Maximum Amount of Money Robot Can Earn',
  difficulty: 'medium',
  tags: ['arrays', 'dynamic-programming'],
  description: `You are given an \`n × m\` integer grid \`coins\`. A cell \`coins[i][j]\` represents:
- A **positive** value: coins collected when passing through.
- A **negative** value: coins lost (robber cells).

A robot starts at \`(0, 0)\` and must reach \`(n-1, m-1)\` by moving **right** or **down** only.

The robot can **neutralize** at most **2 robber cells** along its path, setting their value to 0.

Return the **maximum** total coins the robot can collect.`,
  constraints: [
    '1 <= n, m <= 500',
    '-1000 <= coins[i][j] <= 1000',
  ],
  examples: [
    {
      input: 'coins = [[1,2],[3,4]]',
      output: '8',
      explanation: 'All values are positive. Best path: (0,0)→(1,0)→(1,1) = 1+3+4 = 8.',
    },
    {
      input: 'coins = [[-5,5,0],[5,-5,5],[0,5,5]]',
      output: '15',
      explanation:
        'Path (0,0)→(0,1)→(1,1)→(1,2)→(2,2) has values -5,5,-5,5,5. Neutralizing both -5s gives 0+5+0+5+5=15.',
    },
  ],
  hints: [
    'Use DP with a third dimension tracking how many robber cells have been neutralized (0, 1, or 2).',
    'dp[i][j][k] = max coins at cell (i,j) having used k neutralizations.',
    'At each negative cell, choose to take the loss or spend a neutralization (if k < 2) to set it to 0.',
  ],
  functionName: 'maximumAmount',
  params: ['coins'],
  starterCode: {
    javascript: `function maximumAmount(coins) {
  const n = coins.length, m = coins[0].length;
  const NEG = -Infinity;
  const dp = Array.from({length: n}, () => Array.from({length: m}, () => [NEG, NEG, NEG]));
  dp[0][0][0] = coins[0][0];
  if (coins[0][0] < 0) dp[0][0][1] = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (i === 0 && j === 0) continue;
      const c = coins[i][j], prevs = [];
      if (i > 0) prevs.push(dp[i-1][j]);
      if (j > 0) prevs.push(dp[i][j-1]);
      for (let k = 0; k <= 2; k++) {
        for (const p of prevs) if (p[k] !== NEG) dp[i][j][k] = Math.max(dp[i][j][k], p[k] + c);
        if (c < 0 && k >= 1) for (const p of prevs) if (p[k-1] !== NEG) dp[i][j][k] = Math.max(dp[i][j][k], p[k-1]);
      }
    }
  }
  return Math.max(...dp[n-1][m-1]);
}`,
    typescript: `function maximumAmount(coins: number[][]): number {
  const n = coins.length, m = coins[0]!.length;
  const NEG = -Infinity;
  const dp = Array.from({length: n}, () => Array.from({length: m}, () => [NEG, NEG, NEG] as [number,number,number]));
  dp[0]![0]![0] = coins[0]![0]!;
  if (coins[0]![0]! < 0) dp[0]![0]![1] = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (i === 0 && j === 0) continue;
      const c = coins[i]![j]!, prevs: [number,number,number][] = [];
      if (i > 0) prevs.push(dp[i-1]![j]!);
      if (j > 0) prevs.push(dp[i]![j-1]!);
      for (let k = 0; k <= 2; k++) {
        for (const p of prevs) if (p[k] !== NEG) dp[i]![j]![k] = Math.max(dp[i]![j]![k], p[k] + c);
        if (c < 0 && k >= 1) for (const p of prevs) if (p[k-1] !== NEG) dp[i]![j]![k] = Math.max(dp[i]![j]![k], p[k-1]);
      }
    }
  }
  return Math.max(...dp[n-1]![m-1]!);
}`,
    python: `def maximumAmount(coins: list[list[int]]) -> int:
    n, m = len(coins), len(coins[0])
    NEG = float('-inf')
    dp = [[[NEG]*3 for _ in range(m)] for _ in range(n)]
    dp[0][0][0] = coins[0][0]
    if coins[0][0] < 0: dp[0][0][1] = 0
    for i in range(n):
        for j in range(m):
            if i == 0 and j == 0: continue
            c = coins[i][j]
            prevs = []
            if i > 0: prevs.append(dp[i-1][j])
            if j > 0: prevs.append(dp[i][j-1])
            for k in range(3):
                for p in prevs:
                    if p[k] != NEG: dp[i][j][k] = max(dp[i][j][k], p[k] + c)
                if c < 0 and k >= 1:
                    for p in prevs:
                        if p[k-1] != NEG: dp[i][j][k] = max(dp[i][j][k], p[k-1])
    return max(dp[n-1][m-1])`,
  },
  visibleTests: [
    { args: [[[1, 2], [3, 4]]], expected: 8 },
    { args: [[[-5, 5, 0], [5, -5, 5], [0, 5, 5]]], expected: 15 },
  ],
  hiddenTests: [
    { args: [[[1]]], expected: 1 },
    { args: [[[-1]]], expected: 0 },
    { args: [[[-1, -2], [-3, -4]]], expected: -1 },
    { args: [[[0, -1], [-1, 0]]], expected: 0 },
    { args: [[[1, -1, 1], [-1, 1, -1], [1, -1, 1]]], expected: 3 },
  ],
};
