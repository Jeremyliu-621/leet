import type { Problem } from '../types';

export const problem: Problem = {
  id: 'integer-square-root',
  title: 'Integer Square Root',
  difficulty: 'easy',
  tags: ['binary-search'],
  description:
    'Given a non-negative integer n, return the integer square root of n.\n\nThe integer square root is the largest whole number r such that r * r is less than or equal to n. For example, the integer square root of 8 is 2, because 2 * 2 = 4 <= 8 but 3 * 3 = 9 > 8.\n\nBinary search over the candidate range [0, n] finds r without floating-point math.',
  constraints: [
    '0 <= n <= 1000000',
    'n is an integer.',
  ],
  examples: [
    {
      input: 'n = 16',
      output: '4',
      explanation: '4 * 4 = 16 exactly.',
    },
    {
      input: 'n = 8',
      output: '2',
      explanation: '2 * 2 = 4 <= 8 while 3 * 3 = 9 > 8.',
    },
    {
      input: 'n = 0',
      output: '0',
    },
  ],
  functionName: 'integerSquareRoot',
  params: ['n'],
  starterCode: {
    javascript: 'function integerSquareRoot(n) {\n  // your code here\n}\n',
  },
  visibleTests: [
    { args: [16], expected: 4 },
    { args: [8], expected: 2 },
    { args: [0], expected: 0 },
  ],
  hiddenTests: [
    { args: [1], expected: 1 },
    { args: [2], expected: 1 },
    { args: [99], expected: 9 },
    { args: [100], expected: 10 },
    { args: [1000000], expected: 1000 },
    { args: [624], expected: 24 },
  ],
};
