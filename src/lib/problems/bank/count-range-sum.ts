import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-range-sum',
  title: 'Count of Range Sum',
  difficulty: 'hard',
  tags: ['arrays', 'binary-search'],
  description: `Given an integer array \`nums\` and two integers \`lower\` and \`upper\`, return the **number of range sums** that lie in \`[lower, upper]\` inclusive.

A range sum \`S(i, j)\` is defined as the sum of elements in \`nums\` between indices \`i\` and \`j\` inclusive, where \`i <= j\`.`,
  constraints: [
    '`1 <= nums.length <= 10^5`',
    '`-2^31 <= nums[i] <= 2^31 - 1`',
    '`-10^5 <= lower <= upper <= 10^5`',
  ],
  examples: [
    {
      input: 'nums = [-2,5,-1], lower = -2, upper = 2',
      output: '3',
      explanation: 'The three ranges are [0,0], [2,2], and [0,2] with sums -2, -1, and 2.',
    },
    {
      input: 'nums = [0], lower = 0, upper = 0',
      output: '1',
    },
  ],
  hints: [
    'Compute prefix sums. A range sum S(i,j) = prefix[j+1] - prefix[i]. Count pairs where lower ≤ prefix[j+1] - prefix[i] ≤ upper.',
    'Use merge sort: during the merge step, for each prefix[i] in the left half, count prefix[j] in the right half satisfying prefix[i]+lower ≤ prefix[j] ≤ prefix[i]+upper.',
    'Two pointers in the merge step advance k and j across the right half for each i. This keeps the overall algorithm O(n log n).',
  ],
  functionName: 'countRangeSum',
  params: ['nums', 'lower', 'upper'],
  starterCode: {
    javascript: `function countRangeSum(nums, lower, upper) {

}`,
    python: `def countRangeSum(nums, lower, upper):
    pass`,
  },
  visibleTests: [
    { args: [[-2,5,-1], -2, 2], expected: 3 },
    { args: [[0], 0, 0], expected: 1 },
    { args: [[1,2,3], 2, 5], expected: 4 },
  ],
  hiddenTests: [
    { args: [[1], 1, 1], expected: 1 },
    { args: [[-3,1,2,-2,2,-1], -3, -1], expected: 7 },
    { args: [[1,2,3,4], 1, 6], expected: 7 },
    { args: [[0,0], 0, 0], expected: 3 },
  ],
};
