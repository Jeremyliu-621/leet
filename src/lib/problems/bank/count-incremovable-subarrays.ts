import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-incremovable-subarrays',
  title: 'Count the Number of Incremovable Subarrays',
  difficulty: 'easy',
  tags: ['arrays', 'two-pointers'],
  description: `An array is called **strictly increasing** if each element is strictly less than the next element.

Given a 0-indexed integer array \`nums\`, return the **number of subarrays** whose removal makes the remaining elements of \`nums\` strictly increasing.

The remaining elements after removing subarray \`nums[l..r]\` are the concatenation of \`nums[0..l-1]\` and \`nums[r+1..n-1]\`. A subarray is a contiguous non-empty sequence of elements.

> **Note:** An empty array is considered strictly increasing.`,
  constraints: [
    '1 <= nums.length <= 50',
    '1 <= nums[i] <= 50',
  ],
  examples: [
    {
      input: 'nums = [1,2,3,4]',
      output: '10',
      explanation: 'Every subarray\'s removal results in a strictly increasing array. Total subarrays of length n is n*(n+1)/2 = 10.',
    },
    {
      input: 'nums = [6,3,1,2,3]',
      output: '5',
      explanation: 'Valid removals: [6,3] (leaving [1,2,3]), [6,3,1] (leaving [2,3]), [6,3,1,2] (leaving [3]), [6,3,1,2,3] (leaving []), and [3,1,2,3] (leaving [6]). Total: 5.',
    },
  ],
  hints: [
    'Try all possible subarrays [l, r] and check if removal makes nums strictly increasing.',
    'After removing nums[l..r], check that nums[0..l-1] is strictly increasing, nums[r+1..n-1] is strictly increasing, and nums[l-1] < nums[r+1] if both borders exist.',
    'With small n <= 50, an O(n^3) or O(n^2) brute-force approach is fine.',
  ],
  functionName: 'incremovableSubarrayCount',
  params: ['nums'],
  starterCode: {
    javascript: `function incremovableSubarrayCount(nums) {
  const n = nums.length;
  function isStrictlyIncreasing(a, b) { // check nums[a..b-1]
    for (let i = a; i < b - 1; i++) if (nums[i] >= nums[i + 1]) return false;
    return true;
  }
  let count = 0;
  for (let l = 0; l < n; l++) {
    for (let r = l; r < n; r++) {
      const leftOk = l === 0 || isStrictlyIncreasing(0, l);
      const rightOk = r === n - 1 || isStrictlyIncreasing(r + 1, n);
      const joinOk = l === 0 || r === n - 1 || nums[l - 1] < nums[r + 1];
      if (leftOk && rightOk && joinOk) count++;
    }
  }
  return count;
}`,
    typescript: `function incremovableSubarrayCount(nums: number[]): number {
  const n = nums.length;
  function isStrictlyIncreasing(a: number, b: number): boolean {
    for (let i = a; i < b - 1; i++) if (nums[i]! >= nums[i + 1]!) return false;
    return true;
  }
  let count = 0;
  for (let l = 0; l < n; l++) {
    for (let r = l; r < n; r++) {
      const leftOk = l === 0 || isStrictlyIncreasing(0, l);
      const rightOk = r === n - 1 || isStrictlyIncreasing(r + 1, n);
      const joinOk = l === 0 || r === n - 1 || nums[l - 1]! < nums[r + 1]!;
      if (leftOk && rightOk && joinOk) count++;
    }
  }
  return count;
}`,
    python: `def incremovableSubarrayCount(nums):
    n = len(nums)
    def is_inc(a, b):
        return all(nums[i] < nums[i+1] for i in range(a, b-1))
    count = 0
    for l in range(n):
        for r in range(l, n):
            left_ok = l == 0 or is_inc(0, l)
            right_ok = r == n - 1 or is_inc(r + 1, n)
            join_ok = l == 0 or r == n - 1 or nums[l-1] < nums[r+1]
            if left_ok and right_ok and join_ok:
                count += 1
    return count`,
  },
  visibleTests: [
    { args: [[1, 2, 3, 4]], expected: 10 },
    { args: [[6, 3, 1, 2, 3]], expected: 5 },
  ],
  hiddenTests: [
    { args: [[1]], expected: 1 },
    { args: [[1, 2]], expected: 3 },
    { args: [[2, 1]], expected: 3 },
    { args: [[1, 2, 1]], expected: 4 },
    { args: [[5, 4, 3, 2, 1]], expected: 3 },
    { args: [[1, 3, 2, 4]], expected: 8 },
    { args: [[1, 2, 3, 1]], expected: 5 },
  ],
};
