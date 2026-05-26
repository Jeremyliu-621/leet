import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-number-of-fair-pairs',
  title: 'Count Number of Fair Pairs',
  difficulty: 'medium',
  tags: ['arrays', 'binary-search', 'two-pointers'],
  description: `Given a 0-indexed integer array \`nums\` of size \`n\` and two integers \`lower\` and \`upper\`, return the number of **fair pairs**.

A pair \`(i, j)\` is **fair** if:
- \`0 ≤ i < j < n\`, and
- \`lower ≤ nums[i] + nums[j] ≤ upper\`

**Examples:**
- \`nums = [0,1,7,4,4,5]\`, \`lower = 3\`, \`upper = 6\` → **6**
- \`nums = [1,7,9,2,5]\`, \`lower = 11\`, \`upper = 11\` → **1**`,
  constraints: [
    '1 ≤ n ≤ 10^5',
    '-10^9 ≤ nums[i] ≤ 10^9',
    '-10^9 ≤ lower ≤ upper ≤ 10^9',
  ],
  examples: [
    {
      input: 'nums = [0,1,7,4,4,5], lower = 3, upper = 6',
      output: '6',
      explanation:
        'The 6 fair pairs are: (0,3), (0,4), (0,5), (1,3), (1,4), (1,5). Their sums are 4, 4, 5, 5, 5, 6 — all within [3, 6].',
    },
    {
      input: 'nums = [1,7,9,2,5], lower = 11, upper = 11',
      output: '1',
      explanation: 'Only pair (1,3): 7+2=... wait, sorted: [1,2,5,7,9]. The only pair summing to 11 is (2,9) → index pair (4,2) in original, or equivalently (7,4): 7+4=11 — i.e., original indices (1,3). Answer: 1.',
    },
  ],
  hints: [
    'Sort the array. Sorting does not change the count of valid pairs because we only care about pair values, not the original indices (any i < j pair in the sorted array corresponds to a unique unordered value pair).',
    'For each fixed index `i` (after sorting), the valid partners `j > i` must satisfy `lower - nums[i] ≤ nums[j] ≤ upper - nums[i]`. Because the array is sorted, these `j` indices form a contiguous range — find both boundaries with binary search.',
    'Use `lowerBound` (first index ≥ target) and `upperBound` (first index > target) on the slice `nums[i+1..n-1]`. The count for index `i` is `upperBound(upper - nums[i]) - lowerBound(lower - nums[i])`. Sum these counts over all `i`. Total time: O(n log n).',
  ],
  functionName: 'countFairPairs',
  params: ['nums', 'lower', 'upper'],
  starterCode: {
    javascript: `function countFairPairs(nums, lower, upper) {
  // Return the count of pairs (i, j) where i < j and lower <= nums[i]+nums[j] <= upper.
}`,
    python: `def countFairPairs(nums: list[int], lower: int, upper: int) -> int:
    # Return the count of pairs (i, j) where i < j and lower <= nums[i]+nums[j] <= upper.
    pass`,
  },
  visibleTests: [
    { args: [[0, 1, 7, 4, 4, 5], 3, 6], expected: 6 },
    { args: [[1, 7, 9, 2, 5], 11, 11], expected: 1 },
    { args: [[1, 2, 3, 4], 3, 5], expected: 4 },
  ],
  hiddenTests: [
    { args: [[1, 1, 1, 1], 2, 2], expected: 6 },
    { args: [[1, 2, 3], 1, 6], expected: 3 },
    { args: [[1], 1, 2], expected: 0 },
    { args: [[-1, 0, 1], 0, 0], expected: 1 },
    { args: [[1, 2, 3, 4, 5], 5, 8], expected: 7 },
    { args: [[10, 20, 30], 25, 45], expected: 2 },
    { args: [[-5, -4, -3, -2, -1], -7, -4], expected: 7 },
  ],
};
