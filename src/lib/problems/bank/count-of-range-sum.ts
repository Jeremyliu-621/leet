import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-of-range-sum',
  title: 'Count of Range Sum',
  difficulty: 'hard',
  tags: ['binary-search', 'arrays'],
  description: `Given an integer array \`nums\` and two integers \`lower\` and \`upper\`, return the **number of range sums** that lie in \`[lower, upper]\` inclusive.

A **range sum** \`S(i, j)\` is defined as the sum of the elements in \`nums\` between indices \`i\` and \`j\` inclusive, where \`i <= j\`.

**Approach (prefix sums + merge sort or sorted structure):**

Let \`prefix[i]\` = sum of \`nums[0..i-1]\`. Then \`S(i, j) = prefix[j+1] - prefix[i]\`.

We need to count pairs where \`lower <= prefix[j+1] - prefix[i] <= upper\`.

Use a modified merge sort on the prefix array. During merge, for each right-half element \`prefix[j]\`, count left-half elements in \`[prefix[j] - upper, prefix[j] - lower]\` using two pointers (both pointers are monotonically non-decreasing as j increases, so the total work is O(n log n)).`,
  constraints: [
    '1 <= nums.length <= 100000',
    '-2^31 <= nums[i] <= 2^31 - 1',
    '-3 * 10^4 <= lower <= upper <= 3 * 10^4',
  ],
  examples: [
    {
      input: 'nums = [-2,5,-1], lower = -2, upper = 2',
      output: '3',
      explanation: 'The 3 ranges are: [0,0], [2,2], [0,2] with sums -2, -1, and 2 respectively.',
    },
    {
      input: 'nums = [0], lower = 0, upper = 0',
      output: '1',
    },
  ],
  hints: [
    'Build a prefix sum array. The range sum S(i,j) = prefix[j+1] - prefix[i]. Count pairs (i,j) with i < j+1 and lower <= prefix[j+1] - prefix[i] <= upper.',
    'Use a merge-sort approach on the prefix array. When merging two sorted halves, for each element in the right half, count elements in the left half within a valid range. Two pointers on the sorted left half make this O(n) per merge.',
    'Total time: O(n log n). Watch for integer overflow — use BigInt in JavaScript or 64-bit integers.',
  ],
  functionName: 'countRangeSum',
  params: ['nums', 'lower', 'upper'],
  starterCode: {
    javascript: `function countRangeSum(nums, lower, upper) {
  const n = nums.length;
  const prefix = new Array(n + 1).fill(0n);
  for (let i = 0; i < n; i++) prefix[i + 1] = prefix[i] + BigInt(nums[i]);
  const L = BigInt(lower), U = BigInt(upper);
  let count = 0;
  function mergeSort(lo, hi) {
    if (hi - lo <= 1) return;
    const mid = (lo + hi) >> 1;
    mergeSort(lo, mid);
    mergeSort(mid, hi);
    let l = mid, r = mid;
    for (let i = lo; i < mid; i++) {
      while (l < hi && prefix[l] - prefix[i] < L) l++;
      while (r < hi && prefix[r] - prefix[i] <= U) r++;
      count += r - l;
    }
    const temp = prefix.slice(lo, hi);
    let p = 0, q = mid - lo, k = lo;
    while (p < mid - lo && q < hi - lo) prefix[k++] = temp[p] <= temp[q] ? temp[p++] : temp[q++];
    while (p < mid - lo) prefix[k++] = temp[p++];
    while (q < hi - lo) prefix[k++] = temp[q++];
  }
  mergeSort(0, n + 1);
  return count;
}`,
    typescript: `function countRangeSum(nums: number[], lower: number, upper: number): number {
  const n = nums.length;
  const prefix: bigint[] = new Array(n + 1).fill(0n);
  for (let i = 0; i < n; i++) prefix[i + 1] = prefix[i]! + BigInt(nums[i]!);
  const L = BigInt(lower), U = BigInt(upper);
  let count = 0;
  function mergeSort(lo: number, hi: number): void {
    if (hi - lo <= 1) return;
    const mid = (lo + hi) >> 1;
    mergeSort(lo, mid);
    mergeSort(mid, hi);
    let l = mid, r = mid;
    for (let i = lo; i < mid; i++) {
      while (l < hi && prefix[l]! - prefix[i]! < L) l++;
      while (r < hi && prefix[r]! - prefix[i]! <= U) r++;
      count += r - l;
    }
    const temp = prefix.slice(lo, hi);
    let p = 0, q = mid - lo, k = lo;
    while (p < mid - lo && q < hi - lo) prefix[k++] = temp[p]! <= temp[q]! ? temp[p++]! : temp[q++]!;
    while (p < mid - lo) prefix[k++] = temp[p++]!;
    while (q < hi - lo) prefix[k++] = temp[q++]!;
  }
  mergeSort(0, n + 1);
  return count;
}`,
    python: `def countRangeSum(nums: list, lower: int, upper: int) -> int:
    prefix = [0] * (len(nums) + 1)
    for i, n in enumerate(nums):
        prefix[i + 1] = prefix[i] + n
    count = 0
    def merge_sort(lo, hi):
        nonlocal count
        if hi - lo <= 1:
            return
        mid = (lo + hi) // 2
        merge_sort(lo, mid)
        merge_sort(mid, hi)
        l = r = mid
        for i in range(lo, mid):
            while l < hi and prefix[l] - prefix[i] < lower:
                l += 1
            while r < hi and prefix[r] - prefix[i] <= upper:
                r += 1
            count += r - l
        temp = prefix[lo:hi]
        p, q, k = 0, mid - lo, lo
        while p < mid - lo and q < hi - lo:
            if temp[p] <= temp[q]:
                prefix[k] = temp[p]; p += 1
            else:
                prefix[k] = temp[q]; q += 1
            k += 1
        while p < mid - lo:
            prefix[k] = temp[p]; p += 1; k += 1
        while q < hi - lo:
            prefix[k] = temp[q]; q += 1; k += 1
    merge_sort(0, len(nums) + 1)
    return count`,
  },
  visibleTests: [
    { args: [[-2,5,-1], -2, 2], expected: 3 },
    { args: [[0], 0, 0], expected: 1 },
  ],
  hiddenTests: [
    { args: [[1], 1, 1], expected: 1 },
    { args: [[1,2], 1, 3], expected: 3 },
    { args: [[-3,1,2,-2,2,-1], -3, -1], expected: 7 },
    { args: [[0,0,0], 0, 0], expected: 6 },
  ],
};
