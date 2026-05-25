import type { Problem } from '../types';

export const problem: Problem = {
  id: 'power-of-four',
  title: 'Power of Four',
  difficulty: 'easy',
  tags: ['math'],
  description: `Given an integer \`n\`, return \`true\` if it is a power of four. Otherwise, return \`false\`.

An integer \`n\` is a power of four if there exists an integer \`x\` such that \`n == 4^x\`.`,
  constraints: [
    '`-2^31 <= n <= 2^31 - 1`',
  ],
  examples: [
    { input: 'n = 16', output: 'true' },
    { input: 'n = 5', output: 'false' },
    { input: 'n = 1', output: 'true' },
  ],
  hints: [
    'A power of four must first be a power of two (only one bit set).',
    'For powers of four, the single set bit is at an even position (0, 2, 4, ...).',
    'Use n > 0 && (n & (n-1)) === 0 && (n & 0xAAAAAAAA) === 0.',
  ],
  functionName: 'isPowerOfFour',
  params: ['n'],
  starterCode: {
    javascript: 'function isPowerOfFour(n) {\n  \n}\n',
    python: 'def isPowerOfFour(n):\n    pass\n',
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
    { args: [8], expected: false },
    { args: [2], expected: false },
  ],
};
