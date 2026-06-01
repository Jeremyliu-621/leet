import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-the-number-of-subsequences-with-equal-gcd',
  title: 'Find the Number of Subsequences With Equal GCD',
  difficulty: 'hard',
  tags: ['arrays', 'math', 'dynamic-programming'],
  description: `Given an integer array \`nums\`, return the number of **pairs** of non-empty subsequences \`(seq1, seq2)\` of \`nums\` such that \`gcd(seq1) == gcd(seq2)\`.

Since the answer may be very large, return it **modulo** \`10^9 + 7\`.

Two subsequences are considered different if they have different index sets.`,
  constraints: [
    '1 <= nums.length <= 200',
    '1 <= nums[i] <= 200',
  ],
  examples: [
    {
      input: 'nums = [2,3,4]',
      output: '4',
      explanation: 'Subsequences with GCD 1: {3},{4},{3,4} — wait, only pairs count. Pairs sharing GCD: ({2},{2,4}) gcd=2, ({3},{3}) impossible since same index... The 4 valid pairs are the unordered pairs of distinct index-sets with matching GCD.',
    },
    {
      input: 'nums = [2,2]',
      output: '3',
      explanation: 'There are 3 non-empty subsequences: {nums[0]}, {nums[1]}, {nums[0],nums[1]}. All have GCD 2. Pairs: ({0},{1}), ({0},{0,1}), ({1},{0,1}) = 3 pairs.',
    },
  ],
  hints: [
    'Use a DP map from gcd value → count of subsequences with that GCD.',
    'For each number x in nums, update: for each existing (g, cnt), create/update (gcd(g,x), cnt); also start a new subsequence {x}.',
    'After processing all elements, the answer is sum of C(cnt, 2) = cnt*(cnt-1)/2 for each GCD value.',
  ],
  functionName: 'countSubseqEqualGCD',
  params: ['nums'],
  starterCode: {
    javascript: 'function countSubseqEqualGCD(nums) {\n  \n}\n',
    typescript: 'function countSubseqEqualGCD(nums: number[]): number {\n  \n}',
    python: 'def countSubseqEqualGCD(nums):\n    pass\n',
  },
  visibleTests: [
    { args: [[2, 3, 4]], expected: 4 },
    { args: [[2, 2]], expected: 3 },
  ],
  hiddenTests: [
    { args: [[1, 2]], expected: 1 },
    { args: [[1, 2, 3]], expected: 10 },
    { args: [[6]], expected: 0 },
    { args: [[2, 4, 6]], expected: 10 },
  ],
};
