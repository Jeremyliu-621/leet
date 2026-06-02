import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximum-number-of-jumps-to-reach-last-index',
  title: 'Maximum Number of Jumps to Reach the Last Index',
  difficulty: 'medium',
  tags: ['arrays', 'dynamic-programming'],
  description: `You are given a **0-indexed** array \`nums\` of \`n\` integers and an integer \`target\`.

You are initially positioned at index \`0\`. In one step, you can jump from index \`i\` to any index \`j\` such that:
- \`0 <= i < j <= n - 1\`
- \`-target <= nums[j] - nums[i] <= target\`

Return the **maximum** number of jumps you can make to reach index \`n - 1\`. If there is **no way** to reach index \`n - 1\`, return **-1**.`,
  constraints: [
    '2 <= nums.length <= 1000',
    '-10^9 <= nums[i] <= 10^9',
    '0 <= target <= 2 * 10^9',
  ],
  examples: [
    {
      input: 'nums = [1,3,6,4,1,2], target = 2',
      output: '3',
      explanation:
        'Path 0→1→3→5: |3-1|=2≤2, |4-3|=1≤2, |2-4|=2≤2. 3 jumps.',
    },
    {
      input: 'nums = [1,3,6,4,1,2], target = 3',
      output: '5',
      explanation:
        'Path 0→1→2→3→4→5: each consecutive diff ≤ 3. 5 jumps.',
    },
    {
      input: 'nums = [0,8,9], target = 5',
      output: '-1',
      explanation: 'Cannot reach index 1 or 2 from index 0 since |8-0|=8>5 and |9-0|=9>5.',
    },
  ],
  hints: [
    'Level 1: DP: dp[j] = max jumps to reach index j; initialize dp[0]=0, all others -1.',
    'Level 2: For each j from 1 to n-1, iterate i from 0 to j-1: if dp[i]!=-1 and |nums[j]-nums[i]|<=target, update dp[j]=max(dp[j], dp[i]+1).',
    'Level 3: O(n^2) is fine for n≤1000. Return dp[n-1].',
  ],
  functionName: 'maximumJumps',
  params: ['nums', 'target'],
  starterCode: {
    javascript: `function maximumJumps(nums, target) {
  const n = nums.length;
  const dp = new Array(n).fill(-1);
  dp[0] = 0;
  for (let j = 1; j < n; j++) {
    for (let i = 0; i < j; i++) {
      if (dp[i] !== -1 && Math.abs(nums[j] - nums[i]) <= target) {
        dp[j] = Math.max(dp[j], dp[i] + 1);
      }
    }
  }
  return dp[n - 1];
}`,
    typescript: `function maximumJumps(nums: number[], target: number): number {
  const n = nums.length;
  const dp = new Array<number>(n).fill(-1);
  dp[0] = 0;
  for (let j = 1; j < n; j++) {
    for (let i = 0; i < j; i++) {
      if (dp[i] !== -1 && Math.abs(nums[j]! - nums[i]!) <= target) {
        dp[j] = Math.max(dp[j]!, dp[i]! + 1);
      }
    }
  }
  return dp[n - 1]!;
}`,
    python: `def maximumJumps(nums, target):
    if hasattr(nums, 'to_py'): nums = nums.to_py()
    if hasattr(target, 'to_py'): target = target.to_py()
    nums = [int(x) for x in nums]; target = int(target)
    n = len(nums)
    dp = [-1] * n
    dp[0] = 0
    for j in range(1, n):
        for i in range(j):
            if dp[i] != -1 and abs(nums[j] - nums[i]) <= target:
                dp[j] = max(dp[j], dp[i] + 1)
    return dp[n - 1]`,
  },
  visibleTests: [
    { args: [[1, 3, 6, 4, 1, 2], 2], expected: 3 },
    { args: [[1, 3, 6, 4, 1, 2], 3], expected: 5 },
    { args: [[0, 8, 9], 5], expected: -1 },
  ],
  hiddenTests: [
    { args: [[1, 2], 1], expected: 1 },
    { args: [[1, 2, 3, 4, 5], 1], expected: 4 },
    { args: [[1, 5, 3, 5], 1], expected: -1 },
    { args: [[0, 0, 0], 0], expected: 2 },
  ],
};
