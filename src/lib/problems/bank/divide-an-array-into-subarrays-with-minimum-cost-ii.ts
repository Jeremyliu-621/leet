import type { Problem } from '../types';

export const problem: Problem = {
  id: 'divide-an-array-into-subarrays-with-minimum-cost-ii',
  title: 'Divide an Array Into Subarrays With Minimum Cost II',
  difficulty: 'hard',
  tags: ['arrays', 'heap', 'sliding-window'],
  description: `You are given a **0-indexed** array of integers \`nums\` of length \`n\`, and two positive integers \`k\` and \`dist\`.

The **cost** of an array is the value of its **first** element. For example, the cost of \`[1,2,3]\` is \`1\`.

You need to divide \`nums\` into exactly \`k\` non-empty **contiguous** subarrays, optimally choosing the split points to minimize the total cost. The **first** element of each subarray (its cost) is summed.

Additionally, the **difference between the starting indices** of any two adjacent split subarrays must be **greater than** \`dist\`. In other words, if the subarrays start at indices \`0 = i_0 < i_1 < ... < i_{k-1}\`, then \`i_{j+1} - i_j > dist\` for all valid \`j\`.

Return the **minimum** possible sum of the cost of these subarrays.`,
  constraints: [
    '3 <= nums.length <= 10^5',
    '1 <= nums[i] <= 10^9',
    '1 <= k <= floor(nums.length / (dist + 1))',
    '1 <= dist <= nums.length - k',
  ],
  examples: [
    {
      input: 'nums = [1,2,3,12,5], k = 3, dist = 2',
      output: '8',
      explanation:
        'Split starts at 0, 1, 4 (gaps 1 and 3, both > 2). Costs = nums[0]+nums[1]+nums[4] = 1+2+5=8. The only valid selection of 2 picks from positions {1..4} with pairwise gap > 2 is (1,4).',
    },
    {
      input: 'nums = [5,4,3,2,1], k = 2, dist = 3',
      output: '6',
      explanation: 'Split at 0 and 4. Cost = 5+1=6. One pick from {1..4} minimizing nums[i].',
    },
  ],
  hints: [
    'Level 1: The first subarray always contributes nums[0] (fixed). We need to choose k−1 "start" positions from {1, …, n−1} such that consecutive chosen positions differ by > dist, and minimize their sum.',
    'Level 2: Use layered DP: dp[t][j] = minimum sum of t picks from positions {1..j} with consecutive gaps > dist. Recurrence: dp[t][j] = min(dp[t][j−1], dp[t−1][j−dist−1] + nums[j]). Track running-min arrays to compute each layer in O(n).',
    'Level 3: Initialize layer 1 as a running minimum of nums[1..j]. For layers 2..k−1, use a pointer bestPrev tracking the minimum of the previous layer up to index j−dist−1. Answer = nums[0] + dp[k−1][n−1].',
  ],
  functionName: 'minimumCost',
  params: ['nums', 'k', 'dist'],
  starterCode: {
    javascript: `function minimumCost(nums, k, dist) {
  const n = nums.length;
  if (k === 1) return nums[0];
  // Layer 1: running min of nums[1..j]
  let prev = new Array(n).fill(Infinity);
  let runMin = Infinity;
  for (let j = 1; j < n; j++) {
    runMin = Math.min(runMin, nums[j]);
    prev[j] = runMin;
  }
  // Layers 2..k-1
  for (let t = 2; t <= k - 1; t++) {
    const curr = new Array(n).fill(Infinity);
    let bestPrev = Infinity;
    for (let j = 1; j < n; j++) {
      const avail = j - dist - 1;
      if (avail >= 1) bestPrev = Math.min(bestPrev, prev[avail]);
      if (bestPrev !== Infinity) curr[j] = bestPrev + nums[j];
      if (j > 1 && curr[j - 1] < curr[j]) curr[j] = curr[j - 1];
    }
    prev = curr;
  }
  return nums[0] + prev[n - 1];
}`,
    typescript: `function minimumCost(nums: number[], k: number, dist: number): number {
  const n = nums.length;
  if (k === 1) return nums[0]!;
  let prev = new Array<number>(n).fill(Infinity);
  let runMin = Infinity;
  for (let j = 1; j < n; j++) {
    runMin = Math.min(runMin, nums[j]!);
    prev[j] = runMin;
  }
  for (let t = 2; t <= k - 1; t++) {
    const curr = new Array<number>(n).fill(Infinity);
    let bestPrev = Infinity;
    for (let j = 1; j < n; j++) {
      const avail = j - dist - 1;
      if (avail >= 1) bestPrev = Math.min(bestPrev, prev[avail]!);
      if (bestPrev !== Infinity) curr[j] = bestPrev + nums[j]!;
      if (j > 1 && curr[j - 1]! < curr[j]!) curr[j] = curr[j - 1]!;
    }
    prev = curr;
  }
  return nums[0]! + prev[n - 1]!;
}`,
    python: `def minimumCost(nums, k, dist):
    n = len(nums)
    if k == 1:
        return nums[0]
    INF = float('inf')
    prev = [INF] * n
    run_min = INF
    for j in range(1, n):
        run_min = min(run_min, nums[j])
        prev[j] = run_min
    for t in range(2, k):
        curr = [INF] * n
        best_prev = INF
        for j in range(1, n):
            avail = j - dist - 1
            if avail >= 1:
                best_prev = min(best_prev, prev[avail])
            if best_prev != INF:
                curr[j] = best_prev + nums[j]
            if j > 1 and curr[j - 1] < curr[j]:
                curr[j] = curr[j - 1]
        prev = curr
    return nums[0] + prev[n - 1]`,
  },
  visibleTests: [
    { args: [[1, 2, 3, 12, 5], 3, 2], expected: 8 },
    { args: [[5, 4, 3, 2, 1], 2, 3], expected: 6 },
  ],
  hiddenTests: [
    { args: [[1, 2, 3, 12, 5], 3, 0], expected: 6 },
    { args: [[5, 4, 3], 3, 0], expected: 12 },
    { args: [[3, 1, 2, 1, 2], 3, 1], expected: 5 },
    { args: [[1, 1, 1, 1, 1], 3, 2], expected: 3 },
    { args: [[1, 3, 1, 3, 1], 3, 2], expected: 5 },
    { args: [[1, 2, 3, 4, 5], 2, 0], expected: 3 },
  ],
};
