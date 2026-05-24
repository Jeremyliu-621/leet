import type { Problem } from '../types';

export const problem: Problem = {
  id: 'longest-common-subsequence',
  title: 'Longest Common Subsequence',
  difficulty: 'medium',
  tags: ['dynamic-programming', 'strings'],
  description: `Given two strings \`text1\` and \`text2\`, return the **length of their longest common subsequence**.

A **subsequence** is a sequence that appears in the same relative order in both strings but not necessarily contiguously. For example, \`"ace"\` is a subsequence of \`"abcde"\`.

Use 2D dynamic programming: let \`dp[i][j]\` be the LCS of \`text1[0..i-1]\` and \`text2[0..j-1]\`.
- If \`text1[i-1] === text2[j-1]\`: \`dp[i][j] = dp[i-1][j-1] + 1\`
- Otherwise: \`dp[i][j] = max(dp[i-1][j], dp[i][j-1])\``,
  constraints: [
    '1 <= text1.length, text2.length <= 1000',
    'text1 and text2 consist of lowercase English letters',
  ],
  examples: [
    {
      input: 'text1 = "abcde", text2 = "ace"',
      output: '3',
      explanation: 'LCS is "ace", length 3.',
    },
    {
      input: 'text1 = "abc", text2 = "abc"',
      output: '3',
      explanation: 'LCS is "abc".',
    },
    {
      input: 'text1 = "abc", text2 = "def"',
      output: '0',
      explanation: 'No common characters.',
    },
  ],
  hints: [
    'Define `dp[i][j]` as the LCS length of `text1[0..i-1]` and `text2[0..j-1]`. Base case: `dp[0][j] = dp[i][0] = 0` (empty string has LCS 0 with anything).',
    'Recurrence: if `text1[i-1] === text2[j-1]`, the last characters match — `dp[i][j] = dp[i-1][j-1] + 1`. Otherwise, the LCS doesn\'t use the last character of one or both strings: `dp[i][j] = max(dp[i-1][j], dp[i][j-1])`.',
    '`const m = text1.length, n = text2.length; const dp = Array.from({length: m+1}, () => new Array(n+1).fill(0)); for (let i = 1; i <= m; i++) for (let j = 1; j <= n; j++) dp[i][j] = text1[i-1] === text2[j-1] ? dp[i-1][j-1]+1 : Math.max(dp[i-1][j], dp[i][j-1]); return dp[m][n];`',
  ],
  functionName: 'longestCommonSubsequence',
  params: ['text1', 'text2'],
  starterCode: {
    javascript: 'function longestCommonSubsequence(text1, text2) {\n  // your code here\n}\n',
    python: 'def longestCommonSubsequence(text1: str, text2: str) -> int:\n    # your code here\n    pass\n',
  },
  visibleTests: [
    { args: ['abcde', 'ace'], expected: 3 },
    { args: ['abc', 'abc'], expected: 3 },
    { args: ['abc', 'def'], expected: 0 },
    { args: ['ezupkr', 'ubmrapg'], expected: 2 },
  ],
  hiddenTests: [
    { args: ['a', 'a'], expected: 1 },
    { args: ['abcba', 'abcbcba'], expected: 5 },
    { args: ['bsbininm', 'jmjkbkjkv'], expected: 1 },
  ],
};
