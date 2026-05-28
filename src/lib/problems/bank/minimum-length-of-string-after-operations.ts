import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-length-of-string-after-operations',
  title: 'Minimum Length of String After Operations',
  difficulty: 'medium',
  tags: ['strings', 'hash-map'],
  description: `You are given a string \`s\`.

You can perform the following operation on the string **any** number of times:

- Choose an index \`i\` in the string such that there is **at least one** character to the left of index \`i\` that is equal to \`s[i]\`, and at least one character to the right of index \`i\` that is also equal to \`s[i]\`.
- Delete the **closest** character to the left of index \`i\` that is equal to \`s[i]\`.
- Delete the **closest** character to the right of index \`i\` that is equal to \`s[i]\`.

Return the **minimum** possible length of the final string.`,
  constraints: [
    '1 <= s.length <= 2 * 10^5',
    's consists only of lowercase English letters.',
  ],
  examples: [
    {
      input: 's = "abaacbcbb"',
      output: '5',
      explanation: 'We can reduce "abaacbcbb" by repeatedly removing pairs of equal characters around a center.',
    },
    {
      input: 's = "aa"',
      output: '2',
      explanation: 'We cannot perform any operation since there are no characters on both sides of any position.',
    },
  ],
  hints: [
    'Each character can be reduced independently. Count frequency of each character.',
    'If a character appears k times, you can reduce it: if k is odd, 1 remains; if k is even, 2 remain.',
    'Sum up the reduced counts for all characters.',
  ],
  functionName: 'minimumLength',
  params: ['s'],
  starterCode: {
    javascript: 'function minimumLength(s) {\n\n}',
    python: 'def minimumLength(s):\n    pass',
  },
  visibleTests: [
    { args: ['abaacbcbb'], expected: 5 },
    { args: ['aa'], expected: 2 },
  ],
  hiddenTests: [
    { args: ['a'], expected: 1 },
    { args: ['aaa'], expected: 1 },
    { args: ['aaaa'], expected: 2 },
    { args: ['abcabc'], expected: 6 },
    { args: ['aabbcc'], expected: 6 },
    { args: ['aaabbb'], expected: 2 },
    { args: ['abcdefg'], expected: 7 },
  ],
};
