import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-elements-equal-to-k',
  title: 'Count Elements Equal to K',
  difficulty: 'easy',
  tags: ['arrays'],
  description: `Given an integer array \`nums\` and an integer \`k\`, return the **number of elements** in \`nums\` that are exactly equal to \`k\`.`,
  constraints: [
    '1 <= nums.length <= 10^4',
    '-10^4 <= nums[i] <= 10^4',
    '-10^4 <= k <= 10^4',
  ],
  examples: [
    {
      input: 'nums = [1,2,2,3,2], k = 2',
      output: '3',
      explanation: 'There are three occurrences of 2.',
    },
    {
      input: 'nums = [5,5,5], k = 4',
      output: '0',
      explanation: 'No element equals 4.',
    },
    {
      input: 'nums = [1,2,3,4,5], k = 3',
      output: '1',
      explanation: 'Only one element equals 3.',
    },
  ],
  hints: [
    'Filter the array for elements equal to k and return the count.',
    'A simple loop with a counter also works: increment whenever nums[i] === k.',
    'In Python, nums.count(k) returns the number of occurrences directly.',
  ],
  functionName: 'countElementsEqualToK',
  params: ['nums', 'k'],
  starterCode: {
    javascript: `function countElementsEqualToK(nums, k) {

}`,
    typescript: `function countElementsEqualToK(nums: number[], k: number): number {

}`,
    python: `def countElementsEqualToK(nums: list[int], k: int) -> int:
    pass`,
  },
  visibleTests: [
    { args: [[1, 2, 2, 3, 2], 2], expected: 3 },
    { args: [[5, 5, 5], 4], expected: 0 },
    { args: [[1, 2, 3, 4, 5], 3], expected: 1 },
  ],
  hiddenTests: [
    { args: [[1], 1], expected: 1 },
    { args: [[1], 2], expected: 0 },
    { args: [[0, 0, 0], 0], expected: 3 },
    { args: [[-1, -1, 1, 1], -1], expected: 2 },
    { args: [[7, 7, 7, 7, 7], 7], expected: 5 },
    { args: [[1, 2, 3, 4, 5], 6], expected: 0 },
    { args: [[10, 10, 20, 20], 10], expected: 2 },
    { args: [[3, 1, 4, 1, 5, 9, 2, 6], 1], expected: 2 },
  ],
};
