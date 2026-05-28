import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-substrings-that-differ-by-one-character',
  title: 'Count Substrings That Differ by One Character',
  difficulty: 'medium',
  tags: ['strings'],
  description: `Given two strings \`s\` and \`t\`, find the number of ways you can choose a non-empty substring of \`s\` and replace a **single character** by a different character such that the resulting substring is a substring of \`t\`. In other words, find the number of substrings in \`s\` that differ from some substring in \`t\` by **exactly one character**.

Return the number of substrings that satisfy the condition above.`,
  constraints: [
    '1 <= s.length, t.length <= 100',
    's and t consist of lowercase English letters only.',
  ],
  examples: [
    {
      input: 's = "aba", t = "baba"',
      output: '6',
      explanation: '6 pairs of substrings that differ by exactly one character.',
    },
    {
      input: 's = "ab", t = "bb"',
      output: '3',
      explanation: '"ab" vs "bb", "a" vs "b" (pos 0), "a" vs "b" (pos 1).',
    },
  ],
  hints: [
    'Enumerate all starting positions (i in s, j in t) for the diagonal comparison.',
    'Walk along each diagonal: track prev = count of matching substrings ending before the current mismatch, cur = count of matching substrings since the last mismatch.',
    'At each step: if chars differ, prev = cur + 1, cur = 0; else cur++. Add prev to count.',
  ],
  functionName: 'countSubstrings',
  params: ['s', 't'],
  starterCode: {
    javascript: `function countSubstrings(s, t) {

}`,
    python: `def countSubstrings(s, t):
    pass`,
  },
  visibleTests: [
    { args: ['aba', 'baba'], expected: 6 },
    { args: ['ab', 'bb'], expected: 3 },
  ],
  hiddenTests: [
    { args: ['a', 'a'], expected: 0 },
    { args: ['a', 'b'], expected: 1 },
    { args: ['aa', 'aa'], expected: 0 },
    { args: ['ab', 'cd'], expected: 4 },
    { args: ['abe', 'zabe'], expected: 9 },
  ],
};
