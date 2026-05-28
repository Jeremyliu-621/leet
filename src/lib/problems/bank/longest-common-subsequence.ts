import type { Problem } from '../types';

export const problem: Problem = {
  id: 'longest-common-subsequence',
  title: 'Longest Common Subsequence',
  difficulty: 'medium',
  tags: ['dynamic-programming', 'strings'],
  description: `Given two strings \`text1\` and \`text2\`, return the length of their **longest common subsequence** (LCS). If there is no common subsequence, return \`0\`.

A **subsequence** is a sequence that can be derived from a string by deleting some (or no) characters without changing the order of the remaining characters.

A **common subsequence** is a subsequence that is common to both strings.`,
  constraints: [
    '1 <= text1.length, text2.length <= 1000',
    'text1 and text2 consist of only lowercase English letters',
  ],
  examples: [
    {
      input: 'text1 = "abcde", text2 = "ace"',
      output: '3',
      explanation: 'The LCS is "ace" (length 3).',
    },
    {
      input: 'text1 = "abc", text2 = "abc"',
      output: '3',
      explanation: 'The LCS is "abc" (length 3).',
    },
    {
      input: 'text1 = "abc", text2 = "def"',
      output: '0',
      explanation: 'No characters in common.',
    },
  ],
  hints: [
    'Build a 2D dp table where `dp[i][j]` = length of the LCS of `text1[0..i-1]` and `text2[0..j-1]`. The value at each cell depends only on its top, left, and top-left neighbors.',
    'If `text1[i-1] === text2[j-1]`, the characters match: `dp[i][j] = dp[i-1][j-1] + 1`. Otherwise take the better of skipping one character from either string: `dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1])`.',
    '`const dp = Array.from({length: m+1}, () => new Array(n+1).fill(0)); for (let i = 1; i <= m; i++) for (let j = 1; j <= n; j++) dp[i][j] = text1[i-1]===text2[j-1] ? dp[i-1][j-1]+1 : Math.max(dp[i-1][j], dp[i][j-1]); return dp[m][n];`',
  ],
  functionName: 'longestCommonSubsequence',
  params: ['text1', 'text2'],
  starterCode: {
    javascript: 'function longestCommonSubsequence(text1, text2) {\n  \n}\n',
    typescript: "function longestCommonSubsequence(text1: string, text2: string): number {\n  \n}",

    python: 'def longestCommonSubsequence(text1: str, text2: str) -> int:\n    pass\n',
  },
  visibleTests: [
    { args: ['abcde', 'ace'], expected: 3 },
    { args: ['abc', 'abc'], expected: 3 },
    { args: ['abc', 'def'], expected: 0 },
    { args: ['abcba', 'cbbd'], expected: 2 },
  ],
  hiddenTests: [
    { args: ['a', 'b'], expected: 0 },
    { args: ['a', 'a'], expected: 1 },
    { args: ['ezupkr', 'ubmrapg'], expected: 2 },
    { args: ['oxcpqrsvwf', 'shmtulqrypy'], expected: 2 },
  ],
};
