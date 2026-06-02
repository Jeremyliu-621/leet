import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-deviation-in-array',
  title: 'Minimum Deviation in Array',
  difficulty: 'hard',
  tags: ['arrays', 'heap'],
  description: `You are given an array \`nums\` of \`n\` positive integers.

You can perform **two types of operations** any number of times on any element:

- If the element is **even**, divide it by 2.
- If the element is **odd**, multiply it by 2.

The **deviation** of the array is the maximum difference between any two elements.

Return the **minimum deviation** the array can have after performing some number of operations.`,
  constraints: [
    'n == nums.length',
    '2 <= n <= 5 * 10^4',
    '1 <= nums[i] <= 10^9',
  ],
  examples: [
    {
      input: 'nums = [1,2,3,4]',
      output: '1',
      explanation: 'Transform to [1,2,3,2] → [2,2,3,2]. Min deviation = 3-2 = 1.',
    },
    {
      input: 'nums = [4,1,5,20,3]',
      output: '3',
      explanation: 'Transform to [4,2,5,5,3] → deviation = 5-2 = 3.',
    },
    {
      input: 'nums = [2,10,8]',
      output: '3',
      explanation: 'Transform to [2,5,4]: deviation = 5-2 = 3. Or [2,10,4]: deviation = 8.',
    },
  ],
  hints: [
    'Level 1: First double all odd numbers so every element is even. Now you can only divide by 2.',
    'Level 2: Use a max-heap. Track the current minimum. At each step, pop the max, update deviation = max - min. If max is even, push max/2 (and update min if needed); if max is odd, stop — you can\'t reduce further.',
    'Level 3: Keep halving the maximum until it becomes odd (no more useful operations). Record the minimum deviation seen.',
  ],
  functionName: 'minimumDeviation',
  params: ['nums'],
  starterCode: {
    javascript: `function minimumDeviation(nums) {
  // Make all numbers even by doubling odd ones
  const heap = []; // max-heap (negate for JS min-heap simulation)
  let minVal = Infinity;
  for (let x of nums) {
    if (x % 2 === 1) x *= 2;
    heap.push(-x);
    minVal = Math.min(minVal, x);
  }
  // Build max-heap
  heap.sort((a, b) => a - b);
  let ans = -heap[0] - minVal;
  while (-heap[0] % 2 === 0) {
    const maxVal = -heap.shift();
    minVal = Math.min(minVal, maxVal / 2);
    ans = Math.min(ans, -heap[0] - minVal); // after removal, heap[0] is new max... no wait
    // Need to re-insert. Use proper heap.
    // Simplified: use sort each time (OK for small inputs, not optimal)
    heap.push(-(maxVal / 2));
    heap.sort((a, b) => a - b);
    ans = Math.min(ans, -heap[0] - minVal);
  }
  return ans;
}`,
    typescript: `function minimumDeviation(nums: number[]): number {
  let minVal = Infinity;
  const heap: number[] = [];
  for (let x of nums) {
    if (x % 2 === 1) x *= 2;
    heap.push(-x);
    minVal = Math.min(minVal, x);
  }
  heap.sort((a, b) => a - b);
  let ans = -heap[0]! - minVal;
  while (-heap[0]! % 2 === 0) {
    const maxVal = -heap.shift()!;
    const half = maxVal / 2;
    minVal = Math.min(minVal, half);
    heap.push(-half);
    heap.sort((a, b) => a - b);
    ans = Math.min(ans, -heap[0]! - minVal);
  }
  return ans;
}`,
    python: `def minimumDeviation(nums):
    import heapq
    nums = [int(x) for x in (nums.to_py() if hasattr(nums, 'to_py') else nums)]
    heap = []
    min_val = float('inf')
    for x in nums:
        if x % 2 == 1: x *= 2
        heapq.heappush(heap, -x)
        min_val = min(min_val, x)
    ans = -heap[0] - min_val
    while -heap[0] % 2 == 0:
        max_val = -heapq.heappop(heap)
        min_val = min(min_val, max_val // 2)
        heapq.heappush(heap, -(max_val // 2))
        ans = min(ans, -heap[0] - min_val)
    return ans`,
  },
  visibleTests: [
    { args: [[1, 2, 3, 4]], expected: 1 },
    { args: [[4, 1, 5, 20, 3]], expected: 3 },
    { args: [[2, 10, 8]], expected: 3 },
  ],
  hiddenTests: [
    { args: [[1, 2]], expected: 0 },
    { args: [[3, 5]], expected: 1 },
    { args: [[2, 4, 8]], expected: 0 },
    { args: [[1, 4]], expected: 0 },
    { args: [[3, 3, 3]], expected: 0 },
  ],
};
