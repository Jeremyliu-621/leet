import type { Problem } from '../types';

export const problem: Problem = {
  id: 'shortest-string-that-contains-three-strings',
  title: 'Shortest String That Contains Three Strings',
  difficulty: 'medium',
  tags: ['strings'],
  description: `Given three strings \`a\`, \`b\`, and \`c\`, return the **shortest** string that contains all three as **substrings**. If there are multiple valid answers, return the **lexicographically smallest** one.`,
  constraints: [
    '`1 <= a.length, b.length, c.length <= 100`',
    '`a`, `b`, `c` consist only of lowercase English letters.',
  ],
  examples: [
    {
      input: 'a = "abc", b = "bca", c = "aaa"',
      output: '"aaabca"',
      explanation: 'String "aaabca" contains "abc" at index 1, "bca" at index 3, "aaa" at index 0.',
    },
    {
      input: 'a = "ab", b = "ba", c = "aba"',
      output: '"aba"',
      explanation: '"aba" contains "ab" at 0, "aba" at 0, "ba" at 1. Length 3 is the minimum.',
    },
  ],
  hints: [
    'Try all 6 orderings of (a, b, c). For each ordering, greedily merge consecutive pairs: find the longest suffix of the first string that is a prefix of the second, then concatenate without the overlap.',
    'If one string is already a substring of another in the merge, skip the redundant one.',
    'Among all valid 6-ordering results, pick the shortest. Break ties lexicographically.',
  ],
  functionName: 'minimumString',
  params: ['a', 'b', 'c'],
  starterCode: {
    javascript: `function minimumString(a, b, c) {

}`,
    typescript: `function minimumString(a: string, b: string, c: string): string {

}`,
    python: `def minimumString(a, b, c):
    pass`,
  },
  visibleTests: [
    { args: ['abc', 'bca', 'aaa'], expected: 'aaabca' },
    { args: ['ab', 'ba', 'aba'], expected: 'aba' },
    { args: ['a', 'b', 'c'], expected: 'abc' },
  ],
  hiddenTests: [
    { args: ['abc', 'abc', 'abc'], expected: 'abc' },
    { args: ['ab', 'cd', 'ef'], expected: 'abcdef' },
    { args: ['xyz', 'yz', 'z'], expected: 'xyz' },
    { args: ['a', 'ab', 'abc'], expected: 'abc' },
    { args: ['abcd', 'bcde', 'cdef'], expected: 'abcdef' },
    { args: ['aab', 'bba', 'abb'], expected: 'aabba' },
    { args: ['ba', 'a', 'a'], expected: 'ba' },
  ],
};
