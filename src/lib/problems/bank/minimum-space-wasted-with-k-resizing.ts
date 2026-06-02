import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-space-wasted-with-k-resizing',
  title: 'Minimum Space Wasted With K Resizing Operations',
  difficulty: 'hard',
  tags: ['arrays', 'dynamic-programming'],
  description: `You are currently designing a dynamic array. You are given a **0-indexed** integer array \`nums\`, where \`nums[i]\` is the number of elements that will be in the array at time \`i\`. In addition, you are given an integer \`k\`, the **maximum** number of times you can **resize** the array (beyond the initial allocation).

The size of the array at any time \`t\` must be at least \`nums[t]\`. Each resize operation sets the array size to exactly \`nums[t]\` at time \`t\`.

The **space wasted** at any time \`t\` is \`size[t] - nums[t]\`, where \`size[t]\` is the current array size. The total waste is the sum over all times.

You may resize at any times, but **at most k times** total. Return the **minimum total space wasted**.

**Note:** The initial allocation at time 0 is free (not counted as a resize).`,
  constraints: [
    '1 <= nums.length <= 200',
    '1 <= nums[i] <= 10^6',
    '0 <= k <= nums.length - 1',
  ],
  examples: [
    {
      input: 'nums = [10,20], k = 0',
      output: '10',
      explanation:
        'No resizes allowed: set size=20 at t=0. Waste: (20-10)+(20-20)=10.',
    },
    {
      input: 'nums = [10,20,30], k = 1',
      output: '10',
      explanation:
        'Set size=20 for [10,20], then resize to 30 for [30]: waste=(20-10)+(20-20)+(30-30)=10. Alternatively size=30 initially then no resize: waste=(30-10)+(30-20)+(30-30)=20. Min=10.',
    },
    {
      input: 'nums = [10,20,15,30,20], k = 2',
      output: '15',
      explanation:
        'Size=20 for [10,20,15], resize to 30 for [30], resize to 20 for [20]. Waste=(20-10)+(20-20)+(20-15)+0+0=15.',
    },
  ],
  hints: [
    'Level 1: Split nums into k+1 contiguous segments. For each segment, the optimal allocation size is max(segment). Waste of a segment = max(segment) * length - sum(segment).',
    'Level 2: DP: dp[j][i] = min waste for the first i elements using exactly j resizes (j+1 segments ending at i-1). Transition: dp[j][i] = min over p of dp[j-1][p] + waste(p, i-1).',
    'Level 3: Precompute prefix sums. For each right endpoint i, sweep left maintaining a running max. O(n^2 * k) total — fine for n ≤ 200.',
  ],
  functionName: 'minSpaceWastedKResizing',
  params: ['nums', 'k'],
  starterCode: {
    javascript: `function minSpaceWastedKResizing(nums, k) {
  const n = nums.length;
  const prefix = new Array(n + 1).fill(0);
  for (let i = 0; i < n; i++) prefix[i + 1] = prefix[i] + nums[i];
  // waste(l, r) = max(nums[l..r]) * (r-l+1) - sum(nums[l..r])
  // dp[j][i] = min waste for nums[0..i] using j resizes
  const INF = 1e15;
  // dp[i] = min waste for nums[0..i] with current number of resizes
  let dp = new Array(n).fill(INF);
  // Initialize for 0 resizes (one segment from 0..i)
  let mx = 0;
  for (let i = 0; i < n; i++) {
    mx = Math.max(mx, nums[i]);
    dp[i] = mx * (i + 1) - prefix[i + 1];
  }
  for (let j = 0; j < k; j++) {
    const ndp = new Array(n).fill(INF);
    for (let i = 0; i < n; i++) {
      let rmx = 0;
      for (let p = i; p >= j + 1; p--) {
        rmx = Math.max(rmx, nums[p]);
        const w = rmx * (i - p + 1) - (prefix[i + 1] - prefix[p]);
        if (dp[p - 1] + w < ndp[i]) ndp[i] = dp[p - 1] + w;
      }
    }
    dp = ndp;
  }
  return dp[n - 1];
}`,
    typescript: `function minSpaceWastedKResizing(nums: number[], k: number): number {
  const n = nums.length;
  const prefix = new Array<number>(n + 1).fill(0);
  for (let i = 0; i < n; i++) prefix[i + 1] = prefix[i]! + nums[i]!;
  let dp = new Array<number>(n).fill(1e15);
  let mx = 0;
  for (let i = 0; i < n; i++) {
    mx = Math.max(mx, nums[i]!);
    dp[i] = mx * (i + 1) - prefix[i + 1]!;
  }
  for (let j = 0; j < k; j++) {
    const ndp = new Array<number>(n).fill(1e15);
    for (let i = 0; i < n; i++) {
      let rmx = 0;
      for (let p = i; p >= j + 1; p--) {
        rmx = Math.max(rmx, nums[p]!);
        const w = rmx * (i - p + 1) - (prefix[i + 1]! - prefix[p]!);
        if (dp[p - 1]! + w < ndp[i]!) ndp[i] = dp[p - 1]! + w;
      }
    }
    dp = ndp;
  }
  return dp[n - 1]!;
}`,
    python: `def minSpaceWastedKResizing(nums, k):
    if hasattr(nums, 'to_py'): nums = nums.to_py()
    if hasattr(k, 'to_py'): k = k.to_py()
    nums = [int(x) for x in nums]; k = int(k)
    n = len(nums)
    prefix = [0] * (n + 1)
    for i in range(n): prefix[i + 1] = prefix[i] + nums[i]
    INF = float('inf')
    dp = [INF] * n
    mx = 0
    for i in range(n):
        mx = max(mx, nums[i])
        dp[i] = mx * (i + 1) - prefix[i + 1]
    for j in range(k):
        ndp = [INF] * n
        for i in range(n):
            rmx = 0
            for p in range(i, j, -1):
                rmx = max(rmx, nums[p])
                w = rmx * (i - p + 1) - (prefix[i + 1] - prefix[p])
                if dp[p - 1] + w < ndp[i]:
                    ndp[i] = dp[p - 1] + w
        dp = ndp
    return dp[n - 1]`,
  },
  visibleTests: [
    { args: [[10, 20], 0], expected: 10 },
    { args: [[10, 20, 30], 1], expected: 10 },
    { args: [[10, 20, 15, 30, 20], 2], expected: 15 },
  ],
  hiddenTests: [
    { args: [[1, 2, 3], 0], expected: 3 },
    { args: [[5, 5, 5], 0], expected: 0 },
    { args: [[3, 1, 2, 4], 1], expected: 3 },
    { args: [[10, 20, 30, 40], 2], expected: 10 },
    { args: [[1, 1, 1, 1], 2], expected: 0 },
  ],
};
