import type { Problem } from '../types';

export const problem: Problem = {
  id: 'number-of-integers-with-even-digit-sum',
  title: 'Number of Integers in the Range [1, num] with Even Digit Sum',
  difficulty: 'easy',
  tags: ['math'],
  description: `Given a positive integer \`num\`, return the number of positive integers in the range \`[1, num]\` whose **digit sum** is **even**.

The **digit sum** of a positive integer is the sum of all its digits.`,
  constraints: [
    '1 <= num <= 1000',
  ],
  examples: [
    {
      input: 'num = 4',
      output: '2',
      explanation: '1 → digit sum 1 (odd). 2 → digit sum 2 (even ✓). 3 → digit sum 3 (odd). 4 → digit sum 4 (even ✓). Count: 2.',
    },
    {
      input: 'num = 30',
      output: '14',
      explanation: 'Integers with even digit sum in [1..30]: 2, 4, 6, 8, 11, 13, 15, 17, 19, 20, 22, 24, 26, 28 → 14 total.',
    },
  ],
  hints: [
    'Observe that in every pair of consecutive integers (1,2), (3,4), ..., exactly one has an even digit sum, except at boundaries like 9→10 or 19→20.',
    'Key insight: among integers 1..n, if the digit sum of n is even, the count is n÷2; if odd, the count is (n-1)÷2.',
    'This works because within any 10-block, digit sums alternate parity in pairs, and the parity of the digit sum of n determines whether the count rounds up or down.',
  ],
  functionName: 'countEven',
  params: ['num'],
  starterCode: {
    javascript: `function countEven(num) {
  // your code here
}`,
    typescript: 'function countEven(num: number): number {\n  // your code here\n}',
    python: `def countEven(num):
    # your code here
    pass`,
  },
  visibleTests: [
    { args: [4], expected: 2 },
    { args: [30], expected: 14 },
  ],
  hiddenTests: [
    { args: [1], expected: 0 },
    { args: [2], expected: 1 },
    { args: [10], expected: 4 },
    { args: [13], expected: 6 },
    { args: [100], expected: 49 },
    { args: [1000], expected: 499 },
  ],
};
