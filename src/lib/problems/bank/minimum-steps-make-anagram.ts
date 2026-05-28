import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-steps-make-anagram',
  title: 'Minimum Number of Steps to Make Two Strings Anagram',
  difficulty: 'medium',
  tags: ['hash-map', 'strings'],
  description: `You are given two strings of the same length \`s\` and \`t\`. In one step you can choose **any character** of \`t\` and replace it with **another character**.

Return *the minimum number of steps to make* \`t\` *an anagram of* \`s\`.

An **anagram** of a string is a string that uses the same characters with the same frequencies.`,
  constraints: [
    '1 <= s.length <= 5 * 10^4',
    's.length == t.length',
    's and t consist of lowercase English letters.',
  ],
  examples: [
    {
      input: 's = "bab", t = "aba"',
      output: '1',
      explanation: 'Replace the first \'a\' in t with \'b\'. t = "bba" is an anagram of s = "bab".',
    },
    {
      input: 's = "leetcode", t = "practice"',
      output: '5',
    },
    {
      input: 's = "anagram", t = "mangaar"',
      output: '0',
      explanation: 'Already an anagram.',
    },
  ],
  hints: [
    'Count the frequency of each character in s and t.',
    'The number of replacements needed equals the total excess in t vs s.',
    'For each character where t has more than s, those extra characters must be replaced.',
  ],
  functionName: 'minSteps',
  params: ['s', 't'],
  starterCode: {
    javascript: `function minSteps(s, t) {

}`,
    python: `def minSteps(s, t):
    pass`,
  },
  visibleTests: [
    { args: ['bab', 'aba'], expected: 1 },
    { args: ['leetcode', 'practice'], expected: 5 },
    { args: ['anagram', 'mangaar'], expected: 0 },
  ],
  hiddenTests: [
    { args: ['a', 'a'], expected: 0 },
    { args: ['a', 'b'], expected: 1 },
    { args: ['ab', 'cd'], expected: 2 },
    { args: ['abc', 'bca'], expected: 0 },
    { args: ['aab', 'bbb'], expected: 2 },
  ],
};
