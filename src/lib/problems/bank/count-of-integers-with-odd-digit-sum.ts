import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-of-integers-with-odd-digit-sum',
  title: 'Count of Integers With Odd Digit Sum',
  difficulty: 'easy',
  tags: ['math'],
  description: `Given a positive integer \`num\`, return the number of positive integers **less than or equal** to \`num\` whose digit sums are **odd**.

The digit sum of a positive integer is the sum of all its digits.`,
  constraints: [
    '1 <= num <= 1000',
  ],
  examples: [
    {
      input: 'num = 7',
      output: '4',
      explanation: 'Numbers with odd digit sum: 1, 3, 5, 7. Count = 4.',
    },
    {
      input: 'num = 15',
      output: '8',
      explanation: 'Numbers with odd digit sum ≤ 15: 1, 3, 5, 7, 9, 10, 12, 14. Count = 8.',
    },
  ],
  hints: [
    'For each number from 1 to num, sum its digits and check if the sum is odd.',
    'Extract digits by converting the number to a string and summing `parseInt(d)` for each character.',
    'Numbers alternate between odd and even digit sums roughly every other number, but multi-digit numbers (like 19→10→even) break the pattern — brute force is simplest here.',
  ],
  functionName: 'countOdd',
  params: ['num'],
  starterCode: {
    javascript: `function countOdd(num) {

}`,
    typescript: "function countOdd(num: number): number {\n\n}",

    python: `def countOdd(num):
    pass`,
  },
  visibleTests: [
    { args: [7], expected: 4 },
    { args: [15], expected: 8 },
  ],
  hiddenTests: [
    { args: [1], expected: 1 },
    { args: [2], expected: 1 },
    { args: [10], expected: 6 },
    { args: [20], expected: 10 },
  ],
};
