import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-original-array-from-doubled-array',
  title: 'Find Original Array From Doubled Array',
  difficulty: 'medium',
  tags: ['arrays', 'hash-map'],
  description: `An integer array \`original\` is transformed into a **doubled** array \`changed\` by appending **twice the value** of every element in \`original\`, and then randomly **shuffling** the resulting array.

Given an array \`changed\`, return \`original\` *if* \`changed\` *is a* **doubled** *array*. If \`changed\` is not a doubled array, return an empty array. The elements in \`original\` may be returned in **any** order.`,
  constraints: [
    '1 <= changed.length <= 10^5',
    '0 <= changed[i] <= 10^5',
  ],
  examples: [
    {
      input: 'changed = [1,3,4,2,6,8]',
      output: '[1,3,4]',
      explanation:
        'One possible original is [1,3,4]. Doubled: [2,6,8]. changed = [1,3,4,2,6,8] ✓.',
    },
    {
      input: 'changed = [6,3,0,1]',
      output: '[]',
      explanation: 'changed is not a valid doubled array.',
    },
  ],
  hints: [
    'If the length is odd, return [] immediately (every original element contributes 2 elements to changed).',
    'Sort changed. For each element x (in ascending order), if x is still available, check whether 2x is also available to pair with it.',
    'Special case: x=0 requires two zeros (since 2*0=0). Build original greedily from smallest to largest.',
  ],
  functionName: 'findOriginalArray',
  params: ['changed'],
  starterCode: {
    javascript: `function findOriginalArray(changed) {
  // your code here
}`,
    typescript: `function findOriginalArray(changed: number[]): number[] {
  // your code here
}`,
    python: `def findOriginalArray(changed):
    # your code here
    pass`,
  },
  visibleTests: [
    { args: [[1, 3, 4, 2, 6, 8]], expected: [1, 3, 4] },
    { args: [[6, 3, 0, 1]], expected: [] },
    { args: [[0, 0, 2, 4]], expected: [0, 2] },
    { args: [[2, 4]], expected: [2] },
    { args: [[1, 2, 4, 8, 16, 32]], expected: [1, 4, 16] },
  ],
  hiddenTests: [
    { args: [[3, 6]], expected: [3] },
    { args: [[3, 1]], expected: [] },
    { args: [[4, 2, 2, 4]], expected: [2, 2] },
    { args: [[2, 1]], expected: [1] },
    { args: [[5, 10]], expected: [5] },
  ],
};
