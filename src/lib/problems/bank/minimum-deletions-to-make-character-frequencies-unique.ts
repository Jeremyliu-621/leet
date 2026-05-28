import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-deletions-to-make-character-frequencies-unique',
  title: 'Minimum Deletions to Make Character Frequencies Unique',
  difficulty: 'medium',
  tags: ['strings', 'hash-map'],
  description: `A string \`s\` is called **good** if there are no two different characters in \`s\` that have the same **frequency**.

Given a string \`s\`, return the **minimum** number of characters you need to delete to make \`s\` good.

The **frequency** of a character in a string is the number of times it appears in the string. For example, in the string \`"aab"\`, the frequency of \`'a'\` is 2, while the frequency of \`'b'\` is 1.`,
  constraints: [
    '1 <= s.length <= 10^5',
    's contains only lowercase English letters.',
  ],
  examples: [
    {
      input: 's = "aab"',
      output: '0',
      explanation: 'Frequencies: a=2, b=1. All distinct, so no deletions needed.',
    },
    {
      input: 's = "aaabbbcc"',
      output: '2',
      explanation:
        'Frequencies: a=3, b=3, c=2. Delete 1 "b" → b=2, then c=2 still conflicts. Delete another "b" or "c": → a=3, b=2, c=1. All distinct. 2 deletions.',
    },
    {
      input: 's = "ceabaacb"',
      output: '2',
      explanation: 'Frequencies: a=2, b=2, c=2, e=1. Conflicts on a, b, c. 2 deletions to make all distinct.',
    },
  ],
  hints: [
    'Count character frequencies. Sort the frequency array in descending order.',
    'Greedily reduce each frequency until it does not clash with any previously used frequency.',
    'Keep a set of "used" frequencies. For each frequency, decrement it down until it finds a free slot (or reaches 0).',
  ],
  functionName: 'minDeletions',
  params: ['s'],
  starterCode: {
    javascript: 'function minDeletions(s) {\n  \n}\n',
    typescript: "function minDeletions(s: string): number {\n  \n}",

    python: 'def minDeletions(s):\n    pass\n',
  },
  visibleTests: [
    { args: ['aab'], expected: 0 },
    { args: ['aaabbbcc'], expected: 2 },
    { args: ['ceabaacb'], expected: 2 },
  ],
  hiddenTests: [
    { args: ['a'], expected: 0 },
    { args: ['aa'], expected: 0 },
    { args: ['aabb'], expected: 1 },
    { args: ['aaabbb'], expected: 1 },
    { args: ['abcabc'], expected: 3 },
  ],
};
