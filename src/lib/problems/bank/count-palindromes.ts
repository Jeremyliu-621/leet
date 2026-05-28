import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-palindromes',
  title: 'Count Palindromes',
  difficulty: 'hard',
  tags: ['strings', 'dynamic-programming'],
  description: `Given a string \`s\` consisting of digits, return the number of **palindromic subsequences** of length **5** in \`s\`. Since the answer can be large, return it modulo \`10^9 + 7\`.

A **subsequence** is a string derived by deleting some or no characters without changing the order of the remaining characters. A **palindrome** reads the same forwards and backwards.

A 5-character palindrome has the form \`xyzyx\` — the first and last characters match, the second and fourth match, and the middle character can be anything.`,
  constraints: [
    '1 <= s.length <= 10^4',
    's consists of digits only (\'0\' to \'9\')',
  ],
  examples: [
    {
      input: 's = "103301"',
      output: '2',
      explanation:
        'Two palindromic subsequences of length 5: positions (0,1,2,3,5) → "10301" and (0,1,3,4,5) → "10301". Both spell "10301".',
    },
    {
      input: 's = "0000000"',
      output: '21',
      explanation:
        'Every set of 5 indices chosen from the 7 zeros gives the palindrome "00000". C(7,5) = 21.',
    },
    {
      input: 's = "9"',
      output: '0',
      explanation: 'The string is too short to have a 5-character subsequence.',
    },
  ],
  hints: [
    'A length-5 palindrome has the form xyzyx. For each center position k, you need to count pairs (x, y) with the pattern x, y appearing to the left of k, and y, x appearing to the right of k.',
    'Define left_pairs[x][y] = number of 2-char subsequences (x,y) strictly to the left of position k. Similarly right_pairs[y][x] = number of 2-char subsequences (y,x) strictly to the right. At center k, sum left_pairs[x][y] * right_pairs[y][x] over all digit pairs.',
    'Slide the center from left to right. Maintain prefix pair counts by tracking prefix single counts: left_pairs[a][c] += left_single[a] for each new char c. Maintain suffix pairs similarly by pre-building from the right.',
  ],
  functionName: 'countPalindromes',
  params: ['s'],
  starterCode: {
    javascript: `function countPalindromes(s) {
  // Count palindromic subsequences of length 5, modulo 10^9+7
}`,
    typescript: "function countPalindromes(s: string): number {\n  // Count palindromic subsequences of length 5, modulo 10^9+7\n}",

    python: `def countPalindromes(s: str) -> int:
    # Count palindromic subsequences of length 5, modulo 10**9+7
    pass`,
  },
  visibleTests: [
    { args: ['103301'], expected: 2 },
    { args: ['0000000'], expected: 21 },
    { args: ['9'], expected: 0 },
    { args: ['12321'], expected: 1 },
  ],
  hiddenTests: [
    { args: ['11111'], expected: 1 },
    { args: ['12123'], expected: 0 },
    { args: ['00000000'], expected: 56 },
    { args: ['112233'], expected: 0 },
    { args: ['1221221'], expected: 9 },
    { args: ['1111111111'], expected: 252 },
  ],
};
