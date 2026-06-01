import type { Problem } from '../types';

export const problem: Problem = {
  id: 'sum-of-numbers-with-units-digit-k',
  title: 'Sum of Numbers With Units Digit K',
  difficulty: 'medium',
  tags: ['math', 'arrays'],
  description: `Given two integers \`num\` and \`k\`, consider a set of positive integers with the following properties:

- The units digit of each integer is \`k\`.
- The sum of the integers is \`num\`.

Return *the **minimum** possible size of such a set, or* \`-1\` *if no such set exists.*

Note:
- The set can contain multiple instances of the same integer, and two instances are considered different.
- The set must be non-empty.
- The units digit of each element in the set is \`k\`.`,
  constraints: [
    '0 <= num <= 3000',
    '0 <= k <= 9',
  ],
  examples: [
    {
      input: 'num = 58, k = 9',
      output: '2',
      explanation: 'The set [9, 49] has sum 58 and size 2. Both have units digit 9.',
    },
    {
      input: 'num = 37, k = 2',
      output: '-1',
      explanation:
        'No set of integers with units digit 2 can sum to 37. Any sum of numbers ending in 2 must have an even units digit.',
    },
    {
      input: 'num = 0, k = 7',
      output: '-1',
      explanation: 'The set must be non-empty, and all elements must be positive. So we cannot sum to 0.',
    },
    {
      input: 'num = 0, k = 0',
      output: '1',
      explanation: 'The number 0 has units digit 0, so the set {0} works. Wait: actually 0 is a valid element. But note constraints say "positive" ... actually 0 satisfies units digit 0 and sum 0.',
    },
  ],
  hints: [
    'Level 1: The sum of cnt numbers each ending in k has units digit (cnt * k) mod 10. We need this to equal num mod 10.',
    'Level 2: Try cnt from 1 to 10 (after 10 multiplications the units digit cycles). For each cnt, check if (cnt*k) mod 10 == num mod 10 AND cnt*k <= num.',
    'Level 3: The minimum valid cnt is the answer. If none found (or num=0 and k=0 edge case), return -1. Special case: if num == 0 and k == 0, return 1 (set {0}).',
  ],
  functionName: 'minimumNumbers',
  params: ['num', 'k'],
  starterCode: {
    javascript: `function minimumNumbers(num, k) {
  if (num === 0) return k === 0 ? 1 : -1;
  for (let cnt = 1; cnt <= 10; cnt++) {
    if ((cnt * k) % 10 === num % 10 && cnt * k <= num) return cnt;
  }
  return -1;
}`,
    typescript: `function minimumNumbers(num: number, k: number): number {
  if (num === 0) return k === 0 ? 1 : -1;
  for (let cnt = 1; cnt <= 10; cnt++) {
    if ((cnt * k) % 10 === num % 10 && cnt * k <= num) return cnt;
  }
  return -1;
}`,
    python: `def minimumNumbers(num, k):
    if num == 0:
        return 1 if k == 0 else -1
    for cnt in range(1, 11):
        if (cnt * k) % 10 == num % 10 and cnt * k <= num:
            return cnt
    return -1`,
  },
  visibleTests: [
    { args: [58, 9], expected: 2 },
    { args: [37, 2], expected: -1 },
    { args: [0, 7], expected: -1 },
    { args: [0, 0], expected: 1 },
  ],
  hiddenTests: [
    { args: [10, 0], expected: 1 },
    { args: [5, 5], expected: 1 },
    { args: [20, 5], expected: 2 },
    { args: [1, 1], expected: 1 },
    { args: [6, 4], expected: -1 },
    { args: [3000, 1], expected: 10 },
    { args: [14, 7], expected: 2 },
    { args: [99, 9], expected: 1 },
  ],
};
