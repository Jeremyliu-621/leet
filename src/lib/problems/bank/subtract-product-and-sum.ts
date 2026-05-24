import type { Problem } from '../types';

export const problem: Problem = {
  id: 'subtract-product-and-sum',
  title: 'Subtract the Product and Sum of Digits of an Integer',
  difficulty: 'easy',
  tags: ['math'],
  description: `Given an integer number \`n\`, return the difference between the product of its digits and the sum of its digits.`,
  constraints: [
    '1 <= n <= 10^5',
  ],
  examples: [
    { input: 'n = 234', output: '15', explanation: 'Product = 2*3*4 = 24. Sum = 2+3+4 = 9. 24 - 9 = 15.' },
    { input: 'n = 4421', output: '21', explanation: 'Product = 4*4*2*1 = 32. Sum = 4+4+2+1 = 11. 32 - 11 = 21.' },
  ],
  hints: [
    'Extract each digit by repeatedly taking n % 10 and dividing by 10. Compute product and sum of all digits.',
  ],
  functionName: 'subtractProductAndSum',
  params: ['n'],
  starterCode: {
    javascript: 'function subtractProductAndSum(n) {\n  \n}\n',
    python: 'def subtractProductAndSum(n):\n    pass\n',
  },
  visibleTests: [
    { args: [234], expected: 15 },
    { args: [4421], expected: 21 },
    { args: [1], expected: 0 },
  ],
  hiddenTests: [
    { args: [10], expected: 0 - 1 },
    { args: [99], expected: 81 - 18 },
    { args: [100], expected: 0 - 1 },
    { args: [5], expected: 0 },
    { args: [123], expected: 6 - 6 },
  ],
};
