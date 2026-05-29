import type { Problem } from '../types';

export const problem: Problem = {
  id: 'remove-one-element-to-make-array-strictly-increasing',
  title: 'Remove One Element to Make the Array Strictly Increasing',
  difficulty: 'medium',
  tags: ['arrays'],
  description: `Given a **0-indexed** integer array \`nums\`, return \`true\` if it can be made **strictly increasing** after removing **exactly one** element, or \`false\` otherwise. If the array is already strictly increasing, return \`true\`.

The array is **strictly increasing** if \`nums[i - 1] < nums[i]\` for every index \`1 <= i < nums.length\`.`,
  constraints: [
    '`2 <= nums.length <= 1000`',
    '`1 <= nums[i] <= 1000`',
  ],
  examples: [
    {
      input: 'nums = [1,2,10,5,7]',
      output: 'true',
      explanation: 'Remove nums[2] = 10 to get [1,2,5,7], which is strictly increasing.',
    },
    {
      input: 'nums = [2,3,1,2]',
      output: 'false',
      explanation: 'Removing any single element still leaves a non-strictly-increasing array.',
    },
  ],
  hints: [
    'Find the first index i where nums[i] >= nums[i+1]. If none exists, return true.',
    'When a bad pair is found at index i, try removing either index i or index i+1 and check if the rest is strictly increasing.',
    'You only need to check one bad pair — if a second exists after the removal, return false.',
  ],
  functionName: 'canBeIncreasing',
  params: ['nums'],
  starterCode: {
    javascript: `function canBeIncreasing(nums) {

}`,
    typescript: `function canBeIncreasing(nums: number[]): boolean {

}`,
    python: `def canBeIncreasing(nums):
    pass`,
  },
  visibleTests: [
    { args: [[1, 2, 10, 5, 7]], expected: true },
    { args: [[2, 3, 1, 2]], expected: false },
  ],
  hiddenTests: [
    { args: [[1, 2, 3]], expected: true },
    { args: [[1, 1, 1]], expected: false },
    { args: [[105, 924, 32, 968]], expected: true },
    { args: [[1, 2, 5, 3, 5]], expected: true },
    { args: [[3, 2, 1]], expected: false },
  ],
};
