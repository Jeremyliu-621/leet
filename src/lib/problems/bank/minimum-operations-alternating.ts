import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-operations-alternating',
  title: 'Minimum Number of Operations to Make Array Alternating',
  difficulty: 'medium',
  tags: ['hash-map'],
  description: `You are given a **0-indexed** array \`nums\` consisting of \`n\` positive integers.

The array \`nums\` is called **alternating** if:
- \`nums[i - 2] == nums[i]\` for all \`i\` where \`2 <= i <= n - 1\`
- \`nums[i - 1] != nums[i]\` for all \`i\` where \`1 <= i <= n - 1\`

In one operation, you can **choose an index** \`i\` and **change** \`nums[i]\` to **any** positive integer.

Return the **minimum** number of operations needed to make \`nums\` alternating.`,
  constraints: [
    '1 <= nums.length <= 10^5',
    '1 <= nums[i] <= 10^5',
  ],
  examples: [
    { input: 'nums = [3,1,3,2,4,3]', output: '3', explanation: 'Change nums[1] to 3, nums[2] to 1, nums[5] to 1 → [3,1,1,3,4,1]. Wait — simplest is indices 1→3, 3→3, 5→3 giving [3,3,1,3,1,3]. Need 3 ops.' },
    { input: 'nums = [1,2,2,2,2]', output: '2', explanation: 'Change nums[1] to 1, nums[3] to 1 → [1,1,1,1,2]... or change nums[2] and nums[4].' },
  ],
  hints: [
    'Find the most frequent element among even indices and the most frequent among odd indices.',
    'If they differ, keep those two; otherwise you may need to use the second most frequent on one side.',
    'The answer is n - (keep_even + keep_odd).',
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
    { args: [[1]], expected: 0 },
  ],
  hiddenTests: [
    { args: [[1, 1]], expected: 1 },
    { args: [[1, 2]], expected: 0 },
    { args: [[1, 2, 1, 2, 1]], expected: 0 },
    { args: [[2, 2, 2, 2]], expected: 2 },
    { args: [[1, 1, 1]], expected: 1 },
  ],
};
