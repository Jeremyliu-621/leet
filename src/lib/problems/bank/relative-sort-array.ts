import type { Problem } from '../types';

export const problem: Problem = {
  id: 'relative-sort-array',
  title: 'Relative Sort Array',
  difficulty: 'easy',
  tags: ['arrays', 'hash-map'],
  description: `Given two arrays \`arr1\` and \`arr2\`, the elements of \`arr2\` are **distinct**, and all elements in \`arr2\` are also in \`arr1\`.

Sort the elements of \`arr1\` such that the relative ordering of items in \`arr1\` are the same as in \`arr2\`. Elements that do not appear in \`arr2\` should be placed at the end of \`arr1\` in **ascending** order.`,
  constraints: [
    '`1 <= arr1.length, arr2.length <= 1000`',
    '`0 <= arr1[i], arr2[i] <= 1000`',
    'All the elements of \`arr2\` are **distinct**.',
    'Each \`arr2[i]\` is in \`arr1\`.',
  ],
  examples: [
    {
      input: 'arr1 = [2,3,1,3,2,4,6,7,9,2,19], arr2 = [2,1,4,3,9,6]',
      output: '[2,2,2,1,4,3,3,9,6,7,19]',
      explanation: 'Elements in arr2 order first, then remaining (7,19) sorted ascending.',
    },
    {
      input: 'arr1 = [28,6,22,8,44,17], arr2 = [22,28,8,6]',
      output: '[22,28,8,6,17,44]',
    },
  ],
  hints: [
    'Build a map of arr2 element → position. Sort arr1 using a custom comparator: elements in arr2 sort by their arr2 index; elements not in arr2 sort by value and come after.',
  ],
  functionName: 'relativeSortArray',
  params: ['arr1', 'arr2'],
  starterCode: {
    javascript: 'function relativeSortArray(arr1, arr2) {\n  \n}\n',
    python: 'def relativeSortArray(arr1, arr2):\n    pass\n',
  },
  visibleTests: [
    { args: [[2, 3, 1, 3, 2, 4, 6, 7, 9, 2, 19], [2, 1, 4, 3, 9, 6]], expected: [2, 2, 2, 1, 4, 3, 3, 9, 6, 7, 19] },
    { args: [[28, 6, 22, 8, 44, 17], [22, 28, 8, 6]], expected: [22, 28, 8, 6, 17, 44] },
  ],
  hiddenTests: [
    { args: [[1], [1]], expected: [1] },
    { args: [[1, 2, 3], [3, 2, 1]], expected: [3, 2, 1] },
    { args: [[1, 2, 3, 4], [3, 1]], expected: [3, 1, 2, 4] },
  ],
};
