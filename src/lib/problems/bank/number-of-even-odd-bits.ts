import type { Problem } from '../types';

export const problem: Problem = {
  id: 'number-of-even-odd-bits',
  title: 'Number of Even and Odd Bits',
  difficulty: 'easy',
  tags: ['bit-manipulation', 'math'],
  description: `You are given a **positive** integer \`n\`.

Let \`even\` denote the number of even indices in the binary representation of \`n\` (**0-indexed** from the right) with value 1.

Let \`odd\` denote the number of odd indices in the binary representation of \`n\` (**0-indexed** from the right) with value 1.

Return an integer array \`answer\` where \`answer = [even, odd]\`.`,
  constraints: [
    '1 <= n <= 1000',
  ],
  examples: [
    {
      input: 'n = 17',
      output: '[2,0]',
      explanation: '17 in binary is 10001. Bit 0 (position 0, even) = 1. Bit 1 = 0. Bit 2 = 0. Bit 3 = 0. Bit 4 (position 4, even) = 1. even=2, odd=0.',
    },
    {
      input: 'n = 2',
      output: '[0,1]',
      explanation: '2 in binary is 10. Bit 1 (odd) = 1. even=0, odd=1.',
    },
  ],
  hints: [
    'Iterate through each bit of n. For each bit position pos (starting from 0), if the bit is 1, increment even if pos is even, odd otherwise.',
    'Use bit shifting: while n > 0, check n & 1, then n >>= 1, pos++.',
    'Return [even, odd].',
  ],
  functionName: 'evenOddBit',
  params: ['n'],
  starterCode: {
    javascript: `function evenOddBit(n) {

}`,
    typescript: "function evenOddBit(n: number): number[] {\n\n}",

    python: `def evenOddBit(n):
    pass`,
  },
  visibleTests: [
    { args: [17], expected: [2, 0] },
    { args: [2], expected: [0, 1] },
  ],
  hiddenTests: [
    { args: [1], expected: [1, 0] },
    { args: [5], expected: [2, 0] },
    { args: [7], expected: [2, 1] },
    { args: [10], expected: [0, 2] },
  ],
};
