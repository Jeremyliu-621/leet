import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-kth-bit-in-nth-binary-string',
  title: 'Find Kth Bit in Nth Binary String',
  difficulty: 'medium',
  tags: ['simulation', 'bit-manipulation'],
  description: `Given two positive integers \`n\` and \`k\`, the binary string \`S_n\` is defined as follows:

- \`S_1 = "0"\`
- \`S_i = S_{i-1} + "1" + reverse(invert(S_{i-1}))\` for \`i > 1\`

Where \`+\` denotes concatenation, \`reverse(x)\` reverses the string \`x\`, and \`invert(x)\` flips every bit in \`x\` (0 becomes 1 and 1 becomes 0).

The first few strings are:
- \`S_1 = "0"\`
- \`S_2 = "011"\`
- \`S_3 = "0111001"\`
- \`S_4 = "011100110110001"\`

Return **the \`k\`-th bit** (1-indexed) in \`S_n\`.`,
  constraints: [
    '1 <= n <= 20',
    '1 <= k <= 2^n - 1',
  ],
  examples: [
    {
      input: 'n = 3, k = 1',
      output: '"0"',
      explanation: 'S_3 is "0111001". The 1st bit is "0".',
    },
    {
      input: 'n = 4, k = 11',
      output: '"1"',
      explanation: 'S_4 is "011100110110001". The 11th bit is "1".',
    },
  ],
  hints: [
    'Use recursion. The string S_n has length 2^n - 1. The middle element (index 2^(n-1)) is always "1".',
    'If k is in the first half, it corresponds to the same position in S_{n-1}.',
    'If k is in the second half, it corresponds to the mirrored and inverted position in S_{n-1}.',
    '```js\nfunction findKthBit(n, k) {\n  if (n === 1) return "0";\n  const mid = 1 << (n - 1);\n  if (k === mid) return "1";\n  if (k < mid) return findKthBit(n - 1, k);\n  const mirrored = findKthBit(n - 1, mid * 2 - k);\n  return mirrored === "0" ? "1" : "0";\n}\n```',
  ],
  functionName: 'findKthBit',
  params: ['n', 'k'],
  starterCode: {
    javascript: `function findKthBit(n, k) {

}`,
    typescript: `function findKthBit(n: number, k: number): string {

}`,
    python: `def findKthBit(n, k):
    pass`,
  },
  visibleTests: [
    { args: [3, 1], expected: '0' },
    { args: [4, 11], expected: '1' },
    { args: [1, 1], expected: '0' },
  ],
  hiddenTests: [
    { args: [2, 1], expected: '0' },
    { args: [2, 2], expected: '1' },
    { args: [2, 3], expected: '1' },
    { args: [3, 4], expected: '1' },
    { args: [3, 7], expected: '1' },
    { args: [4, 8], expected: '1' },
    { args: [4, 1], expected: '0' },
    { args: [5, 16], expected: '1' },
  ],
};
