import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximum-number-of-removable-characters',
  title: 'Maximum Number of Removable Characters',
  difficulty: 'medium',
  tags: ['binary-search', 'two-pointers', 'strings'],
  description: `You are given two strings \`s\` and \`p\` where \`p\` is a **subsequence** of \`s\`. You are also given a **distinct** integer array \`removable\` containing a subset of indices of \`s\`.

You want to choose an integer \`k\` (0 ≤ k ≤ removable.length) such that after removing characters at indices \`removable[0]\`, \`removable[1]\`, …, \`removable[k-1]\` from \`s\`, \`p\` is still a subsequence of the modified string.

Return the **maximum** \`k\` you can choose.

A string \`t\` is a subsequence of a string \`s\` if every character of \`t\` appears in \`s\` in order (not necessarily consecutively).`,
  constraints: [
    '1 <= p.length <= s.length <= 10^5',
    '0 <= removable.length <= s.length',
    '0 <= removable[i] < s.length',
    'p is a subsequence of s',
    'All values in removable are distinct',
  ],
  examples: [
    {
      input: 's = "abcacb", p = "ab", removable = [3,1,0]',
      output: '2',
      explanation:
        'After removing indices [3,1] (k=2): "a_c_cb" still contains "ab" as a subsequence. After also removing index 0 (k=3): "_bcacb" → "ab" is no longer a subsequence.',
    },
    {
      input: 's = "abcbddddd", p = "abcd", removable = [3,2,1,4,5,6]',
      output: '1',
      explanation:
        'With k=1 (remove index 3): "abc_ddddd" → "abcd" is still a subsequence. With k=2 (also remove index 2): "ab__ddddd" → no "c" remains.',
    },
    {
      input: 's = "abcd", p = "abcd", removable = [0,1,2,3]',
      output: '0',
      explanation: 'Removing any character from s breaks the subsequence property.',
    },
  ],
  hints: [
    'The answer is monotone: if k removals still leave p as a subsequence, so does k−1 removals. Binary search on k.',
    'For a given k, mark the first k indices of removable as removed, then greedily check if p is a subsequence of the remaining characters.',
    'The subsequence check is O(|s|): scan s left-to-right, skip removed positions, and try to match each character of p in order.',
  ],
  functionName: 'maximumRemovals',
  params: ['s', 'p', 'removable'],
  starterCode: {
    javascript: 'function maximumRemovals(s, p, removable) {\n  \n}\n',
    typescript: "function maximumRemovals(s: string, p: string, removable: number[]): number {\n  \n}",

    python: 'def maximumRemovals(s, p, removable):\n    pass\n',
  },
  visibleTests: [
    { args: ['abcacb', 'ab', [3, 1, 0]], expected: 2 },
    { args: ['abcbddddd', 'abcd', [3, 2, 1, 4, 5, 6]], expected: 1 },
    { args: ['abcd', 'abcd', [0, 1, 2, 3]], expected: 0 },
  ],
  hiddenTests: [
    { args: ['abcdef', 'ace', [5, 1, 3]], expected: 3 },
    { args: ['abcbddddd', 'bdddd', [3, 2, 1, 4, 5, 6]], expected: 2 },
    { args: ['zyz', 'zz', [1]], expected: 1 },
    { args: ['abcde', 'a', [0, 1, 2, 3, 4]], expected: 0 },
  ],
};
