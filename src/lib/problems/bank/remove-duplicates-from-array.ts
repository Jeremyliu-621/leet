import type { Problem } from '../types';

export const problem: Problem = {
  id: 'remove-duplicates-from-array',
  title: 'Remove Duplicates From Array',
  difficulty: 'easy',
  tags: ['arrays', 'hash-map'],
  description: `Given an integer array \`nums\`, return a new array with all **duplicate values removed**, preserving the **first occurrence order**.`,
  constraints: [
    '1 <= nums.length <= 10^3',
    '-10^3 <= nums[i] <= 10^3',
  ],
  examples: [
    {
      input: 'nums = [1,2,2,3,3,4]',
      output: '[1,2,3,4]',
      explanation: 'Keep first occurrences; remove subsequent duplicates.',
    },
    {
      input: 'nums = [5,5,5]',
      output: '[5]',
      explanation: 'All three are duplicates; only the first 5 is kept.',
    },
    {
      input: 'nums = [1,2,3]',
      output: '[1,2,3]',
      explanation: 'No duplicates; array is unchanged.',
    },
  ],
  hints: [
    'Use a Set to track seen elements. Iterate nums; if not in the Set, add to result and mark as seen.',
    'In JavaScript, [...new Set(nums)] deduplicates while preserving insertion (first-occurrence) order.',
    'In Python, dict.fromkeys(nums) also preserves order.',
  ],
  functionName: 'removeDuplicatesFromArray',
  params: ['nums'],
  starterCode: {
    javascript: `function removeDuplicatesFromArray(nums) {

}`,
    typescript: `function removeDuplicatesFromArray(nums: number[]): number[] {

}`,
    python: `def removeDuplicatesFromArray(nums: list[int]) -> list[int]:
    pass`,
  },
  visibleTests: [
    { args: [[1, 2, 2, 3, 3, 4]], expected: [1, 2, 3, 4] },
    { args: [[5, 5, 5]], expected: [5] },
    { args: [[1, 2, 3]], expected: [1, 2, 3] },
  ],
  hiddenTests: [
    { args: [[1]], expected: [1] },
    { args: [[1, 1]], expected: [1] },
    { args: [[3, 1, 2, 1, 3]], expected: [3, 1, 2] },
    { args: [[-1, -1, 0, 1, 1]], expected: [-1, 0, 1] },
    { args: [[5, 4, 3, 2, 1]], expected: [5, 4, 3, 2, 1] },
    { args: [[1, 2, 1, 2, 1, 2]], expected: [1, 2] },
    { args: [[0, 0, 0, 0]], expected: [0] },
    { args: [[10, 20, 10, 30, 20]], expected: [10, 20, 30] },
  ],
};
