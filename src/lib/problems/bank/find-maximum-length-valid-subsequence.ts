import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-maximum-length-valid-subsequence',
  title: 'Find the Maximum Length of Valid Subsequence I',
  difficulty: 'medium',
  tags: ['dynamic-programming'],
  description: `You are given an integer array \`nums\`. A subsequence of \`nums\` with length \`k\` is called **valid** if the following condition holds:

For every pair of consecutive elements \`sub[i]\` and \`sub[i+1]\`, \`(sub[i] + sub[i+1]) % 2\` is the same for all consecutive pairs in the subsequence.

In other words, all adjacent-pair sums in the subsequence must have the same parity.

Return the **length** of the longest valid subsequence of \`nums\`.`,
  constraints: [
    '2 <= nums.length <= 2 * 10^5',
    '1 <= nums[i] <= 10^7',
  ],
  examples: [
    {
      input: 'nums = [1,2,3,4]',
      output: '4',
      explanation: 'The alternating subsequence [1,2,3,4]: each adjacent sum alternates even/odd... Actually all elements give parity pattern even for (1+2), odd for (2+3), even for (3+4) — not same. The longest valid: [1,3] (all odd sums) or [2,4] (all even sums) length 2, or alternating [1,2,3,4] — (1+2)%2=1, (2+3)%2=1, (3+4)%2=1 all same! Length 4.',
    },
    {
      input: 'nums = [1,2,1,1,2,1,2]',
      output: '6',
      explanation: 'The subsequence [1,2,1,2,1,2] has all adjacent sums odd. Length 6.',
    },
    {
      input: 'nums = [1,3]',
      output: '2',
      explanation: '[1,3]: (1+3)%2=0 — consistent. Length 2.',
    },
  ],
  hints: [
    'The sum of two numbers has the same parity iff both are even or both are odd (even sum), or one is even and one is odd (odd sum).',
    'There are only two cases: all adjacent pairs sum to even (all same parity), or all adjacent pairs sum to odd (alternating parities).',
    'Count: (a) longest subsequence of all-even numbers, (b) longest subsequence of all-odd numbers, (c) longest alternating even-odd subsequence.',
  ],
  functionName: 'maximumLength',
  params: ['nums'],
  starterCode: {
    javascript: 'function maximumLength(nums) {\n\n}',
    typescript: "function maximumLength(nums: number[]): number {\n\n}",

    python: 'def maximumLength(nums):\n    pass',
  },
  visibleTests: [
    { args: [[1, 2, 3, 4]], expected: 4 },
    { args: [[1, 2, 1, 1, 2, 1, 2]], expected: 6 },
    { args: [[1, 3]], expected: 2 },
  ],
  hiddenTests: [
    { args: [[2, 4, 6]], expected: 3 },
    { args: [[1, 3, 5]], expected: 3 },
    { args: [[1, 2]], expected: 2 },
    { args: [[2, 1, 4, 3]], expected: 4 },
    { args: [[1, 1, 1]], expected: 3 },
    { args: [[2, 2, 2]], expected: 3 },
  ],
};
