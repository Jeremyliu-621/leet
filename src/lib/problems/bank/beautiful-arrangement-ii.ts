import type { Problem } from '../types';

export const problem: Problem = {
  id: 'beautiful-arrangement-ii',
  title: 'Beautiful Arrangement II',
  difficulty: 'medium',
  tags: ['arrays'],
  description: `Given two integers \`n\` and \`k\`, construct a list \`answer\` of length \`n\` such that it is a permutation of the integers \`[1, n]\` and the number of **distinct absolute differences** between consecutive elements equals exactly \`k\`.

Return *any valid array*. It is guaranteed that an answer exists for the given \`n\` and \`k\`.`,
  constraints: ['1 <= k < n <= 10^4'],
  examples: [
    {
      input: 'n = 3, k = 1',
      output: '[1,2,3]',
      explanation: 'Differences: [1,1]. Only 1 distinct difference.',
    },
    {
      input: 'n = 3, k = 2',
      output: '[1,3,2]',
      explanation: 'Differences: [2,1]. Two distinct differences.',
    },
  ],
  hints: [
    'Use the first k+1 elements to generate k distinct differences by interleaving the smallest and largest remaining values.',
    'For the first k+1 positions, alternate: 1, k+1, 2, k, 3, k-1, ... This produces differences k, k-1, k-2, ..., 1.',
    'Fill the remaining positions with consecutive integers starting at k+2, which all have difference 1 (already counted).',
  ],
  functionName: 'constructArray',
  params: ['n', 'k'],
  starterCode: {
    javascript: `function constructArray(n, k) {

}`,
    python: `def constructArray(n: int, k: int) -> list[int]:
    pass`,
  },
  visibleTests: [
    { args: [3, 1], expected: [1, 2, 3] },
    { args: [3, 2], expected: [1, 3, 2] },
  ],
  hiddenTests: [
    { args: [5, 3], expected: [1, 4, 2, 3, 5] },
    { args: [6, 4], expected: [1, 5, 2, 4, 3, 6] },
    { args: [4, 3], expected: [1, 4, 2, 3] },
    { args: [2, 1], expected: [1, 2] },
    { args: [5, 1], expected: [1, 2, 3, 4, 5] },
  ],
};
