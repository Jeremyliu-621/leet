import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-substrings-that-satisfy-k-constraint-ii',
  title: 'Count Substrings That Satisfy K-Constraint II',
  difficulty: 'hard',
  tags: ['strings', 'sliding-window', 'binary-search', 'two-pointers'],
  description: `You are given a binary string \`s\` and an integer \`k\`. You are also given a 2D integer array \`queries\`, where \`queries[i] = [l_i, r_i]\`.

A binary string satisfies the **k-constraint** if **either** of the following conditions holds:
- The number of \`0\`s in the string is at most \`k\`.
- The number of \`1\`s in the string is at most \`k\`.

For each query \`[l, r]\`, find the **count of substrings** of \`s[l..r]\` (using 0-indexed positions) that satisfy the k-constraint.

Return an integer array \`answer\` where \`answer[i]\` is the answer to the \`i\`-th query.`,
  constraints: [
    '1 <= s.length <= 10^5',
    '1 <= k <= s.length',
    '1 <= queries.length <= 10^5',
    '0 <= l_i <= r_i < s.length',
    's consists only of characters \'0\' and \'1\'.',
  ],
  examples: [
    {
      input: 's = "0001111", k = 2, queries = [[0,6]]',
      output: '[26]',
      explanation: 'All 28 substrings of s[0..6] except "0001111" (4 zeros, 7 ones — 4>2 and 7>2) and "001111" (2 zeros, 4 ones — 2<=2 so OK!) ... actually only substrings with more than k zeros AND more than k ones fail. Out of 28 substrings, 2 fail: "0001111" (4>2 and 7>2) and "001111" (2<=2, passes). So 26 pass.',
    },
    {
      input: 's = "0110110", k = 1, queries = [[0,6],[0,3],[2,5]]',
      output: '[21,9,10]',
      explanation: 'For each query, count substrings within the specified range that have at most 1 zero OR at most 1 one.',
    },
  ],
  hints: [
    'For each position i, precompute minLeft[i]: the smallest left boundary j such that s[j..i] satisfies the k-constraint. Use a sliding window.',
    'minLeft is non-decreasing, so for a query [l, r], there is a threshold p where minLeft[i] < l for i < p and minLeft[i] >= l for i >= p. Binary search for p.',
    'Precompute prefix sums of (i - minLeft[i] + 1) so you can answer range queries in O(1).',
    'For i in [l, p-1]: the valid window is clipped to l, contributing (i - l + 1) each. The sum 1+2+...+(p-l) = (p-l)*(p-l+1)/2. For i in [p, r]: use prefA[r+1] - prefA[p].',
  ],
  functionName: 'countKConstraintSubstrings',
  params: ['s', 'k', 'queries'],
  starterCode: {
    javascript: `function countKConstraintSubstrings(s, k, queries) {

}`,
    typescript: `function countKConstraintSubstrings(s: string, k: number, queries: number[][]): number[] {

}`,
    python: `def countKConstraintSubstrings(s, k, queries):
    pass`,
  },
  visibleTests: [
    { args: ['0001111', 2, [[0, 6]]], expected: [26] },
    { args: ['0110110', 1, [[0, 6], [0, 3], [2, 5]]], expected: [21, 9, 10] },
    { args: ['0', 1, [[0, 0]]], expected: [1] },
    { args: ['01', 1, [[0, 1], [0, 0], [1, 1]]], expected: [3, 1, 1] },
  ],
  hiddenTests: [
    { args: ['0101010', 1, [[0, 6], [1, 5], [2, 4]]], expected: [18, 12, 6] },
    { args: ['111', 2, [[0, 2]]], expected: [6] },
    { args: ['10101', 1, [[0, 4], [1, 3]]], expected: [12, 6] },
    { args: ['0', 0, [[0, 0]]], expected: [1] },
    { args: ['11', 1, [[0, 1]]], expected: [3] },
    { args: ['00', 1, [[0, 1]]], expected: [3] },
    { args: ['0101010', 2, [[0, 6]]], expected: [25] },
  ],
};
