import type { Problem } from '../types';

export const problem: Problem = {
  id: 'sum-of-absolute-differences-in-a-sorted-array',
  title: 'Sum of Absolute Differences in a Sorted Array',
  difficulty: 'medium',
  tags: ['arrays', 'math'],
  description: `You are given an integer array \`nums\` **sorted** in **non-decreasing** order.

Build and return *an integer array* \`result\` *with the same length as* \`nums\` *such that* \`result[i]\` *is equal to the* **summation of absolute differences** *between* \`nums[i]\` *and all the other elements in the array.*

In other words, \`result[i] = |nums[i] - nums[0]| + |nums[i] - nums[1]| + ... + |nums[i] - nums[n-1]|\` where \`n\` is the length of \`nums\`.`,
  constraints: [
    '`2 <= nums.length <= 10^5`',
    '`1 <= nums[i] <= nums[i + 1] <= 10^4`',
  ],
  examples: [
    {
      input: 'nums = [2,3,5]',
      output: '[4,3,5]',
      explanation:
        'result[0] = |2-2|+|2-3|+|2-5| = 0+1+3 = 4. result[1] = |3-2|+|3-3|+|3-5| = 1+0+2 = 3. result[2] = |5-2|+|5-3|+|5-5| = 3+2+0 = 5.',
    },
    {
      input: 'nums = [1,4,6,8,10]',
      output: '[24,15,13,15,21]',
      explanation:
        'result[0] = 0+3+5+7+9 = 24. result[1] = 3+0+2+4+6 = 15. result[2] = 5+2+0+2+4 = 13. result[3] = 7+4+2+0+2 = 15. result[4] = 9+6+4+2+0 = 21.',
    },
  ],
  hints: [
    'For index i in a sorted array, all elements to the left are ≤ nums[i] and all to the right are ≥ nums[i].',
    'Use a prefix sum array. The contribution from the left side is `i * nums[i] - prefix[i-1]`, and from the right side is `(prefix[n-1] - prefix[i]) - (n-1-i) * nums[i]`.',
    `\`\`\`js
function getSumAbsoluteDifferences(nums) {
  const n = nums.length;
  const prefix = new Array(n).fill(0);
  prefix[0] = nums[0];
  for (let i = 1; i < n; i++) prefix[i] = prefix[i - 1] + nums[i];
  const result = new Array(n);
  for (let i = 0; i < n; i++) {
    const leftSum = i * nums[i] - (i > 0 ? prefix[i - 1] : 0);
    const rightSum = (prefix[n - 1] - prefix[i]) - (n - 1 - i) * nums[i];
    result[i] = leftSum + rightSum;
  }
  return result;
}
\`\`\``,
  ],
  functionName: 'getSumAbsoluteDifferences',
  params: ['nums'],
  starterCode: {
    javascript: `function getSumAbsoluteDifferences(nums) {

}`,
    typescript: `function getSumAbsoluteDifferences(nums: number[]): number[] {

}`,
    python: `def getSumAbsoluteDifferences(nums):
    pass`,
  },
  visibleTests: [
    { args: [[2, 3, 5]], expected: [4, 3, 5] },
    { args: [[1, 4, 6, 8, 10]], expected: [24, 15, 13, 15, 21] },
  ],
  hiddenTests: [
    { args: [[1, 1]], expected: [0, 0] },
    { args: [[1, 2]], expected: [1, 1] },
    { args: [[1, 1, 1]], expected: [0, 0, 0] },
    { args: [[1, 2, 3, 4, 5]], expected: [10, 7, 6, 7, 10] },
    { args: [[1, 3, 3, 5]], expected: [8, 4, 4, 8] },
    { args: [[3, 3, 3]], expected: [0, 0, 0] },
    { args: [[1, 10000]], expected: [9999, 9999] },
    { args: [[1, 2, 4, 8]], expected: [11, 9, 9, 17] },
  ],
};
