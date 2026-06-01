import type { Problem } from '../types';

export const problem: Problem = {
  id: 'sum-of-absolute-differences-in-sorted-array',
  title: 'Sum of Absolute Differences in a Sorted Array',
  difficulty: 'medium',
  tags: ['arrays', 'math'],
  description: `You are given an integer array \`nums\` sorted in **non-decreasing** order.

Build and return an integer array \`result\` with the same length as \`nums\` such that \`result[i]\` is equal to the **summation of absolute differences** between \`nums[i]\` and all the other elements in the array.

In other words, \`result[i] = |nums[i]-nums[0]| + |nums[i]-nums[1]| + ... + |nums[i]-nums[nums.length-1]|\`.`,
  constraints: [
    '2 <= nums.length <= 10^5',
    '1 <= nums[i] <= 10^4',
    'nums is sorted in non-decreasing order.',
  ],
  examples: [
    {
      input: 'nums = [2,3,5]',
      output: '[4,3,5]',
      explanation: 'result[0]=|2-2|+|2-3|+|2-5|=0+1+3=4. result[1]=|3-2|+|3-3|+|3-5|=1+0+2=3. result[2]=|5-2|+|5-3|+|5-5|=3+2+0=5.',
    },
    {
      input: 'nums = [1,4,6,8,10]',
      output: '[24,15,13,15,21]',
      explanation: 'Using prefix sums: result[i] = i*nums[i] - prefix[i] + (totalSum - prefix[i+1]) - (n-1-i)*nums[i].',
    },
  ],
  hints: [
    'Level 1: For each index i, the sum of absolute differences = sum of (nums[i]-nums[j]) for j<=i plus sum of (nums[j]-nums[i]) for j>i.',
    'Level 2: Since the array is sorted, left contribution = i*nums[i] - prefix[i], right contribution = (suffix[i+1]) - (n-1-i)*nums[i].',
    'Level 3: Precompute prefix sums. Total complexity O(n).',
  ],
  functionName: 'getSumAbsoluteDifferences',
  params: ['nums'],
  starterCode: {
    javascript: `function getSumAbsoluteDifferences(nums) {
  const n = nums.length;
  const prefix = new Array(n + 1).fill(0);
  for (let i = 0; i < n; i++) prefix[i + 1] = prefix[i] + nums[i];
  return nums.map((v, i) => {
    const left = i * v - prefix[i];
    const right = (prefix[n] - prefix[i + 1]) - (n - 1 - i) * v;
    return left + right;
  });
}`,
    typescript: `function getSumAbsoluteDifferences(nums: number[]): number[] {
  const n = nums.length;
  const prefix = new Array(n + 1).fill(0);
  for (let i = 0; i < n; i++) prefix[i + 1] = prefix[i] + nums[i]!;
  return nums.map((v, i) => {
    const left = i * v - prefix[i]!;
    const right = (prefix[n]! - prefix[i + 1]!) - (n - 1 - i) * v;
    return left + right;
  });
}`,
    python: `def getSumAbsoluteDifferences(nums):
    n = len(nums)
    prefix = [0] * (n + 1)
    for i in range(n):
        prefix[i + 1] = prefix[i] + nums[i]
    result = []
    for i, v in enumerate(nums):
        left = i * v - prefix[i]
        right = (prefix[n] - prefix[i + 1]) - (n - 1 - i) * v
        result.append(left + right)
    return result`,
  },
  visibleTests: [
    { args: [[2, 3, 5]], expected: [4, 3, 5] },
    { args: [[1, 4, 6, 8, 10]], expected: [24, 15, 13, 15, 21] },
  ],
  hiddenTests: [
    { args: [[1, 1]], expected: [0, 0] },
    { args: [[1, 2, 3, 4, 5]], expected: [10, 7, 6, 7, 10] },
    { args: [[1, 3, 6, 10]], expected: [16, 12, 12, 20] },
    { args: [[5, 5, 5]], expected: [0, 0, 0] },
    { args: [[1, 100]], expected: [99, 99] },
  ],
};
