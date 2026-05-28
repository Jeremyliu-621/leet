import type { Problem } from '../types';

export const problem: Problem = {
  id: 'substring-with-concatenation-of-all-words',
  title: 'Substring with Concatenation of All Words',
  difficulty: 'hard',
  tags: ['strings', 'hash-map', 'sliding-window'],
  description: `You are given a string \`s\` and an array of strings \`words\`. All strings in \`words\` are of the **same length**.

A **concatenated string** is a string formed by concatenating **all** the strings in \`words\` in **any order** (each word used exactly once).

Return an array of all starting indices in \`s\` where a concatenated string begins. Return the indices in **sorted order**.`,
  constraints: [
    '1 <= s.length <= 10^4',
    '1 <= words.length <= 5000',
    '1 <= words[i].length <= 30',
    'words[i] and s consist of lowercase English letters.',
  ],
  examples: [
    {
      input: 's = "barfoothefoobarman", words = ["foo","bar"]',
      output: '[0,9]',
      explanation: '"barfoo" starts at index 0; "foobar" starts at index 9.',
    },
    {
      input: 's = "wordgoodgoodgoodbestword", words = ["word","good","best","word"]',
      output: '[]',
      explanation: 'No valid starting index exists.',
    },
    {
      input: 's = "barfoofoobarthefoobarman", words = ["bar","foo","the"]',
      output: '[6,9,12]',
      explanation: '"foobarthe" at 6, "barthefoo" at 9, "thefoobar" at 12.',
    },
  ],
  hints: [
    'Build a frequency map of words. For each starting index i in s (up to s.length - windowLen), extract consecutive substrings of wordLen and check if they form a valid permutation.',
    'Use a sliding window of size wordLen * words.length. Maintain a current frequency map. Slide one word at a time — add the word entering the window, remove the word leaving.',
    'Run the sliding window wordLen times, starting at offsets 0, 1, ..., wordLen-1. This way every possible alignment is covered in O(s.length * words.length / wordLen) time.',
  ],
  functionName: 'findSubstring',
  params: ['s', 'words'],
  starterCode: {
    javascript: `function findSubstring(s, words) {

}`,
    typescript: "function findSubstring(s: string, words: string[]): number[] {\n\n}",

    python: `def findSubstring(s, words):
    pass
`,
  },
  visibleTests: [
    { args: ['barfoothefoobarman', ['foo','bar']], expected: [0, 9] },
    { args: ['wordgoodgoodgoodbestword', ['word','good','best','word']], expected: [] },
    { args: ['barfoofoobarthefoobarman', ['bar','foo','the']], expected: [6, 9, 12] },
  ],
  hiddenTests: [
    { args: ['aaaaa', ['aa','aa']], expected: [0, 1] },
    { args: ['abc', ['a','b','c']], expected: [0] },
    { args: ['lingmindraboofooowingdingbarrwingmonkeypoundcake', ['fooo','barr','wing','ding','wing']], expected: [13] },
    { args: ['aaa', ['a','a']], expected: [0, 1] },
    { args: ['abcdef', ['bc','de']], expected: [1] },
    { args: ['xy', ['x','y']], expected: [0] },
  ],
};
