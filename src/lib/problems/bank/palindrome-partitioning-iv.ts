import type { Problem } from '../types';

export const problem: Problem = {
  id: 'palindrome-partitioning-iv',
  title: 'Palindrome Partitioning IV',
  difficulty: 'hard',
  tags: ['dynamic-programming', 'strings'],
  description: `Given a string \`s\`, return \`true\` if it is possible to split the string \`s\` into exactly **three** non-empty palindromic substrings. Otherwise, return \`false\`.`,
  constraints: [
    '3 <= s.length <= 2000',
    's consists only of lowercase English letters.',
  ],
  examples: [
    {
      input: 's = "abcbdd"',
      output: 'true',
      explanation: '"abcbdd" = "abcb" + "d" + "d". All three substrings are palindromes.',
    },
    {
      input: 's = "bcbddxy"',
      output: 'false',
      explanation: 'The string cannot be split into three palindromic parts.',
    },
    {
      input: 's = "aaa"',
      output: 'true',
      explanation: '"aaa" = "a" + "a" + "a".',
    },
  ],
  hints: [
    'Precompute a 2D boolean table isPalin where isPalin[i][j] is true if s[i..j] is a palindrome.',
    'To build the table: isPalin[i][i] = true, isPalin[i][i+1] = (s[i] == s[i+1]), and for longer substrings isPalin[i][j] = (s[i] == s[j]) && isPalin[i+1][j-1].',
    'Then try all split pairs (i, j) with 1 <= i < j < n — check if s[0..i-1], s[i..j-1], and s[j..n-1] are all palindromes.',
  ],
  functionName: 'checkPartitioning',
  params: ['s'],
  starterCode: {
    javascript: 'function checkPartitioning(s) {\n\n}\n',
    typescript: 'function checkPartitioning(s: string): boolean {\n\n}\n',
    python: 'def checkPartitioning(s):\n    pass\n',
  },
  visibleTests: [
    { args: ['abcbdd'], expected: true },
    { args: ['bcbddxy'], expected: false },
    { args: ['aaa'], expected: true },
  ],
  hiddenTests: [
    { args: ['abc'], expected: true },
    { args: ['abcd'], expected: false },
    { args: ['abba'], expected: true },
    { args: ['aab'], expected: true },
    { args: ['aaaa'], expected: true },
    { args: ['abcde'], expected: false },
    { args: ['aaab'], expected: true },
    { args: ['xyzyx'], expected: true },
  ],
};
