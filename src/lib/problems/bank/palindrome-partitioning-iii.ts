import type { Problem } from '../types';

export const problem: Problem = {
  id: 'palindrome-partitioning-iii',
  title: 'Palindrome Partitioning III',
  difficulty: 'hard',
  tags: ['dynamic-programming', 'strings'],
  description: `You are given a string \`s\` containing lowercase letters and an integer \`k\`. You need to:

1. Change some characters of \`s\` to other lowercase English letters.
2. Divide \`s\` into \`k\` non-empty disjoint substrings such that each substring is a palindrome.

Return the **minimum number of characters** you need to change to divide the string.

**Interval DP:** Precompute \`cost[i][j]\` = minimum changes to make \`s[i..j]\` a palindrome (compare characters from outside in). Then \`dp[t][j]\` = min changes to partition \`s[0..j]\` into \`t\` palindromes.`,
  constraints: [
    '1 <= k <= s.length <= 100',
    's contains only lowercase English letters.',
  ],
  examples: [
    {
      input: 's = "abc", k = 2',
      output: '1',
      explanation: 'Cut "a|bc" and change "bc" to "bb" (1 change).',
    },
    {
      input: 's = "aabbc", k = 3',
      output: '0',
      explanation: 'Cut "aa|bb|c" — all already palindromes.',
    },
    {
      input: 's = "leetcode", k = 8',
      output: '0',
      explanation: 'Each single character is a palindrome.',
    },
  ],
  hints: [
    'Precompute cost[i][j] = min changes to make s[i..j] a palindrome: cost[i][j] = cost[i+1][j-1] + (s[i] != s[j]).',
    'dp[t][j] = min changes to partition s[0..j] into t palindromes.',
    'dp[1][j] = cost[0][j]. dp[t][j] = min over m: dp[t-1][m-1] + cost[m][j].',
  ],
  functionName: 'palindromePartition',
  params: ['s', 'k'],
  starterCode: {
    javascript: 'function palindromePartition(s, k) {\n\n}\n',
    python: 'def palindromePartition(s: str, k: int) -> int:\n    pass\n',
  },
  visibleTests: [
    { args: ['abc', 2], expected: 1 },
    { args: ['aabbc', 3], expected: 0 },
    { args: ['leetcode', 8], expected: 0 },
  ],
  hiddenTests: [
    { args: ['a', 1], expected: 0 },
    { args: ['ab', 1], expected: 1 },
    { args: ['abcd', 2], expected: 1 },
    { args: ['abcdef', 3], expected: 2 },
  ],
};
