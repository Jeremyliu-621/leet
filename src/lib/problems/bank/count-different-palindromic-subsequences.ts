import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-different-palindromic-subsequences',
  title: 'Count Different Palindromic Subsequences',
  difficulty: 'hard',
  tags: ['dynamic-programming', 'strings'],
  description: `Given a string \`s\`, return the number of different non-empty palindromic subsequences in \`s\`. Since the answer may be very large, return it **modulo 10^9 + 7**.

A subsequence is obtained by deleting some characters from \`s\` without changing the relative order. A palindromic subsequence reads the same forwards and backwards. Two sequences are different if they have different contents or differ at some position.

**Interval DP:** For \`dp[i][j]\` (# distinct palindromic subseqs in \`s[i..j]\`), consider all 4 characters ('a','b','c','d'). For each character \`c\` that appears in \`s[i..j]\`, find its leftmost and rightmost positions \`l\` and \`r\`.`,
  constraints: [
    '1 <= s.length <= 1000',
    's[i] is in {"a", "b", "c", "d"}',
  ],
  examples: [
    {
      input: 's = "bccb"',
      output: '6',
      explanation: 'The 6 different palindromic subsequences are: "b", "c", "bb", "cc", "bcb", "bccb".',
    },
    {
      input: 's = "abcdabcdabcdabcdabcdabcdabcdabcda"',
      output: '46245',
    },
    {
      input: 's = "abcba"',
      output: '10',
      explanation: '"a","b","c","aa","bb","aba","aaa"... carefully: a,b,c,aa,bb,aba,aca,abcba,abba,bab = 10.',
    },
  ],
  hints: [
    'Use interval DP. For each substring s[i..j], sum contributions of each of the 4 characters.',
    'For character c in s[i..j], let l = leftmost occurrence, r = rightmost occurrence. If l == r: add 1 (just "c"). If l+1 == r: add 2 ("c" and "cc"). Otherwise: add dp[l+1][r-1] + 2.',
    'The "+2" accounts for wrapping each palindrome in s[l+1..r-1] with two c\'s, plus "c" and "cc" themselves. Add results for all 4 characters.',
  ],
  functionName: 'countPalindromicSubsequences',
  params: ['s'],
  starterCode: {
    javascript: `function countPalindromicSubsequences(s) {
  const MOD = 1_000_000_007;
  const n = s.length;
  const dp = Array.from({length: n}, () => new Array(n).fill(0));
  for (let i = 0; i < n; i++) dp[i][i] = 1;
  for (let len = 2; len <= n; len++) {
    for (let i = 0; i <= n - len; i++) {
      const j = i + len - 1;
      for (const c of 'abcd') {
        let l = i, r = j;
        while (l <= j && s[l] !== c) l++;
        while (r >= i && s[r] !== c) r--;
        if (l > r) continue;
        if (l === r) { dp[i][j]++; continue; }
        if (l + 1 === r) { dp[i][j] = (dp[i][j] + 2) % MOD; continue; }
        dp[i][j] = (dp[i][j] + dp[l+1][r-1] + 2) % MOD;
      }
    }
  }
  return dp[0][n-1];
}`,
    typescript: `function countPalindromicSubsequences(s: string): number {
  const MOD = 1_000_000_007;
  const n = s.length;
  const dp: number[][] = Array.from({length: n}, () => new Array(n).fill(0));
  for (let i = 0; i < n; i++) dp[i]![i] = 1;
  for (let len = 2; len <= n; len++) {
    for (let i = 0; i <= n - len; i++) {
      const j = i + len - 1;
      for (const c of 'abcd') {
        let l = i, r = j;
        while (l <= j && s[l] !== c) l++;
        while (r >= i && s[r] !== c) r--;
        if (l > r) continue;
        if (l === r) { dp[i]![j]!++; continue; }
        if (l + 1 === r) { dp[i]![j] = (dp[i]![j]! + 2) % MOD; continue; }
        dp[i]![j] = (dp[i]![j]! + dp[l+1]![r-1]! + 2) % MOD;
      }
    }
  }
  return dp[0]![n-1]!;
}`,
    python: `def countPalindromicSubsequences(s: str) -> int:
    MOD = 10**9 + 7
    n = len(s)
    dp = [[0] * n for _ in range(n)]
    for i in range(n):
        dp[i][i] = 1
    for length in range(2, n + 1):
        for i in range(n - length + 1):
            j = i + length - 1
            for c in 'abcd':
                l, r = i, j
                while l <= j and s[l] != c:
                    l += 1
                while r >= i and s[r] != c:
                    r -= 1
                if l > r:
                    continue
                if l == r:
                    dp[i][j] += 1
                elif l + 1 == r:
                    dp[i][j] = (dp[i][j] + 2) % MOD
                else:
                    dp[i][j] = (dp[i][j] + dp[l+1][r-1] + 2) % MOD`,
  },
  visibleTests: [
    { args: ['bccb'], expected: 6 },
    { args: ['abcdabcdabcdabcdabcdabcdabcdabcda'], expected: 46245 },
    { args: ['abcba'], expected: 10 },
  ],
  hiddenTests: [
    { args: ['a'], expected: 1 },
    { args: ['aa'], expected: 2 },
    { args: ['ab'], expected: 2 },
    { args: ['abc'], expected: 3 },
    { args: ['abcb'], expected: 5 },
  ],
};
