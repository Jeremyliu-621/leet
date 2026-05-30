import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-replacements-to-make-string-balanced',
  title: 'Minimum Replacements to Make String Balanced',
  difficulty: 'easy',
  tags: ['strings'],
  description: `You are given a string \`s\` consisting only of characters \`'a'\` and \`'b'\`.

A string is **balanced** if there is no \`'b'\` that appears before an \`'a'\` in the string, i.e., no \`'ba'\` substring exists.

You may replace any character in \`s\` with either \`'a'\` or \`'b'\`. Return the **minimum number of replacements** needed to make \`s\` balanced.`,
  constraints: [
    '`1 <= s.length <= 10^5`',
    '`s[i]` is either `\'a\'` or `\'b\'`',
  ],
  examples: [
    {
      input: 's = "ab"',
      output: '0',
      explanation: '"ab" is already balanced — no "ba" substring.',
    },
    {
      input: 's = "ba"',
      output: '1',
      explanation: 'Replace "b" with "a" to get "aa", or replace "a" with "b" to get "bb". Both are balanced in 1 replacement.',
    },
    {
      input: 's = "bbaab"',
      output: '2',
      explanation: 'Replace both "a"s to get "bbbbb". 2 replacements.',
    },
  ],
  hints: [
    'A balanced string has all \'a\'s before all \'b\'s (the form a*b*).',
    'Scan left to right keeping a count of \'b\'s seen so far.',
    'When you encounter an \'a\' and there is at least one preceding \'b\', one replacement is needed; decrement the \'b\' count.',
  ],
  functionName: 'minimumReplacement',
  params: ['s'],
  starterCode: {
    javascript: `function minimumReplacement(s) {

}`,
    typescript: `function minimumReplacement(s: string): number {

}`,
    python: `def minimumReplacement(s):
    pass`,
  },
  visibleTests: [
    { args: ['ab'], expected: 0 },
    { args: ['ba'], expected: 1 },
    { args: ['bbaab'], expected: 2 },
  ],
  hiddenTests: [
    { args: ['aaa'], expected: 0 },
    { args: ['bbb'], expected: 0 },
    { args: ['abba'], expected: 1 },
    { args: ['bababab'], expected: 3 },
    { args: ['aaabbb'], expected: 0 },
    { args: ['bbbaaa'], expected: 3 },
    { args: ['abababab'], expected: 3 },
  ],
};
