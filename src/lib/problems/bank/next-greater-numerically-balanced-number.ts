import type { Problem } from '../types';

export const problem: Problem = {
  id: 'next-greater-numerically-balanced-number',
  title: 'Next Greater Numerically Balanced Number',
  difficulty: 'medium',
  tags: ['math'],
  description: `An integer \`x\` is **numerically balanced** if for every digit \`d\` that appears in \`x\`, \`d\` appears **exactly** \`d\` times.

Given an integer \`n\`, return the **smallest numerically balanced** number **strictly greater** than \`n\`.`,
  constraints: [
    '`0 <= n <= 10^6`',
  ],
  examples: [
    {
      input: 'n = 1',
      output: '22',
      explanation: '1 is balanced (digit 1 appears once). Next: 2(not), ..., 22: digit 2 appears 2 times → balanced.',
    },
    {
      input: 'n = 1000',
      output: '1333',
      explanation: '1333: digit 1 appears 1 time ✓, digit 3 appears 3 times ✓ → balanced.',
    },
  ],
  hints: [
    'Balanced numbers are sparse — brute force from n+1 is fast enough for the given constraints.',
    'For each candidate x, count digit frequencies. Then check every non-zero digit d: does it appear exactly d times?',
    'Digit 0 must appear 0 times (no leading zeros in a positive integer), which is automatically satisfied.',
  ],
  functionName: 'nextBeautifulNumber',
  params: ['n'],
  starterCode: {
    javascript: `function nextBeautifulNumber(n) {

}`,
    typescript: `function nextBeautifulNumber(n: number): number {

}`,
    python: `def nextBeautifulNumber(n):
    pass`,
  },
  visibleTests: [
    { args: [1], expected: 22 },
    { args: [1000], expected: 1333 },
  ],
  hiddenTests: [
    { args: [0], expected: 1 },
    { args: [22], expected: 122 },
    { args: [122], expected: 212 },
    { args: [333], expected: 1333 },
    { args: [3000], expected: 3133 },
  ],
};
