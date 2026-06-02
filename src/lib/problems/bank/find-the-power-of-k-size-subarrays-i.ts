import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-the-power-of-k-size-subarrays-i',
  title: 'Find the Power of K-Size Subarrays I',
  difficulty: 'medium',
  tags: ['arrays', 'sliding-window'],
  description: `You are given an array of integers \`nums\` of length \`n\` and a positive integer \`k\`.

The **power** of an array is defined as:
- Its **maximum element**, if **all** of its elements are **consecutive** and sorted in **ascending order**.
- \`-1\` otherwise.

Return an integer array \`results\` of size \`n - k + 1\`, where \`results[i]\` is the **power** of the subarray \`nums[i..i+k-1]\`.`,
  constraints: [
    '1 <= n == nums.length <= 500',
    '1 <= nums[i] <= 10^5',
    '1 <= k <= n',
  ],
  examples: [
    {
      input: 'nums = [1,2,3,4,3,2,5], k = 3',
      output: '[3,4,-1,-1,-1]',
      explanation: '[1,2,3] → 3 (consecutive ascending), [2,3,4] → 4, [3,4,3] → -1, [4,3,2] → -1, [3,2,5] → -1.',
    },
    {
      input: 'nums = [2,2,2,2,2], k = 4',
      output: '[-1,-1]',
      explanation: 'No window of size 4 is strictly consecutive ascending.',
    },
    {
      input: 'nums = [3,2,3,2,3,2], k = 2',
      output: '[-1,3,-1,3,-1]',
      explanation: '[3,2]→-1, [2,3]→3, [3,2]→-1, [2,3]→3, [3,2]→-1.',
    },
  ],
  hints: [
    'For each starting index i (from 0 to n-k), check whether nums[i], nums[i+1], ..., nums[i+k-1] are consecutive ascending integers, i.e., nums[j+1] === nums[j] + 1 for every j in [i, i+k-2].',
    'If the check passes, append nums[i+k-1] to results; otherwise append -1.',
    'With n ≤ 500, O(n·k) is well within time limits. You can also precompute a `consec` array where `consec[i] = 1` if `nums[i] === nums[i-1] + 1`, then use a prefix sum to check each window in O(1).',
  ],
  functionName: 'resultsArray',
  params: ['nums', 'k'],
  starterCode: {
    javascript: `function resultsArray(nums, k) {
  if (k === 1) return nums.slice();
  const n = nums.length, res = [];
  let streak = 1;
  for (let i = 1; i < n; i++) {
    if (nums[i] === nums[i - 1] + 1) streak++; else streak = 1;
    if (i >= k - 1) res.push(streak >= k ? nums[i] : -1);
  }
  return res;
}`,
    typescript: `function resultsArray(nums: number[], k: number): number[] {
  if (k === 1) return nums.slice();
  const n = nums.length, res: number[] = [];
  let streak = 1;
  for (let i = 1; i < n; i++) {
    if (nums[i] === nums[i - 1] + 1) streak++; else streak = 1;
    if (i >= k - 1) res.push(streak >= k ? nums[i] : -1);
  }
  return res;
}`,
    python: `def resultsArray(nums, k):
    if k == 1: return nums[:]
    n, res, streak = len(nums), [], 1
    for i in range(1, n):
        streak = streak + 1 if nums[i] == nums[i-1] + 1 else 1
        if i >= k - 1: res.append(nums[i] if streak >= k else -1)
    return res`,
  },
  visibleTests: [
    { args: [[1, 2, 3, 4, 3, 2, 5], 3], expected: [3, 4, -1, -1, -1] },
    { args: [[2, 2, 2, 2, 2], 4], expected: [-1, -1] },
    { args: [[3, 2, 3, 2, 3, 2], 2], expected: [-1, 3, -1, 3, -1] },
  ],
  hiddenTests: [
    { args: [[1, 2, 3], 1], expected: [1, 2, 3] },
    { args: [[1, 2, 3], 3], expected: [3] },
    { args: [[5, 6, 7, 8, 9], 3], expected: [7, 8, 9] },
    { args: [[1, 2, 4, 5, 6], 3], expected: [-1, -1, 6] },
    { args: [[1], 1], expected: [1] },
    { args: [[10, 11, 12, 10, 11], 2], expected: [11, 12, -1, 11] },
    { args: [[1, 2, 3, 4, 5], 5], expected: [5] },
    { args: [[5, 4, 3, 2, 1], 2], expected: [-1, -1, -1, -1] },
    { args: [[1, 3, 5, 7], 2], expected: [-1, -1, -1] },
    { args: [[1, 2, 3, 5, 6, 7], 3], expected: [3, -1, -1, 7] },
  ],
};
