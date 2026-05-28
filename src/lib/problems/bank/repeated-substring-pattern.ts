import type { Problem } from '../types';

export const problem: Problem = {
  id: 'repeated-substring-pattern',
  title: 'Repeated Substring Pattern',
  difficulty: 'easy',
  tags: ['strings'],
  description: `Given a string \`s\`, check if it can be constructed by taking a substring of it and appending multiple copies of the substring together.`,
  constraints: [
    '1 <= s.length <= 10^4',
    's consists of lowercase English letters',
  ],
  examples: [
    { input: 's = "abab"', output: 'true', explanation: 'It is the substring "ab" twice.' },
    { input: 's = "aba"', output: 'false' },
    { input: 's = "abcabcabcabc"', output: 'true', explanation: 'It is the substring "abc" four times.' },
  ],
  hints: [
    'Try all divisors of s.length as the length of the repeated pattern.',
    'For each valid divisor d, check if repeating s[0..d-1] (n/d times) equals s.',
    'Alternatively: if s is a repeated substring, then (s+s)[1..-1] contains s starting at some position other than index 0 or n.',
  ],
  functionName: 'repeatedSubstringPattern',
  params: ['s'],
  starterCode: {
    javascript: 'function repeatedSubstringPattern(s) {\n  \n}\n',
    typescript: "function repeatedSubstringPattern(s: string): boolean {\n  \n}",

    python: 'def repeatedSubstringPattern(s):\n    pass\n',
  },
  visibleTests: [
    { args: ['abab'], expected: true },
    { args: ['aba'], expected: false },
    { args: ['abcabcabcabc'], expected: true },
  ],
  hiddenTests: [
    { args: ['a'], expected: false },
    { args: ['aa'], expected: true },
    { args: ['abaababaab'], expected: true },
    { args: ['abcabc'], expected: true },
  ],
};
