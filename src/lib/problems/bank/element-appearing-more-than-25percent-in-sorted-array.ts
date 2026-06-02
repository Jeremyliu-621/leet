import type { Problem } from '../types';

export const problem: Problem = {
  id: 'element-appearing-more-than-25percent-in-sorted-array',
  title: 'Element Appearing More Than 25% In Sorted Array',
  difficulty: 'easy',
  tags: ['arrays', 'binary-search'],
  description: `Given an integer array \`arr\` sorted in non-decreasing order, there is exactly one integer in the array that occurs more than 25% of the time. Return that integer.`,
  constraints: [
    '1 <= arr.length <= 10^4',
    '0 <= arr[i] <= 10^5',
  ],
  examples: [
    {
      input: 'arr = [1,2,2,6,6,6,6,7,10]',
      output: '6',
      explanation: '6 appears 4 times out of 9 (> 25%).',
    },
    {
      input: 'arr = [1,1]',
      output: '1',
    },
  ],
  hints: [
    'Level 1: The special element appears more than n/4 times. In a sorted array of n elements, if element x appears k > n/4 times, it occupies k consecutive positions.',
    'Level 2: Check at every index i whether arr[i] == arr[i + floor(n/4)]. If so, arr[i] appears at least floor(n/4)+1 times (strictly more than n/4), so it\'s the answer.',
    'Level 3: This runs in O(n). Alternatively, only check at indices 0, n/4, 2n/4, 3n/4 (there are only 3 "quarter-boundary" candidates) — each requires a binary search to count occurrences, giving O(log n).',
  ],
  functionName: 'findSpecialInteger',
  params: ['arr'],
  starterCode: {
    javascript: `function findSpecialInteger(arr) {
  const n = arr.length;
  const quarter = Math.floor(n / 4);
  for (let i = 0; i + quarter < n; i++) {
    if (arr[i] === arr[i + quarter]) return arr[i];
  }
  return arr[0];
}`,
    typescript: `function findSpecialInteger(arr: number[]): number {
  const n = arr.length;
  const quarter = Math.floor(n / 4);
  for (let i = 0; i + quarter < n; i++) {
    if (arr[i] === arr[i + quarter]) return arr[i]!;
  }
  return arr[0]!;
}`,
    python: `def findSpecialInteger(arr):
    n = len(arr)
    quarter = n // 4
    for i in range(n - quarter):
        if arr[i] == arr[i + quarter]:
            return arr[i]
    return arr[0]`,
  },
  visibleTests: [
    { args: [[1, 2, 2, 6, 6, 6, 6, 7, 10]], expected: 6 },
    { args: [[1, 1]], expected: 1 },
  ],
  hiddenTests: [
    { args: [[1]], expected: 1 },
    { args: [[1, 2, 2]], expected: 2 },
    { args: [[1, 2, 3, 3, 3, 3]], expected: 3 },
    { args: [[7, 7, 7, 7, 7]], expected: 7 },
    { args: [[1, 1, 1, 2]], expected: 1 },
    { args: [[1, 2, 2, 2]], expected: 2 },
    { args: [[1, 1, 1, 1, 2, 2, 3, 4]], expected: 1 },
  ],
};
