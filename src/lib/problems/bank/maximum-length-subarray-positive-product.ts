import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximum-length-subarray-positive-product',
  title: 'Maximum Length of Subarray With Positive Product',
  difficulty: 'medium',
  tags: ['arrays', 'two-pointers', 'dynamic-programming'],
  description: `Given an array of integers \`nums\`, find the maximum length of a subarray where the product of all its elements is positive.

A subarray of an array is a consecutive sequence of zero or more values taken from the array.

Return the maximum length of a subarray with positive product.`,
  constraints: [
    '`1 <= nums.length <= 10^5`',
    '`-10^9 <= nums[i] <= 10^9`',
  ],
  examples: [
    {
      input: 'nums = [1,-2,-3,4]',
      output: '4',
      explanation: 'The entire array has product 24 > 0, length 4.',
    },
    {
      input: 'nums = [0,1,-2,-3,-4]',
      output: '3',
      explanation: 'The subarray [1,-2,-3] has product 6 > 0 and length 3.',
    },
    {
      input: 'nums = [-1,-2,-3,0,1]',
      output: '2',
      explanation: '[-1,-2] has product 2 > 0, length 2.',
    },
  ],
  hints: [
    'Split by zeros. For each segment with no zeros, compute the answer.',
    'In a zero-free segment of length L: if there are no negative numbers, the whole segment works (L). If there is an even count of negatives, the whole segment works (L). If odd count, you skip either from the first negative onward or up to the last negative.',
    'Track pos (length of longest current subarray with positive product) and neg (length of longest current subarray with negative product).',
  ],
  functionName: 'getMaxLen',
  params: ['nums'],
  starterCode: {
    javascript: `function getMaxLen(nums) {
  let pos = 0, neg = 0, ans = 0;
  for (const n of nums) {
    if (n > 0) {
      pos++;
      neg = neg > 0 ? neg + 1 : 0;
    } else if (n < 0) {
      const newPos = neg > 0 ? neg + 1 : 0;
      neg = pos + 1;
      pos = newPos;
    } else {
      pos = 0; neg = 0;
    }
    ans = Math.max(ans, pos);
  }
  return ans;
}`,
    typescript: `function getMaxLen(nums: number[]): number {
  let pos = 0, neg = 0, ans = 0;
  for (const n of nums) {
    if (n > 0) {
      pos++;
      neg = neg > 0 ? neg + 1 : 0;
    } else if (n < 0) {
      const newPos = neg > 0 ? neg + 1 : 0;
      neg = pos + 1;
      pos = newPos;
    } else {
      pos = 0; neg = 0;
    }
    ans = Math.max(ans, pos);
  }
  return ans;
}`,
    python: `def getMaxLen(nums):
    if hasattr(nums, 'to_py'): nums = list(nums.to_py())
    pos, neg, ans = 0, 0, 0
    for n in nums:
        if n > 0:
            pos += 1
            neg = neg + 1 if neg > 0 else 0
        elif n < 0:
            new_pos = neg + 1 if neg > 0 else 0
            neg = pos + 1
            pos = new_pos
        else:
            pos = neg = 0
        ans = max(ans, pos)
    return ans`,
  },
  visibleTests: [
    { args: [[1, -2, -3, 4]], expected: 4 },
    { args: [[0, 1, -2, -3, -4]], expected: 3 },
    { args: [[-1, -2, -3, 0, 1]], expected: 2 },
  ],
  hiddenTests: [
    { args: [[1, 2, 3, 5, -6, 4, 0, 10]], expected: 4 },
    { args: [[-1, -2, -3, -4]], expected: 4 },
    { args: [[0, 0, 0]], expected: 0 },
    { args: [[-1]], expected: 0 },
    { args: [[1]], expected: 1 },
  ],
};
