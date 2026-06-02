import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-greatest-common-divisor-of-array',
  title: 'Find Greatest Common Divisor of Array',
  difficulty: 'easy',
  tags: ['arrays', 'math'],
  description: `Given an integer array \`nums\`, return the **greatest common divisor** of the smallest number and largest number in \`nums\`.

The greatest common divisor of two numbers is the largest positive integer that evenly divides both numbers.`,
  constraints: [
    '2 <= nums.length <= 1000',
    '1 <= nums[i] <= 1000',
  ],
  examples: [
    {
      input: 'nums = [2,5,6,9,10]',
      output: '2',
      explanation: 'Smallest = 2, largest = 10. GCD(2, 10) = 2.',
    },
    {
      input: 'nums = [7,5,6,8,3]',
      output: '1',
      explanation: 'Smallest = 3, largest = 8. GCD(3, 8) = 1.',
    },
  ],
  hints: [
    'Find the min and max of the array, then compute GCD using the Euclidean algorithm.',
    'The Euclidean algorithm: gcd(a, b) = gcd(b, a % b), with base case gcd(a, 0) = a.',
    'In Python, use `math.gcd(min(nums), max(nums))`. In JavaScript, implement a recursive gcd function.',
  ],
  functionName: 'findGCD',
  params: ['nums'],
  starterCode: {
    javascript: `function findGCD(nums) {
  function gcd(a, b) { return b === 0 ? a : gcd(b, a % b); }
  return gcd(Math.min(...nums), Math.max(...nums));
}`,
    typescript: `function findGCD(nums: number[]): number {
  function gcd(a: number, b: number): number { return b === 0 ? a : gcd(b, a % b); }
  return gcd(Math.min(...nums), Math.max(...nums));
}`,
    python: `def findGCD(nums):
    from math import gcd
    return gcd(min(nums), max(nums))`,
  },
  visibleTests: [
    { args: [[2, 5, 6, 9, 10]], expected: 2 },
    { args: [[7, 5, 6, 8, 3]], expected: 1 },
  ],
  hiddenTests: [
    { args: [[3, 3]], expected: 3 },
    { args: [[10, 5, 1]], expected: 1 },
    { args: [[4, 8, 12]], expected: 4 },
    { args: [[6, 9]], expected: 3 },
  ],
};
