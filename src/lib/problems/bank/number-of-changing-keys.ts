import type { Problem } from '../types';

export const problem: Problem = {
  id: 'number-of-changing-keys',
  title: 'Number of Changing Keys',
  difficulty: 'easy',
  tags: ['strings'],
  description: `You are given a 0-indexed string \`s\` typed by a user. Changing a key is defined as using a key different from the key used last time.

Return the number of times the user had to change the key.

**Note:** Modifiers such as \`Shift\` or \`Caps Lock\` won't be counted in changing the key — that is, if the user typed the letter \`'a'\` and then the letter \`'A'\`, they did **not** change the key.`,
  constraints: [
    '1 <= s.length <= 100',
    's consists of only English letters',
  ],
  examples: [
    {
      input: 's = "aAbBcC"',
      output: '2',
      explanation:
        'From "a" to "A": same key (no change). From "A" to "b": different key (change 1). From "b" to "B": same key (no change). From "B" to "c": different key (change 2). From "c" to "C": same key (no change). Total changes = 2.',
    },
    {
      input: 's = "AaAaAaaA"',
      output: '0',
      explanation: 'All characters are the same key (case-insensitive). No changes.',
    },
  ],
  hints: [
    'Iterate through adjacent pairs of characters in the string.',
    'Compare each pair case-insensitively — convert both to the same case before comparing.',
    'Count how many adjacent pairs differ when compared in lowercase.',
  ],
  functionName: 'countKeyChanges',
  params: ['s'],
  starterCode: {
    javascript: 'function countKeyChanges(s) {\n  \n}\n',
    python: 'def countKeyChanges(s):\n    pass\n',
  },
  visibleTests: [
    { args: ['aAbBcC'], expected: 2 },
    { args: ['AaAaAaaA'], expected: 0 },
  ],
  hiddenTests: [
    { args: ['a'], expected: 0 },
    { args: ['abc'], expected: 2 },
    { args: ['aabbcc'], expected: 2 },
    { args: ['AABBCC'], expected: 2 },
    { args: ['aAbB'], expected: 1 },
    { args: ['abcdefg'], expected: 6 },
    { args: ['AAA'], expected: 0 },
  ],
};
