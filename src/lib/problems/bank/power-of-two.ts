import type { Problem } from '../types';

export const problem: Problem = {
  id: 'power-of-two',
  title: 'Power of Two',
  difficulty: 'easy',
  tags: ['bit-manipulation', 'math'],
  description: `Given an integer \`n\`, return \`true\` if it is a power of two. Otherwise, return \`false\`.

An integer \`n\` is a power of two if there exists an integer \`x\` such that \`n == 2^x\`.`,
  constraints: ['-2^31 <= n <= 2^31 - 1'],
  examples: [
    { input: 'n = 1', output: 'true', explanation: '2^0 = 1.' },
    { input: 'n = 16', output: 'true', explanation: '2^4 = 16.' },
    { input: 'n = 3', output: 'false' },
  ],
  hints: [
    'Level 1: A power of two is positive and has exactly one set bit in binary representation.',
    'Level 2: If n is a power of two, n & (n-1) == 0 (clears the only set bit). Also n must be positive.',
    'Level 3: return n>0&&(n&(n-1))===0;',
  ],
  functionName: 'isPowerOfTwo',
  params: ['n'],
  starterCode: {
    javascript: `function isPowerOfTwo(n) {
  return n > 0 && (n & (n - 1)) === 0;
}`,
    typescript: `function isPowerOfTwo(n: number): boolean {
  return n > 0 && (n & (n - 1)) === 0;
}`,
    python: `def isPowerOfTwo(n):
    return n > 0 and (n & (n - 1)) == 0`,
  },
  visibleTests: [
    { args: [1], expected: true },
    { args: [16], expected: true },
    { args: [3], expected: false },
  ],
  hiddenTests: [
    { args: [0], expected: false },
    { args: [-1], expected: false },
    { args: [4], expected: true },
    { args: [5], expected: false },
    { args: [1073741824], expected: true },
  ],
};
