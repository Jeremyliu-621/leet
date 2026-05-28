import type { Problem } from '../types';

export const problem: Problem = {
  id: 'k-divisible-elements-subarrays',
  title: 'K-Divisible Elements Subarrays',
  difficulty: 'medium',
  tags: ['arrays', 'hash-map'],
  description: `Given an integer array \`nums\` and two integers \`k\` and \`p\`, return the number of **distinct** subarrays which have **at most** \`k\` elements divisible by \`p\`.

Two arrays \`arr1\` and \`arr2\` are considered **distinct** if and only if there exists at least one index \`i\` where \`arr1[i] !== arr2[i]\`.`,
  constraints: [
    '`1 <= nums.length <= 200`',
    '`1 <= p <= 200`',
    '`1 <= nums[i] <= 200`',
    '`1 <= k <= nums.length`',
  ],
  examples: [
    {
      input: 'nums = [2,3,3,2,2], k = 2, p = 2',
      output: '11',
      explanation: 'The subarrays with at most 2 divisible-by-2 elements (not counting duplicates) number 11.',
    },
    {
      input: 'nums = [1,2,3,4], k = 4, p = 1',
      output: '10',
      explanation: 'All elements are divisible by 1 so every subarray of length ≤ 4 with ≤ 4 such elements qualifies. There are 10 distinct subarrays.',
    },
    {
      input: 'nums = [1,1,1], k = 1, p = 1',
      output: '1',
      explanation: 'Every element is divisible by 1. With k=1 at most one such element is allowed, so only length-1 subarrays qualify — but they are all [1], so there is only 1 distinct subarray.',
    },
  ],
  hints: [
    'Enumerate every subarray with two nested loops. Use a running count of divisible elements to prune early when the count exceeds k.',
    'Convert each valid subarray to a string key and insert it into a Set to automatically deduplicate.',
    '```js\nfunction countDistinct(nums, k, p) {\n  const seen = new Set();\n  const n = nums.length;\n  for (let i = 0; i < n; i++) {\n    let cnt = 0;\n    const parts = [];\n    for (let j = i; j < n; j++) {\n      if (nums[j] % p === 0) cnt++;\n      if (cnt > k) break;\n      parts.push(nums[j]);\n      seen.add(parts.join(\',\'));\n    }\n  }\n  return seen.size;\n}\n```',
  ],
  functionName: 'countDistinct',
  params: ['nums', 'k', 'p'],
  starterCode: {
    javascript: `function countDistinct(nums, k, p) {

}`,
    typescript: `function countDistinct(nums: number[], k: number, p: number): number {

}`,
    python: `def countDistinct(nums, k, p):
    pass`,
  },
  visibleTests: [
    { args: [[2, 3, 3, 2, 2], 2, 2], expected: 11 },
    { args: [[1, 2, 3, 4], 4, 1], expected: 10 },
    { args: [[1, 1, 1], 1, 1], expected: 1 },
  ],
  hiddenTests: [
    { args: [[2, 4, 5], 1, 2], expected: 4 },
    { args: [[1], 0, 1], expected: 0 },
    { args: [[1, 2, 3, 4, 5, 6], 3, 2], expected: 21 },
    { args: [[1, 2, 3], 1, 2], expected: 6 },
    { args: [[2, 3, 3, 2], 1, 2], expected: 7 },
  ],
};
