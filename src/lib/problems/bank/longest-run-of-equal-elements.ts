import type { Problem } from '../types';

export const problem: Problem = {
  id: 'longest-run-of-equal-elements',
  title: 'Longest Run of Equal Elements',
  difficulty: 'easy',
  tags: ['arrays'],
  description: `Given an integer array \`nums\`, return the **length of the longest contiguous run** of equal elements.

A **run** is a maximal contiguous subsequence of the same value. For example, in \`[1, 1, 2, 2, 2, 1]\` the runs are \`[1,1]\` (length 2), \`[2,2,2]\` (length 3), and \`[1]\` (length 1).`,
  constraints: [
    '1 <= nums.length <= 10^5',
    '-10^9 <= nums[i] <= 10^9',
  ],
  examples: [
    {
      input: 'nums = [1,1,2,2,2,1]',
      output: '3',
      explanation: 'The run [2,2,2] has length 3, which is the longest.',
    },
    {
      input: 'nums = [5,5,5,5]',
      output: '4',
      explanation: 'The entire array is one run of length 4.',
    },
    {
      input: 'nums = [1,2,3,4,5]',
      output: '1',
      explanation: 'Every element is distinct; each run has length 1.',
    },
  ],
  hints: [
    'Use a single linear scan: maintain a current run counter and a global max.',
    'When nums[i] === nums[i-1], increment the current run counter; otherwise reset it to 1.',
    'Update the global max after each step.',
  ],
  functionName: 'longestRunOfEqualElements',
  params: ['nums'],
  starterCode: {
    javascript: `function longestRunOfEqualElements(nums) {

}`,
    typescript: `function longestRunOfEqualElements(nums: number[]): number {

}`,
    python: `def longestRunOfEqualElements(nums: list[int]) -> int:
    pass`,
  },
  visibleTests: [
    { args: [[1, 1, 2, 2, 2, 1]], expected: 3 },
    { args: [[5, 5, 5, 5]], expected: 4 },
    { args: [[1, 2, 3, 4, 5]], expected: 1 },
  ],
  hiddenTests: [
    { args: [[7]], expected: 1 },
    { args: [[1, 1]], expected: 2 },
    { args: [[1, 2, 2, 3, 3, 3]], expected: 3 },
    { args: [[0, 0, 1, 1, 0, 0, 0]], expected: 3 },
    { args: [[-1, -1, -1, 0, 0]], expected: 3 },
    { args: [[1, 2, 1, 2, 1]], expected: 1 },
    { args: [[4, 4, 4, 4, 3, 3, 3, 4, 4]], expected: 4 },
    { args: [[1, 1, 1, 1, 1]], expected: 5 },
  ],
};
