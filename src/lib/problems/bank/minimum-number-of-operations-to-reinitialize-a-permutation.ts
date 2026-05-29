import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-number-of-operations-to-reinitialize-a-permutation',
  title: 'Minimum Number of Operations to Reinitialize a Permutation',
  difficulty: 'medium',
  tags: ['simulation', 'arrays'],
  description: `You are given an **even** integer \`n\`. You initially have a permutation \`perm\` of size \`n\` where \`perm[i] == i\` **(0-indexed)**.

In one operation, you will create a new array \`arr\`, and for each \`i\`:

- If \`i % 2 == 0\`, then \`arr[i] = perm[i / 2]\`.
- If \`i % 2 == 1\`, then \`arr[i] = perm[n / 2 + (i - 1) / 2]\`.

You will then assign \`arr\` to \`perm\`.

Return the **minimum** non-zero number of operations you need to perform on \`perm\` to return the permutation to its initial value.`,
  constraints: [
    '2 <= n <= 1000',
    'n is even',
  ],
  examples: [
    {
      input: 'n = 2',
      output: '1',
      explanation: 'After 1 operation perm = [0,1], which is the initial permutation.',
    },
    {
      input: 'n = 6',
      output: '4',
      explanation:
        'perm → [0,3,1,4,2,5] → [0,4,3,2,1,5] → [0,2,4,1,3,5] → [0,1,2,3,4,5]. Back to initial after 4 steps.',
    },
  ],
  hints: [
    'Simulate the operation step by step.',
    'After each operation, check if perm equals [0,1,...,n-1].',
    'Count the steps until perm returns to the identity permutation.',
  ],
  functionName: 'reinitializePermutation',
  params: ['n'],
  starterCode: {
    javascript: `function reinitializePermutation(n) {

}`,
    typescript: `function reinitializePermutation(n: number): number {

}`,
    python: `def reinitializePermutation(n):
    pass`,
  },
  visibleTests: [
    { args: [2], expected: 1 },
    { args: [6], expected: 4 },
  ],
  hiddenTests: [
    { args: [4], expected: 2 },
    { args: [8], expected: 3 },
    { args: [10], expected: 6 },
    { args: [12], expected: 10 },
    { args: [14], expected: 12 },
    { args: [16], expected: 4 },
  ],
};
