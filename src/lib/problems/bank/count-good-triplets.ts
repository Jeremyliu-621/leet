import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-good-triplets',
  title: 'Count Good Triplets',
  difficulty: 'easy',
  tags: ['arrays'],
  description: `Given an array of integers \`arr\`, and three integers \`a\`, \`b\` and \`c\`. You need to find the number of good triplets.

A triplet \`(arr[i], arr[j], arr[k])\` is **good** if the following conditions are true:

- \`0 <= i < j < k < arr.length\`
- \`|arr[i] - arr[j]| <= a\`
- \`|arr[j] - arr[k]| <= b\`
- \`|arr[i] - arr[k]| <= c\`

where \`|x|\` denotes the absolute value of \`x\`.

Return *the number of good triplets*.`,
  constraints: [
    '3 <= arr.length <= 100',
    '0 <= arr[i] <= 1000',
    '0 <= a, b, c <= 1000',
  ],
  examples: [
    {
      input: 'arr = [3,0,1,1,9,7], a = 7, b = 2, c = 3',
      output: '4',
      explanation: 'Good triplets: (3,0,1), (3,1,1), (0,1,1), (1,1,7) → 4.',
    },
    {
      input: 'arr = [1,1,2,2,3], a = 0, b = 0, c = 1',
      output: '0',
      explanation: 'No good triplets.',
    },
  ],
  hints: [
    'Brute force: check all O(n³) triplets (i, j, k) with i < j < k.',
    'For each triplet, verify all three conditions using absolute value.',
    'Use three nested loops: the outermost iterates `i`, middle iterates `j > i`, innermost iterates `k > j`. Early-continue on the first condition to skip unnecessary checks.',
  ],
  functionName: 'countGoodTriplets',
  params: ['arr', 'a', 'b', 'c'],
  starterCode: {
    javascript: `function countGoodTriplets(arr, a, b, c) {

}`,
    typescript: "function countGoodTriplets(arr: number[], a: number, b: number, c: number): number {\n\n}",

    python: `def countGoodTriplets(arr, a, b, c):
    pass`,
  },
  visibleTests: [
    { args: [[3, 0, 1, 1, 9, 7], 7, 2, 3], expected: 4 },
    { args: [[1, 1, 2, 2, 3], 0, 0, 1], expected: 0 },
  ],
  hiddenTests: [
    { args: [[1, 2, 3], 1, 1, 1], expected: 0 },
    { args: [[1, 1, 1], 0, 0, 0], expected: 1 },
    { args: [[0, 0, 0, 0], 0, 0, 0], expected: 4 },
    { args: [[1, 2, 3, 4, 5], 2, 2, 4], expected: 8 },
    { args: [[7, 3, 7, 3, 12, 1, 12, 2, 3], 5, 8, 1], expected: 12 },
  ],
};
