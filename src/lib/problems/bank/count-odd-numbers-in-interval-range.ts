import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-odd-numbers-in-interval-range',
  title: 'Count Odd Numbers in an Interval Range',
  difficulty: 'easy',
  tags: ['math'],
  description: `Given two non-negative integers \`low\` and \`high\`. Return the **count** of odd numbers between \`low\` and \`high\` (inclusive).`,
  constraints: [
    '0 <= low <= high <= 10^9',
  ],
  examples: [
    {
      input: 'low = 3, high = 7',
      output: '3',
      explanation: 'Odd numbers: 3, 5, 7.',
    },
    {
      input: 'low = 8, high = 10',
      output: '1',
      explanation: 'Odd numbers: 9.',
    },
  ],
  hints: [
    'Count odd numbers from 1 to n using: Math.ceil(n/2) = (n+1)//2.',
    'Answer = countOdds(high) - countOdds(low - 1).',
    'Or: (high - low) / 2 + (low is odd or high is odd ? 1 : 0).',
  ],
  functionName: 'countOdds',
  params: ['low', 'high'],
  starterCode: {
    javascript: `function countOdds(low, high) {
  return Math.floor((high + 1) / 2) - Math.floor(low / 2);
}`,
    typescript: `function countOdds(low: number, high: number): number {
  return Math.floor((high + 1) / 2) - Math.floor(low / 2);
}`,
    python: `def countOdds(low, high):
    return (high + 1) // 2 - low // 2`,
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
    { args: [1, 1000000000], expected: 500000000 },
  ],
};
