import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-substrings-that-satisfy-k-constraint-i',
  title: 'Count Substrings That Satisfy K-Constraint I',
  difficulty: 'easy',
  tags: ['strings', 'sliding-window'],
  description: `You are given a **binary** string \`s\` and an integer \`k\`.

A **binary string** satisfies the **k-constraint** if **either** of the following conditions holds:
- The number of \`0\`'s in the string is at most \`k\`.
- The number of \`1\`'s in the string is at most \`k\`.

Return an integer denoting the number of substrings of \`s\` that satisfy the **k-constraint**.`,
  constraints: [
    '1 <= s.length <= 50',
    '1 <= k <= s.length',
    's[i] is either \'0\' or \'1\'',
  ],
  examples: [
    {
      input: 's = "10101", k = 1',
      output: '12',
      explanation: 'Every substring of length 1 satisfies the constraint (6 substrings since length=5). Substrings of length 2: "10","01","10","01" — each has one 0 and one 1, both ≤ k=1. All 4 satisfy. Substrings of length 3: "101","010","101" — "101" has 1 zero and 2 ones; 1≤1 ✓. "010" has 2 zeros and 1 one; 1≤1 ✓. All 3 satisfy. So total = 5+4+3 = 12.',
    },
    {
      input: 's = "1010101", k = 2',
      output: '25',
    },
  ],
  hints: [
    'For each pair of indices (i, j), check if the substring s[i..j] satisfies the k-constraint.',
    'Count zeros and ones in s[i..j]; the constraint holds if zeros ≤ k OR ones ≤ k.',
    'Use a sliding window to count efficiently.',
  ],
  functionName: 'countKConstraintSubstrings',
  params: ['s', 'k'],
  starterCode: {
    javascript: `function countKConstraintSubstrings(s, k) {\n\n}`,
    python: `def countKConstraintSubstrings(s: str, k: int) -> int:\n    pass`,
    typescript: `function countKConstraintSubstrings(s: string, k: number): number {\n\n}`,
  },
  visibleTests: [
    { args: ['10101', 1], expected: 12 },
    { args: ['1010101', 2], expected: 25 },
  ],
  hiddenTests: [
    { args: ['0', 1], expected: 1 },
    { args: ['1', 1], expected: 1 },
    { args: ['00', 1], expected: 3 },
    { args: ['11', 1], expected: 3 },
    { args: ['000', 1], expected: 6 },
    { args: ['0101', 1], expected: 9 },
  ],
};
