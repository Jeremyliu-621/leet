import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximum-number-of-jumps-to-reach-last-index',
  title: 'Maximum Number of Jumps to Reach the Last Index',
  difficulty: 'medium',
  tags: ['dynamic-programming'],
  description: `You are given a **0-indexed** array \`nums\` of \`n\` integers and an integer \`target\`.

You are initially positioned at index \`0\`. In one step, you can jump from index \`i\` to any index \`j\` such that:

- \`0 <= i < j < n\`
- \`-target <= nums[j] - nums[i] <= target\` (i.e., \`|nums[i] - nums[j]| <= target\`)

Return the **maximum number of jumps** you can make to reach index \`n - 1\`. If there is no way to reach index \`n - 1\`, return \`-1\`.`,
  constraints: [
    '2 <= nums.length <= 1000',
    '-10^9 <= nums[i] <= 10^9',
    '0 <= target <= 2 * 10^9',
  ],
  examples: [
    {
      input: 'nums = [1,3,6,4,1,2], target = 2',
      output: '3',
      explanation: 'One optimal path: index 0 → 1 → 3 → 5. Jumps: |3-1|=2, |4-3|=1, |2-4|=2. All ≤ 2.',
    },
    {
      input: 'nums = [1,3,6,4,1,2], target = 3',
      output: '5',
      explanation: 'Optimal path: 0→1→2→3→4→5. All consecutive differences ≤ 3.',
    },
  ],
  hints: [
    'Use DP: let dp[i] = max jumps to reach index i. Initialize dp[0] = 0, others = -1.',
    'For each index j, check all i < j: if |nums[i] - nums[j]| <= target and dp[i] != -1, update dp[j] = max(dp[j], dp[i] + 1).',
    'Return dp[n-1].',
  ],
  functionName: 'maximumJumps',
  params: ['nums', 'target'],
  starterCode: {
    javascript: 'function maximumJumps(nums, target) {\n\n}',
    python: 'def maximumJumps(nums, target):\n    pass',
  },
  visibleTests: [
    { args: [[1, 3, 6, 4, 1, 2], 2], expected: 3 },
    { args: [[1, 3, 6, 4, 1, 2], 3], expected: 5 },
  ],
  hiddenTests: [
    { args: [[1, 2], 0], expected: -1 },
    { args: [[1, 2], 1], expected: 1 },
    { args: [[1, 1, 1, 1], 0], expected: 3 },
    { args: [[0, 100], 99], expected: -1 },
    { args: [[0, 100], 100], expected: 1 },
    { args: [[1, 3, 6, 4, 1, 2], 0], expected: -1 },
    { args: [[5, 4, 3, 2, 1], 1], expected: 4 },
  ],
};
