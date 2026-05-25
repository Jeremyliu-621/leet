import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-fair-pairs',
  title: 'Count the Number of Fair Pairs',
  difficulty: 'medium',
  tags: ['arrays', 'two-pointers', 'binary-search'],
  description: `Given a **0-indexed** integer array \`nums\` of size \`n\` and two integers \`lower\` and \`upper\`, return the number of **fair pairs**.

A pair \`(i, j)\` is **fair** if:
- \`0 <= i < j < n\`, and
- \`lower <= nums[i] + nums[j] <= upper\``,
  constraints: [
    '1 <= nums.length <= 10^5',
    'nums.length == n',
    '-10^9 <= nums[i] <= 10^9',
    '-10^9 <= lower <= upper <= 10^9',
  ],
  examples: [
    { input: 'nums = [0,1,7,4,4,5], lower = 3, upper = 6', output: '6', explanation: '6 pairs have a sum in [3,6].' },
    { input: 'nums = [1,7,9,2,5], lower = 11, upper = 11', output: '1', explanation: 'Only (2, 5) → 7+9=11... wait, (7+9)=16 no. (7,5) → 12 no. (2,9) → 11 yes.' },
  ],
  hints: [
    'Sort the array, then for each i use binary search (or two pointers) to count j > i where lower - nums[i] <= nums[j] <= upper - nums[i].',
    'Equivalently: count pairs with sum <= upper minus pairs with sum <= lower-1.',
  ],
  functionName: 'countFairPairs',
  params: ['nums', 'lower', 'upper'],
  starterCode: {
    javascript: 'function countFairPairs(nums, lower, upper) {\n  \n}\n',
    python: 'def countFairPairs(nums, lower, upper):\n    pass\n',
  },
  visibleTests: [
    { args: [[0,1,7,4,4,5], 3, 6], expected: 6 },
    { args: [[1,7,9,2,5], 11, 11], expected: 1 },
    { args: [[0,0,0], 0, 1], expected: 3 },
  ],
  hiddenTests: [
    { args: [[1,2,3,4], 4, 7], expected: 5 },
    { args: [[-5,-1,0,1,5], -3, 4], expected: 5 },
    { args: [[1], 0, 5], expected: 0 },
    { args: [[1,2], 3, 3], expected: 1 },
    { args: [[10,10,10], 20, 20], expected: 3 },
  ],
};
