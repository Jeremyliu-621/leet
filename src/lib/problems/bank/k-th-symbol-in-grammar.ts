import type { Problem } from '../types';

export const problem: Problem = {
  id: 'k-th-symbol-in-grammar',
  title: 'K-th Symbol in Grammar',
  difficulty: 'medium',
  tags: ['math', 'backtracking'],
  description: `We build a table of \`n\` rows (1-indexed). We start by writing \`0\` in the 1st row. Now in every subsequent row, we look at the previous row and replace each occurrence of \`0\` with \`01\`, and each occurrence of \`1\` with \`10\`.

- For example, for \`n = 3\`, the 1st row is \`0\`, the 2nd row is \`01\`, and the 3rd row is \`0110\`.

Given two integer \`n\` and \`k\`, return the \`k\`-th (**1-indexed**) symbol in the \`n\`-th row of a table of \`n\` rows.`,
  constraints: [
    '`1 <= n <= 30`',
    '`1 <= k <= 2^(n-1)`',
  ],
  examples: [
    {
      input: 'n = 1, k = 1',
      output: '0',
    },
    {
      input: 'n = 2, k = 1',
      output: '0',
    },
    {
      input: 'n = 2, k = 2',
      output: '1',
    },
  ],
  hints: [
    'Think recursively: the k-th symbol in row n is derived from the ⌈k/2⌉-th symbol in row n-1.',
    'If k is odd, the symbol equals its parent. If k is even, the symbol is flipped from its parent.',
    'Base case: kthGrammar(1, 1) = 0.',
  ],
  functionName: 'kthGrammar',
  params: ['n', 'k'],
  starterCode: {
    javascript: 'function kthGrammar(n, k) {\n  \n}\n',
    typescript: "function kthGrammar(n: number, k: number): number {\n  \n}",

    python: 'def kthGrammar(n, k):\n    pass\n',
  },
  visibleTests: [
    { args: [1, 1], expected: 0 },
    { args: [2, 1], expected: 0 },
    { args: [2, 2], expected: 1 },
  ],
  hiddenTests: [
    { args: [3, 1], expected: 0 },
    { args: [3, 2], expected: 1 },
    { args: [3, 3], expected: 1 },
    { args: [3, 4], expected: 0 },
    { args: [4, 5], expected: 1 },
    { args: [4, 7], expected: 0 },
    { args: [5, 11], expected: 0 },
    { args: [30, 434991989], expected: 0 },
  ],
};
