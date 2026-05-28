import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-number-of-moves-to-make-palindrome',
  title: 'Minimum Number of Moves to Make Palindrome',
  difficulty: 'hard',
  tags: ['strings', 'two-pointers'],
  description: `You are given a string \`s\` consisting only of lowercase English letters.

In one move, you can select any two **adjacent** characters of \`s\` and swap them.

Return *the **minimum** number of moves needed to make* \`s\` *a palindrome.*

**Note** that the input will be generated such that \`s\` can always be converted to a palindrome.`,
  constraints: [
    '1 <= s.length <= 2000',
    's consists only of lowercase English letters.',
    's can be converted to a palindrome.',
  ],
  examples: [
    {
      input: 's = "aabb"',
      output: '2',
      explanation: 'Move "aabb" → "abab" (swap indices 1&2) → "abba" (swap indices 2&3). Total 2 moves.',
    },
    {
      input: 's = "letelt"',
      output: '2',
      explanation: 'Two moves are needed: "letelt" → "leteтl" (swap 4&5, cost 1) → "lettel" (swap 3&4, cost 1). Total 2 moves.',
    },
  ],
  hints: [
    'Use two pointers l and r. Try to match s[l] with a character from the right side.',
    'Scan from r toward l+1 for the matching character; bubble it to position r (each step = 1 move); then advance l and r.',
    'If no match is found for s[l] in [l+1..r], s[l] must be the center character for an odd-length palindrome — add 1 move and advance l.',
  ],
  functionName: 'minMovesToMakePalindrome',
  params: ['s'],
  starterCode: {
    javascript: 'function minMovesToMakePalindrome(s) {\n\n}',
    typescript: "function minMovesToMakePalindrome(s: string): number {\n\n}",

    python: 'def minMovesToMakePalindrome(s):\n    pass',
  },
  visibleTests: [
    { args: ['aabb'], expected: 2 },
    { args: ['letelt'], expected: 2 },
  ],
  hiddenTests: [
    { args: ['a'], expected: 0 },
    { args: ['aa'], expected: 0 },
    { args: ['aba'], expected: 0 },
    { args: ['aab'], expected: 1 },
    { args: ['ntiin'], expected: 1 },
    { args: ['zzazz'], expected: 0 },
    { args: ['bcaabc'], expected: 1 },
    { args: ['aabba'], expected: 1 },
  ],
};
