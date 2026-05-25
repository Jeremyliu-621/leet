import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-substrings-with-only-one-distinct-letter',
  title: 'Count Substrings with Only One Distinct Letter',
  difficulty: 'easy',
  tags: ['strings', 'math'],
  description: `Given a string \`s\`, return the number of substrings that have only **one distinct** letter.`,
  constraints: [
    '1 <= s.length <= 1000',
    's[i] consists of only lowercase English letters.',
  ],
  examples: [
    {
      input: 's = "aaaba"',
      output: '8',
      explanation: 'Single-letter substrings: "aaa" gives 1+2+3=6 substrings, "b" gives 1, "a" gives 1. Total = 8.',
    },
    {
      input: 's = "aaaa"',
      output: '10',
      explanation: 'Run of 4 same chars: 1+2+3+4 = 10 substrings.',
    },
  ],
  hints: [
    'Count consecutive runs of the same character. A run of length L contributes L*(L+1)/2 substrings.',
    'Iterate through s, tracking run length. When the character changes (or at end), add runLen*(runLen+1)/2 to the answer.',
    'Edge case: a single-character string is a run of length 1, contributing 1 substring.',
  ],
  functionName: 'countLetters',
  params: ['s'],
  starterCode: {
    javascript: `function countLetters(s) {

}`,
    python: `def countLetters(s):
    pass`,
  },
  visibleTests: [
    { args: ['aaaba'], expected: 8 },
    { args: ['aaaa'], expected: 10 },
  ],
  hiddenTests: [
    { args: ['a'], expected: 1 },
    { args: ['abc'], expected: 3 },
    { args: ['aabb'], expected: 6 },
    { args: ['aabba'], expected: 7 },
  ],
};
