import type { Problem } from '../types';

export const problem: Problem = {
  id: 'number-of-steps-to-reduce-a-number-to-zero',
  title: 'Number of Steps to Reduce a Number to Zero',
  difficulty: 'easy',
  tags: ['math'],
  description: `Given an integer \`num\`, return the number of steps to reduce it to zero.

In one step, if the current number is even, you have to divide it by 2, otherwise, you have to subtract 1 from it.`,
  constraints: [
    '0 <= num <= 10^6',
  ],
  examples: [
    {
      input: 'num = 14',
      output: '6',
      explanation: '14 → 7 → 6 → 3 → 2 → 1 → 0. (divide, subtract, divide, subtract, divide, subtract)',
    },
    {
      input: 'num = 8',
      output: '4',
      explanation: '8 → 4 → 2 → 1 → 0.',
    },
    {
      input: 'num = 123',
      output: '12',
      explanation: '123 → 122 → 61 → 60 → 30 → 15 → 14 → 7 → 6 → 3 → 2 → 1 → 0.',
    },
  ],
  hints: [
    'Simply simulate the process: if num is even, divide by 2; otherwise subtract 1. Count steps.',
    'The number of steps equals the number of bits in the binary representation plus the number of 1-bits minus 1.',
    'For the binary view: each 0-bit costs 1 step (right-shift), each 1-bit costs 2 steps (subtract then shift), except the leading 1 costs 1 step.',
  ],
  functionName: 'numberOfSteps',
  params: ['num'],
  starterCode: {
    javascript: `function numberOfSteps(num) {

}`,
    typescript: `function numberOfSteps(num: number): number {

}`,
    python: `def numberOfSteps(num):
    pass`,
  },
  visibleTests: [
    { args: [14], expected: 6 },
    { args: [8], expected: 4 },
    { args: [123], expected: 12 },
  ],
  hiddenTests: [
    { args: [0], expected: 0 },
    { args: [1], expected: 1 },
    { args: [2], expected: 2 },
    { args: [15], expected: 7 },
    { args: [100], expected: 9 },
    { args: [1000000], expected: 26 },
  ],
};
