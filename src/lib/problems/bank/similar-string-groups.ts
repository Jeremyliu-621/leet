import type { Problem } from '../types';

export const problem: Problem = {
  id: 'similar-string-groups',
  title: 'Similar String Groups',
  difficulty: 'hard',
  tags: ['union-find', 'strings', 'graph'],
  description: `Two strings \`X\` and \`Y\` are **similar** if we can swap two letters (in different positions) of \`X\` so that it equals \`Y\`. Also two strings are similar if they are equal.

Given a list of strings \`strs\` where every string in \`strs\` is an anagram of every other string in \`strs\`, return the number of groups of **similar** strings.`,
  constraints: [
    '1 <= strs.length <= 300',
    '1 <= strs[i].length <= 300',
    'strs[i] consists of lowercase English letters.',
    'All words in strs have the same length and are anagrams of each other.',
  ],
  examples: [
    {
      input: 'strs = ["tars","rats","arts","star"]',
      output: '2',
      explanation: '"tars" and "rats" are similar (swap a,r). "rats" and "arts" are similar (swap r,a). "tars","rats","arts" form one group. "star" forms its own group (not similar to others via one swap).',
    },
    {
      input: 'strs = ["omv","ovm"]',
      output: '1',
      explanation: '"omv" and "ovm" differ at two positions, one swap makes them equal.',
    },
  ],
  hints: [
    'Two strings are similar if they differ in exactly 0 or exactly 2 positions (since all strings are anagrams). Use Union-Find to group similar strings.',
    'For each pair (i, j), check similarity in O(n) time by counting differing positions. If diff == 0 or diff == 2, union(i, j).',
    'The total number of groups is the number of distinct roots in the Union-Find after processing all pairs.',
  ],
  functionName: 'numSimilarGroups',
  params: ['strs'],
  starterCode: {
    javascript: 'function numSimilarGroups(strs) {\n  \n}\n',
    typescript: "function numSimilarGroups(strs: string[]): number {\n  \n}",

    python: 'def numSimilarGroups(strs):\n    pass\n',
  },
  visibleTests: [
    { args: [['tars','rats','arts','star']], expected: 2 },
    { args: [['omv','ovm']], expected: 1 },
  ],
  hiddenTests: [
    { args: [['a']], expected: 1 },
    { args: [['ab','ba']], expected: 1 },
    { args: [['abc','abc']], expected: 1 },
    { args: [['abc','bac','xyz','xzy']], expected: 2 },
    { args: [['abc','acb','bac','bca','cab','cba']], expected: 1 },
    { args: [['ab','ab']], expected: 1 },
  ],
};
