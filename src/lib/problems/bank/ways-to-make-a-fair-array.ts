import type { Problem } from '../types';

export const problem: Problem = {
  id: 'ways-to-make-a-fair-array',
  title: 'Ways to Make a Fair Array',
  difficulty: 'medium',
  tags: ['arrays', 'math'],
  description: `You are given an integer array \`nums\`. You can choose **exactly one** index and remove the element at that index. The remaining elements shift left to fill the gap.

The resulting array is **fair** if the sum of the elements at **even** indices equals the sum of the elements at **odd** indices.

Return the **number of indices** you could choose such that after the removal the array is fair.

**Key insight:** When you remove index \`i\`, elements to the left of \`i\` keep their parity, but elements to the right of \`i\` have their parities **flipped** (what was at an even index becomes odd, and vice versa).`,
  constraints: [
    '1 <= nums.length <= 10^5',
    '1 <= nums[i] <= 10^4',
  ],
  examples: [
    {
      input: 'nums = [2,1,6,4]',
      output: '1',
      explanation: 'Remove index 1 (value 1): [2,6,4] → even-sum = 2+4 = 6, odd-sum = 6. Fair! Other indices do not yield a fair array.',
    },
    {
      input: 'nums = [1,1,1]',
      output: '3',
      explanation: 'Any single removal yields [1,1] with even-sum = odd-sum = 1. All 3 indices work.',
    },
    {
      input: 'nums = [1,2,3]',
      output: '0',
      explanation: 'No removal yields a fair array.',
    },
  ],
  hints: [
    'Track prefix sums for even-indexed and odd-indexed elements separately.',
    'When you remove index i: elements 0..i-1 keep their parity; elements i+1..n-1 flip their parity.',
    'After removing index i, new even-sum = prefixEven[i] + (totalOdd - prefixOdd[i]) and new odd-sum = prefixOdd[i] + (totalEven - prefixEven[i]) — where prefixEven/Odd excludes the removed element.',
  ],
  functionName: 'waysToMakeFair',
  params: ['nums'],
  starterCode: {
    javascript: `function waysToMakeFair(nums) {
  // Track prefix even/odd sums; check fairness after each removal.
}`,
    typescript: `function waysToMakeFair(nums: number[]): number {
  // Track prefix even/odd sums; check fairness after each removal.
}`,
    python: `def waysToMakeFair(nums):
    # Track prefix even/odd sums; check fairness after each removal.
    pass
`,
  },
  visibleTests: [
    { args: [[2, 1, 6, 4]], expected: 1 },
    { args: [[1, 1, 1]], expected: 3 },
    { args: [[1, 2, 3]], expected: 0 },
  ],
  hiddenTests: [
    { args: [[1]], expected: 1 },
    { args: [[2, 2, 2, 2]], expected: 0 },
    { args: [[1, 2]], expected: 0 },
    { args: [[5, 3, 1]], expected: 0 },
    { args: [[1, 3, 5, 2, 4, 6]], expected: 1 },
    { args: [[10]], expected: 1 },
  ],
};
