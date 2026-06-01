import type { Problem } from '../types';

export const problem: Problem = {
  id: 'valid-palindrome-iii',
  title: 'Valid Palindrome III',
  difficulty: 'hard',
  tags: ['dynamic-programming', 'strings'],
  description: `Given a string \`s\` and an integer \`k\`, return \`true\` if \`s\` is a **k-palindrome**.

A string is a **k-palindrome** if it can be transformed into a palindrome by removing **at most** \`k\` characters from it.`,
  constraints: [
    '1 <= s.length <= 1000',
    '0 <= k <= s.length',
    's consists of only lowercase English letters.',
  ],
  examples: [
    {
      input: 's = "abcdeca", k = 2',
      output: 'true',
      explanation: "Remove 'b' and 'e' characters.",
    },
    {
      input: 's = "abbababa", k = 1',
      output: 'true',
    },
    {
      input: 's = "abc", k = 0',
      output: 'false',
      explanation: '"abc" cannot be made into a palindrome without removing at least 2 characters.',
    },
  ],
  hints: [
    'Let dp[i][j] be the minimum number of deletions needed to make the substring s[i..j] a palindrome.',
    'If s[i] == s[j], then dp[i][j] = dp[i+1][j-1]. Otherwise dp[i][j] = 1 + min(dp[i+1][j], dp[i][j-1]).',
    'Build dp bottom-up by increasing substring length. The string is a k-palindrome if dp[0][n-1] <= k.',
  ],
  functionName: 'isValidPalindrome',
  params: ['s', 'k'],
  starterCode: {
    javascript: 'function isValidPalindrome(s, k) {\n\n}\n',
    typescript: 'function isValidPalindrome(s: string, k: number): boolean {\n\n}\n',
    python: 'def isValidPalindrome(s, k):\n    pass\n',
  },
  visibleTests: [
    { args: ['abcdeca', 2], expected: true },
    { args: ['abbababa', 1], expected: true },
    { args: ['abc', 0], expected: false },
  ],
  hiddenTests: [
    { args: ['a', 0], expected: true },
    { args: ['aa', 0], expected: true },
    { args: ['ab', 1], expected: true },
    { args: ['ab', 0], expected: false },
    { args: ['abcba', 0], expected: true },
    { args: ['aabaa', 0], expected: true },
    { args: ['abcde', 4], expected: true },
    { args: ['abcde', 3], expected: false },
    { args: ['race', 3], expected: true },
    { args: ['race', 2], expected: false },
  ],
};
