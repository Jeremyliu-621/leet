import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-the-maximum-length-of-valid-subsequence-i',
  title: 'Find the Maximum Length of Valid Subsequence I',
  difficulty: 'medium',
  tags: ['arrays', 'math'],
  description: `You are given an integer array \`nums\`.

A subsequence \`sub\` of \`nums\` with length \`x\` is called **valid** if it satisfies:
- \`(sub[0] + sub[1]) % 2 == (sub[1] + sub[2]) % 2 == ... == (sub[x - 2] + sub[x - 1]) % 2\`

Return the **length** of the **longest valid subsequence** of \`nums\`.

**Constraints:**
- \`2 ≤ nums.length ≤ 2 × 10^5\`
- \`1 ≤ nums[i] ≤ 10^7\``,
  examples: [
    {
      input: 'nums = [1,2,3,4]',
      output: '4',
      explanation: 'The longest valid subsequence is [1,2,3,4]: sums 3,5,7 all have remainder 1 mod 2.',
    },
    {
      input: 'nums = [1,2,1,1,2,1,1]',
      output: '5',
      explanation: 'The subsequence [1,1,1,1,1] (all odd) has length 5; all consecutive sums are even.',
    },
    {
      input: 'nums = [1,3]',
      output: '2',
      explanation: 'Both elements are odd, so [1,3] has consecutive sum 4 % 2 = 0. Length 2.',
    },
  ],
  constraints: [
    'A valid subsequence is one where every consecutive pair has the same sum parity.',
    'This happens when all elements have the same parity OR they strictly alternate parities.',
    'Count evens and odds. The answer is max(count_even, count_odd, alternating_length).',
    'Alternating length = 2 * min(count_even, count_odd) + (1 if they differ, else 0).',
  ],
  hints: [
    'The condition (a+b)%2 == (b+c)%2 means every pair of consecutive elements has the same parity sum.',
    'This is satisfied when either (1) all elements have the same parity, or (2) parities strictly alternate.',
    'Count the number of even and odd elements. The best same-parity subsequence is max(count_even, count_odd).',
    'The best alternating subsequence has length 2*min(count_even, count_odd) + (1 if unequal counts).',
    'Return the maximum of these two lengths.',
  ],
  params: ['nums'],
  starterCode: {
    javascript: `function maximumLength(nums) {

}`,
    typescript: `function maximumLength(nums: number[]): number {

}`,
    python: `def maximumLength(nums: list[int]) -> int:
    pass`,
  },
  functionName: 'maximumLength',
  visibleTests: [
    { args: [[1, 2, 3, 4]], expected: 4 },
    { args: [[1, 2, 1, 1, 2, 1, 1]], expected: 5 },
    { args: [[1, 3]], expected: 2 },
  ],
  hiddenTests: [
    { args: [[2, 2]], expected: 2 },
    { args: [[1, 2]], expected: 2 },
    { args: [[2, 4, 6]], expected: 3 },
    { args: [[1, 3, 5]], expected: 3 },
    { args: [[1, 2, 3]], expected: 3 },
    { args: [[2, 1, 4, 3, 6]], expected: 5 },
    { args: [[1, 2, 1, 2, 1]], expected: 5 },
  ],
};
