import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimize-xor',
  title: 'Minimize XOR',
  difficulty: 'medium',
  tags: ['math'],
  description: `Given two positive integers \`num1\` and \`num2\`, find the positive integer \`x\` such that:
- \`x\` has the same number of set bits as \`num2\`, and
- The value \`x XOR num1\` is **minimized**.

Note that \`XOR\` is the bitwise XOR operation.

Return the integer \`x\`. The test cases are generated such that \`x\` is **uniquely determined**.`,
  constraints: [
    '1 <= num1, num2 <= 10^9',
  ],
  examples: [
    {
      input: 'num1 = 3, num2 = 5',
      output: '3',
      explanation:
        'num2 = 5 = 101₂ has 2 set bits. x = 3 = 011₂ also has 2 set bits. 3 XOR 3 = 0, which is minimal.',
    },
    {
      input: 'num1 = 1, num2 = 12',
      output: '3',
      explanation:
        'num2 = 12 = 1100₂ has 2 set bits. We need x with 2 set bits minimizing x XOR 1. x = 3 = 011₂: 3 XOR 1 = 2. x = 1 = 001₂ only has 1 set bit. The answer is 3.',
    },
  ],
  hints: [
    'Count the set bits in num2 (call it k). Try to "borrow" bits from num1 first — set bits in x that match the highest set bits of num1.',
    'If num1 has enough set bits (≥ k), clear the lowest set bits of num1 to get exactly k set bits. This minimizes XOR.',
    'If num1 has fewer set bits than k, keep all bits of num1 and add extra bits starting from bit 0 upward.',
  ],
  functionName: 'minimizeXor',
  params: ['num1', 'num2'],
  starterCode: {
    javascript: 'function minimizeXor(num1, num2) {\n  \n}\n',
    typescript: "function minimizeXor(num1: number, num2: number): number {\n  \n}",

    python: 'def minimizeXor(num1, num2):\n    pass\n',
  },
  visibleTests: [
    { args: [3, 5], expected: 3 },
    { args: [1, 12], expected: 3 },
    { args: [8, 2], expected: 8 },
  ],
  hiddenTests: [
    { args: [1, 1], expected: 1 },
    { args: [7, 7], expected: 7 },
    { args: [15, 1], expected: 8 },
    { args: [3, 8], expected: 2 },
  ],
};
