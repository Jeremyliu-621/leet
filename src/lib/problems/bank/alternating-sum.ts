import type { Problem } from '../types';

export const problem: Problem = {
  id: 'alternating-sum',
  title: 'Alternating Sum',
  difficulty: 'easy',
  tags: ['arrays', 'math'],
  description: `Given an integer array \`nums\`, return the **alternating sum**: the sum of elements at even indices minus the sum of elements at odd indices.

Formally, return \`nums[0] - nums[1] + nums[2] - nums[3] + …\`.`,
  constraints: [
    '1 <= nums.length <= 10^4',
    '1 <= nums[i] <= 10^5',
  ],
  examples: [
    {
      input: 'nums = [4,2,5,3]',
      output: '4',
      explanation: '4 - 2 + 5 - 3 = 4.',
    },
    {
      input: 'nums = [1,2,3,4,5]',
      output: '3',
      explanation: '1 - 2 + 3 - 4 + 5 = 3.',
    },
    {
      input: 'nums = [10]',
      output: '10',
      explanation: 'Single element at index 0 (even); result is 10.',
    },
  ],
  hints: [
    'Iterate through the array. Add nums[i] for even i, subtract nums[i] for odd i.',
    'You can also compute this as (sum of even-indexed elements) - (sum of odd-indexed elements).',
    'Using reduce: accumulate s + v when i is even, s - v when i is odd.',
  ],
  functionName: 'alternatingSum',
  params: ['nums'],
  starterCode: {
    javascript: `function alternatingSum(nums) {

}`,
    typescript: `function alternatingSum(nums: number[]): number {

}`,
    python: `def alternatingSum(nums: list[int]) -> int:
    pass`,
  },
  visibleTests: [
    { args: [[4, 2, 5, 3]], expected: 4 },
    { args: [[1, 2, 3, 4, 5]], expected: 3 },
    { args: [[10]], expected: 10 },
  ],
  hiddenTests: [
    { args: [[1, 1]], expected: 0 },
    { args: [[5, 3]], expected: 2 },
    { args: [[1, 2, 1]], expected: 0 },
    { args: [[3, 1, 3, 1]], expected: 4 },
    { args: [[1, 1, 1, 1, 1]], expected: 1 },
    { args: [[10, 5, 10, 5]], expected: 10 },
    { args: [[100, 1, 100, 1, 100]], expected: 298 },
    { args: [[1, 2, 3]], expected: 2 },
  ],
};
