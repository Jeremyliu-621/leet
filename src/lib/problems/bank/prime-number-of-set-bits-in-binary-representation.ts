import type { Problem } from '../types';

export const problem: Problem = {
  id: 'prime-number-of-set-bits-in-binary-representation',
  title: 'Prime Number of Set Bits in Binary Representation',
  difficulty: 'easy',
  tags: ['math', 'bit-manipulation'],
  description: `Given two integers \`left\` and \`right\`, return the **count** of numbers in the inclusive range \`[left, right]\` having a **prime number of set bits** in their binary representation.

Recall that the number of set bits an integer has is the number of \`1\`s present when written in binary.`,
  constraints: [
    '1 <= left <= right <= 10^6',
    '0 <= right - left <= 10^4',
  ],
  examples: [
    {
      input: 'left = 6, right = 10',
      output: '4',
      explanation: '6=110(2 bits✓), 7=111(3 bits✓), 8=1000(1 bit✗), 9=1001(2 bits✓), 10=1010(2 bits✓). Count=4.',
    },
    {
      input: 'left = 10, right = 15',
      output: '5',
      explanation: '10=1010(2✓),11=1011(3✓),12=1100(2✓),13=1101(3✓),14=1110(3✓),15=1111(4✗). Count=5.',
    },
  ],
  hints: [
    'For each number in [left, right], count its set bits using bit manipulation (e.g., n.toString(2).split("0").join("").length or Brian Kernighan\'s algorithm).',
    'Check if the bit count is prime. The possible bit counts are at most 20 (since 10^6 < 2^20), so the relevant primes are {2,3,5,7,11,13,17,19}.',
    'Store the prime set in a Set or bitmask for O(1) lookup, then accumulate the count across the range.',
  ],
  functionName: 'countPrimeSetBits',
  params: ['left', 'right'],
  starterCode: {
    javascript: `function countPrimeSetBits(left, right) {
  // your code here
}`,
    typescript: `function countPrimeSetBits(left: number, right: number): number {
  // your code here
}`,
    python: `def countPrimeSetBits(left, right):
    # your code here
    pass`,
  },
  visibleTests: [
    { args: [6, 10], expected: 4 },
    { args: [10, 15], expected: 5 },
    { args: [1, 1], expected: 0 },
    { args: [1, 5], expected: 2 },
    { args: [13, 19], expected: 5 },
  ],
  hiddenTests: [
    { args: [20, 25], expected: 5 },
    { args: [100, 100], expected: 1 },
    { args: [1, 10], expected: 6 },
    { args: [2, 4], expected: 1 },
    { args: [1000, 1001], expected: 1 },
  ],
};
