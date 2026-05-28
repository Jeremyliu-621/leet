import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-substrings-that-satisfy-k-constraint-i',
  title: 'Count Substrings That Satisfy K-Constraint I',
  difficulty: 'easy',
  tags: ['strings', 'sliding-window'],
  description: `You are given a **binary string** \`s\` and a positive integer \`k\`.

A binary string \`x\` is said to **satisfy the k-constraint** if **either** of the following conditions holds:
- The number of \`0\`s in \`x\` is at most \`k\`.
- The number of \`1\`s in \`x\` is at most \`k\`.

Return an integer denoting the number of **substrings** of \`s\` that satisfy the k-constraint.`,
  constraints: [
    '`1 <= s.length <= 50`',
    '`1 <= k <= s.length`',
    '\`s[i]\` is either \`\'0\'\` or \`\'1\'\`.',
  ],
  examples: [
    {
      input: 's = "10101", k = 1',
      output: '12',
      explanation: 'Every substring of length ≤ 2 satisfies (has at most 1 of each digit). Longer substrings "1010", "0101", "10101" have 2 of both, so they fail. Total: 5 + 4 + 3 - 3 = 12. (Actually 15 - 3 = 12.)',
    },
    {
      input: 's = "1010101", k = 2',
      output: '25',
    },
    {
      input: 's = "111", k = 1',
      output: '6',
      explanation: 'Every substring has 0 zeros ≤ k = 1, so all 6 substrings satisfy.',
    },
  ],
  hints: [
    'A substring fails only if it has MORE than k zeros AND MORE than k ones.',
    'For the small constraint (n ≤ 50), an O(n²) brute-force is fine: iterate all pairs (i, j) and count zeros and ones.',
    'Increment count whenever zeros ≤ k OR ones ≤ k.',
  ],
  functionName: 'countKConstraintSubstrings',
  params: ['s', 'k'],
  starterCode: {
    javascript: `function countKConstraintSubstrings(s, k) {

}`,
    typescript: 'function countKConstraintSubstrings(s: string, k: number): number {\n\n}',
    python: `def countKConstraintSubstrings(s, k):
    pass`,
  },
  visibleTests: [
    { args: ['10101', 1], expected: 12 },
    { args: ['1010101', 2], expected: 25 },
    { args: ['111', 1], expected: 6 },
  ],
  hiddenTests: [
    { args: ['0', 1], expected: 1 },
    { args: ['00110', 1], expected: 12 },
    { args: ['101', 2], expected: 6 },
    { args: ['0000', 1], expected: 10 },
    { args: ['1100', 1], expected: 9 },
    { args: ['10', 1], expected: 3 },
  ],
};
