import type { Problem } from '../types';

export const problem: Problem = {
  id: 'mode-of-array',
  title: 'Mode of Array',
  difficulty: 'easy',
  tags: ['arrays', 'hash-map'],
  description: `Given an integer array \`nums\`, return the **mode** — the element that appears **most frequently**. If multiple elements share the maximum frequency, return the **smallest** among them.`,
  constraints: [
    '1 <= nums.length <= 10^4',
    '-10^4 <= nums[i] <= 10^4',
  ],
  examples: [
    {
      input: 'nums = [1,2,2,3,3,3]',
      output: '3',
      explanation: '3 appears 3 times (the most), so it is the mode.',
    },
    {
      input: 'nums = [1,1,2,2]',
      output: '1',
      explanation: '1 and 2 both appear twice; return the smaller one: 1.',
    },
    {
      input: 'nums = [5]',
      output: '5',
      explanation: 'Single element is trivially the mode.',
    },
  ],
  hints: [
    'Build a frequency map. Find the maximum frequency.',
    'Collect all elements with that frequency and return the minimum.',
    'In Python, Counter(nums).most_common() can help, but you still need to handle ties by returning the minimum.',
  ],
  functionName: 'modeOfArray',
  params: ['nums'],
  starterCode: {
    javascript: `function modeOfArray(nums) {

}`,
    typescript: `function modeOfArray(nums: number[]): number {

}`,
    python: `def modeOfArray(nums: list[int]) -> int:
    pass`,
  },
  visibleTests: [
    { args: [[1, 2, 2, 3, 3, 3]], expected: 3 },
    { args: [[1, 1, 2, 2]], expected: 1 },
    { args: [[5]], expected: 5 },
  ],
  hiddenTests: [
    { args: [[1]], expected: 1 },
    { args: [[1, 2, 3]], expected: 1 },
    { args: [[3, 1, 3, 2, 3]], expected: 3 },
    { args: [[5, 5, 1, 1, 3]], expected: 1 },
    { args: [[7, 7, 7]], expected: 7 },
    { args: [[-1, -1, 2, 2]], expected: -1 },
    { args: [[10, 20, 20, 30, 30]], expected: 20 },
    { args: [[4, 4, 4, 2, 2, 2]], expected: 2 },
  ],
};
