import type { Problem } from '../types';

export const problem: Problem = {
  id: 'merge-k-sorted-arrays',
  title: 'Merge K Sorted Arrays',
  difficulty: 'medium',
  tags: ['arrays', 'heap'],
  description: `You are given \`k\` sorted integer arrays. Merge them all into one **sorted** array and return it.

Each individual array is already sorted in non-decreasing order.`,
  constraints: [
    '1 <= k <= 500',
    '0 <= arrays[i].length <= 500',
    '-10^4 <= arrays[i][j] <= 10^4',
    'Total number of elements across all arrays <= 10^4',
  ],
  examples: [
    {
      input: 'arrays = [[1,4,7],[2,5,8],[3,6,9]]',
      output: '[1,2,3,4,5,6,7,8,9]',
      explanation: 'Interleave elements from all three sorted arrays.',
    },
    {
      input: 'arrays = [[1,2,3],[4,5,6]]',
      output: '[1,2,3,4,5,6]',
      explanation: 'The two arrays are already in order relative to each other.',
    },
    {
      input: 'arrays = [[]]',
      output: '[]',
      explanation: 'Empty array yields empty output.',
    },
  ],
  hints: [
    'Use a min-heap that stores triples of `(value, arrayIndex, elementIndex)`. Initialize by pushing the first element of each non-empty array.',
    'Repeatedly extract the minimum element from the heap, add it to the result, then push the next element from the same array (if any remains).',
    'This runs in O(n log k) time where n is the total number of elements, since each element is pushed/popped from the heap exactly once.',
  ],
  functionName: 'mergeKSortedArrays',
  params: ['arrays'],
  starterCode: {
    javascript: `function mergeKSortedArrays(arrays) {\n  \n}`,
    typescript: "function mergeKSortedArrays(arrays: number[][]): number[] {\n  \n}",

    python: `def mergeKSortedArrays(arrays):\n    pass`,
  },
  visibleTests: [
    { args: [[[1,4,7],[2,5,8],[3,6,9]]], expected: [1,2,3,4,5,6,7,8,9] },
    { args: [[[1,2,3],[4,5,6]]], expected: [1,2,3,4,5,6] },
    { args: [[[]]], expected: [] },
    { args: [[[1],[2],[3]]], expected: [1,2,3] },
  ],
  hiddenTests: [
    { args: [[[1,3,5],[2,4,6],[0,7,8]]], expected: [0,1,2,3,4,5,6,7,8] },
    { args: [[[],[1,2]]], expected: [1,2] },
    { args: [[[5],[1],[3],[2],[4]]], expected: [1,2,3,4,5] },
    { args: [[[1,1,1],[1,1]]], expected: [1,1,1,1,1] },
    { args: [[[1,2],[3,4],[5,6],[7,8]]], expected: [1,2,3,4,5,6,7,8] },
  ],
};
