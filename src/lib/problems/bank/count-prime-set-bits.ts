import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-prime-set-bits',
  title: 'Prime Number of Set Bits in Binary Representation',
  difficulty: 'easy',
  tags: ['math'],
  description: `Given two integers \`left\` and \`right\`, return the **count** of numbers in the inclusive range \`[left, right]\` whose binary representation has a **prime** number of set bits.

A **set bit** is a bit equal to \`1\`. A number is **prime** if it is greater than 1 and has no positive divisors other than 1 and itself.

**Example:** 10 in binary is \`1010\`, which has 2 set bits. Since 2 is prime, 10 contributes to the count.`,
  constraints: ['1 <= left <= right <= 10^6', '0 <= right - left <= 10^4'],
  examples: [
    {
      input: 'left = 6, right = 10',
      output: '4',
      explanation:
        '6 = 110 (2 bits) ✓, 7 = 111 (3 bits) ✓, 8 = 1000 (1 bit) ✗, 9 = 1001 (2 bits) ✓, 10 = 1010 (2 bits) ✓. Four numbers have a prime number of set bits.',
    },
    {
      input: 'left = 10, right = 15',
      output: '5',
      explanation:
        '10 = 1010 (2) ✓, 11 = 1011 (3) ✓, 12 = 1100 (2) ✓, 13 = 1101 (3) ✓, 14 = 1110 (3) ✓, 15 = 1111 (4) ✗. Five numbers qualify.',
    },
  ],
  hints: [
    'For each number in the range, count its set bits using Brian Kernighan\'s algorithm or `n.toString(2).split("0").join("").length`.',
    'The maximum set-bit count for numbers up to 10^6 is 20. The primes up to 20 are {2, 3, 5, 7, 11, 13, 17, 19} — you can hardcode this small set.',
    'Iterate from `left` to `right`, count set bits for each, and increment the answer if the count is in the prime set.',
  ],
  functionName: 'countPrimeSetBits',
  params: ['left', 'right'],
  starterCode: {
    javascript: 'function countPrimeSetBits(left, right) {\n  // your code here\n}\n',
    typescript: "function countPrimeSetBits(left: number, right: number): number {\n  // your code here\n}",

    python: 'def countPrimeSetBits(left, right):\n    # your code here\n    pass\n',
  },
  visibleTests: [
    { args: [6, 10], expected: 4 },
    { args: [10, 15], expected: 5 },
  ],
  hiddenTests: [
    { args: [1, 1], expected: 0 },
    { args: [2, 2], expected: 0 },
    { args: [1, 10], expected: 6 },
    { args: [100, 120], expected: 10 },
    { args: [1, 100], expected: 65 },
  ],
};
