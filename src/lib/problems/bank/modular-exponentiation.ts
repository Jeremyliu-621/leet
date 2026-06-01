import type { Problem } from '../types';

export const problem: Problem = {
  id: 'modular-exponentiation',
  title: 'Modular Exponentiation',
  difficulty: 'medium',
  tags: ['math', 'bit-manipulation'],
  description: `Compute **(base ^ exp) mod m** efficiently.

Given three non-negative integers \`base\`, \`exp\`, and \`m\` (where \`m >= 1\`), return the value of \`base\` raised to the power \`exp\`, modulo \`m\`.

A naive loop multiplying \`base\` by itself \`exp\` times is too slow for large exponents. Use **fast (binary) exponentiation** — repeatedly square the base and halve the exponent.

**Key idea:** if \`exp\` is even, \`base^exp = (base^2)^(exp/2)\`; if \`exp\` is odd, \`base^exp = base * base^(exp-1)\`.`,
  constraints: [
    '0 <= base <= 10^9',
    '0 <= exp <= 10^9',
    '1 <= m <= 10^9',
  ],
  examples: [
    {
      input: 'base = 2, exp = 10, m = 1000',
      output: '24',
      explanation: '2^10 = 1024; 1024 mod 1000 = 24.',
    },
    {
      input: 'base = 3, exp = 0, m = 7',
      output: '1',
      explanation: 'Any number to the power 0 is 1; 1 mod 7 = 1.',
    },
    {
      input: 'base = 0, exp = 5, m = 13',
      output: '0',
      explanation: '0 raised to any positive power is 0.',
    },
  ],
  hints: [
    'Think about how to halve the problem at each step. If `exp` is even, squaring the base and halving the exponent gives the same result.',
    'Use the binary representation of `exp`. Process one bit at a time: if the current bit is 1, multiply the running result by the current power of base; then square the base for the next bit.',
    `Use iterative binary exponentiation:\n\`\`\`js\nfunction modPow(base, exp, m) {\n  let result = 1;\n  base %= m;\n  while (exp > 0) {\n    if (exp & 1) result = result * base % m;\n    base = base * base % m;\n    exp >>= 1;\n  }\n  return result;\n}\n\`\`\``,
  ],
  functionName: 'modPow',
  params: ['base', 'exp', 'm'],
  starterCode: {
    javascript: `function modPow(base, exp, m) {\n\n}`,
    typescript: `function modPow(base: number, exp: number, m: number): number {\n\n}`,
    python: `def mod_pow(base: int, exp: int, m: int) -> int:\n    pass`,
  },
  visibleTests: [
    { args: [2, 10, 1000], expected: 24 },
    { args: [3, 0, 7], expected: 1 },
    { args: [0, 5, 13], expected: 0 },
    { args: [5, 3, 13], expected: 8 },
  ],
  hiddenTests: [
    { args: [2, 0, 1], expected: 0 },
    { args: [1, 1000000000, 7], expected: 1 },
    { args: [2, 30, 1000000007], expected: 73741817 },
    { args: [7, 7, 7], expected: 0 },
    { args: [123, 456, 789], expected: 699 },
    { args: [999999999, 999999999, 1000000007], expected: 266078474 },
    { args: [2, 31, 1000000000], expected: 147483648 },
    { args: [6, 4, 5], expected: 1 },
  ],
};
