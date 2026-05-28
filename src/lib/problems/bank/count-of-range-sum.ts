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
    javascript: 'function countRangeSum(nums, lower, upper) {\n\n}\n',
    typescript: "function countRangeSum(nums: number[], lower: number, upper: number): number {\n\n}",

    python: 'def countRangeSum(nums: list, lower: int, upper: int) -> int:\n    pass\n',
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
