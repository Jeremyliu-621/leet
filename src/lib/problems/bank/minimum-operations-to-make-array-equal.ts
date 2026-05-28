import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-operations-to-make-array-equal',
  title: 'Minimum Operations to Make Array Equal',
  difficulty: 'medium',
  tags: ['arrays', 'math'],
  description: `You have an array \`arr\` of length \`n\` where \`arr[i] = (2 * i) + 1\` for all valid values of \`i\` (i.e., \`arr = [1, 3, 5, ..., 2n - 1]\`).

In one operation, you can select two indices \`x\` and \`y\` where \`0 <= x, y < n\` and subtract \`1\` from \`arr[x]\` and add \`1\` to \`arr[y]\` (the operation may be applied as long as \`arr[x] - 1 >= 0\`). The goal is to make all the elements of the array equal.

Given \`n\`, return the **minimum number of operations** needed to make all the elements of \`arr\` equal.`,
  constraints: ['1 <= n <= 10^4'],
  examples: [
    {
      input: 'n = 3',
      output: '2',
      explanation:
        'arr = [1,3,5]. Target: all equal to 3. Move 2 from arr[2] to arr[0]: 2 operations.',
    },
    {
      input: 'n = 6',
      output: '9',
      explanation:
        'arr = [1,3,5,7,9,11]. Target: all equal to 6. Elements below 6 need a total of 5+3+1 = 9 units added.',
    },
  ],
  hints: [
    'The target value is always n (the mean of the arithmetic sequence).',
    'Count how many total increments are needed for elements below the target: sum of (n - arr[i]) for all arr[i] < n.',
    'The pattern simplifies to a closed-form formula: floor(n * n / 4).',
  ],
  functionName: 'minOperations',
  params: ['n'],
  starterCode: {
    javascript: 'function minOperations(n) {\n  \n}\n',
    python: 'def minOperations(n):\n    pass\n',
  },
  visibleTests: [
    { args: [3], expected: 2 },
    { args: [6], expected: 9 },
    { args: [1], expected: 0 },
  ],
  hiddenTests: [
    { args: [2], expected: 1 },
    { args: [4], expected: 4 },
    { args: [5], expected: 6 },
    { args: [10], expected: 25 },
  ],
};
