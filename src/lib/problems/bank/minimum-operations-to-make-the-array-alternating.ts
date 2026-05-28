import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-operations-to-make-the-array-alternating',
  title: 'Minimum Operations to Make the Array Alternating',
  difficulty: 'medium',
  tags: ['arrays', 'hash-map'],
  description: `You are given a **0-indexed** array \`nums\` consisting of \`n\` positive integers.

The array \`nums\` is called **alternating** if:
- \`nums[i - 2] == nums[i]\` for all \`2 <= i <= n - 1\`.
- \`nums[i - 1] != nums[i]\` for all \`1 <= i <= n - 1\`.

In one operation, you can **choose an index** \`i\` and **change** \`nums[i]\` to any positive integer.

Return the **minimum number of operations** needed to make the array alternating.`,
  constraints: ['`1 <= nums.length <= 10^5`', '`1 <= nums[i] <= 10^5`'],
  examples: [
    {
      input: 'nums = [3,1,3,2,4,3]',
      output: '3',
      explanation:
        'Keep 3s at even indices (already 2 of 3 even positions are 3). Set odd positions to 1 (only 1 is already 1). Operations: change nums[3] and nums[5] on odd, change nums[4] on even. Total = 3.',
    },
    {
      input: 'nums = [1,2,2,2,2]',
      output: '2',
      explanation: 'Keep value 2 at odd indices (positions 1,3 already 2). For even indices use value 1 or another non-2 value. Change nums[2] and nums[4]. Total = 2.',
    },
  ],
  hints: [
    'Find the top-2 most-frequent values at even indices and at odd indices. The minimum operations is (even_count − best_even_freq) + (odd_count − best_odd_freq), choosing the best even/odd frequencies such that the chosen values are different.',
    'If the most-frequent even value ≠ most-frequent odd value, use both top frequencies. If they are equal, try two combinations: (top-even, second-odd) or (second-even, top-odd), and take the minimum.',
    '```js\nfunction minimumOperations(nums) {\n  const n = nums.length;\n  const ec = Math.ceil(n / 2), oc = Math.floor(n / 2);\n  const fe = new Map(), fo = new Map();\n  for (let i = 0; i < n; i++) {\n    const m = i % 2 === 0 ? fe : fo;\n    m.set(nums[i], (m.get(nums[i]) || 0) + 1);\n  }\n  const top2 = m => {\n    let f = [null,0], s = [null,0];\n    for (const [v,c] of m)\n      if (c > f[1]) { s = f; f = [v,c]; }\n      else if (c > s[1]) s = [v,c];\n    return [f, s];\n  };\n  const [e1,e2] = top2(fe), [o1,o2] = top2(fo);\n  if (e1[0] !== o1[0]) return (ec-e1[1]) + (oc-o1[1]);\n  return Math.min((ec-e1[1])+(oc-o2[1]), (ec-e2[1])+(oc-o1[1]));\n}\n```',
  ],
  functionName: 'minimumOperations',
  params: ['nums'],
  starterCode: {
    javascript: `function minimumOperations(nums) {

}`,
    typescript: "function minimumOperations(nums: number[]): number {\n\n}",

    python: `def minimumOperations(nums: list[int]) -> int:
    pass`,
  },
  visibleTests: [
    { args: [[3, 1, 3, 2, 4, 3]], expected: 3 },
    { args: [[1, 2, 2, 2, 2]], expected: 2 },
  ],
  hiddenTests: [
    { args: [[1]], expected: 0 },
    { args: [[1, 1]], expected: 1 },
    { args: [[1, 2, 1, 2, 1]], expected: 0 },
    { args: [[2, 2, 2, 2]], expected: 2 },
    { args: [[5, 5, 5, 5, 5]], expected: 2 },
  ],
};
