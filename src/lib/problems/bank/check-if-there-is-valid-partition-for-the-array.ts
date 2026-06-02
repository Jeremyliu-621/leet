import type { Problem } from '../types';

export const problem: Problem = {
  id: 'check-if-there-is-valid-partition-for-the-array',
  title: 'Check If There Is a Valid Partition For The Array',
  difficulty: 'medium',
  tags: ['dynamic-programming', 'arrays'],
  description: `You are given a **0-indexed** integer array \`nums\`. You have to partition the array into one or more **contiguous** subarrays.

We call a partition of the array **valid** if each of the obtained subarrays satisfies **one** of the following conditions:

1. The subarray consists of exactly **2** equal elements. For example, \`[2,2]\`.
2. The subarray consists of exactly **3** equal elements. For example, \`[4,4,4]\`.
3. The subarray consists of exactly **3** consecutive increasing elements, that is, the difference between adjacent elements is **1**. For example, \`[3,4,5]\`.

Return \`true\` *if the array has **at least** one valid partition. Otherwise, return* \`false\`.`,
  constraints: [
    '2 <= nums.length <= 10^5',
    '1 <= nums[i] <= 10^6',
  ],
  examples: [
    {
      input: 'nums = [4,4,4,5,6]',
      output: 'true',
      explanation: 'We can partition the array into [4,4] and [4,5,6]. [4,4] has 2 equal elements. [4,5,6] has 3 consecutive increasing elements. So the partition is valid.',
    },
    {
      input: 'nums = [1,1,1,2]',
      output: 'false',
      explanation: 'There is no valid partition for this array. [1,1,1] is valid but leaves [2] which is length 1. [1,1] is valid but leaves [1,2] which is neither 2 equal nor 3 consecutive. So there is no valid partition.',
    },
  ],
  hints: [
    'Define dp[i] = true if we can validly partition nums[0..i-1].',
    'dp[0] = true (empty partition). For each i >= 2, check if the last 2 or 3 elements form a valid subarray, combined with a valid prefix.',
    'Check: dp[i-2] && nums[i-1]==nums[i-2]; dp[i-3] && all three equal; dp[i-3] && three consecutive increasing.',
  ],
  functionName: 'validPartition',
  params: ['nums'],
  starterCode: {
    javascript: `function validPartition(nums) {
  const n = nums.length;
  const dp = new Array(n + 1).fill(false);
  dp[0] = true;
  for (let i = 2; i <= n; i++) {
    if (dp[i-2] && nums[i-1] === nums[i-2]) dp[i] = true;
    if (i >= 3 && dp[i-3] && nums[i-1] === nums[i-2] && nums[i-2] === nums[i-3]) dp[i] = true;
    if (i >= 3 && dp[i-3] && nums[i-1] === nums[i-2]+1 && nums[i-2] === nums[i-3]+1) dp[i] = true;
  }
  return dp[n];
}`,
    typescript: `function validPartition(nums: number[]): boolean {
  const n = nums.length;
  const dp = new Array<boolean>(n + 1).fill(false);
  dp[0] = true;
  for (let i = 2; i <= n; i++) {
    if (dp[i-2]! && nums[i-1]! === nums[i-2]!) dp[i] = true;
    if (i >= 3 && dp[i-3]! && nums[i-1]! === nums[i-2]! && nums[i-2]! === nums[i-3]!) dp[i] = true;
    if (i >= 3 && dp[i-3]! && nums[i-1]! === nums[i-2]!+1 && nums[i-2]! === nums[i-3]!+1) dp[i] = true;
  }
  return dp[n]!;
}`,
    python: `def validPartition(nums: list[int]) -> bool:
    n = len(nums)
    dp = [False] * (n + 1)
    dp[0] = True
    for i in range(2, n + 1):
        if dp[i-2] and nums[i-1] == nums[i-2]:
            dp[i] = True
        if i >= 3 and dp[i-3] and nums[i-1] == nums[i-2] == nums[i-3]:
            dp[i] = True
        if i >= 3 and dp[i-3] and nums[i-1] == nums[i-2]+1 == nums[i-3]+2:
            dp[i] = True
    return dp[n]`,
  },
  visibleTests: [
    { args: [[4, 4, 4, 5, 6]], expected: true },
    { args: [[1, 1, 1, 2]], expected: false },
    { args: [[1, 2, 3]], expected: true },
    { args: [[2, 2]], expected: true },
    { args: [[1, 2]], expected: false },
  ],
  hiddenTests: [
    { args: [[1, 1, 1]], expected: true },
    { args: [[4, 5, 6]], expected: true },
    { args: [[1, 1, 2, 2]], expected: true },
    { args: [[3, 3, 3, 3]], expected: true },
    { args: [[1, 2, 3, 4, 5, 6]], expected: true },
    { args: [[1, 1, 1, 1]], expected: true },
    { args: [[1, 2, 3, 3, 4, 5]], expected: true },
    { args: [[1, 2, 3, 1, 2, 3]], expected: true },
    { args: [[1, 1, 2, 2, 3, 3]], expected: true },
    { args: [[1, 2, 3, 2, 3, 4]], expected: true },
  ],
};
