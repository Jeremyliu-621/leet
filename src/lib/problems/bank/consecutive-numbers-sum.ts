import type { Problem } from '../types';

export const problem: Problem = {
  id: 'consecutive-numbers-sum',
  title: 'Consecutive Numbers Sum',
  difficulty: 'hard',
  tags: ['math'],
  description: `Given a positive integer \`n\`, return the number of ways we can write \`n\` as the sum of consecutive positive integers.

For example, \`n = 15\` can be written as \`15\`, \`7+8\`, \`4+5+6\`, or \`1+2+3+4+5\`.`,
  constraints: [
    '`1 <= n <= 10^9`',
  ],
  examples: [
    {
      input: 'n = 5',
      output: '2',
      explanation: '5 = 5 = 2 + 3',
    },
    {
      input: 'n = 9',
      output: '3',
      explanation: '9 = 9 = 4 + 5 = 2 + 3 + 4',
    },
    {
      input: 'n = 15',
      output: '4',
      explanation: '15 = 15 = 7 + 8 = 4 + 5 + 6 = 1 + 2 + 3 + 4 + 5',
    },
  ],
  hints: [
    'A sum of k consecutive integers starting at a is: k*a + k*(k-1)/2 = n. So a = (2n - k*(k-1)) / (2k) must be a positive integer.',
    'Loop k from 1 upward while k*(k+1) <= 2n. For each k, check if (2n - k*(k-1)) is divisible by 2k and the quotient is positive (at least 1).',
    '```js\nfunction consecutiveNumbersSum(n) {\n  let count = 0;\n  for (let k = 1; k * (k + 1) <= 2 * n; k++) {\n    if ((2 * n - k * (k - 1)) % (2 * k) === 0) count++;\n  }\n  return count;\n}\n```',
  ],
  functionName: 'consecutiveNumbersSum',
  params: ['n'],
  starterCode: {
    javascript: `function consecutiveNumbersSum(n) {

}`,
    typescript: `function consecutiveNumbersSum(n: number): number {

}`,
    python: `def consecutiveNumbersSum(n):
    pass`,
  },
  visibleTests: [
    { args: [5], expected: 2 },
    { args: [9], expected: 3 },
    { args: [15], expected: 4 },
  ],
  hiddenTests: [
    { args: [1], expected: 1 },
    { args: [2], expected: 1 },
    { args: [100], expected: 3 },
    { args: [3], expected: 2 },
    { args: [45], expected: 6 },
  ],
};
