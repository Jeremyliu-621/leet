import type { Problem } from '../types';

export const problem: Problem = {
  id: 'binary-string-with-substrings-representing-1-to-n',
  title: 'Binary String With Substrings Representing 1 To N',
  difficulty: 'medium',
  tags: ['strings'],
  description: `Given a binary string \`s\` and a positive integer \`n\`, return \`true\` if the binary representations of **all** integers in the range \`[1, n]\` are substrings of \`s\`, or \`false\` otherwise.

A binary representation of a positive integer \`k\` uses no leading zeros.`,
  constraints: [
    '1 <= s.length <= 1000',
    's[i] is either \'0\' or \'1\'.',
    '1 <= n <= 10^9',
  ],
  examples: [
    {
      input: 's = "0110", n = 3',
      output: 'true',
      explanation: '"1", "10", "11" are all substrings of "0110".',
    },
    {
      input: 's = "0110", n = 4',
      output: 'false',
      explanation: '"100" (binary of 4) is not a substring of "0110".',
    },
  ],
  hints: [
    'Convert each integer from 1 to n to binary and check if it is a substring of s.',
    'Since s.length <= 1000, we only need to check up to about n = 1000 or until the binary length exceeds s.length.',
    'Optimization: large n with short s can return false early — binary(k) can only appear if 2^(length(s)) > k.',
  ],
  functionName: 'queryString',
  params: ['s', 'n'],
  starterCode: {
    javascript: `function queryString(s, n) {\n  \n}`,
    typescript: `function queryString(s: string, n: number): boolean {\n  \n}`,
    python: `def queryString(s, n):\n    `,
  },
  visibleTests: [
    { args: ['0110', 3], expected: true },
    { args: ['0110', 4], expected: false },
    { args: ['1', 1], expected: true },
  ],
  hiddenTests: [
    { args: ['0110', 3], expected: true },
    { args: ['0110', 4], expected: false },
    { args: ['1', 1], expected: true },
    { args: ['0', 1], expected: false },
    { args: ['111', 2], expected: false },
    { args: ['10', 2], expected: true },
    { args: ['1100101011', 5], expected: true },
    { args: ['0110', 1000000000], expected: false },
  ],
};
