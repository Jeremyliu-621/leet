import type { Problem } from '../types';

export const problem: Problem = {
  id: 'is-subsequence-medium',
  title: 'Count Subsequence Occurrences',
  difficulty: 'medium',
  tags: ['strings', 'two-pointers'],
  description: `Given strings \`s\` and \`t\`, count the number of **distinct ways** to choose characters from \`t\` (in order, not necessarily contiguous) such that they spell out \`s\`.

Two ways are distinct if they use a different set of indices from \`t\`.

Return the count **modulo 10^9 + 7**.`,
  constraints: [
    '0 <= s.length <= 20',
    '0 <= t.length <= 1000',
    's and t consist of lowercase English letters.',
  ],
  examples: [
    {
      input: 's = "rabbit", t = "rabbbit"',
      output: '3',
      explanation: 'There are 3 ways to pick characters from "rabbbit" to spell "rabbit" — any one of the 3 b\'s can be skipped.',
    },
    {
      input: 's = "bag", t = "bag"',
      output: '1',
      explanation: 'Only one way: pick all three characters in order.',
    },
    {
      input: 's = "abc", t = "aabbcc"',
      output: '8',
      explanation: 'Each of the 2 a\'s, 2 b\'s, and 2 c\'s can be chosen independently: 2×2×2 = 8.',
    },
  ],
  hints: [
    'Level 1: This is a classic DP problem. Define dp[i][j] as the number of ways to form s[0..i-1] using t[0..j-1]. Think about what happens when s[i-1] == t[j-1] vs when they differ.',
    'Level 2: Recurrence: if s[i-1] === t[j-1], then dp[i][j] = dp[i-1][j-1] + dp[i][j-1] (either use this t character or skip it). Otherwise dp[i][j] = dp[i][j-1] (must skip this t character). Base case: dp[0][j] = 1 for all j (empty s matches in exactly one way).',
    'Level 3: `const MOD = 1_000_000_007n; const m = s.length, n = t.length; const dp = Array.from({length: m+1}, () => new Array(n+1).fill(0n)); for (let j = 0; j <= n; j++) dp[0][j] = 1n; for (let i = 1; i <= m; i++) for (let j = 1; j <= n; j++) { dp[i][j] = dp[i][j-1]; if (s[i-1] === t[j-1]) dp[i][j] = (dp[i][j] + dp[i-1][j-1]) % MOD; } return Number(dp[m][n]);`',
  ],
  functionName: 'countSubsequenceOccurrences',
  params: ['s', 't'],
  starterCode: {
    javascript: 'function countSubsequenceOccurrences(s, t) {\n  // your code here\n}\n',
    typescript: "function countSubsequenceOccurrences(s: string, t: string): number {\n  // your code here\n}",

    python: 'def countSubsequenceOccurrences(s, t):\n    # your code here\n    pass\n',
  },
  visibleTests: [
    { args: ['rabbit', 'rabbbit'], expected: 3 },
    { args: ['bag', 'bag'], expected: 1 },
    { args: ['abc', 'aabbcc'], expected: 8 },
  ],
  hiddenTests: [
    { args: ['', 'anything'], expected: 1 },
    { args: ['a', ''], expected: 0 },
    { args: ['a', 'aaa'], expected: 3 },
    { args: ['ab', 'aabb'], expected: 4 },
    { args: ['ace', 'abcde'], expected: 1 },
    { args: ['aa', 'aaaa'], expected: 6 },
    { args: ['abc', 'abc'], expected: 1 },
  ],
};
