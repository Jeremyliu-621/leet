import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-deletions-to-make-sorted',
  title: 'Minimum Deletions to Make Array Strictly Increasing',
  difficulty: 'medium',
  tags: ['arrays', 'dynamic-programming'],
  description: `Given an integer array \`nums\`, return the **minimum number of elements to delete** so that the remaining elements form a **strictly increasing** sequence (in their original relative order).

Strictly increasing means every element must be strictly less than the next. If the array is already strictly increasing, return \`0\`.

**Key insight:** The minimum deletions equals \`nums.length\` minus the length of the **Longest Increasing Subsequence (LIS)**. The LIS is the longest subsequence you can keep.

You may use an O(n log n) approach using binary search on a \`tails\` array (patience sorting).`,
  constraints: [
    '1 <= nums.length <= 2000',
    '-10^4 <= nums[i] <= 10^4',
  ],
  examples: [
    {
      input: 'nums = [3,1,2,4]',
      output: '1',
      explanation: 'Remove 3 to get [1,2,4], which is strictly increasing.',
    },
    {
      input: 'nums = [1,2,3,4]',
      output: '0',
      explanation: 'Already strictly increasing; no deletions needed.',
    },
    {
      input: 'nums = [4,3,2,1]',
      output: '3',
      explanation: 'Only one element can remain; the LIS has length 1, so delete 3 elements.',
    },
  ],
  functionName: 'minDeletionsToSort',
  params: ['nums'],
  starterCode: {
    javascript: 'function minDeletionsToSort(nums) {\n  // your code here\n}\n',
    python: 'def minDeletionsToSort(nums):\n    # your code here\n    pass\n',
  },
  visibleTests: [
    { args: [[3, 1, 2, 4]], expected: 1 },
    { args: [[1, 2, 3, 4]], expected: 0 },
    { args: [[4, 3, 2, 1]], expected: 3 },
  ],
  hiddenTests: [
    { args: [[1]], expected: 0 },
    { args: [[5, 1, 3, 2, 4]], expected: 2 },
    { args: [[2, 3, 1, 4, 5]], expected: 1 },
    { args: [[10, 1, 2, 3]], expected: 1 },
    { args: [[3, 1, 2]], expected: 1 },
    { args: [[1, 3, 2, 3, 1, 4]], expected: 2 },
    { args: [[2, 2, 2]], expected: 2 },
    { args: [[1, 5, 2, 3, 4]], expected: 1 },
  ],
  hints: [
    'The minimum deletions equals `n - LIS`, where LIS is the length of the Longest Increasing Subsequence. Elements in the LIS are kept; everything else is deleted.',
    'For the LIS, maintain a `tails` array. For each number, binary search for the first element in `tails` that is >= the current number and replace it; if none, append. The length of `tails` at the end is the LIS length.',
    'Use `let lo = 0, hi = tails.length; while (lo < hi) { const mid = (lo + hi) >> 1; if (tails[mid] < num) lo = mid + 1; else hi = mid; } tails[lo] = num;` — this ensures strictly increasing because we search for the first element >= num.',
  ],
};
