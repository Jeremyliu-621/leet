import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximum-value-of-an-ordered-triplet-ii',
  title: 'Maximum Value of an Ordered Triplet II',
  difficulty: 'medium',
  tags: ['arrays'],
  description: `You are given a **0-indexed** integer array \`nums\`.

Return the **maximum** value over all triplets of indices \`(i, j, k)\` such that \`i < j < k\`. If all such triplets have a negative value, return \`0\`.

The **value** of a triplet of indices \`(i, j, k)\` is equal to \`(nums[i] - nums[j]) * nums[k]\`.

**Note:** This version requires an efficient O(n) solution (arrays up to 10^5).`,
  constraints: [
    '`3 <= nums.length <= 10^5`',
    '`1 <= nums[i] <= 10^6`',
  ],
  examples: [
    {
      input: 'nums = [12,6,1,2,7]',
      output: '77',
      explanation: 'Best triplet: (i=0, j=2, k=4) → (12 − 1) × 7 = 77.',
    },
    {
      input: 'nums = [1,10,3,4,19]',
      output: '133',
      explanation: 'Best triplet: (i=1, j=2, k=4) → (10 − 3) × 19 = 133.',
    },
    {
      input: 'nums = [1,2,3]',
      output: '0',
      explanation: 'Only triplet (0,1,2) → (1−2)×3 = −3 < 0, so return 0.',
    },
  ],
  functionName: 'maximumTripletValue',
  params: ['nums'],
  starterCode: {
    javascript: `/**
 * @param {number[]} nums
 * @return {number}
 */
function maximumTripletValue(nums) {

}`,
    python: `def maximumTripletValue(nums: list[int]) -> int:
    pass`,
  },
  hints: [
    'For each j, you want the largest (nums[i] − nums[j]) for i < j, times the largest nums[k] for k > j. Can you track these incrementally in a single left-to-right pass?',
    'Maintain: `maxI` = max element seen so far (candidate for nums[i]), `maxDiff` = max of (maxI − nums[j]) for all past j. At each new position, use it as k to update the answer, then as j to update maxDiff, then as i to update maxI.',
    'One-pass O(n) solution:\n```javascript\nlet maxI = -Infinity, maxDiff = -Infinity, ans = 0;\nfor (const x of nums) {\n  ans = Math.max(ans, maxDiff * x);       // x as k\n  maxDiff = Math.max(maxDiff, maxI - x);  // x as j\n  maxI = Math.max(maxI, x);               // x as i\n}\nreturn ans;\n```',
  ],
  visibleTests: [
    { args: [[12, 6, 1, 2, 7]], expected: 77 },
    { args: [[1, 10, 3, 4, 19]], expected: 133 },
    { args: [[1, 2, 3]], expected: 0 },
  ],
  hiddenTests: [
    { args: [[5, 4, 3, 2, 1]], expected: 4 },
    { args: [[1000, 1, 1000, 1, 1000]], expected: 999000 },
    { args: [[3, 3, 3]], expected: 0 },
    { args: [[1, 1, 1, 1]], expected: 0 },
    { args: [[5, 1, 5, 5]], expected: 20 },
    { args: [[10, 5, 1, 8]], expected: 72 },
  ],
};
