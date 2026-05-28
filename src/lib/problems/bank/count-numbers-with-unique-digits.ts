import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-numbers-with-unique-digits',
  title: 'Count Numbers with Unique Digits',
  difficulty: 'medium',
  tags: ['math', 'dynamic-programming'],
  description: `Given an integer \`n\`, return the count of all numbers with unique digits \`x\`, where \`0 <= x < 10^n\`.`,
  constraints: ['0 <= n <= 8'],
  examples: [
    {
      input: 'n = 2',
      output: '91',
      explanation: 'Numbers with unique digits in [0, 99]: all except 11, 22, 33, 44, 55, 66, 77, 88, 99 = 100 - 9 = 91.',
    },
    {
      input: 'n = 0',
      output: '1',
      explanation: 'Only 0 is in the range [0, 10^0) = [0, 1), which is just {0}.',
    },
  ],
  hints: [
    'For a k-digit number (k >= 2): first digit has 9 choices (1-9), each subsequent digit has 9, 8, 7... choices.',
    'f(k) = 9 × 9 × 8 × ... × (11-k) for k >= 2; f(0) = 1; f(1) = 10.',
    'Answer = sum of f(k) for k from 0 to min(n, 10).',
  ],
  functionName: 'countNumbersWithUniqueDigits',
  params: ['n'],
  starterCode: {
    javascript: `function countNumbersWithUniqueDigits(n) {

}`,
    typescript: "function countNumbersWithUniqueDigits(n: number): number {\n\n}",

    python: `def countNumbersWithUniqueDigits(n):
    pass`,
  },
  visibleTests: [
    { args: [2], expected: 91 },
    { args: [0], expected: 1 },
  ],
  hiddenTests: [
    { args: [1], expected: 10 },
    { args: [3], expected: 739 },
    { args: [8], expected: 2345851 },
  ],
};
