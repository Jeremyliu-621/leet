import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-the-power-of-k-size-subarrays-ii',
  title: 'Find the Power of K-Size Subarrays II',
  difficulty: 'medium',
  tags: ['arrays', 'sliding-window'],
  description: `You are given an array of integers \`nums\` of length \`n\` and a **positive** integer \`k\`.

The **power** of an array is defined as:

- Its **maximum** element if all of its elements are **consecutive** and **sorted** in **ascending** order.
- **-1** otherwise.

Return an integer array \`results\` of size \`n - k + 1\`, where \`results[i]\` is the *power* of \`nums[i..(i + k - 1)]\`.

**Note:** This is the same problem as **Find the Power of K-Size Subarrays I** but with a larger constraint — solve it in O(n) with a sliding approach.`,
  constraints: [
    '`1 <= n == nums.length <= 10^5`',
    '`1 <= nums[i] <= 10^6`',
    '`1 <= k <= n`',
  ],
  examples: [
    {
      input: 'nums = [1,2,3,4,3,2,5], k = 3',
      output: '[3,4,-1,-1,-1]',
    },
    {
      input: 'nums = [2,2,2,2,2], k = 4',
      output: '[-1,-1]',
    },
    {
      input: 'nums = [3,2,3,2,3,2], k = 2',
      output: '[-1,3,-1,3,-1]',
    },
  ],
  hints: [
    'Track a `streak` counter: increment when nums[i] == nums[i-1]+1, reset to 1 otherwise.',
    'For window ending at index i, the window is "consecutive ascending" iff streak >= k at position i.',
    `\`\`\`js
function resultsArray(nums, k) {
  const res = [];
  let streak = 1;
  for (let i = 1; i < nums.length; i++) {
    streak = nums[i] === nums[i - 1] + 1 ? streak + 1 : 1;
    if (i >= k - 1) res.push(streak >= k ? nums[i] : -1);
  }
  if (k === 1) return nums.slice();
  return res;
}\`\`\``,
  ],
  functionName: 'resultsArray',
  params: ['nums', 'k'],
  starterCode: {
    javascript: `function resultsArray(nums, k) {

}`,
    typescript: 'function resultsArray(nums: number[], k: number): number[] {\n\n}',
    python: `def resultsArray(nums, k):
    pass`,
  },
  visibleTests: [
    { args: [[1, 2, 3, 4, 3, 2, 5], 3], expected: [3, 4, -1, -1, -1] },
    { args: [[2, 2, 2, 2, 2], 4], expected: [-1, -1] },
    { args: [[3, 2, 3, 2, 3, 2], 2], expected: [-1, 3, -1, 3, -1] },
  ],
  hiddenTests: [
    { args: [[1], 1], expected: [1] },
    { args: [[1, 2], 1], expected: [1, 2] },
    { args: [[1, 2, 3], 3], expected: [3] },
    { args: [[1, 3, 5, 7], 2], expected: [-1, -1, -1] },
    { args: [[1, 2, 3, 5, 6, 7], 3], expected: [3, -1, -1, 7] },
    { args: [[1, 2, 3, 4, 5], 5], expected: [5] },
  ],
};
