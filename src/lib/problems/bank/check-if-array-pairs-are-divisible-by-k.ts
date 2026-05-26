import type { Problem } from '../types';

export const problem: Problem = {
  id: 'check-if-array-pairs-are-divisible-by-k',
  title: 'Check If Array Pairs Are Divisible by k',
  difficulty: 'medium',
  tags: ['arrays', 'math'],
  description: `Given an array of integers \`arr\` of **even** length \`n\` and an integer \`k\`, we want to divide the array into exactly \`n / 2\` pairs such that the sum of each pair is **divisible by \`k\`**.

Return \`true\` if you can find a way to do that or \`false\` otherwise.`,
  constraints: [
    'arr.length == n',
    '1 <= n <= 10^5',
    'n is even.',
    '-10^9 <= arr[i] <= 10^9',
    '2 <= k <= 10^9',
  ],
  examples: [
    {
      input: 'arr = [1,2,3,4,5,10,6,7,8,9], k = 5',
      output: 'true',
      explanation: 'Pairs: (1,9),(2,8),(3,7),(4,6),(5,10). Each sums to a multiple of 5.',
    },
    {
      input: 'arr = [1,2,3,4,5,6], k = 7',
      output: 'true',
      explanation: 'Pairs: (1,6),(2,5),(3,4). Each sums to 7.',
    },
    {
      input: 'arr = [1,2,3,4,5,6], k = 10',
      output: 'false',
      explanation: 'No valid pairing exists.',
    },
  ],
  hints: [
    'Compute the remainder r = ((x % k) + k) % k for each element to handle negatives.',
    'Remainder 0 must pair with remainder 0 — needs even count.',
    'If k is even, remainder k/2 must pair with k/2 — needs even count.',
    'For all other remainders r, count(r) must equal count(k - r).',
  ],
  functionName: 'canArrange',
  params: ['arr', 'k'],
  starterCode: {
    javascript: 'function canArrange(arr, k) {\n  \n}\n',
    python: 'def canArrange(arr, k):\n    pass\n',
  },
  visibleTests: [
    { args: [[1, 2, 3, 4, 5, 10, 6, 7, 8, 9], 5], expected: true },
    { args: [[1, 2, 3, 4, 5, 6], 7], expected: true },
    { args: [[1, 2, 3, 4, 5, 6], 10], expected: false },
  ],
  hiddenTests: [
    { args: [[2, 2], 2], expected: true },
    { args: [[-1, -1], 2], expected: true },
    { args: [[1, 3], 4], expected: true },
    { args: [[1, 2], 4], expected: false },
    { args: [[-10, 10], 5], expected: true },
  ],
};
