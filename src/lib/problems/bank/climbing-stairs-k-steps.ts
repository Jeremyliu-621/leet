import type { Problem } from '../types';

export const problem: Problem = {
  id: 'climbing-stairs-k-steps',
  title: 'Climbing Stairs with K Steps',
  difficulty: 'medium',
  tags: ['dynamic-programming'],
  description: `You are climbing a staircase of \`n\` steps. Each time you can take \`1\` to \`k\` steps. Return the number of **distinct ways** you can climb to the top.

Since the answer may be very large, return it modulo \`10^9 + 7\`.`,
  constraints: [
    '1 <= n <= 1000',
    '1 <= k <= n',
  ],
  examples: [
    {
      input: 'n = 4, k = 2',
      output: '5',
      explanation: '1+1+1+1, 1+1+2, 1+2+1, 2+1+1, 2+2',
    },
    {
      input: 'n = 4, k = 3',
      output: '7',
      explanation: '1+1+1+1, 1+1+2, 1+2+1, 2+1+1, 2+2, 1+3, 3+1',
    },
  ],
  hints: [
    'Build a dp array where dp[i] is the number of ways to reach step i.',
    'dp[i] = sum of dp[i-j] for j in 1..min(k, i). Set dp[0] = 1 as the base case.',
    'Use a running prefix sum to compute each dp[i] in O(1), making the overall algorithm O(n).',
  ],
  functionName: 'climbStairsK',
  params: ['n', 'k'],
  starterCode: {
    javascript: `function climbStairsK(n, k) {
  const MOD = 1e9 + 7;
  const dp = new Array(n + 1).fill(0);
  dp[0] = 1;
  let prefix = 1;
  for (let i = 1; i <= n; i++) {
    dp[i] = prefix % MOD;
    if (i >= k) prefix = (prefix - dp[i - k] + MOD) % MOD;
    prefix = (prefix + dp[i]) % MOD;
  }
  return dp[n];
}`,
    typescript: `function climbStairsK(n: number, k: number): number {
  const MOD = 1e9 + 7;
  const dp = new Array(n + 1).fill(0) as number[];
  dp[0] = 1;
  let prefix = 1;
  for (let i = 1; i <= n; i++) {
    dp[i] = prefix % MOD;
    if (i >= k) prefix = (prefix - dp[i - k]! + MOD) % MOD;
    prefix = (prefix + dp[i]!) % MOD;
  }
  return dp[n]!;
}`,
    python: `def climbStairsK(n, k):
    MOD = 10**9 + 7
    dp = [0] * (n + 1)
    dp[0] = 1
    prefix = 1
    for i in range(1, n + 1):
        dp[i] = prefix % MOD
        if i >= k:
            prefix = (prefix - dp[i - k] + MOD) % MOD
        prefix = (prefix + dp[i]) % MOD
    return dp[n]`,
  },
  visibleTests: [
    { args: [4, 2], expected: 5 },
    { args: [4, 3], expected: 7 },
  ],
  hiddenTests: [
    { args: [1, 1], expected: 1 },
    { args: [5, 5], expected: 16 },
    { args: [10, 2], expected: 89 },
    { args: [3, 3], expected: 4 },
    { args: [6, 3], expected: 24 },
  ],
};
