import type { Problem } from '../types';

export const problem: Problem = {
  id: 'longest-common-prefix',
  title: 'Longest Common Prefix',
  difficulty: 'easy',
  tags: ['strings'],
  description: `Write a function that finds the longest common prefix string among an array of strings.

If there is no common prefix, return an empty string \`""\`.

A **prefix** is a string that appears at the start of every word. For example, the prefix \`"fl"\` is shared by \`"flower"\`, \`"flow"\`, and \`"flight"\`.`,
  constraints: [
    '1 <= strs.length <= 100',
    '0 <= strs[i].length <= 100',
    'strs[i] consists of lowercase English letters only.',
  ],
  examples: [
    {
      input: 'strs = ["flower","flow","flight"]',
      output: '"fl"',
      explanation: '"fl" is the longest prefix shared by all three words.',
    },
    {
      input: 'strs = ["dog","racecar","car"]',
      output: '""',
      explanation: 'No common prefix exists among these words.',
    },
    {
      input: 'strs = ["interview","interstellar","internal"]',
      output: '"inter"',
      explanation: 'All three share the prefix "inter".',
    },
  ],
  hints: [
    'Start by assuming the first string is the whole prefix. Then shorten it until it matches the start of every other string.',
    'Use `String.startsWith` (or index-by-index comparison): for each string in the array, while the current string does not start with your prefix, remove the last character from the prefix.',
    '`let prefix = strs[0]; for (const s of strs) { while (!s.startsWith(prefix)) { prefix = prefix.slice(0, -1); if (!prefix) return ""; } } return prefix;`',
  ],
  functionName: 'longestCommonPrefix',
  params: ['strs'],
  starterCode: {
    javascript: `function longestCommonPrefix(strs) {
  let prefix = strs[0];
  for (const s of strs) {
    while (!s.startsWith(prefix)) { prefix = prefix.slice(0, -1); if (!prefix) return ''; }
  }
  return prefix;
}`,
    typescript: `function longestCommonPrefix(strs: string[]): string {
  let prefix = strs[0]!;
  for (const s of strs) {
    while (!s.startsWith(prefix)) { prefix = prefix.slice(0, -1); if (!prefix) return ''; }
  }
  return prefix;
}`,
    python: `def longestCommonPrefix(strs):
    prefix = strs[0]
    for s in strs[1:]:
        while not s.startswith(prefix):
            prefix = prefix[:-1]
            if not prefix:
                return ''
    return prefix`,
  },
  visibleTests: [
    { args: [['flower', 'flow', 'flight']], expected: 'fl' },
    { args: [['dog', 'racecar', 'car']], expected: '' },
    { args: [['interview', 'interstellar', 'internal']], expected: 'inter' },
  ],
  hiddenTests: [
    { args: [['a']], expected: 'a' },
    { args: [['ab', 'a']], expected: 'a' },
    { args: [['abc', 'abc', 'abc']], expected: 'abc' },
    { args: [['', 'abc']], expected: '' },
    { args: [['prefix', 'prefab', 'prefer']], expected: 'pref' },
    { args: [['abc', 'def', 'ghi']], expected: '' },
  ],
};
