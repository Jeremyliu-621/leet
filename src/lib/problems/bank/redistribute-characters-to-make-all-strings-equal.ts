import type { Problem } from '../types';

export const problem: Problem = {
  id: 'redistribute-characters-to-make-all-strings-equal',
  title: 'Redistribute Characters to Make All Strings Equal',
  difficulty: 'easy',
  tags: ['strings', 'hash-map'],
  description: `You are given an array \`words\` of strings. In one step you can choose any character of any string in \`words\` and move it to any other position in any other string in \`words\`. Return \`true\` if you can make every string in \`words\` equal, and \`false\` otherwise.`,
  constraints: [
    '1 <= words.length <= 100',
    '1 <= words[i].length <= 100',
    'words[i] consists of lowercase English letters',
  ],
  examples: [
    {
      input: 'words = ["abc","aabc","bc"]',
      output: 'true',
      explanation: 'Move the first \'a\' in words[1] to words[2]: ["abc","abc","abc"].',
    },
    {
      input: 'words = ["ab","a"]',
      output: 'false',
      explanation: 'The total count of \'b\' is 1, which is not divisible by 2 (the number of strings).',
    },
  ],
  hints: [
    'Count the total frequency of each character across all strings.',
    'For a character to be distributed equally, its total count must be divisible by the number of strings.',
    'If every character\'s count is divisible by words.length, return true; otherwise false.',
  ],
  functionName: 'makeEqual',
  params: ['words'],
  starterCode: {
    javascript: `function makeEqual(words) {

}`,
    python: `def makeEqual(words):
    pass`,
  },
  visibleTests: [
    { args: [['abc', 'aabc', 'bc']], expected: true },
    { args: [['ab', 'a']], expected: false },
  ],
  hiddenTests: [
    { args: [['z']], expected: true },
    { args: [['a', 'a', 'a']], expected: true },
    { args: [['aa', 'bb']], expected: true },
    { args: [['aab', 'bbc', 'c']], expected: false },
    { args: [['abc', 'def']], expected: false },
    { args: [['aaa', 'aaa', 'aaa']], expected: true },
  ],
};
