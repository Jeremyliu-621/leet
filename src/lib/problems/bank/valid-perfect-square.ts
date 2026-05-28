import type { Problem } from '../types';

export const problem: Problem = {
  id: 'valid-perfect-square',
  title: 'Valid Perfect Square',
  difficulty: 'easy',
  tags: ['math', 'binary-search'],
  description: `Given a positive integer \`num\`, return \`true\` if \`num\` is a **perfect square**, or \`false\` otherwise.

A **perfect square** is an integer that is the square of an integer. In other words, it is the product of some integer with itself.

You must not use any built-in library function, such as \`sqrt\`.`,
  constraints: ['`1 <= num <= 2^31 - 1`'],
  examples: [
    {
      input: 'num = 16',
      output: 'true',
      explanation: '4 × 4 = 16, so 16 is a perfect square.',
    },
    {
      input: 'num = 14',
      output: 'false',
      explanation: 'No integer x satisfies x × x = 14.',
    },
  ],
  hints: [
    'Binary search: search for an integer `x` in `[1, num]` such that `x * x == num`. Narrow the range: if `mid * mid < num`, search higher; otherwise lower.',
    'Watch out for overflow when computing `mid * mid` for large `num` — use `Math.floor(Math.sqrt(num))` as the upper bound (or compute with BigInt) to avoid this.',
    'Alternative: use the identity 1 + 3 + 5 + … + (2k−1) = k². Subtract successive odd numbers until you reach 0 (perfect square) or go negative (not a square).',
  ],
  functionName: 'isPerfectSquare',
  params: ['num'],
  starterCode: {
    javascript: `function isPerfectSquare(num) {

}`,
    python: `def isPerfectSquare(num):
    pass`,
  },
  visibleTests: [
    { args: [16], expected: true },
    { args: [14], expected: false },
    { args: [1], expected: true },
  ],
  hiddenTests: [
    { args: [4], expected: true },
    { args: [9], expected: true },
    { args: [25], expected: true },
    { args: [2], expected: false },
    { args: [3], expected: false },
    { args: [36], expected: true },
    { args: [100], expected: true },
    { args: [101], expected: false },
  ],
};
