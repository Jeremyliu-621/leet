import type { Problem } from '../types';

export const problem: Problem = {
  id: 'greatest-sum-divisible-by-three',
  title: 'Greatest Sum Divisible by Three',
  difficulty: 'medium',
  tags: ['arrays', 'dynamic-programming'],
  description: `Given an integer array \`nums\`, return the **maximum possible sum** of elements you can choose from the array such that the sum is **divisible by three**.`,
  constraints: [
    '1 <= nums.length <= 4 * 10^4',
    '1 <= nums[i] <= 10^4',
  ],
  examples: [
    {
      input: 'nums = [3,6,5,1,8]',
      output: '18',
      explanation: 'Pick elements 3, 6, 1, and 8: 3+6+1+8=18. 18 is divisible by 3.',
    },
    {
      input: 'nums = [4]',
      output: '0',
      explanation: 'No non-empty subset sums to a value divisible by 3, so the answer is 0.',
    },
    {
      input: 'nums = [1,2,3,4,4]',
      output: '12',
      explanation: 'Pick elements 1, 3, 4, 4: 1+3+4+4=12. 12 is divisible by 3.',
    },
  ],
  hints: [
    'Track the maximum achievable sum for each remainder (0, 1, 2) when divided by 3.',
    'For each new number, update the dp array: dp[r] = max sum whose remainder mod 3 is r.',
    'The answer is dp[0].',
  ],
  functionName: 'maxSumDivThree',
  params: ['nums'],
  starterCode: {
    javascript: `function maxSumDivThree(nums) {
  let dp = [0, -Infinity, -Infinity];
  for (const n of nums) {
    const nd = [...dp];
    for (let r = 0; r < 3; r++) {
      if (dp[r] === -Infinity) continue;
      const nr = (r + n % 3) % 3;
      nd[nr] = Math.max(nd[nr], dp[r] + n);
    }
    dp = nd;
  }
  return dp[0];
}`,
    typescript: `function maxSumDivThree(nums: number[]): number {
  let dp = [0, -Infinity, -Infinity];
  for (const n of nums) {
    const nd = [...dp];
    for (let r = 0; r < 3; r++) {
      if (dp[r] === -Infinity) continue;
      const nr = (r + n % 3) % 3;
      nd[nr] = Math.max(nd[nr], dp[r] + n);
    }
    dp = nd;
  }
  return dp[0];
}`,
    python: `def maxSumDivThree(nums):
    dp = [0, float('-inf'), float('-inf')]
    for n in nums:
        nd = dp[:]
        for r in range(3):
            if dp[r] == float('-inf'): continue
            nr = (r + n % 3) % 3
            nd[nr] = max(nd[nr], dp[r] + n)
        dp = nd
    return dp[0]`,
  },
  visibleTests: [
    { args: [[3, 6, 5, 1, 8]], expected: 18 },
    { args: [[4]], expected: 0 },
    { args: [[1, 2, 3, 4, 4]], expected: 12 },
  ],
  hiddenTests: [
    { args: [[2, 19, 11, 4]], expected: 36 },
    { args: [[0, 0, 0]], expected: 0 },
    { args: [[9, 9, 9]], expected: 27 },
    { args: [[2, 2, 2]], expected: 6 },
    { args: [[1, 1, 1, 1]], expected: 3 },
    { args: [[5, 5]], expected: 0 },
    { args: [[3]], expected: 3 },
    { args: [[6, 3, 1, 2]], expected: 12 },
  ],
};
