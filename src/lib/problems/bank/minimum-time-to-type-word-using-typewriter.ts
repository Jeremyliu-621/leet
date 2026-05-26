import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-time-to-type-word-using-typewriter',
  title: 'Minimum Time to Type Word Using Special Typewriter',
  difficulty: 'easy',
  tags: ['simulation', 'math', 'strings'],
  description: `There is a special typewriter with lowercase English letters \`'a'\` to \`'z'\` arranged in a **circle**. Adjacent characters move in 1 second each. The pointer starts at \`'a'\`.

Each second you can either:
- Move the pointer one character clockwise or counterclockwise, **or**
- Type the character the pointer is currently on.

Given a string \`word\`, return the **minimum** number of seconds to type out the characters in \`word\`.`,
  constraints: [
    '`1 <= word.length <= 100`',
    '`word` consists of lowercase English letters.',
  ],
  examples: [
    {
      input: 'word = "abc"',
      output: '5',
      explanation:
        'Start at "a", type it (1s). Move to "b" (1s), type it (1s). Move to "c" (1s), type it (1s). Total = 5s.',
    },
    {
      input: 'word = "bza"',
      output: '7',
      explanation:
        'Start at "a", move to "b" (1s), type (1s). Move counterclockwise to "z" (1s min of 24 or 2), type (1s). Move to "a" (1s), type (1s). Total = 7s.',
    },
  ],
  hints: [
    'The total time is `word.length` (one second per character typed) plus the total rotation time between consecutive characters (including from "a" to the first character).',
    'For each transition between characters `a` and `b`, the rotation cost is `min(|a - b|, 26 - |a - b|)` — take the shorter arc around the circle.',
    '```js\nfunction minTimeToType(word) {\n  let time = word.length;\n  let prev = 0;\n  for (const ch of word) {\n    const cur = ch.charCodeAt(0) - 97;\n    const diff = Math.abs(cur - prev);\n    time += Math.min(diff, 26 - diff);\n    prev = cur;\n  }\n  return time;\n}\n```',
  ],
  functionName: 'minTimeToType',
  params: ['word'],
  starterCode: {
    javascript: `function minTimeToType(word) {

}`,
    python: `def minTimeToType(word: str) -> int:
    pass`,
  },
  visibleTests: [
    { args: ['abc'], expected: 5 },
    { args: ['bza'], expected: 7 },
  ],
  hiddenTests: [
    { args: ['a'], expected: 1 },
    { args: ['za'], expected: 4 },
    { args: ['azz'], expected: 4 },
    { args: ['mn'], expected: 15 },
  ],
};
