import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-ascii-delete-sum',
  title: 'Minimum ASCII Delete Sum for Two Strings',
  difficulty: 'medium',
  tags: ['dynamic-programming', 'strings'],
  description: `Given two strings \`s1\` and \`s2\`, return the lowest ASCII sum of deleted characters to make two strings equal.`,
  constraints: [
    '0 <= s1.length, s2.length <= 1000',
    's1 and s2 consist of lowercase English letters',
  ],
  examples: [
    { input: 's1 = "sea", s2 = "eat"', output: '231', explanation: 'Deleting "s" from "sea" adds the ASCII value of "s" (115) to the sum. Deleting "t" from "eat" adds 116 to the sum. Total = 231.' },
    { input: 's1 = "delete", s2 = "leet"', output: '403', explanation: 'Deleting "d" and one "e" from "delete", and keeping "let" as common subsequence. 100+101+101+101=403.' },
  ],
  hints: [
    'This is a variant of the longest common subsequence problem.',
    'dp[i][j] = minimum ASCII delete sum to make s1[0..i-1] equal to s2[0..j-1].',
    'If s1[i-1] == s2[j-1], dp[i][j] = dp[i-1][j-1]. Otherwise, dp[i][j] = min(dp[i-1][j] + s1[i-1].charCodeAt(0), dp[i][j-1] + s2[j-1].charCodeAt(0)).',
  ],
  functionName: 'minimumDeleteSum',
  params: ['s1', 's2'],
  starterCode: {
    javascript: 'function minimumDeleteSum(s1, s2) {\n\n}\n',
    python: 'def minimumDeleteSum(s1, s2):\n    pass\n',
  },
  visibleTests: [
    { args: ['sea', 'eat'], expected: 231 },
    { args: ['delete', 'leet'], expected: 403 },
  ],
  hiddenTests: [
    { args: ['', 'abc'], expected: 294 },
    { args: ['a', 'a'], expected: 0 },
    { args: ['abc', 'abc'], expected: 0 },
    { args: ['ab', 'ba'], expected: 194 },
  ],
};
