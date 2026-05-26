import type { Problem } from '../types';

export const problem: Problem = {
  id: 'group-anagrams',
  title: 'Group Anagrams',
  difficulty: 'medium',
  tags: ['strings', 'hash-map'],
  description: `Given an array of strings \`strs\`, group the anagrams together. You can return the answer in **any order**.

An **anagram** is a word or phrase formed by rearranging the letters of a different word or phrase, using all the original letters exactly once.

Each group should be sorted lexicographically, and the groups should be sorted by their first element.`,
  examples: [
    {
      input: 'strs = ["eat","tea","tan","ate","nat","bat"]',
      output: '[["ate","eat","tea"],["bat"],["nat","tan"]]',
      explanation: '"eat", "tea", and "ate" are anagrams. "nat" and "tan" are anagrams. Return groups sorted.',
    },
    {
      input: 'strs = [""]',
      output: '[[""]]',
    },
    {
      input: 'strs = ["a"]',
      output: '[["a"]]',
    },
  ],
  constraints: [
    '1 <= strs.length <= 10^4',
    '0 <= strs[i].length <= 100',
    'strs[i] consists of lowercase English letters.',
  ],
  functionName: 'groupAnagrams',
  params: ['strs'],
  starterCode: {
    javascript: 'function groupAnagrams(strs) {\n  // your code here\n}\n',
    python: 'def groupAnagrams(strs):\n    # your code here\n    pass\n',
  },
  hints: [
    'Two strings are anagrams if and only if their sorted characters are identical. Use the sorted string as a hash map key.',
    'Build a Map from sorted-key → list of original strings. Iterate once through strs.',
    'After grouping, sort each group and sort the groups by first element to get a deterministic result.',
  ],
  visibleTests: [
    {
      args: [['eat', 'tea', 'tan', 'ate', 'nat', 'bat']],
      expected: [['ate', 'eat', 'tea'], ['bat'], ['nat', 'tan']],
    },
    { args: [['a']], expected: [['a']] },
    { args: [['', '']], expected: [['', '']] },
  ],
  hiddenTests: [
    { args: [['abc', 'cba', 'bac', 'xyz']], expected: [['abc', 'bac', 'cba'], ['xyz']] },
    { args: [['ab', 'ba']], expected: [['ab', 'ba']] },
    { args: [['a', 'b', 'a']], expected: [['a', 'a'], ['b']] },
  ],
};
