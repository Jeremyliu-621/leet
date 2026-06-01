import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-the-number-of-incremovable-subarrays-ii',
  title: 'Count the Number of Incremovable Subarrays II',
  difficulty: 'hard',
  tags: ['arrays', 'two-pointers', 'binary-search'],
  description: `You are given a **0-indexed** array of positive integers \`nums\`.

A subarray of \`nums\` is called **incremovable** if, after removing it from \`nums\`, the remaining elements form a **strictly increasing** array (or the array is empty).

Return the number of **incremovable** subarrays of \`nums\`.

**Note:** An empty array is considered strictly increasing.

The time complexity of your solution must be \`O(n log n)\`.`,
  constraints: [
    '`1 <= nums.length <= 10^5`',
    '`1 <= nums[i] <= 10^9`',
  ],
  examples: [
    {
      input: 'nums = [1,2,3,10,5]',
      output: '9',
      explanation: 'Remove [3,10,5], [2,3,10,5], [1,2,3,10,5], [10,5], [3,10], [2,3,10], [1,2,3,10], [10], [5] → 9 valid removals.',
    },
    {
      input: 'nums = [6,5,7,8]',
      output: '7',
    },
    {
      input: 'nums = [8,7,6,6]',
      output: '3',
    },
  ],
  hints: [
    'Find the longest strictly increasing prefix: let `pre` be the largest index such that nums[0..pre] is strictly increasing (i.e. nums[i] < nums[i+1] for all i in [0, pre-1]). Similarly find the longest strictly increasing suffix starting index `suf`.',
    'For each left boundary l (0 ≤ l ≤ pre+1), the subarray removed is nums[l..r]. The remaining left part nums[0..l-1] must be a prefix of the increasing prefix. Then binary search on the suffix to find the smallest r such that nums[r+1] > nums[l-1] (or r can be n-1 if l=0). Count n - r valid right boundaries.',
    'Start with the case l=0 (remove from the beginning): any suffix starting from index r is removable as long as nums[r+1..n-1] is strictly increasing. Then for l=1,2,...,pre+1 use binary search in the suffix to find valid r values. Sum all counts.',
  ],
  functionName: 'incremovableSubarrayCount',
  params: ['nums'],
  starterCode: {
    javascript: `function incremovableSubarrayCount(nums) {

}`,
    typescript: `function incremovableSubarrayCount(nums: number[]): number {

}`,
    python: `def incremovableSubarrayCount(nums: list[int]) -> int:
    pass`,
  },
  visibleTests: [
    { args: [[1, 2, 3, 10, 5]], expected: 9 },
    { args: [[6, 5, 7, 8]], expected: 7 },
    { args: [[8, 7, 6, 6]], expected: 3 },
    { args: [[1]], expected: 1 },
  ],
  hiddenTests: [
    { args: [[1, 2, 3]], expected: 6 },
    { args: [[3, 2, 1]], expected: 3 },
    { args: [[1, 2, 1, 2]], expected: 6 },
    { args: [[5, 4, 3, 2, 1]], expected: 3 },
    { args: [[1, 2, 3, 4, 5]], expected: 15 },
    { args: [[1, 3, 2, 4, 5]], expected: 11 },
    { args: [[2, 1, 3, 4, 1, 2]], expected: 4 },
    { args: [[1, 2, 3, 2, 1]], expected: 5 },
  ],
};
