import type { Problem } from '../types';

export const problem: Problem = {
  id: 'check-if-an-array-is-consecutive',
  title: 'Check If Array Is Consecutive',
  difficulty: 'easy',
  tags: ['arrays', 'hash-map'],
  description: `Given an integer array \`nums\`, return \`true\` if \`nums\` contains **n consecutive integers** where \`n\` is the length of \`nums\`.

An array contains n consecutive integers if its values, when sorted, form an unbroken sequence with no gaps and no duplicates (e.g. \`[3, 4, 5, 6]\`).`,
  constraints: [
    '1 <= nums.length <= 1000',
    '1 <= nums[i] <= 1000',
  ],
  examples: [
    {
      input: 'nums = [1,3,4,2,5]',
      output: 'true',
      explanation: 'The values are 1, 2, 3, 4, 5 — five consecutive integers.',
    },
    {
      input: 'nums = [1,3,2,4,6]',
      output: 'false',
      explanation: '5 is missing; the range [1..6] has 6 values but only 5 elements.',
    },
    {
      input: 'nums = [3,3,5]',
      output: 'false',
      explanation: '3 appears twice; all values must be distinct.',
    },
  ],
  hints: [
    'Compute the minimum and maximum values. For n consecutive integers, max − min + 1 must equal n.',
    'Even if max − min + 1 = n, there could be duplicate values. Check that all n values are distinct.',
    'Combine both checks: `max - min + 1 === n && new Set(nums).size === n`.',
  ],
  functionName: 'isConsecutive',
  params: ['nums'],
  starterCode: {
    javascript: `function isConsecutive(nums) {
  // your code here
}`,
    typescript: 'function isConsecutive(nums: number[]): boolean {\n  // your code here\n}',
    python: `def isConsecutive(nums):
    # your code here
    pass`,
  },
  visibleTests: [
    { args: [[1, 3, 4, 2, 5]], expected: true },
    { args: [[1, 3, 2, 4, 6]], expected: false },
    { args: [[3, 3, 5]], expected: false },
  ],
  hiddenTests: [
    { args: [[5]], expected: true },
    { args: [[1, 2]], expected: true },
    { args: [[1, 3]], expected: false },
    { args: [[1, 2, 3, 4, 5]], expected: true },
    { args: [[2, 4, 3, 5, 1]], expected: true },
  ],
};
