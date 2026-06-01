import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-the-count-of-good-integers',
  title: 'Find the Count of Good Integers',
  difficulty: 'medium',
  tags: ['math'],
  description: `An integer is called **k-palindromic** if it is a palindrome and is divisible by \`k\`.

An integer is called **good** if it has exactly \`n\` digits and can be rearranged (without leading zeros) to form a k-palindromic integer.

Given two positive integers \`n\` and \`k\`, return the count of **good** integers.`,
  constraints: [
    '1 <= n <= 10',
    '1 <= k <= 9',
  ],
  examples: [
    {
      input: 'n = 1, k = 4',
      output: '2',
      explanation: '4 and 8 are 1-digit k-palindromes. Each forms exactly one good integer.',
    },
    {
      input: 'n = 3, k = 5',
      output: '27',
      explanation: 'Palindromes like 505, 515, ..., 595 are divisible by 5. Count valid permutations for each unique digit multiset.',
    },
  ],
  hints: [
    'Enumerate all n-digit palindromes: the first ceil(n/2) digits determine the whole palindrome.',
    'For each palindrome divisible by k, normalize its digit multiset (sorted) to deduplicate.',
    'For each unique multiset, count permutations = n! / prod(freq[d]!), then subtract those with a leading zero.',
  ],
  functionName: 'countGoodIntegers',
  params: ['n', 'k'],
  starterCode: {
    javascript: 'function countGoodIntegers(n, k) {\n  \n}\n',
    typescript: 'function countGoodIntegers(n: number, k: number): number {\n  \n}',
    python: 'def countGoodIntegers(n, k):\n    pass\n',
  },
  visibleTests: [
    { args: [1, 4], expected: 2 },
    { args: [3, 5], expected: 27 },
  ],
  hiddenTests: [
    { args: [2, 2], expected: 4 },
    { args: [2, 6], expected: 1 },
    { args: [1, 1], expected: 9 },
    { args: [1, 9], expected: 1 },
    { args: [2, 9], expected: 1 },
  ],
};
