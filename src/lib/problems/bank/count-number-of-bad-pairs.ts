import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-number-of-bad-pairs',
  title: 'Count Number of Bad Pairs',
  difficulty: 'medium',
  tags: ['arrays', 'hash-map'],
  description: `You are given a **0-indexed** integer array \`nums\`. A pair of indices \`(i, j)\` is a **bad pair** if \`i < j\` and \`j - i != nums[j] - nums[i]\`.

Return the **total number of bad pairs** in \`nums\`.`,
  constraints: [
    '`1 <= nums.length <= 10^5`',
    '`1 <= nums[i] <= 10^9`',
  ],
  examples: [
    {
      input: 'nums = [4,1,3,3]',
      output: '5',
      explanation: 'The pair (0,1): 1-0=1, 1-4=-3 → bad. (0,2): 2-0=2, 3-4=-1 → bad. (0,3): bad. (1,2): 2-1=1, 3-1=2 → bad. (1,3): bad. (2,3): 3-2=1, 3-3=0 → bad. Total = 5 (all are bad).',
    },
    {
      input: 'nums = [1,2,3,4,5]',
      output: '0',
      explanation: 'Every pair (i,j) has j-i = nums[j]-nums[i], so there are no bad pairs.',
    },
    {
      input: 'nums = [1,1,1,1]',
      output: '6',
      explanation: 'All 6 pairs are bad since no pair satisfies the condition.',
    },
  ],
  hints: [
    'Rewrite the condition: (i,j) is a "good pair" iff j-i == nums[j]-nums[i], i.e., nums[i]-i == nums[j]-j. Count the number of good pairs using a frequency map of (nums[i]-i).',
    'The number of bad pairs = total pairs - good pairs = n*(n-1)/2 - sum over each key k of C(freq[k], 2).',
    '```js\nfunction countBadPairs(nums) {\n  const n = nums.length;\n  const freq = new Map();\n  for (let i = 0; i < n; i++) {\n    const key = nums[i] - i;\n    freq.set(key, (freq.get(key) ?? 0) + 1);\n  }\n  let good = 0;\n  for (const cnt of freq.values()) good += cnt * (cnt - 1) / 2;\n  return n * (n - 1) / 2 - good;\n}\n```',
  ],
  functionName: 'countBadPairs',
  params: ['nums'],
  starterCode: {
    javascript: `function countBadPairs(nums) {

}`,
    typescript: `function countBadPairs(nums: number[]): number {

}`,
    python: `def countBadPairs(nums: list[int]) -> int:
    pass`,
  },
  visibleTests: [
    { args: [[4, 1, 3, 3]], expected: 5 },
    { args: [[1, 2, 3, 4, 5]], expected: 0 },
    { args: [[1, 1, 1, 1]], expected: 6 },
  ],
  hiddenTests: [
    { args: [[1]], expected: 0 },
    { args: [[3, 1]], expected: 1 },
    { args: [[2, 2, 2]], expected: 3 },
    { args: [[1, 3, 3, 3]], expected: 5 },
  ],
};
