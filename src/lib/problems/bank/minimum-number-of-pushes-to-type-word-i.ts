import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-number-of-pushes-to-type-word-i',
  title: 'Minimum Number of Pushes to Type Word I',
  difficulty: 'easy',
  tags: ['math'],
  description: `You are given a string \`word\` containing **distinct** lowercase English letters.

You need to remap the 8 telephone keys (2–9) so that the number of key pushes to type \`word\` is minimized. Each key can have any number of letters assigned to it.

To type the **i-th letter** assigned to a key, you press that key **i times** (1-indexed position on that key).

Since all letters in \`word\` are distinct, you only care about how many letters need to be assigned. Assign the first 8 to position 1 (1 push each), the next 8 to position 2 (2 pushes), and so on.

Return the **minimum** number of total pushes to type \`word\`.`,
  constraints: [
    '1 <= word.length <= 26',
    'word consists of distinct lowercase English letters',
  ],
  examples: [
    {
      input: 'word = "abcde"',
      output: '5',
      explanation: '5 distinct letters, all fit in position 1 (1 push each). Total = 5.',
    },
    {
      input: 'word = "xycdefghij"',
      output: '12',
      explanation: '10 distinct letters. First 8 at cost 1 = 8. Next 2 at cost 2 = 4. Total = 12.',
    },
  ],
  hints: [
    'Since all letters are distinct, every letter\'s frequency is 1. You just need to count how many letters fall into each cost tier.',
    'With 8 keys, the first 8 letters cost 1 push, letters 9-16 cost 2, letters 17-24 cost 3, and letters 25-26 cost 4.',
    'n = word.length; return Math.floor(n/8)*8 * ... — or simply iterate: for i in range(n): total += i//8 + 1.',
  ],
  functionName: 'minimumPushes',
  params: ['word'],
  starterCode: {
    javascript: 'function minimumPushes(word) {\n  // your code here\n}\n',
    python: 'def minimumPushes(word):\n    # your code here\n    pass\n',
  },
  visibleTests: [
    { args: ['abcde'], expected: 5 },
    { args: ['xycdefghij'], expected: 12 },
  ],
  hiddenTests: [
    { args: ['a'], expected: 1 },
    { args: ['abcdefgh'], expected: 8 },
    { args: ['abcdefghi'], expected: 10 },
    { args: ['abcdefghij'], expected: 12 },
    { args: ['abcdefghijklmnop'], expected: 24 },
    { args: ['abcdefghijklmnopq'], expected: 27 },
    { args: ['abcdefghijklmnopqrstuvwxyz'], expected: 56 },
  ],
};
