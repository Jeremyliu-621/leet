import type { Problem } from '../types';

export const problem: Problem = {
  id: 'sum-of-digit-differences-of-all-pairs',
  title: 'Sum of Digit Differences of All Pairs',
  difficulty: 'medium',
  tags: ['arrays', 'math', 'hash-map'],
  description: `You are given an array \`nums\` consisting of **positive** integers where all integers have the same number of digits.

The **digit difference** between two integers is the **count of different digits** that are in the same position in the two integers.

Return the **sum of the digit differences** between all pairs of integers in \`nums\`.`,
  constraints: [
    '`2 <= nums.length <= 10^5`',
    '`1 <= nums[i] < 10^9`',
    'All integers in `nums` have the same number of digits.',
  ],
  examples: [
    {
      input: 'nums = [13,23,12]',
      output: '4',
      explanation: 'Pairs: (13,23)→1, (13,12)→1, (23,12)→2. Sum = 4.',
    },
    {
      input: 'nums = [10,10,10,10]',
      output: '0',
      explanation: 'All integers are identical; digit difference is 0 for every pair.',
    },
  ],
  hints: [
    'Instead of comparing every pair, process each digit position independently.',
    'For position p, count the frequency of each digit 0–9. Pairs that agree at position p = sum of C(freq[d], 2). Pairs that differ = C(n,2) − agreeing pairs.',
    'Sum the differing pairs over all positions.',
  ],
  functionName: 'sumDigitDifferences',
  params: ['nums'],
  starterCode: {
    javascript: `function sumDigitDifferences(nums) {

}`,
    typescript: 'function sumDigitDifferences(nums: number[]): number {\n\n}',
    python: `def sumDigitDifferences(nums):
    pass`,
  },
  visibleTests: [
    { args: [[13, 23, 12]], expected: 4 },
    { args: [[10, 10, 10, 10]], expected: 0 },
  ],
  hiddenTests: [
    { args: [[100, 200, 300]], expected: 3 },
    { args: [[123, 456, 789]], expected: 9 },
    { args: [[11, 22, 33, 44]], expected: 12 },
    { args: [[11, 11, 11]], expected: 0 },
    { args: [[12, 21]], expected: 2 },
    { args: [[10, 20, 30, 10]], expected: 5 },
  ],
};
