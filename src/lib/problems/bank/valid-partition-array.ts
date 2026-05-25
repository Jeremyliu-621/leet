import type { Problem } from '../types';

export const problem: Problem = {
  id: 'valid-partition-array',
  title: 'Check if There is a Valid Partition For The Array',
  difficulty: 'medium',
  tags: ['dynamic-programming', 'arrays'],
  description: `You are given a **0-indexed** integer array \`nums\`. You have to partition the array into one or more **contiguous** subarrays.

We call a partition of the array **valid** if each of the obtained subarrays satisfies **one** of the following conditions:

1. The subarray consists of **exactly 2** equal elements. For example, the subarray \`[2,2]\` is good.
2. The subarray consists of **exactly 3** equal elements. For example, the subarray \`[4,4,4]\` is good.
3. The subarray consists of **exactly 3** consecutive increasing elements, that is, the difference between adjacent elements is 1. For example, the subarray \`[3,4,5]\` is good, but the subarray \`[1,3,5]\` is not.

Return \`true\` if the array has **at least one valid partition**, and \`false\` otherwise.`,
  constraints: ['2 <= nums.length <= 10^5', '1 <= nums[i] <= 10^6'],
  examples: [
    { input: 'nums = [4,4,4,5,6]', output: 'true', explanation: '[4,4] + [4,5,6] is a valid partition.' },
    { input: 'nums = [1,1,1,2]', output: 'false', explanation: 'No valid partition exists.' },
  ],
  hints: [
    'Use DP. Let dp[i] = true if nums[0..i-1] can be validly partitioned.',
    'dp[0] = true. For each position i ≥ 2, check if the last 2 or 3 elements form a valid group.',
    'dp[i] = (dp[i-2] && nums[i-2]==nums[i-1]) || (dp[i-3] && (all 3 equal or 3 consecutive)).',
  ],
  functionName: 'validPartition',
  params: ['nums'],
  starterCode: {
    javascript: 'function validPartition(nums) {\n\n}\n',
    python: 'def validPartition(nums):\n    pass\n',
  },
  visibleTests: [
    { args: [[4, 4, 4, 5, 6]], expected: true },
    { args: [[1, 1, 1, 2]], expected: false },
  ],
  hiddenTests: [
    { args: [[1, 2, 3, 4]], expected: false },
    { args: [[2, 2, 2, 3, 3, 3]], expected: true },
    { args: [[1, 1, 2, 2]], expected: true },
    { args: [[1, 1, 2, 3]], expected: false },
  ],
};
