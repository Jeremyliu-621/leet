import type { Problem } from '../types';

export const problem: Problem = {
  id: 'longest-palindromic-subsequence',
  title: 'Longest Palindromic Subsequence',
  difficulty: 'hard',
  tags: ['dynamic-programming', 'strings'],
  description: `Given a string \`s\`, return the length of the **longest palindromic subsequence** in \`s\`.

A **subsequence** is derived from a string by deleting zero or more characters without changing the relative order of the remaining characters. A **palindromic subsequence** reads the same forwards and backwards.

**Key insight:** Use 2D DP where \`dp[i][j]\` = length of the longest palindromic subsequence in \`s[i..j]\`.
- If \`s[i] === s[j]\`: \`dp[i][j] = dp[i+1][j-1] + 2\`
- Otherwise: \`dp[i][j] = max(dp[i+1][j], dp[i][j-1])\`
- Base case: \`dp[i][i] = 1\`

Fill the table by increasing substring length.`,
  constraints: [
    '1 <= s.length <= 1000',
    's consists only of lowercase English letters',
  ],
  examples: [
    {
      input: 's = "bbbab"',
      output: '4',
      explanation: 'The longest palindromic subsequence is "bbbb" with length 4.',
    },
    {
      input: 's = "cbbd"',
      output: '2',
      explanation: '"bb" is the longest palindromic subsequence with length 2.',
    },
    {
      input: 's = "a"',
      output: '1',
      explanation: 'A single character is a palindrome of length 1.',
    },
  ],
  hints: [
    'Think about the relationship between the longest palindromic subsequence of s[i..j] and the same subproblem on slightly smaller substrings. Does it matter whether s[i] equals s[j]?',
    'If the first and last characters match, the LPS includes both plus the best palindromic subsequence between them: dp[i][j] = dp[i+1][j-1] + 2. If they differ, the best is to either ignore the first or ignore the last character: dp[i][j] = max(dp[i+1][j], dp[i][j-1]).',
    '`const n = s.length; const dp = Array.from({length: n}, () => new Array(n).fill(0)); for (let i = 0; i < n; i++) dp[i][i] = 1; for (let len = 2; len <= n; len++) { for (let i = 0; i <= n - len; i++) { const j = i + len - 1; dp[i][j] = s[i] === s[j] ? (len === 2 ? 2 : dp[i+1][j-1] + 2) : Math.max(dp[i+1][j], dp[i][j-1]); } } return dp[0][n-1];`',
  ],
  functionName: 'longestPalindromeSubseq',
  params: ['s'] as readonly string[],
  starterCode: {
    javascript: 'function longestPalindromeSubseq(s) {\n  // your code here\n}\n',
    typescript: "function longestPalindromeSubseq(s: string): number {\n  // your code here\n}",

    python: 'def longestPalindromeSubseq(s: str) -> int:\n    # your code here\n    pass\n',
  },
  visibleTests: [
    { args: ['bbbab'], expected: 4 },
    { args: ['cbbd'], expected: 2 },
    { args: ['a'], expected: 1 },
  ],
  hiddenTests: [
    { args: ['aa'], expected: 2 },
    { args: ['ab'], expected: 1 },
    { args: ['abcba'], expected: 5 },
    { args: ['abcde'], expected: 1 },
    { args: ['aabaa'], expected: 5 },
    { args: ['character'], expected: 5 },
  ],
};
