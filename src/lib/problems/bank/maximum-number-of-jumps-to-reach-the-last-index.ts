import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximum-number-of-jumps-to-reach-the-last-index',
  title: 'Maximum Number of Jumps to Reach the Last Index',
  difficulty: 'medium',
  tags: ['arrays', 'dynamic-programming'],
  description: `You are given a **0-indexed** array \`nums\` of \`n\` integers and an integer \`target\`.

You are initially positioned at index \`0\`. In one step, you can jump from index \`i\` to any index \`j\` such that:

- \`0 <= i < j <= n - 1\`
- \`-target <= nums[j] - nums[i] <= target\`

Return the **maximum** number of jumps you can make to reach index \`n - 1\`.

If there is no way to reach index \`n - 1\`, return \`-1\`.`,
  constraints: [
    '2 <= nums.length <= 1000',
    '-10^9 <= nums[i] <= 10^9',
    '0 <= target <= 2 * 10^9',
  ],
  examples: [
    {
      input: 'nums = [1,3,6,4,1,2], target = 2',
      output: '3',
      explanation: 'Jump from index 0 (1) → 2 (6) is invalid (diff=5). Valid path: 0→1→3→5 with 3 jumps.',
    },
    {
      input: 'nums = [1,3,6,4,1,2], target = 3',
      output: '5',
      explanation: 'Jump through every index: 0→1→2→3→4→5 with 5 jumps, all diffs within 3.',
    },
  ],
  hints: [
    'Let dp[i] = maximum jumps to reach index i. Initialize dp[0] = 0 and dp[i] = -infinity for i > 0.',
    'For each index i where dp[i] != -infinity, try all j > i: if |nums[j] - nums[i]| <= target, update dp[j] = max(dp[j], dp[i] + 1).',
    'Return dp[n-1] if it was updated, otherwise -1.',
  ],
  functionName: 'maximumJumps',
  params: ['nums', 'target'],
  starterCode: {
    javascript: `function maximumJumps(nums, target) {

}`,
    typescript: `function maximumJumps(nums: number[], target: number): number {

}`,
    python: `def maximumJumps(nums: list[int], target: int) -> int:
    pass`,
  },
  visibleTests: [
    { args: [[1, 3, 6, 4, 1, 2], 2], expected: 3 },
    { args: [[1, 3, 6, 4, 1, 2], 3], expected: 5 },
    { args: [[1, 3, 6, 4, 1, 2], 0], expected: -1 },
  ],
  hiddenTests: [
    { args: [[1, 2], 0], expected: -1 },
    { args: [[1, 2], 1], expected: 1 },
    { args: [[0, 8, 9], 3], expected: -1 },
    { args: [[0, 4, 8, 9], 4], expected: 3 },
    { args: [[3, 3, 3], 0], expected: 2 },
    { args: [[5, 3, 3, 3, 3], 2], expected: 4 },
    { args: [[1, 1000000000, 1], 0], expected: 1 },
    { args: [[0, 0, 0, 0], 0], expected: 3 },
  ],
};
