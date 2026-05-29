import type { Problem } from '../types';

export const problem: Problem = {
  id: 'prime-in-diagonal',
  title: 'Prime In Diagonal',
  difficulty: 'easy',
  tags: ['arrays', 'math'],
  description: `You are given a 0-indexed two-dimensional integer array \`nums\`.

Return the **largest prime number** that lies on at least one of the **diagonals** of \`nums\`. In case, no prime is present on any diagonal, return \`0\`.

Note that:
- An integer is **prime** if it is greater than \`1\` and has no positive integer divisors other than \`1\` and itself.
- An element of \`nums\` is said to be on the **main diagonal** if its row index equals its column index.
- An element of \`nums\` is said to be on the **anti-diagonal** if the sum of its row and column indices equals \`n - 1\`, where \`n\` is the size of the array (the matrix is always square: \`n x n\`).`,
  constraints: [
    '`1 <= nums.length <= 300`',
    '`nums.length == nums[i].length`',
    '`1 <= nums[i][j] <= 4 * 10^6`',
  ],
  examples: [
    {
      input: 'nums = [[1,2,3],[5,6,7],[9,10,11]]',
      output: '11',
      explanation: 'Main diagonal: 1, 6, 11. Anti-diagonal: 3, 6, 9. Primes on diagonals: 11, 3, 7. Largest = 11.',
    },
    {
      input: 'nums = [[1,2,3],[5,2,7],[9,10,11]]',
      output: '11',
      explanation: 'Main diagonal: 1, 2, 11. Anti-diagonal: 3, 2, 9. Largest prime = 11.',
    },
  ],
  hints: [
    'Iterate i from 0 to n-1. Check nums[i][i] (main diagonal) and nums[i][n-1-i] (anti-diagonal).',
    'For each candidate, test primality: skip if < 2, trial divide by 2, 3, then 6k±1 up to sqrt(n).',
    'Track the running maximum prime found.',
  ],
  functionName: 'diagonalPrime',
  params: ['nums'],
  starterCode: {
    javascript: `function diagonalPrime(nums) {

}`,
    typescript: `function diagonalPrime(nums: number[][]): number {

}`,
    python: `def diagonalPrime(nums):
    pass`,
  },
  visibleTests: [
    { args: [[[1, 2, 3], [5, 6, 7], [9, 10, 11]]], expected: 11 },
    { args: [[[1, 2, 3], [5, 2, 7], [9, 10, 11]]], expected: 11 },
  ],
  hiddenTests: [
    { args: [[[1]]], expected: 0 },
    { args: [[[2]]], expected: 2 },
    { args: [[[4, 6], [9, 5]]], expected: 5 },
    { args: [[[1, 2, 3], [4, 5, 6], [7, 8, 9]]], expected: 7 },
    { args: [[[11, 4], [4, 13]]], expected: 13 },
    { args: [[[4, 9, 8], [2, 9, 4], [6, 10, 4]]], expected: 0 },
  ],
};
