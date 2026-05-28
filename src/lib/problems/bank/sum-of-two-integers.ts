import type { Problem } from '../types';

export const problem: Problem = {
  id: 'sum-of-two-integers',
  title: 'Sum of Two Integers',
  difficulty: 'medium',
  tags: ['math'],
  description: `Given two integers \`a\` and \`b\`, return the *sum of the two integers* without using the operators \`+\` and \`-\`.`,
  constraints: [
    '-1000 <= a <= 1000',
    '-1000 <= b <= 1000',
  ],
  examples: [
    {
      input: 'a = 1, b = 2',
      output: '3',
    },
    {
      input: 'a = 2, b = 3',
      output: '5',
    },
  ],
  hints: [
    'Use bitwise XOR for the sum without carry, and bitwise AND shifted left for the carry.',
    'Repeat: a = a XOR b, b = (a AND b) << 1, until b is 0.',
    'In languages with fixed 32-bit integers, mask with 0xFFFFFFFF to handle negatives in the loop.',
  ],
  functionName: 'getSum',
  params: ['a', 'b'],
  starterCode: {
    javascript: `function getSum(a, b) {
  // Return a + b without using + or -
}`,
    typescript: "function getSum(a: number, b: number): number {\n  // Return a + b without using + or -\n}",

    python: `def getSum(a, b):
    # Return a + b without using + or -
    pass`,
  },
  visibleTests: [
    { args: [1, 2], expected: 3 },
    { args: [2, 3], expected: 5 },
    { args: [-2, 3], expected: 1 },
  ],
  hiddenTests: [
    { args: [0, 0], expected: 0 },
    { args: [-1, -1], expected: -2 },
    { args: [1000, -500], expected: 500 },
    { args: [-10, 5], expected: -5 },
  ],
};
