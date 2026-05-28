import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-the-digits-that-divide-the-number',
  title: 'Count the Digits That Divide the Number',
  difficulty: 'easy',
  tags: ['math'],
  description: `Given an integer \`num\`, return the number of digits in \`num\` that divide \`num\`.

An integer \`val\` divides \`nums\` if \`nums % val == 0\`.`,
  constraints: [
    '1 <= num <= 10^9',
    'num does not contain 0 as one of its digits.',
  ],
  examples: [
    {
      input: 'num = 7',
      output: '1',
      explanation: '7 divides 7. Count = 1.',
    },
    {
      input: 'num = 121',
      output: '2',
      explanation: 'Digits: 1, 2, 1. 121%1=0 ✓, 121%2=1 ✗, 121%1=0 ✓. Count = 2.',
    },
    {
      input: 'num = 1248',
      output: '4',
      explanation: 'All digits 1, 2, 4, 8 divide 1248. Count = 4.',
    },
  ],
  hints: [
    'Extract each digit of num and check if num % digit == 0.',
    'Iterate each digit of `num`. Convert to a number; skip if zero. Count if `num % digit === 0`.',
    '`return String(num).split(\'\').filter(d => +d !== 0 && num % +d === 0).length;`'
  ],
  functionName: 'countDigits',
  params: ['num'],
  starterCode: {
    javascript: `function countDigits(num) {

}`,
    typescript: "function countDigits(num: number): number {\n\n}",

    python: `def countDigits(num):
    pass`,
  },
  visibleTests: [
    { args: [7], expected: 1 },
    { args: [121], expected: 2 },
    { args: [1248], expected: 4 },
  ],
  hiddenTests: [
    { args: [1], expected: 1 },
    { args: [12], expected: 2 },
    { args: [36], expected: 2 },
    { args: [111], expected: 3 },
  ],
};
