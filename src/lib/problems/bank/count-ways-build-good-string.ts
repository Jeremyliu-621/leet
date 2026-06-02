import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-ways-build-good-string',
  title: 'Count Ways to Build Good Strings',
  difficulty: 'medium',
  tags: ['dynamic-programming'],
  description: `Given integers \`zero\`, \`one\`, \`low\`, and \`high\`, we can construct a string by starting with an empty string, and then at each step performing either of the following:

- Append the character \`'0'\` \`zero\` times.
- Append the character \`'1'\` \`one\` times.

This can be performed any number of times.

A **good** string is a string constructed by the above process having a **length** between \`low\` and \`high\` (inclusive).

Return the number of **different** good strings that can be constructed satisfying these properties. Since the answer can be large, return it **modulo** \`10^9 + 7\`.`,
  constraints: [
    '1 <= low <= high <= 10^5',
    '1 <= zero, one <= low',
  ],
  examples: [
    {
      input: 'low = 3, high = 3, zero = 1, one = 1',
      output: '8',
      explanation: 'One possible good string is "011". It is built as follows: "" -> "0" -> "01" -> "011". All binary strings of length 3 are good strings in this example.',
    },
    {
      input: 'low = 2, high = 3, zero = 1, one = 2',
      output: '5',
      explanation: 'The good strings are "00", "11", "000", "110", "011".',
    },
  ],
  hints: [
    'Define dp[i] = number of ways to build a string of exactly length i.',
    'dp[i] = dp[i - zero] + dp[i - one] (with dp[0] = 1).',
    'Sum dp[low..high] for the answer.',
  ],
  functionName: 'countGoodStrings',
  params: ['low', 'high', 'zero', 'one'],
  starterCode: {
    javascript: `function countGoodStrings(low, high, zero, one) {
  const MOD = 1000000007;
  const dp = new Array(high + 1).fill(0);
  dp[0] = 1;
  let ans = 0;
  for (let i = 1; i <= high; i++) {
    if (i >= zero) dp[i] = (dp[i] + dp[i - zero]) % MOD;
    if (i >= one) dp[i] = (dp[i] + dp[i - one]) % MOD;
    if (i >= low) ans = (ans + dp[i]) % MOD;
  }
  return ans;
}`,
    typescript: `function countGoodStrings(low: number, high: number, zero: number, one: number): number {
  const MOD = 1000000007;
  const dp = new Array<number>(high + 1).fill(0);
  dp[0] = 1;
  let ans = 0;
  for (let i = 1; i <= high; i++) {
    if (i >= zero) dp[i]! += dp[i - zero]!;
    if (i >= one) dp[i]! += dp[i - one]!;
    dp[i]! %= MOD;
    if (i >= low) ans = (ans + dp[i]!) % MOD;
  }
  return ans;
}`,
    python: `def countGoodStrings(low, high, zero, one):
    MOD = 10**9 + 7
    dp = [0] * (high + 1)
    dp[0] = 1
    ans = 0
    for i in range(1, high + 1):
        if i >= zero: dp[i] = (dp[i] + dp[i - zero]) % MOD
        if i >= one: dp[i] = (dp[i] + dp[i - one]) % MOD
        if i >= low: ans = (ans + dp[i]) % MOD
    return ans`,
  },
  visibleTests: [
    { args: [3, 3, 1, 1], expected: 8 },
    { args: [2, 3, 1, 2], expected: 5 },
  ],
  hiddenTests: [
    { args: [1, 1, 1, 1], expected: 2 },
    { args: [1, 3, 1, 1], expected: 14 },
    { args: [5, 5, 1, 1], expected: 32 },
    { args: [2, 4, 2, 3], expected: 3 },
  ],
};
