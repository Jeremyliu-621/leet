import type { Problem } from '../types';

export const problem: Problem = {
  id: 'check-if-number-is-a-sum-of-powers-of-three',
  title: 'Check if Number is a Sum of Powers of Three',
  difficulty: 'medium',
  tags: ['math'],
  description: `Given an integer \`n\`, return \`true\` if it is possible to represent \`n\` as the sum of **distinct** powers of three. Otherwise, return \`false\`.

An integer \`y\` is a power of three if there exists an integer \`x\` such that \`y == 3^x\`.`,
  constraints: [
    '`1 <= n <= 10^7`',
  ],
  examples: [
    {
      input: 'n = 12',
      output: 'true',
      explanation: '12 = 3^1 + 3^2 = 3 + 9.',
    },
    {
      input: 'n = 91',
      output: 'true',
      explanation: '91 = 3^0 + 3^2 + 3^4 = 1 + 9 + 81.',
    },
    {
      input: 'n = 21',
      output: 'false',
      explanation: 'There is no way to represent 21 as sum of distinct powers of three.',
    },
  ],
  hints: [
    'Convert `n` to base 3. If any digit is 2, it cannot be expressed as sum of distinct powers of 3.',
    'Repeatedly divide by 3: if any remainder equals 2, return false.',
    'Each power of three can only be used once, so each base-3 digit must be 0 or 1 — never 2.',
  ],
  functionName: 'checkPowersOfThree',
  params: ['n'],
  starterCode: {
    javascript: `function checkPowersOfThree(n) {

}`,
    typescript: `function checkPowersOfThree(n: number): boolean {

}`,
    python: `def checkPowersOfThree(n):
    pass`,
  },
  visibleTests: [
    { args: [12], expected: true },
    { args: [91], expected: true },
    { args: [21], expected: false },
  ],
  hiddenTests: [
    { args: [1], expected: true },
    { args: [2], expected: false },
    { args: [3], expected: true },
    { args: [4], expected: true },
    { args: [9], expected: true },
    { args: [27], expected: true },
    { args: [28], expected: true },
    { args: [29], expected: false },
    { args: [10000000], expected: false },
    { args: [9841], expected: true },
  ],
};
