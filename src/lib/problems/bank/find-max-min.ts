import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-max-min',
  title: 'Find Maximum and Minimum',
  difficulty: 'easy',
  tags: ['arrays'],
  description: `Given an integer array \`nums\` with at least one element, return an array \`[max, min]\` where \`max\` is the largest value and \`min\` is the smallest value.

Find both in a single pass (O(n)) rather than sorting or calling \`Math.max\` / \`Math.min\` separately on the full array.`,
  constraints: [
    '1 <= nums.length <= 1000',
    'All values are integers.',
    '-10000 <= nums[i] <= 10000',
  ],
  examples: [
    {
      input: 'nums = [3,1,4,1,5,9,2,6]',
      output: '[9,1]',
      explanation: 'Maximum is 9, minimum is 1.',
    },
    {
      input: 'nums = [7]',
      output: '[7,7]',
      explanation: 'Single element is both the max and the min.',
    },
    {
      input: 'nums = [-5,-1,-3]',
      output: '[-1,-5]',
      explanation: 'All negative: max is -1, min is -5.',
    },
  ],
  hints: [
    'Initialise both `max` and `min` to the first element (not to 0 or ±Infinity, since the range can be any integers).',
    'Walk the rest of the array updating `max` and `min` as you go. Two comparisons per element, one pass total.',
    '`let max = nums[0], min = nums[0]; for (let i = 1; i < nums.length; i++) { if (nums[i] > max) max = nums[i]; if (nums[i] < min) min = nums[i]; } return [max, min];`',
  ],
  functionName: 'findMaxMin',
  params: ['nums'],
  starterCode: {
    javascript: `function findMaxMin(nums) {
  let max = nums[0], min = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > max) max = nums[i];
    if (nums[i] < min) min = nums[i];
  }
  return [max, min];
}`,
    typescript: `function findMaxMin(nums: number[]): number[] {
  let max = nums[0]!, min = nums[0]!;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i]! > max) max = nums[i]!;
    if (nums[i]! < min) min = nums[i]!;
  }
  return [max, min];
}`,
    python: `def findMaxMin(nums):
    nums = list(nums.to_py()) if hasattr(nums, 'to_py') else list(nums)
    mx, mn = nums[0], nums[0]
    for x in nums[1:]:
        if x > mx: mx = x
        if x < mn: mn = x
    return [mx, mn]`,
  },
  visibleTests: [
    { args: [[3, 1, 4, 1, 5, 9, 2, 6]], expected: [9, 1] },
    { args: [[7]], expected: [7, 7] },
    { args: [[-5, -1, -3]], expected: [-1, -5] },
  ],
  hiddenTests: [
    { args: [[0, 0, 0]], expected: [0, 0] },
    { args: [[1, 2]], expected: [2, 1] },
    { args: [[-10, 10]], expected: [10, -10] },
    { args: [[5, 5, 5]], expected: [5, 5] },
    { args: [[100, 50, 75, 25, 0]], expected: [100, 0] },
    { args: [[-100, -50, -1]], expected: [-1, -100] },
  ],
};
