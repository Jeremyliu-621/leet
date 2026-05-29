import type { Problem } from '../types';

export const problem: Problem = {
  id: 'special-permutations',
  title: 'Special Permutations',
  difficulty: 'medium',
  tags: ['arrays', 'dynamic-programming'],
  description: `You are given a **0-indexed** integer array \`nums\` containing \`n\` **distinct** positive integers. A permutation of \`nums\` is called **special** if:

For all indexes \`0 <= i < n - 1\`, either \`nums[i] % nums[i + 1] == 0\` or \`nums[i + 1] % nums[i] == 0\`.

Return the total number of special permutations. Since the answer may be large, return it **modulo** \`10^9 + 7\`.`,
  constraints: [
    '`2 <= nums.length <= 14`',
    '`1 <= nums[i] <= 10^9`',
    'All integers in `nums` are distinct.',
  ],
  examples: [
    {
      input: 'nums = [2,3,6]',
      output: '2',
      explanation: '[2,6,3] and [3,6,2] are the two special permutations of nums.',
    },
    {
      input: 'nums = [1,4,3]',
      output: '2',
      explanation: '[4,1,3] and [3,1,4] are the two special permutations.',
    },
    {
      input: 'nums = [2,4]',
      output: '2',
      explanation: 'Both [2,4] and [4,2] are valid since 4 % 2 = 0.',
    },
  ],
  hints: [
    'Since n ≤ 14, use bitmask DP. Let dp[mask][last] = number of special permutations using the elements indicated by the set bits of `mask`, with the last element being `nums[last]`.',
    'Base case: dp[1 << i][i] = 1 for each i. Transition: for each (mask, last) state, try adding element `next` (not yet in mask) if nums[last] % nums[next] === 0 or nums[next] % nums[last] === 0.',
    '```js\nfunction specialPerm(nums) {\n  const n = nums.length, MOD = 1_000_000_007;\n  const dp = Array.from({length: 1 << n}, () => new Array(n).fill(0));\n  for (let i = 0; i < n; i++) dp[1 << i][i] = 1;\n  for (let mask = 1; mask < (1 << n); mask++) {\n    for (let last = 0; last < n; last++) {\n      if (!(mask & (1 << last)) || !dp[mask][last]) continue;\n      for (let next = 0; next < n; next++) {\n        if (mask & (1 << next)) continue;\n        if (nums[last] % nums[next] === 0 || nums[next] % nums[last] === 0)\n          dp[mask | (1 << next)][next] = (dp[mask | (1 << next)][next] + dp[mask][last]) % MOD;\n      }\n    }\n  }\n  const full = (1 << n) - 1;\n  return dp[full].reduce((a, b) => (a + b) % MOD, 0);\n}\n```',
  ],
  functionName: 'specialPerm',
  params: ['nums'],
  starterCode: {
    javascript: `function specialPerm(nums) {

}`,
    typescript: `function specialPerm(nums: number[]): number {

}`,
    python: `def specialPerm(nums: list[int]) -> int:
    pass`,
  },
  visibleTests: [
    { args: [[2, 3, 6]], expected: 2 },
    { args: [[1, 4, 3]], expected: 2 },
    { args: [[2, 4]], expected: 2 },
  ],
  hiddenTests: [
    { args: [[5, 3, 7]], expected: 0 },
    { args: [[1, 2, 4, 8]], expected: 24 },
    { args: [[2, 4, 6]], expected: 2 },
    { args: [[1, 2, 3, 6]], expected: 12 },
  ],
};
