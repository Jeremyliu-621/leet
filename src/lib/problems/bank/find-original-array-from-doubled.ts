import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-original-array-from-doubled',
  title: 'Find Original Array From Doubled Array',
  difficulty: 'medium',
  tags: ['arrays', 'hash-map'],
  description: `An integer array \`original\` is transformed into a **doubled** array \`changed\` by appending **twice the value** of every element in \`original\`, and then **randomly shuffling** the resulting array.

Given an array \`changed\`, return \`original\` if \`changed\` is a doubled array. If \`changed\` is not a doubled array, return an empty array. The elements in \`original\` may be returned in **any order**.`,
  constraints: [
    '1 <= changed.length <= 10^5',
    '0 <= changed[i] <= 10^5',
    'changed.length is even.',
  ],
  examples: [
    {
      input: 'changed = [1,3,4,2,6,8]',
      output: '[1,3,4]',
      explanation: 'Original was [1,3,4]: doubled pairs (1,2), (3,6), (4,8).',
    },
    {
      input: 'changed = [6,3,0,1]',
      output: '[]',
      explanation: 'Not a valid doubled array.',
    },
    {
      input: 'changed = [3,1]',
      output: '[]',
      explanation: '3 cannot be a doubled value without 6 present.',
    },
  ],
  hints: [
    'Sort the array. Then greedily pair each smallest unmatched value with its double.',
    'Use a frequency map. For each value (in sorted order), if count[x] > 0, check count[2x] > 0 and match them.',
    'Special case: 0 must pair with 0; count[0] must be even.',
  ],
  functionName: 'findOriginalArray',
  params: ['changed'],
  starterCode: {
    javascript: 'function findOriginalArray(changed) {\n  \n}\n',
    python: 'def findOriginalArray(changed):\n    pass\n',
  },
  visibleTests: [
    { args: [[1, 3, 4, 2, 6, 8]], expected: [1, 3, 4] },
    { args: [[6, 3, 0, 1]], expected: [] },
    { args: [[3, 1]], expected: [] },
  ],
  hiddenTests: [
    { args: [[0, 0]], expected: [0] },
    { args: [[0, 0, 0, 0]], expected: [0, 0] },
    { args: [[2, 1]], expected: [1] },
    { args: [[1, 2, 4, 8, 8, 16]], expected: [1, 4, 8] },
    { args: [[1, 2, 3, 6]], expected: [1, 3] },
  ],
};
