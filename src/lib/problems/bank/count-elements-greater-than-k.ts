import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-elements-greater-than-k',
  title: 'Count Elements Greater Than K',
  difficulty: 'easy',
  tags: ['arrays'],
  description: `Given an integer array \`nums\` and an integer \`k\`, return the **number of elements** in \`nums\` that are **strictly greater than** \`k\`.`,
  constraints: [
    '1 <= nums.length <= 10^4',
    '-10^4 <= nums[i] <= 10^4',
    '-10^4 <= k <= 10^4',
  ],
  examples: [
    {
      input: 'nums = [1,2,3,4,5], k = 3',
      output: '2',
      explanation: 'Elements 4 and 5 are strictly greater than 3.',
    },
    {
      input: 'nums = [5,5,5], k = 5',
      output: '0',
      explanation: 'No element is strictly greater than 5.',
    },
    {
      input: 'nums = [10,20,30], k = 0',
      output: '3',
      explanation: 'All three elements are greater than 0.',
    },
  ],
  hints: [
    'Filter the array for elements where nums[i] > k and return the count.',
    'A simple loop with a counter also works: increment whenever nums[i] > k.',
    'Be careful to use strictly greater than (>), not greater than or equal (>=).',
  ],
  functionName: 'countElementsGreaterThanK',
  params: ['nums', 'k'],
  starterCode: {
    javascript: `function countElementsGreaterThanK(nums, k) {
  return nums.filter(n => n > k).length;
}`,
    typescript: `function countElementsGreaterThanK(nums: number[], k: number): number {
  return nums.filter(n => n > k).length;
}`,
    python: `def countElementsGreaterThanK(nums: list[int], k: int) -> int:
    return sum(1 for n in nums if n > k)`,
  },
  visibleTests: [
    { args: [[1, 2, 3, 4, 5], 3], expected: 2 },
    { args: [[5, 5, 5], 5], expected: 0 },
    { args: [[10, 20, 30], 0], expected: 3 },
  ],
  hiddenTests: [
    { args: [[1], 0], expected: 1 },
    { args: [[1], 1], expected: 0 },
    { args: [[-5, -3, -1, 0, 2], -2], expected: 3 },
    { args: [[3, 3, 3, 3], 2], expected: 4 },
    { args: [[3, 3, 3, 3], 3], expected: 0 },
    { args: [[1, 2, 3, 4, 5], 0], expected: 5 },
    { args: [[100, 200, 300], 150], expected: 2 },
    { args: [[-10, -5, 0, 5, 10], 0], expected: 2 },
  ],
};
