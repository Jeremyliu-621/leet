import type { Problem } from '../types';

export const problem: Problem = {
  id: 'freedom-trail',
  title: 'Freedom Trail',
  difficulty: 'hard',
  tags: ['dynamic-programming'],
  description: `In the video game Fallout 4, the quest **"Road to Freedom"** requires players to reach a metal dial called the **"Freedom Trail Ring"** and use the dial to spell a specific keyword to open the gate.

Given a string \`ring\` that represents the code engraved on the outer ring and another string \`key\` that represents the keyword that needs to be spelled, return the **minimum** number of steps to spell all the characters in the keyword.

Initially, the first character of the ring is aligned at the \`"12:00"\` direction. You can rotate the ring clockwise or counterclockwise to bring the target character to \`"12:00"\` and then press the center button to spell. A step is defined as either:

- Rotating the ring one place clockwise or counterclockwise.
- Pressing the center button to spell a character.`,
  constraints: [
    '1 <= ring.length <= 100',
    '1 <= key.length <= 100',
    'ring and key consist of only lowercase English letters',
    'It is guaranteed that the character key[i] will always appear in the ring',
  ],
  examples: [
    {
      input: 'ring = "godding", key = "gd"',
      output: '4',
      explanation: 'For key[0] = \'g\': ring is already "g" at 12:00, press button (1 step). For key[1] = \'d\': rotate 2 steps clockwise to reach \'d\', press button (3 steps). Total = 4.',
    },
    {
      input: 'ring = "godding", key = "godding"',
      output: '13',
      explanation: 'Each character is spelled optimally: g(1)+o(2)+d(2)+d(1)+i(3)+n(2)+g(2)=13 steps.',
    },
  ],
  hints: [
    'Let dp[i] = min steps to spell key[0..j-1] and be at ring position i.',
    'For each next character in key, try every occurrence of that character in ring.',
    'The rotation cost between position cur and nxt is min(|cur-nxt|, n-|cur-nxt|).',
    'Add 1 for each button press.',
  ],
  functionName: 'findRotateSteps',
  params: ['ring', 'key'],
  starterCode: {
    javascript: 'function findRotateSteps(ring, key) {\n\n}\n',
    typescript: "function findRotateSteps(ring: string, key: string): number {\n\n}",

    python: 'def findRotateSteps(ring, key):\n    pass\n',
  },
  visibleTests: [
    { args: ['godding', 'gd'], expected: 4 },
    { args: ['godding', 'godding'], expected: 13 },
  ],
  hiddenTests: [
    { args: ['a', 'a'], expected: 1 },
    { args: ['ab', 'ab'], expected: 3 },
    { args: ['abcde', 'ade'], expected: 6 },
    { args: ['abc', 'cab'], expected: 6 },
  ],
};
