import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-number-of-homogenous-substrings',
  title: 'Count Number of Homogenous Substrings',
  difficulty: 'medium',
  tags: ['strings', 'math'],
  description: `Given a string \`s\`, return the number of **homogenous** substrings of \`s\`. Since the answer may be too large, return it modulo \`10^9 + 7\`.

A string is **homogenous** if all characters in it are the same. A **substring** is a contiguous sequence of characters within a string.`,
  constraints: [
    '1 <= s.length <= 10^5',
    's consists of lowercase English letters',
  ],
  examples: [
    {
      input: 's = "abbcccaa"',
      output: '13',
      explanation: 'Runs: a(1)→1, b(2)→3, c(3)→6, a(2)→3. Total = 1+3+6+3 = 13.',
    },
    {
      input: 's = "xy"',
      output: '2',
      explanation: '"x" and "y" are the two homogenous substrings.',
    },
    {
      input: 's = "zzzzz"',
      output: '15',
      explanation: 'A run of 5 gives 1+2+3+4+5 = 15 homogenous substrings.',
    },
  ],
  hints: [
    'Scan the string and find consecutive runs of identical characters.',
    'A run of length n contributes n * (n + 1) / 2 homogenous substrings.',
    'Sum the contributions for each run, taking modulo 10^9 + 7 at each step.',
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
    { args: ['abcde'], expected: 5 },
    { args: ['aaabbb'], expected: 12 },
  ],
};
