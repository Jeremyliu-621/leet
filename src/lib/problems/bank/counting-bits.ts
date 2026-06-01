import type { Problem } from '../types';

export const problem: Problem = {
  id: 'counting-bits',
  title: 'Counting Bits',
  difficulty: 'easy',
  tags: ['bit-manipulation', 'dynamic-programming', 'math'],
  description: `Given an integer \`n\`, return an array \`ans\` of length \`n + 1\` where \`ans[i]\` is the number of 1's in the binary representation of \`i\`.

Solve it in **O(n)** time — do not call a built-in popcount function for each number independently.`,
  constraints: [
    '0 <= n <= 100000',
  ],
  examples: [
    {
      input: 'n = 2',
      output: '[0, 1, 1]',
      explanation: '0 → 0 ones, 1 → 1 one, 2 (10) → 1 one.',
    },
    {
      input: 'n = 5',
      output: '[0, 1, 1, 2, 1, 2]',
      explanation: '0→0, 1→1, 2→1, 3→2, 4→1, 5→2.',
    },
  ],
  hints: [
    'Think about the relationship between `i` and `i >> 1` (right-shift by 1). Shifting right drops the least-significant bit, so the bit count of `i` equals the bit count of `i >> 1` plus whether the LSB is 1.',
    '`ans[i] = ans[i >> 1] + (i & 1)`. Since `i >> 1 < i`, you always have the answer for the smaller number already computed.',
    '`const ans = new Array(n + 1).fill(0); for (let i = 1; i <= n; i++) ans[i] = ans[i >> 1] + (i & 1); return ans;`',
  ],
  functionName: 'countBits',
  params: ['n'],
  starterCode: {
    javascript: `function countBits(n) {
  const ans = new Array(n + 1).fill(0);
  for (let i = 1; i <= n; i++) ans[i] = ans[i >> 1] + (i & 1);
  return ans;
}`,
    typescript: `function countBits(n: number): number[] {
  const ans: number[] = new Array(n + 1).fill(0);
  for (let i = 1; i <= n; i++) ans[i] = ans[i >> 1]! + (i & 1);
  return ans;
}`,
    python: `def countBits(n):
    ans = [0] * (n + 1)
    for i in range(1, n + 1):
        ans[i] = ans[i >> 1] + (i & 1)
    return ans`,
  },
  visibleTests: [
    { args: [2], expected: [0, 1, 1] },
    { args: [5], expected: [0, 1, 1, 2, 1, 2] },
  ],
  hiddenTests: [
    { args: [0], expected: [0] },
    { args: [1], expected: [0, 1] },
    { args: [4], expected: [0, 1, 1, 2, 1] },
  ],
};
