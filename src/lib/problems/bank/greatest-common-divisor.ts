import type { Problem } from '../types';

export const problem: Problem = {
  id: 'greatest-common-divisor',
  title: 'Greatest Common Divisor',
  difficulty: 'easy',
  tags: ['math'],
  description:
    'Given two positive integers a and b, return their greatest common divisor: the largest integer that divides both a and b without leaving a remainder.\n\nThe Euclidean algorithm computes this quickly by repeatedly replacing the larger number with the remainder of dividing it by the smaller, until one becomes zero.\n\nThe other number at that point is the greatest common divisor.',
  constraints: [
    '1 <= a <= 1000000',
    '1 <= b <= 1000000',
    'a and b are integers.',
  ],
  examples: [
    {
      input: 'a = 12, b = 18',
      output: '6',
      explanation: '6 is the largest number that divides both 12 and 18.',
    },
    {
      input: 'a = 7, b = 5',
      output: '1',
      explanation: '7 and 5 share no divisor larger than 1.',
    },
    {
      input: 'a = 20, b = 20',
      output: '20',
    },
  ],
  functionName: 'greatestCommonDivisor',
  params: ['a', 'b'],
  starterCode: {
    javascript: 'function greatestCommonDivisor(a, b) {\n  // your code here\n}\n',
  },
  visibleTests: [
    { args: [12, 18], expected: 6 },
    { args: [7, 5], expected: 1 },
    { args: [20, 20], expected: 20 },
  ],
  hiddenTests: [
    { args: [1, 1], expected: 1 },
    { args: [1, 999], expected: 1 },
    { args: [100, 80], expected: 20 },
    { args: [48, 36], expected: 12 },
    { args: [1000000, 500000], expected: 500000 },
    { args: [17, 34], expected: 17 },
  ],
};
