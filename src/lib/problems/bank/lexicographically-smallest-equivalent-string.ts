import type { Problem } from '../types';

export const problem: Problem = {
  id: 'lexicographically-smallest-equivalent-string',
  title: 'Lexicographically Smallest Equivalent String',
  difficulty: 'medium',
  tags: ['strings', 'union-find'],
  description: `You are given two strings \`s1\` and \`s2\` of the same length and a string \`baseStr\`.

For each index \`i\`, the characters \`s1[i]\` and \`s2[i]\` are considered **equivalent**. Equivalency is symmetric and transitive — if \`a ↔ b\` and \`b ↔ c\`, then \`a ↔ c\`.

Return the **lexicographically smallest** equivalent string of \`baseStr\` using the equivalency information from \`s1\` and \`s2\`. Replace each character in \`baseStr\` with the smallest character in its equivalence class.`,
  examples: [
    {
      input: 's1 = "parker", s2 = "morris", baseStr = "parser"',
      output: '"makkek"',
      explanation:
        'Pairs: p↔m, a↔o, k↔r, e↔i, r↔s. Groups: {m,p}, {a,o}, {e,i}, {k,r,s}. "parser": p→m, a→a, r→k, s→k, e→e, r→k = "makkek".',
    },
    {
      input: 's1 = "abc", s2 = "cde", baseStr = "adc"',
      output: '"aba"',
      explanation:
        'Pairs give groups {a,c,e} and {b,d}. "adc": a→a, d→b, c→a = "aba".',
    },
    {
      input: 's1 = "ab", s2 = "ba", baseStr = "abba"',
      output: '"aaaa"',
      explanation:
        'a and b are equivalent; both map to the smaller "a".',
    },
  ],
  constraints: [
    '1 <= s1.length <= 1000',
    's1.length == s2.length',
    '1 <= baseStr.length <= 1000',
    's1, s2, and baseStr consist of lowercase English letters.',
  ],
  hints: [
    'Model equivalency as a graph: each lowercase letter is a node; each pair (s1[i], s2[i]) is an undirected edge.',
    'Use Union-Find (DSU) over the 26 letters to group equivalent characters.',
    'When performing a union, always make the smaller character (by char code) the root of the merged group so that find() returns the smallest representative.',
    'For each character in baseStr, call find() to get the root (smallest) of its equivalence class and use that in the output.',
  ],
  functionName: 'smallestEquivalentString',
  params: ['s1', 's2', 'baseStr'],
  starterCode: {
    javascript:
      'function smallestEquivalentString(s1, s2, baseStr) {\n  \n}\n',
    typescript: "function smallestEquivalentString(s1: string, s2: string, baseStr: string): string {\n  \n}",

    python: 'def smallestEquivalentString(s1, s2, baseStr):\n    ',
  },
  visibleTests: [
    { args: ['parker', 'morris', 'parser'], expected: 'makkek' },
    { args: ['abc', 'cde', 'adc'], expected: 'aba' },
    { args: ['ab', 'ba', 'abba'], expected: 'aaaa' },
  ],
  hiddenTests: [
    { args: ['a', 'a', 'a'], expected: 'a' },
    { args: ['zoo', 'mom', 'zoo'], expected: 'mmm' },
    { args: ['aac', 'bbc', 'abc'], expected: 'aac' },
    { args: ['aabbcc', 'bbccaa', 'abc'], expected: 'aaa' },
    { args: ['mno', 'pqr', 'mpr'], expected: 'mmo' },
    { args: ['ac', 'ca', 'b'], expected: 'b' },
    { args: ['xyzabc', 'zyxcba', 'xyz'], expected: 'xyx' },
    { args: ['abcde', 'bcdef', 'aeiou'], expected: 'aaiou' },
  ],
};
