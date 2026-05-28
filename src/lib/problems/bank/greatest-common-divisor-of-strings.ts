import type { Problem } from '../types';

export const problem: Problem = {
  id: 'greatest-common-divisor-of-strings',
  title: 'Greatest Common Divisor of Strings',
  difficulty: 'easy',
  tags: ['strings', 'math'],
  description: `For two strings \`s\` and \`t\`, we say "\`t\` divides \`s\`" if and only if \`s = t + t + t + ... + t + t\` (i.e., \`t\` is concatenated with itself one or more times).

Given two strings \`str1\` and \`str2\`, return the largest string \`x\` such that \`x\` divides both \`str1\` and \`str2\`.`,
  constraints: [
    '1 <= str1.length, str2.length <= 1000',
    'str1 and str2 consist of English uppercase letters.',
  ],
  examples: [
    {
      input: 'str1 = "ABCABC", str2 = "ABC"',
      output: '"ABC"',
      explanation: '"ABC" divides both "ABCABC" and "ABC".',
    },
    {
      input: 'str1 = "ABABAB", str2 = "ABAB"',
      output: '"AB"',
      explanation: '"AB" divides both "ABABAB" and "ABAB".',
    },
    {
      input: 'str1 = "LEET", str2 = "CODE"',
      output: '""',
      explanation: 'No non-empty string divides both.',
    },
  ],
  hints: [
    'If a GCD string exists, then str1 + str2 === str2 + str1 (both equal the GCD string repeated lcm(k1, k2) times).',
    'The GCD string must have length gcd(str1.length, str2.length).',
    'Check that condition and return the prefix of that length.',
  ],
  functionName: 'gcdOfStrings',
  params: ['str1', 'str2'],
  starterCode: {
    javascript: 'function gcdOfStrings(str1, str2) {\n\n}\n',
    typescript: "function gcdOfStrings(str1: string, str2: string): string {\n\n}",

    python: 'def gcdOfStrings(str1, str2):\n    pass\n',
  },
  visibleTests: [
    { args: ['ABCABC', 'ABC'], expected: 'ABC' },
    { args: ['ABABAB', 'ABAB'], expected: 'AB' },
    { args: ['LEET', 'CODE'], expected: '' },
  ],
  hiddenTests: [
    { args: ['A', 'A'], expected: 'A' },
    { args: ['AA', 'A'], expected: 'A' },
    { args: ['AB', 'AB'], expected: 'AB' },
    { args: ['AAAAAA', 'AAA'], expected: 'AAA' },
  ],
};
