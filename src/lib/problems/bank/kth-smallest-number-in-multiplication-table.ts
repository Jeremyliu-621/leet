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
  function count(v) {
    let cnt = 0;
    for (let i = 1; i <= m; i++) cnt += Math.min(Math.floor(v / i), n);
    return cnt;
  }
  let lo = 1, hi = m * n;
  while (lo < hi) {
    const mid = (lo + hi) >> 1;
    if (count(mid) >= k) hi = mid;
    else lo = mid + 1;
  }
  return lo;
}`,
    typescript: `function findKthNumber(m: number, n: number, k: number): number {
  function count(v: number): number {
    let cnt = 0;
    for (let i = 1; i <= m; i++) cnt += Math.min(Math.floor(v / i), n);
    return cnt;
  }
  let lo = 1, hi = m * n;
  while (lo < hi) {
    const mid = (lo + hi) >> 1;
    if (count(mid) >= k) hi = mid;
    else lo = mid + 1;
  }
  return lo;
}`,
    python: `def findKthNumber(m, n, k):
    if hasattr(m, 'to_py'): m = m.to_py()
    m, n, k = int(m), int(n), int(k)
    def count(v):
        return sum(min(v // i, n) for i in range(1, m + 1))
    lo, hi = 1, m * n
    while lo < hi:
        mid = (lo + hi) // 2
        if count(mid) >= k: hi = mid
        else: lo = mid + 1
    return lo`,
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
