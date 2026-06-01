import type { Problem } from '../types';

export const problem: Problem = {
  id: 'longest-common-substring',
  title: 'Longest Common Substring',
  difficulty: 'medium',
  tags: ['strings', 'dynamic-programming'],
  description: `Given two strings \`s\` and \`t\`, return the length of their **longest common substring**.

A **substring** is a contiguous sequence of characters within a string — unlike a subsequence, characters must appear consecutively with no gaps.

For example, \`s = "abcdef"\` and \`t = "bcdf"\` share the substring \`"bcd"\` (length 3), which is the longest.

**Approach:** Use a 2-D DP table where \`dp[i][j]\` is the length of the longest common substring ending at \`s[i-1]\` and \`t[j-1]\`. If the characters match, extend the run: \`dp[i][j] = dp[i-1][j-1] + 1\`. Otherwise \`dp[i][j] = 0\`. Track the global maximum.`,
  constraints: [
    '0 <= s.length, t.length <= 1000',
    's and t consist of lowercase English letters.',
  ],
  examples: [
    {
      input: 's = "abcdef", t = "bcdf"',
      output: '3',
      explanation: '"bcd" is the longest common substring (length 3).',
    },
    {
      input: 's = "abcde", t = "abfce"',
      output: '2',
      explanation: '"ab" is the longest common substring (length 2). Note: "ce" is not common because the characters are not contiguous in both strings simultaneously.',
    },
    {
      input: 's = "abc", t = "xyz"',
      output: '0',
      explanation: 'No characters are shared, so the answer is 0.',
    },
  ],
  functionName: 'longestCommonSubstring',
  params: ['s', 't'],
  starterCode: {
    javascript: `function longestCommonSubstring(s, t) {
  const m = s.length, n = t.length;
  const dp = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));
  let best = 0;
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (s[i - 1] === t[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
        best = Math.max(best, dp[i][j]);
      }
    }
  }
  return best;
}`,
    typescript: `function longestCommonSubstring(s: string, t: string): number {
  const m = s.length, n = t.length;
  const dp: number[][] = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));
  let best = 0;
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (s[i - 1] === t[j - 1]) {
        dp[i]![j] = dp[i - 1]![j - 1]! + 1;
        best = Math.max(best, dp[i]![j]!);
      }
    }
  }
  return best;
}`,
    python: `def longestCommonSubstring(s, t):
    if hasattr(s, 'to_py'): s = s.to_py()
    if hasattr(t, 'to_py'): t = t.to_py()
    m, n = len(s), len(t)
    dp = [[0] * (n + 1) for _ in range(m + 1)]
    best = 0
    for i in range(1, m + 1):
        for j in range(1, n + 1):
            if s[i - 1] == t[j - 1]:
                dp[i][j] = dp[i - 1][j - 1] + 1
                best = max(best, dp[i][j])
    return best`,
  },
  visibleTests: [
    { args: ['abcdef', 'bcdf'], expected: 3 },
    { args: ['abcde', 'abfce'], expected: 2 },
    { args: ['abc', 'xyz'], expected: 0 },
  ],
  hiddenTests: [
    { args: ['', 'abc'], expected: 0 },
    { args: ['aaa', 'aa'], expected: 2 },
    { args: ['abcdef', 'abcdef'], expected: 6 },
    { args: ['abcbdab', 'bdcaba'], expected: 2 },
    { args: ['programming', 'gaming'], expected: 4 },
    { args: ['aab', 'azb'], expected: 1 },
    { args: ['abc', 'abc'], expected: 3 },
  ],
  hints: [
    'Unlike the Longest Common Subsequence, characters must be contiguous. A mismatch resets the current run to 0 rather than inheriting from a diagonal.',
    'Define `dp[i][j]` as the length of the longest common substring ending with `s[i-1]` and `t[j-1]`. If `s[i-1] === t[j-1]`, then `dp[i][j] = dp[i-1][j-1] + 1`; otherwise `dp[i][j] = 0`.',
    'Initialize a `(m+1) x (n+1)` table of zeros. Iterate through all `(i, j)` pairs, updating the global max whenever you extend a match. Return the max.',
  ],
};
