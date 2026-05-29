import type { Problem } from '../types';

export const problem: Problem = {
  id: 'steps-to-make-array-non-decreasing',
  title: 'Steps to Make Array Non-decreasing',
  difficulty: 'hard',
  tags: ['arrays', 'stack', 'dynamic-programming'],
  description: `You are given a **0-indexed** integer array \`nums\`. In one step, remove all elements \`nums[i]\` where \`nums[i - 1] > nums[i]\` for all valid \`i\` **simultaneously**. All removals in one step happen at the same time.

Return the number of steps it takes to make \`nums\` non-decreasing.

A sequence of integers is **non-decreasing** if each element is greater than or equal to the element before it.`,
  constraints: [
    '1 <= nums.length <= 10^5',
    '1 <= nums[i] <= 10^9',
  ],
  examples: [
    {
      input: 'nums = [5,3,4,4,7,3,6,11,8,5,11]',
      output: '3',
      explanation: 'Step 1: Remove all elements with a greater left neighbor simultaneously — 3(idx 1), 3(idx 5), 8(idx 8), 5(idx 9) → [5,4,4,7,6,11,11]. Step 2: 5>4 and 7>6, remove 4(idx 1) and 6(idx 4) → [5,4,7,11,11]. Step 3: 5>4, remove 4 → [5,7,11,11]. Now non-decreasing. 3 steps total.',
    },
    {
      input: 'nums = [4,5,7,7,13]',
      output: '0',
      explanation: 'Already non-decreasing. 0 steps needed.',
    },
  ],
  hints: [
    'Use a monotonic stack. For each element, track how many steps it would take before it gets removed (or 0 if it survives).',
    'When processing element x, pop all elements from the stack that are <= x — they will be "swallowed" by x. The steps count for x is 1 + max(steps of swallowed elements) if there is still a larger element to x\'s left (remaining stack), otherwise 0.',
    'Maintain a running maximum of steps. The answer is the maximum steps value across all elements.',
  ],
  functionName: 'totalSteps',
  params: ['nums'],
  starterCode: {
    javascript: `function totalSteps(nums) {
  // your code here
}`,
    typescript: 'function totalSteps(nums: number[]): number {\n  // your code here\n}',
    python: `def totalSteps(nums):
    # your code here
    pass`,
  },
  visibleTests: [
    { args: [[5, 3, 4, 4, 7, 3, 6, 11, 8, 5, 11]], expected: 3 },
    { args: [[4, 5, 7, 7, 13]], expected: 0 },
  ],
  hiddenTests: [
    { args: [[1]], expected: 0 },
    { args: [[3, 2, 1]], expected: 1 },
    { args: [[5, 3, 4]], expected: 2 },
    { args: [[1, 2, 3]], expected: 0 },
    { args: [[10, 1, 2, 3, 4, 5]], expected: 5 },
    { args: [[5, 5, 5]], expected: 0 },
  ],
};
