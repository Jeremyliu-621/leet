import type { Problem } from '../types';

export const problem: Problem = {
  id: 'shortest-common-supersequence',
  title: 'Shortest Common Supersequence',
  difficulty: 'hard',
  tags: ['dynamic-programming', 'strings'],
  description: `Given two strings \`str1\` and \`str2\`, return the **shortest string** that has both \`str1\` and \`str2\` as **subsequences**. If there are multiple valid strings, return **any** of them.

A string \`s\` is a subsequence of string \`t\` if deleting some number of characters from \`t\` (possibly 0) results in the string \`s\`.`,
  constraints: [
    '1 <= str1.length, str2.length <= 1000',
    'str1 and str2 consist of lowercase English letters.',
  ],
  examples: [
    {
      input: 'str1 = "abac", str2 = "cab"',
      output: '"cabac"',
      explanation: '"cabac" is the shortest string that contains "abac" as a subsequence (characters 1,2,3,4 of "cabac") and "cab" as a subsequence (characters 0,1,3 of "cabac").',
    },
    {
      input: 'str1 = "aaaaaaaa", str2 = "aaaaaaaa"',
      output: '"aaaaaaaa"',
      explanation: 'Both strings are identical, so the SCS is just the string itself.',
    },
    {
      input: 'str1 = "a", str2 = "b"',
      output: '"ab"',
      explanation: 'The shortest string containing both "a" and "b" as subsequences has length 2.',
    },
  ],
  hints: [
    'Build the standard LCS DP table. The SCS length is `len(str1) + len(str2) - LCS_length`.',
    'Reconstruct the SCS from the DP table. Traverse from `dp[m][n]` back to `dp[0][0]`. When `str1[i-1] === str2[j-1]`, both point to the same character — include it once and move diagonally.',
    'When characters differ, move to whichever neighbor has the smaller DP value (`dp[i-1][j]` or `dp[i][j-1]`) and include the corresponding character. Prepend to build the result in reverse.',
  ],
  functionName: 'shortestCommonSupersequence',
  params: ['str1', 'str2'],
  starterCode: {
    javascript: `function shortestCommonSupersequence(str1, str2) {
  const m = str1.length, n = str2.length;
  // dp[i][j] = SCS length of str1[0..i-1] and str2[0..j-1]
  const dp = Array.from({length: m+1}, (_, i) =>
    Array.from({length: n+1}, (_, j) => i + j));
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (str1[i-1] === str2[j-1]) dp[i][j] = dp[i-1][j-1] + 1;
      else dp[i][j] = Math.min(dp[i-1][j], dp[i][j-1]) + 1;
    }
  }
  // Reconstruct the SCS string
}`,
    typescript: "function shortestCommonSupersequence(str1: string, str2: string): string {\n  const m = str1.length, n = str2.length;\n  // dp[i][j] = SCS length of str1[0..i-1] and str2[0..j-1]\n  const dp = Array.from({length: m+1}, (_, i) =>\n    Array.from({length: n+1}, (_, j) => i + j));\n  for (let i = 1; i <= m; i++) {\n    for (let j = 1; j <= n; j++) {\n      if (str1[i-1] === str2[j-1]) dp[i][j] = dp[i-1][j-1] + 1;\n      else dp[i][j] = Math.min(dp[i-1][j], dp[i][j-1]) + 1;\n    }\n  }\n  // Reconstruct the SCS string\n}",

    python: `def shortestCommonSupersequence(str1, str2):
    m, n = len(str1), len(str2)
    dp = [[i + j for j in range(n + 1)] for i in range(m + 1)]
    for i in range(1, m + 1):
        for j in range(1, n + 1):
            if str1[i-1] == str2[j-1]:
                dp[i][j] = dp[i-1][j-1] + 1
            else:
                dp[i][j] = min(dp[i-1][j], dp[i][j-1]) + 1
    # Reconstruct the SCS string
    i, j, result = m, n, []
    pass`,
  },
  visibleTests: [
    { args: ['abac', 'cab'], expected: 'cabac' },
    { args: ['aaaaaaaa', 'aaaaaaaa'], expected: 'aaaaaaaa' },
    { args: ['a', 'b'], expected: 'ab' },
  ],
  hiddenTests: [
    { args: ['abc', 'abc'], expected: 'abc' },
    { args: ['geek', 'eke'], expected: 'geeke' },
    { args: ['horse', 'ros'], expected: 'horose' },
    { args: ['ab', 'ba'], expected: 'aba' },
    { args: ['abc', 'bca'], expected: 'abca' },
  ],
};
