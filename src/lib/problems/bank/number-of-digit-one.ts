import type { Problem } from '../types';

export const problem: Problem = {
  id: 'number-of-digit-one',
  title: 'Number of Digit One',
  difficulty: 'hard',
  tags: ['math'],
  description: `Given an integer \`n\`, count the total number of digit \`1\` appearing in all non-negative integers less than or equal to \`n\`.`,
  constraints: ['0 <= n <= 10^9'],
  examples: [
    { input: 'n = 13', output: '6', explanation: '1, 10, 11, 12, 13 → digits: 1,1,1+1,1,1 = 6 ones.' },
    { input: 'n = 0', output: '0' },
  ],
  hints: [
    'Process each digit position independently. For position p (ones, tens, hundreds, ...), count how many times digit 1 appears in that position across all numbers 1..n.',
    'For a given digit position with value d = (n / factor) % 10: if d == 0, count += (n / (10*factor)) * factor; if d == 1, count += (n / (10*factor)) * factor + (n % factor) + 1; if d > 1, count += (n / (10*factor) + 1) * factor.',
    'Sweep factor from 1 up to n, multiplying by 10 each iteration.',
  ],
  functionName: 'countDigitOne',
  params: ['n'],
  starterCode: {
    javascript: 'function countDigitOne(n) {\n\n}\n',
    python: 'def countDigitOne(n):\n    pass\n',
  },
  visibleTests: [
    { args: [13], expected: 6 },
    { args: [0], expected: 0 },
  ],
  hiddenTests: [
    { args: [1], expected: 1 },
    { args: [10], expected: 2 },
    { args: [100], expected: 21 },
    { args: [1000000000], expected: 900000001 },
  ],
};
