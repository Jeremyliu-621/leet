import type { Problem } from '../types';

export const problem: Problem = {
  id: 'sum-multiples',
  title: 'Sum of Multiples',
  difficulty: 'easy',
  tags: ['math'],
  description: `Given a positive integer \`n\`, find the sum of all integers in the range \`[1, n]\` **inclusive** that are divisible by \`3\`, \`5\`, or \`7\`.

Return an integer denoting the sum of all integers in the given range satisfying the above condition.`,
  constraints: [
    '1 <= n <= 10^3',
  ],
  examples: [
    {
      input: 'n = 7',
      output: '21',
      explanation: 'Numbers divisible by 3, 5, or 7: 3, 5, 6, 7. Sum = 3+5+6+7 = 21.',
    },
    {
      input: 'n = 10',
      output: '40',
      explanation: '3+5+6+7+9+10 = 40.',
    },
    {
      input: 'n = 9',
      output: '30',
      explanation: '3+5+6+7+9 = 30.',
    },
  ],
  hints: [
    'Iterate from 1 to n and add numbers divisible by 3, 5, or 7.',
    'Alternatively, use inclusion-exclusion: sum(mult of 3) + sum(mult of 5) + sum(mult of 7) - sum(mult of 15) - sum(mult of 21) - sum(mult of 35) + sum(mult of 105).',
    'For n <= 1000, a simple loop is fast enough.',
  ],
  functionName: 'sumOfMultiples',
  params: ['n'],
  starterCode: {
    javascript: `function sumOfMultiples(n) {

}`,
    typescript: "function sumOfMultiples(n: number): number {\n\n}",

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
    { args: [100], expected: 2838 },
  ],
};
