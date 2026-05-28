import type { Problem } from '../types';

export const problem: Problem = {
  id: 'kth-missing-positive-number',
  title: 'Kth Missing Positive Number',
  difficulty: 'easy',
  tags: ['binary-search', 'arrays'],
  description: `Given an array \`arr\` of positive integers sorted in **strictly increasing** order, and an integer \`k\`.

Return the \`k\`th positive integer that is **missing** from this array.`,
  constraints: [
    '1 <= arr.length <= 1000',
    '1 <= arr[i] <= 1000',
    '1 <= k <= 1000',
    'arr[i] != arr[j] for i != j',
  ],
  examples: [
    {
      input: 'arr = [2,3,4,7,11], k = 5',
      output: '9',
      explanation: 'Missing numbers: 1, 5, 6, 8, 9. The 5th is 9.',
    },
    {
      input: 'arr = [1,2,3,4], k = 2',
      output: '6',
      explanation: 'Missing numbers: 5, 6, 7, ... The 2nd is 6.',
    },
  ],
  hints: [
    'Scan linearly: track how many positive integers are missing so far. When the count of missing equals k, return that number.',
    'Using binary search: at index i (0-indexed), arr[i] should equal i+1 if no numbers were missing. The count of missing numbers up to arr[i] is arr[i] - (i+1). Binary search for the leftmost index where the missing count ≥ k.',
    'After binary search with result lo: the answer is lo + k. This works because there are exactly lo elements in arr that are ≤ the answer.',
  ],
  functionName: 'findKthPositive',
  params: ['arr', 'k'],
  starterCode: {
    javascript: `function findKthPositive(arr, k) {\n\n}`,
    typescript: "function findKthPositive(arr: number[], k: number): number {\n\n}",

    python: `def findKthPositive(arr, k):\n    pass`,
  },
  visibleTests: [
    { args: [[2, 3, 4, 7, 11], 5], expected: 9 },
    { args: [[1, 2, 3, 4], 2], expected: 6 },
  ],
  hiddenTests: [
    { args: [[1], 1], expected: 2 },
    { args: [[1], 2], expected: 3 },
    { args: [[1, 3], 1], expected: 2 },
    { args: [[2], 1], expected: 1 },
    { args: [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 1], expected: 11 },
  ],
};
