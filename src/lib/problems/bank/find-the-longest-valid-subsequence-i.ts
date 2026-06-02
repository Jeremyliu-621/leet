import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-the-longest-valid-subsequence-i',
  title: 'Find the Longest Valid Subsequence I',
  difficulty: 'medium',
  tags: ['arrays', 'dynamic-programming'],
  description: `You are given an integer array \`nums\`.

A subsequence \`sub\` of \`nums\` with length \`x\` is called **valid** if it satisfies:

- \`(sub[0] + sub[1]) % 2 == (sub[1] + sub[2]) % 2 == ... == (sub[x - 2] + sub[x - 1]) % 2\`

Return the length of the **longest valid subsequence** of \`nums\`.

Note that the resulting subsequence does **not** need to be contiguous.`,
  constraints: [
    '`2 <= nums.length <= 2 * 10^5`',
    '`1 <= nums[i] <= 10^7`',
  ],
  examples: [
    {
      input: 'nums = [1,2,3,4]',
      output: '4',
      explanation: 'The longest valid subsequence is [1,2,3,4] where consecutive sums alternate: 3%2=1, 5%2=1, 7%2=1.',
    },
    {
      input: 'nums = [1,2,1,1,2,1,2]',
      output: '6',
      explanation: 'The longest valid subsequence is [1,2,1,2,1,2] (all parity alternating pairs sum to odd).',
    },
  ],
  hints: [
    'The condition "(sub[i] + sub[i+1]) % 2 == constant" means all consecutive pairs have the same parity sum. There are only two possible parity patterns: all pairs sum to even (all elements same parity), or all pairs sum to odd (elements alternate parity).',
    'Case 1: All consecutive pairs sum to even → both elements in each pair have the same parity. This means all elements in the subsequence must be all-even or all-odd. Count max(count_even, count_odd).',
    'Case 2: All consecutive pairs sum to odd → elements alternate between odd and even. Use DP with dp[0] = length of longest alternating subsequence ending with even, dp[1] = ending with odd. For each num, if even: dp[0] = dp[1] + 1; if odd: dp[1] = dp[0] + 1. Answer is max of all three cases.',
  ],
  functionName: 'maximumLength',
  params: ['nums'],
  starterCode: {
    javascript: `function maximumLength(nums) {
  let evens = 0, odds = 0;
  for (const n of nums) n % 2 === 0 ? evens++ : odds++;
  let dp = [0, 0];
  for (const n of nums) {
    if (n % 2 === 0) dp[0] = dp[1] + 1;
    else dp[1] = dp[0] + 1;
  }
  return Math.max(evens, odds, dp[0], dp[1]);
}`,
    typescript: `function maximumLength(nums: number[]): number {
  let evens = 0, odds = 0;
  for (const n of nums) n % 2 === 0 ? evens++ : odds++;
  let dp = [0, 0];
  for (const n of nums) {
    if (n % 2 === 0) dp[0] = dp[1] + 1;
    else dp[1] = dp[0] + 1;
  }
  return Math.max(evens, odds, dp[0], dp[1]);
}`,
    python: `def maximumLength(nums: list[int]) -> int:
    evens = sum(1 for n in nums if n % 2 == 0)
    odds = len(nums) - evens
    dp = [0, 0]
    for n in nums:
        if n % 2 == 0: dp[0] = dp[1] + 1
        else: dp[1] = dp[0] + 1
    return max(evens, odds, dp[0], dp[1])`,
  },
  visibleTests: [
    { args: [[1, 2, 3, 4]], expected: 4 },
    { args: [[1, 2, 1, 1, 2, 1, 2]], expected: 6 },
    { args: [[1, 3]], expected: 2 },
    { args: [[2, 4, 6]], expected: 3 },
  ],
  hiddenTests: [
    { args: [[1, 2]], expected: 2 },
    { args: [[2, 3, 4, 5]], expected: 4 },
    { args: [[1, 1, 1, 1]], expected: 4 },
    { args: [[2, 2, 2, 2]], expected: 4 },
    { args: [[1, 2, 1, 2, 1]], expected: 5 },
    { args: [[5, 3, 1]], expected: 3 },
    { args: [[1, 4, 2, 3, 1, 4]], expected: 4 },
  ],
};
