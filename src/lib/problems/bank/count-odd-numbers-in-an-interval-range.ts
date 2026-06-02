import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-odd-numbers-in-an-interval-range',
  title: 'Count Odd Numbers in an Interval Range',
  difficulty: 'easy',
  tags: ['math'],
  description: `Given two non-negative integers \`low\` and \`high\`. Return the **count of odd numbers** between \`low\` and \`high\` (inclusive).

**Formula:** The count of odd numbers in [0, n] is \`⌊(n + 1) / 2⌋\`. So the count in [low, high] is \`⌊(high + 1) / 2⌋ − ⌊low / 2⌋\`.`,
  constraints: [
    '`0 <= low <= high <= 10^9`',
  ],
  examples: [
    {
      input: 'low = 3, high = 7',
      output: '3',
      explanation: 'The odd numbers between 3 and 7 are [3, 5, 7]. Count = 3.',
    },
    {
      input: 'low = 8, high = 10',
      output: '1',
      explanation: 'The only odd number between 8 and 10 is 9. Count = 1.',
    },
  ],
  hints: [
    'Count odd numbers in [0, n] = floor((n + 1) / 2). This counts 1, 3, 5, ...',
    'Count in [low, high] = countOdds(high) - countOdds(low - 1). But low may be 0, so use the formula directly.',
    'Equivalently: floor((high + 1) / 2) - floor(low / 2). O(1) constant time.',
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
    { args: [1, 1], expected: 1 },
    { args: [2, 2], expected: 0 },
    { args: [0, 100], expected: 50 },
    { args: [1, 100], expected: 50 },
    { args: [0, 1], expected: 1 },
    { args: [1, 2], expected: 1 },
    { args: [3, 3], expected: 1 },
    { args: [4, 4], expected: 0 },
    { args: [0, 1000000000], expected: 500000000 },
  ],
};
