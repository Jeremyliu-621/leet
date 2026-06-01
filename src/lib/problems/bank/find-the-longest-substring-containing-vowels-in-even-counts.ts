import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-the-longest-substring-containing-vowels-in-even-counts',
  title: 'Find the Longest Substring Containing Vowels in Even Counts',
  difficulty: 'medium',
  tags: ['strings', 'hash-map'],
  description: `Given the string \`s\`, return the size of the longest substring containing each vowel an even number of times. That is, 'a', 'e', 'i', 'o', and 'u' must appear an even number of times.`,
  constraints: [
    '`1 <= s.length <= 5 * 10^5`',
    '`s` contains only lowercase English letters.',
  ],
  examples: [
    {
      input: 's = "eleetminicoworoep"',
      output: '13',
      explanation: 'The longest substring is "leetminicowor" which contains two each of the vowels: e, i, o.',
    },
    {
      input: 's = "leetcodeisgreat"',
      output: '5',
      explanation: 'The longest substring is "leetc" which contains two e\'s.',
    },
    {
      input: 's = "bcbcbc"',
      output: '6',
      explanation: 'In this case, the given string "bcbcbc" is the longest because all vowels: a, e, i, o and u appear zero (even) times.',
    },
  ],
  hints: [
    'Encode the parity of each vowel\'s count as a 5-bit bitmask (bit 0 = a, bit 1 = e, bit 2 = i, bit 3 = o, bit 4 = u).',
    'XOR the bit for each vowel as you scan left to right. The XOR flips the parity for that vowel.',
    'Use a hash map to store the first occurrence of each bitmask state. If the same state appears again at index j, the substring between them has all vowels in even counts.',
    'Initialize the map with state 0 at index -1 (before the string starts).',
  ],
  functionName: 'findTheLongestSubstring',
  params: ['s'],
  starterCode: {
    javascript: `/**
 * @param {string} s
 * @return {number}
 */
function findTheLongestSubstring(s) {

}`,
    typescript: `function findTheLongestSubstring(s: string): number {

}`,
    python: `def findTheLongestSubstring(s: str) -> int:
    `,
  },
  visibleTests: [
    { args: ['eleetminicoworoep'], expected: 13 },
    { args: ['leetcodeisgreat'], expected: 5 },
    { args: ['bcbcbc'], expected: 6 },
  ],
  hiddenTests: [
    { args: ['aeiou'], expected: 0 },
    { args: ['aaa'], expected: 2 },
    { args: ['aaaa'], expected: 4 },
    { args: ['aeiouaeiou'], expected: 10 },
    { args: ['abc'], expected: 2 },
    { args: ['a'], expected: 0 },
  ],
};
