import type { Problem } from '../types';

export const problem: Problem = {
  id: 'kth-smallest-number-in-multiplication-table',
  title: 'Kth Smallest Number in Multiplication Table',
  difficulty: 'hard',
  tags: ['arrays', 'binary-search'],
  description: `Given three integers \`m\`, \`n\`, and \`k\`, return the \`k\`-th smallest element in an \`m × n\` multiplication table.

The multiplication table is indexed from \`1\`: the entry at row \`i\`, column \`j\` is \`i * j\`.

For example, the \`3 × 3\` table is:
\`\`\`
1  2  3
2  4  6
3  6  9
\`\`\`
Sorted: 1, 2, 2, 3, 3, 4, 6, 6, 9. The 5th smallest is **3**.`,
  constraints: [
    '1 <= m, n <= 3 * 10^4',
    '1 <= k <= m * n',
  ],
  examples: [
    {
      input: 'm = 3, n = 3, k = 5',
      output: '3',
      explanation: 'Sorted values: [1,2,2,3,3,4,6,6,9]. The 5th element is 3.',
    },
    {
      input: 'm = 2, n = 3, k = 6',
      output: '6',
      explanation: 'The 2×3 table has values [1,2,3,2,4,6]. Sorted: [1,2,2,3,4,6]. The 6th element is 6.',
    },
  ],
  hints: [
    'Binary search on the answer value v in [1, m*n]. Ask: "how many entries in the table are ≤ v?"',
    'For row i, the number of entries ≤ v is min(floor(v / i), n). Sum over all rows i from 1 to m.',
    'Binary search for the smallest v where count(v) ≥ k. This v is the answer.',
  ],
  functionName: 'findKthNumber',
  params: ['m', 'n', 'k'],
  starterCode: {
    javascript: `function findKthNumber(m, n, k) {
  // your code here
}`,
    typescript: `function findKthNumber(m: number, n: number, k: number): number {
  // your code here
}`,
    python: `def findKthNumber(m, n, k):
    # your code here
    pass`,
  },
  visibleTests: [
    { args: [3, 3, 5], expected: 3 },
    { args: [2, 3, 6], expected: 6 },
    { args: [1, 1, 1], expected: 1 },
    { args: [3, 3, 1], expected: 1 },
    { args: [3, 3, 9], expected: 9 },
  ],
  hiddenTests: [
    { args: [3, 3, 4], expected: 3 },
    { args: [5, 5, 7], expected: 4 },
    { args: [2, 3, 3], expected: 2 },
    { args: [6, 7, 25], expected: 14 },
    { args: [5, 3, 11], expected: 8 },
    { args: [9, 9, 81], expected: 81 },
    { args: [4, 4, 8], expected: 4 },
    { args: [100, 100, 1000], expected: 231 },
    { args: [3, 3, 2], expected: 2 },
    { args: [3, 3, 6], expected: 4 },
  ],
};
