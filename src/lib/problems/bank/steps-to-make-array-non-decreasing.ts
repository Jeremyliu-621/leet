import type { Problem } from '../types';

export const problem: Problem = {
  id: 'steps-to-make-array-non-decreasing',
  title: 'Steps to Make Array Non-decreasing',
  difficulty: 'medium',
  tags: ['arrays', 'stack'],
  description: `You are given a **0-indexed** integer array \`nums\`. In one step, **remove** all elements \`nums[i]\` where \`nums[i - 1] > nums[i]\` for all \`0 < i < nums.length\`.

Return the number of steps performed until \`nums\` becomes a **non-decreasing** array.`,
  constraints: [
    '`1 <= nums.length <= 10^5`',
    '`1 <= nums[i] <= 10^9`',
  ],
  examples: [
    {
      input: 'nums = [5,3,4,4,7,3,6,11,8,5,11]',
      output: '3',
      explanation: 'After step 1: [5,4,4,7,6,11,11]. After step 2: [5,4,7,11,11]. After step 3: [5,7,11,11]. Non-decreasing.',
    },
    {
      input: 'nums = [4,5,7,7,13]',
      output: '0',
      explanation: 'Already non-decreasing.',
    },
  ],
  hints: [
    'For each element, define d[i] = the round in which nums[i] is removed (0 if never removed).',
    'd[i] = 1 + max(d[k] for all k with leftGreater(i) < k < i), where leftGreater(i) is the nearest index j < i with nums[j] > nums[i].',
    'Use a monotone decreasing stack: pop elements with value <= nums[i] and track max d; if stack is non-empty after popping, d[i] = maxD + 1, otherwise d[i] = 0.',
  ],
  functionName: 'totalSteps',
  params: ['nums'],
  starterCode: {
    javascript: `function totalSteps(nums) {

}`,
    typescript: `function totalSteps(nums: number[]): number {

}`,
    python: `def totalSteps(nums):
    pass`,
  },
  visibleTests: [
    { args: [[5, 3, 4, 4, 7, 3, 6, 11, 8, 5, 11]], expected: 3 },
    { args: [[4, 5, 7, 7, 13]], expected: 0 },
  ],
  hiddenTests: [
    { args: [[1]], expected: 0 },
    { args: [[2, 1]], expected: 1 },
    { args: [[3, 1, 2]], expected: 2 },
    { args: [[3, 2, 1]], expected: 1 },
    { args: [[1, 2, 3]], expected: 0 },
    { args: [[5, 4, 3, 2, 1]], expected: 1 },
    { args: [[1, 5, 2, 3, 4]], expected: 3 },
  ],
};
