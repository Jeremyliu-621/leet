import type { Problem } from '../types';

export const problem: Problem = {
  id: 'perfect-number',
  title: 'Perfect Number',
  difficulty: 'easy',
  tags: ['math'],
  description: `A **perfect number** is a **positive integer** that is equal to the sum of its **positive divisors**, excluding the number itself.

Given an integer \`num\`, return \`true\` if \`num\` is a perfect number, otherwise return \`false\`.`,
  constraints: ['`1 <= num <= 10^8`'],
  examples: [
    {
      input: 'num = 28',
      output: 'true',
      explanation: '28 = 1 + 2 + 4 + 7 + 14',
    },
    { input: 'num = 7', output: 'false' },
  ],
  hints: [
    'Iterate from 1 to sqrt(num) to find all divisors.',
    'For each divisor i, also add num/i (unless i == num/i).',
    'Start the sum at 1 (the divisor 1 is always included if num > 1) and exclude num itself.',
  ],
  functionName: 'checkPerfectNumber',
  params: ['num'],
  starterCode: {
    javascript: 'function checkPerfectNumber(num) {\n  \n}\n',
    python: 'def checkPerfectNumber(num):\n    pass\n',
  },
  visibleTests: [
    { args: [28], expected: true },
    { args: [7], expected: false },
  ],
  hiddenTests: [
    { args: [1], expected: false },
    { args: [6], expected: true },
    { args: [496], expected: true },
    { args: [8128], expected: true },
    { args: [12], expected: false },
    { args: [100], expected: false },
  ],
};
