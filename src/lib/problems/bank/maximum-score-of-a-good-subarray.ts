import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximum-score-of-a-good-subarray',
  title: 'Maximum Score of a Good Subarray',
  difficulty: 'hard',
  tags: ['arrays', 'two-pointers', 'binary-search'],
  description: `You are given an integer array \`nums\` (0-indexed) and an integer \`k\`.

The **score** of a subarray \`(i, j)\` is defined as \`min(nums[i], nums[i+1], ..., nums[j]) * (j - i + 1)\`.

A **good subarray** is a subarray where \`i <= k <= j\`.

Return the **maximum possible score** of a good subarray.`,
  constraints: [
    '`1 <= nums.length <= 10^5`',
    '`1 <= nums[i] <= 2 * 10^4`',
    '`0 <= k < nums.length`',
  ],
  examples: [
    {
      input: 'nums = [1,4,3,7,4,5], k = 3',
      output: '15',
      explanation: 'The optimal subarray is indices [1,5] = [4,3,7,4,5], min = 3, length = 5, score = 15.',
    },
    {
      input: 'nums = [5,5,4,5,4,1,1,1], k = 0',
      output: '20',
      explanation: 'Take subarray [0,4] = [5,5,4,5,4], min = 4, length = 5, score = 20.',
    },
  ],
  functionName: 'maximumScore',
  params: ['nums', 'k'],
  starterCode: {
    javascript: `/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
function maximumScore(nums, k) {

}`,
    python: `def maximumScore(nums: list[int], k: int) -> int:
    pass`,
  },
  hints: [
    'The answer subarray must include index k. Start with l = r = k and expand outward.',
    'Greedily expand in the direction that keeps the minimum higher: if nums[l-1] >= nums[r+1], expand left; otherwise expand right. Track the running minimum and update the score after each step.',
    'Two-pointer O(n) solution:\n```javascript\nlet l = k, r = k, min = nums[k], score = nums[k];\nwhile (l > 0 || r < n - 1) {\n  if (l === 0) r++;\n  else if (r === n - 1) l--;\n  else if (nums[l-1] >= nums[r+1]) l--;\n  else r++;\n  min = Math.min(min, nums[l], nums[r]);\n  score = Math.max(score, min * (r - l + 1));\n}\n```',
  ],
  visibleTests: [
    { args: [[1, 4, 3, 7, 4, 5], 3], expected: 15 },
    { args: [[5, 5, 4, 5, 4, 1, 1, 1], 0], expected: 20 },
    { args: [[1], 0], expected: 1 },
  ],
  hiddenTests: [
    { args: [[8, 7, 6], 1], expected: 18 },
    { args: [[4, 4, 4, 4], 2], expected: 16 },
    { args: [[1, 2, 3, 4, 5], 2], expected: 9 },
    { args: [[1, 1, 1, 1, 1], 2], expected: 5 },
    { args: [[2, 1, 3], 1], expected: 3 },
    { args: [[10, 9, 8, 7], 0], expected: 28 },
  ],
};
