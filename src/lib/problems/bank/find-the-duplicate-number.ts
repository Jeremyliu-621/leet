import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-the-duplicate-number',
  title: 'Find the Duplicate Number',
  difficulty: 'medium',
  tags: ['arrays', 'two-pointers'],
  description: `Given an array of integers \`nums\` containing \`n + 1\` integers where each integer is in the range \`[1, n]\` inclusive.

There is only **one repeated number** in \`nums\`, return *this repeated number*.

You must solve the problem **without** modifying the array \`nums\` and uses only constant extra space.`,
  constraints: [
    '1 <= n <= 10^5',
    'nums.length == n + 1',
    '1 <= nums[i] <= n',
    'All the integers in nums appear only once except for precisely one integer which appears two or more times.',
  ],
  examples: [
    {
      input: 'nums = [1,3,4,2,2]',
      output: '2',
    },
    {
      input: 'nums = [3,1,3,4,2]',
      output: '3',
    },
  ],
  hints: [
    'Treat the array like a linked list where nums[i] points to the next index. The duplicate creates a cycle.',
    "Use Floyd's cycle detection (tortoise and hare): slow = nums[slow], fast = nums[nums[fast]].",
    'Once fast == slow, reset slow to 0 and move both one step at a time. Where they meet is the duplicate.',
  ],
  functionName: 'findDuplicate',
  params: ['nums'],
  starterCode: {
    javascript: 'function findDuplicate(nums) {\n\n}',
    python: 'def findDuplicate(nums):\n    pass',
  },
  visibleTests: [
    { args: [[1, 3, 4, 2, 2]], expected: 2 },
    { args: [[3, 1, 3, 4, 2]], expected: 3 },
  ],
  hiddenTests: [
    { args: [[1, 1]], expected: 1 },
    { args: [[2, 2, 2, 2, 2]], expected: 2 },
    { args: [[1, 4, 6, 2, 3, 5, 4]], expected: 4 },
    { args: [[2, 5, 9, 6, 9, 3, 8, 9, 7, 1]], expected: 9 },
    { args: [[1, 2, 3, 4, 4]], expected: 4 },
  ],
};
