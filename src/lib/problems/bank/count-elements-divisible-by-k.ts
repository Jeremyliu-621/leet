import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-elements-divisible-by-k',
  title: 'Count Elements Divisible by K',
  difficulty: 'easy',
  tags: ['arrays', 'math'],
  description: `Given an integer array \`nums\` and a positive integer \`k\`, return the count of elements in \`nums\` that are **divisible by** \`k\` (i.e., \`nums[i] % k === 0\`).`,
  constraints: [
    '1 <= nums.length <= 1000',
    '1 <= nums[i] <= 10^6',
    '1 <= k <= 10^6',
  ],
  examples: [
    {
      input: 'nums = [1,2,3,4,5,6], k = 2',
      output: '3',
      explanation: 'Elements divisible by 2: 2, 4, 6. Count = 3.',
    },
    {
      input: 'nums = [3,6,9,12], k = 3',
      output: '4',
      explanation: 'All elements are divisible by 3.',
    },
    {
      input: 'nums = [1,2,3], k = 5',
      output: '0',
      explanation: 'No elements are divisible by 5.',
    },
  ],
  hints: [
    'Loop over `nums` and check the remainder of each element divided by `k` using the modulo operator `%`.',
    'An element `n` is divisible by `k` when `n % k === 0`. Count every element that satisfies this condition.',
    'You can use `Array.prototype.filter` to collect matching elements and return `result.length`, or simply accumulate a counter.',
  ],
  functionName: 'countDivisibleByK',
  params: ['nums', 'k'],
  starterCode: {
    javascript: `function countDivisibleByK(nums, k) {
  return nums.filter(n => n % k === 0).length;
}`,
    typescript: `function countDivisibleByK(nums: number[], k: number): number {
  return nums.filter(n => n % k === 0).length;
}`,
    python: `def countDivisibleByK(nums, k):
    return sum(1 for n in nums if n % k == 0)`,
  },
  visibleTests: [
    { args: [[1, 2, 3, 4, 5, 6], 2], expected: 3 },
    { args: [[3, 6, 9, 12], 3], expected: 4 },
    { args: [[1, 2, 3], 5], expected: 0 },
  ],
  hiddenTests: [
    { args: [[10, 15, 20, 25], 5], expected: 4 },
    { args: [[1, 1, 1], 1], expected: 3 },
    { args: [[100], 7], expected: 0 },
    { args: [[7, 14, 21, 28], 7], expected: 4 },
    { args: [[2, 4, 6, 8, 10], 4], expected: 2 },
    { args: [[1000000], 1000000], expected: 1 },
    { args: [[6, 10, 15, 12, 8], 6], expected: 2 },
    { args: [[3, 5, 7, 11, 13], 2], expected: 0 },
  ],
};
