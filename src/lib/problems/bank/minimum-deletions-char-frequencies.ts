import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-deletions-char-frequencies',
  title: 'Minimum Deletions to Make Character Frequencies Unique',
  difficulty: 'medium',
  tags: ['strings', 'hash-map'],
  description: `A string \`s\` is called **good** if there are no two different characters with the same frequency.

Given a string \`s\`, return the **minimum** number of characters you need to delete to make \`s\` good.`,
  constraints: [
    '1 <= s.length <= 10^5',
    's contains only lowercase English letters.',
  ],
  examples: [
    {
      input: 's = "aab"',
      output: '0',
      explanation: 'a has frequency 2 and b has frequency 1. All frequencies are already unique.',
    },
    {
      input: 's = "aaabbbcc"',
      output: '2',
      explanation: 'a:3, b:3, c:2. Delete 2 b\'s → a:3, b:1, c:2. All frequencies unique.',
    },
    {
      input: 's = "ceabaacb"',
      output: '2',
      explanation: 'c:2, e:1, a:3, b:2. Delete 1 c and 1 b → a:3, b:1, c:1... but 1 is already used. Delete 2 characters to reach unique frequencies.',
    },
  ],
  hints: [
    'Count the frequency of each character.',
    'Sort the frequencies in descending order.',
    'For each frequency, if it is already used, keep decrementing it until you find an unused frequency or reach 0. Count each decrement as one deletion.',
    'Use a Set to track which frequencies are already taken.',
  ],
  functionName: 'minDeletions',
  params: ['s'],
  starterCode: {
    javascript: `function minDeletions(s) {

}`,
    typescript: "function minDeletions(s: string): number {\n\n}",

    python: `def minDeletions(s):
    pass`,
  },
  visibleTests: [
    { args: ['aab'], expected: 0 },
    { args: ['aaabbbcc'], expected: 2 },
    { args: ['ceabaacb'], expected: 2 },
  ],
  hiddenTests: [
    { args: ['a'], expected: 0 },
    { args: ['aabb'], expected: 1 },
    { args: ['abcabc'], expected: 3 },
    { args: ['aaaaaa'], expected: 0 },
    { args: ['abcdefghij'], expected: 9 },
  ],
};
