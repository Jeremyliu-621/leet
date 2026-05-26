import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-the-minimum-number-of-fibonacci-numbers-whose-sum-is-k',
  title: 'Find the Minimum Number of Fibonacci Numbers Whose Sum Is K',
  difficulty: 'medium',
  tags: ['math'],
  description: `Given an integer \`k\`, return the **minimum** number of Fibonacci numbers whose sum is equal to \`k\`. The same Fibonacci number can be used multiple times.

The Fibonacci numbers are defined as: F1 = 1, F2 = 1, F3 = 2, F4 = 3, F5 = 5, ...`,
  constraints: [
    '1 <= k <= 10^9',
  ],
  examples: [
    {
      input: 'k = 7',
      output: '2',
      explanation: 'The Fibonacci representation of 7 is 5 + 2 = 7.',
    },
    {
      input: 'k = 10',
      output: '2',
      explanation: '10 = 8 + 2.',
    },
    {
      input: 'k = 19',
      output: '3',
      explanation: '19 = 13 + 5 + 1.',
    },
  ],
  hints: [
    'Generate all Fibonacci numbers up to k.',
    'Use a greedy approach: repeatedly subtract the largest Fibonacci number ≤ k and increment the count.',
    'This greedy works because Fibonacci numbers satisfy the Zeckendorf property.',
  ],
  functionName: 'findMinFibonacciNumbers',
  params: ['k'],
  starterCode: {
    javascript: 'function findMinFibonacciNumbers(k) {\n  \n}\n',
    python: 'def findMinFibonacciNumbers(k):\n    pass\n',
  },
  visibleTests: [
    { args: [7], expected: 2 },
    { args: [10], expected: 2 },
    { args: [19], expected: 3 },
  ],
  hiddenTests: [
    { args: [1], expected: 1 },
    { args: [2], expected: 1 },
    { args: [4], expected: 2 },
    { args: [13], expected: 1 },
    { args: [100], expected: 3 },
  ],
};
