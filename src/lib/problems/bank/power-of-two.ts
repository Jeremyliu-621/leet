import type { Problem } from '../types';

export const problem: Problem = {
  id: 'power-of-two',
  title: 'Power of Two',
  difficulty: 'easy',
  tags: ['math'],
  description: `Given an integer \`n\`, return \`true\` if it is a **power of two**, and \`false\` otherwise.

An integer is a power of two if there exists some non-negative integer \`k\` such that \`n = 2^k\`. For example, \`1 = 2^0\`, \`2 = 2^1\`, \`4 = 2^2\`, \`8 = 2^3\`, etc.

There is a clever bit-manipulation trick for this — powers of two have exactly one bit set in binary.`,
  constraints: [
    '-2^31 <= n <= 2^31 - 1',
  ],
  examples: [
    {
      input: 'n = 1',
      output: 'true',
      explanation: '2^0 = 1',
    },
    {
      input: 'n = 16',
      output: 'true',
      explanation: '2^4 = 16',
    },
    {
      input: 'n = 3',
      output: 'false',
      explanation: '3 is not a power of two.',
    },
  ],
  hints: [
    'Any power of two is strictly positive, so start by handling `n <= 0` — those are immediately `false`.',
    'A power of two has exactly one `1`-bit in binary. The expression `n & (n - 1)` clears the lowest set bit. For a power of two, that produces zero.',
    '`if (n <= 0) return false; return (n & (n - 1)) === 0;`',
  ],
  functionName: 'isPowerOfTwo',
  params: ['n'],
  starterCode: {
    javascript: 'function isPowerOfTwo(n) {\n  // your code here\n}\n',
    python: 'def isPowerOfTwo(n):\n    # your code here\n    pass\n',
  },
  visibleTests: [
    { args: [1], expected: true },
    { args: [16], expected: true },
    { args: [3], expected: false },
  ],
  hiddenTests: [
    { args: [0], expected: false },
    { args: [-1], expected: false },
    { args: [2], expected: true },
    { args: [4], expected: true },
    { args: [5], expected: false },
    { args: [1024], expected: true },
  ],
};
