import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-operations-to-make-array-alternating',
  title: 'Minimum Operations to Make Array Alternating',
  difficulty: 'medium',
  tags: ['arrays', 'hash-map'],
  description: `You are given a 0-indexed array \`nums\` consisting of \`n\` positive integers.

The array \`nums\` is called **alternating** if:
- \`nums[i - 2] == nums[i]\` for all \`i\` in range \`[2, n - 1]\` (all even-indexed elements are equal, and all odd-indexed elements are equal).
- \`nums[i - 1] != nums[i]\` for all \`i\` in range \`[1, n - 1]\` (adjacent elements differ).

In one operation, you can choose an index \`i\` and change \`nums[i]\` to any positive integer.

Return the **minimum number of operations** to make \`nums\` alternating.`,
  constraints: [
    '1 <= nums.length <= 10^5',
    '1 <= nums[i] <= 10^5',
  ],
  examples: [
    {
      input: 'nums = [3,1,3,2,4,3]',
      output: '3',
      explanation:
        'One way: change nums to [3,1,3,1,3,1] — 3 changes. Even positions all 3, odd positions all 1.',
    },
    {
      input: 'nums = [1,2,2,2,2]',
      output: '2',
      explanation:
        'Change to [1,2,1,2,1] — 2 changes. Even positions all 1, odd positions all 2.',
    },
  ],
  hints: [
    'Count frequencies for even-indexed and odd-indexed positions separately.',
    'Find the most frequent value at each group. If they differ, use them both.',
    'If they are the same, try the second-most-frequent value for one group.',
  ],
  functionName: 'minimumOperations',
  params: ['nums'],
  starterCode: {
    javascript: 'function minimumOperations(nums) {\n  \n}\n',
    python: 'def minimumOperations(nums):\n    pass\n',
  },
  visibleTests: [
    { args: [[3, 1, 3, 2, 4, 3]], expected: 3 },
    { args: [[1, 2, 2, 2, 2]], expected: 2 },
    { args: [[1, 1, 1]], expected: 1 },
  ],
  hiddenTests: [
    { args: [[1]], expected: 0 },
    { args: [[1, 2]], expected: 0 },
    { args: [[2, 2, 2, 2]], expected: 2 },
    { args: [[1, 2, 1, 2]], expected: 0 },
    { args: [[5, 3, 5, 3, 4]], expected: 1 },
  ],
};
