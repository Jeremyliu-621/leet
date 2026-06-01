import type { Problem } from '../types';

export const problem: Problem = {
  id: 'distinct-prime-factors-of-product-of-array',
  title: 'Distinct Prime Factors of Product of Array',
  difficulty: 'easy',
  tags: ['arrays', 'math', 'hash-map'],
  description: `Given an array of positive integers \`nums\`, return the number of **distinct prime factors** in the product of all elements of \`nums\`.

**Note** that a number can be expressed as a product of prime numbers in a **unique** way called **prime factorization**. The prime factors of \`6\` are \`2\` and \`3\`, so the prime factors of \`6\` in its prime factorization are \`{2, 3}\`.`,
  constraints: [
    '1 <= nums.length <= 10^4',
    '2 <= nums[i] <= 1000',
  ],
  examples: [
    {
      input: 'nums = [2,4,3,7,10,6]',
      output: '4',
      explanation: 'The product is 2×4×3×7×10×6 = 10080. Prime factorization: 2^5 × 3^2 × 5 × 7. Distinct primes: {2, 3, 5, 7} → 4.',
    },
    {
      input: 'nums = [2,4,8,16]',
      output: '1',
      explanation: 'All are powers of 2. Distinct primes: {2} → 1.',
    },
  ],
  hints: [
    'You do not need to compute the product. The prime factors of the product equal the union of prime factors of each individual element.',
    'Factorize each number and collect all distinct prime factors in a set.',
    'Return the size of the set.',
  ],
  functionName: 'distinctPrimeFactors',
  params: ['nums'],
  starterCode: {
    javascript: 'function distinctPrimeFactors(nums) {\n  \n}\n',
    typescript: 'function distinctPrimeFactors(nums: number[]): number {\n  \n}',
    python: 'def distinctPrimeFactors(nums):\n    pass\n',
  },
  visibleTests: [
    { args: [[2, 4, 3, 7, 10, 6]], expected: 4 },
    { args: [[2, 4, 8, 16]], expected: 1 },
  ],
  hiddenTests: [
    { args: [[2]], expected: 1 },
    { args: [[6, 10, 15]], expected: 3 },
    { args: [[2, 3, 5, 7]], expected: 4 },
    { args: [[4, 9, 25]], expected: 3 },
    { args: [[100]], expected: 2 },
  ],
};
