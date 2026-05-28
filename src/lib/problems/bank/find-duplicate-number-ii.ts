import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-duplicate-number-ii',
  title: 'Find the Duplicate Number (Floyd\'s)',
  difficulty: 'medium',
  tags: ['arrays', 'two-pointers'],
  description: `Given an array of integers \`nums\` containing \`n + 1\` integers where each integer is in the range \`[1, n]\` inclusive, there is **exactly one repeated number** in \`nums\`. Return this repeated number.

You must solve the problem **without modifying the array** and uses only **constant extra space**.

**Note:** This version requires the Floyd's cycle detection (tortoise and hare) approach for full credit.`,
  constraints: [
    '1 <= n <= 10^5',
    'nums.length == n + 1',
    '1 <= nums[i] <= n',
    'All integers in nums appear only once except for precisely one integer which appears two or more times',
  ],
  examples: [
    { input: 'nums = [1,3,4,2,2]', output: '2' },
    { input: 'nums = [3,1,3,4,2]', output: '3' },
  ],
  hints: [
    'Treat the array as a linked list where nums[i] is the next pointer from node i. A duplicate means two nodes point to the same next node — a cycle.',
    'Phase 1: Find the meeting point using slow (1 step) and fast (2 steps) pointers.',
    'Phase 2: Reset one pointer to index 0. Advance both one step at a time — they will meet at the duplicate.',
  ],
  functionName: 'findDuplicateFloyd',
  params: ['nums'],
  starterCode: {
    javascript: 'function findDuplicateFloyd(nums) {\n\n}\n',
    typescript: "function findDuplicateFloyd(nums: number[]): number {\n\n}",

    python: 'def findDuplicateFloyd(nums):\n    pass\n',
  },
  visibleTests: [
    { args: [[1, 3, 4, 2, 2]], expected: 2 },
    { args: [[3, 1, 3, 4, 2]], expected: 3 },
  ],
  hiddenTests: [
    { args: [[1, 1]], expected: 1 },
    { args: [[2, 2, 2, 2, 2]], expected: 2 },
    { args: [[1, 4, 6, 6, 2, 3, 5]], expected: 6 },
  ],
};
