import type { Problem } from '../types';

export const problem: Problem = {
  id: 'group-shifted-strings',
  title: 'Group Shifted Strings',
  difficulty: 'medium',
  tags: ['strings', 'hash-map'],
  description: `We can **shift** a string by moving each character to its next letter in the alphabet: \`'a' → 'b' → ... → 'z' → 'a'\`.

For example, shifting \`"abc"\` by 1 gives \`"bcd"\`, and shifting \`"xyz"\` by 1 gives \`"yza"\`.

We say two strings belong to the same **shift group** if one can be transformed into the other by some number of shifts.

Given an array of strings \`strings\`, group all strings that belong to the same shift group together and return the groups.

Return the result with each group's strings sorted lexicographically, and the groups sorted lexicographically by their first element.`,
  examples: [
    {
      input: 'strings = ["abc","bcd","acef","xyz","az","ba","a","z"]',
      output: '[["a","z"],["abc","bcd","xyz"],["acef"],["az","ba"]]',
      explanation: '"abc", "bcd", and "xyz" all share the same difference pattern between consecutive characters. "az" and "ba" share a pattern. "a" and "z" are both single-character strings.',
    },
    {
      input: 'strings = ["a"]',
      output: '[["a"]]',
      explanation: 'Only one string; it forms its own group.',
    },
  ],
  constraints: [
    '1 <= strings.length <= 200',
    '1 <= strings[i].length <= 50',
    'strings[i] consists of lowercase English letters.',
  ],
  functionName: 'groupStrings',
  params: ['strings'],
  starterCode: {
    javascript: 'function groupStrings(strings) {\n  // your code here\n}\n',
    python: 'def groupStrings(strings):\n    # your code here\n    pass\n',
  },
  hints: [
    'Two strings belong to the same shift group if and only if the differences between consecutive characters (mod 26) are identical.',
    'For each string, compute its "shift key": a tuple/array of differences `(s[i+1] - s[i] + 26) % 26` for i in 0..len-2. Use the string representation of this tuple as a hash map key.',
    'Strings of different lengths can never be in the same group. The key naturally encodes length because its length is `s.length - 1`.',
  ],
  visibleTests: [
    {
      args: [['abc', 'bcd', 'acef', 'xyz', 'az', 'ba', 'a', 'z']],
      expected: [['a', 'z'], ['abc', 'bcd', 'xyz'], ['acef'], ['az', 'ba']],
    },
    {
      args: [['a']],
      expected: [['a']],
    },
    {
      args: [['az', 'za']],
      expected: [['az'], ['za']],
    },
  ],
  hiddenTests: [
    {
      args: [['ab', 'bc', 'cd', 'ac']],
      expected: [['ab', 'bc', 'cd'], ['ac']],
    },
    {
      args: [['aa', 'bb', 'cc']],
      expected: [['aa', 'bb', 'cc']],
    },
    {
      args: [['a', 'b', 'c', 'z']],
      expected: [['a', 'b', 'c', 'z']],
    },
    {
      args: [['abc', 'xyz', 'bcd']],
      expected: [['abc', 'bcd', 'xyz']],
    },
    {
      args: [['hello', 'world', 'ifmmp']],
      expected: [['hello', 'ifmmp'], ['world']],
    },
  ],
};
