import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximum-sum-exactly-k-elements',
  title: 'Maximum Sum With Exactly K Elements',
  difficulty: 'easy',
  tags: ['arrays', 'math'],
  description: `You are given a **0-indexed** integer array \`nums\` and an integer \`k\`. Your task is to perform the following operation **exactly** \`k\` times in order to maximize your score:

1. Select any element \`m\` from \`nums\`.
2. **Remove** \`m\` from \`nums\`.
3. Add \`m + 1\` back into \`nums\`.
4. Add \`m\` to your score.

Return the **maximum** achievable score after performing the operation exactly \`k\` times.`,
  constraints: [
    '1 <= nums.length <= 100',
    '1 <= nums[i] <= 100',
    '1 <= k <= 100',
  ],
  examples: [
    {
      input: 'nums = [1,2,3], k = 3',
      output: '12',
      explanation: 'Pick 3 (score=3, arr=[1,2,4]). Pick 4 (score=7, arr=[1,2,5]). Pick 5 (score=12, arr=[1,2,6]).',
    },
    {
      input: 'nums = [5,100], k = 2',
      output: '201',
      explanation: 'Pick 100 (score=100, arr=[5,101]). Pick 101 (score=201).',
    },
  ],
  hints: [
    'To maximize score, always pick the current maximum element.',
    'After each pick, the max increases by 1. If the initial maximum is `m`, picks yield `m, m+1, m+2, ..., m+k-1`.',
    'Sum = k*m + 0+1+...+(k-1) = k*m + k*(k-1)/2.',
  ],
  functionName: 'maximizeSum',
  params: ['nums', 'k'],
  starterCode: {
    javascript: 'function maximizeSum(nums, k) {\n  \n}\n',
    typescript: "function maximizeSum(nums: number[], k: number): number {\n  \n}",

    python: 'def maximizeSum(nums, k):\n    pass\n',
  },
  visibleTests: [
    { args: [[1, 2, 3], 3], expected: 12 },
    { args: [[5, 100], 2], expected: 201 },
  ],
  hiddenTests: [
    { args: [[1], 1], expected: 1 },
    { args: [[10], 5], expected: 60 },
    { args: [[1, 1, 1], 3], expected: 6 },
    { args: [[7, 3, 5], 4], expected: 34 },
    { args: [[100], 100], expected: 14950 },
  ],
};
