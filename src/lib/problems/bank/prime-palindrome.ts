import type { Problem } from '../types';

export const problem: Problem = {
  id: 'prime-palindrome',
  title: 'Prime Palindrome',
  difficulty: 'medium',
  tags: ['math'],
  description: `Given an integer \`n\`, return the **smallest prime palindrome** greater than or equal to \`n\`.

An integer is **prime** if it has exactly two divisors: 1 and itself. Note that 1 is not a prime.

An integer is a **palindrome** if it reads the same forward and backward.`,
  constraints: [
    '1 <= n <= 2 * 10^8',
  ],
  examples: [
    { input: 'n = 6', output: '7', explanation: '7 is the smallest prime palindrome >= 6.' },
    { input: 'n = 8', output: '11' },
    { input: 'n = 13', output: '101' },
  ],
  hints: [
    'All even-length palindromes greater than 11 are divisible by 11 and thus not prime.',
    'Generate odd-length palindromes in increasing order by mirroring the first half.',
    'Check primality with trial division up to sqrt(candidate).',
  ],
  functionName: 'primePalindrome',
  params: ['n'],
  starterCode: {
    javascript: 'function primePalindrome(n) {\n\n}\n',
    python: 'def primePalindrome(n):\n    pass\n',
  },
  visibleTests: [
    { args: [6], expected: 7 },
    { args: [8], expected: 11 },
    { args: [13], expected: 101 },
  ],
  hiddenTests: [
    { args: [1], expected: 2 },
    { args: [2], expected: 2 },
    { args: [11], expected: 11 },
    { args: [100], expected: 101 },
  ],
};
