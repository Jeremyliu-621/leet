import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-operations-make-array-continuous',
  title: 'Minimum Number of Operations to Make Array Continuous',
  difficulty: 'hard',
  tags: ['sliding-window', 'binary-search'],
  description: `You are given an integer array \`nums\`. In one operation, you can replace any element in \`nums\` with **any integer**.

\`nums\` is considered **continuous** if both of the following conditions are fulfilled:
- All elements in \`nums\` are **unique**.
- The difference between the **maximum** element and the **minimum** element equals \`nums.length - 1\`.

Return the **minimum number of operations** to make \`nums\` continuous.`,
  constraints: ['1 <= nums.length <= 10^5', '1 <= nums[i] <= 10^9'],
  examples: [
    { input: 'nums = [4,2,5,3]', output: '0', explanation: 'Already continuous: {2,3,4,5}.' },
    { input: 'nums = [1,2,3,5,6]', output: '1', explanation: 'Change 1 to 4: {2,3,4,5,6}.' },
    { input: 'nums = [1,10,100,1000]', output: '3' },
  ],
  hints: [
    'Sort and deduplicate nums. For each possible start value s, the target range is [s, s+n-1].',
    'Use a sliding window on the deduplicated array: how many values fall in [s, s+n-1]? That many elements are already correct.',
    'Operations needed = n - (max elements fitting in window). Use binary search or two pointers.',
  ],
  functionName: 'minOperations',
  params: ['nums'],
  starterCode: {
    javascript: 'function minOperations(nums) {\n\n}\n',
    python: 'def minOperations(nums):\n    pass\n',
  },
  visibleTests: [
    { args: [[4, 2, 5, 3]], expected: 0 },
    { args: [[1, 2, 3, 5, 6]], expected: 1 },
    { args: [[1, 10, 100, 1000]], expected: 3 },
  ],
  hiddenTests: [
    { args: [[1]], expected: 0 },
    { args: [[1, 1, 1, 1]], expected: 3 },
    { args: [[1, 2, 3, 4, 100]], expected: 1 },
    { args: [[5, 3, 4, 2, 1]], expected: 0 },
  ],
};
