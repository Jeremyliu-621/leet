import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-ways-to-build-good-strings',
  title: 'Count Ways to Build Good Strings',
  difficulty: 'medium',
  tags: ['dynamic-programming', 'strings'],
  description: `Given integers \`low\`, \`high\`, \`zero\`, and \`one\`, count the number of good strings.

A string is built by starting from an empty string and repeatedly appending either:
- \`zero\` copies of the character \`'0'\`, or
- \`one\` copies of the character \`'1'\`.

A string is **good** if its length is in the range \`[low, high]\`.

Return the count of good strings modulo \`10^9 + 7\`.

**Note:** You can append multiple times and mix \`'0'\`s and \`'1'\`s in any order.`,
  constraints: [
    '1 <= low <= high <= 10^5',
    '1 <= zero, one <= low',
  ],
  examples: [
    {
      input: 'low = 3, high = 3, zero = 1, one = 1',
      output: '8',
      explanation: 'Each step appends exactly 1 char. All 2^3 = 8 binary strings of length 3 are valid.',
    },
    {
      input: 'low = 2, high = 3, zero = 1, one = 2',
      output: '5',
      explanation: 'Length-2 strings: "00" (0+0), "11" (one). Length-3 strings: "000", "011", "110". Total = 5.',
    },
    {
      input: 'low = 1, high = 1, zero = 1, one = 1',
      output: '2',
      explanation: '"0" and "1" are the only good strings of length 1.',
    },
  ],
  hints: [
    'Let dp[i] = number of ways to build a string of exactly length i.',
    'dp[0] = 1 (empty string). Transition: dp[i] += dp[i - zero] + dp[i - one] (when i >= zero or i >= one, respectively).',
    'Sum dp[low..high] modulo 10^9 + 7.',
  ],
  functionName: 'countGoodStrings',
  params: ['low', 'high', 'zero', 'one'],
  starterCode: {
    javascript: `function countGoodStrings(low, high, zero, one) {
  const MOD = 1_000_000_007;
  const dp = new Array(high + 1).fill(0);
  dp[0] = 1;
  for (let i = 1; i <= high; i++) {
    if (i >= zero) dp[i] = (dp[i] + dp[i - zero]) % MOD;
    if (i >= one) dp[i] = (dp[i] + dp[i - one]) % MOD;
  }
  let ans = 0;
  for (let i = low; i <= high; i++) ans = (ans + dp[i]) % MOD;
  return ans;
}`,
    typescript: `function countGoodStrings(low: number, high: number, zero: number, one: number): number {
  const MOD = 1_000_000_007;
  const dp = new Array<number>(high + 1).fill(0);
  dp[0] = 1;
  for (let i = 1; i <= high; i++) {
    if (i >= zero) dp[i]! = (dp[i]! + dp[i - zero]!) % MOD;
    if (i >= one) dp[i]! = (dp[i]! + dp[i - one]!) % MOD;
  }
  let ans = 0;
  for (let i = low; i <= high; i++) ans = (ans + dp[i]!) % MOD;
  return ans;
}`,
    python: `def countGoodStrings(low, high, zero, one):
    MOD = 10**9 + 7
    dp = [0] * (high + 1); dp[0] = 1
    for i in range(1, high + 1):
        if i >= zero: dp[i] = (dp[i] + dp[i-zero]) % MOD
        if i >= one: dp[i] = (dp[i] + dp[i-one]) % MOD
    return sum(dp[low:high+1]) % MOD
`,
  },
  visibleTests: [
    { args: [3, 3, 1, 1], expected: 8 },
    { args: [2, 3, 1, 2], expected: 5 },
    { args: [1, 1, 1, 1], expected: 2 },
  ],
  hiddenTests: [
    { args: [3, 5, 2, 1], expected: 16 },
    { args: [10, 10, 2, 3], expected: 7 },
    { args: [1, 5, 1, 1], expected: 62 },
    { args: [2, 2, 2, 2], expected: 2 },
    { args: [5, 5, 1, 2], expected: 8 },
    { args: [100000, 100000, 1, 1], expected: 607723520 },
  ],
};
