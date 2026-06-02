import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-operations-to-halve-array-sum',
  title: 'Minimum Operations to Halve Array Sum',
  difficulty: 'medium',
  tags: ['arrays', 'heap'],
  description: `Given a positive integer array \`nums\`, in one operation you can choose any element and reduce it to exactly **half** its current value (the result may be a real number). Return the **minimum number of operations** to reduce the array sum to at most half of the original sum.

**Approach:** Greedy with a max-heap. Always halve the current largest element, since that gives the greatest absolute reduction.`,
  constraints: [
    '1 <= nums.length <= 100000',
    '1 <= nums[i] <= 10^7',
  ],
  examples: [
    {
      input: 'nums = [5,19,8,1]',
      output: '3',
      explanation: 'Sum=33, need ≤16.5. Halve 19→9.5 (sum=23.5), halve 9.5→4.75 (sum=18.75), halve 8→4 (sum=14.75≤16.5). 3 ops.',
    },
    {
      input: 'nums = [3,8,20]',
      output: '3',
      explanation: 'Sum=31, need ≤15.5. Halve 20→10, halve 10→5, halve 8→4 (total reduced=19). 3 ops.',
    },
    {
      input: 'nums = [4,4]',
      output: '2',
    },
  ],
  hints: [
    'To minimize operations, each step should give the maximum possible reduction. The largest element, when halved, always gives the biggest absolute decrease.',
    'Simulate with a sorted array: each step, pick the max, halve it, re-sort, and accumulate the reduction until it meets or exceeds originalSum/2.',
    '```js\nconst total = nums.reduce((a,b)=>a+b,0);\nlet need = total/2, reduced = 0, ops = 0;\nconst arr = [...nums];\nwhile (reduced < need) {\n  arr.sort((a,b)=>b-a);\n  arr[0] /= 2;\n  reduced += arr[0];\n  ops++;\n}\nreturn ops;\n```',
  ],
  functionName: 'halveArray',
  params: ['nums'],
  starterCode: {
    javascript: `function halveArray(nums) {
  const heap = [...nums];
  const n = heap.length;
  function sift(i) {
    while (true) {
      let m = i, l = 2*i+1, r = 2*i+2;
      if (l < heap.length && heap[l] > heap[m]) m = l;
      if (r < heap.length && heap[r] > heap[m]) m = r;
      if (m === i) break;
      [heap[i], heap[m]] = [heap[m], heap[i]]; i = m;
    }
  }
  for (let i = (n >> 1) - 1; i >= 0; i--) sift(i);
  const total = nums.reduce((a, b) => a + b, 0);
  let need = total / 2, reduced = 0, ops = 0;
  while (reduced < need) {
    const top = heap[0] / 2;
    heap[0] = top; sift(0); reduced += top; ops++;
  }
  return ops;
}`,
    typescript: `function halveArray(nums: number[]): number {
  const heap = [...nums];
  const n = heap.length;
  function sift(i: number) {
    while (true) {
      let m = i, l = 2*i+1, r = 2*i+2;
      if (l < heap.length && heap[l]! > heap[m]!) m = l;
      if (r < heap.length && heap[r]! > heap[m]!) m = r;
      if (m === i) break;
      [heap[i], heap[m]] = [heap[m]!, heap[i]!]; i = m;
    }
  }
  for (let i = (n >> 1) - 1; i >= 0; i--) sift(i);
  const total = nums.reduce((a, b) => a + b, 0);
  let need = total / 2, reduced = 0, ops = 0;
  while (reduced < need) {
    const top = heap[0]! / 2;
    heap[0] = top; sift(0); reduced += top; ops++;
  }
  return ops;
}`,
    python: `def halveArray(nums):
    import heapq
    nums = list(nums.to_py()) if hasattr(nums, 'to_py') else list(nums)
    total = sum(nums)
    need = total / 2; reduced = 0; ops = 0
    heap = [-x for x in nums]; heapq.heapify(heap)
    while reduced < need:
        top = -heapq.heappop(heap) / 2
        heapq.heappush(heap, -top)
        reduced += top; ops += 1
    return ops`,
  },
  visibleTests: [
    { args: [[5,19,8,1]], expected: 3 },
    { args: [[3,8,20]], expected: 3 },
    { args: [[4,4]], expected: 2 },
  ],
  hiddenTests: [
    { args: [[1]], expected: 1 },
    { args: [[10,10]], expected: 2 },
    { args: [[2,4,8]], expected: 3 },
    { args: [[1000000]], expected: 1 },
    { args: [[1,1,1,1]], expected: 4 },
  ],
};
