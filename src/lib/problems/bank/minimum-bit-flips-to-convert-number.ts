import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-bit-flips-to-convert-number',
  title: 'Minimum Bit Flips to Convert Number',
  difficulty: 'easy',
  tags: ['math'],
  description: `A **bit flip** of a number \`x\` is choosing a bit in the binary representation of \`x\` and **flipping** it from either \`0\` to \`1\` or \`1\` to \`0\`.

Given two integers \`start\` and \`goal\`, return the **minimum** number of **bit flips** to convert \`start\` to \`goal\`.`,
  constraints: [
    '0 <= start, goal <= 10^9',
  ],
  examples: [
    {
      input: 'start = 10, goal = 7',
      output: '3',
      explanation: '10 = 1010, 7 = 0111. XOR = 1101. Three bits differ.',
    },
    {
      input: 'start = 3, goal = 4',
      output: '3',
      explanation: '3 = 011, 4 = 100. XOR = 111. Three bits differ.',
    },
  ],
  hints: [
    'Think about which bit positions differ between start and goal.',
    'XOR of two numbers gives a 1 bit wherever they differ — the two numbers agree on 0-bits and disagree on 1-bits.',
    'Count the number of 1-bits in (start XOR goal) — that is exactly the number of flips needed.',
  ],
  functionName: 'minBitFlips',
  params: ['start', 'goal'],
  starterCode: {
    javascript: 'function minBitFlips(start, goal) {\n\n}\n',
    typescript: "function minBitFlips(start: number, goal: number): number {\n\n}",

    python: 'def minBitFlips(start: int, goal: int) -> int:\n    pass\n',
  },
  visibleTests: [
    { args: [10, 7], expected: 3 },
    { args: [3, 4], expected: 3 },
  ],
  hiddenTests: [
    { args: [0, 0], expected: 0 },
    { args: [1, 0], expected: 1 },
    { args: [5, 6], expected: 2 },
    { args: [255, 0], expected: 8 },
  ],
};
