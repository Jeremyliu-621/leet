import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-pairs-with-even-sum',
  title: 'Count Pairs With Even Sum',
  difficulty: 'easy',
  tags: ['arrays', 'math'],
  description: `Given an integer array \`nums\`, return the number of pairs \`(i, j)\` where \`i < j\` and \`nums[i] + nums[j]\` is even.

A sum of two integers is even when both integers share the same parity (both even or both odd).`,
  constraints: [
    '1 <= nums.length <= 100',
    '1 <= nums[i] <= 100',
  ],
  examples: [
    {
      input: 'nums = [1,2,3,4,5]',
      output: '4',
      explanation: 'The even-sum pairs are (1,3), (1,5), (3,5) from odd pairs [3 pairs] and (2,4) from even pairs [1 pair]. Total = 4.',
    },
    {
      input: 'nums = [2,4,6,8]',
      output: '6',
      explanation: 'All 4 numbers are even, so every pair sums to even: C(4,2) = 6.',
    },
    {
      input: 'nums = [1,3]',
      output: '1',
      explanation: '1 + 3 = 4 which is even.',
    },
  ],
  hints: [
    'A sum is even iff both numbers have the same parity. Count how many are even (e) and how many are odd (o).',
    'The number of valid pairs is C(e, 2) + C(o, 2) = e*(e-1)/2 + o*(o-1)/2.',
    'You only need one pass through nums to count even and odd elements.',
  ],
  functionName: 'countPairsWithEvenSum',
  params: ['nums'],
  starterCode: {
    javascript: `function countPairsWithEvenSum(nums) {
  let even = 0, odd = 0;
  for (const n of nums) n % 2 === 0 ? even++ : odd++;
  return (even * (even - 1) / 2) + (odd * (odd - 1) / 2);
}`,
    typescript: `function countPairsWithEvenSum(nums: number[]): number {
  let even = 0, odd = 0;
  for (const n of nums) n % 2 === 0 ? even++ : odd++;
  return (even * (even - 1) / 2) + (odd * (odd - 1) / 2);
}`,
    python: `def countPairsWithEvenSum(nums: list[int]) -> int:
    even = sum(1 for n in nums if n % 2 == 0)
    odd = len(nums) - even
    return even * (even - 1) // 2 + odd * (odd - 1) // 2`,
  },
  visibleTests: [
    { args: [[1, 2, 3, 4, 5]], expected: 4 },
    { args: [[2, 4, 6, 8]], expected: 6 },
    { args: [[1, 3]], expected: 1 },
  ],
  hiddenTests: [
    { args: [[1]], expected: 0 },
    { args: [[2]], expected: 0 },
    { args: [[1, 2]], expected: 0 },
    { args: [[2, 2]], expected: 1 },
    { args: [[1, 1]], expected: 1 },
    { args: [[1, 2, 3]], expected: 1 },
    { args: [[2, 4, 6]], expected: 3 },
    { args: [[1, 3, 5]], expected: 3 },
    { args: [[10, 20, 30, 40, 50]], expected: 10 },
    { args: [[1, 2, 3, 4, 5, 6]], expected: 6 },
  ],
};
