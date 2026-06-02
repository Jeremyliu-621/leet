import type { Problem } from '../types';

export const problem: Problem = {
  id: 'longest-subarray-with-positive-product',
  title: 'Longest Subarray with Positive Product',
  difficulty: 'medium',
  tags: ['arrays', 'dynamic-programming'],
  description: `Given an array of integers \`nums\`, return the **length of the longest subarray** with a **positive product**.

A subarray of an array is a contiguous part of the array. The product of an empty subarray is 1 (positive), but we require the subarray to be **non-empty**.`,
  constraints: [
    '`1 <= nums.length <= 10^5`',
    '`-10^9 <= nums[i] <= 10^9`',
  ],
  examples: [
    {
      input: 'nums = [1,-2,-3,4]',
      output: '4',
      explanation: 'The whole array [1,-2,-3,4] has product 24 > 0.',
    },
    {
      input: 'nums = [0,1,-2,-3,-4]',
      output: '3',
      explanation: 'The subarray [1,-2,-3] has product 1*(-2)*(-3) = 6 > 0, length 3.',
    },
    {
      input: 'nums = [-1,-2,-3,0,1]',
      output: '2',
      explanation: 'The subarray [-1,-2] has product 2 > 0, length 2.',
    },
  ],
  hints: [
    'A zero resets everything — no subarray spanning a zero can have a positive product.',
    'Track two DP values: `pos` = length of the longest subarray ending at the current index with a positive product, and `neg` = length of the longest subarray ending here with a negative product.',
    '```js\nfunction getMaxLen(nums) {\n  let pos = 0, neg = 0, ans = 0;\n  for (const x of nums) {\n    if (x > 0) {\n      [pos, neg] = [pos + 1, neg > 0 ? neg + 1 : 0];\n    } else if (x < 0) {\n      [pos, neg] = [neg > 0 ? neg + 1 : 0, pos + 1];\n    } else {\n      pos = 0; neg = 0;\n    }\n    ans = Math.max(ans, pos);\n  }\n  return ans;\n}\n```',
  ],
  functionName: 'getMaxLen',
  params: ['nums'],
  starterCode: {
    javascript: `function getMaxLen(nums) {
  let pos = 0, neg = 0, ans = 0;
  for (const x of nums) {
    if (x > 0) { [pos, neg] = [pos + 1, neg > 0 ? neg + 1 : 0]; }
    else if (x < 0) { [pos, neg] = [neg > 0 ? neg + 1 : 0, pos + 1]; }
    else { pos = 0; neg = 0; }
    ans = Math.max(ans, pos);
  }
  return ans;
}`,
    typescript: `function getMaxLen(nums: number[]): number {
  let pos = 0, neg = 0, ans = 0;
  for (const x of nums) {
    if (x > 0) { [pos, neg] = [pos + 1, neg > 0 ? neg + 1 : 0]; }
    else if (x < 0) { [pos, neg] = [neg > 0 ? neg + 1 : 0, pos + 1]; }
    else { pos = 0; neg = 0; }
    ans = Math.max(ans, pos);
  }
  return ans;
}`,
    python: `def getMaxLen(nums):
    pos = neg = ans = 0
    for x in nums:
        if x > 0: pos, neg = pos + 1, (neg + 1 if neg > 0 else 0)
        elif x < 0: pos, neg = (neg + 1 if neg > 0 else 0), pos + 1
        else: pos = neg = 0
        ans = max(ans, pos)
    return ans`,
  },
  visibleTests: [
    { args: [[1, -2, -3, 4]], expected: 4 },
    { args: [[0, 1, -2, -3, -4]], expected: 3 },
    { args: [[-1, -2, -3, 0, 1]], expected: 2 },
  ],
  hiddenTests: [
    // [1,2,3,4]: all positive, ans=4
    { args: [[1, 2, 3, 4]], expected: 4 },
    // [-1,-2,-3,-4]: [−1,−2,−3,−4] = 24 > 0, ans=4
    { args: [[-1, -2, -3, -4]], expected: 4 },
    // [0,0,1]: longest pos subarray after last zero is [1], ans=1
    { args: [[0, 0, 1]], expected: 1 },
    // [1,2,-1,3]: longest pos subarray: [1,2] len 2. ans=2
    { args: [[1, 2, -1, 3]], expected: 2 },
    // [-4,-3,-2,-1,1,2,3,4]: even count of negatives, whole array product positive. ans=8
    { args: [[-4, -3, -2, -1, 1, 2, 3, 4]], expected: 8 },
    // [1,2,3,0,-1,-2]: [1,2,3] len 3 before the zero. ans=3
    { args: [[1, 2, 3, 0, -1, -2]], expected: 3 },
    // [-1]: no positive product possible. ans=0
    { args: [[-1]], expected: 0 },
    // [1]: single positive. ans=1
    { args: [[1]], expected: 1 },
  ],
};
