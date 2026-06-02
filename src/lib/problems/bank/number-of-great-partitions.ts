import type { Problem } from '../types';

export const problem: Problem = {
  id: 'number-of-great-partitions',
  title: 'Number of Great Partitions',
  difficulty: 'hard',
  tags: ['arrays', 'dynamic-programming'],
  description: `You are given an array \`nums\` consisting of **positive** integers and a **positive** integer \`k\`.

Partition the array into two ordered groups such that each element is in exactly one group. A partition is called **great** if the **sum** of elements of each group is greater than or equal to \`k\`.

Return the number of **distinct great partitions**. Since the answer may be too large, return it **modulo** \`10^9 + 7\`.

Two partitions are considered distinct if one element is in a different group.`,
  constraints: [
    '1 <= nums.length, k <= 1000',
    '1 <= nums[i] <= 10^9',
  ],
  examples: [
    {
      input: 'nums = [1,2,3,4], k = 4',
      output: '6',
      explanation: 'The 6 great partitions are: [1,4]|[2,3], [2,3]|[1,4], [2,4]|[1,3], [1,3]|[2,4], [1,2,3]|[4], [4]|[1,2,3].',
    },
    {
      input: 'nums = [3,3,3], k = 4',
      output: '0',
      explanation: 'No partition can have both groups with sum >= 4 since total sum = 9 = [3,3,3], max single-group sum = 6 < ... wait total is 9 but we need both >= 4, so one group sum in [4,5]. Subset sums of {3,3,3} are 0,3,6,9. None in [4,5]. Output: 0.',
    },
  ],
  hints: [
    'Level 1: Total partitions = 2^n (each element in group 1 or 2). Subtract "bad" partitions where at least one group has sum < k.',
    'Level 2: By inclusion-exclusion and symmetry: "bad" = partitions where group1 sum < k. Count subsets with sum in [0, k-1] using 0/1 knapsack DP. Both group1 and group2 failures double-count empty subsets but are otherwise symmetric.',
    'Level 3: If total < 2k, return 0 immediately. Otherwise: dp[j] = # subsets with sum j (for j < k) via 0/1 knapsack. bad = Σdp[0..k-1]. Answer = (2^n - 2*bad) mod 10^9+7.',
  ],
  functionName: 'countPartitions',
  params: ['nums', 'k'],
  starterCode: {
    javascript: `function countPartitions(nums, k) {

}`,
    typescript: `function countPartitions(nums: number[], k: number): number {

}`,
    python: `def countPartitions(nums: list[int], k: int) -> int:
    pass`,
  },
  visibleTests: [
    { args: [[1,2,3,4], 4], expected: 6 },
    { args: [[3,3,3], 4], expected: 0 },
  ],
  hiddenTests: [
    { args: [[1], 1], expected: 0 },
    { args: [[1,1,1,1], 1], expected: 14 },
    { args: [[2,2], 2], expected: 2 },
    { args: [[10,5,3,2], 8], expected: 4 },
    { args: [[1,1,1], 1], expected: 6 },
    { args: [[5,5,5], 5], expected: 6 },
  ],
};
