import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-number-of-k-consecutive-bit-flips',
  title: 'Minimum Number of K Consecutive Bit Flips',
  difficulty: 'hard',
  tags: ['bit-manipulation', 'sliding-window', 'arrays'],
  description: `You are given a binary array \`nums\` and an integer \`k\`.

A **k-bit flip** is choosing a **subarray** of length \`k\` from \`nums\` and simultaneously changing every \`0\` in the subarray to \`1\`, and every \`1\` in the subarray to \`0\`.

Return the **minimum** number of k-bit flips required so that there is no \`0\` in the array. If it is not possible, return \`-1\`.

**Args:** \`nums: number[], k: number\`

**Example 1:**

\`\`\`
Input: nums = [0,1,0], k = 1
Output: 2
Explanation: Flip nums[0], then flip nums[2].
\`\`\`

**Example 2:**

\`\`\`
Input: nums = [1,1,0], k = 2
Output: -1
Explanation: No matter how we flip subarrays of size 2, we cannot make the array become [1,1,1].
\`\`\`

**Example 3:**

\`\`\`
Input: nums = [0,0,0,1,0,1,1,0], k = 3
Output: 3
\`\`\``,
  constraints: [
    '1 <= nums.length <= 10^5',
    '1 <= k <= nums.length',
    'nums[i] is either 0 or 1',
  ],
  examples: [
    { input: 'nums = [0,1,0], k = 1', output: '2' },
    { input: 'nums = [1,1,0], k = 2', output: '-1' },
    { input: 'nums = [0,0,0,1,0,1,1,0], k = 3', output: '3' },
  ],
  hints: [
    'Greedy: scan left to right. When you encounter a 0 (after accounting for all previous flips), you must flip here.',
    'Track the cumulative flip state with a difference array or a sliding window counter. Maintain `flips[i]` to record that a flip starts at position `i`. The effective bit at position `i` equals `nums[i] XOR (sum of flips from i-k+1 to i) mod 2`.',
    'Use a prefix sum approach: keep a running total of how many flips are currently affecting position `i`. When a flip starting at `i - k` goes out of scope, subtract it.',
  ],
  functionName: 'minKBitFlips',
  params: ['nums', 'k'],
  starterCode: {
    javascript: 'function minKBitFlips(nums, k) {\n  \n}\n',
    python: 'def minKBitFlips(nums, k):\n    ',
    typescript: 'function minKBitFlips(nums: number[], k: number): number {\n  \n}\n',
  },
  visibleTests: [
    { args: [[0, 1, 0], 1], expected: 2 },
    { args: [[1, 1, 0], 2], expected: -1 },
    { args: [[0, 0, 0, 1, 0, 1, 1, 0], 3], expected: 3 },
  ],
  hiddenTests: [
    { args: [[1, 1, 1], 1], expected: 0 },
    { args: [[0, 0, 0], 3], expected: 1 },
    { args: [[0, 1], 2], expected: -1 },
    { args: [[0, 0, 1, 1, 0, 0, 1, 1], 2], expected: 2 },
    { args: [[1], 1], expected: 0 },
    { args: [[0], 1], expected: 1 },
  ],
};
