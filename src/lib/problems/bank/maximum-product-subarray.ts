import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximum-product-subarray',
  title: 'Maximum Product Subarray',
  difficulty: 'medium',
  tags: ['arrays', 'dynamic-programming'],
  description: `Given an integer array \`nums\`, find a subarray that has the largest product, and return the product.

The test cases are generated so that the answer will fit in a **32-bit** integer.`,
  constraints: [
    '1 <= nums.length <= 2 * 10^4',
    '-10 <= nums[i] <= 10',
    'The product of any subarray of nums is guaranteed to fit in a 32-bit integer.',
  ],
  examples: [
    {
      input: 'nums = [2,3,-2,4]',
      output: '6',
      explanation: '[2,3] has the largest product 6.',
    },
    {
      input: 'nums = [-2,0,-1]',
      output: '0',
      explanation: 'The result cannot be 2 because [-2,-1] is not a subarray.',
    },
    {
      input: 'nums = [-2,3,-4]',
      output: '24',
      explanation: 'The entire array [-2,3,-4] has product 24.',
    },
  ],
  hints: [
    'Level 1: Unlike maximum sum subarray, a negative product can become the maximum if multiplied by another negative. Track both curMax and curMin at each step.',
    'Level 2: At each position i: newMax = max(nums[i], curMax*nums[i], curMin*nums[i]); newMin = min(nums[i], curMax*nums[i], curMin*nums[i]). Update ans = max(ans, newMax).',
    'Level 3: When nums[i] is negative, the roles of curMax and curMin flip. Tracking both handles this automatically. Initialize curMax = curMin = ans = nums[0].',
  ],
  functionName: 'maxProduct',
  params: ['nums'],
  starterCode: {
    javascript: `function maxProduct(nums) {
  let curMax = nums[0], curMin = nums[0], ans = nums[0];
  for (let i = 1; i < nums.length; i++) {
    const n = nums[i];
    const tmp = curMax;
    curMax = Math.max(n, curMax * n, curMin * n);
    curMin = Math.min(n, tmp * n, curMin * n);
    if (curMax > ans) ans = curMax;
  }
  return ans;
}`,
    typescript: `function maxProduct(nums: number[]): number {
  let curMax = nums[0]!, curMin = nums[0]!, ans = nums[0]!;
  for (let i = 1; i < nums.length; i++) {
    const n = nums[i]!;
    const tmp = curMax;
    curMax = Math.max(n, curMax * n, curMin * n);
    curMin = Math.min(n, tmp * n, curMin * n);
    if (curMax > ans) ans = curMax;
  }
  return ans;
}`,
    python: `def maxProduct(nums):
    if hasattr(nums, 'to_py'): nums = list(nums.to_py())
    cur_max = cur_min = ans = nums[0]
    for n in nums[1:]:
        tmp = cur_max
        cur_max = max(n, cur_max * n, cur_min * n)
        cur_min = min(n, tmp * n, cur_min * n)
        if cur_max > ans: ans = cur_max
    return ans`,
  },
  visibleTests: [
    { args: [[2, 3, -2, 4]], expected: 6 },
    { args: [[-2, 0, -1]], expected: 0 },
    { args: [[-2, 3, -4]], expected: 24 },
  ],
  hiddenTests: [
    { args: [[0]], expected: 0 },
    { args: [[-2]], expected: -2 },
    { args: [[2, -1, 1, 1]], expected: 2 },
    { args: [[-3, -1, -1]], expected: 3 },
    { args: [[1, -2, -3, 4]], expected: 24 },
    { args: [[0, 2]], expected: 2 },
    { args: [[-1, -2, -3, -4]], expected: 24 },
    { args: [[2, 3, -2, 4, -1]], expected: 48 },
  ],
};
