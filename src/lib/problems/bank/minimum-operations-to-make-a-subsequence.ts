import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-operations-to-make-a-subsequence',
  title: 'Minimum Operations to Make a Subsequence',
  difficulty: 'hard',
  tags: ['arrays', 'binary-search', 'binary-indexed-tree'],
  description: `You are given an array \`target\` that consists of **distinct** integers and another integer array \`arr\` that **can have duplicates**.

In one operation you can insert any integer at any position in \`arr\`. Return the **minimum number of operations** needed to make \`target\` a **subsequence** of \`arr\`.

A subsequence of an array is a new array generated from the original array by deleting some elements (possibly none) without changing the relative order of the remaining elements.`,
  constraints: [
    '1 <= target.length, arr.length <= 10^5',
    '1 <= target[i], arr[i] <= 10^9',
    'target contains no duplicates.',
  ],
  examples: [
    {
      input: 'target = [5,1,3], arr = [9,4,2,3,4]',
      output: '2',
      explanation:
        'We need [5,1,3] as a subsequence. arr already contains 3 at index 3. We need to insert 5 and 1 somewhere before index 3 → 2 insertions.',
    },
    {
      input: 'target = [6,4,8,1,3,2], arr = [4,7,6,2,3,8,6,1]',
      output: '3',
      explanation:
        'The LCS of target and arr (considering only target values) has length 3. So we need 6 - 3 = 3 insertions.',
    },
  ],
  hints: [
    'The minimum insertions = `target.length - LCS(target, arr)`, where LCS is the length of the longest common subsequence.',
    'Since `target` contains **distinct** values, you can reduce LCS to LIS: build a map `pos` from each target value to its index (0-based). For each element in `arr`, if it exists in `pos`, replace it with its index. Now find the LIS of this transformed array.',
    'LIS via patience sorting runs in O(n log n): maintain a `tails` array. For each value `v`, binary search for the first element in `tails` ≥ v and replace it (or append if none exists). The length of `tails` at the end is the LIS length.',
  ],
  functionName: 'minOperations',
  params: ['target', 'arr'],
  starterCode: {
    javascript: `function minOperations(target, arr) {
  // your code here
}`,
    python: `def minOperations(target, arr):
    # your code here
    pass`,
  },
  visibleTests: [
    { args: [[5, 1, 3], [9, 4, 2, 3, 4]], expected: 2 },
    { args: [[6, 4, 8, 1, 3, 2], [4, 7, 6, 2, 3, 8, 6, 1]], expected: 3 },
  ],
  hiddenTests: [
    { args: [[1], [1]], expected: 0 },
    { args: [[1], [2]], expected: 1 },
    { args: [[1, 2], [2, 1]], expected: 1 },
    { args: [[1, 2, 3], [1, 2, 3]], expected: 0 },
    { args: [[1, 2, 3], [3, 2, 1]], expected: 2 },
    { args: [[1, 2, 3, 4], [2, 4, 1, 3]], expected: 2 },
    { args: [[1, 3, 5, 7], [1, 2, 3, 4, 5, 6, 7]], expected: 0 },
    { args: [[2, 1], [1, 2, 1]], expected: 0 },
    { args: [[1, 2, 3], []], expected: 3 },
  ],
};
