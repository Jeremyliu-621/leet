import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-substrings-that-differ-by-one-character',
  title: 'Count Substrings That Differ by One Character',
  difficulty: 'medium',
  tags: ['strings', 'dynamic-programming'],
  description: `Given two strings \`s\` and \`t\`, find the number of ways you can choose a non-empty substring of \`s\` and replace a **single character** by a different character such that the resulting substring is a substring of \`t\`. In other words, find the number of substrings in \`s\` that differ from some substring in \`t\` by **exactly** one character.

Return the number of substrings that satisfy the condition above.

A **substring** is a contiguous sequence of characters within a string.`,
  constraints: [
    '1 <= s.length, t.length <= 100',
    's and t consist of lowercase English letters',
  ],
  examples: [
    {
      input: 's = "aba", t = "baba"',
      output: '6',
      explanation: 'The following are the pairs of substrings from s and t that differ by exactly one character: ("a","b"), ("a","b"), ("a","b"), ("ab","ba"), ("ba","ab"), ("aba","bab").',
    },
    {
      input: 's = "ab", t = "bb"',
      output: '3',
      explanation: 'The pairs: ("a","b"), ("ab","bb"), ("a","b"). All have exactly one differing position.',
    },
    {
      input: 's = "a", t = "a"',
      output: '0',
      explanation: 'There are no substrings that differ by exactly one character.',
    },
  ],
  hints: [
    'Try a brute-force triple loop: for each starting pair (i, j), extend as long as characters match; when exactly one mismatch has been seen, count the current substring and keep extending as long as there are no further mismatches.',
    'Once diff > 1 you can break early.',
    'A smarter O(n²) DP: for each pair (i,j), dp[i][j] = length of the longest common suffix of s[0..i] and t[0..j]. Count += dp[i-1][j-1] + 1 when s[i] ≠ t[j].',
  ],
  functionName: 'countSubstrings',
  params: ['s', 't'],
  starterCode: {
    javascript: `function countSubstrings(s, t) {
  const m = s.length, n = t.length;
  let count = 0;
  // dp[i][j] = length of longest common suffix of s[0..i-1] and t[0..j-1]
  const dp = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (s[i - 1] !== t[j - 1]) {
        count += dp[i - 1][j - 1] + 1;
        dp[i][j] = 0;
      } else {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      }
    }
  }
  return count;
}`,
    typescript: `function countSubstrings(s: string, t: string): number {
  const m = s.length, n = t.length;
  let count = 0;
  const dp = Array.from({ length: m + 1 }, () => new Array<number>(n + 1).fill(0));
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (s[i - 1] !== t[j - 1]) {
        count += dp[i - 1]![j - 1]! + 1;
        dp[i]![j] = 0;
      } else {
        dp[i]![j] = dp[i - 1]![j - 1]! + 1;
      }
    }
  }
  return count;
}`,
    python: `def countSubstrings(s, t):
    m, n = len(s), len(t)
    count = 0
    dp = [[0] * (n + 1) for _ in range(m + 1)]
    for i in range(1, m + 1):
        for j in range(1, n + 1):
            if s[i-1] != t[j-1]:
                count += dp[i-1][j-1] + 1
                dp[i][j] = 0
            else:
                dp[i][j] = dp[i-1][j-1] + 1
    return count`,
  },
  visibleTests: [
    { args: ['aba', 'baba'], expected: 6 },
    { args: ['ab', 'bb'], expected: 3 },
    { args: ['a', 'a'], expected: 0 },
  ],
  hiddenTests: [
    { args: ['a', 'b'], expected: 1 },
    { args: ['aa', 'bb'], expected: 4 },
    { args: ['aaa', 'aaa'], expected: 0 },
    { args: ['abc', 'abc'], expected: 6 },
    { args: ['aba', 'bab'], expected: 5 },
    { args: ['ab', 'cd'], expected: 4 },
  ],
};
