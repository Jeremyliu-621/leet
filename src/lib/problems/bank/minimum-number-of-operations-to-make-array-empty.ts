import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-number-of-operations-to-make-array-empty',
  title: 'Minimum Number of Operations to Make Array Empty',
  difficulty: 'medium',
  tags: ['arrays', 'hash-map', 'math'],
  description: `You are given a **0-indexed** array \`nums\`. In one operation, you can delete **exactly 2 or exactly 3** elements that have the **same value**.

Return the **minimum** number of operations to empty the array, or \`-1\` if it is not possible.`,
  constraints: [
    '2 <= nums.length <= 10^5',
    '1 <= nums[i] <= 10^6',
  ],
  examples: [
    {
      input: 'nums = [2,3,3,2,2,4,2,3,4]',
      output: '4',
      explanation: 'Value 2 appears 4 times: 2 ops (2+2). Value 3 appears 3 times: 1 op (3). Value 4 appears 2 times: 1 op (2). Total = 4.',
    },
    {
      input: 'nums = [2,1,2,2,3,3]',
      output: '-1',
      explanation: 'Value 1 appears exactly once, which cannot be deleted by any valid operation.',
    },
    {
      input: 'nums = [1,1,1,1,1]',
      output: '2',
      explanation: 'Value 1 appears 5 times: 1 op of size 2 + 1 op of size 3, or 5 = 3+2. 2 ops total.',
    },
  ],
  hints: [
    'Build a frequency map for each distinct value.',
    'If any frequency is exactly 1, return -1 (cannot delete a lone element).',
    'For frequency f ≥ 2, the minimum operations is ceil(f / 3). Verify: 2→1, 3→1, 4→2, 5→2, 6→2, 7→3.',
  ],
  functionName: 'minOperations',
  params: ['nums'],
  starterCode: {
    javascript: `function minOperations(nums) {

}`,
    python: `def minOperations(nums):
    pass`,
  },
  visibleTests: [
    { args: [[2, 3, 3, 2, 2, 4, 2, 3, 4]], expected: 4 },
    { args: [[2, 1, 2, 2, 3, 3]], expected: -1 },
    { args: [[1, 1, 1, 1, 1]], expected: 2 },
  ],
  hiddenTests: [
    { args: [[1, 1]], expected: 1 },
    { args: [[1, 1, 1]], expected: 1 },
    { args: [[1, 1, 1, 1]], expected: 2 },
    { args: [[1, 1, 2, 2, 2]], expected: 2 },
    { args: [[1, 2, 3]], expected: -1 },
    { args: [[1, 1, 1, 1, 1, 1, 1]], expected: 3 },
  ],
};
