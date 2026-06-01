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
    'Level 1: Linearly scan positive integers 1, 2, 3, ... using a pointer into arr. Decrement k each time you find a missing number. When k reaches 0, return the current number.',
    'Level 2 (O(log n)): Binary search on arr. The number of missing positives before index i is arr[i] - (i+1). Find the leftmost index where this count >= k.',
    'Level 3: After binary search, lo = first index where arr[lo] - (lo+1) >= k. Answer = lo + k (there are exactly lo array elements ≤ the answer).',
  ],
  functionName: 'findKthPositive',
  params: ['arr', 'k'],
  starterCode: {
    javascript: `function findKthPositive(arr, k) {
  let lo = 0, hi = arr.length;
  while (lo < hi) {
    const mid = (lo + hi) >> 1;
    if (arr[mid] - (mid + 1) >= k) hi = mid;
    else lo = mid + 1;
  }
  return lo + k;
}`,
    typescript: `function findKthPositive(arr: number[], k: number): number {
  let lo = 0, hi = arr.length;
  while (lo < hi) {
    const mid = (lo + hi) >> 1;
    if (arr[mid]! - (mid + 1) >= k) hi = mid;
    else lo = mid + 1;
  }
  return lo + k;
}`,
    python: `def findKthPositive(arr, k):
    lo, hi = 0, len(arr)
    while lo < hi:
        mid = (lo + hi) // 2
        if arr[mid] - (mid + 1) >= k:
            hi = mid
        else:
            lo = mid + 1
    return lo + k`,
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
