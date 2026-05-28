import type { Problem } from '../types';

export const problem: Problem = {
  id: 'non-decreasing-array',
  title: 'Non-decreasing Array',
  difficulty: 'medium',
  tags: ['arrays'],
  description: `Given an array \`nums\` with \`n\` integers, your task is to check if it could become non-decreasing by modifying **at most one element**.

We define an array as non-decreasing if \`nums[i] <= nums[i + 1]\` holds for every \`i\` (0-indexed) such that \`(0 <= i <= n - 2)\`.`,
  constraints: [
    '`n == nums.length`',
    '`1 <= n <= 10^4`',
    '`-10^5 <= nums[i] <= 10^5`',
  ],
  examples: [
    {
      input: 'nums = [4,2,3]',
      output: 'true',
      explanation: 'You could modify the first 4 to 1 to get a non-decreasing array.',
    },
    {
      input: 'nums = [4,2,1]',
      output: 'false',
      explanation: 'You cannot get a non-decreasing array by modifying at most one element.',
    },
  ],
  hints: [
    'Scan for violations where nums[i] > nums[i+1]. Count them.',
    'When you find a violation at position i, decide whether to lower nums[i] or raise nums[i+1]. Prefer lowering nums[i] to avoid new violations.',
    'If nums[i-1] > nums[i+1], you must raise nums[i+1] to nums[i] (you cannot lower nums[i] below nums[i-1]). Only one such modification is allowed.',
  ],
  functionName: 'checkPossibility',
  params: ['nums'],
  starterCode: {
    javascript: 'function checkPossibility(nums) {\n  \n}\n',
    typescript: "function checkPossibility(nums: number[]): boolean {\n  \n}",

    python: 'def checkPossibility(nums):\n    pass\n',
  },
  visibleTests: [
    { args: [[4, 2, 3]], expected: true },
    { args: [[4, 2, 1]], expected: false },
    { args: [[3, 4, 2, 3]], expected: false },
  ],
  hiddenTests: [
    { args: [[1, 2, 3]], expected: true },
    { args: [[5, 1]], expected: true },
    { args: [[1, 5, 2, 3]], expected: true },
    { args: [[3, 4, 2, 3]], expected: false },
    { args: [[2, 3, 3, 2, 4]], expected: true },
  ],
};
