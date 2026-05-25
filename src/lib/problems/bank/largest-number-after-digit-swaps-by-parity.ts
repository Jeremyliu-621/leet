import type { Problem } from '../types';

export const problem: Problem = {
  id: 'largest-number-after-digit-swaps-by-parity',
  title: 'Largest Number After Digit Swaps by Parity',
  difficulty: 'easy',
  tags: ['math'],
  description: `You are given a positive integer \`num\`. You may swap any two digits of \`num\` that have the **same parity** (both odd digits or both even digits).

Return the **largest** possible value of \`num\` after **any** number of swaps.`,
  constraints: [
    '1 <= num <= 10^9',
  ],
  examples: [
    {
      input: 'num = 1234',
      output: '3412',
      explanation: 'Odd digits: 1,3 → sort desc: 3,1. Even digits: 2,4 → sort desc: 4,2. Result: 3412.',
    },
    {
      input: 'num = 65875',
      output: '87655',
      explanation: 'Even positions: 6,8 → 8,6. Odd positions: 5,7,5 → 7,5,5. Result: 87655.',
    },
  ],
  hints: [
    'Collect all odd digits and all even digits separately.',
    'Sort each group descending.',
    'Refill each position with the next digit of its parity.',
  ],
  functionName: 'largestInteger',
  params: ['num'],
  starterCode: {
    javascript: `function largestInteger(num) {

}`,
    python: `def largestInteger(num):
    pass`,
  },
  visibleTests: [
    { args: [1234], expected: 3412 },
    { args: [65875], expected: 87655 },
  ],
  hiddenTests: [
    { args: [1], expected: 1 },
    { args: [2143], expected: 4321 },
    { args: [1111], expected: 1111 },
    { args: [9876], expected: 9876 },
  ],
};
