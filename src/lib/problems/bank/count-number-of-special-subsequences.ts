import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-number-of-special-subsequences',
  title: 'Count Number of Special Subsequences',
  difficulty: 'hard',
  tags: ['arrays', 'dynamic-programming'],
  description: `A **special** subsequence is a subsequence that consists of only \`0\`s, then only \`1\`s, then only \`2\`s, where **each section is non-empty**. That is, a valid pattern is one or more \`0\`s followed by one or more \`1\`s followed by one or more \`2\`s.

Given an integer array \`nums\` containing only \`0\`, \`1\`, and \`2\`, return the **number of special subsequences** modulo \`10^9 + 7\`.`,
  constraints: [
    '`1 <= nums.length <= 10^5`',
    '`0 <= nums[i] <= 2`',
  ],
  examples: [
    {
      input: 'nums = [0,1,2,2]',
      output: '3',
      explanation: 'The special subsequences are: [0,1,2], [0,1,2] (second 2), and [0,1,2,2].',
    },
    {
      input: 'nums = [2,2,0,0]',
      output: '0',
      explanation: 'No 1 appears, so no special subsequence can be formed.',
    },
    {
      input: 'nums = [0,1,2,0,1,2]',
      output: '7',
    },
  ],
  hints: [
    'Use three running counts: `dp0` = number of non-empty subsequences of all 0s; `dp1` = number of subsequences matching 0+1+; `dp2` = number of special subsequences.',
    'When you see a 0: `dp0 = 2*dp0 + 1` (extend each existing 0+ sequence, or start a new one).',
    'When you see a 1: `dp1 = 2*dp1 + dp0` (extend each existing 01+ sequence, or append to a 0+ sequence). When you see a 2: `dp2 = 2*dp2 + dp1`. Take modulo 10^9+7 throughout.',
  ],
  functionName: 'countSpecialSubsequences',
  params: ['nums'],
  starterCode: {
    javascript: `function countSpecialSubsequences(nums) {

}`,
    typescript: `function countSpecialSubsequences(nums: number[]): number {

}`,
    python: `def countSpecialSubsequences(nums):
    pass`,
  },
  visibleTests: [
    { args: [[0, 1, 2, 2]], expected: 3 },
    { args: [[2, 2, 0, 0]], expected: 0 },
    { args: [[0, 1, 2, 0, 1, 2]], expected: 7 },
  ],
  hiddenTests: [
    { args: [[0, 1, 2]], expected: 1 },
    { args: [[0, 0, 1, 1, 2, 2]], expected: 27 },
    { args: [[0]], expected: 0 },
    { args: [[1, 2]], expected: 0 },
    { args: [[0, 0, 0, 1, 2]], expected: 7 },
    { args: [[0, 1, 1, 2, 2]], expected: 9 },
  ],
};
