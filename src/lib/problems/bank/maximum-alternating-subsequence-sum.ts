import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximum-alternating-subsequence-sum',
  title: 'Maximum Alternating Subsequence Sum',
  difficulty: 'medium',
  tags: ['arrays', 'dynamic-programming'],
  description: `The **alternating sum** of a **0-indexed** array is defined as the **sum** of the elements at **even** indices **minus** the sum of the elements at **odd** indices.

- For example, the alternating sum of \`[4,2,5,3]\` is \`(4 + 5) - (2 + 3) = 4\`.

Given an array \`nums\`, return the **maximum alternating sum** of any subsequence of \`nums\` (after **reindexing** the elements of the subsequence).

A **subsequence** of an array is a new array generated from the original array by deleting some elements (possibly none) without changing the remaining elements' relative order.`,
  constraints: [
    '1 <= nums.length <= 10^5',
    '1 <= nums[i] <= 10^5',
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
      explanation: 'Taking only [8] (last element) gives 8. Or [5,6,7,8] gives (5+7)-(6+8)=-2. Optimal is just [8].',
    },
  ],
  hints: [
    'Level 1: Use DP. Let even = max alternating sum for subsequences ending with a positively-contributing element (even index), and odd = max alternating sum ending with a negatively-contributing element.',
    'Level 2: For each number x, update: new_even = max(even, odd + x); new_odd = max(odd, even - x). Initialize even = odd = 0. The answer is even.',
    'Level 3: let even=0,odd=0;for(const x of nums){const ne=Math.max(even,odd+x);const no=Math.max(odd,even-x);even=ne;odd=no;}return even;',
  ],
  functionName: 'maxAlternatingSum',
  params: ['nums'],
  starterCode: {
    javascript: 'function maxAlternatingSum(nums) {\n  // your code here\n}\n',
    typescript: "function maxAlternatingSum(nums: number[]): number {\n  // your code here\n}",

    python: 'def maxAlternatingSum(nums):\n    # your code here\n    pass\n',
  },
  visibleTests: [
    { args: [[4, 2, 5, 3]], expected: 7 },
    { args: [[5, 6, 7, 8]], expected: 8 },
  ],
  hiddenTests: [
    { args: [[1]], expected: 1 },
    { args: [[6, 2, 1, 2, 4, 5]], expected: 10 },
    { args: [[1, 2, 3]], expected: 3 },
    { args: [[3, 3, 3]], expected: 3 },
    { args: [[1, 1, 1, 1]], expected: 1 },
  ],
};
