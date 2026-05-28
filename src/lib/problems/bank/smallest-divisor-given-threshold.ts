import type { Problem } from '../types';

export const problem: Problem = {
  id: 'smallest-divisor-given-threshold',
  title: 'Find the Smallest Divisor Given a Threshold',
  difficulty: 'medium',
  tags: ['binary-search'],
  description: `Given an array of integers \`nums\` and an integer \`threshold\`, find the **smallest** positive integer divisor such that the sum of division results is less than or equal to \`threshold\`.

Each division result is rounded up to the nearest integer (ceiling division): \`ceil(nums[i] / divisor)\`.

**Example 1:**
\`\`\`
Input: nums = [1,2,5,9], threshold = 6
Output: 5
\`\`\`

**Example 2:**
\`\`\`
Input: nums = [44,22,33,11,25], threshold = 5
Output: 44
\`\`\`

**Constraints:**
- \`1 ≤ nums.length ≤ 5 × 10⁴\`
- \`1 ≤ nums[i] ≤ 10⁶\`
- \`nums.length ≤ threshold ≤ 10⁶\``,
  constraints: [
    '1 ≤ nums.length ≤ 5 × 10⁴',
    '1 ≤ nums[i] ≤ 10⁶',
    'nums.length ≤ threshold ≤ 10⁶',
  ],
  examples: [
    { input: 'nums = [1,2,5,9], threshold = 6', output: '5' },
    { input: 'nums = [44,22,33,11,25], threshold = 5', output: '44' },
  ],
  hints: [
    'Binary search on the divisor value in the range [1, max(nums)].',
    'For a given divisor d, compute sum of Math.ceil(n/d) for all n in nums.',
    'If the sum ≤ threshold, d is a valid candidate — try smaller. Otherwise d is too small.',
  ],
  functionName: 'smallestDivisor',
  params: ['nums', 'threshold'],
  starterCode: {
    javascript: 'function smallestDivisor(nums, threshold) {\n\n}\n',
    typescript: "function smallestDivisor(nums: number[], threshold: number): number {\n\n}",

    python: 'def smallestDivisor(nums, threshold):\n    pass\n',
  },
  visibleTests: [
    { args: [[1, 2, 5, 9], 6], expected: 5 },
    { args: [[44, 22, 33, 11, 25], 5], expected: 44 },
    { args: [[1, 2, 3], 6], expected: 1 },
  ],
  hiddenTests: [
    { args: [[1000000], 1], expected: 1000000 },
    { args: [[2, 3, 5, 7, 11], 11], expected: 3 },
    { args: [[1], 1], expected: 1 },
    { args: [[1, 1, 1, 1, 1], 5], expected: 1 },
  ],
};
