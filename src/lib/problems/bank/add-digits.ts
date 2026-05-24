import type { Problem } from '../types';

export const problem: Problem = {
  id: 'add-digits',
  title: 'Add Digits',
  difficulty: 'easy',
  tags: ['math'],
  description: `Given an integer \`num\`, repeatedly add all its digits until the result has only one digit, and return it.`,
  constraints: [
    '`0 <= num <= 2^31 - 1`',
  ],
  examples: [
    {
      input: 'num = 38',
      output: '2',
      explanation: 'The process is: 38 → 3 + 8 = 11, 11 → 1 + 1 = 2. Since 2 has only one digit, return 2.',
    },
    {
      input: 'num = 0',
      output: '0',
    },
  ],
  hints: [
    'Simulate the process: while the number has more than one digit, sum its digits and repeat.',
    'There is an O(1) math trick — the answer is the digital root, which for a positive number equals `num % 9` (or 9 when that is 0). For 0 the answer is 0.',
  ],
  functionName: 'addDigits',
  params: ['num'],
  starterCode: {
    javascript: `function addDigits(num) {

}`,
    python: `def addDigits(num):
    pass`,
  },
  visibleTests: [
    { args: [38], expected: 2 },
    { args: [0], expected: 0 },
  ],
  hiddenTests: [
    { args: [1], expected: 1 },
    { args: [9], expected: 9 },
    { args: [10], expected: 1 },
    { args: [99], expected: 9 },
    { args: [100], expected: 1 },
    { args: [1234], expected: 1 },
  ],
};
