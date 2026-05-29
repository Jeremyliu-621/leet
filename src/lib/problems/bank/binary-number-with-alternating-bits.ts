import type { Problem } from '../types';

export const problem: Problem = {
  id: 'binary-number-with-alternating-bits',
  title: 'Binary Number with Alternating Bits',
  difficulty: 'easy',
  tags: ['bit-manipulation', 'math'],
  description: `Given a positive integer \`n\`, check whether it has **alternating bits**: namely, if two adjacent bits will always have different values.`,
  constraints: [
    '1 <= n <= 2^31 - 1',
  ],
  examples: [
    {
      input: 'n = 5',
      output: 'true',
      explanation: '5 in binary is 101, which alternates.',
    },
    {
      input: 'n = 7',
      output: 'false',
      explanation: '7 in binary is 111, which does not alternate.',
    },
    {
      input: 'n = 11',
      output: 'false',
      explanation: '11 in binary is 1011, which does not alternate.',
    },
  ],
  hints: [
    'Extract bits one at a time using n & 1 and n >>= 1, checking that consecutive bits differ.',
    'Alternatively, if n has alternating bits, then n ^ (n >> 1) is all 1s (a number of the form 0b111...1).',
    'A number x is all 1s in binary if and only if x & (x + 1) == 0.',
  ],
  functionName: 'hasAlternatingBits',
  params: ['n'],
  starterCode: {
    javascript: `function hasAlternatingBits(n) {

}`,
    typescript: `function hasAlternatingBits(n: number): boolean {

}`,
    python: `def hasAlternatingBits(n: int) -> bool:
    pass`,
  },
  visibleTests: [
    { args: [5], expected: true },
    { args: [7], expected: false },
    { args: [11], expected: false },
  ],
  hiddenTests: [
    { args: [1], expected: true },
    { args: [2], expected: true },
    { args: [3], expected: false },
    { args: [10], expected: true },
    { args: [21], expected: true },
    { args: [43], expected: false },
    { args: [12], expected: false },
    { args: [1431655765], expected: true },
  ],
};
