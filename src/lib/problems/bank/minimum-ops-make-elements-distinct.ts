import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-ops-make-elements-distinct',
  title: 'Minimum Number of Operations to Make Elements in Array Distinct',
  difficulty: 'easy',
  tags: ['arrays', 'hash-map'],
  description: `You are given an integer array \`nums\`. You need to ensure all elements of the array are **distinct**.

To achieve this, you can remove 3 elements from the **beginning** of the array in one operation. If the array has fewer than 3 elements, remove all of them.

**Note**: An empty array is considered to have all distinct elements.

Return the **minimum** number of operations needed to make all elements of \`nums\` distinct.`,
  constraints: [
    '1 <= nums.length <= 100',
    '1 <= nums[i] <= 100',
  ],
  examples: [
    {
      input: 'nums = [1,2,3,4,2,3,3,5,7]',
      output: '2',
      explanation:
        'After 1st operation: [4,2,3,3,5,7] (still has duplicate 3). After 2nd operation: [3,5,7] — all distinct.',
    },
    {
      input: 'nums = [4,5,6,4,4]',
      output: '2',
      explanation:
        'After 1 operation: [4,4] (still has duplicate). After 2 operations: [] — empty, so distinct.',
    },
  ],
  hints: [
    'Scan from right to left, tracking elements seen in a set.',
    'The first duplicate found (rightmost duplicate when scanning left) at index i means we must remove indices 0..i.',
    'Removing 3 at a time, the answer is ceil((i+1) / 3).',
  ],
  functionName: 'minimumOperations',
  params: ['nums'],
  starterCode: {
    javascript: `function minimumOperations(nums) {\n\n}`,
    python: `def minimumOperations(nums: list[int]) -> int:\n    pass`,
  },
  visibleTests: [
    { args: [[1, 2, 3, 4, 2, 3, 3, 5, 7]], expected: 2 },
    { args: [[4, 5, 6, 4, 4]], expected: 2 },
  ],
  hiddenTests: [
    { args: [[1, 2, 3]], expected: 0 },
    { args: [[1, 1, 1, 1, 1]], expected: 2 },
    { args: [[1]], expected: 0 },
    { args: [[1, 1]], expected: 1 },
    { args: [[1, 2, 3, 1]], expected: 1 },
    { args: [[5, 5, 5, 5, 5, 5]], expected: 2 },
  ],
};
