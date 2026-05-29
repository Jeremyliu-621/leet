import type { Problem } from '../types';

export const problem: Problem = {
  id: 'max-sum-of-a-pair-with-equal-sum-of-digits',
  title: 'Max Sum of a Pair With Equal Sum of Digits',
  difficulty: 'medium',
  tags: ['arrays', 'hash-map', 'math'],
  description: `You are given a **0-indexed** array \`nums\` consisting of **positive** integers. You can choose two indices \`i\` and \`j\` such that \`i != j\` and the **sum of digits** of \`nums[i]\` equals the **sum of digits** of \`nums[j]\`.

Return the **maximum** value of \`nums[i] + nums[j]\` over all valid pairs, or \`-1\` if no such pair exists.`,
  constraints: [
    '1 <= nums.length <= 10^5',
    '1 <= nums[i] <= 10^9',
  ],
  examples: [
    {
      input: 'nums = [18,43,36,13,7]',
      output: '54',
      explanation: 'digit_sum(18)=9, digit_sum(36)=9. The pair (18,36) gives 18+36=54.',
    },
    {
      input: 'nums = [10,12,19,14]',
      output: '-1',
      explanation: 'No two numbers share the same digit sum.',
    },
  ],
  hints: [
    'Group numbers by their digit sum using a hash map.',
    'For each group with at least two elements, the maximum pair sum uses the two largest values in that group.',
    'You only need to track the single largest value seen so far for each digit sum. When you encounter a second number with the same digit sum, record nums[i] + best[ds] as a candidate answer, then update best[ds].',
  ],
  functionName: 'maximumSum',
  params: ['nums'],
  starterCode: {
    javascript: `function maximumSum(nums) {

}`,
    typescript: 'function maximumSum(nums: number[]): number {\n\n}',
    python: `def maximumSum(nums):
    pass`,
  },
  visibleTests: [
    { args: [[18, 43, 36, 13, 7]], expected: 54 },
    { args: [[10, 12, 19, 14]], expected: -1 },
  ],
  hiddenTests: [
    { args: [[1, 2]], expected: -1 },
    { args: [[1, 10]], expected: 11 },
    { args: [[9, 18, 27, 36]], expected: 63 },
    { args: [[100, 10, 1000]], expected: 1100 },
    { args: [[229, 398, 269, 317, 420, 464, 491, 218, 439, 153]], expected: 955 },
    { args: [[99, 9]], expected: -1 },
    { args: [[1, 1, 1]], expected: 2 },
  ],
};
