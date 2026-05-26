import type { Problem } from '../types';

export const problem: Problem = {
  id: 'sort-array-by-parity',
  title: 'Sort Array By Parity',
  difficulty: 'easy',
  tags: ['arrays', 'two-pointers'],
  description: `Given an integer array \`nums\`, move all the even integers at the beginning of the array followed by all the odd integers.

Return **any array** that satisfies this condition.`,
  constraints: [
    '`1 <= nums.length <= 5000`',
    '`0 <= nums[i] <= 5000`',
  ],
  examples: [
    {
      input: 'nums = [3,1,2,4]',
      output: '[2,4,3,1]',
      explanation: 'The outputs [4,2,3,1], [2,4,1,3], and [4,2,1,3] would also be accepted.',
    },
    {
      input: 'nums = [0]',
      output: '[0]',
    },
  ],
  hints: [
    'Filter evens first, then odds, and concatenate.',
    'Partition the array: evens first, odds last. Use a two-pointer swap in-place, or `filter` and `concat`.',
    '`return [...nums.filter(x => x%2===0), ...nums.filter(x => x%2!==0)];`'
  ],
  functionName: 'sortArrayByParity',
  params: ['nums'],
  starterCode: {
    javascript: `function sortArrayByParity(nums) {

}`,
    python: `def sortArrayByParity(nums):
    pass`,
  },
  visibleTests: [
    { args: [[3, 1, 2, 4]], expected: [2, 4, 3, 1] },
    { args: [[0]], expected: [0] },
  ],
  hiddenTests: [
    { args: [[1]], expected: [1] },
    { args: [[2]], expected: [2] },
    { args: [[1, 2]], expected: [2, 1] },
    { args: [[2, 1]], expected: [2, 1] },
    { args: [[1, 3, 5, 2, 4]], expected: [2, 4, 1, 3, 5] },
    { args: [[0, 2, 4, 6]], expected: [0, 2, 4, 6] },
    { args: [[1, 3, 5]], expected: [1, 3, 5] },
  ],
};
