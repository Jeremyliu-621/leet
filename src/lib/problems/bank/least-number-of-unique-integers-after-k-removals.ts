import type { Problem } from '../types';

export const problem: Problem = {
  id: 'least-number-of-unique-integers-after-k-removals',
  title: 'Least Number of Unique Integers after K Removals',
  difficulty: 'medium',
  tags: ['arrays', 'hash-map', 'heap'],
  description: `Given an array of integers \`arr\` and an integer \`k\`, find the minimum number of unique integers after removing exactly \`k\` elements.`,
  constraints: [
    '`1 <= arr.length <= 10^5`',
    '`1 <= arr[i] <= 10^9`',
    '`0 <= k <= arr.length`',
  ],
  examples: [
    {
      input: 'arr = [5, 5, 4], k = 1',
      output: '1',
      explanation: 'Remove the 4. Now there is only one unique integer: 5.',
    },
    {
      input: 'arr = [4, 3, 1, 1, 3, 3, 2], k = 3',
      output: '2',
      explanation: 'Remove 4, 2, and one instance of 1. Remaining: [1, 3, 3, 3] — two unique integers.',
    },
  ],
  hints: [
    'Count the frequency of each integer.',
    'To minimize unique integers, remove elements with the lowest frequency first.',
    'Sort frequencies ascending. Subtract each frequency from k until k is exhausted; count how many frequencies you fully removed.',
  ],
  functionName: 'findLeastNumOfUniqueInts',
  params: ['arr', 'k'],
  starterCode: {
    javascript: `function findLeastNumOfUniqueInts(arr, k) {
  const freq = new Map();
  for (const x of arr) freq.set(x, (freq.get(x) ?? 0) + 1);
  const freqs = [...freq.values()].sort((a, b) => a - b);
  let removed = 0;
  for (const f of freqs) {
    if (k >= f) { k -= f; removed++; } else break;
  }
  return freqs.length - removed;
}`,
    typescript: `function findLeastNumOfUniqueInts(arr: number[], k: number): number {
  const freq = new Map<number, number>();
  for (const x of arr) freq.set(x, (freq.get(x) ?? 0) + 1);
  const freqs = [...freq.values()].sort((a, b) => a - b);
  let removed = 0;
  for (const f of freqs) {
    if (k >= f) { k -= f; removed++; } else break;
  }
  return freqs.length - removed;
}`,
    python: `def findLeastNumOfUniqueInts(arr, k):
    from collections import Counter
    freqs = sorted(Counter(arr).values())
    removed = 0
    for f in freqs:
        if k >= f: k -= f; removed += 1
        else: break
    return len(freqs) - removed`,
  },
  visibleTests: [
    { args: [[5, 5, 4], 1], expected: 1 },
    { args: [[4, 3, 1, 1, 3, 3, 2], 3], expected: 2 },
  ],
  hiddenTests: [
    { args: [[1, 2, 3, 4, 5], 0], expected: 5 },
    { args: [[1, 2, 3, 4, 5], 5], expected: 0 },
    { args: [[1, 1, 1, 2, 2, 3], 2], expected: 2 },
    { args: [[1, 2, 2, 3, 3, 3], 1], expected: 2 },
    { args: [[2, 4, 1, 8, 3, 5, 1, 3], 3], expected: 3 },
    { args: [[1], 1], expected: 0 },
    { args: [[1, 1], 1], expected: 1 },
    { args: [[1, 1, 2], 1], expected: 1 },
  ],
};
