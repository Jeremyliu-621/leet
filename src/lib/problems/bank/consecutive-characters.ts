import type { Problem } from '../types';

export const problem: Problem = {
  id: 'consecutive-characters',
  title: 'Consecutive Characters',
  difficulty: 'easy',
  tags: ['strings'],
  description: `The **power** of the string is the maximum length of a non-empty substring that contains only one unique character.

Given a string \`s\`, return *the **power** of* \`s\`.`,
  constraints: [
    '`1 <= s.length <= 500`',
    '`s` consists of only lowercase English letters.',
  ],
  examples: [
    {
      input: 's = "leetcode"',
      output: '2',
      explanation: 'The substring "ee" is of length 2 with the character \'e\' only.',
    },
    {
      input: 's = "abbcccddddeeeeedcba"',
      output: '5',
      explanation: 'The substring "eeeee" is of length 5 with the character \'e\' only.',
    },
  ],
  hints: [
    'Iterate through the string, tracking the current run length. Reset when the character changes.',
  ],
  functionName: 'maxPower',
  params: ['s'],
  starterCode: {
    javascript: `function maxPower(s) {

}`,
    python: `def maxPower(s):
    pass`,
  },
  visibleTests: [
    { args: ['leetcode'], expected: 2 },
    { args: ['abbcccddddeeeeedcba'], expected: 5 },
  ],
  hiddenTests: [
    { args: ['a'], expected: 1 },
    { args: ['aaaa'], expected: 4 },
    { args: ['abcd'], expected: 1 },
    { args: ['aab'], expected: 2 },
    { args: ['triplepillooooow'], expected: 5 },
  ],
};
