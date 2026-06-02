import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-cost-to-make-all-characters-equal',
  title: 'Minimum Cost to Make All Characters Equal',
  difficulty: 'medium',
  tags: ['strings'],
  description: `You are given a 0-indexed binary string \`s\` of length \`n\` on which you can apply two types of operations:

- Choose an index \`i\` and invert all characters from index \`0\` to index \`i\` (both inclusive), with a cost of \`i + 1\`.
- Choose an index \`i\` and invert all characters from index \`i\` to index \`n - 1\` (both inclusive), with a cost of \`n - i\`.

Return the **minimum cost** to make all characters of the string **equal**.`,
  constraints: [
    '1 <= s.length == n <= 10^6',
    's[i] is either \'0\' or \'1\'.',
  ],
  examples: [
    {
      input: 's = "0011"',
      output: '2',
      explanation: 'Invert s[0..1] (cost 2) to get "1111", or invert s[2..3] (cost 2) to get "0000".',
    },
    {
      input: 's = "010101"',
      output: '9',
      explanation: 'Multiple operations needed; the minimum total cost is 9.',
    },
  ],
  hints: [
    'Scan adjacent pairs. When s[i] != s[i-1], you must pay to fix the boundary.',
    'To fix boundary at i, you can flip the left side (cost i) or the right side (cost n - i).',
    'Take the minimum cost for each boundary that differs.',
  ],
  functionName: 'minimumCost',
  params: ['s'],
  starterCode: {
    javascript: `function minimumCost(s) {
  const n = s.length;
  let cost = 0;
  for (let i = 1; i < n; i++) if (s[i] !== s[i-1]) cost += Math.min(i, n - i);
  return cost;
}`,
    typescript: `function minimumCost(s: string): number {
  const n = s.length;
  let cost = 0;
  for (let i = 1; i < n; i++) if (s[i] !== s[i-1]) cost += Math.min(i, n - i);
  return cost;
}`,
    python: `def minimumCost(s):
    if hasattr(s, 'to_py'): s = str(s)
    n = len(s)
    cost = 0
    for i in range(1, n):
        if s[i] != s[i-1]: cost += min(i, n - i)
    return cost`,
  },
  visibleTests: [
    { args: ['0011'], expected: 2 },
    { args: ['010101'], expected: 9 },
  ],
  hiddenTests: [
    { args: ['0'], expected: 0 },
    { args: ['00'], expected: 0 },
    { args: ['01'], expected: 1 },
    { args: ['1100'], expected: 2 },
    { args: ['0101'], expected: 4 },
  ],
};
