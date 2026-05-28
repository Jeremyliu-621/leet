import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-all-numbers-disappeared-in-array',
  title: 'Find All Numbers Disappeared in an Array',
  difficulty: 'easy',
  tags: ['arrays', 'hash-map'],
  description: `Given an array \`nums\` of \`n\` integers where \`nums[i]\` is in the range \`[1, n]\`, return *an array of all the integers in the range* \`[1, n]\` *that do not appear in* \`nums\`.`,
  constraints: [
    'n == nums.length',
    '1 <= n <= 10^5',
    '1 <= nums[i] <= n',
  ],
  examples: [
    {
      input: 'nums = [4,3,2,7,8,2,3,1]',
      output: '[5,6]',
    },
    {
      input: 'nums = [1,1]',
      output: '[2]',
    },
  ],
  hints: [
    'Use a Set to track which numbers appear in the array.',
    'Alternatively, use the array itself as a hash: for each value v, negate nums[v-1] to mark v as seen.',
    'Return all indices i+1 where nums[i] is still positive.',
  ],
  functionName: 'findDisappearedNumbers',
  params: ['nums'],
  starterCode: {
    javascript: 'function findDisappearedNumbers(nums) {\n\n}',
    python: 'def findDisappearedNumbers(nums):\n    pass',
  },
  visibleTests: [
    { args: [[4, 3, 2, 7, 8, 2, 3, 1]], expected: [5, 6] },
    { args: [[1, 1]], expected: [2] },
  ],
  hiddenTests: [
    { args: [[1]], expected: [] },
    { args: [[2, 2]], expected: [1] },
    { args: [[1, 2, 3, 4, 5]], expected: [] },
    { args: [[2, 1, 3, 5, 5]], expected: [4] },
    { args: [[1, 1, 2, 2]], expected: [3, 4] },
    { args: [[3, 1, 3]], expected: [2] },
  ],
};
