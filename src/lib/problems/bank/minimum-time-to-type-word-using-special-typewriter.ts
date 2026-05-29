import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-time-to-type-word-using-special-typewriter',
  title: 'Minimum Time to Type Word Using Special Typewriter',
  difficulty: 'easy',
  tags: ['simulation'],
  description: `There is a special typewriter with a circular disk containing the 26 lowercase English letters \`'a'\` to \`'z'\` arranged clockwise. A pointer starts at \`'a'\`.

Each second, you may:
- Rotate the pointer **one step** clockwise or counter-clockwise.
- **Type** the letter the pointer is currently pointing at (1 second).

Return the **minimum** number of seconds to type \`word\`.`,
  constraints: [
    '1 <= word.length <= 100',
    'word consists of lowercase English letters.',
  ],
  examples: [
    {
      input: 'word = "abc"',
      output: '5',
      explanation: 'Type a (1s), rotate a→b + type b (2s), rotate b→c + type c (2s). Total = 5.',
    },
    {
      input: 'word = "bza"',
      output: '7',
      explanation: 'Rotate a→b (1) + type (1) = 2. Rotate b→z going back (2) + type (1) = 3. Rotate z→a (1) + type (1) = 2. Total = 7.',
    },
    {
      input: 'word = "zjpc"',
      output: '34',
      explanation: 'a→z: 1 step CCW (1+1=2). z→j: 10 steps CCW (10+1=11). j→p: 6 steps CW (6+1=7). p→c: 13 steps CCW (13+1=14). Total = 34.',
    },
  ],
  hints: [
    'For each character in word, compute the clockwise distance from the current pointer position.',
    'The minimum rotation is min(clockwise, 26 - clockwise).',
    'Add 1 to the rotation cost for each character typed.',
  ],
  functionName: 'minTimeToType',
  params: ['word'],
  starterCode: {
    javascript: 'function minTimeToType(word) {\n  \n}',
    typescript: 'function minTimeToType(word: string): number {\n  \n}',
    python: 'def minTimeToType(word):\n    ',
  },
  visibleTests: [
    { args: ['abc'], expected: 5 },
    { args: ['bza'], expected: 7 },
    { args: ['zjpc'], expected: 34 },
  ],
  hiddenTests: [
    { args: ['abc'], expected: 5 },
    { args: ['bza'], expected: 7 },
    { args: ['zjpc'], expected: 34 },
    { args: ['a'], expected: 1 },
    { args: ['z'], expected: 2 },
    { args: ['aa'], expected: 2 },
    { args: ['az'], expected: 3 },
    { args: ['abcdefghijklmnopqrstuvwxyz'], expected: 51 },
  ],
};
