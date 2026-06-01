import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-the-sum-of-good-subsequences',
  title: 'Find the Sum of Good Subsequences',
  difficulty: 'hard',
  tags: ['arrays', 'hash-map', 'dynamic-programming'],
  description: `You are given an integer array \`nums\`. A **good subsequence** is a subsequence of \`nums\` where the **absolute difference** between consecutive elements is at most \`1\`.

Return the **sum of all elements** across every good subsequence of \`nums\`, modulo \`10^9 + 7\`.

**Note:** A subsequence preserves relative order but may skip elements. Two subsequences are different if they come from different index sets.`,
  constraints: [
    '1 <= nums.length <= 10^5',
    '0 <= nums[i] <= 10^5',
  ],
  examples: [
    {
      input: 'nums = [1,2,1]',
      output: '16',
      explanation: 'Good subsequences: [1] (two of them, sum 1 each), [2] (sum 2), [1,2] (two of them, sum 3 each), [2,1] (sum 3), [1,2,1] (sum 4). Total = 1+1+2+3+3+4 = 16 (note: [1,1] has |1-1|=0≤1, also valid, sum 2). Recount: [1](idx0)=1, [1](idx2)=1, [2]=2, [1,2](idx0,1)=3, [2,1]=3, [1,2](idx0,1) - wait also [1,1](idx0,idx2)=2 is valid. So: single [1]x2, [2]x1, pairs [1,2]x2, [2,1]x1, [1,1]x1, triple [1,2,1]=4. Sum=1+1+2+3+3+2+4=16.',
    },
    {
      input: 'nums = [3,2,3,2]',
      output: '80',
      explanation: 'All good subsequences where adjacent values differ by at most 1. There are many such subsequences; their element sums add up to 80.',
    },
    {
      input: 'nums = [1,3,5]',
      output: '9',
      explanation: 'Since |1-3|=2>1 and |3-5|=2>1, no two elements can be adjacent in a good subsequence. Only single-element subsequences are good: [1]+[3]+[5]=9.',
    },
  ],
  hints: [
    'Use a hash map DP: for each value v, track cnt[v] = count of good subsequences ending with v, and dp[v] = sum of elements in those subsequences.',
    'When processing element x, new subsequences ending at this position can: start fresh (count=1, sum=x), or extend subsequences ending with x-1, x, or x+1.',
    'For value x: new_count = 1 + cnt[x-1] + cnt[x] + cnt[x+1]. new_sum = x * new_count + dp[x-1] + dp[x] + dp[x+1]. Update cnt[x] += new_count and dp[x] += new_sum.',
    'Use BigInt or work entirely in modular arithmetic (mod 10^9+7) since values can be very large.',
  ],
  functionName: 'sumOfGoodSubsequences',
  params: ['nums'],
  starterCode: {
    javascript: `function sumOfGoodSubsequences(nums) {

}`,
    typescript: `function sumOfGoodSubsequences(nums: number[]): number {

}`,
    python: `def sumOfGoodSubsequences(nums):
    pass`,
  },
  visibleTests: [
    { args: [[1, 2, 1]], expected: 16 },
    { args: [[3, 2, 3, 2]], expected: 80 },
    { args: [[1, 3, 5]], expected: 9 },
    { args: [[1]], expected: 1 },
  ],
  hiddenTests: [
    { args: [[1, 1]], expected: 4 },
    { args: [[1, 2, 3]], expected: 20 },
    { args: [[2, 2, 2]], expected: 24 },
    { args: [[5, 4, 3]], expected: 40 },
    { args: [[1, 2, 1, 2]], expected: 48 },
    { args: [[4, 4, 4, 4]], expected: 128 },
    { args: [[0, 1, 0]], expected: 4 },
  ],
};
