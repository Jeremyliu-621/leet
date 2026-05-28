import type { Problem } from '../types';

export const problem: Problem = {
  id: 'distinct-subsequences',
  title: 'Distinct Subsequences',
  difficulty: 'hard',
  tags: ['dynamic-programming', 'strings'],
  description: `Given two strings \`s\` and \`t\`, return the number of distinct subsequences of \`s\` which equals \`t\`.

The test cases are generated so that the answer fits on a 32-bit signed integer.`,
  constraints: [
    '1 <= s.length, t.length <= 1000',
    's and t consist of English letters.',
  ],
  examples: [
    {
      input: 's = "rabbbit", t = "rabbit"',
      output: '3',
      explanation: 'There are 3 ways to get "rabbit" from "rabbbit" by removing one of the three "b"s.',
    },
    {
      input: 's = "babgbag", t = "bag"',
      output: '5',
    },
  ],
  hints: [
    'dp[i][j] = number of distinct subsequences of s[0..i-1] that equal t[0..j-1].',
    'If s[i-1] == t[j-1]: dp[i][j] = dp[i-1][j-1] + dp[i-1][j] (use or skip this character).',
    'Otherwise: dp[i][j] = dp[i-1][j] (must skip).',
    'Base case: dp[i][0] = 1 (empty t is a subsequence of any prefix of s).',
  ],
  functionName: 'numDistinct',
  params: ['s', 't'],
  starterCode: {
    javascript: `function numDistinct(s, t) {

}`,
    typescript: "function numDistinct(s: string, t: string): number {\n\n}",

    python: `def numDistinct(s, t):
    pass`,
  },
  visibleTests: [
    { args: ['rabbbit', 'rabbit'], expected: 3 },
    { args: ['babgbag', 'bag'], expected: 5 },
  ],
  hiddenTests: [
    { args: ['a', 'a'], expected: 1 },
    { args: ['aa', 'a'], expected: 2 },
    { args: ['aabb', 'ab'], expected: 4 },
    { args: ['abc', 'd'], expected: 0 },
  ],
};
