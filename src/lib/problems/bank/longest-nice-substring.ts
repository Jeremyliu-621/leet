import type { Problem } from '../types';

export const problem: Problem = {
  id: 'longest-nice-substring',
  title: 'Longest Nice Substring',
  difficulty: 'easy',
  tags: ['strings'],
  description: `A string \`s\` is **nice** if, for every letter of the alphabet that \`s\` contains, it appears **both in uppercase and lowercase**. For example, \`"abABB"\` is nice because \`'A'\` and \`'a'\` appear, and \`'B'\` and \`'b'\` appear. However, \`"abA"\` is not because \`'b'\` appears but \`'B'\` does not.

Given a string \`s\`, return the **longest** nice substring of \`s\`. If there are multiple, return the substring of the **earliest** occurrence. If there is none, return an **empty string**.`,
  constraints: [
    '1 <= s.length <= 100',
    's consists of uppercase and lowercase English letters.',
  ],
  examples: [
    {
      input: 's = "YazaAay"',
      output: '"aAa"',
      explanation: '"aAa" is a nice string because \'A/a\' is the only letter of the alphabet in the string, and both \'A\' and \'a\' appear.',
    },
    {
      input: 's = "Bb"',
      output: '"Bb"',
      explanation: '"Bb" is a nice string because both \'B\' and \'b\' appear. The whole string is one nice string.',
    },
  ],
  hints: [
    'Divide and conquer: find the first character that violates the "nice" property (appears only in one case).',
    'Split the string at that character, recurse on both halves, and return the longer result.',
    'If no violating character exists, the whole string is nice.',
  ],
  functionName: 'longestNiceSubstring',
  params: ['s'],
  starterCode: {
    javascript: 'function longestNiceSubstring(s) {\n\n}\n',
    typescript: "function longestNiceSubstring(s: string): string {\n\n}",

    python: 'def longestNiceSubstring(s):\n    pass\n',
  },
  visibleTests: [
    { args: ['YazaAay'], expected: 'aAa' },
    { args: ['Bb'], expected: 'Bb' },
  ],
  hiddenTests: [
    { args: ['c'], expected: '' },
    { args: ['aA'], expected: 'aA' },
    { args: ['AaZz'], expected: 'AaZz' },
    { args: ['dAaZ'], expected: 'Aa' },
  ],
};
