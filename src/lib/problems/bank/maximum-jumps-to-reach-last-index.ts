import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximum-jumps-to-reach-last-index',
  title: 'Maximum Number of Jumps to Reach the Last Index',
  difficulty: 'medium',
  tags: ['dynamic-programming'],
  description: `You are given a 0-indexed array \`nums\` of \`n\` integers and an integer \`target\`.

You are initially positioned at index 0. In one step, you can jump from index \`i\` to any index \`j\` such that:

- \`0 <= i < j < n\`
- \`|nums[i] - nums[j]| <= target\`

Return the **maximum number of jumps** you can make to reach index \`n - 1\`.

If it is not possible to reach index \`n - 1\`, return \`-1\`.`,
  constraints: [
    '2 <= nums.length <= 1000',
    '-10^9 <= nums[i] <= 10^9',
    '0 <= target <= 2 * 10^9',
  ],
  examples: [
    {
      input: 'nums = [1,3,6,4,1,2], target = 2',
      output: '3',
      explanation: 'One optimal path: 0→1→3→5 (indices). |1-3|=2<=2, |3-4|=1<=2, |4-2|=2<=2. Total 3 jumps.',
    },
    {
      input: 'nums = [1,3,6,4,1,2], target = 3',
      output: '5',
      explanation: 'Path: 0→1→2→3→4→5. All adjacent differences are <=3.',
    },
    {
      input: 'nums = [1,3,6,4,1,2], target = 0',
      output: '-1',
      explanation: 'We can only jump to indices with equal value, but no such path exists from 0 to 5.',
    },
  ],
  hints: [
    'Use DP: dp[i] = maximum jumps to reach index i, initialized to -1 (unreachable).',
    'dp[0] = 0. For each j > 0, try all i < j where |nums[i] - nums[j]| <= target and dp[i] != -1.',
    'dp[j] = max(dp[j], dp[i] + 1). Return dp[n-1].',
  ],
  functionName: 'maximumJumps',
  params: ['nums', 'target'],
  starterCode: {
    javascript: 'function maximumJumps(nums, target) {\n\n}',
    typescript: "function maximumJumps(nums: number[], target: number): number {\n\n}",

    python: 'def maximumJumps(nums, target):\n    pass',
  },
  visibleTests: [
    { args: [[1, 3, 6, 4, 1, 2], 2], expected: 3 },
    { args: [[1, 3, 6, 4, 1, 2], 3], expected: 5 },
    { args: [[1, 3, 6, 4, 1, 2], 0], expected: -1 },
  ],
  hiddenTests: [
    { args: [[1, 2], 1], expected: 1 },
    { args: [[1, 3], 1], expected: -1 },
    { args: [[0, 0, 0], 0], expected: 2 },
    { args: [[1, 2, 3, 4, 5], 1], expected: 4 },
    { args: [[5, 4, 3, 2, 1], 1], expected: 4 },
    { args: [[1, 100, 1], 0], expected: 1 },
    { args: [[1, 1, 1, 1], 0], expected: 3 },
  ],
};
