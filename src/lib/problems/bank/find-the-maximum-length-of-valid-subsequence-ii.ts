import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-the-maximum-length-of-valid-subsequence-ii',
  title: 'Find the Maximum Length of Valid Subsequence II',
  difficulty: 'medium',
  tags: ['arrays', 'dynamic-programming'],
  description: `You are given an integer array \`nums\` and a **positive** integer \`k\`.

A subsequence \`sub\` of \`nums\` with length \`x\` is called **valid** if it satisfies:

- \`(sub[0] + sub[1]) % k == (sub[1] + sub[2]) % k == ... == (sub[x - 2] + sub[x - 1]) % k\`

Return the **length** of the **longest valid subsequence** of \`nums\`.

**Note:** This is the k-generalisation of "Find the Maximum Length of Valid Subsequence I" (which fixes k=2). Here k can be up to \`10^3\`, requiring a 2D DP.`,
  constraints: [
    '2 <= nums.length <= 10^3',
    '1 <= nums[i] <= 10^7',
    '1 <= k <= 10^3',
  ],
  examples: [
    {
      input: 'nums = [1,2,3,4,5], k = 2',
      output: '5',
      explanation: 'The full array [1,2,3,4,5] has consecutive pair sums 3,5,7,9 — all odd (≡1 mod 2). Valid subsequence of length 5.',
    },
    {
      input: 'nums = [1,4,2,3,1,4], k = 3',
      output: '4',
      explanation: 'Subsequence [1,4,1,4] (at indices 0,1,4,5): pair sums 1+4=5≡2, 4+1=5≡2, 1+4=5≡2. All ≡2 mod 3. Length 4.',
    },
    {
      input: 'nums = [1,2,3], k = 3',
      output: '2',
      explanation: '(1+2)%3=0 but (2+3)%3=2. The full array is not valid. Best is any 2-element subsequence, e.g. [1,2] with one pair sum.',
    },
  ],
  hints: [
    'Let dp[r][j] = maximum length of a valid subsequence whose last element ≡ j (mod k) and all consecutive pair sums ≡ r (mod k).',
    'For each element x (j = x % k): for every r in [0, k), the element before x must be ≡ (r − j + k) % k (mod k). Update: dp[r][j] = max(dp[r][j], dp[r][(r − j + k) % k] + 1).',
    'A single-element subsequence is valid for any r. This is captured naturally since dp starts at 0 — adding 1 to a "length 0" entry creates a length-1 entry.',
    'The answer is the maximum value across the entire dp table.',
  ],
  functionName: 'maximumLength',
  params: ['nums', 'k'],
  starterCode: {
    javascript: `function maximumLength(nums, k) {

}`,
    typescript: `function maximumLength(nums: number[], k: number): number {

}`,
    python: `def maximumLength(nums: list[int], k: int) -> int:
    pass`,
  },
  visibleTests: [
    { args: [[1, 2, 3, 4, 5], 2], expected: 5 },
    { args: [[1, 4, 2, 3, 1, 4], 3], expected: 4 },
    { args: [[1, 2, 3], 3], expected: 2 },
  ],
  hiddenTests: [
    { args: [[1, 2], 2], expected: 2 },
    { args: [[1, 1, 1], 2], expected: 3 },
    { args: [[3, 6, 3, 6], 3], expected: 4 },
    { args: [[1, 2, 1, 2, 1], 3], expected: 5 },
    { args: [[5, 5, 5, 5], 5], expected: 4 },
    { args: [[1, 3, 5, 7, 9], 4], expected: 5 },
    { args: [[2, 4, 6, 8], 3], expected: 3 },
    { args: [[1, 2, 3, 4], 5], expected: 2 },
    { args: [[1, 2], 1], expected: 2 },
    { args: [[4, 7, 2, 8, 4, 7], 5], expected: 4 },
  ],
};
