import type { Problem } from '../types';

export const problem: Problem = {
  id: 'max-chunks-to-make-sorted-ii',
  title: 'Max Chunks To Make Sorted II',
  difficulty: 'hard',
  tags: ['arrays', 'stack'],
  description: `You are given an integer array \`arr\`.

We split \`arr\` into some number of **chunks** (i.e., partitions), and individually sort each chunk. After concatenating them, the result should equal the sorted array.

Return **the maximum number of chunks** we can split the array into.

**Note:** The array may contain duplicates.`,
  constraints: [
    '1 <= arr.length <= 2000',
    '0 <= arr[i] <= 10^8',
  ],
  examples: [
    {
      input: 'arr = [5,4,3,2,1]',
      output: '1',
      explanation: 'Splitting into any chunk results in [5,4,3,2,1], reversing is not globally sorted.',
    },
    {
      input: 'arr = [2,1,3,4,4]',
      output: '4',
      explanation: 'We can split into [2,1], [3], [4], [4].',
    },
  ],
  hints: [
    'Use a monotonic stack. Each stack entry represents the maximum value of a chunk.',
    'For each new element x: if x < stack.top, merge all chunks whose max exceeds x (since x must belong to an earlier chunk).',
    'After merging, push the maximum of the merged chunks (and x) as a new chunk.',
  ],
  functionName: 'maxChunksToSorted',
  params: ['arr'],
  starterCode: {
    javascript: 'function maxChunksToSorted(arr) {\n\n}\n',
    typescript: "function maxChunksToSorted(arr: number[]): number {\n\n}",

    python: 'def maxChunksToSorted(arr):\n    pass\n',
  },
  visibleTests: [
    { args: [[5,4,3,2,1]], expected: 1 },
    { args: [[2,1,3,4,4]], expected: 4 },
  ],
  hiddenTests: [
    { args: [[1]], expected: 1 },
    { args: [[1,1]], expected: 2 },
    { args: [[1,2,2,1]], expected: 2 },
    { args: [[1,2,3,4,5]], expected: 5 },
    { args: [[3,2,1,4,5]], expected: 3 },
  ],
};
