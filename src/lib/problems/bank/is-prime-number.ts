import type { Problem } from '../types';

export const problem: Problem = {
  id: 'is-prime-number',
  title: 'Prime Number Check',
  difficulty: 'easy',
  tags: ['math'],
  description:
    'A prime number is an integer greater than 1 whose only positive divisors are 1 and itself.\n\nGiven an integer n, return true if n is prime and false otherwise. Numbers less than 2, such as 0, 1, and all negatives, are not prime.\n\nChecking divisors only up to the square root of n is enough to decide primality.',
  constraints: [
    '-1000 <= n <= 1000000',
    'n is an integer.',
  ],
  examples: [
    {
      input: 'n = 7',
      output: 'true',
      explanation: '7 is divisible only by 1 and 7.',
    },
    {
      input: 'n = 12',
      output: 'false',
      explanation: '12 is divisible by 2, 3, 4, and 6.',
    },
    {
      input: 'n = 1',
      output: 'false',
      explanation: '1 is not considered prime.',
    },
  ],
  functionName: 'isPrime',
  params: ['n'],
  starterCode: {
    javascript: 'function isPrime(n) {\n  // your code here\n}\n',
  },
  visibleTests: [
    { args: [7], expected: true },
    { args: [12], expected: false },
    { args: [1], expected: false },
  ],
  hiddenTests: [
    { args: [0], expected: false },
    { args: [-5], expected: false },
    { args: [2], expected: true },
    { args: [97], expected: true },
    { args: [100], expected: false },
    { args: [7919], expected: true },
  ],
};
