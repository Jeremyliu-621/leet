import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-even-numbers',
  title: 'Count Integers With Even Digit Sum',
  difficulty: 'easy',
  tags: ['math'],
  description: `Given a positive integer \`num\`, return the number of positive integers **less than or equal to** \`num\` whose digit sum is **even**.

The **digit sum** of a positive integer is the sum of all its digits.

**Example:** For \`num = 30\`, the integers with even digit sum up to 30 include 2, 4, 6, 8, 11, 13, 15, 17, 19, 20, 22, 24, 26, 28 — a total of **14**.`,
  constraints: [
    '`1 <= num <= 1000`',
  ],
  examples: [
    {
      input: 'num = 30',
      output: '14',
      explanation: 'Numbers with even digit sum ≤ 30: 2, 4, 6, 8, 11, 13, 15, 17, 19, 20, 22, 24, 26, 28 → 14 numbers.',
    },
    {
      input: 'num = 1',
      output: '0',
      explanation: 'Only 1 exists, and its digit sum is 1 (odd), so the answer is 0.',
    },
  ],
  hints: [
    'Iterate through every integer from 1 to `num`. For each, compute its digit sum by splitting into individual digits.',
    'To extract digits, repeatedly take `n % 10` and divide by 10 (integer division), accumulating the sum. Check if the total is even.',
    'The digit sum of a number alternates in parity as the number increments by 1 — unless there is a carry (e.g., 9 → 10, 19 → 20). You can directly count without iteration using math, but a simple loop is clean and fast enough for `num ≤ 1000`.',
  ],
  functionName: 'countEven',
  params: ['num'],
  starterCode: {
    javascript: `function countEven(num) {
  let count = 0;
  for (let i = 1; i <= num; i++) {
    const digitSum = String(i).split('').reduce((s, d) => s + Number(d), 0);
    if (digitSum % 2 === 0) count++;
  }
  return count;
}`,
    typescript: `function countEven(num: number): number {
  let count = 0;
  for (let i = 1; i <= num; i++) {
    const digitSum = String(i).split('').reduce((s, d) => s + Number(d), 0);
    if (digitSum % 2 === 0) count++;
  }
  return count;
}`,
    python: `def countEven(num: int) -> int:
    return sum(1 for i in range(1, num + 1) if sum(int(d) for d in str(i)) % 2 == 0)`,
  },
  visibleTests: [
    { args: [30], expected: 14 },
    { args: [1], expected: 0 },
    { args: [5], expected: 2 },
  ],
  hiddenTests: [
    { args: [10], expected: 4 },
    { args: [100], expected: 49 },
    { args: [1000], expected: 499 },
    { args: [2], expected: 1 },
    { args: [20], expected: 10 },
  ],
};
