import type { Problem } from '../types';

export const problem: Problem = {
  id: 'power-of-four',
  title: 'Power of Four',
  difficulty: 'easy',
  tags: ['math', 'bit-manipulation'],
  description: `Given an integer \`n\`, return \`true\` if it is a power of four. Otherwise, return \`false\`.

An integer \`n\` is a power of four if there exists an integer \`x\` such that \`n == 4^x\`.

**Follow-up:** Could you solve it without loops/recursion?`,
  constraints: [
    '-2^31 <= n <= 2^31 - 1',
  ],
  examples: [
    {
      input: 'n = 16',
      output: 'true',
    },
    {
      input: 'n = 5',
      output: 'false',
    },
    {
      input: 'n = 1',
      output: 'true',
      explanation: '4^0 = 1.',
    },
  ],
  hints: [
    'Level 1: A power of four must be a power of two first (only one bit set). Use n & (n-1) == 0 to check power of two. Then ensure the set bit is at an even position (bit 0, 2, 4, ...).',
    'Level 2: Alternatively, use modular arithmetic: 4^k ≡ 1 (mod 3) for all k ≥ 0. So n is a power of four iff n > 0 && (n & (n-1)) == 0 && n % 3 == 1.',
    'Level 3: A bitmask for valid bit positions: 0x55555555 (bits 0,2,4,...,30 all set). So: n > 0 && (n & (n-1)) == 0 && (n & 0x55555555) != 0.',
  ],
  functionName: 'isPowerOfFour',
  params: ['n'],
  starterCode: {
    javascript: `function isPowerOfFour(n) {

}`,
    typescript: `function isPowerOfFour(n: number): boolean {

}`,
    python: `def isPowerOfFour(n):
    pass`,
  },
  visibleTests: [
    { args: [16], expected: true },
    { args: [5], expected: false },
    { args: [1], expected: true },
  ],
  hiddenTests: [
    { args: [0], expected: false },
    { args: [-1], expected: false },
    { args: [4], expected: true },
    { args: [64], expected: true },
    { args: [3], expected: false },
    { args: [2], expected: false },
    { args: [256], expected: true },
    { args: [8], expected: false },
  ],
};
