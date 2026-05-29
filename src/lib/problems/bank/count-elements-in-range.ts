import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-elements-in-range',
  title: 'Count Elements in Range',
  difficulty: 'easy',
  tags: ['arrays'],
  description: `Given an integer array \`nums\` and two integers \`lo\` and \`hi\`, return the **number of elements** in \`nums\` that satisfy \`lo <= nums[i] <= hi\` (inclusive on both ends).`,
  constraints: [
    '`1 <= nums.length <= 10^4`',
    '`-10^4 <= nums[i] <= 10^4`',
    '`-10^4 <= lo <= hi <= 10^4`',
  ],
  examples: [
    {
      input: 'nums = [3, 1, 4, 1, 5, 9, 2, 6], lo = 2, hi = 5',
      output: '4',
      explanation: 'Elements in [2, 5]: 3, 4, 5, 2. Count = 4.',
    },
    {
      input: 'nums = [10, -3, 7, 0, 4], lo = 0, hi = 6',
      output: '2',
      explanation: 'Elements in [0, 6]: 0 and 4. Elements 10, 7, and -3 are outside the range. Count = 2.',
    },
    {
      input: 'nums = [5, 5, 5], lo = 5, hi = 5',
      output: '3',
      explanation: 'All three elements equal 5, which is in [5, 5]. Count = 3.',
    },
  ],
  functionName: 'countElementsInRange',
  params: ['nums', 'lo', 'hi'],
  starterCode: {
    javascript: `/**
 * @param {number[]} nums
 * @param {number} lo
 * @param {number} hi
 * @return {number}
 */
function countElementsInRange(nums, lo, hi) {

}`,
    typescript: `function countElementsInRange(nums: number[], lo: number, hi: number): number {

}`,
    python: `def countElementsInRange(nums: list[int], lo: int, hi: int) -> int:
    pass`,
  },
  hints: [
    'Iterate through each element and check whether it falls within the inclusive range [lo, hi].',
    'Use a counter or filter: for each `nums[i]`, check `lo <= nums[i] && nums[i] <= hi`.',
    '`return nums.filter(x => x >= lo && x <= hi).length`',
  ],
  visibleTests: [
    { args: [[3, 1, 4, 1, 5, 9, 2, 6], 2, 5], expected: 4 },
    { args: [[10, -3, 7, 0, 4], 0, 6], expected: 2 },
    { args: [[5, 5, 5], 5, 5], expected: 3 },
  ],
  hiddenTests: [
    { args: [[1, 2, 3, 4, 5], 1, 5], expected: 5 },
    { args: [[1, 2, 3, 4, 5], 6, 10], expected: 0 },
    { args: [[-5, -3, 0, 3, 5], -3, 3], expected: 3 },
    { args: [[100, 200, 300], 150, 250], expected: 1 },
    { args: [[1], 1, 1], expected: 1 },
    { args: [[1], 2, 5], expected: 0 },
    { args: [[-10000, 0, 10000], -10000, 10000], expected: 3 },
    { args: [[2, 2, 2, 2, 2], 1, 3], expected: 5 },
  ],
};
