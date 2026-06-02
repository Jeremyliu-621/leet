import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-number-of-good-partitions',
  title: 'Count Number of Good Partitions',
  difficulty: 'hard',
  tags: ['arrays', 'hash-map'],
  description: `You are given a **0-indexed** array \`nums\` of positive integers. A partition of an array into one or more contiguous subarrays is called **good** if no two subarrays contain the same number.

Return the **total number of good partitions** of \`nums\`. Since the answer may be large, return it **modulo** \`10^9 + 7\`.`,
  constraints: [
    '`1 <= nums.length <= 10^5`',
    '`1 <= nums[i] <= 10^9`',
  ],
  examples: [
    {
      input: 'nums = [1,2,3,4]',
      output: '8',
      explanation: 'All 4 elements are distinct so every of the 2^3 = 8 split combinations is valid.',
    },
    {
      input: 'nums = [1,1,1,1]',
      output: '1',
      explanation: 'All occurrences of 1 must stay together, so only one partition is valid.',
    },
    {
      input: 'nums = [1,2,1,3]',
      output: '2',
      explanation: 'Positions 0 and 2 both have value 1, forcing them into the same part. Two valid splits.',
    },
  ],
  hints: [
    'Precompute the last occurrence index of each value.',
    'Sweep left-to-right tracking `maxEnd` = the farthest last-occurrence index seen so far.',
    'When the current index equals `maxEnd`, a valid partition boundary exists — multiply the answer by 2.',
    `\`\`\`js
function numberOfGoodPartitions(nums) {
  const MOD = 1000000007n;
  const last = new Map();
  for (let i = 0; i < nums.length; i++) last.set(nums[i], i);
  let result = 1n, maxEnd = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    maxEnd = Math.max(maxEnd, last.get(nums[i]));
    if (i === maxEnd) result = result * 2n % MOD;
  }
  return Number(result);
}\`\`\``,
  ],
  functionName: 'numberOfGoodPartitions',
  params: ['nums'],
  starterCode: {
    javascript: `function numberOfGoodPartitions(nums) {
  const MOD = 1_000_000_007n;
  // Precompute last occurrence index of each value
  const last = new Map();
  for (let i = 0; i < nums.length; i++) last.set(nums[i], i);
  // Sweep: track the farthest last-occurrence seen so far (maxEnd)
  // When current index equals maxEnd, a valid cut point exists -> multiply by 2
  let result = 1n, maxEnd = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    maxEnd = Math.max(maxEnd, last.get(nums[i]));
    // TODO: if i === maxEnd, result = result * 2n % MOD
  }
  return Number(result);
}`,
    typescript: `function numberOfGoodPartitions(nums: number[]): number {
  const MOD = 1_000_000_007n;
  // Precompute last occurrence index of each value
  const last = new Map<number, number>();
  for (let i = 0; i < nums.length; i++) last.set(nums[i], i);
  // Sweep: track the farthest last-occurrence seen so far (maxEnd)
  // When current index equals maxEnd, a valid cut point exists -> multiply by 2
  let result = 1n, maxEnd = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    maxEnd = Math.max(maxEnd, last.get(nums[i])!);
    // TODO: if i === maxEnd, result = result * 2n % MOD
  }
  return Number(result);
}`,
    python: `def numberOfGoodPartitions(nums: list[int]) -> int:
    MOD = 10**9 + 7
    # Precompute last occurrence index of each value
    last = {v: i for i, v in enumerate(nums)}
    # Sweep: track the farthest last-occurrence seen so far (max_end)
    # When current index equals max_end, a valid cut point -> multiply by 2
    result = 1
    max_end = 0
    for i in range(len(nums) - 1):
        max_end = max(max_end, last[nums[i]])
        # TODO: if i == max_end, result = result * 2 % MOD
    return result`,
  },
  visibleTests: [
    { args: [[1, 2, 3, 4]], expected: 8 },
    { args: [[1, 1, 1, 1]], expected: 1 },
    { args: [[1, 2, 1, 3]], expected: 2 },
  ],
  hiddenTests: [
    { args: [[2, 3, 3, 2, 3]], expected: 1 },
    { args: [[3]], expected: 1 },
    { args: [[1, 2, 1, 2, 1, 2]], expected: 1 },
    { args: [[1, 2, 3]], expected: 4 },
    { args: [[5, 1, 2, 1, 5]], expected: 1 },
    { args: [[1, 2, 3, 1, 2, 3]], expected: 1 },
  ],
};
