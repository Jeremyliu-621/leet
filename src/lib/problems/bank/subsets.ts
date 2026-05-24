import type { Problem } from '../types';

export const problem: Problem = {
  id: 'subsets',
  title: 'Subsets',
  difficulty: 'medium',
  tags: ['arrays'],
  description: `Given an integer array \`nums\` of **unique** elements, return all possible subsets (the power set).

The solution set **must not** contain duplicate subsets. Return the solution in **any order**.`,
  constraints: [
    '`1 <= nums.length <= 10`',
    '`-10 <= nums[i] <= 10`',
    'All the numbers of `nums` are **unique**',
  ],
  examples: [
    {
      input: 'nums = [1,2,3]',
      output: '[[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]',
    },
    {
      input: 'nums = [0]',
      output: '[[],[0]]',
    },
  ],
  hints: [
    'Use backtracking: at each index, choose to either include or skip the element.',
    'The result has 2^n subsets for an array of n elements.',
    'Alternatively, iterative bit-masking: for each number from 0 to 2^n - 1, its binary representation tells you which elements to include.',
  ],
  functionName: 'subsets',
  params: ['nums'],
  starterCode: {
    javascript: `function subsets(nums) {

}`,
    python: `def subsets(nums):
    pass`,
  },
  visibleTests: [
    {
      args: [[1, 2, 3]],
      expected: [[], [1], [1, 2], [1, 2, 3], [1, 3], [2], [2, 3], [3]],
    },
    { args: [[0]], expected: [[], [0]] },
    { args: [[1]], expected: [[], [1]] },
  ],
  hiddenTests: [
    { args: [[1, 2]], expected: [[], [1], [1, 2], [2]] },
    {
      args: [[1, 2, 3, 4]],
      expected: [
        [], [1], [1,2], [1,2,3], [1,2,3,4], [1,2,4], [1,3], [1,3,4], [1,4],
        [2], [2,3], [2,3,4], [2,4], [3], [3,4], [4],
      ],
    },
    { args: [[-1, 0, 1]], expected: [[], [-1], [-1, 0], [-1, 0, 1], [-1, 1], [0], [0, 1], [1]] },
  ],
};
