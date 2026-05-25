import type { Problem } from '../types';

export const problem: Problem = {
  id: 'steps-to-make-array-nondecreasing',
  title: 'Steps to Make Array Non-decreasing',
  difficulty: 'medium',
  tags: ['arrays', 'stack'],
  description: `You are given a **0-indexed** integer array \`nums\`. In one step, **remove** all elements \`nums[i]\` where \`nums[i - 1] > nums[i]\` for all valid \`i\` simultaneously.

Return the number of steps performed until the array becomes **non-decreasing**.`,
  constraints: [
    '1 <= nums.length <= 10^5',
    '1 <= nums[i] <= 10^9',
  ],
  examples: [
    {
      input: 'nums = [5,3,4,4,7,3,6,11,8,5,11]',
      output: '3',
      explanation: 'Step 1: remove 3,3,8,5 → [5,4,4,7,6,11,11]. Step 2: remove 4,6 → [5,4,7,11,11]. Step 3: remove 4 → [5,7,11,11].',
    },
    {
      input: 'nums = [4,5,7,7,13]',
      output: '0',
      explanation: 'Array is already non-decreasing.',
    },
  ],
  hints: [
    'Use a monotonic stack and DP: dp[i] = number of steps element i survives before being removed.',
    'For each element, while the top of the stack is ≤ current element, pop and track the max dp value seen.',
    'If the stack is non-empty after popping, dp[i] = max(poppedMax + 1, 1). The answer is max(dp).',
  ],
  functionName: 'totalSteps',
  params: ['nums'],
  starterCode: {
    javascript: `function totalSteps(nums) {

}`,
    python: `def totalSteps(nums):
    pass`,
  },
  visibleTests: [
    { args: [[5,3,4,4,7,3,6,11,8,5,11]], expected: 3 },
    { args: [[4,5,7,7,13]], expected: 0 },
  ],
  hiddenTests: [
    { args: [[1]], expected: 0 },
    { args: [[2,1]], expected: 1 },
    { args: [[1,2]], expected: 0 },
    { args: [[5,4,3,2,1]], expected: 1 },
    { args: [[1,2,3,2,1]], expected: 1 },
    { args: [[3,2,1,2,1,2]], expected: 3 },
  ],
};
