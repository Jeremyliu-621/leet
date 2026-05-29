import type { Problem } from '../types';

export const problem: Problem = {
  id: 'ugly-number-iii',
  title: 'Ugly Number III',
  difficulty: 'medium',
  tags: ['math', 'binary-search'],
  description: `An **ugly number** is a positive integer that is divisible by \`a\`, \`b\`, or \`c\`.

Given four integers \`n\`, \`a\`, \`b\`, and \`c\`, return the \`nth\` ugly number.`,
  constraints: [
    '1 <= n, a, b, c <= 10^9',
    '1 <= a * b * c <= 10^18',
    'It is guaranteed the answer will be in range [1, 2 * 10^9].',
  ],
  examples: [
    {
      input: 'n = 3, a = 2, b = 3, c = 5',
      output: '4',
      explanation: 'Ugly numbers divisible by 2, 3, or 5: 2, 3, 4, 5, 6, 8, 9, 10, ... The 3rd is 4.',
    },
    {
      input: 'n = 4, a = 2, b = 3, c = 4',
      output: '6',
      explanation: 'Ugly numbers: 2, 3, 4, 6, 8, 9, 10, 12, ... The 4th is 6.',
    },
    {
      input: 'n = 5, a = 2, b = 11, c = 13',
      output: '10',
      explanation: 'Ugly numbers: 2, 4, 6, 8, 10, 11, 12, 13, ... The 5th is 10.',
    },
  ],
  hints: [
    'Binary search on the answer x: how many ugly numbers are ≤ x?',
    'By inclusion-exclusion: count(x) = floor(x/a) + floor(x/b) + floor(x/c) - floor(x/lcm(a,b)) - floor(x/lcm(a,c)) - floor(x/lcm(b,c)) + floor(x/lcm(a,b,c)).',
    'lcm(a, b) = a * b / gcd(a, b). Watch for overflow — use BigInt or keep values within bounds.',
  ],
  functionName: 'nthUglyNumber',
  params: ['n', 'a', 'b', 'c'],
  starterCode: {
    javascript: `function nthUglyNumber(n, a, b, c) {

}`,
    typescript: `function nthUglyNumber(n: number, a: number, b: number, c: number): number {

}`,
    python: `def nthUglyNumber(n, a, b, c):
    pass`,
  },
  visibleTests: [
    { args: [3, 2, 3, 5], expected: 4 },
    { args: [4, 2, 3, 4], expected: 6 },
    { args: [5, 2, 11, 13], expected: 10 },
  ],
  hiddenTests: [
    { args: [1, 2, 3, 5], expected: 2 },
    { args: [1000000000, 2, 3, 5], expected: 1363636364 },
    { args: [3, 3, 4, 5], expected: 5 },
    { args: [10, 2, 3, 4], expected: 15 },
  ],
};
