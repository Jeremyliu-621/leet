import type { Problem } from '../types';

export const problem: Problem = {
  id: 'max-chunks-to-make-sorted',
  title: 'Max Chunks To Make Sorted',
  difficulty: 'medium',
  tags: ['arrays'],
  description: `You are given an integer array \`arr\` that is a permutation of \`[0, 1, ..., arr.length - 1]\`.

We split \`arr\` into some number of **chunks** (i.e., partitions), and individually sort each chunk. After concatenating them, the result should equal the sorted array.

Return the **largest** number of chunks we can make to sort the array.`,
  constraints: [
    '1 <= arr.length <= 10',
    '0 <= arr[i] < arr.length',
    'All the integers of arr are unique.',
  ],
  examples: [
    {
      input: 'arr = [4,3,2,1,0]',
      output: '1',
      explanation: 'Splitting into any chunk other than the whole array is not valid. For example, [4,3,2,1] and [0] sorts to [1,2,3,4,0] which is not the sorted array.',
    },
    {
      input: 'arr = [1,0,2,3,4]',
      output: '4',
      explanation: 'We can split into [1,0], [2], [3], [4]. Sorting each: [0,1], [2], [3], [4] → [0,1,2,3,4].',
    },
  ],
  hints: [
    'Level 1: A chunk boundary is valid at index `i` if and only if every element in `arr[0..i]` belongs to positions `0..i` in the sorted array. For a permutation of `[0..n-1]`, this means `max(arr[0..i]) === i`.',
    'Level 2: Iterate left to right, tracking the running maximum. Whenever `max === currentIndex`, we can close a chunk — increment the count.',
    'Level 3: `let max = 0, count = 0; for (let i = 0; i < arr.length; i++) { max = Math.max(max, arr[i]); if (max === i) count++; } return count;`',
  ],
  functionName: 'maxChunksToSorted',
  params: ['arr'],
  starterCode: {
    javascript: 'function maxChunksToSorted(arr) {\n  // your code here\n}\n',
    python: 'def maxChunksToSorted(arr):\n    # your code here\n    pass\n',
  },
  visibleTests: [
    {
      args: [[4, 3, 2, 1, 0]],
      expected: 1,
    },
    {
      args: [[1, 0, 2, 3, 4]],
      expected: 4,
    },
    {
      args: [[0, 1, 2, 3]],
      expected: 4,
    },
  ],
  hiddenTests: [
    {
      args: [[0]],
      expected: 1,
    },
    {
      args: [[0, 2, 1]],
      expected: 2,
    },
    {
      args: [[2, 0, 1]],
      expected: 1,
    },
    {
      args: [[0, 1, 2, 4, 3]],
      expected: 4,
    },
    {
      args: [[3, 2, 1, 0, 4]],
      expected: 2,
    },
  ],
};
