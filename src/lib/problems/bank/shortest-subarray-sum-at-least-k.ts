import type { Problem } from '../types';

export const problem: Problem = {
  id: 'shortest-subarray-sum-at-least-k',
  title: 'Shortest Subarray with Sum at Least K',
  difficulty: 'hard',
  tags: ['arrays', 'sliding-window'],
  description: `Given an integer array \`nums\` and an integer \`k\`, return the length of the **shortest non-empty subarray** of \`nums\` with a sum of at least \`k\`.

If there is no such subarray, return \`-1\`.

> **Note:** Unlike most subarray-sum problems, \`nums\` may contain **negative** numbers, which makes a simple sliding window insufficient.

**Example:**

\`nums = [2,-1,2]\`, \`k = 3\`

Subarray \`[2,-1,2]\` has sum 3. Its length is 3.
No shorter subarray sums to ≥ 3.
Output: **3**`,
  constraints: [
    '1 <= nums.length <= 10^5',
    '-10^5 <= nums[i] <= 10^5',
    '1 <= k <= 10^9',
  ],
  examples: [
    { input: 'nums = [1], k = 1', output: '1' },
    { input: 'nums = [1,2], k = 4', output: '-1' },
    { input: 'nums = [2,-1,2], k = 3', output: '3' },
  ],
  hints: [
    'Build a prefix-sum array `P` where `P[i]` = sum of first i elements. A subarray `nums[l..r]` has sum `P[r+1] - P[l]`.',
    'You want the smallest `r - l` such that `P[r+1] - P[l] >= k`, i.e., `P[r+1] >= P[l] + k`.',
    'Use a monotonic deque of indices into P. For each r+1, pop from the front while P[r+1] - P[front] >= k (update answer). Then pop from the back while P[back] >= P[r+1] (discard unhelpful left endpoints). Push r+1 onto the back.',
  ],
  functionName: 'shortestSubarray',
  params: ['nums', 'k'],
  starterCode: {
    javascript: `function shortestSubarray(nums, k) {

}`,
    python: `def shortestSubarray(nums, k):
    pass
`,
  },
  visibleTests: [
    { args: [[1], 1], expected: 1 },
    { args: [[1, 2], 4], expected: -1 },
    { args: [[2, -1, 2], 3], expected: 3 },
  ],
  hiddenTests: [
    { args: [[1, 2, 3], 6], expected: 3 },
    { args: [[1, 2, 3], 3], expected: 1 },
    { args: [[84, -37, 32, 40, 95], 167], expected: 3 },
    { args: [[-1, -1, -1, 1], 1], expected: 1 },
    { args: [[10, -2, 3, 5, -1], 10], expected: 1 },
    { args: [[-100, 1, 2, 3], 4], expected: 2 },
    { args: [[1, 1, 1, 1, 1], 3], expected: 3 },
  ],
};
