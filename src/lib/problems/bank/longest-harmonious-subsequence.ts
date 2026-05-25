import type { Problem } from '../types';

export const problem: Problem = {
  id: 'longest-harmonious-subsequence',
  title: 'Longest Harmonious Subsequence',
  difficulty: 'easy',
  tags: ['arrays', 'hash-map'],
  description: `We define a harmonious array as an array where the difference between its maximum value and its minimum value is **exactly** \`1\`.

Given an integer array \`nums\`, return the length of its longest harmonious **subsequence** among all its possible subsequences.

A **subsequence** of an array is a sequence that can be derived from the array by deleting some or no elements without changing the order of the remaining elements.

**Approach:** Count frequency of each number. For each number \`k\`, if \`k+1\` also exists in the array, the longest harmonious subsequence using only \`k\` and \`k+1\` has length \`freq[k] + freq[k+1]\`. Return the maximum such length.`,
  constraints: [
    '1 <= nums.length <= 2 * 10^4',
    '-10^9 <= nums[i] <= 10^9',
  ],
  examples: [
    {
      input: 'nums = [1,3,2,2,5,2,3,7]',
      output: '5',
      explanation: 'The longest harmonious subsequence is [3,2,2,2,3] with length 5.',
    },
    {
      input: 'nums = [1,2,3,4]',
      output: '2',
      explanation: 'Any adjacent pair has difference 1, longest harmonious subsequence has length 2.',
    },
    {
      input: 'nums = [1,1,1,1]',
      output: '0',
      explanation: 'All elements are the same; max − min = 0 ≠ 1 for any subset.',
    },
  ],
  hints: [
    'Count frequencies with a hash map.',
    'For each number k, if k+1 also appears, freq[k]+freq[k+1] is a candidate answer.',
    '```js\nfunction findLHS(nums) {\n  const freq = new Map();\n  for (const n of nums) freq.set(n, (freq.get(n) ?? 0) + 1);\n  let ans = 0;\n  for (const [k, v] of freq)\n    if (freq.has(k + 1)) ans = Math.max(ans, v + freq.get(k + 1));\n  return ans;\n}\n```',
  ],
  functionName: 'findLHS',
  params: ['nums'],
  starterCode: {
    javascript: `function findLHS(nums) {
  // return length of longest harmonious subsequence

}`,
    python: `def findLHS(nums: list) -> int:
    # return length of longest harmonious subsequence
    pass
`,
  },
  visibleTests: [
    { args: [[1, 3, 2, 2, 5, 2, 3, 7]], expected: 5 },
    { args: [[1, 2, 3, 4]], expected: 2 },
    { args: [[1, 1, 1, 1]], expected: 0 },
  ],
  hiddenTests: [
    { args: [[1, 2]], expected: 2 },
    { args: [[1]], expected: 0 },
    { args: [[1, 2, 2, 1]], expected: 4 },
    { args: [[1, 1, 2, 2]], expected: 4 },
    { args: [[1, 2, 1, 3, 2]], expected: 4 },
    { args: [[-1, 0, 1, 2]], expected: 2 },
    { args: [[0, 0, 1, 1, 2, 2]], expected: 4 },
  ],
};
