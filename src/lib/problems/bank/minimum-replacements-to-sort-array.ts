import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-replacements-to-sort-array',
  title: 'Minimum Replacements to Sort the Array',
  difficulty: 'hard',
  tags: ['arrays'],
  description: `You are given a **0-indexed** integer array \`nums\`. In one operation you may replace any element \`nums[i]\` with **two** elements that sum to \`nums[i]\`.

Return the **minimum number of operations** needed to make \`nums\` non-decreasing (sorted).

**Args:** \`nums: number[]\`

**Example 1:**

Input: \`nums = [3,9,3]\`

Output: \`2\`

Explanation: Replace 9 → [3,6] giving [3,3,6,3]. Then replace 6 → [3,3] giving [3,3,3,3]. 2 operations total.

**Example 2:**

Input: \`nums = [1,2,3,4,5]\`

Output: \`0\`

Explanation: Already sorted; no operations needed.

**Greedy approach:** Process right-to-left. For each \`nums[i] > nums[i+1]\`, compute how many pieces you must split into: \`k = ceil(nums[i] / nums[i+1])\`. This costs \`k-1\` operations and sets the effective new left bound \`nums[i] = floor(nums[i] / k)\` (the smallest piece, ensuring the split is valid).`,
  constraints: [
    '1 ≤ nums.length ≤ 10^5',
    '1 ≤ nums[i] ≤ 10^9',
  ],
  examples: [
    {
      input: 'nums = [3,9,3]',
      output: '2',
      explanation: 'Replace 9 with [3,6]: [3,3,6,3]. Then replace 6 with [3,3]: [3,3,3,3]. 2 operations.',
    },
    {
      input: 'nums = [1,2,3,4,5]',
      output: '0',
      explanation: 'Already non-decreasing.',
    },
  ],
  hints: [
    'The last element never needs to change. Scan right-to-left.',
    'If nums[i] > nums[i+1], you must split nums[i] into k = ceil(nums[i]/nums[i+1]) pieces. That costs k-1 operations. The new effective value for nums[i] is floor(nums[i]/k) — the smallest piece.',
    'Use BigInt or be careful with large numbers: nums can be 10^9 and n can be 10^5 so the answer can be up to ~10^14.',
  ],
  functionName: 'minimumReplacement',
  params: ['nums'],
  starterCode: {
    javascript: `function minimumReplacement(nums) {
  // your code here
}`,
    typescript: "function minimumReplacement(nums: number[]): number {\n  // your code here\n}",

    python: `def minimumReplacement(nums: list) -> int:
    # your code here
    pass`,
  },
  visibleTests: [
    { args: [[3, 9, 3]], expected: 2 },
    { args: [[1, 2, 3, 4, 5]], expected: 0 },
    { args: [[12, 9, 7, 6, 17, 19, 21]], expected: 6 },
  ],
  hiddenTests: [
    { args: [[1]], expected: 0 },
    { args: [[5, 1]], expected: 4 },
    { args: [[2, 2, 2]], expected: 0 },
    { args: [[10, 4, 3]], expected: 5 },
    { args: [[1000000000, 1]], expected: 999999999 },
  ],
};
