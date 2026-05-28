import type { Problem } from '../types';

export const problem: Problem = {
  id: 'number-of-even-and-odd-bits',
  title: 'Number of Even and Odd Bits',
  difficulty: 'easy',
  tags: ['math'],
  description: `You are given a **positive** integer \`n\`.

Let \`even\` denote the number of even-indexed bits in the binary representation of \`n\` (**0-indexed** from right) that are equal to \`1\`.

Let \`odd\` denote the number of odd-indexed bits in the binary representation of \`n\` (**0-indexed** from right) that are equal to \`1\`.

Return *an integer array* \`answer\` *where* \`answer = [even, odd]\`.`,
  constraints: [
    '`1 <= n <= 1000`',
  ],
  examples: [
    {
      input: 'n = 17',
      output: '[2,0]',
      explanation:
        '17 in binary is 10001. Bits 0 and 4 (even indices) are 1. Bit 0 and bit 4 → even count = 2, odd count = 0.',
    },
    {
      input: 'n = 2',
      output: '[0,1]',
      explanation: '2 in binary is 10. Bit 1 (odd index) is 1 → even=0, odd=1.',
    },
  ],
  hints: [
    'Iterate through the bits of n from bit 0 upward. Track whether each set bit is at an even or odd position.',
    'Use bit shifting: check n & 1 for the current bit, then shift right (n >>= 1) and alternate between even/odd index.',
    `\`\`\`js
function evenOddBit(n) {
  let even = 0, odd = 0, idx = 0;
  while (n > 0) {
    if (n & 1) { if (idx % 2 === 0) even++; else odd++; }
    n >>= 1; idx++;
  }
  return [even, odd];
}\`\`\``,
  ],
  functionName: 'evenOddBit',
  params: ['n'],
  starterCode: {
    javascript: `function evenOddBit(n) {

}`,
    typescript: 'function evenOddBit(n: number): number[] {\n\n}',
    python: `def evenOddBit(n):
    pass`,
  },
  visibleTests: [
    { args: [17], expected: [2, 0] },
    { args: [2], expected: [0, 1] },
    { args: [7], expected: [2, 1] },
  ],
  hiddenTests: [
    { args: [1], expected: [1, 0] },
    { args: [3], expected: [1, 1] },
    { args: [1000], expected: [2, 4] },
    { args: [15], expected: [2, 2] },
    { args: [5], expected: [2, 0] },
    { args: [6], expected: [1, 1] },
  ],
};
