import type { Problem } from '../types';

export const problem: Problem = {
  id: 'shortest-unsorted-continuous-subarray',
  title: 'Shortest Unsorted Continuous Subarray',
  difficulty: 'medium',
  tags: ['arrays'],
  description: `Given an integer array \`nums\`, find the **shortest continuous subarray** that, if sorted in ascending order, makes the whole array sorted in ascending order.

Return the length of this subarray. If the array is already sorted, return \`0\`.`,
  constraints: [
    '1 <= nums.length <= 10^4',
    '-10^5 <= nums[i] <= 10^5',
  ],
  examples: [
    {
      input: 'nums = [2,6,4,8,10,9,15]',
      output: '5',
      explanation: 'Sorting the subarray [6,4,8,10,9] (indices 1–5) makes the whole array sorted.',
    },
    {
      input: 'nums = [1,2,3,4,5]',
      output: '0',
      explanation: 'The array is already sorted.',
    },
    {
      input: 'nums = [1]',
      output: '0',
    },
  ],
  hints: [
    'Level 1: Compare `nums` to its sorted version. The subarray that needs sorting is bounded by the first and last positions where the two arrays differ.',
    'Level 2: Sort a copy. Find the leftmost index `l` where `nums[l] !== sorted[l]` and rightmost `r` where they differ. Return `r - l + 1` (or 0 if no difference).',
    'Level 3: O(n) approach: track the running maximum left-to-right — any element smaller than the running max is "out of place" and extends the right boundary. Track the running minimum right-to-left for the left boundary.',
  ],
  functionName: 'findUnsortedSubarray',
  params: ['nums'],
  starterCode: {
    javascript: `function findUnsortedSubarray(nums) {
  const sorted = [...nums].sort((a, b) => a - b);
  let l = 0, r = nums.length - 1;
  while (l <= r && nums[l] === sorted[l]) l++;
  while (r >= l && nums[r] === sorted[r]) r--;
  return r >= l ? r - l + 1 : 0;
}`,
    typescript: `function findUnsortedSubarray(nums: number[]): number {
  const sorted = [...nums].sort((a, b) => a - b);
  let l = 0, r = nums.length - 1;
  while (l <= r && nums[l] === sorted[l]) l++;
  while (r >= l && nums[r] === sorted[r]) r--;
  return r >= l ? r - l + 1 : 0;
}`,
    python: `def findUnsortedSubarray(nums):
    if hasattr(nums, 'to_py'): nums = nums.to_py()
    nums = [int(x) for x in nums]
    s = sorted(nums); n = len(nums)
    l, r = 0, n-1
    while l <= r and nums[l] == s[l]: l += 1
    while r >= l and nums[r] == s[r]: r -= 1
    return r - l + 1 if r >= l else 0`,
  },
  visibleTests: [
    {
      args: [[2, 6, 4, 8, 10, 9, 15]],
      expected: 5,
    },
    {
      args: [[1, 2, 3, 4, 5]],
      expected: 0,
    },
    {
      args: [[1]],
      expected: 0,
    },
  ],
  hiddenTests: [
    {
      args: [[2, 3, 3, 2, 4]],
      expected: 3,
    },
    {
      args: [[5, 4, 3, 2, 1]],
      expected: 5,
    },
    {
      args: [[1, 3, 2, 4, 5]],
      expected: 2,
    },
    {
      args: [[1, 2, 4, 3, 5]],
      expected: 2,
    },
    {
      args: [[1, 2, 3]],
      expected: 0,
    },
    {
      args: [[3, 2, 1]],
      expected: 3,
    },
  ],
};
