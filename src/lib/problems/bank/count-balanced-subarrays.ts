import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-balanced-subarrays',
  title: 'Count Balanced Subarrays',
  difficulty: 'medium',
  tags: ['arrays', 'hash-map'],
  description: `Given an integer array \`nums\`, a subarray is called **balanced** if the sum of its elements at even positions (0-indexed within the subarray: positions 0, 2, 4, …) equals the sum at odd positions (1, 3, 5, …).

Return the **total number** of balanced subarrays of \`nums\`.

A subarray is a contiguous non-empty sequence of elements within an array.`,
  constraints: [
    '1 <= nums.length <= 10^5',
    '1 <= nums[i] <= 10^4',
  ],
  examples: [
    {
      input: 'nums = [2,4,4,2]',
      output: '2',
      explanation: '[4,4] (positions 1–2): even-sum=4, odd-sum=4 ✓. [2,4,4,2] (positions 0–3): even-sum=2+4=6, odd-sum=4+2=6 ✓.',
    },
    {
      input: 'nums = [1,1,1,1]',
      output: '4',
      explanation: 'Balanced subarrays: [1,1] (0–1), [1,1] (1–2), [1,1] (2–3), and [1,1,1,1] (0–3). Each has equal even-/odd-position sums.',
    },
    {
      input: 'nums = [1,2,3]',
      output: '0',
      explanation: 'No contiguous subarray has equal even- and odd-position sums.',
    },
  ],
  hints: [
    'Think about the difference between the even-position sum and the odd-position sum within a subarray. A subarray is balanced when this difference is zero.',
    'Define an alternating prefix difference: `prefDiff[i] = nums[0] − nums[1] + nums[2] − … ± nums[i]`. A subarray [l, r] is balanced if and only if `prefDiff[r] == prefDiff[l−1]` (with `prefDiff[−1] = 0`).',
    'Use a hash map to count previous occurrences of each prefix difference. For each index `r`, add `freq[prefDiff[r]]` to the answer (before recording the current value). Initialize with `freq[0] = 1`.',
  ],
  functionName: 'countBalanced',
  params: ['nums'],
  starterCode: {
    javascript: `function countBalanced(nums) {

}`,
    typescript: `function countBalanced(nums: number[]): number {

}`,
    python: `def countBalanced(nums):
    pass`,
  },
  visibleTests: [
    { args: [[2, 4, 4, 2]], expected: 2 },
    { args: [[1, 1, 1, 1]], expected: 4 },
    { args: [[1, 2, 3]], expected: 0 },
  ],
  hiddenTests: [
    { args: [[5, 5]], expected: 1 },
    { args: [[1, 1, 2, 2]], expected: 3 },
    { args: [[1, 2, 1, 2]], expected: 1 },
    { args: [[3, 3, 3, 3, 3, 3]], expected: 9 },
    { args: [[2, 1, 3, 4]], expected: 1 },
    { args: [[7]], expected: 0 },
    { args: [[1, 2, 3, 4, 5]], expected: 0 },
    { args: [[4, 2, 4, 2, 4, 2]], expected: 2 },
  ],
};
