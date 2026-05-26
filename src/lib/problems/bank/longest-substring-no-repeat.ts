import type { Problem } from '../types';

export const problem: Problem = {
  id: 'longest-substring-no-repeat',
  title: 'Longest Substring Without Repeating Characters',
  difficulty: 'medium',
  tags: ['strings', 'sliding-window'],
  description: `Given a string \`s\`, find the length of the **longest substring** without repeating characters.`,
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
      explanation: 'The answer is "wke", with the length of 3.',
    },
  ],
  constraints: [
    '0 <= s.length <= 5 * 10^4',
    's consists of English letters, digits, symbols and spaces.',
  ],
  functionName: 'lengthOfLongestSubstring',
  params: ['s'],
  starterCode: {
    javascript: 'function lengthOfLongestSubstring(s) {\n  // your code here\n}\n',
    python: 'def lengthOfLongestSubstring(s):\n    # your code here\n    pass\n',
  },
  hints: [
    'Use a sliding window with two pointers: left and right. Expand right until a duplicate is found.',
    'Store the last-seen index of each character in a Map. When a repeat is found at index right, move left to max(left, lastSeen[s[right]] + 1).',
    'The maximum window size (right - left + 1) seen across all positions is the answer.',
  ],
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
    { args: ['abcde'], expected: 5 },
  ],
};
