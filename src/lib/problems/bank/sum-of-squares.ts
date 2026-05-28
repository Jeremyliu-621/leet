import type { Problem } from '../types';

export const problem: Problem = {
  id: 'sum-of-squares',
  title: 'Sum of Squares of Digits',
  difficulty: 'easy',
  tags: ['math'],
  description: `Given a non-negative integer \`n\`, return the sum of the **squares** of its digits.

For example, \`123\` has digits \`1\`, \`2\`, \`3\`, so the answer is \`1² + 2² + 3² = 1 + 4 + 9 = 14\`.

This operation is the basis of the **happy number** problem — repeatedly applying it eventually either cycles back to 1 or loops forever.`,
  constraints: [
    '0 <= n <= 10^9',
  ],
  examples: [
    {
      input: 'n = 123',
      output: '14',
      explanation: '1² + 2² + 3² = 1 + 4 + 9 = 14',
    },
    {
      input: 'n = 0',
      output: '0',
      explanation: 'The only digit is 0; 0² = 0.',
    },
    {
      input: 'n = 9',
      output: '81',
      explanation: '9² = 81',
    },
  ],
  hints: [
    'Extract each digit by taking `n % 10` (the last digit) and then dividing `n` by 10 (remove the last digit). Repeat until `n` becomes 0.',
    'Square each digit as you extract it and add to a running sum.',
    '`let sum = 0; if (n === 0) return 0; while (n > 0) { const d = n % 10; sum += d * d; n = Math.floor(n / 10); } return sum;`',
  ],
  functionName: 'sumOfSquares',
  params: ['n'],
  starterCode: {
    javascript: 'function sumOfSquares(n) {\n  // your code here\n}\n',
    typescript: "function sumOfSquares(n: number): number {\n  // your code here\n}",

    python: 'def sumOfSquares(n):\n    # your code here\n    pass\n',
  },
  visibleTests: [
    { args: [123], expected: 14 },
    { args: [0], expected: 0 },
    { args: [9], expected: 81 },
  ],
  hiddenTests: [
    { args: [1], expected: 1 },
    { args: [10], expected: 1 },
    { args: [11], expected: 2 },
    { args: [99], expected: 162 },
    { args: [100], expected: 1 },
    { args: [999], expected: 243 },
  ],
};
