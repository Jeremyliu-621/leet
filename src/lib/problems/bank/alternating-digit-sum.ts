import type { Problem } from '../types';

export const problem: Problem = {
  id: 'alternating-digit-sum',
  title: 'Alternating Digit Sum',
  difficulty: 'easy',
  tags: ['math'],
  description: `You are given a positive integer \`n\`. Each digit of \`n\` has a sign according to the following rules:

- The **most significant digit** is assigned a **positive** sign.
- Each other digit has an opposite sign to its adjacent digits.

Return the sum of all digits with their corresponding sign.`,
  constraints: [
    '1 <= n <= 10^9',
  ],
  examples: [
    {
      input: 'n = 521',
      output: '4',
      explanation: '(+5) + (-2) + (+1) = 4',
    },
    {
      input: 'n = 111',
      output: '1',
      explanation: '(+1) + (-1) + (+1) = 1',
    },
    {
      input: 'n = 886996',
      output: '0',
      explanation: '(+8) + (-8) + (+6) + (-9) + (+9) + (-6) = 0',
    },
  ],
  hints: [
    'Convert the number to a string and iterate over its digits.',
    'The first digit gets a positive sign; alternate thereafter.',
    'Multiply each digit by +1 or -1 based on its index parity.',
  ],
  functionName: 'alternateDigitSum',
  params: ['n'],
  starterCode: {
    javascript: `function alternateDigitSum(n) {

}`,
    typescript: "function alternateDigitSum(n: number): number {\n\n}",

    python: `def alternateDigitSum(n):
    pass`,
  },
  visibleTests: [
    { args: [521], expected: 4 },
    { args: [111], expected: 1 },
    { args: [886996], expected: 0 },
  ],
  hiddenTests: [
    { args: [1], expected: 1 },
    { args: [10], expected: 1 },
    { args: [9], expected: 9 },
    { args: [1234], expected: -2 },
  ],
};
