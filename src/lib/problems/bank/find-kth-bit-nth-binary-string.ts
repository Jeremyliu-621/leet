import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-kth-bit-nth-binary-string',
  title: 'Find Kth Bit in Nth Binary String',
  difficulty: 'medium',
  tags: ['strings', 'math'],
  description: `Given two positive integers \`n\` and \`k\`, the binary string \`Sn\` is formed as follows:

- \`S1 = "0"\`
- \`Si = Si-1 + "1" + reverse(invert(Si-1))\` for \`i > 1\`

Where \`+\` denotes string concatenation, \`reverse(x)\` returns the reverse of string \`x\`, and \`invert(x)\` flips all the bits in \`x\` (i.e., \`'0'\` → \`'1'\`, \`'1'\` → \`'0'\`).

Return the \`k\`th bit in \`Sn\`. It is guaranteed that \`k\` is valid for the given \`n\`.`,
  constraints: [
    '1 <= n <= 20',
    '1 <= k <= 2^n - 1',
  ],
  examples: [
    {
      input: 'n = 3, k = 1',
      output: '"0"',
      explanation: 'S3 = "0111001". The 1st bit is "0".',
    },
    {
      input: 'n = 4, k = 11',
      output: '"1"',
      explanation: 'S4 = "011100110110001". The 11th bit is "1".',
    },
  ],
  hints: [
    'Level 1: |Sn| = 2^n - 1. The middle position is 2^(n-1).',
    'Level 2: Recurse: if k < mid, same as findKthBit(n-1, k); if k = mid, return "1"; if k > mid, return invert(findKthBit(n-1, 2^n - k)).',
    'Level 3: function f(n,k){if(n===1)return"0";const mid=1<<(n-1);if(k===mid)return"1";if(k<mid)return f(n-1,k);return f(n-1,(1<<n)-k)==="0"?"1":"0";}return f(n,k);',
  ],
  functionName: 'findKthBit',
  params: ['n', 'k'],
  starterCode: {
    javascript: 'function findKthBit(n, k) {\n  // your code here\n}\n',
    python: 'def findKthBit(n, k):\n    # your code here\n    pass\n',
  },
  visibleTests: [
    { args: [3, 1], expected: '0' },
    { args: [4, 11], expected: '1' },
  ],
  hiddenTests: [
    { args: [1, 1], expected: '0' },
    { args: [2, 1], expected: '0' },
    { args: [2, 2], expected: '1' },
    { args: [2, 3], expected: '1' },
    { args: [3, 4], expected: '1' },
    { args: [3, 7], expected: '1' },
  ],
};
