import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-the-number-of-inversions',
  title: 'Count the Number of Inversions',
  difficulty: 'medium',
  tags: ['arrays'],
  description: `Given an integer array \`nums\`, return the number of **inversions** in the array.

An inversion is a pair \`(i, j)\` where \`0 <= i < j < nums.length\` and \`nums[i] > nums[j]\`.

**Note:** The answer may be very large, so ensure your solution is efficient enough (O(n log n) or better).`,
  constraints: [
    '1 <= nums.length <= 10^5',
    '0 <= nums[i] <= 10^9',
  ],
  examples: [
    {
      input: 'nums = [2,4,1,3,5]',
      output: '3',
      explanation: 'The inversions are (2,1), (4,1), and (4,3), giving 3 pairs.',
    },
    {
      input: 'nums = [1,20,6,4,5]',
      output: '5',
      explanation: 'The inversions are (20,6), (20,4), (20,5), (6,4), and (6,5), giving 5 pairs.',
    },
  ],
  hints: [
    'A brute-force O(n²) approach checks every pair — that is too slow for n=10^5. Use divide-and-conquer.',
    'Modify merge sort: when merging two sorted halves, any element in the right half that is placed before elements remaining in the left half contributes that many inversions (equal to the number of remaining left-half elements).',
    'Count inversions during the merge step and accumulate the total count as you recursively sort.',
  ],
  functionName: 'countInversions',
  params: ['nums'],
  starterCode: {
    javascript: `function countInversions(nums) {
  let count = 0;
  function mergeSort(arr) {
    if (arr.length <= 1) return arr;
    const mid = arr.length >> 1;
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));
    const merged = [];
    let i = 0, j = 0;
    while (i < left.length && j < right.length) {
      if (left[i] <= right[j]) { merged.push(left[i++]); }
      else { count += left.length - i; merged.push(right[j++]); }
    }
    while (i < left.length) merged.push(left[i++]);
    while (j < right.length) merged.push(right[j++]);
    return merged;
  }
  mergeSort(nums);
  return count;
}`,
    typescript: `function countInversions(nums: number[]): number {
  let count = 0;
  function mergeSort(arr: number[]): number[] {
    if (arr.length <= 1) return arr;
    const mid = arr.length >> 1;
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));
    const merged: number[] = [];
    let i = 0, j = 0;
    while (i < left.length && j < right.length) {
      if (left[i]! <= right[j]!) { merged.push(left[i++]!); }
      else { count += left.length - i; merged.push(right[j++]!); }
    }
    while (i < left.length) merged.push(left[i++]!);
    while (j < right.length) merged.push(right[j++]!);
    return merged;
  }
  mergeSort(nums);
  return count;
}`,
    python: `def countInversions(nums):
    if hasattr(nums, 'to_py'): nums = nums.to_py()
    nums = [int(x) for x in nums]
    count = [0]
    def merge_sort(arr):
        if len(arr) <= 1: return arr
        mid = len(arr) // 2
        left = merge_sort(arr[:mid]); right = merge_sort(arr[mid:])
        merged = []; i = j = 0
        while i < len(left) and j < len(right):
            if left[i] <= right[j]: merged.append(left[i]); i += 1
            else: count[0] += len(left)-i; merged.append(right[j]); j += 1
        merged.extend(left[i:]); merged.extend(right[j:])
        return merged
    merge_sort(nums)
    return count[0]`,
  },
  visibleTests: [
    { args: [[2, 4, 1, 3, 5]], expected: 3 },
    { args: [[1, 20, 6, 4, 5]], expected: 5 },
    { args: [[1, 2, 3, 4, 5]], expected: 0 },
    { args: [[5, 4, 3, 2, 1]], expected: 10 },
    { args: [[1, 1, 1]], expected: 0 },
  ],
  hiddenTests: [
    { args: [[3, 1, 2]], expected: 2 },
    { args: [[1, 3, 2, 4]], expected: 1 },
    { args: [[4, 3, 2, 1, 0]], expected: 10 },
    { args: [[1, 2, 1, 2, 1]], expected: 3 },
    { args: [[10, 9, 8, 7, 6, 5, 4, 3, 2, 1]], expected: 45 },
  ],
};
