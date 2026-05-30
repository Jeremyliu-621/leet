import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-the-maximum-factor-score-of-array',
  title: 'Find the Maximum Factor Score of Array',
  difficulty: 'medium',
  tags: ['arrays', 'math'],
  description: `You are given an integer array \`nums\`.

The **factor score** of an array is defined as the **product** of the **LCM** and the **GCD** of all elements in the array.

Return the **maximum** factor score of \`nums\` after removing **at most one** element from it.

**Note:** Both the LCM and GCD of a single-element array are equal to that element. The factor score of an empty array is 0.`,
  constraints: [
    '1 <= nums.length <= 100',
    '1 <= nums[i] <= 10^6',
  ],
  examples: [
    {
      input: 'nums = [2, 4, 8, 16]',
      output: '64',
      explanation: 'Remove 2: remaining = [4, 8, 16]. GCD = 4, LCM = 16, score = 64. This is the maximum.',
    },
    {
      input: 'nums = [1, 2, 3, 4, 5]',
      output: '60',
      explanation: 'No removal gives GCD = 1, LCM = 60, score = 60. No removal improves this.',
    },
    {
      input: 'nums = [6, 4]',
      output: '36',
      explanation: 'Remove 4: [6], score = 36. Remove 6: [4], score = 16. No removal: GCD=2, LCM=12, score=24. Maximum is 36.',
    },
  ],
  hints: [
    'Try all n+1 options: no removal, or remove exactly one element at index i.',
    'For each resulting array, compute its GCD using the Euclidean algorithm and its LCM using lcm(a,b) = a / gcd(a,b) * b.',
    'Use BigInt or be careful about overflow when computing LCM for large values.',
  ],
  functionName: 'maxFactorScore',
  params: ['nums'],
  starterCode: {
    javascript: `function maxFactorScore(nums) {
  // your code here
}`,
    typescript: `function maxFactorScore(nums: number[]): number {
  // your code here
}`,
    python: `def maxFactorScore(nums):
    # your code here
    pass`,
  },
  visibleTests: [
    { args: [[2, 4, 8, 16]], expected: 64 },
    { args: [[1, 2, 3, 4, 5]], expected: 60 },
    { args: [[6, 4]], expected: 36 },
    { args: [[3]], expected: 9 },
    { args: [[2, 3]], expected: 9 },
  ],
  hiddenTests: [
    { args: [[12, 8, 6]], expected: 96 },
    { args: [[10]], expected: 100 },
    { args: [[6, 10, 15]], expected: 150 },
    { args: [[2, 6, 3]], expected: 18 },
    { args: [[4, 4, 4]], expected: 16 },
    { args: [[1, 1, 1, 1]], expected: 1 },
    { args: [[5, 10, 20]], expected: 200 },
    { args: [[7, 14]], expected: 196 },
  ],
};
