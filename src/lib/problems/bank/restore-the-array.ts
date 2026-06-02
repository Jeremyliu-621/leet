import type { Problem } from '../types';

export const problem: Problem = {
  id: 'restore-the-array',
  title: 'Restore the Array',
  difficulty: 'hard',
  tags: ['dynamic-programming', 'strings'],
  description: `A program was supposed to print an array of integers, but the program forgot to print whitespace. The result is a string \`s\` representing a concatenation of an array \`arr\`.

Given \`s\` and an integer \`k\`, return the **number of ways** to restore the array such that:
- Every integer in \`arr\` is in the range \`[1, k]\`.
- No integer has **leading zeros**.

Return the count modulo \`10^9 + 7\`.

**Example:** s = \`"1317"\`, k = \`2000\`

Possible arrays: [1,3,1,7], [1,3,17], [1,31,7], [1,317], [13,1,7], [13,17], [131,7], [1317]. All values ≤ 2000 and no leading zeros → **8** ways.`,
  constraints: [
    '1 <= s.length <= 10^5',
    '1 <= k <= 10^9',
    's consists of digits only',
    's does not have leading zeros',
  ],
  examples: [
    {
      input: 's = "1000", k = 10000',
      output: '1',
      explanation: 'Only [1000] works since no sub-segment can form a number > 10000 without violating the no-leading-zeros rule for shorter splits.',
    },
    {
      input: 's = "1000", k = 10',
      output: '0',
      explanation: 'Any split results in a segment > 10 (e.g., 1000 > 10, and all sub-splits introduce leading-zero segments like "00" or "0").',
    },
    {
      input: 's = "1317", k = 2000',
      output: '8',
      explanation: 'All 8 possible splits of "1317" into numbers in [1,2000] without leading zeros are valid.',
    },
  ],
  hints: [
    'Let dp[i] = number of valid arrays using s[0..i-1]. Answer is dp[n].',
    'Transition: for each end position i, try all starting positions j < i such that s[j..i-1] forms a valid number (no leading zero, value in [1,k]).',
    'Prune early: if the number formed by s[j..i-1] exceeds k or has more digits than k, stop extending the window. At most O(digits(k)) steps per i.',
  ],
  functionName: 'numberOfArrays',
  params: ['s', 'k'],
  starterCode: {
    javascript: `function numberOfArrays(s, k) {
  const MOD = 1_000_000_007;
  const n = s.length;
  const maxLen = String(k).length;
  const dp = new Array(n + 1).fill(0);
  dp[n] = 1;
  for (let i = n - 1; i >= 0; i--) {
    if (s[i] === '0') continue;
    let num = 0;
    for (let j = i; j < Math.min(i + maxLen, n); j++) {
      num = num * 10 + parseInt(s[j]);
      if (num > k) break;
      dp[i] = (dp[i] + dp[j + 1]) % MOD;
    }
  }
  return dp[0];
}`,
    typescript: `function numberOfArrays(s: string, k: number): number {
  const MOD = 1_000_000_007;
  const n = s.length;
  const maxLen = String(k).length;
  const dp = new Array<number>(n + 1).fill(0);
  dp[n] = 1;
  for (let i = n - 1; i >= 0; i--) {
    if (s[i] === '0') continue;
    let num = 0;
    for (let j = i; j < Math.min(i + maxLen, n); j++) {
      num = num * 10 + parseInt(s[j]!);
      if (num > k) break;
      dp[i] = (dp[i]! + dp[j + 1]!) % MOD;
    }
  }
  return dp[0]!;
}`,
    python: `def numberOfArrays(s, k):
    MOD = 10**9 + 7
    n = len(s)
    max_len = len(str(k))
    dp = [0] * (n + 1)
    dp[n] = 1
    for i in range(n - 1, -1, -1):
        if s[i] == '0':
            continue
        num = 0
        for j in range(i, min(i + max_len, n)):
            num = num * 10 + int(s[j])
            if num > k:
                break
            dp[i] = (dp[i] + dp[j + 1]) % MOD
    return dp[0]
`,
  },
  visibleTests: [
    { args: ['1000', 10000], expected: 1 },
    { args: ['1000', 10], expected: 0 },
    { args: ['1317', 2000], expected: 8 },
  ],
  hiddenTests: [
    { args: ['100', 100], expected: 1 },
    { args: ['2020', 30], expected: 1 },
    { args: ['1', 1], expected: 1 },
    { args: ['111', 9], expected: 1 },
    { args: ['123456789', 987], expected: 149 },
    { args: ['999', 1000], expected: 4 },
  ],
};
