import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximum-sum-with-exactly-k-elements',
  title: 'Maximum Sum With Exactly K Elements',
  difficulty: 'easy',
  tags: ['arrays', 'math'],
  description: `You are given a **0-indexed** integer array \`nums\` and an integer \`k\`. Perform exactly \`k\` operations:

- Pick any element \`nums[i]\`, add it to your **score**, then replace \`nums[i]\` with \`nums[i] + 1\`.

Return the **maximum** score after exactly \`k\` operations.`,
  constraints: [
    '1 <= nums.length <= 100',
    '1 <= nums[i] <= 100',
    '1 <= k <= 100',
  ],
  examples: [
    {
      input: 'nums = [1,2,3,4,5], k = 3',
      output: '18',
      explanation: 'Pick 5 (score=5), array becomes [1,2,3,4,6]. Pick 6 (score=11), array becomes [1,2,3,4,7]. Pick 7 (score=18). Optimal: always pick the maximum.',
    },
    {
      input: 'nums = [5,4,3,2,1], k = 3',
      output: '18',
      explanation: 'Same as above — max is 5, and we keep picking the growing maximum.',
    },
    {
      input: 'nums = [1], k = 5',
      output: '15',
      explanation: 'Score = 1+2+3+4+5 = 15.',
    },
  ],
  hints: [
    'Optimal strategy: always pick the current maximum element — it only grows, so it remains the largest.',
    'If the initial maximum is m, after k picks your scores are m, m+1, m+2, ..., m+k-1.',
    'Sum = k * m + k * (k - 1) / 2.',
  ],
  functionName: 'maximizeSum',
  params: ['nums', 'k'],
  starterCode: {
    javascript: `function maximizeSum(nums, k) {

}`,
    typescript: `function maximizeSum(nums: number[], k: number): number {

}`,
    python: `def maximizeSum(nums, k):
    pass`,
  },
  visibleTests: [
    { args: [[1, 2, 3, 4, 5], 3], expected: 18 },
    { args: [[5, 4, 3, 2, 1], 3], expected: 18 },
    { args: [[1], 5], expected: 15 },
  ],
  hiddenTests: [
    { args: [[1], 1], expected: 1 },
    { args: [[10], 3], expected: 33 },
    { args: [[1, 2], 2], expected: 5 },
    { args: [[3, 1, 2], 4], expected: 18 },
    { args: [[100], 1], expected: 100 },
    { args: [[1, 1, 1], 2], expected: 3 },
  ],
};
