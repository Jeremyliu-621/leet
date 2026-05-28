import type { Problem } from '../types';

export const problem: Problem = {
  id: 'interleaving-string',
  title: 'Interleaving String',
  difficulty: 'medium',
  tags: ['dynamic-programming'],
  description: `Given strings \`s1\`, \`s2\`, and \`s3\`, find whether \`s3\` is formed by an **interleaving** of \`s1\` and \`s2\`.

An interleaving of two strings \`s\` and \`t\` is a configuration where \`s\` and \`t\` are divided into some number of substrings such that:
- \`s = s1 + s2 + ... + sn\`
- \`t = t1 + t2 + ... + tm\`
- \`|n - m| <= 1\`
- The **interleaving** is \`s1 + t1 + s2 + t2 + s3 + t3 + ...\` or \`t1 + s1 + t2 + s2 + ...\``,
  constraints: [
    '0 <= s1.length, s2.length <= 100',
    '0 <= s3.length <= 200',
    's1, s2, and s3 consist of lowercase English letters',
  ],
  examples: [
    {
      input: 's1 = "aabcc", s2 = "dbbca", s3 = "aadbbcbcac"',
      output: 'true',
    },
    {
      input: 's1 = "aabcc", s2 = "dbbca", s3 = "aadbbbaccc"',
      output: 'false',
    },
    {
      input: 's1 = "", s2 = "", s3 = ""',
      output: 'true',
    },
  ],
  hints: [
    'Use 2D DP. Let dp[i][j] = true if s3[0..i+j-1] is an interleaving of s1[0..i-1] and s2[0..j-1].',
    'Base case: dp[0][0] = true. Transition: dp[i][j] = (s1[i-1]==s3[i+j-1] && dp[i-1][j]) || (s2[j-1]==s3[i+j-1] && dp[i][j-1]).',
    'If s1.length + s2.length != s3.length, return false immediately.',
  ],
  functionName: 'isInterleave',
  params: ['s1', 's2', 's3'],
  starterCode: {
    javascript: `function isInterleave(s1, s2, s3) {
  // Return true if s3 is an interleaving of s1 and s2
}`,
    python: `def isInterleave(s1, s2, s3):
    # Return True if s3 is an interleaving of s1 and s2
    pass`,
  },
  visibleTests: [
    { args: ['aabcc', 'dbbca', 'aadbbcbcac'], expected: true },
    { args: ['aabcc', 'dbbca', 'aadbbbaccc'], expected: false },
    { args: ['', '', ''], expected: true },
  ],
  hiddenTests: [
    { args: ['', 'b', 'b'], expected: true },
    { args: ['a', 'b', 'ab'], expected: true },
    { args: ['a', 'b', 'ba'], expected: true },
    { args: ['abc', 'def', 'adbecf'], expected: true },
    { args: ['abc', 'def', 'abdfce'], expected: false },
  ],
};
