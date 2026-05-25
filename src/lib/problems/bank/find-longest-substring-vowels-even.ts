import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-longest-substring-vowels-even',
  title: 'Find the Longest Substring Containing Vowels in Even Counts',
  difficulty: 'medium',
  tags: ['hash-map', 'strings'],
  description: `Given a string \`s\`, return the size of the longest substring containing each vowel an **even** number of times. That is, 'a', 'e', 'i', 'o', and 'u' must appear an even number of times.`,
  constraints: [
    '`1 <= s.length <= 5 * 10^5`',
    '`s` contains only lowercase English letters',
  ],
  examples: [
    {
      input: 's = "eleetminicoworoep"',
      output: '13',
      explanation: 'The longest substring is "leetminicowor" which contains two each of \'e\', \'i\', \'o\'.',
    },
    {
      input: 's = "leetcodeisgreat"',
      output: '5',
      explanation: '"leetc" has \'e\' appearing twice.',
    },
    {
      input: 's = "bcbcbc"',
      output: '6',
      explanation: 'No vowels → all counts are 0 (even). The full string works.',
    },
  ],
  hints: [
    'Track a bitmask state: bit k = 1 if vowel k has appeared an odd number of times so far.',
    'The prefix ending at i and prefix ending at j have the same bitmask state if and only if all vowels appear an even number of times in s[i+1..j].',
    'Store the first index where each bitmask state was seen. When you see a state again at index j, update the answer with j - first_seen[state].',
  ],
  functionName: 'findTheLongestSubstring',
  params: ['s'],
  starterCode: {
    javascript: `function findTheLongestSubstring(s) {

}`,
    python: `def findTheLongestSubstring(s):
    pass`,
  },
  visibleTests: [
    { args: ['eleetminicoworoep'], expected: 13 },
    { args: ['leetcodeisgreat'], expected: 5 },
    { args: ['bcbcbc'], expected: 6 },
  ],
  hiddenTests: [
    { args: ['aeiou'], expected: 0 },
    { args: ['aabaa'], expected: 5 },
    { args: ['a'], expected: 0 },
    { args: ['aaaa'], expected: 4 },
  ],
};
