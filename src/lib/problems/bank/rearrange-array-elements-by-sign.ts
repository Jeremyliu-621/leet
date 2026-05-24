import type { Problem } from '../types';

export const problem: Problem = {
  id: 'rearrange-array-elements-by-sign',
  title: 'Rearrange Array Elements by Sign',
  difficulty: 'medium',
  tags: ['arrays', 'two-pointers'],
  description: `You are given a **0-indexed** integer array \`nums\` of **even** length consisting of an **equal** number of positive and negative integers.

Rearrange the elements of \`nums\` such that the modified array follows the pattern \`[pos, neg, pos, neg, ...]\` where every **positive** integer is followed by a **negative** integer, and vice versa.

The **relative order** of positive and negative integers must be maintained.

Return the rearranged array.`,
  constraints: [
    '`2 <= nums.length <= 2 * 10^5`',
    '`nums.length` is **even**.',
    '`1 <= |nums[i]| <= 10^5`',
    '`nums` consists of equal number of positive and negative integers.',
  ],
  examples: [
    {
      input: 'nums = [3,1,-2,-5,2,-4]',
      output: '[3,-2,1,-5,2,-4]',
      explanation: 'Positives in order: 3,1,2. Negatives in order: -2,-5,-4. Interleaved: [3,-2,1,-5,2,-4].',
    },
    {
      input: 'nums = [-1,1]',
      output: '[1,-1]',
      explanation: 'Positive 1 first, then negative -1.',
    },
  ],
  hints: [
    'Separate positives and negatives into two arrays while maintaining their relative order.',
    'Interleave them: result[2i] = positives[i], result[2i+1] = negatives[i].',
  ],
  functionName: 'rearrangeArray',
  params: ['nums'],
  starterCode: {
    javascript: `function rearrangeArray(nums) {

}`,
    python: `def rearrangeArray(nums):
    pass`,
  },
  visibleTests: [
    { args: [[3, 1, -2, -5, 2, -4]], expected: [3, -2, 1, -5, 2, -4] },
    { args: [[-1, 1]], expected: [1, -1] },
    { args: [[1, -1, 2, -2]], expected: [1, -1, 2, -2] },
  ],
  hiddenTests: [
    { args: [[-3, 1, 2, -1, -2, 3]], expected: [1, -3, 2, -1, 3, -2] },
    { args: [[1, 2, -1, -2]], expected: [1, -1, 2, -2] },
    { args: [[-1, -2, 1, 2]], expected: [1, -1, 2, -2] },
  ],
};
