import type { Problem } from '../types';

export const problem: Problem = {
  id: 'delete-operation-for-two-strings',
  title: 'Delete Operation for Two Strings',
  difficulty: 'medium',
  tags: ['dynamic-programming', 'strings'],
  description: `Given two strings \`word1\` and \`word2\`, return the **minimum number of steps** required to make \`word1\` and \`word2\` the same.

In one step, you can delete exactly **one** character in either string.`,
  constraints: [
    '`1 <= word1.length, word2.length <= 500`',
    '`word1` and `word2` consist of only lowercase English letters',
  ],
  examples: [
    {
      input: "word1 = 'sea', word2 = 'eat'",
      output: '2',
      explanation: "Delete 's' from word1 and 't' from word2 to get 'ea' = 'ea'. 2 steps.",
    },
    {
      input: "word1 = 'leetcode', word2 = 'etco'",
      output: '4',
      explanation: "Delete 4 characters in total to make both strings equal to 'etc' or 'etco' subset.",
    },
  ],
  hints: [
    'The answer equals len(word1) + len(word2) - 2 * LCS(word1, word2), where LCS is the Longest Common Subsequence.',
    'Compute LCS with standard DP: dp[i][j] = LCS of word1[0..i-1] and word2[0..j-1].',
    'If word1[i-1] == word2[j-1]: dp[i][j] = dp[i-1][j-1] + 1; else: dp[i][j] = max(dp[i-1][j], dp[i][j-1]).',
  ],
  functionName: 'minDistance',
  params: ['word1', 'word2'],
  starterCode: {
    javascript: `function minDistance(word1, word2) {
  const m = word1.length, n = word2.length;
  const dp = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      dp[i][j] = word1[i - 1] === word2[j - 1]
        ? dp[i - 1][j - 1] + 1
        : Math.max(dp[i - 1][j], dp[i][j - 1]);
    }
  }
  return m + n - 2 * dp[m][n];
}`,
    typescript: `function minDistance(word1: string, word2: string): number {
  const m = word1.length, n = word2.length;
  const dp = Array.from({ length: m + 1 }, () => new Array<number>(n + 1).fill(0));
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      dp[i]![j] = word1[i - 1] === word2[j - 1]
        ? dp[i - 1]![j - 1]! + 1
        : Math.max(dp[i - 1]![j]!, dp[i]![j - 1]!);
    }
  }
  return m + n - 2 * dp[m]![n]!;
}`,
    python: `def minDistance(word1, word2):
    m, n = len(word1), len(word2)
    dp = [[0] * (n + 1) for _ in range(m + 1)]
    for i in range(1, m + 1):
        for j in range(1, n + 1):
            if word1[i-1] == word2[j-1]:
                dp[i][j] = dp[i-1][j-1] + 1
            else:
                dp[i][j] = max(dp[i-1][j], dp[i][j-1])
    return m + n - 2 * dp[m][n]`,
  },
  visibleTests: [
    { args: ['sea', 'eat'], expected: 2 },
    { args: ['leetcode', 'etco'], expected: 4 },
    { args: ['abc', 'abc'], expected: 0 },
  ],
  hiddenTests: [
    { args: ['a', 'b'], expected: 2 },
    { args: ['', 'abc'], expected: 3 },
    { args: ['abcd', 'cdab'], expected: 4 },
    { args: ['abcde', 'ace'], expected: 2 },
  ],
};
