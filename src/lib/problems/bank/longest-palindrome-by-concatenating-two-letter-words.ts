import type { Problem } from '../types';

export const problem: Problem = {
  id: 'longest-palindrome-by-concatenating-two-letter-words',
  title: 'Longest Palindrome by Concatenating Two Letter Words',
  difficulty: 'medium',
  tags: ['strings', 'hash-map'],
  description: `You are given an array of strings \`words\` where each string consists of **two** lowercase English letters.

Create the **longest possible palindrome** by selecting some elements from \`words\` and concatenating them in any order. Each element can be selected **at most once**.

Return the **length** of the longest palindrome that you can create. If it is impossible to create any palindrome, return \`0\`.

A **palindrome** is a string that reads the same forward and backward.`,
  constraints: [
    '1 <= words.length <= 10^5',
    'words[i].length == 2',
    'words[i] consists of lowercase English letters.',
  ],
  examples: [
    {
      input: 'words = ["lc","cl","gg"]',
      output: '6',
      explanation: '"lc" and "cl" are palindrome partners (lcl == clc reversed). "gg" is its own reverse. Arrange: "lc" + "gg" + "cl" = "lcggcl" (length 6).',
    },
    {
      input: 'words = ["ab","ty","yt","lc","cl","ab"]',
      output: '8',
      explanation: '"ty"+"yt" contributes 4, "lc"+"cl" contributes 4. Total = 8.',
    },
    {
      input: 'words = ["cc","ll","xx"]',
      output: '2',
      explanation: 'Only one palindromic word can go in the center. Take any one: length 2.',
    },
  ],
  hints: [
    'Count frequencies of all words. For each word w, its palindrome partner is w reversed.',
    'For a non-self-reverse word w (w ≠ reverse(w)): you can pair min(count[w], count[reverse(w)]) occurrences, each pair contributing 4 to the length.',
    'For a self-reverse word (e.g., "aa"): floor(count/2) pairs each contribute 4. If any self-reverse word has an odd count, one copy can go in the center of the palindrome (+2).',
  ],
  functionName: 'longestPalindrome',
  params: ['words'],
  starterCode: {
    javascript: 'function longestPalindrome(words) {\n\n}\n',
    typescript: "function longestPalindrome(words: string[]): number {\n\n}",

    python: 'def longestPalindrome(words: list) -> int:\n    pass\n',
  },
  visibleTests: [
    { args: [["lc","cl","gg"]], expected: 6 },
    { args: [["ab","ty","yt","lc","cl","ab"]], expected: 8 },
    { args: [["cc","ll","xx"]], expected: 2 },
  ],
  hiddenTests: [
    { args: [["aa","aa"]], expected: 4 },
    { args: [["aa","aa","aa"]], expected: 6 },
    { args: [["ab","ba","cd","dc"]], expected: 8 },
    { args: [["ab"]], expected: 0 },
    { args: [["aa","bb","cc","dd","ee","ff","gg","hh"]], expected: 2 },
  ],
};
