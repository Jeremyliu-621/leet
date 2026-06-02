import type { Problem } from '../types';

export const problem: Problem = {
  id: 'k-th-factor-of-n',
  title: 'The K-th Factor of N',
  difficulty: 'medium',
  tags: ['arrays', 'math'],
  description: `You are given two positive integers \`n\` and \`k\`. A factor of an integer \`n\` is defined as an integer \`i\` where \`n % i == 0\`.

Consider a list of all factors of \`n\` sorted in **ascending order**, return the \`k\`-th factor in this list or return \`-1\` if \`n\` has less than \`k\` factors.`,
  constraints: [
    '1 <= k <= n <= 1000',
  ],
  examples: [
    {
      input: 'n = 12, k = 3',
      output: '3',
      explanation: 'Factors of 12 are [1, 2, 3, 4, 6, 12]. The 3rd factor is 3.',
    },
    {
      input: 'n = 7, k = 2',
      output: '7',
      explanation: 'Factors of 7 are [1, 7]. The 2nd factor is 7.',
    },
    {
      input: 'n = 4, k = 4',
      output: '-1',
      explanation: 'Factors of 4 are [1, 2, 4]. There are only 3 factors, so return -1.',
    },
  ],
  hints: [
    'Iterate from 1 to n. For each i, check if n % i == 0.',
    'Collect divisors in ascending order since you iterate from small to large.',
    'Return the k-th divisor found, or -1 if fewer than k divisors exist.',
  ],
  functionName: 'kthFactor',
  params: ['n', 'k'],
  starterCode: {
    javascript: `function kthFactor(n, k) {
  for (let i = 1; i <= n; i++) {
    if (n % i === 0 && --k === 0) return i;
  }
  return -1;
}`,
    typescript: `function kthFactor(n: number, k: number): number {
  for (let i = 1; i <= n; i++) {
    if (n % i === 0 && --k === 0) return i;
  }
  return -1;
}`,
    python: `def kthFactor(n, k):
    for i in range(1, n + 1):
        if n % i == 0:
            k -= 1
            if k == 0: return i
    return -1`,
  },
  visibleTests: [
    { args: [12, 3], expected: 3 },
    { args: [7, 2], expected: 7 },
    { args: [4, 4], expected: -1 },
  ],
  hiddenTests: [
    { args: [1, 1], expected: 1 },
    { args: [1, 2], expected: -1 },
    { args: [12, 1], expected: 1 },
    { args: [12, 6], expected: 12 },
    { args: [12, 7], expected: -1 },
    { args: [1000, 1], expected: 1 },
    // 1000 = 2^3 * 5^3 has 16 factors; k=16 returns last factor 1000; k=17 returns -1
    { args: [1000, 16], expected: 1000 },
    { args: [1000, 17], expected: -1 },
    // 36 factors: [1,2,3,4,6,9,12,18,36]; k=5 → 6, k=6 → 9
    { args: [36, 5], expected: 6 },
    { args: [36, 6], expected: 9 },
  ],
};
