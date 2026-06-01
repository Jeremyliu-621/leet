import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-the-maximum-length-of-a-good-subsequence-ii',
  title: 'Find the Maximum Length of a Good Subsequence II',
  difficulty: 'hard',
  tags: ['arrays', 'dynamic-programming', 'hash-map'],
  description: `A subsequence of an array is called **good** if the number of positions \`i\` in the subsequence where \`sub[i] != sub[i+1]\` is **at most \`k\`**.

Given an integer array \`nums\` and a non-negative integer \`k\`, return the **length of the longest good subsequence** of \`nums\`.

This is Part II of the problem with larger constraints (up to 5000 elements).`,
  constraints: [
    '1 <= nums.length <= 5000',
    '1 <= nums[i] <= 10^9',
    '0 <= k <= min(nums.length - 1, 50)',
  ],
  examples: [
    {
      input: 'nums = [1,2,1,1,3], k = 2',
      output: '4',
      explanation: 'With k=2 we can allow 2 different adjacent pairs. The subsequence [1,1,1,3] has 1 pair (≤2), length 4.',
    },
    {
      input: 'nums = [1,2,3,4,5,1], k = 0',
      output: '2',
      explanation: 'With k=0 all elements must be equal. Value 1 appears at indices 0 and 5, giving length 2.',
    },
  ],
  hints: [
    'Level 1: Same approach as Part I but with n up to 5000. Use O(n·k) DP with value-to-length maps for each allowed transition count.',
    'Level 2: Maintain dp[j] as a Map<value, maxLength> for subsequences with at most j different adjacent pairs. Also maintain max_dp[j] = max length across all values for exactly j pairs.',
    'Level 3: For each element v, snapshot prev_same[j]=dp[j].get(v) and prev_max[j]=max_dp[j] before updating. Then dp[j][v] = max(prev_same[j]+1 if >0, prev_max[j-1]+1 if j>0 and >0). Answer is max_dp[k].',
  ],
  functionName: 'maximumLength',
  params: ['nums', 'k'],
  starterCode: {
    javascript: `function maximumLength(nums, k) {
  const dp = Array.from({ length: k + 1 }, () => new Map());
  const maxDp = new Array(k + 1).fill(0);
  for (const v of nums) {
    const prevSame = dp.map(d => d.get(v) ?? 0);
    const prevMax = [...maxDp];
    for (let j = 0; j <= k; j++) {
      let val;
      if (j === 0) {
        val = prevSame[0] + 1;
      } else {
        const fromSame = prevSame[j] > 0 ? prevSame[j] + 1 : 0;
        const fromDiff = prevMax[j - 1] > 0 ? prevMax[j - 1] + 1 : 0;
        val = Math.max(fromSame, fromDiff);
      }
      if (val > 0) {
        dp[j].set(v, Math.max(dp[j].get(v) ?? 0, val));
        if (val > maxDp[j]) maxDp[j] = val;
      }
    }
  }
  return maxDp[k];
}`,
    typescript: `function maximumLength(nums: number[], k: number): number {
  const dp = Array.from({ length: k + 1 }, () => new Map<number, number>());
  const maxDp = new Array<number>(k + 1).fill(0);
  for (const v of nums) {
    const prevSame = dp.map(d => d.get(v) ?? 0);
    const prevMax = [...maxDp];
    for (let j = 0; j <= k; j++) {
      let val: number;
      if (j === 0) {
        val = prevSame[0] + 1;
      } else {
        const fromSame = prevSame[j] > 0 ? prevSame[j] + 1 : 0;
        const fromDiff = prevMax[j - 1] > 0 ? prevMax[j - 1] + 1 : 0;
        val = Math.max(fromSame, fromDiff);
      }
      if (val > 0) {
        dp[j].set(v, Math.max(dp[j].get(v) ?? 0, val));
        if (val > maxDp[j]) maxDp[j] = val;
      }
    }
  }
  return maxDp[k];
}`,
    python: `def maximumLength(nums, k):
    dp = [{} for _ in range(k + 1)]
    max_dp = [0] * (k + 1)
    for v in nums:
        prev_same = [d.get(v, 0) for d in dp]
        prev_max = list(max_dp)
        for j in range(k + 1):
            if j == 0:
                val = prev_same[0] + 1
            else:
                from_same = prev_same[j] + 1 if prev_same[j] > 0 else 0
                from_diff = prev_max[j - 1] + 1 if prev_max[j - 1] > 0 else 0
                val = max(from_same, from_diff)
            if val > 0:
                dp[j][v] = max(dp[j].get(v, 0), val)
                if val > max_dp[j]:
                    max_dp[j] = val
    return max_dp[k]`,
  },
  visibleTests: [
    { args: [[1, 2, 1, 1, 3], 2], expected: 4 },
    { args: [[1, 2, 3, 4, 5, 1], 0], expected: 2 },
    { args: [[1, 2, 1, 2, 1, 2], 2], expected: 4 },
  ],
  hiddenTests: [
    { args: [[1], 0], expected: 1 },
    { args: [[1, 1, 1], 0], expected: 3 },
    { args: [[1, 2, 3], 2], expected: 3 },
    { args: [[1, 2, 1, 2, 3, 3, 3, 1, 2, 1], 2], expected: 7 },
    { args: [[5, 5, 5, 5, 5], 1], expected: 5 },
  ],
};
