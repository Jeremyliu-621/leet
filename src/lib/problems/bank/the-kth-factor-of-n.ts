import type { Problem } from '../types';

export const problem: Problem = {
  id: 'the-kth-factor-of-n',
  title: 'The kth Factor of n',
  difficulty: 'easy',
  tags: ['math'],
  description: `You are given two positive integers \`n\` and \`k\`. A factor of an integer \`n\` is defined as an integer \`i\` where \`n % i == 0\`.

Consider a list of all factors of \`n\` sorted in **ascending order**. Return *the* \`k\`*th factor* in this list or return \`-1\` if \`n\` has fewer than \`k\` factors.`,
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
      explanation: 'Factors of 4 are [1, 2, 4]. Only 3 factors; return -1.',
    },
  ],
  hints: [
    'Level 1: Iterate i from 1 to n. For each i, if n % i == 0, it\'s a factor. Count up to the kth one.',
    'Level 2: The loop runs at most n times. When you find the kth factor, return it immediately. If the loop finishes without finding k factors, return -1.',
    'Level 3: O(n) time. For the follow-up with n up to 10^12, iterate only up to sqrt(n) and collect both i and n/i. Sort the collected factors. O(sqrt(n)) time.',
  ],
  functionName: 'kthFactor',
  params: ['n', 'k'],
  starterCode: {
    javascript: `function kthFactor(n, k) {

}`,
    typescript: `function kthFactor(n: number, k: number): number {

}`,
    python: `def kthFactor(n, k):
    pass`,
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
    { args: [100, 5], expected: 10 },
    { args: [6, 3], expected: 3 },
  ],
};
