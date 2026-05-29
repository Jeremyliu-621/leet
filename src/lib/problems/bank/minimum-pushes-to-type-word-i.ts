import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-pushes-to-type-word-i',
  title: 'Minimum Number of Pushes to Type Word I',
  difficulty: 'easy',
  tags: ['math', 'strings'],
  description: `You are given a string \`word\` containing **distinct** lowercase English letters.

Telephone keypads have keys mapped with **distinct** collections of lowercase English letters, which can be used to form words by pushing them. For example, the key \`2\` is mapped with \`["a","b","c"]\`, we need to push the key one time to type \`"a"\`, two times to type \`"b"\`, and three times to type \`"c"\`.

It is allowed to remap the keys numbered \`2\` to \`9\` to **distinct** collections of letters. The keys can be remapped to **any** amount of letters, but each letter **must** be mapped to **exactly** one key. You need to find the **minimum** number of times the keys will be pushed to type \`word\`.

Return the **minimum** number of pushes needed to type \`word\` after remapping the keys.`,
  constraints: [
    '1 <= word.length <= 26',
    'word consists of lowercase English letters.',
    'All characters in word are distinct.',
  ],
  examples: [
    {
      input: 'word = "abcde"',
      output: '5',
      explanation: 'With 5 distinct letters, each can be placed at position 1 on its own key → 5 pushes.',
    },
    {
      input: 'word = "xycdefghij"',
      output: '12',
      explanation:
        '10 letters: 8 letters get 1 push each (8 pushes), 2 letters get 2 pushes each (4 pushes). Total = 12.',
    },
  ],
  hints: [
    'There are 8 keys (2-9). The i-th letter (0-indexed) can be placed at position floor(i/8)+1 on a key.',
    'Since all letters are distinct (frequency 1), the order of assignment does not matter.',
    'Answer = sum over i in 0..n-1 of (floor(i/8) + 1).',
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
    { args: ['abcde'], expected: 5 },
    { args: ['xycdefghij'], expected: 12 },
  ],
  hiddenTests: [
    { args: ['a'], expected: 1 },
    { args: ['abcdefgh'], expected: 8 },
    { args: ['abcdefghi'], expected: 10 },
    { args: ['abcdefghijklmnop'], expected: 24 },
    { args: ['abcdefghijklmnopqrstuvwx'], expected: 48 },
    { args: ['abcdefghijklmnopqrstuvwxyz'], expected: 56 },
  ],
};
