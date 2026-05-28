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
  hints: [
    'You need to inspect each digit of `n` independently. How do you extract a single digit from a number using arithmetic operators?',
    'To strip the last digit use `n % 10`. To remove it use integer division `Math.floor(n / 10)`. Loop until `n` reaches 0, adding each stripped digit to an accumulator.',
    'Initialize `sum = 0`. While `n > 0`: `sum += n % 10`, then `n = Math.floor(n / 10)`. Return `sum`. Edge case: `digitSum(0)` should return 0 — a pre-check `if (n === 0) return 0` handles it cleanly.',
  ],
  functionName: 'digitSum',
  params: ['n'],
  starterCode: {
    javascript: 'function digitSum(n) {\n  // your code here\n}\n',
    typescript: "function digitSum(n: number): number {\n  // your code here\n}",

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
