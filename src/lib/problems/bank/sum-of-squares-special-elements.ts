import type { Problem } from '../types';

export const problem: Problem = {
  id: 'sum-of-squares-special-elements',
  title: 'Sum of Squares of Special Elements',
  difficulty: 'easy',
  tags: ['arrays', 'math'],
  description: `You are given a **1-indexed** integer array \`nums\` of length \`n\`.

An element \`nums[i]\` is **special** if \`i\` divides \`n\` (i.e., \`n % i === 0\`).

Return the **sum of the squares** of all special elements.`,
  constraints: [
    '`1 <= n <= 50`',
    '`1 <= nums[i] <= 50`',
  ],
  examples: [
    {
      input: 'nums = [1,2,3,4]',
      output: '21',
      explanation: 'n = 4. The 1-based positions that divide 4 are 1, 2, and 4. The special elements are nums[1]=1, nums[2]=2, nums[4]=4. Sum of squares = 1² + 2² + 4² = 1 + 4 + 16 = 21.',
    },
    {
      input: 'nums = [2,7,1,19,18,3]',
      output: '63',
      explanation: 'n = 6. The 1-based positions that divide 6 are 1, 2, 3, and 6. The special elements are nums[1]=2, nums[2]=7, nums[3]=1, nums[6]=3. Sum of squares = 2² + 7² + 1² + 3² = 4 + 49 + 1 + 9 = 63.',
    },
  ],
  hints: [
    'Iterate from i=1 to n. If n % i === 0, add nums[i-1]^2 to the result.',
    'An element at index `i` (1-based) is special if `n % i === 0`. Sum the squares of special elements.',
    `\`\`\`js
const n = nums.length;
return nums.reduce((sum, v, i) => n % (i+1) === 0 ? sum + v*v : sum, 0);\`\`\``
  ],
  functionName: 'sumOfSquares',
  params: ['nums'],
  starterCode: {
    javascript: 'function sumOfSquares(nums) {\n  \n}\n',
    typescript: "function sumOfSquares(nums: number[]): number {\n  \n}",

    python: 'def sumOfSquares(nums):\n    pass\n',
  },
  visibleTests: [
    { args: [[1, 2, 3, 4]], expected: 21 },
    { args: [[2, 7, 1, 19, 18, 3]], expected: 63 },
    { args: [[1]], expected: 1 },
  ],
  hiddenTests: [
    { args: [[1, 2, 3, 4, 5, 6]], expected: 50 },
    { args: [[3, 3]], expected: 18 },
    { args: [[1, 1, 1, 1, 1]], expected: 2 },
    { args: [[5, 2]], expected: 29 },
    { args: [[10]], expected: 100 },
  ],
};
