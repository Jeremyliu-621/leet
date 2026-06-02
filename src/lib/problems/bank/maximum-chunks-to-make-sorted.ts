import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximum-chunks-to-make-sorted',
  title: 'Max Chunks To Make Sorted',
  difficulty: 'medium',
  tags: ['arrays', 'stack'],
  description: `You are given an integer array \`arr\` that is a permutation of \`[0, 1, ..., n - 1]\`, where \`n\` is the length of the array.

We split \`arr\` into some number of **chunks** (i.e., partitions), and individually sort each chunk. After concatenating them, the result should equal the sorted array.

Return the **largest** number of chunks we can make to sort the array.`,
  constraints: [
    '`n == arr.length`',
    '`1 <= n <= 10`',
    '`0 <= arr[i] < n`',
    'All the elements of `arr` are **unique**.',
  ],
  examples: [
    {
      input: 'arr = [4,3,2,1,0]',
      output: '1',
      explanation: 'Splitting into any chunk results in a chunk that is not sorted. The whole array must be one chunk.',
    },
    {
      input: 'arr = [1,0,2,3,4]',
      output: '4',
      explanation: 'We can split into [1,0], [2], [3], [4]. Sorting each gives [0,1],[2],[3],[4] → [0,1,2,3,4].',
    },
  ],
  hints: [
    'A split at index i is valid if the max of arr[0..i] equals i.',
    'Maintain a running maximum and check if it equals the current index.',
    'Count how many valid split points (including the last index) exist.',
  ],
  functionName: 'maxChunksToSorted',
  params: ['arr'],
  starterCode: {
    javascript: `function maxChunksToSorted(arr) {
  let maxSeen = 0, ans = 0;
  for (let i = 0; i < arr.length; i++) {
    maxSeen = Math.max(maxSeen, arr[i]);
    if (maxSeen === i) ans++;
  }
  return ans;
}`,
    typescript: `function maxChunksToSorted(arr: number[]): number {
  let maxSeen = 0, ans = 0;
  for (let i = 0; i < arr.length; i++) {
    maxSeen = Math.max(maxSeen, arr[i]!);
    if (maxSeen === i) ans++;
  }
  return ans;
}`,
    python: `def maxChunksToSorted(arr):
    max_seen = ans = 0
    for i, v in enumerate(arr):
        max_seen = max(max_seen, v)
        if max_seen == i: ans += 1
    return ans`,
  },
  visibleTests: [
    { args: [[4, 3, 2, 1, 0]], expected: 1 },
    { args: [[1, 0, 2, 3, 4]], expected: 4 },
  ],
  hiddenTests: [
    { args: [[0]], expected: 1 },
    { args: [[0, 1]], expected: 2 },
    { args: [[1, 0]], expected: 1 },
    { args: [[0, 1, 2]], expected: 3 },
    { args: [[2, 1, 0]], expected: 1 },
    { args: [[0, 2, 1]], expected: 2 },
    { args: [[3, 0, 1, 2]], expected: 1 },
  ],
};
