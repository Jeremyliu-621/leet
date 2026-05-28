import type { Problem } from '../types';

export const problem: Problem = {
  id: 'palindrome-partitioning-ii',
  title: 'Palindrome Partitioning II',
  difficulty: 'hard',
  tags: ['dynamic-programming', 'strings'],
  description: `Given a string \`s\`, partition \`s\` such that every substring of the partition is a palindrome.

Return the **minimum cuts** needed for a palindrome partitioning of \`s\`.`,
  constraints: [
    '1 <= s.length <= 2000',
    's consists of lowercase English letters only',
  ],
  examples: [
    {
      input: 's = "aab"',
      output: '1',
      explanation: 'The palindrome partitioning ["aa","b"] could be produced using 1 cut.',
    },
    { input: 's = "a"', output: '0' },
    { input: 's = "ab"', output: '1' },
  ],
  hints: [
    'Define cut[i] = minimum cuts for s[0..i]. If s[0..i] is already a palindrome, cut[i] = 0.',
    'Precompute a 2-D isPalin table: isPalin[i][j] is true if s[i..j] is a palindrome.',
    'cut[i] = min over all j where isPalin[j][i] is true of (cut[j-1] + 1). Handle j=0 (no cut needed) separately.',
  ],
  functionName: 'minCutPalindrome',
  params: ['s'],
  starterCode: {
    javascript: 'function minCutPalindrome(s) {\n\n}\n',
    python: 'def minCutPalindrome(s):\n    pass\n',
  },
  visibleTests: [
    { args: ['aab'], expected: 1 },
    { args: ['a'], expected: 0 },
    { args: ['ab'], expected: 1 },
  ],
  hiddenTests: [
    { args: ['aaabaa'], expected: 1 },
    { args: ['abcba'], expected: 0 },
    { args: ['aabbc'], expected: 2 },
    { args: ['ababababababababababababababab'], expected: 1 },
  ],
};
