import type { Problem } from '../types';

export const problem: Problem = {
  id: 'smallest-value-after-replacing-with-sum-of-prime-factors',
  title: 'Smallest Value After Replacing With Sum of Prime Factors',
  difficulty: 'medium',
  tags: ['math'],
  description: `You are given a positive integer \`n\`.

Continuously replace \`n\` with the **sum of its prime factors** (counting multiplicity). Return the **smallest** value \`n\` will take.

**Note:** A number's prime factors are all the prime numbers that divide it (with repetition allowed). For example, the prime factors of 12 are \`[2, 2, 3]\`, so the sum is \`2 + 2 + 3 = 7\`.`,
  constraints: [
    '`2 <= n <= 10^5`',
  ],
  examples: [
    {
      input: 'n = 15',
      output: '5',
      explanation: '15 → 3+5=8 → 2+2+2=6 → 2+3=5 → 5 (fixed point).',
    },
    {
      input: 'n = 4',
      output: '4',
      explanation: '4 → 2+2=4 (fixed point).',
    },
  ],
  hints: [
    'Factorize n by trial division, summing each prime factor with multiplicity.',
    'Repeat until the sum equals n (fixed point reached).',
    'A prime p is its own fixed point: sum of prime factors = p.',
  ],
  functionName: 'smallestValue',
  params: ['n'],
  starterCode: {
    javascript: `function smallestValue(n) {

}`,
    typescript: `function smallestValue(n: number): number {

}`,
    python: `def smallestValue(n):
    pass`,
  },
  visibleTests: [
    { args: [15], expected: 5 },
    { args: [4], expected: 4 },
  ],
  hiddenTests: [
    { args: [2], expected: 2 },
    { args: [3], expected: 3 },
    { args: [9], expected: 5 },
    { args: [12], expected: 7 },
    { args: [100], expected: 5 },
  ],
};
