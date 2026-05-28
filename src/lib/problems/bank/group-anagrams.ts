import type { Problem } from '../types';

export const problem: Problem = {
  id: 'group-anagrams',
  title: 'Group Anagrams',
  difficulty: 'medium',
  tags: ['strings', 'hash-map'],
  description: `Given an array of strings \`strs\`, group all anagrams together and return them as a list of groups.

Two strings are **anagrams** if one can be rearranged to form the other — they contain exactly the same characters with the same frequencies.

Return the result with each group's strings sorted ascending alphabetically, and the groups themselves sorted lexicographically by their first element.`,
  constraints: [
    '1 <= strs.length <= 1000',
    '0 <= strs[i].length <= 100',
    'strs[i] consists of lowercase English letters.',
  ],
  examples: [
    {
      input: 'strs = ["eat","tea","tan","ate","nat","bat"]',
      output: '[["ate","eat","tea"],["bat"],["nat","tan"]]',
      explanation: '"eat", "tea", and "ate" are anagrams. "nat" and "tan" are anagrams. "bat" has no anagram pair.',
    },
    {
      input: 'strs = [""]',
      output: '[[""]]',
      explanation: 'A single empty string forms its own group.',
    },
    {
      input: 'strs = ["a"]',
      output: '[["a"]]',
      explanation: 'A single character forms its own group.',
    },
  ],
  hints: [
    'Level 1: Two strings are anagrams if they contain the same characters in the same frequencies — find a way to compute a canonical "signature" for each string.',
    'Level 2: Sort each string alphabetically to get its canonical key (e.g. "eat" and "tea" both become "aet"). Use a hash map from sorted-key → list of original strings.',
    'Level 3: `const map = new Map(); for (const s of strs) { const key = s.split("").sort().join(""); const group = map.get(key) ?? []; group.push(s); map.set(key, group); } return [...map.values()].map(g => g.sort()).sort((a, b) => a[0].localeCompare(b[0]));`',
  ],
  functionName: 'groupAnagrams',
  params: ['strs'],
  starterCode: {
    javascript: 'function groupAnagrams(strs) {\n  // your code here\n}\n',
    python: 'def groupAnagrams(strs):\n    # your code here\n    pass\n',
  },
  visibleTests: [
    {
      args: [['eat', 'tea', 'tan', 'ate', 'nat', 'bat']],
      expected: [['ate', 'eat', 'tea'], ['bat'], ['nat', 'tan']],
    },
    {
      args: [['']],
      expected: [['']],
    },
    {
      args: [['a']],
      expected: [['a']],
    },
  ],
  hiddenTests: [
    {
      args: [['ab', 'ba', 'abc', 'bca', 'cba', 'xyz']],
      expected: [['ab', 'ba'], ['abc', 'bca', 'cba'], ['xyz']],
    },
    {
      args: [['listen', 'silent', 'enlist', 'hello', 'world']],
      expected: [['enlist', 'listen', 'silent'], ['hello'], ['world']],
    },
    {
      args: [['rat', 'car', 'tar', 'arc']],
      expected: [['arc', 'car'], ['rat', 'tar']],
    },
    {
      args: [['abc', 'def', 'ghi']],
      expected: [['abc'], ['def'], ['ghi']],
    },
    {
      args: [['a', 'b', 'a']],
      expected: [['a', 'a'], ['b']],
    },
  ],
};
