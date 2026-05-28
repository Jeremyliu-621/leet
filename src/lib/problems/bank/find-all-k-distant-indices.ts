import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-all-k-distant-indices',
  title: 'Find All K-Distant Indices in an Array',
  difficulty: 'easy',
  tags: ['arrays'],
  description: `You are given a **0-indexed** integer array \`nums\` and two integers \`key\` and \`k\`. A **k-distant index** is an index \`i\` of \`nums\` for which there exists at least one index \`j\` such that \`|i - j| <= k\` and \`nums[j] == key\`.

Return a list of all k-distant indices sorted in **increasing order**.`,
  constraints: [
    '1 <= nums.length <= 1000',
    '1 <= nums[i] <= 1000',
    'key is an integer from the array nums.',
    '1 <= k <= nums.length',
  ],
  examples: [
    {
      input: 'nums = [3,4,9,1,3,9,5], key = 9, k = 1',
      output: '[1,2,3,4,5,6]',
      explanation: 'Key=9 appears at indices 2 and 5. Indices within distance 1: {1,2,3} ∪ {4,5,6} = [1,2,3,4,5,6].',
    },
    {
      input: 'nums = [2,2,2,2,2], key = 2, k = 2',
      output: '[0,1,2,3,4]',
      explanation: 'All indices are within distance 2 of some occurrence of key=2.',
    },
  ],
  hints: [
    'For each index i, check if any j where nums[j] == key satisfies |i-j| <= k. O(n^2) works.',
    'Collect all indices where nums[j] == key. For each key index j, mark indices j-k to j+k.',
    'Use a Set to avoid duplicates, then return sorted.',
  ],
  functionName: 'findKDistantIndices',
  params: ['nums', 'key', 'k'],
  starterCode: {
    javascript: `function findKDistantIndices(nums, key, k) {

}`,
    typescript: "function findKDistantIndices(nums: number[], key: number, k: number): number[] {\n\n}",

    python: `def findKDistantIndices(nums, key, k):
    pass`,
  },
  visibleTests: [
    { args: [[3, 4, 9, 1, 3, 9, 5], 9, 1], expected: [1, 2, 3, 4, 5, 6] },
    { args: [[2, 2, 2, 2, 2], 2, 2], expected: [0, 1, 2, 3, 4] },
  ],
  hiddenTests: [
    { args: [[1], 1, 1], expected: [0] },
    { args: [[5, 5, 5], 5, 1], expected: [0, 1, 2] },
    { args: [[1, 2, 3, 1], 1, 1], expected: [0, 1, 2, 3] },
    { args: [[1, 3, 5], 3, 1], expected: [0, 1, 2] },
  ],
};
