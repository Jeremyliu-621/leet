import type { Problem } from '../types';

export const problem: Problem = {
  id: 'integer-replacement',
  title: 'Integer Replacement',
  difficulty: 'medium',
  tags: ['math'],
  description: `Given a positive integer \`n\`, you can apply one of the following operations:

1. If \`n\` is even, replace \`n\` with \`n / 2\`.
2. If \`n\` is odd, replace \`n\` with either \`n + 1\` or \`n - 1\`.

Return the minimum number of operations needed for \`n\` to become \`1\`.`,
  constraints: [
    '1 <= n <= 2^31 - 1',
  ],
  examples: [
    {
      input: 'n = 8',
      output: '3',
      explanation: '8 → 4 → 2 → 1',
    },
    {
      input: 'n = 7',
      output: '4',
      explanation: '7 → 8 → 4 → 2 → 1 or 7 → 6 → 3 → 2 → 1',
    },
    {
      input: 'n = 4',
      output: '2',
      explanation: '4 → 2 → 1',
    },
  ],
  hints: [
    'Use recursion or BFS. If n is even, the only option is n/2. If n is odd, try both n+1 and n-1.',
    'Bit manipulation: if the last two bits are 11 (e.g. 7 = ...11), increment (rounds up); otherwise decrement.',
    'Special case: n = 3 should go 3 → 2 → 1, not 3 → 4 → 2 → 1.',
  ],
  functionName: 'integerReplacement',
  params: ['n'],
  starterCode: {
    javascript: `function integerReplacement(n) {

}`,
    typescript: "function integerReplacement(n: number): number {\n\n}",

    python: `def integerReplacement(n):
    pass`,
  },
  visibleTests: [
    { args: [8], expected: 3 },
    { args: [7], expected: 4 },
    { args: [4], expected: 2 },
  ],
  hiddenTests: [
    { args: [1], expected: 0 },
    { args: [2], expected: 1 },
    { args: [3], expected: 2 },
    { args: [15], expected: 5 },
    { args: [2147483647], expected: 32 },
  ],
};
