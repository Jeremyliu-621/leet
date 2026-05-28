import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-number-of-changes-to-make-binary-string-beautiful',
  title: 'Minimum Number of Changes to Make Binary String Beautiful',
  difficulty: 'easy',
  tags: ['strings'],
  description: `You are given a **0-indexed** binary string \`s\` having an even length.

A string is **beautiful** if it can be partitioned into one or more substrings of even length such that each substring contains **only** \`1\`s **or** only \`0\`s.

You can change any character in \`s\` to \`0\` or \`1\`.

Return the **minimum** number of changes needed to make \`s\` beautiful.`,
  constraints: [
    '2 <= s.length <= 10^5',
    's.length is even.',
    's[i] is either \'0\' or \'1\'.',
  ],
  examples: [
    {
      input: 's = "0100"',
      output: '1',
      explanation: 'Change s[1] from \'1\' to \'0\'. Now s = "0000", which is beautiful.',
    },
    {
      input: 's = "10"',
      output: '1',
      explanation: 'Change s[0] to \'0\'. Now s = "00".',
    },
    {
      input: 's = "0000"',
      output: '0',
      explanation: 'Already beautiful.',
    },
  ],
  hints: [
    'A beautiful string requires every consecutive pair s[2i] and s[2i+1] to be equal.',
    'For each pair of consecutive characters at even indices (0,1), (2,3), ..., count mismatches.',
    'If a pair differs, one change is needed to make them equal.',
  ],
  functionName: 'minChanges',
  params: ['s'],
  starterCode: {
    javascript: 'function minChanges(s) {\n  \n}\n',
    typescript: "function minChanges(s: string): number {\n  \n}",

    python: 'def minChanges(s):\n    pass\n',
  },
  visibleTests: [
    { args: ['0100'], expected: 1 },
    { args: ['10'], expected: 1 },
    { args: ['0000'], expected: 0 },
  ],
  hiddenTests: [
    { args: ['1111'], expected: 0 },
    { args: ['0101'], expected: 2 },
    { args: ['1010'], expected: 2 },
    { args: ['00'], expected: 0 },
    { args: ['0110'], expected: 2 },
  ],
};
