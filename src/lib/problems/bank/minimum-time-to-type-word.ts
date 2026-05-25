import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-time-to-type-word',
  title: 'Minimum Time to Type Word Using Special Typewriter',
  difficulty: 'easy',
  tags: ['strings', 'math'],
  description: `There is a special typewriter with a circular wheel of lowercase English letters. The pointer starts at \`'a'\`. To type a character, you must rotate the wheel to that character, then press a button to type it.

- Rotating by one position (clockwise or counter-clockwise) takes **1 second**.
- Pressing the button to type takes **1 second**.

You can rotate in either direction. Given a string \`word\`, return the **minimum** number of seconds to type all characters.`,
  constraints: [
    '1 <= word.length <= 100',
    'word consists of lowercase English letters.',
  ],
  examples: [
    {
      input: 'word = "abc"',
      output: '5',
      explanation: 'Start at "a" (0 moves + 1 press = 1). Rotate to "b" (1 move + 1 press = 2). Rotate to "c" (1 move + 1 press = 2). Total = 5.',
    },
    {
      input: 'word = "bza"',
      output: '7',
      explanation: '"a" to "b": 1 step. Press: 1. "b" to "z": 2 steps (counter-clockwise). Press: 1. "z" to "a": 1 step. Press: 1. Total = 7.',
    },
  ],
  hints: [
    'At each step, you move from the current character to the next. The cost is min(clockwise distance, counter-clockwise distance) + 1.',
    'The clockwise distance from char a to char b is (b - a + 26) % 26. The counter-clockwise is 26 minus that.',
    'Start with the pointer at "a" (index 0) and accumulate costs for each character in word.',
  ],
  functionName: 'minTimeToType',
  params: ['word'],
  starterCode: {
    javascript: `function minTimeToType(word) {\n\n}`,
    python: `def minTimeToType(word):\n    pass`,
  },
  visibleTests: [
    { args: ['abc'], expected: 5 },
    { args: ['bza'], expected: 7 },
  ],
  hiddenTests: [
    { args: ['a'], expected: 1 },
    { args: ['z'], expected: 2 },
    { args: ['aaa'], expected: 3 },
    { args: ['zjpc'], expected: 34 },
  ],
};
