import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-even-sum-pairs',
  title: 'Count Even-Sum Pairs',
  difficulty: 'easy',
  tags: ['arrays', 'math'],
  description: `Given an integer array \`nums\`, return the number of pairs \`(i, j)\` where \`i < j\` and \`nums[i] + nums[j]\` is **even**.

A sum of two integers is even if and only if both integers have the same parity (both even or both odd). Count how many such index pairs exist in the array.`,
  constraints: [
    '1 <= nums.length <= 10^5',
    '-10^4 <= nums[i] <= 10^4',
    'The answer fits in a 32-bit signed integer',
  ],
  examples: [
    {
      input: 'nums = [1,2,3,4,5]',
      output: '4',
      explanation: 'Even-sum pairs: (1,3), (1,5), (3,5) from the odd group and (2,4) from the even group — 3 + 1 = 4 pairs total.',
    },
    {
      input: 'nums = [2,4,6,8]',
      output: '6',
      explanation: 'All 4 elements are even, so any two of them sum to an even number. C(4,2) = 6.',
    },
  ],
  hints: [
    'A sum is even when both numbers are even, or both are odd. You only need to track how many of each parity exist.',
    'Count the number of even values (`e`) and odd values (`o`) in the array.',
    'The answer is C(e, 2) + C(o, 2) = e*(e-1)/2 + o*(o-1)/2. This runs in O(n) time.',
  ],
  functionName: 'countEvenSumPairs',
  params: ['nums'],
  starterCode: {
    javascript: `function countEvenSumPairs(nums) {
  let even = 0, odd = 0;
  for (const n of nums) n % 2 === 0 ? even++ : odd++;
  return (even * (even - 1) / 2) + (odd * (odd - 1) / 2);
}`,
    typescript: `function countEvenSumPairs(nums: number[]): number {
  let even = 0, odd = 0;
  for (const n of nums) n % 2 === 0 ? even++ : odd++;
  return (even * (even - 1) / 2) + (odd * (odd - 1) / 2);
}`,
    python: `def countEvenSumPairs(nums):
    even = sum(1 for n in nums if n % 2 == 0)
    odd = len(nums) - even
    return even * (even - 1) // 2 + odd * (odd - 1) // 2`,
  },
  visibleTests: [
    { args: [[1, 2, 3, 4, 5]], expected: 4 },
    { args: [[2, 4, 6, 8]], expected: 6 },
    { args: [[1, 2]], expected: 0 },
  ],
  hiddenTests: [
    { args: [[1, 3, 5, 7]], expected: 6 },
    { args: [[1, 1, 1]], expected: 3 },
    { args: [[2, 2, 2]], expected: 3 },
    { args: [[1, 2, 3]], expected: 1 },
    { args: [[4, 1, 3, 2, 5, 6]], expected: 6 },
    { args: [[10, 20, 30]], expected: 3 },
    { args: [[7, 7, 7, 7, 7]], expected: 10 },
  ],
};
