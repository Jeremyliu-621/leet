import type { Problem } from '../types';

export const problem: Problem = {
  id: 'almost-strictly-increasing',
  title: 'Almost Strictly Increasing',
  difficulty: 'medium',
  tags: ['arrays', 'two-pointers'],
  description: `Given an integer array \`nums\`, return \`true\` if you can remove **at most one** element from the array and have the remaining elements form a **strictly increasing** sequence.

A sequence is strictly increasing if every element is greater than the element before it.

You may remove any single element, or remove nothing at all. An array with zero or one element is always strictly increasing.`,
  constraints: [
    '1 <= nums.length <= 1000',
    '-10^4 <= nums[i] <= 10^4',
  ],
  examples: [
    {
      input: 'nums = [1,2,10,3,5]',
      output: 'true',
      explanation: 'Remove 10 to get [1,2,3,5], which is strictly increasing.',
    },
    {
      input: 'nums = [2,3,1,2]',
      output: 'false',
      explanation: 'No matter which element you remove, the result is not strictly increasing.',
    },
    {
      input: 'nums = [1,2,3,4]',
      output: 'true',
      explanation: 'Already strictly increasing — no removal needed.',
    },
  ],
  functionName: 'canBeStrictlyIncreasing',
  params: ['nums'],
  starterCode: {
    javascript: 'function canBeStrictlyIncreasing(nums) {\n  // your code here\n}\n',
    typescript: `function canBeStrictlyIncreasing(nums: number[]): boolean {

}`,
    python: 'def canBeStrictlyIncreasing(nums):\n    # your code here\n    pass\n',
  },
  visibleTests: [
    { args: [[1, 2, 10, 3, 5]], expected: true },
    { args: [[2, 3, 1, 2]], expected: false },
    { args: [[1, 2, 3, 4]], expected: true },
  ],
  hiddenTests: [
    { args: [[1]], expected: true },
    { args: [[5, 1]], expected: true },
    { args: [[1, 1, 2, 3]], expected: true },
    { args: [[1, 5, 2, 3, 4]], expected: true },
    { args: [[5, 4, 3, 2, 1]], expected: false },
    { args: [[1, 3, 2, 4, 5]], expected: true },
    { args: [[10, 1, 2, 3, 4, 5]], expected: true },
    { args: [[1, 2, 3, 4, 3]], expected: true },
    { args: [[1, 2, 2, 3]], expected: true },
  ],
  hints: [
    'Walk through the array looking for the first index `i` where `nums[i] >= nums[i+1]`. If no such index exists, the array is already strictly increasing.',
    'When you find a violation at index `i`, there are only two candidates to remove: `nums[i]` or `nums[i+1]`. Try removing each and check if the remaining array is strictly increasing.',
    'Write a helper `isStrictlyIncreasing(arr, skipIndex)` that checks the array while ignoring one index. That keeps the main logic clean and avoids building new arrays.',
  ],
};
