import type { Problem } from '../types';

export const problem: Problem = {
  id: 'sum-of-multiples',
  title: 'Sum of Multiples',
  difficulty: 'easy',
  tags: ['math'],
  description: `Given a positive integer \`n\`, find the sum of all integers in the range \`[1, n]\` **inclusive** that are divisible by \`3\`, \`5\`, or \`7\`.

Return *an integer denoting the sum of all integers in the range* \`[1, n]\` *that are divisible by* \`3\`*,* \`5\`*, or* \`7\`.`,
  constraints: [
    '1 <= n <= 1000',
  ],
  examples: [
    {
      input: 'n = 7',
      output: '21',
      explanation: 'Numbers in [1,7] divisible by 3, 5, or 7: 3, 5, 6, 7. Sum = 3 + 5 + 6 + 7 = 21.',
    },
    {
      input: 'n = 10',
      output: '40',
      explanation: 'Numbers: 3, 5, 6, 7, 9, 10. Sum = 3 + 5 + 6 + 7 + 9 + 10 = 40.',
    },
    {
      input: 'n = 9',
      output: '30',
      explanation: 'Numbers: 3, 5, 6, 7, 9. Sum = 3 + 5 + 6 + 7 + 9 = 30.',
    },
  ],
  hints: [
    'Iterate from 1 to n.',
    'For each number, check if it is divisible by 3, 5, or 7 using the modulo operator.',
    'Add qualifying numbers to a running sum.',
  ],
  functionName: 'sumOfMultiples',
  params: ['n'],
  starterCode: {
    javascript: `function sumOfMultiples(n) {

}`,
    python: `def sumOfMultiples(n):
    pass`,
  },
  visibleTests: [
    { args: [7], expected: 21 },
    { args: [10], expected: 40 },
    { args: [9], expected: 30 },
  ],
  hiddenTests: [
    { args: [1], expected: 0 },
    { args: [3], expected: 3 },
    { args: [5], expected: 8 },
    { args: [15], expected: 81 },
    { args: [100], expected: 2838 },
  ],
};
