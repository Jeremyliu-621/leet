import type { Problem } from '../types';

export const problem: Problem = {
  id: 'sum-of-floored-pairs',
  title: 'Sum of Floored Pairs',
  difficulty: 'hard',
  tags: ['binary-indexed-tree', 'math', 'arrays'],
  description: `Given an integer array \`nums\`, return the sum of \`floor(nums[i] / nums[j])\` for all pairs of indices \`0 <= i, j < nums.length\`.

Since the answer may be very large, return it **modulo 10^9 + 7**.`,
  constraints: [
    '1 <= nums.length <= 10^5',
    '1 <= nums[i] <= 10^5',
  ],
  examples: [
    {
      input: 'nums = [2,5,9]',
      output: '10',
      explanation: 'floor(2/2)+floor(2/5)+floor(2/9) + floor(5/2)+floor(5/5)+floor(5/9) + floor(9/2)+floor(9/5)+floor(9/9) = 1+0+0+2+1+0+4+1+1 = 10.',
    },
    {
      input: 'nums = [7,7,7,7,7,7,7]',
      output: '49',
      explanation: 'Every floor(7/7) = 1, and there are 7×7 = 49 pairs.',
    },
    {
      input: 'nums = [1,2]',
      output: '4',
      explanation: 'floor(1/1)+floor(1/2)+floor(2/1)+floor(2/2) = 1+0+2+1 = 4.',
    },
  ],
  hints: [
    'Instead of iterating over all O(n²) pairs, iterate over each distinct value v. For each multiplier m=1,2,..., all elements x in [m·v, (m+1)·v − 1] satisfy floor(x/v) = m. Count them using a prefix frequency array.',
    'Let cnt[v] = frequency of v and prefix[v] = cumulative count of elements ≤ v. For each v, iterate m from 1 until m·v > MAX_VAL. The contribution to the sum is cnt[v] × m × (prefix[min((m+1)·v−1, MAX)] − prefix[m·v−1]).',
    'The total work is O(MAX_VAL · H(MAX_VAL)) where H is the harmonic series sum ≈ ln(MAX_VAL), giving O(MAX_VAL log MAX_VAL) ≈ O(10^5 × 17) which is efficient.',
  ],
  functionName: 'sumOfFlooredPairs',
  params: ['nums'],
  starterCode: {
    javascript: `function sumOfFlooredPairs(nums) {

}`,
    typescript: `function sumOfFlooredPairs(nums: number[]): number {

}`,
    python: `def sumOfFlooredPairs(nums):
    pass
`,
  },
  visibleTests: [
    { args: [[2, 5, 9]], expected: 10 },
    { args: [[7, 7, 7, 7, 7, 7, 7]], expected: 49 },
    { args: [[1, 2]], expected: 4 },
  ],
  hiddenTests: [
    { args: [[1]], expected: 1 },
    { args: [[3]], expected: 1 },
    { args: [[1, 1, 1]], expected: 9 },
    { args: [[2, 2]], expected: 4 },
    { args: [[1, 2, 3]], expected: 9 },
    { args: [[10, 10]], expected: 4 },
    { args: [[1, 3, 5, 7]], expected: 23 },
    { args: [[2, 5, 3]], expected: 7 },
    { args: [[4, 4, 4]], expected: 9 },
    { args: [[1, 2, 4, 8]], expected: 26 },
  ],
};
