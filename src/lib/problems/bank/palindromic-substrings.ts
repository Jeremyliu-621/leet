import type { Problem } from '../types';

export const problem: Problem = {
  id: 'palindromic-substrings',
  title: 'Palindromic Substrings',
  difficulty: 'medium',
  tags: ['strings', 'two-pointers'],
  description: `Given a string \`s\`, return the **number of palindromic substrings** in it.

A string is a **palindrome** when it reads the same backward as forward.

A **substring** is a contiguous sequence of characters within the string.`,
  constraints: [
    '`1 <= s.length <= 1000`',
    '`s` consists of lowercase English letters.',
  ],
  examples: [
    {
      input: 's = "abc"',
      output: '3',
      explanation: 'Three palindromic substrings: "a", "b", "c".',
    },
    {
      input: 's = "aaa"',
      output: '6',
      explanation: 'Six palindromic substrings: "a", "a", "a", "aa", "aa", "aaa".',
    },
  ],
  hints: [
    'Expand around each center. For each index, try expanding both for odd-length and even-length palindromes.',
  ],
  functionName: 'countSubstrings',
  params: ['s'],
  starterCode: {
    javascript: 'function countSubstrings(s) {\n  \n}\n',
    python: 'def countSubstrings(s):\n    pass\n',
  },
  visibleTests: [
    { args: ['abc'], expected: 3 },
    { args: ['aaa'], expected: 6 },
    { args: ['a'], expected: 1 },
  ],
  hiddenTests: [
    { args: ['ab'], expected: 2 },
    { args: ['aa'], expected: 3 },
    { args: ['abba'], expected: 6 },
    { args: ['racecar'], expected: 10 },
  ],
};
