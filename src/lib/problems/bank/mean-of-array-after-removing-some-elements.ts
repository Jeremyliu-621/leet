import type { Problem } from '../types';

export const problem: Problem = {
  id: 'mean-of-array-after-removing-some-elements',
  title: 'Mean of Array After Removing Some Elements',
  difficulty: 'easy',
  tags: ['arrays'],
  description: `Given an integer array \`arr\`, return the **mean** of the remaining integers after removing the smallest \`5%\` and the largest \`5%\` of the elements.

Answers within \`10^-5\` of the actual answer will be accepted.`,
  constraints: [
    '`20 <= arr.length <= 1000`',
    '`arr.length\` is a multiple of \`20\`.',
    '`0 <= arr[i] <= 10^5`',
  ],
  examples: [
    {
      input: 'arr = [1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3]',
      output: '2.00000',
      explanation: 'After removing the smallest (1) and largest (3), all remaining are 2.',
    },
    {
      input: 'arr = [6,2,7,5,1,2,0,3,10,2,5,0,5,5,0,8,7,6,8,0]',
      output: '4.00000',
      explanation: 'After removing 5% smallest (1 element) and 5% largest (1 element), the mean of the remaining 18 is 4.',
    },
  ],
  hints: [
    'Sort the array. Then remove the first `n * 0.05` and last `n * 0.05` elements.',
    'Compute the mean of the remaining slice.',
    '```js\nfunction trimMean(arr) {\n  arr.sort((a, b) => a - b);\n  const n = arr.length;\n  const trim = n * 0.05;\n  const sliced = arr.slice(trim, n - trim);\n  return sliced.reduce((a, b) => a + b, 0) / sliced.length;\n}\n```',
  ],
  functionName: 'trimMean',
  params: ['arr'],
  starterCode: {
    javascript: `function trimMean(arr) {

}`,
    typescript: `function trimMean(arr: number[]): number {

}`,
    python: `def trimMean(arr):
    pass`,
  },
  visibleTests: [
    { args: [[1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3]], expected: 2 },
    { args: [[6, 2, 7, 5, 1, 2, 0, 3, 10, 2, 5, 0, 5, 5, 0, 8, 7, 6, 8, 0]], expected: 4 },
  ],
  hiddenTests: [
    { args: [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1]], expected: 0 },
    { args: [[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2]], expected: 1 },
  ],
};
