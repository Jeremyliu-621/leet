import type { Problem } from '../types';

export const problem: Problem = {
  id: 'digit-sum',
  title: 'Sum Of Digits',
  difficulty: 'easy',
  tags: ['math'],
  description:
    'Given a non-negative integer n, return the sum of its decimal digits.\n\nFor example, the digits of 472 are 4, 7, and 2, and their sum is 13. Repeatedly taking n modulo 10 and dividing n by 10 extracts each digit.\n\nThe digit sum of 0 is 0.',
  constraints: [
    '0 <= n <= 1000000000',
    'n is an integer.',
  ],
  examples: [
    {
      input: 'n = 472',
      output: '13',
      explanation: '4 + 7 + 2 = 13.',
    },
    {
      input: 'n = 0',
      output: '0',
      explanation: 'The only digit is 0.',
    },
    {
      input: 'n = 9999',
      output: '36',
    },
  ],
  functionName: 'digitSum',
  params: ['n'],
  starterCode: {
    javascript: 'function digitSum(n) {\n  // your code here\n}\n',
    python: 'def digitSum(n):\n    # your code here\n    pass\n',
  },
  visibleTests: [
    { args: [472], expected: 13 },
    { args: [0], expected: 0 },
    { args: [9999], expected: 36 },
  ],
  hiddenTests: [
    { args: [5], expected: 5 },
    { args: [10], expected: 1 },
    { args: [100], expected: 1 },
    { args: [123456789], expected: 45 },
    { args: [1000000000], expected: 1 },
    { args: [808], expected: 16 },
  ],
};
