import type { Problem } from '../types';

export const problem: Problem = {
  id: 'sum-of-squares-of-special-elements',
  title: 'Sum of Squares of Special Elements',
  difficulty: 'easy',
  tags: ['arrays', 'math'],
  description: `You are given a **1-indexed** integer array \`nums\` of length \`n\`.

An element \`nums[i]\` of \`nums\` is called **special** if \`i\` divides \`n\`, i.e., \`n % i == 0\`.

Return the **sum of the squares** of all special elements of \`nums\`.`,
  constraints: [
    '1 <= nums.length <= 50',
    '1 <= nums[i] <= 50',
  ],
  examples: [
    {
      input: 'nums = [1,2,3,4]',
      output: '21',
      explanation: 'n = 4. Divisors of 4: 1, 2, 4. Special elements: nums[1]=1, nums[2]=2, nums[4]=4. Sum = 1² + 2² + 4² = 1 + 4 + 16 = 21.',
    },
    {
      input: 'nums = [2,7,1,19,18,3]',
      output: '63',
      explanation: 'n = 6. Divisors of 6: 1, 2, 3, 6. Special elements: nums[1]=2, nums[2]=7, nums[3]=1, nums[6]=3. Sum = 4 + 49 + 1 + 9 = 63.',
    },
    {
      input: 'nums = [1]',
      output: '1',
      explanation: 'n = 1. Only divisor is 1. nums[1] = 1. Sum = 1² = 1.',
    },
  ],
  hints: [
    'An element at 1-indexed position i is "special" if it divides n (i.e., n % i === 0).',
    'Iterate i from 1 to n. Check if n % i === 0, then include nums[i-1] (0-indexed) in the sum.',
    'Square each special element before adding it to the result.',
  ],
  functionName: 'sumOfSquares',
  params: ['nums'],
  starterCode: {
    javascript: `function sumOfSquares(nums) {
  // your code here
}`,
    typescript: `function sumOfSquares(nums: number[]): number {
  // your code here
}`,
    python: `def sumOfSquares(nums):
    # your code here
`,
  },
  visibleTests: [
    { args: [[1, 2, 3, 4]], expected: 21 },
    { args: [[2, 7, 1, 19, 18, 3]], expected: 63 },
    { args: [[1]], expected: 1 },
  ],
  hiddenTests: [
    { args: [[3, 5]], expected: 34 },
    { args: [[5, 5, 5, 5, 5]], expected: 50 },
    { args: [[1, 2, 3, 4, 5, 6]], expected: 50 },
    { args: [[10]], expected: 100 },
  ],
};
