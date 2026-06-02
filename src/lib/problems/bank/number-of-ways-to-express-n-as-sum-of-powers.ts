import type { Problem } from '../types';

export const problem: Problem = {
  id: 'number-of-ways-to-express-n-as-sum-of-powers',
  title: 'Number of Ways to Express N as Sum of Powers',
  difficulty: 'medium',
  tags: ['dynamic-programming', 'math'],
  description: `Given two positive integers \`n\` and \`x\`, return the number of ways \`n\` can be expressed as the sum of the \`x\`th power of **unique** positive integers, in other words, the number of sets of unique integers \`[n1, n2, ..., nk]\` where \`n = n1^x + n2^x + ... + nk^x\`.

Since the result can be very large, return it **modulo** \`10^9 + 7\`.`,
  constraints: [
    '1 <= n <= 300',
    '1 <= x <= 5',
  ],
  examples: [
    {
      input: 'n = 10, x = 2',
      output: '1',
      explanation: 'We can express 10 as 1² + 3² = 1 + 9 = 10. That is the only way. (We cannot use 2²=4 with anything else that sums to 6 using unique values.)',
    },
    {
      input: 'n = 4, x = 1',
      output: '2',
      explanation: '4 = 4, or 4 = 1 + 3. Both use unique integers. Note: 4 = 2 + 2 is invalid since 2 is repeated.',
    },
  ],
  hints: [
    'Use a subset-sum style DP. Let dp[j] = number of ways to form sum j using distinct x-th powers.',
    'Iterate over each candidate value i starting from 1, computing v = i^x. If v > n, stop. For each i, update dp from n down to v (to ensure each i is used at most once).',
    'dp[0] = 1 (empty set). Final answer is dp[n].',
  ],
  functionName: 'numberOfWays',
  params: ['n', 'x'],
  starterCode: {
    javascript: `function numberOfWays(n, x) {
  const MOD = 1_000_000_007n;
  const dp = new Array(n + 1).fill(0n);
  dp[0] = 1n;
  for (let i = 1; ; i++) {
    let v = 1;
    for (let j = 0; j < x; j++) v *= i;
    if (v > n) break;
    for (let j = n; j >= v; j--) {
      dp[j] = (dp[j] + dp[j - v]) % MOD;
    }
  }
  return Number(dp[n]);
}`,
    typescript: `function numberOfWays(n: number, x: number): number {
  const MOD = 1_000_000_007n;
  const dp = new Array<bigint>(n + 1).fill(0n);
  dp[0] = 1n;
  for (let i = 1; ; i++) {
    let v = 1;
    for (let j = 0; j < x; j++) v *= i;
    if (v > n) break;
    for (let j = n; j >= v; j--) {
      dp[j] = (dp[j]! + dp[j - v]!) % MOD;
    }
  }
  return Number(dp[n]!);
}`,
    python: `def numberOfWays(n: int, x: int) -> int:
    MOD = 10 ** 9 + 7
    dp = [0] * (n + 1)
    dp[0] = 1
    i = 1
    while True:
        v = i ** x
        if v > n:
            break
        for j in range(n, v - 1, -1):
            dp[j] = (dp[j] + dp[j - v]) % MOD
        i += 1
    return dp[n]`,
  },
  visibleTests: [
    { args: [10, 2], expected: 1 },
    { args: [4, 1], expected: 2 },
    { args: [1, 1], expected: 1 },
  ],
  hiddenTests: [
    { args: [1, 5], expected: 1 },
    { args: [10, 1], expected: 10 },
    { args: [100, 1], expected: 444793 },
    { args: [100, 2], expected: 3 },
    { args: [100, 3], expected: 1 },
    { args: [300, 1], expected: 872471266 },
    { args: [300, 2], expected: 25 },
    { args: [300, 5], expected: 0 },
  ],
};
