import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximum-alternating-subsequence-sum',
  title: 'Maximum Alternating Subsequence Sum',
  difficulty: 'medium',
  tags: ['arrays', 'dynamic-programming'],
  description: `The **alternating sum** of a **0-indexed** array is defined as the **sum** of the elements at **even** indices **minus** the sum of the elements at **odd** indices.

For example, the alternating sum of \`[4,2,5,3]\` is \`(4 + 5) - (2 + 3) = 4\`.

Given an array \`nums\`, return the **maximum alternating sum** of any subsequence of \`nums\` (after **reindexing** the elements of the subsequence).

A **subsequence** of an array is a new array generated from the original array by deleting some elements (possibly none) without changing the remaining elements' relative order.`,
  constraints: [
    '`1 <= nums.length <= 10^5`',
    '`1 <= nums[i] <= 10^5`',
  ],
  examples: [
    {
      input: 'nums = [4,2,5,3]',
      output: '7',
      explanation: 'The subsequence [4,2,5] has alternating sum (4+5)-2=7.',
    },
    {
      input: 'nums = [5,6,7,8]',
      output: '8',
      explanation: 'Subsequence [8] has alternating sum 8. Or [5,6,7,8]: (5+7)-(6+8)=-2. Taking just [8]=8 is better.',
    },
    {
      input: 'nums = [6,2,1,2,4,5]',
      output: '10',
      explanation: 'Subsequence [6,1,5]: (6+5)-1=10.',
    },
  ],
  hints: [
    'Define dp1 = max alternating sum of a subsequence ending at an "adding" position (even index after reindexing), and dp2 = max alternating sum ending at a "subtracting" position (odd index). Start with dp1 = dp2 = 0.',
    'For each element nums[i]: update dp1 = max(dp1, dp2 + nums[i]) (add this element at an even position) and dp2 = max(dp2, dp1 - nums[i]) (add this element at an odd position). Use temporary variables to avoid using updated values.',
    '```js\nfunction maxAlternatingSum(nums) {\n  let dp1 = 0, dp2 = 0;\n  for (const num of nums) {\n    const new1 = Math.max(dp1, dp2 + num);\n    const new2 = Math.max(dp2, dp1 - num);\n    dp1 = new1; dp2 = new2;\n  }\n  return dp1;\n}\n```',
  ],
  functionName: 'maxAlternatingSum',
  params: ['nums'],
  starterCode: {
    javascript: `function maxAlternatingSum(nums) {

}`,
    typescript: `function maxAlternatingSum(nums: number[]): number {

}`,
    python: `def maxAlternatingSum(nums: list[int]) -> int:
    pass`,
  },
  visibleTests: [
    { args: [[4, 2, 5, 3]], expected: 7 },
    { args: [[5, 6, 7, 8]], expected: 8 },
    { args: [[6, 2, 1, 2, 4, 5]], expected: 10 },
  ],
  hiddenTests: [
    { args: [[1]], expected: 1 },
    { args: [[1, 2]], expected: 2 },
    { args: [[3, 3, 3, 3]], expected: 3 },
    { args: [[1, 10, 1, 10, 1]], expected: 19 },
  ],
};
