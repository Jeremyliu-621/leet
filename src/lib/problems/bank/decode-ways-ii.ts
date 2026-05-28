import type { Problem } from '../types';

export const problem: Problem = {
  id: 'decode-ways-ii',
  title: 'Decode Ways II',
  difficulty: 'hard',
  tags: ['dynamic-programming'],
  description: `A message containing letters \`'A'\` to \`'Z'\` can be encoded into numbers using the mapping \`'A' -> "1"\`, \`'B' -> "2"\`, ..., \`'Z' -> "26"\`.

Given a string \`s\` consisting of digits and \`'*'\` characters (where \`'*'\` can represent any digit \`1\`–\`9\`), return the **number of ways** to decode it, modulo \`10^9 + 7\`.`,
  constraints: [
    '1 <= s.length <= 10^5',
    's[i] is a digit or \'*\'',
  ],
  examples: [
    {
      input: 's = "*"',
      output: '9',
      explanation: '"*" can be replaced by "1" through "9" — 9 ways.',
    },
    {
      input: 's = "1*"',
      output: '18',
      explanation: '"1*" can be "11"-"19" (9 ways) plus "1" and each digit 1-9 as two single digits (9 ways) = 18.',
    },
    {
      input: 's = "2*"',
      output: '15',
      explanation: '"2*" single = 9 ways, "21"-"26" as double = 6 ways = 15.',
    },
  ],
  hints: [
    'Use DP where dp[i] = number of ways to decode s[0..i-1]. Transition depends on whether s[i-1] and s[i-2] are digits or \'*\'.',
    'For single-character decode: \'*\' contributes 9 ways; \'1\'-\'9\' contributes 1 way; \'0\' contributes 0.',
    'For two-character decode: count how many valid pairs (10-26) the characters can form, considering \'*\' wildcards.',
  ],
  functionName: 'numDecodings',
  params: ['s'],
  starterCode: {
    javascript: 'function numDecodings(s) {\n  \n}\n',
    typescript: "function numDecodings(s: string): number {\n  \n}",

    python: 'def numDecodings(s):\n    pass\n',
  },
  visibleTests: [
    { args: ['*'], expected: 9 },
    { args: ['1*'], expected: 18 },
    { args: ['2*'], expected: 15 },
  ],
  hiddenTests: [
    { args: ['**'], expected: 96 },
    { args: ['*0'], expected: 2 },
    { args: ['1*0'], expected: 2 },
    { args: ['1'], expected: 1 },
  ],
};
