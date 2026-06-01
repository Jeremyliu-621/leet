import type { Problem } from '../types';

export const problem: Problem = {
  id: 'most-frequent-prime',
  title: 'Most Frequent Prime',
  difficulty: 'medium',
  tags: ['arrays', 'math'],
  description: `You are given a \`m x n\` 0-indexed 2D matrix \`mat\`. From each cell \`(i, j)\`, you can generate numbers by traversing in **all 8 directions**, concatenating digits as you move. Only numbers with **2 or more digits** (no leading zeros) count.

Find the prime number with the **highest frequency** among all generated numbers. If there is a tie, return the **largest** prime. Return \`-1\` if no prime is found.`,
  constraints: [
    'm == mat.length',
    'n == mat[i].length',
    '1 <= m, n <= 6',
    '1 <= mat[i][j] <= 9',
  ],
  examples: [
    {
      input: 'mat = [[1,1],[1,1]]',
      output: '11',
      explanation: 'From every cell, moving in any valid direction produces 11. 11 is prime and appears many times.',
    },
    {
      input: 'mat = [[2,1],[1,2]]',
      output: '11',
      explanation: '11 appears in diagonal directions. Numbers like 21 (=3×7) are not prime.',
    },
  ],
  hints: [
    'From each cell, extend in all 8 directions collecting multi-digit numbers (minimum 2 digits).',
    'For each generated number, check if it is prime using trial division up to sqrt(number).',
    'Track frequency of each prime in a map; return the one with max frequency, breaking ties by value.',
  ],
  functionName: 'mostFrequentPrime',
  params: ['mat'],
  starterCode: {
    javascript: 'function mostFrequentPrime(mat) {\n  \n}\n',
    typescript: 'function mostFrequentPrime(mat: number[][]): number {\n  \n}',
    python: 'def mostFrequentPrime(mat):\n    pass\n',
  },
  visibleTests: [
    { args: [[[1, 1], [1, 1]]], expected: 11 },
    { args: [[[2, 1], [1, 2]]], expected: 11 },
  ],
  hiddenTests: [
    { args: [[[2, 3]]], expected: 23 },
    { args: [[[9, 9], [9, 9]]], expected: -1 },
    { args: [[[3, 7], [7, 3]]], expected: 73 },
    { args: [[[2, 2], [2, 2]]], expected: -1 },
  ],
};
