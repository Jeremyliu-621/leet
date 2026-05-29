import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-flips-to-make-a-or-b-equal-to-c',
  title: 'Minimum Flips to Make a OR b Equal to c',
  difficulty: 'medium',
  tags: ['bit-manipulation'],
  description: `Given three positive integers \`a\`, \`b\`, and \`c\`. You can perform the following operation any number of times:

- Choose a bit position in \`a\` or \`b\` and flip that bit (0 → 1 or 1 → 0).

Return the **minimum number of flips** required to make \`a OR b == c\`.

**Key insight:** Process each bit independently:
- If the bit in \`c\` is **1**: we need at least one of the corresponding bits in \`a\` or \`b\` to be 1. If both are 0, we need 1 flip.
- If the bit in \`c\` is **0**: both corresponding bits in \`a\` and \`b\` must be 0. Each 1 bit costs 1 flip (so 0, 1, or 2 flips depending on how many are set).`,
  constraints: ['1 <= a, b, c <= 10^9'],
  examples: [
    {
      input: 'a = 2, b = 6, c = 5',
      output: '3',
      explanation: '2=010, 6=110, 5=101. Bit 1: c=0, a=1, b=1 → 2 flips. Bit 0: c=1, a=0, b=0 → 1 flip. Total = 3.',
    },
    {
      input: 'a = 4, b = 2, c = 7',
      output: '1',
      explanation: '4=100, 2=010, 7=111. Bit 0: c=1, a=0, b=0 → 1 flip. All other bits already OK. Total = 1.',
    },
    {
      input: 'a = 1, b = 2, c = 3',
      output: '0',
      explanation: '1 OR 2 = 3 = c. No flips needed.',
    },
  ],
  hints: [
    'Process each bit of a, b, c independently.',
    'If c-bit is 1 and both a-bit and b-bit are 0: 1 flip needed.',
    'If c-bit is 0 and a-bit is 1: 1 flip. If c-bit is 0 and b-bit is 1: 1 more flip.',
    'Use a loop over all 30 bits (since a, b, c ≤ 10^9 < 2^30).',
  ],
  functionName: 'minFlips',
  params: ['a', 'b', 'c'],
  starterCode: {
    javascript: `function minFlips(a, b, c) {
  // For each bit: if c=1 and a=b=0: +1. If c=0: add count of 1s in a and b.
}`,
    typescript: `function minFlips(a: number, b: number, c: number): number {
  // For each bit: if c=1 and a=b=0: +1. If c=0: add count of 1s in a and b.
}`,
    python: `def minFlips(a, b, c):
    # For each bit: if c=1 and a=b=0: +1. If c=0: add count of 1s in a and b.
    pass
`,
  },
  visibleTests: [
    { args: [2, 6, 5], expected: 3 },
    { args: [4, 2, 7], expected: 1 },
    { args: [1, 2, 3], expected: 0 },
  ],
  hiddenTests: [
    { args: [0, 0, 1], expected: 1 },
    { args: [3, 3, 0], expected: 4 },
    { args: [1, 1, 1], expected: 0 },
    { args: [7, 0, 0], expected: 3 },
    { args: [0, 7, 0], expected: 3 },
    { args: [0, 0, 0], expected: 0 },
    { args: [1, 2, 4], expected: 3 },
  ],
};
