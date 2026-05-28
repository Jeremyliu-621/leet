import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximum-prime-difference',
  title: 'Maximum Prime Difference',
  difficulty: 'medium',
  tags: ['arrays', 'math'],
  description: `You are given an integer array \`nums\`.

Return the **maximum** difference between the indices of two elements in \`nums\` that are both **prime** numbers.

It is guaranteed that at least **two** elements in \`nums\` are prime.`,
  constraints: [
    '2 <= nums.length <= 500',
    '1 <= nums[i] <= 100',
    'There are at least two prime numbers in nums.',
  ],
  examples: [
    {
      input: 'nums = [4,2,9,5,3]',
      output: '3',
      explanation: 'Primes are 2 (index 1), 5 (index 3), 3 (index 4). Max difference = 4 - 1 = 3.',
    },
    {
      input: 'nums = [1,2,1,1,3]',
      output: '3',
      explanation: 'Primes: 2 at index 1 and 3 at index 4. Maximum difference = 4 - 1 = 3.',
    },
    {
      input: 'nums = [2,1,3]',
      output: '2',
      explanation: 'Primes: 2 (index 0) and 3 (index 2). Max difference = 2 - 0 = 2.',
    },
  ],
  hints: [
    'A prime is any integer > 1 with no divisors other than 1 and itself.',
    'Scan left-to-right: find the first prime index and the last prime index.',
    'Return lastPrimeIndex - firstPrimeIndex.',
  ],
  functionName: 'maximumPrimeDifference',
  params: ['nums'],
  starterCode: {
    javascript: 'function maximumPrimeDifference(nums) {\n  \n}\n',
    typescript: "function maximumPrimeDifference(nums: number[]): number {\n  \n}",

    python: 'def maximumPrimeDifference(nums):\n    pass\n',
  },
  visibleTests: [
    { args: [[4,2,9,5,3]], expected: 3 },
    { args: [[2,1,3]], expected: 2 },
    { args: [[5,3]], expected: 1 },
  ],
  hiddenTests: [
    { args: [[2,3]], expected: 1 },
    { args: [[1,2,1,1,3]], expected: 3 },
    { args: [[4,6,2,4,8,4,6,2]], expected: 5 },
    { args: [[97,2,1,4,6,97]], expected: 5 },
    { args: [[2,2,2,2,2]], expected: 4 },
  ],
};
