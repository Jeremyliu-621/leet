import type { Problem } from '../types';

export const problem: Problem = {
  id: 'longest-substring-without-repeating',
  title: 'Longest Substring Without Repeating Characters',
  difficulty: 'medium',
  tags: ['strings', 'sliding-window', 'hash-map'],
  description: `Given a string \`s\`, find the length of the **longest substring** without duplicate characters.`,
  constraints: [
    '`0 <= s.length <= 5 * 10^4`',
    '`s` consists of English letters, digits, symbols and spaces.',
  ],
  examples: [
    {
      input: 's = "abcabcbb"',
      output: '3',
      explanation: 'The answer is "abc", with the length of 3.',
    },
    {
      input: 's = "bbbbb"',
      output: '1',
      explanation: 'The answer is "b", with the length of 1.',
    },
    {
      input: 's = "pwwkew"',
      output: '3',
      explanation: 'The answer is "wke", with the length of 3. Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.',
    },
  ],
  hints: [
    'Use a sliding window with a hash map tracking the last seen index of each character.',
    'Expand the right pointer one character at a time. When a duplicate is found, move the left pointer past the previous occurrence.',
    'The window size at each step is right - left + 1; track the maximum.',
  ],
  functionName: 'lengthOfLongestSubstring',
  params: ['s'],
  starterCode: {
    javascript: 'function lengthOfLongestSubstring(s) {\n  \n}\n',
    typescript: "function lengthOfLongestSubstring(s: string): number {\n  \n}",

    python: 'def lengthOfLongestSubstring(s):\n    pass\n',
  },
  visibleTests: [
    { args: ['abcabcbb'], expected: 3 },
    { args: ['bbbbb'], expected: 1 },
    { args: ['pwwkew'], expected: 3 },
  ],
  hiddenTests: [
    { args: [''], expected: 0 },
    { args: [' '], expected: 1 },
    { args: ['au'], expected: 2 },
    { args: ['dvdf'], expected: 3 },
    { args: ['abcdefghijklmnopqrstuvwxyz'], expected: 26 },
    { args: ['aab'], expected: 2 },
  ],
};
