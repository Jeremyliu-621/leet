import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-pushes-to-type-word-ii',
  title: 'Minimum Number of Pushes to Type Word II',
  difficulty: 'medium',
  tags: ['math', 'strings', 'hash-map'],
  description: `You are given a string \`word\` containing lowercase English letters.

Telephone keypads have keys mapped with **distinct** collections of lowercase English letters, which can be used to form words by pushing them. For example, the key \`2\` is mapped with \`["a","b","c"]\`, we need to push the key one time to type \`"a"\`, two times to type \`"b"\`, and three times to type \`"c"\`.

It is allowed to remap the keys numbered \`2\` to \`9\` to **distinct** collections of letters. The keys can be remapped to **any** amount of letters, but each letter **must** be mapped to **exactly** one key. You need to find the **minimum** number of times the keys will be pushed to type \`word\`.

Return the **minimum** number of pushes needed to type \`word\` after remapping the keys.`,
  constraints: [
    '1 <= word.length <= 10^5',
    'word consists of lowercase English letters.',
  ],
  examples: [
    {
      input: 'word = "xyzxyzxyzxyz"',
      output: '12',
      explanation:
        'x, y, z each appear 4 times. Place each at position 1 on its own key. Total = 3 × 4 = 12.',
    },
    {
      input: 'word = "aabbccddeeffgghhiiiiii"',
      output: '24',
      explanation:
        'Place most frequent letter (i, appears 6) at position 1. Place next 7 at position 1. Place the 9th at position 2. Total = 6 + 7×2 + 1×2 = 24.',
    },
  ],
  hints: [
    'Count the frequency of each letter in word.',
    'Sort frequencies in descending order. Assign highest-frequency letters to the earliest key positions (fewest pushes).',
    'The i-th most-frequent letter (0-indexed) costs floor(i/8)+1 pushes per occurrence.',
  ],
  functionName: 'minimumPushes',
  params: ['word'],
  starterCode: {
    javascript: `function minimumPushes(word) {

}`,
    typescript: `function minimumPushes(word: string): number {

}`,
    python: `def minimumPushes(word):
    pass`,
  },
  visibleTests: [
    { args: ['xyzxyzxyzxyz'], expected: 12 },
    { args: ['aabbccddeeffgghhiiiiii'], expected: 24 },
  ],
  hiddenTests: [
    { args: ['a'], expected: 1 },
    { args: ['aaa'], expected: 3 },
    { args: ['abcde'], expected: 5 },
    { args: ['abcdefghijklmnopqrstuvwxyz'], expected: 56 },
    { args: ['aaaa'], expected: 4 },
    { args: ['aaabbbccc'], expected: 9 },
    { args: ['aabbccdd'], expected: 8 },
  ],
};
