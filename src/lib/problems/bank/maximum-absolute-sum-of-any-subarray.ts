import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximum-absolute-sum-of-any-subarray',
  title: 'Maximum Absolute Sum of Any Subarray',
  difficulty: 'medium',
  tags: ['arrays'],
  description: `You are given an integer array \`nums\`. The **absolute sum** of a subarray \`[nums_l, nums_{l+1}, ..., nums_r]\` is \`abs(nums_l + nums_{l+1} + ... + nums_r)\`.

Return the **maximum** absolute sum of any **(possibly empty)** subarray of \`nums\`.

Note that \`abs(x)\` is defined as follows:
- If \`x\` is a negative integer, then \`abs(x) = -x\`.
- If \`x\` is a non-negative integer, then \`abs(x) = x\`.`,
  constraints: [
    '1 <= nums.length <= 10^5',
    '-10^4 <= nums[i] <= 10^4',
  ],
  examples: [
    {
      input: 'nums = [1,-3,2,3,-4]',
      output: '5',
      explanation: 'Subarray [2,3] has absolute sum |2+3| = 5.',
    },
    {
      input: 'nums = [2,-5,1,-4,3,-2]',
      output: '8',
      explanation: 'Subarray [-5,1,-4] has absolute sum |-5+1-4| = 8.',
    },
  ],
  hints: [
    'The maximum absolute sum is max(maxSubarraySum, |minSubarraySum|). Use Kadane\'s algorithm twice.',
    'Run Kadane\'s for maximum subarray sum. Run Kadane\'s (negated) for minimum subarray sum. Return Math.max(maxSum, Math.abs(minSum)).',
    'Alternatively, track prefix sums: answer = max prefix sum − min prefix sum (or vice versa). The key insight: abs(sum(l..r)) = |prefixSum[r] - prefixSum[l-1]|.',
  ],
  functionName: 'maxAbsoluteSum',
  params: ['nums'],
  starterCode: {
    javascript: `function maxAbsoluteSum(nums) {
  let maxSum = 0, minSum = 0, maxCur = 0, minCur = 0;
  for (const x of nums) {
    maxCur = Math.max(0, maxCur + x);
    minCur = Math.min(0, minCur + x);
    maxSum = Math.max(maxSum, maxCur);
    minSum = Math.min(minSum, minCur);
  }
  return Math.max(maxSum, -minSum);
}`,
    typescript: `function maxAbsoluteSum(nums: number[]): number {
  let maxSum = 0, minSum = 0, maxCur = 0, minCur = 0;
  for (const x of nums) {
    maxCur = Math.max(0, maxCur + x);
    minCur = Math.min(0, minCur + x);
    maxSum = Math.max(maxSum, maxCur);
    minSum = Math.min(minSum, minCur);
  }
  return Math.max(maxSum, -minSum);
}`,
    python: `def maxAbsoluteSum(nums):
    max_sum = min_sum = max_cur = min_cur = 0
    for x in nums:
        max_cur = max(0, max_cur + x)
        min_cur = min(0, min_cur + x)
        max_sum = max(max_sum, max_cur)
        min_sum = min(min_sum, min_cur)
    return max(max_sum, -min_sum)`,
  },
  visibleTests: [
    { args: [[1, -3, 2, 3, -4]], expected: 5 },
    { args: [[2, -5, 1, -4, 3, -2]], expected: 8 },
  ],
  hiddenTests: [
    { args: [[1, -1, 1, -1]], expected: 1 },
    { args: [[-3, -5, -2]], expected: 10 },
    { args: [[5, 4, 3]], expected: 12 },
    { args: [[0]], expected: 0 },
  ],
};
