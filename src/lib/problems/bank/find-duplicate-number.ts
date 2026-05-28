import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-duplicate-number',
  title: 'Find the Duplicate Number',
  difficulty: 'medium',
  tags: ['two-pointers'],
  description: `Given an array \`nums\` containing \`n + 1\` integers where each integer is in the range \`[1, n]\` inclusive, there is **exactly one repeated number**. Return that number.

You must solve the problem **without modifying** the array and using only **O(1)** extra space.`,
  constraints: [
    '`1 <= n <= 10⁵`',
    '`nums.length == n + 1`',
    '`1 <= nums[i] <= n`',
    'There is only one repeated number, but it could be repeated more than once',
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
    {
      input: 'nums = [3,3,3,3,3]',
      output: '3',
    },
  ],
  hints: [
    'Treat the array as a linked list: node at index `i` has a "next pointer" to `nums[i]`. Since one value is duplicated, there is a cycle.',
    "Use Floyd's cycle detection: slow moves one step (`slow = nums[slow]`), fast moves two steps (`fast = nums[nums[fast]]`). They meet inside the cycle.",
    'After finding the meeting point, reset one pointer to `nums[0]` and advance both one step at a time. Where they meet again is the duplicate.',
  ],
  functionName: 'findDuplicate',
  params: ['nums'],
  starterCode: {
    javascript: `function findDuplicate(nums) {

}`,
    typescript: "function findDuplicate(nums: number[]): number {\n\n}",

    python: `def findDuplicate(nums):
    pass`,
  },
  visibleTests: [
    { args: [[1, 3, 4, 2, 2]], expected: 2 },
    { args: [[3, 1, 3, 4, 2]], expected: 3 },
    { args: [[3, 3, 3, 3, 3]], expected: 3 },
  ],
  hiddenTests: [
    { args: [[1, 1]], expected: 1 },
    { args: [[2, 5, 9, 6, 9, 3, 8, 9, 7, 1]], expected: 9 },
    { args: [[1, 2, 3, 4, 5, 6, 7, 8, 9, 5]], expected: 5 },
  ],
};
