import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-homogenous-substrings',
  title: 'Count Number of Homogenous Substrings',
  difficulty: 'medium',
  tags: ['strings', 'math'],
  description: `Given a string \`s\`, return the number of **homogenous** substrings of \`s\`. Since the answer may be too large, return it **modulo** \`10^9 + 7\`.

A string is **homogenous** if all the characters of the string are the same.

A **substring** is a contiguous sequence of characters within a string.`,
  constraints: [
    '`1 <= s.length <= 10^5`',
    '`s` consists of lowercase letters.',
  ],
  examples: [
    {
      input: 's = "abbcccaa"',
      output: '13',
      explanation: 'Homogenous substrings: "a"×2, "b"×1, "bb"×1, "c"×1, "cc"×1, "ccc"×1, "a"×2, "aa"×1 = 2+3+6+2 = 13.',
    },
    {
      input: 's = "xy"',
      output: '2',
      explanation: '"x" and "y" are the only homogenous substrings.',
    },
    {
      input: 's = "zzzzz"',
      output: '15',
      explanation: 'A run of 5 identical chars contributes 5*6/2 = 15 homogenous substrings.',
    },
  ],
  hints: [
    'Count consecutive runs of the same character.',
    'A run of length k contributes k*(k+1)/2 homogenous substrings.',
    'Sum contributions of all runs modulo 10^9+7.',
  ],
  functionName: 'countHomogenous',
  params: ['s'],
  starterCode: {
    javascript: `function countHomogenous(s) {

}`,
    python: `def countHomogenous(s):
    pass`,
  },
  visibleTests: [
    { args: ['abbcccaa'], expected: 13 },
    { args: ['xy'], expected: 2 },
    { args: ['zzzzz'], expected: 15 },
  ],
  hiddenTests: [
    { args: ['a'], expected: 1 },
    { args: ['aaa'], expected: 6 },
    { args: ['aab'], expected: 4 },
    { args: ['abcde'], expected: 5 },
    { args: ['aaabbb'], expected: 12 },
  ],
};
