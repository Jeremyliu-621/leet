import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-insertion-steps-palindrome',
  title: 'Minimum Insertion Steps to Make a String Palindrome',
  difficulty: 'hard',
  tags: ['dynamic-programming', 'strings'],
  description: `Given a string \`s\`. In one step you can insert any character at any index of the string.

Return the minimum number of steps to make \`s\` palindrome.

A Palindrome String is one that reads the same backward as well as forward.`,
  constraints: ['1 <= s.length <= 500', 's consists of lowercase English letters.'],
  examples: [
    { input: 's = "zzazz"', output: '0', explanation: 'Already a palindrome.' },
    { input: 's = "mbadm"', output: '2', explanation: 'Insert "b" and "m" at appropriate positions: "mbdadbm" or similar.' },
    { input: 's = "leetcode"', output: '5' },
  ],
  hints: [
    'The answer equals n minus the length of the longest palindromic subsequence.',
    'Equivalently, compute the LCS of s and its reverse; that length is the LPS. Answer = n - LPS.',
    'Use DP: dp[i][j] = LCS length of s[0..i-1] and reversed_s[0..j-1].',
  ],
  functionName: 'minInsertions',
  params: ['s'],
  starterCode: {
    javascript: `function minInsertions(s) {
  const n = s.length, r = s.split('').reverse().join('');
  const dp = Array.from({length: n + 1}, () => new Array(n + 1).fill(0));
  for (let i = 1; i <= n; i++)
    for (let j = 1; j <= n; j++)
      dp[i][j] = s[i-1] === r[j-1] ? dp[i-1][j-1] + 1 : Math.max(dp[i-1][j], dp[i][j-1]);
  return n - dp[n][n];
}`,
    typescript: `function minInsertions(s: string): number {
  const n = s.length, r = s.split('').reverse().join('');
  const dp: number[][] = Array.from({length: n + 1}, () => new Array(n + 1).fill(0));
  for (let i = 1; i <= n; i++)
    for (let j = 1; j <= n; j++)
      dp[i]![j] = s[i-1] === r[j-1] ? dp[i-1]![j-1]! + 1 : Math.max(dp[i-1]![j]!, dp[i]![j-1]!);
  return n - dp[n]![n]!;
}`,
    python: `def minInsertions(s):
    n = len(s); r = s[::-1]
    dp = [[0] * (n + 1) for _ in range(n + 1)]
    for i in range(1, n + 1):
        for j in range(1, n + 1):
            dp[i][j] = dp[i-1][j-1] + 1 if s[i-1] == r[j-1] else max(dp[i-1][j], dp[i][j-1])
    return n - dp[n][n]`,
  },
  visibleTests: [
    { args: ['zzazz'], expected: 0 },
    { args: ['mbadm'], expected: 2 },
    { args: ['leetcode'], expected: 5 },
  ],
  hiddenTests: [
    { args: ['a'], expected: 0 },
    { args: ['ab'], expected: 1 },
    { args: ['abcd'], expected: 3 },
    { args: ['abcba'], expected: 0 },
  ],
};
