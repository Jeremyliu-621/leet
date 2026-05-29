import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximum-strength-of-a-group',
  title: 'Maximum Strength of a Group',
  difficulty: 'medium',
  tags: ['arrays', 'dynamic-programming'],
  description: `You are the teacher of a class of \`n\` students. You have prepared a list of integers \`nums\` where \`nums[i]\` represents the score of the \`i\`-th student.

You want to select a **non-empty** group of students and maximize the **strength** of the group, defined as the **product** of all selected students' scores.

Return the **maximum strength** you can achieve.`,
  constraints: [
    '`1 <= n <= 13`',
    '`-9 <= nums[i] <= 9`',
  ],
  examples: [
    {
      input: 'nums = [3,-1,-5,2,5,-9]',
      output: '1350',
      explanation: 'Select all students. Product = 3 × (−1) × (−5) × 2 × 5 × (−9) ... actually selecting [3,−1,−5,2,5,−9] = 3×−1×−5×2×5×−9 = −1350, which is negative. Better: drop the −1: 3 × −5 × 2 × 5 × −9 = 1350.',
    },
    {
      input: 'nums = [-4,-5,-4]',
      output: '20',
      explanation: 'Select [−4, −5] → product = 20, or [−4,−4] → 16, or [−5,−4] → 20. Maximum is 20.',
    },
  ],
  hints: [
    'With n ≤ 13 you can enumerate all 2^n non-empty subsets.',
    'For each subset, compute the product and track the maximum.',
    'Alternatively: sort the array, include all positives, include all negatives in pairs (drop the least-negative if count is odd).',
    'Edge case: if all values are 0, the answer is 0 (must select at least one).',
  ],
  functionName: 'maxStrength',
  params: ['nums'],
  starterCode: {
    javascript: `function maxStrength(nums) {

}`,
    typescript: `function maxStrength(nums: number[]): number {

}`,
    python: `def maxStrength(nums):
    pass`,
  },
  visibleTests: [
    { args: [[3, -1, -5, 2, 5, -9]], expected: 1350 },
    { args: [[-4, -5, -4]], expected: 20 },
  ],
  hiddenTests: [
    { args: [[0]], expected: 0 },
    { args: [[1]], expected: 1 },
    { args: [[-9]], expected: -9 },
    { args: [[-1, -1]], expected: 1 },
    { args: [[1, 2, 3]], expected: 6 },
    { args: [[-1, 0, 1]], expected: 1 },
    { args: [[-3, -2, -1, 0]], expected: 6 },
    { args: [[9, 9, 9, 9, 9]], expected: 59049 },
  ],
};
