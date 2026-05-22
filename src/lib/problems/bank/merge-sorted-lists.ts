import type { Problem } from '../types';

export const problem: Problem = {
  id: 'merge-sorted-lists',
  title: 'Merge Two Sorted Arrays',
  difficulty: 'easy',
  tags: ['two-pointers'],
  description:
    'Given two integer arrays a and b, each sorted in non-decreasing order, merge them into a single sorted array containing every element from both inputs.\n\nA two-pointer walk advances through both arrays at once, always taking the smaller front value next.\n\nReturn the merged array. Both inputs are left unchanged, and either of them may be empty.',
  constraints: [
    '0 <= a.length <= 1000',
    '0 <= b.length <= 1000',
    'a and b are each sorted in non-decreasing order.',
  ],
  examples: [
    {
      input: 'a = [1,3,5], b = [2,4,6]',
      output: '[1,2,3,4,5,6]',
      explanation: 'The two sorted runs interleave into one sorted array.',
    },
    {
      input: 'a = [], b = [1,2]',
      output: '[1,2]',
      explanation: 'Merging with an empty array returns the other array.',
    },
    {
      input: 'a = [1,1], b = [1]',
      output: '[1,1,1]',
    },
  ],
  functionName: 'mergeSortedArrays',
  params: ['a', 'b'],
  starterCode: {
    javascript: 'function mergeSortedArrays(a, b) {\n  // your code here\n}\n',
  },
  visibleTests: [
    { args: [[1, 3, 5], [2, 4, 6]], expected: [1, 2, 3, 4, 5, 6] },
    { args: [[], [1, 2]], expected: [1, 2] },
    { args: [[1, 1], [1]], expected: [1, 1, 1] },
  ],
  hiddenTests: [
    { args: [[], []], expected: [] },
    { args: [[5], []], expected: [5] },
    { args: [[-3, -1, 2], [-2, 0, 4]], expected: [-3, -2, -1, 0, 2, 4] },
    { args: [[1, 2, 3], [4, 5, 6]], expected: [1, 2, 3, 4, 5, 6] },
    { args: [[10], [1, 2, 3]], expected: [1, 2, 3, 10] },
    { args: [[0, 0], [0, 0]], expected: [0, 0, 0, 0] },
  ],
};
