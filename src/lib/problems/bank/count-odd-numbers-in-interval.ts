import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-odd-numbers-in-interval',
  title: 'Count Odd Numbers in an Interval Range',
  difficulty: 'easy',
  tags: ['math'],
  description: `Given two non-negative integers \`low\` and \`high\`. Return the **count of odd numbers** between \`low\` and \`high\` (**inclusive**).`,
  constraints: [
    '`0 <= low <= high <= 10^9`',
  ],
  examples: [
    {
      input: 'low = 3, high = 7',
      output: '3',
      explanation: 'The odd numbers between 3 and 7 are [3,5,7].',
    },
    {
      input: 'low = 8, high = 10',
      output: '1',
      explanation: 'The odd numbers between 8 and 10 are [9].',
    },
  ],
  hints: [
    'The count of odd numbers in [1, n] is Math.ceil(n / 2). The count in [low, high] is countOdd(high) - countOdd(low - 1).',
  ],
  functionName: 'countOdds',
  params: ['low', 'high'],
  starterCode: {
    javascript: `function countOdds(low, high) {

}`,
    python: `def countOdds(low, high):
    pass`,
  },
  visibleTests: [
    { args: [3, 7], expected: 3 },
    { args: [8, 10], expected: 1 },
  ],
  hiddenTests: [
    { args: [0, 0], expected: 0 },
    { args: [1, 1], expected: 1 },
    { args: [0, 1], expected: 1 },
    { args: [0, 10], expected: 5 },
    { args: [1, 10], expected: 5 },
    { args: [2, 5], expected: 2 },
  ],
};
