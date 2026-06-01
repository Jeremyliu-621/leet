import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-substrings-that-satisfy-k-constraint-i',
  title: 'Count Substrings That Satisfy K-Constraint I',
  difficulty: 'easy',
  tags: ['strings', 'sliding-window'],
  description: `You are given a **binary** string \`s\` and an integer \`k\`.

A binary string satisfies the **k-constraint** if **at least one** of the following conditions holds:
- The number of \`0\`s in the string is at most \`k\`.
- The number of \`1\`s in the string is at most \`k\`.

Return an integer denoting the number of **substrings** of \`s\` that satisfy the k-constraint.`,
  constraints: [
    '1 <= s.length <= 50',
    '1 <= k <= s.length',
    's consists only of \'0\' and \'1\'',
  ],
  examples: [
    {
      input: 's = "10101", k = 1',
      output: '12',
      explanation:
        'Every substring of length ≤ 3 satisfies the constraint (at most 1 zero or at most 1 one). Substrings "1010" and "0101" fail (2 zeros and 2 ones). "10101" also fails. Total: 15 - 3 = 12.',
    },
    {
      input: 's = "1111", k = 1',
      output: '10',
      explanation: 'Every substring has 0 zeros ≤ 1, so all 4+3+2+1 = 10 substrings satisfy.',
    },
  ],
  hints: [
    'Enumerate every substring with two nested loops and count zeros and ones.',
    'A substring satisfies the k-constraint iff (count0 ≤ k OR count1 ≤ k).',
    'Equivalently: a substring FAILS iff both count0 > k AND count1 > k.',
  ],
  functionName: 'countKConstraintSubstrings',
  params: ['s', 'k'],
  starterCode: {
    javascript: `function countKConstraintSubstrings(s, k) {
  let count = 0;
  const n = s.length;
  for (let i = 0; i < n; i++) {
    let zeros = 0, ones = 0;
    for (let j = i; j < n; j++) {
      if (s[j] === '0') zeros++; else ones++;
      if (zeros <= k || ones <= k) count++;
    }
  }
  return count;
}`,
    typescript: `function countKConstraintSubstrings(s: string, k: number): number {
  let count = 0;
  const n = s.length;
  for (let i = 0; i < n; i++) {
    let zeros = 0, ones = 0;
    for (let j = i; j < n; j++) {
      if (s[j] === '0') zeros++; else ones++;
      if (zeros <= k || ones <= k) count++;
    }
  }
  return count;
}`,
    python: `def countKConstraintSubstrings(s, k):
    count = 0
    n = len(s)
    for i in range(n):
        zeros = ones = 0
        for j in range(i, n):
            if s[j] == '0':
                zeros += 1
            else:
                ones += 1
            if zeros <= k or ones <= k:
                count += 1
    return count
`,
  },
  visibleTests: [
    { args: ['10101', 1], expected: 12 },
    { args: ['1111', 1], expected: 10 },
    { args: ['0011', 1], expected: 9 },
  ],
  hiddenTests: [
    { args: ['10101', 1], expected: 12 },
    { args: ['1111', 1], expected: 10 },
    { args: ['0011', 1], expected: 9 },
    { args: ['0000', 1], expected: 10 },
    { args: ['10', 1], expected: 3 },
    { args: ['0110', 2], expected: 10 },
    { args: ['0', 1], expected: 1 },
    { args: ['01', 1], expected: 3 },
  ],
};
