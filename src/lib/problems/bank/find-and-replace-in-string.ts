import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-and-replace-in-string',
  title: 'Find And Replace in String',
  difficulty: 'medium',
  tags: ['strings'],
  description: `You are given a 0-indexed string \`s\` that you must perform \`k\` replacement operations on. The replacement operations are given as three 0-indexed parallel arrays, \`indices\`, \`sources\`, and \`targets\`, all of length \`k\`.

To complete the \`i\`th replacement operation:
1. Check if the substring \`sources[i]\` occurs at index \`indices[i]\` in the original string \`s\`.
2. If it does, replace that substring with \`targets[i]\`.
3. If it does not, do nothing.

All replacement operations must occur **simultaneously**, meaning the replacements don't affect each other. Return the resulting string after all replacement operations are applied.`,
  constraints: [
    '1 <= s.length <= 1000',
    'k == indices.length == sources.length == targets.length',
    '1 <= k <= 100',
    '0 <= indices[i] < s.length',
    '1 <= sources[i].length, targets[i].length <= 50',
    's consists of only lowercase English letters.',
    'sources[i] and targets[i] consist of only lowercase English letters.',
  ],
  examples: [
    {
      input: 's = "abcd", indices = [0,2], sources = ["a","cd"], targets = ["eee","ffff"]',
      output: '"eeebffff"',
      explanation:
        '"a" at index 0 matches sources[0], replaced by "eee". "cd" at index 2 matches sources[1], replaced by "ffff". Result: "eee" + "b" + "ffff".',
    },
    {
      input: 's = "abcd", indices = [0,2], sources = ["ab","ec"], targets = ["eee","ffff"]',
      output: '"eeecd"',
      explanation:
        '"ab" at index 0 matches, replaced by "eee". "ec" does not appear at index 2 ("cd" ≠ "ec"), so no replacement. Result: "eee" + "cd".',
    },
    {
      input: 's = "aaa", indices = [0,1,2], sources = ["a","aa","aaa"], targets = ["b","c","d"]',
      output: '"bc"',
      explanation:
        'Apply simultaneously: index 0 "a" matches → "b"; index 1 "aa" matches → "c"; index 2 "aaa" does not match "a" → no change. Positions 0-0 become "b", positions 1-2 become "c". Result: "bc".',
    },
  ],
  hints: [
    'Process replacements in decreasing order of index so that earlier replacements do not shift the positions of later ones.',
    'For each operation, check whether the substring of s starting at indices[i] with length sources[i].length equals sources[i]. If so, mark that range for replacement.',
    'Build the result by walking through s left-to-right, substituting marked ranges with their target strings and copying unmarked characters unchanged.',
  ],
  functionName: 'findReplaceString',
  params: ['s', 'indices', 'sources', 'targets'],
  starterCode: {
    javascript: `function findReplaceString(s, indices, sources, targets) {

}`,
    python: `def findReplaceString(s, indices, sources, targets):
    pass`,
  },
  visibleTests: [
    {
      args: ['abcd', [0, 2], ['a', 'cd'], ['eee', 'ffff']],
      expected: 'eeebffff',
    },
    {
      args: ['abcd', [0, 2], ['ab', 'ec'], ['eee', 'ffff']],
      expected: 'eeecd',
    },
    {
      args: ['aaa', [0, 1, 2], ['a', 'aa', 'aaa'], ['b', 'c', 'd']],
      expected: 'bc',
    },
  ],
  hiddenTests: [
    { args: ['abcde', [0, 4], ['a', 'e'], ['X', 'Y']], expected: 'XbcdY' },
    { args: ['abcde', [1, 3], ['bc', 'de'], ['P', 'Q']], expected: 'aPQ' },
    { args: ['hello', [0], ['world'], ['X']], expected: 'hello' },
    { args: ['xyz', [0, 1, 2], ['x', 'y', 'z'], ['1', '2', '3']], expected: '123' },
  ],
};
