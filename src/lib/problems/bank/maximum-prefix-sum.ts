import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximum-prefix-sum',
  title: 'Maximum Prefix Sum',
  difficulty: 'easy',
  tags: ['arrays'],
  description: `Given an integer array \`nums\`, return the **maximum** value among all prefix sums. The prefix sum at index \`i\` is \`nums[0] + nums[1] + ... + nums[i]\`. If all prefix sums are negative, return \`0\` (an empty prefix has sum 0).`,
  constraints: [
    '1 <= nums.length <= 10^4',
    '-10^4 <= nums[i] <= 10^4',
  ],
  examples: [
    {
      input: 'nums = [1,-2,3,4,-1]',
      output: '6',
      explanation: 'Prefix sums: 1, -1, 2, 6, 5. The maximum is 6.',
    },
    {
      input: 'nums = [-3,-5,-1]',
      output: '0',
      explanation: 'Prefix sums: -3, -8, -9. All are negative, so the maximum over the empty prefix (0) wins.',
    },
    {
      input: 'nums = [5,3,2]',
      output: '10',
      explanation: 'Prefix sums: 5, 8, 10. The maximum is 10.',
    },
  ],
  hints: [
    'Scan left to right, maintaining a running sum. Track the maximum running sum seen so far.',
    'After the scan, compare the maximum running sum against 0 — the empty prefix has sum 0, so the answer is never below 0.',
    'A single pass with two variables (`runningSum` and `maxSum`, initialised to 0) is sufficient.',
  ],
  functionName: 'maximumPrefixSum',
  params: ['nums'],
  starterCode: {
    javascript: `function maximumPrefixSum(nums) {
  let sum = 0, best = 0;
  for (const n of nums) {
    sum += n;
    if (sum > best) best = sum;
  }
  return best;
}`,
    typescript: `function maximumPrefixSum(nums: number[]): number {
  let sum = 0, best = 0;
  for (const n of nums) {
    sum += n;
    if (sum > best) best = sum;
  }
  return best;
}`,
    python: `def maximumPrefixSum(nums):
    if hasattr(nums, 'to_py'): nums = list(nums.to_py())
    s = best = 0
    for n in nums:
        s += n
        if s > best: best = s
    return best`,
  },
  visibleTests: [
    { args: [[1, -2, 3, 4, -1]], expected: 6 },
    { args: [[-3, -5, -1]], expected: 0 },
    { args: [[5, 3, 2]], expected: 10 },
  ],
  hiddenTests: [
    { args: [[1]], expected: 1 },
    { args: [[-1]], expected: 0 },
    { args: [[3, -1, 2]], expected: 4 },
    { args: [[10, -10, 10]], expected: 10 },
    { args: [[-5, 10, -3]], expected: 5 },
    { args: [[1, 2, 3, 4, 5]], expected: 15 },
    { args: [[5, 5, -20, 5]], expected: 10 },
    { args: [[0, 0, 0]], expected: 0 },
  ],
};
