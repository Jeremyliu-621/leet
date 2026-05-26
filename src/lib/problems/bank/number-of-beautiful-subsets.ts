import type { Problem } from '../types';

export const problem: Problem = {
  id: 'number-of-beautiful-subsets',
  title: 'Number of Beautiful Subsets',
  difficulty: 'medium',
  tags: ['arrays', 'dynamic-programming'],
  description: `You are given an array \`nums\` of positive integers and a positive integer \`k\`.

A subset of \`nums\` is **beautiful** if it does not contain two integers with an absolute difference equal to \`k\`.

Return the number of **non-empty beautiful** subsets of the array \`nums\`.

Note that two subsets are different if they have **different elements** (by value).

**Example 1:**
\`\`\`
Input: nums = [2,4,6], k = 2
Output: 4
Explanation: Beautiful subsets are: [2], [4], [6], [2,6].
\`\`\`

**Example 2:**
\`\`\`
Input: nums = [1], k = 1
Output: 1
\`\`\`

**Constraints:**
- \`1 <= nums.length <= 20\`
- \`1 <= nums[i], k <= 1000\``,
  constraints: [
    '1 <= nums.length <= 20',
    '1 <= nums[i], k <= 1000',
  ],
  examples: [
    { input: 'nums = [2,4,6], k = 2', output: '4' },
    { input: 'nums = [1], k = 1', output: '1' },
  ],
  hints: [
    'Sort nums. Use backtracking: at each step, include or skip the current element.',
    'Maintain a frequency map of chosen elements. When considering nums[i], check if nums[i]-k is in the map.',
    'If not, add nums[i] to the map, recurse, then remove it. Count all non-empty subsets found.',
  ],
  functionName: 'beautifulSubsets',
  params: ['nums', 'k'],
  starterCode: {
    javascript: 'function beautifulSubsets(nums, k) {\n  // your code here\n}\n',
    python: 'def beautifulSubsets(nums, k):\n    pass\n',
  },
  visibleTests: [
    { args: [[2, 4, 6], 2], expected: 4 },
    { args: [[1], 1], expected: 1 },
    { args: [[1, 2, 3], 1], expected: 4 },
  ],
  hiddenTests: [
    { args: [[1, 3, 5], 2], expected: 4 },
    { args: [[1, 2], 1], expected: 2 },
    { args: [[10, 4, 2, 8, 6], 2], expected: 12 },
    { args: [[1, 1], 1], expected: 3 },
  ],
};
