import type { Problem } from '../types';

export const problem: Problem = {
  id: 'kth-largest-after-each-insertion',
  title: 'K-th Largest Element After Each Insertion',
  difficulty: 'medium',
  tags: ['heap', 'arrays'],
  description: `You have an initially empty list of integers. You are given an array \`nums\` of integers to insert one by one, and an integer \`k\`.

After **each insertion**, find and record the **k-th largest** element currently in the list. Return an array of these values (one per insertion).

It is guaranteed that \`k\` is always valid (i.e., the list always has at least \`k\` elements after each insertion) — actually, the list may have fewer than \`k\` elements for early insertions. Return \`-1\` for any insertion where the list has fewer than \`k\` elements.

**Example:**
- \`nums = [3, 1, 5, 2, 4]\`, \`k = 2\`
- After inserting 3: list = [3], 2nd largest → \`-1\` (only 1 element)
- After inserting 1: list = [3,1], 2nd largest → \`1\`
- After inserting 5: list = [3,1,5], 2nd largest → \`3\`
- After inserting 2: list = [3,1,5,2], 2nd largest → \`3\`
- After inserting 4: list = [3,1,5,2,4], 2nd largest → \`4\`
- Output: \`[-1, 1, 3, 3, 4]\``,
  constraints: [
    '1 <= nums.length <= 10^4',
    '-10^4 <= nums[i] <= 10^4',
    '1 <= k <= nums.length',
  ],
  examples: [
    {
      input: 'nums = [3,1,5,2,4], k = 2',
      output: '[-1,1,3,3,4]',
      explanation: 'After each insertion: [3]→-1, [3,1]→1, [3,1,5]→3, [3,1,5,2]→3, [3,1,5,2,4]→4.',
    },
    {
      input: 'nums = [1,2,3], k = 1',
      output: '[1,2,3]',
      explanation: 'k=1: the largest element. Grows with each insertion.',
    },
    {
      input: 'nums = [5,4,3,2,1], k = 3',
      output: '[-1,-1,3,3,3]',
      explanation: 'Until there are 3 elements we return -1. The 3rd largest of [5,4,3,2,1] is 3.',
    },
  ],
  hints: [
    'A min-heap of size k is the classic approach: maintain only the k largest elements seen so far. The minimum of this heap is the k-th largest.',
    'For each number: add it to the heap. If the heap size exceeds k, pop the minimum. If the heap size is exactly k, the k-th largest is the heap minimum; otherwise return -1.',
    'When implementing without a built-in heap: keep a sorted array of the top-k elements and use binary insertion. The last element (minimum) is the k-th largest. Both approaches are O(n log k).',
  ],
  functionName: 'kthLargestAfterEachInsertion',
  params: ['nums', 'k'],
  starterCode: {
    javascript: `function kthLargestAfterEachInsertion(nums, k) {
  const sorted = [];
  const result = [];
  for (const n of nums) {
    let lo = 0, hi = sorted.length;
    while (lo < hi) {
      const mid = (lo + hi) >> 1;
      if (sorted[mid] <= n) lo = mid + 1; else hi = mid;
    }
    sorted.splice(lo, 0, n);
    result.push(sorted.length >= k ? sorted[sorted.length - k] : -1);
  }
  return result;
}`,
    typescript: `function kthLargestAfterEachInsertion(nums: number[], k: number): number[] {
  const sorted: number[] = [];
  const result: number[] = [];
  for (const n of nums) {
    let lo = 0, hi = sorted.length;
    while (lo < hi) {
      const mid = (lo + hi) >> 1;
      if (sorted[mid]! <= n) lo = mid + 1; else hi = mid;
    }
    sorted.splice(lo, 0, n);
    result.push(sorted.length >= k ? sorted[sorted.length - k]! : -1);
  }
  return result;
}`,
    python: `def kthLargestAfterEachInsertion(nums, k):
    import bisect
    sorted_arr = []
    result = []
    for n in nums:
        bisect.insort(sorted_arr, n)
        result.append(sorted_arr[-k] if len(sorted_arr) >= k else -1)
    return result`,
  },
  visibleTests: [
    { args: [[3, 1, 5, 2, 4], 2], expected: [-1, 1, 3, 3, 4] },
    { args: [[1, 2, 3], 1], expected: [1, 2, 3] },
    { args: [[5, 4, 3, 2, 1], 3], expected: [-1, -1, 3, 3, 3] },
  ],
  hiddenTests: [
    { args: [[10], 1], expected: [10] },
    { args: [[1, 1, 1, 1], 2], expected: [-1, 1, 1, 1] },
    { args: [[3, 2, 1], 3], expected: [-1, -1, 1] },
    { args: [[1, 2, 3, 4, 5], 3], expected: [-1, -1, 1, 2, 3] },
    { args: [[-1, -2, -3, -4], 2], expected: [-1, -2, -2, -2] },
    { args: [[7, 3, 9, 1, 5, 4], 3], expected: [-1, -1, 3, 3, 5, 5] },
    { args: [[2, 2, 2, 2, 2], 1], expected: [2, 2, 2, 2, 2] },
    { args: [[10, 9, 8, 7, 6], 4], expected: [-1, -1, -1, 7, 7] },
  ],
};
