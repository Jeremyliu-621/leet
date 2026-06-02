import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-k-pairs-with-smallest-sums',
  title: 'Find K Pairs with Smallest Sums',
  difficulty: 'medium',
  tags: ['arrays', 'heap'],
  description: `You are given two integer arrays \`nums1\` and \`nums2\` sorted in **non-decreasing order** and an integer \`k\`.

Define a pair \`(u, v)\` which consists of one element from the first array and one element from the second array.

Return the \`k\` pairs \`(u1, v1), (u2, v2), ..., (uk, vk)\` with the smallest sums. The answer may be returned in any order.`,
  constraints: [
    '`1 <= nums1.length, nums2.length <= 10^5`',
    '`-10^9 <= nums1[i], nums2[i] <= 10^9`',
    '`nums1` and `nums2` are sorted in non-decreasing order.',
    '`1 <= k <= 10^4`',
    '`k <= nums1.length * nums2.length`',
  ],
  examples: [
    {
      input: 'nums1 = [1,7,11], nums2 = [2,4,6], k = 3',
      output: '[[1,2],[1,4],[1,6]]',
      explanation: 'The first 3 pairs with the smallest sums are [1,2]=3, [1,4]=5, [1,6]=7.',
    },
    {
      input: 'nums1 = [1,1,2], nums2 = [1,2,3], k = 2',
      output: '[[1,1],[1,1]]',
      explanation: 'Return the 2 pairs with smallest sums. There are two [1,1] pairs.',
    },
  ],
  hints: [
    'Use a min-heap. Initially push (nums1[i] + nums2[0], i, 0) for i = 0..min(k, nums1.length)-1.',
    'Each time you pop (sum, i, j), add [nums1[i], nums2[j]] to the result.',
    'Then push (nums1[i] + nums2[j+1], i, j+1) if j+1 < nums2.length.',
    'Stop after k pairs are collected.',
  ],
  functionName: 'kSmallestPairs',
  params: ['nums1', 'nums2', 'k'],
  starterCode: {
    javascript: `function kSmallestPairs(nums1, nums2, k) {
  const result = [];
  const heap = [];
  for (let i = 0; i < Math.min(nums1.length, k); i++) heap.push([nums1[i] + nums2[0], i, 0]);
  while (result.length < k && heap.length) {
    heap.sort((a, b) => a[0] - b[0]);
    const [, i, j] = heap.shift();
    result.push([nums1[i], nums2[j]]);
    if (j + 1 < nums2.length) heap.push([nums1[i] + nums2[j + 1], i, j + 1]);
  }
  return result;
}`,
    typescript: `function kSmallestPairs(nums1: number[], nums2: number[], k: number): number[][] {
  const result: number[][] = [];
  const heap: [number, number, number][] = [];
  for (let i = 0; i < Math.min(nums1.length, k); i++) heap.push([nums1[i]! + nums2[0]!, i, 0]);
  while (result.length < k && heap.length) {
    heap.sort((a, b) => a[0] - b[0]);
    const [, i, j] = heap.shift()!;
    result.push([nums1[i]!, nums2[j]!]);
    if (j + 1 < nums2.length) heap.push([nums1[i]! + nums2[j + 1]!, i, j + 1]);
  }
  return result;
}`,
    python: `def kSmallestPairs(nums1, nums2, k):
    import heapq
    result = []
    heap = [(nums1[i] + nums2[0], i, 0) for i in range(min(len(nums1), k))]
    heapq.heapify(heap)
    while result.__len__() < k and heap:
        _, i, j = heapq.heappop(heap)
        result.append([nums1[i], nums2[j]])
        if j + 1 < len(nums2):
            heapq.heappush(heap, (nums1[i] + nums2[j + 1], i, j + 1))
    return result`,
  },
  visibleTests: [
    { args: [[1, 7, 11], [2, 4, 6], 3], expected: [[1, 2], [1, 4], [1, 6]] },
    { args: [[1, 1, 2], [1, 2, 3], 2], expected: [[1, 1], [1, 1]] },
  ],
  hiddenTests: [
    { args: [[1, 2], [3], 1], expected: [[1, 3]] },
    { args: [[1, 2, 3], [10, 20, 30], 3], expected: [[1, 10], [2, 10], [3, 10]] },
    { args: [[1, 2, 3], [10, 20, 30], 4], expected: [[1, 10], [2, 10], [3, 10], [1, 20]] },
    { args: [[1, 5, 9], [2, 4, 7], 1], expected: [[1, 2]] },
    { args: [[1, 2, 3, 4], [1, 2, 3, 4], 1], expected: [[1, 1]] },
  ],
};
