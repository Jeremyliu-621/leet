import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximum-strength-of-a-group',
  title: 'Maximum Strength of a Group',
  difficulty: 'medium',
  tags: ['arrays', 'math'],
  description: `You are given a **0-indexed** integer array \`nums\` representing the scores of students in an exam. The teacher would like to form one or more **groups** of students with the maximum **strength**, where the strength of a group of students with indices \`i0, i1, ..., ik\` is defined as \`nums[i0] * nums[i1] * ... * nums[ik]\`.

Return the **maximum** strength of a group the teacher can create.`,
  constraints: [
    '`1 <= nums.length <= 13`',
    '`-9 <= nums[i] <= 9`',
  ],
  examples: [
    {
      input: 'nums = [3,-1,-5,2,4]',
      output: '120',
      explanation: '(-5) × (-1) × 2 × 3 × 4 = 120. Include both negatives (their product is positive) and all positives.',
    },
    {
      input: 'nums = [0,-1]',
      output: '0',
      explanation: 'Picking just the 0 gives strength 0, which is better than picking -1 alone.',
    },
    {
      input: 'nums = [-7,-3,2,1]',
      output: '42',
      explanation: '(-7) × (-3) × 2 × 1 = 42.',
    },
  ],
  hints: [
    'With n ≤ 13 you can enumerate all 2^n non-empty subsets.',
    'Sort the array. Zeros never help (multiply by 0 gives 0) unless all non-zero elements give a negative product with no better option.',
    'Pair negatives from largest absolute value first: each pair contributes a positive factor. Include all positive numbers.',
    'If an odd number of negatives remain after pairing, skip the one with the smallest absolute value (closest to 0).',
    'If only a single negative and no positives remain, return 0 if any zero is available, else return that negative.',
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
    { args: [[3, -1, -5, 2, 4]], expected: 120 },
    { args: [[0, -1]], expected: 0 },
    { args: [[-7, -3, 2, 1]], expected: 42 },
  ],
  hiddenTests: [
    { args: [[-2]], expected: -2 },
    { args: [[5]], expected: 5 },
    { args: [[1, 2, 3]], expected: 6 },
    { args: [[-5, -4, -3]], expected: 20 },
    { args: [[0, 0, 0]], expected: 0 },
    { args: [[-1, -2, -3, -4]], expected: 24 },
    { args: [[-9, -8, -7, -6, -5, -4, -3, -2, -1]], expected: 362880 },
    { args: [[0]], expected: 0 },
    { args: [[-5, 8, -3, -4, 9, 7]], expected: 10080 },
    { args: [[0, 0, -1]], expected: 0 },
  ],
};
