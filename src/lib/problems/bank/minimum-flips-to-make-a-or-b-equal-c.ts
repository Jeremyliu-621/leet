import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-flips-to-make-a-or-b-equal-c',
  title: 'Minimum Flips to Make a OR b Equal to c',
  difficulty: 'medium',
  tags: ['math'],
  description: `Given positive integers \`a\`, \`b\`, and \`c\`. You can flip bits in \`a\` or \`b\` (change 0 to 1 or 1 to 0).

Return the **minimum** number of flips required in some bits of \`a\` and \`b\` to make \`(a OR b) == c\`.`,
  constraints: [
    '1 <= a <= 10^9',
    '1 <= b <= 10^9',
    '1 <= c <= 10^9',
  ],
  examples: [
    {
      input: 'a = 2, b = 6, c = 5',
      output: '3',
      explanation: 'a=010, b=110, c=101. Flip a[1] and b[1] (both to 0) and a[0] (to 1). Cost=3.',
    },
    {
      input: 'a = 4, b = 2, c = 7',
      output: '1',
      explanation: 'a=100, b=010, c=111. Only bit 0 needs fixing: flip a[0] to 1. Cost=1.',
    },
    {
      input: 'a = 1, b = 2, c = 3',
      output: '0',
      explanation: 'a=01, b=10, c=11. a OR b = 11 = c already.',
    },
  ],
  hints: [
    'Process each bit independently.',
    'If c_bit=1 and both a_bit=0 and b_bit=0, you need 1 flip.',
    'If c_bit=0, every 1-bit in a or b must be flipped — cost = a_bit + b_bit.',
  ],
  functionName: 'minFlips',
  params: ['a', 'b', 'c'],
  starterCode: {
    javascript: `function minFlips(a, b, c) {

}`,
    python: `def minFlips(a, b, c):
    pass`,
  },
  visibleTests: [
    { args: [2, 6, 5], expected: 3 },
    { args: [4, 2, 7], expected: 1 },
    { args: [1, 2, 3], expected: 0 },
  ],
  hiddenTests: [
    { args: [0, 0, 1], expected: 1 },
    { args: [3, 3, 0], expected: 4 },
    { args: [0, 0, 0], expected: 0 },
    { args: [7, 7, 0], expected: 6 },
  ],
};
