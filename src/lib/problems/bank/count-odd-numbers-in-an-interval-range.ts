import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-odd-numbers-in-an-interval-range',
  title: 'Count Odd Numbers in an Interval Range',
  difficulty: 'easy',
  tags: ['math'],
  description: `Given two non-negative integers \`low\` and \`high\`, return the **count of odd numbers** between \`low\` and \`high\` (inclusive).`,
  constraints: [
    '0 <= low <= high <= 10^9',
  ],
  examples: [
    {
      input: 'low = 3, high = 7',
      output: '3',
      explanation: 'The odd numbers between 3 and 7 are [3, 5, 7], so the answer is 3.',
    },
    {
      input: 'low = 8, high = 10',
      output: '1',
      explanation: 'The only odd number between 8 and 10 is 9.',
    },
  ],
  hints: [
    'Count odd numbers from 0 to n using a simple formula: Math.floor((n + 1) / 2).',
    'Odd numbers in [low, high] = countOdds(high) - countOdds(low - 1).',
    '```js\nfunction countOdds(low, high) {\n  return Math.floor((high + 1) / 2) - Math.floor(low / 2);\n}\n```',
  ],
  functionName: 'countOdds',
  params: ['low', 'high'],
  starterCode: {
    javascript: `function countOdds(low, high) {

}`,
    typescript: `function countOdds(low: number, high: number): number {

}`,
    python: `def countOdds(low, high):
    pass`,
  },
  visibleTests: [
    { args: [3, 7], expected: 3 },
    { args: [8, 10], expected: 1 },
    { args: [0, 0], expected: 0 },
  ],
  hiddenTests: [
    { args: [0, 1], expected: 1 },
    { args: [1, 1], expected: 1 },
    { args: [2, 2], expected: 0 },
    { args: [1, 100], expected: 50 },
    { args: [0, 100], expected: 50 },
    { args: [0, 999999999], expected: 500000000 },
    { args: [5, 5], expected: 1 },
    { args: [4, 4], expected: 0 },
  ],
};
