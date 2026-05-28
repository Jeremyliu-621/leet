import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-gcd-of-array',
  title: 'Find Greatest Common Divisor of Array',
  difficulty: 'easy',
  tags: ['arrays', 'math'],
  description: `Given an integer array \`nums\`, return the **greatest common divisor** of the **smallest** number and **largest** number in \`nums\`.

The **greatest common divisor** of two numbers is the largest positive integer that evenly divides both numbers.`,
  constraints: [
    '2 <= nums.length <= 1000',
    '1 <= nums[i] <= 1000',
  ],
  examples: [
    {
      input: 'nums = [2,5,6,9,10]',
      output: '2',
      explanation: 'Min = 2, max = 10. GCD(2, 10) = 2.',
    },
    {
      input: 'nums = [7,5,6,8,3]',
      output: '1',
      explanation: 'Min = 3, max = 8. GCD(3, 8) = 1.',
    },
    {
      input: 'nums = [3,3]',
      output: '3',
    },
  ],
  hints: [
    'Level 1: Find the minimum and maximum of the array.',
    'Level 2: Compute their GCD using the Euclidean algorithm: gcd(a, b) = gcd(b, a % b) with base case gcd(a, 0) = a.',
    'Level 3: const gcd=(a,b)=>b===0?a:gcd(b,a%b);return gcd(Math.min(...nums),Math.max(...nums));',
  ],
  functionName: 'findGCD',
  params: ['nums'],
  starterCode: {
    javascript: 'function findGCD(nums) {\n  // your code here\n}\n',
    typescript: "function findGCD(nums: number[]): number {\n  // your code here\n}",

    python: 'def findGCD(nums):\n    # your code here\n    pass\n',
  },
  visibleTests: [
    { args: [[2, 5, 6, 9, 10]], expected: 2 },
    { args: [[7, 5, 6, 8, 3]], expected: 1 },
    { args: [[3, 3]], expected: 3 },
  ],
  hiddenTests: [
    { args: [[1, 2, 3, 4, 5]], expected: 1 },
    { args: [[4, 8, 12, 16]], expected: 4 },
    { args: [[6, 10]], expected: 2 },
    { args: [[100, 75, 50, 25]], expected: 25 },
    { args: [[1, 1000]], expected: 1 },
  ],
};
