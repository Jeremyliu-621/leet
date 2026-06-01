import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximum-product-of-two-digits',
  title: 'Maximum Product of Two Digits',
  difficulty: 'easy',
  tags: ['arrays', 'math'],
  description: `You are given a positive integer \`n\`.

Return the **maximum** product of any two digits in \`n\`.

**Note:** You may use the same digit twice if it appears at least twice in \`n\`, and you cannot use more digits than are available.`,
  constraints: [
    '10 <= n <= 10^9',
  ],
  examples: [
    {
      input: 'n = 31',
      output: '3',
      explanation: 'The digits are 3 and 1. The only product is 3 × 1 = 3.',
    },
    {
      input: 'n = 22',
      output: '4',
      explanation: 'The digits are 2 and 2. The product is 2 × 2 = 4.',
    },
    {
      input: 'n = 124',
      output: '8',
      explanation: 'The digits are 1, 2, 4. The maximum product is 2 × 4 = 8.',
    },
  ],
  hints: [
    'Extract each digit from n by repeated division by 10, collecting all digits.',
    'Sort the digits in descending order.',
    'Return digits[0] * digits[1] (the two largest digits).',
  ],
  functionName: 'maxProduct',
  params: ['n'],
  starterCode: {
    javascript: `function maxProduct(n) {

}`,
    typescript: `function maxProduct(n: number): number {

}`,
    python: `def maxProduct(n):
    pass`,
  },
  visibleTests: [
    { args: [31], expected: 3 },
    { args: [22], expected: 4 },
    { args: [124], expected: 8 },
  ],
  hiddenTests: [
    { args: [10], expected: 0 },
    { args: [99], expected: 81 },
    { args: [999], expected: 81 },
    { args: [1234], expected: 12 },
    { args: [100], expected: 0 },
    { args: [59], expected: 45 },
  ],
};
