import type { Problem } from '../types';

export const problem: Problem = {
  id: 'verifying-alien-dictionary',
  title: 'Verifying an Alien Dictionary',
  difficulty: 'easy',
  tags: ['strings', 'hash-map'],
  description: `In an alien language that uses the English alphabet, the **order** of the letters is different from regular English. You are given a \`order\` string representing the new alphabetical order.

Given a list of \`words\` in this alien language, return \`true\` if the words are sorted **lexicographically** according to the alien dictionary's ordering.`,
  constraints: [
    '1 <= words.length <= 100',
    '1 <= words[i].length <= 20',
    'order.length == 26',
    'All characters in words[i] and order are lowercase English letters.',
  ],
  examples: [
    {
      input: 'words = ["hello","leetcode"], order = "hlabcdefgijkmnopqrstuvwxyz"',
      output: 'true',
      explanation:
        'In the alien order, "h" comes before "l", so "hello" < "leetcode" is correct.',
    },
    {
      input: 'words = ["word","world","row"], order = "worldabcefghijkmnpqstuvxyz"',
      output: 'false',
      explanation:
        '"world" should come before "row" by the alien order, but "world" has a "d" vs "row" starting with "r" — actually "w" precedes "r" in alien order so "word" < "world" ✓. But "world" < "row" fails since "w" comes before "r" in alien order.',
    },
    {
      input: 'words = ["apple","app"], order = "abcdefghijklmnopqrstuvwxyz"',
      output: 'false',
      explanation:
        '"apple" has "apple" which starts with "app", so "app" should come before "apple", not after.',
    },
  ],
  hints: [
    'Build a rank map from `order` (character → its position index, 0-based).',
    'Compare each adjacent pair of words character by character. Stop at the first difference and check if the characters are in correct order.',
    'Special case: if word A is a prefix of word B but A is longer, return false (e.g., "app" must come before "apple").',
  ],
  functionName: 'isAlienSorted',
  params: ['words', 'order'],
  starterCode: {
    javascript: 'function isAlienSorted(words, order) {\n  // your code here\n}\n',
    typescript: "function isAlienSorted(words: string[], order: string): boolean {\n  // your code here\n}",

    python: 'def isAlienSorted(words, order):\n    # your code here\n    pass\n',
  },
  visibleTests: [
    { args: [['hello', 'leetcode'], 'hlabcdefgijkmnopqrstuvwxyz'], expected: true },
    { args: [['word', 'world', 'row'], 'worldabcefghijkmnpqstuvxyz'], expected: false },
    { args: [['apple', 'app'], 'abcdefghijklmnopqrstuvwxyz'], expected: false },
  ],
  hiddenTests: [
    { args: [['a'], 'abcdefghijklmnopqrstuvwxyz'], expected: true },
    { args: [['aa', 'ab'], 'abcdefghijklmnopqrstuvwxyz'], expected: true },
    { args: [['ba', 'ab'], 'abcdefghijklmnopqrstuvwxyz'], expected: false },
    { args: [['kuvp', 'q'], 'ngxlkthsjuoqcpavbfdermiywz'], expected: true },
    { args: [['fxasxpc', 'dfbdrifhp'], 'oetyhmqgwdnvxjlkfrzabisucp'], expected: false },
    { args: [['app', 'apple'], 'abcdefghijklmnopqrstuvwxyz'], expected: true },
  ],
};
