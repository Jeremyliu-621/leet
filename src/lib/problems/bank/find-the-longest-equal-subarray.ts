import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-the-longest-equal-subarray',
  title: 'Find the Longest Equal Subarray',
  difficulty: 'medium',
  tags: ['arrays', 'sliding-window'],
  description: `You are given a **0-indexed** integer array \`nums\` and a positive integer \`k\`.

A subarray is called **equal** if all of its elements are equal. Note that the empty subarray is an equal subarray.

Return the **length** of the **longest** equal subarray after **deleting** at most \`k\` elements from \`nums\`.

**Example 1:**
\`\`\`
Input: nums = [1,3,2,3,1,3], k = 3
Output: 3
Explanation: Delete elements at indices 0, 2, 4 to get [3,3,3].
\`\`\`

**Example 2:**
\`\`\`
Input: nums = [1,1,2,2,1,1], k = 2
Output: 4
Explanation: Delete elements at indices 2, 3 to get [1,1,1,1].
\`\`\`

**Constraints:**
- \`1 <= nums.length <= 10^5\`
- \`1 <= nums[i] <= nums.length\`
- \`0 <= k <= nums.length\``,
  constraints: ['1 <= nums.length <= 10^5', '1 <= nums[i] <= nums.length', '0 <= k <= nums.length'],
  examples: [
    { input: 'nums = [1,3,2,3,1,3], k = 3', output: '3' },
    { input: 'nums = [1,1,2,2,1,1], k = 2', output: '4' },
  ],
  hints: [
    'Group the positions of each distinct value. For each value v, use a sliding window on its positions array.',
    'For a window [positions[left]..positions[right]], the total subarray span is positions[right] - positions[left] + 1, but only right - left + 1 are the value v. The rest (span - count) must be deleted.',
    'Shrink the window from the left when (positions[right] - positions[left] + 1) - (right - left + 1) > k.',
  ],
  functionName: 'longestEqualSubarray',
  params: ['nums', 'k'],
  starterCode: {
    javascript: 'function longestEqualSubarray(nums, k) {\n  // your code here\n}\n',
    python: 'def longestEqualSubarray(nums, k):\n    pass\n',
  },
  visibleTests: [
    { args: [[1, 3, 2, 3, 1, 3], 3], expected: 3 },
    { args: [[1, 1, 2, 2, 1, 1], 2], expected: 4 },
    { args: [[1, 1, 1], 0], expected: 3 },
  ],
  hiddenTests: [
    { args: [[1, 2, 3], 0], expected: 1 },
    { args: [[1, 2, 1, 2, 1], 1], expected: 2 },
    { args: [[2, 2, 2, 2, 2], 2], expected: 5 },
    { args: [[1, 2, 3, 1], 2], expected: 2 },
  ],
};
