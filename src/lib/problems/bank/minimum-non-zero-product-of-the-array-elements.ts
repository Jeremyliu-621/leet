import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-non-zero-product-of-the-array-elements',
  title: 'Minimum Non-Zero Product of the Array Elements',
  difficulty: 'medium',
  tags: ['math', 'bit-manipulation'],
  description: `You are given a positive integer \`p\`. Consider an array \`nums\` consisting of every integer from \`1\` to \`2^p - 1\` (inclusive).

You can perform the following operation on the array **any** number of times:

- Choose two elements \`x\` and \`y\` from \`nums\`, then choose a single bit position \`b\`, and simultaneously set bit \`b\` of \`x\` to \`(x's bit b) XOR (y's bit b)\` and set bit \`b\` of \`y\` to \`(y's bit b) XOR (x's bit b)\`. This effectively swaps the chosen bit between \`x\` and \`y\`.

Return the **minimum non-zero product** of \`nums\` after performing the above operation any number of times. Since the answer may be large, return it **modulo** \`10^9 + 7\`.

**Note:** The result should be the minimum product of the array; if any element becomes 0 during operations it can no longer be used.`,
  constraints: [
    '`1 <= p <= 60`',
  ],
  examples: [
    {
      input: 'p = 3',
      output: '1512',
      explanation: 'nums = [1, 2, ..., 7]. The optimal is to keep 7 intact and make all other 6 elements look like (1, 6) pairs: product = 7 × 6³ = 1512.',
    },
    {
      input: 'p = 2',
      output: '6',
      explanation: 'nums = [1, 2, 3]. Product = 1 × 2 × 3 = 6 is already minimal.',
    },
  ],
  hints: [
    'The key insight: swapping bits lets you concentrate all 1-bits into one element (2^p − 1) while distributing as few bits as possible to the others.',
    'The 2^p − 2 elements other than the maximum can be paired as complements; each complement pair (x, 2^p−1−x) can be rearranged to (1, 2^p−2) minimizing their product.',
    'Answer = (2^p − 1) × (2^p − 2)^(2^(p−1) − 1) mod 10^9 + 7.',
  ],
  functionName: 'minNonZeroProduct',
  params: ['p'],
  starterCode: {
    javascript: `function minNonZeroProduct(p) {

}`,
    typescript: `function minNonZeroProduct(p: number): number {

}`,
    python: `def minNonZeroProduct(p):
    pass`,
  },
  visibleTests: [
    { args: [3], expected: 1512 },
    { args: [2], expected: 6 },
  ],
  hiddenTests: [
    { args: [1], expected: 1 },
    { args: [4], expected: 581202553 },
    { args: [5], expected: 202795991 },
    { args: [10], expected: 586669277 },
    { args: [60], expected: 813987236 },
  ],
};
