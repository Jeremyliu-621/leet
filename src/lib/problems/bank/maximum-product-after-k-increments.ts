import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximum-product-after-k-increments',
  title: 'Maximum Product After K Increments',
  difficulty: 'medium',
  tags: ['arrays', 'heap', 'math'],
  description: `You are given an array of non-negative integers \`nums\` and an integer \`k\`. In one operation, you may choose **any** element from \`nums\` and **increment** it by \`1\`.

Return the **maximum product** of \`nums\` after **at most** \`k\` operations. Since the answer may be very large, return it modulo \`10^9 + 7\`.`,
  constraints: [
    '1 <= nums.length, k <= 10^5',
    '0 <= nums[i] <= 10^6',
  ],
  examples: [
    {
      input: 'nums = [0,4], k = 5',
      output: '20',
      explanation: 'Increment index 0 five times. [0,4] → [5,4]. Product = 20.',
    },
    {
      input: 'nums = [6,3,3,2], k = 2',
      output: '216',
      explanation: 'Increment index 3 twice. [6,3,3,4]. Product = 216.',
    },
  ],
  hints: [
    'To maximize the product, always increment the smallest element.',
    'Use a min-heap (or sort + pointer) to efficiently find the minimum each time.',
    'After all k increments, compute the product modulo 10^9 + 7.',
  ],
  functionName: 'maximumProduct',
  params: ['nums', 'k'],
  starterCode: {
    javascript: `function maximumProduct(nums, k) {
  const MOD = 1_000_000_007n;
  const heap = nums.slice();
  const siftDown = (i) => { while (2*i+1 < heap.length) { let c = 2*i+1; if (c+1 < heap.length && heap[c+1] < heap[c]) c++; if (heap[i] <= heap[c]) break; [heap[i],heap[c]]=[heap[c],heap[i]]; i=c; } };
  for (let i = (heap.length >> 1) - 1; i >= 0; i--) siftDown(i);
  for (let i = 0; i < k; i++) { heap[0]++; siftDown(0); }
  return Number(heap.reduce((acc, x) => acc * BigInt(x) % MOD, 1n));
}`,
    typescript: `function maximumProduct(nums: number[], k: number): number {
  const MOD = 1_000_000_007n;
  const heap = nums.slice();
  const siftDown = (i: number) => { while (2*i+1 < heap.length) { let c = 2*i+1; if (c+1 < heap.length && heap[c+1]! < heap[c]!) c++; if (heap[i]! <= heap[c]!) break; [heap[i],heap[c]]=[heap[c]!,heap[i]!]; i=c; } };
  for (let i = (heap.length >> 1) - 1; i >= 0; i--) siftDown(i);
  for (let i = 0; i < k; i++) { heap[0]!++; siftDown(0); }
  return Number(heap.reduce((acc, x) => acc * BigInt(x) % MOD, 1n));
}`,
    python: `def maximumProduct(nums, k):
    if hasattr(nums, 'to_py'): nums = list(nums.to_py())
    import heapq
    heapq.heapify(nums)
    for _ in range(k): heapq.heapreplace(nums, nums[0] + 1)
    MOD = 10**9 + 7
    result = 1
    for x in nums: result = result * x % MOD
    return result`,
  },
  visibleTests: [
    { args: [[0, 4], 5], expected: 20 },
    { args: [[6, 3, 3, 2], 2], expected: 216 },
  ],
  hiddenTests: [
    { args: [[1], 3], expected: 4 },
    { args: [[1, 1], 0], expected: 1 },
    { args: [[0, 0], 4], expected: 4 },
    { args: [[3, 7, 5], 2], expected: 175 },
  ],
};
