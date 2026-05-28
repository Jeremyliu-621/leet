import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-ops-distinct-elements',
  title: 'Minimum Operations to Make Elements in Array Distinct',
  difficulty: 'easy',
  tags: ['arrays', 'hash-map'],
  description: `You are given an integer array \`nums\`. In one operation, you can remove the first **3** elements of the array. If the array has fewer than 3 elements, you cannot perform the operation.

Return the **minimum number of operations** needed so that all remaining elements of \`nums\` are distinct.

**Note:** An empty array is considered to have all distinct elements.`,
  constraints: [
    '1 <= nums.length <= 100',
    '1 <= nums[i] <= 100',
  ],
  examples: [
    {
      input: 'nums = [1,2,3,4,2,3,3,5,7]',
      output: '2',
      explanation: 'After removing first 3: [4,2,3,3,5,7] — still has duplicates. After removing first 3 again: [3,5,7] — all distinct. 2 operations.',
    },
    {
      input: 'nums = [1,2,1,3,1]',
      output: '1',
      explanation: 'After removing first 3 elements [1,2,1]: remaining is [3,1] — all distinct. 1 operation.',
    },
    {
      input: 'nums = [6,7,8,9]',
      output: '0',
      explanation: 'All elements are already distinct.',
    },
  ],
  hints: [
    'Simulate: repeatedly check if remaining elements are distinct. If not, remove the first 3.',
    'More efficiently: iterate from the end. The answer is the smallest number of ops k such that nums[3k..] has all distinct elements.',
    'Try all possible k values from 0 upward. The first k where the suffix nums[3k:] has no duplicates is the answer.',
  ],
  functionName: 'minimumOperations',
  params: ['nums'],
  starterCode: {
    javascript: 'function minimumOperations(nums) {\n  // your code here\n}\n',
    typescript: "function minimumOperations(nums: number[]): number {\n  // your code here\n}",

    python: 'def minimumOperations(nums):\n    # your code here\n    pass\n',
  },
  visibleTests: [
    { args: [[1, 2, 3, 4, 2, 3, 3, 5, 7]], expected: 2 },
    { args: [[1, 2, 1, 3, 1]], expected: 1 },
    { args: [[6, 7, 8, 9]], expected: 0 },
  ],
  hiddenTests: [
    { args: [[1]], expected: 0 },
    { args: [[1, 2, 3]], expected: 0 },
    { args: [[1, 1, 1]], expected: 1 },
    { args: [[1, 2, 3, 1]], expected: 1 },
    { args: [[1, 1, 1, 1, 1, 1]], expected: 2 },
    { args: [[100, 100, 100, 100]], expected: 1 },
  ],
};
