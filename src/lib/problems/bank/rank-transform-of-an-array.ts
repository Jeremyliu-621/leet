import type { Problem } from '../types';

export const problem: Problem = {
  id: 'rank-transform-of-an-array',
  title: 'Rank Transform of an Array',
  difficulty: 'easy',
  tags: ['arrays', 'hash-map', 'simulation'],
  description: `Given an integer array \`arr\`, replace each element with its **rank**.

The rank represents how large the element is. The rank has the following rules:
- Rank is an integer starting from 1.
- The larger the element, the larger the rank. If two elements are equal, their rank must be the same.
- Rank should be as small as possible.`,
  constraints: [
    '0 <= arr.length <= 10^5',
    '-10^9 <= arr[i] <= 10^9',
  ],
  examples: [
    {
      input: 'arr = [40,10,20,30]',
      output: '[4,1,2,3]',
      explanation: '10 is the smallest → rank 1; 20 → rank 2; 30 → rank 3; 40 → rank 4.',
    },
    {
      input: 'arr = [100,100,100]',
      output: '[1,1,1]',
      explanation: 'All equal elements get the same rank.',
    },
    {
      input: 'arr = [37,12,28,9,100,56,80,5,12]',
      output: '[5,3,4,2,8,6,7,1,3]',
    },
  ],
  hints: [
    'Sort the unique elements to determine their ranks. Map each unique value to its 1-indexed position in the sorted order.',
    'Create a sorted copy of the array, deduplicate it, and build a Map from value → rank (1-indexed).',
    'Return `arr.map(x => rankMap.get(x))`. Since duplicates get the same rank, deduplication before ranking is critical.',
  ],
  functionName: 'arrayRankTransform',
  params: ['arr'],
  starterCode: {
    javascript: 'function arrayRankTransform(arr) {\n  \n}\n',
    python: 'def arrayRankTransform(arr):\n    pass\n',
  },
  visibleTests: [
    { args: [[40,10,20,30]], expected: [4,1,2,3] },
    { args: [[100,100,100]], expected: [1,1,1] },
    { args: [[37,12,28,9,100,56,80,5,12]], expected: [5,3,4,2,8,6,7,1,3] },
  ],
  hiddenTests: [
    { args: [[]], expected: [] },
    { args: [[1]], expected: [1] },
    { args: [[5,5,5,5,5]], expected: [1,1,1,1,1] },
    { args: [[-3,-1,0,2]], expected: [1,2,3,4] },
    { args: [[1000000000,-1000000000,0]], expected: [3,1,2] },
  ],
};
