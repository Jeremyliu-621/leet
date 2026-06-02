import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-the-digits-that-divide-a-number',
  title: 'Count the Digits That Divide a Number',
  difficulty: 'easy',
  tags: ['math'],
  description: `Given an integer \`num\`, return the **count** of digits in \`num\` that divide \`num\` evenly.

A digit \`d\` divides \`num\` if \`num % d == 0\`. Note that \`0\` does not divide any number, so skip zero digits.`,
  constraints: [
    '1 <= num <= 10^9',
  ],
  examples: [
    {
      input: 'num = 7',
      output: '1',
      explanation: '7 has one digit: 7. Since 7 % 7 == 0, the count is 1.',
    },
    {
      input: 'num = 121',
      output: '2',
      explanation: '121 has digits 1, 2, 1. 121 % 1 == 0 (twice), but 121 % 2 != 0. Count = 2.',
    },
    {
      input: 'num = 1248',
      output: '4',
      explanation: '1248 % 1 == 0, 1248 % 2 == 0, 1248 % 4 == 0, 1248 % 8 == 0. Count = 4.',
    },
  ],
  hints: [
    'Extract each digit by repeatedly taking num % 10 and dividing by 10.',
    'Skip digit 0 to avoid division by zero.',
    'For each non-zero digit d, check if num % d === 0 and increment the counter.',
  ],
  functionName: 'countDigits',
  params: ['num'],
  starterCode: {
    javascript: `function countDigits(num) {
  let n = num, count = 0;
  while (n > 0) { const d = n % 10; if (d !== 0 && num % d === 0) count++; n = Math.floor(n / 10); }
  return count;
}`,
    typescript: `function countDigits(num: number): number {
  let n = num, count = 0;
  while (n > 0) { const d = n % 10; if (d !== 0 && num % d === 0) count++; n = Math.floor(n / 10); }
  return count;
}`,
    python: `def countDigits(num):
    return sum(1 for d in str(num) if d != '0' and num % int(d) == 0)`,
  },
  visibleTests: [
    { args: [7], expected: 1 },
    { args: [121], expected: 2 },
    { args: [1248], expected: 4 },
  ],
  hiddenTests: [
    { args: [7], expected: 1 },
    { args: [121], expected: 2 },
    { args: [1248], expected: 4 },
    { args: [1], expected: 1 },
    { args: [10], expected: 1 },
    { args: [100], expected: 1 },
    { args: [36], expected: 2 },
    { args: [999], expected: 3 },
  ],
};
