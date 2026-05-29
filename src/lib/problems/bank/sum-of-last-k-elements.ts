import type { Problem } from '../types';

export const problem: Problem = {
  id: 'sum-of-last-k-elements',
  title: 'Sum of Last K Elements',
  difficulty: 'easy',
  tags: ['arrays', 'math'],
  description: `Given an integer array \`nums\` and a positive integer \`k\`, return the **sum of the last \`k\` elements** of the array.`,
  constraints: [
    '1 <= nums.length <= 10^4',
    '1 <= k <= nums.length',
    '0 <= nums[i] <= 10^5',
  ],
  examples: [
    {
      input: 'nums = [1,2,3,4,5], k = 3',
      output: '12',
      explanation: 'The last 3 elements are [3,4,5]. Their sum is 3 + 4 + 5 = 12.',
    },
    {
      input: 'nums = [10,20,30], k = 2',
      output: '50',
      explanation: 'The last 2 elements are [20,30]. Their sum is 20 + 30 = 50.',
    },
    {
      input: 'nums = [5], k = 1',
      output: '5',
      explanation: 'The only element is 5, which is also the last 1 element.',
    },
  ],
  hints: [
    'Slice the array to get the last k elements, then sum them.',
    'Alternatively, iterate from index nums.length - k to the end and accumulate.',
    'The slice index for the last k elements is nums.length - k.',
  ],
  functionName: 'sumOfLastKElements',
  params: ['nums', 'k'],
  starterCode: {
    javascript: `function sumOfLastKElements(nums, k) {

}`,
    typescript: `function sumOfLastKElements(nums: number[], k: number): number {

}`,
    python: `def sumOfLastKElements(nums: list[int], k: int) -> int:
    pass`,
  },
  visibleTests: [
    { args: [[1, 2, 3, 4, 5], 3], expected: 12 },
    { args: [[10, 20, 30], 2], expected: 50 },
    { args: [[5], 1], expected: 5 },
  ],
  hiddenTests: [
    { args: [[1, 2, 3, 4, 5], 1], expected: 5 },
    { args: [[1, 2, 3, 4, 5], 5], expected: 15 },
    { args: [[3, 3, 3, 3], 2], expected: 6 },
    { args: [[1, 10, 100], 2], expected: 110 },
    { args: [[0, 0, 0, 5], 3], expected: 5 },
    { args: [[2, 4, 6, 8, 10], 4], expected: 28 },
    { args: [[100], 1], expected: 100 },
    { args: [[7, 3], 2], expected: 10 },
  ],
};
