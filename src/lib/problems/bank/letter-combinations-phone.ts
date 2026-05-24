import type { Problem } from '../types';

export const problem: Problem = {
  id: 'letter-combinations-phone',
  title: 'Letter Combinations of a Phone Number',
  difficulty: 'medium',
  tags: ['hash-map'],
  description: `Given a string \`digits\` containing digits from 2 to 9 inclusive, return all possible letter combinations that the number could represent. Return the answer in **any order**.

A mapping of digits to letters (just like on a telephone keypad) is given below:
- 2 → abc, 3 → def, 4 → ghi, 5 → jkl, 6 → mno, 7 → pqrs, 8 → tuv, 9 → wxyz`,
  constraints: [
    '`0 <= digits.length <= 4`',
    '`digits[i]` is a digit in the range `[\'2\', \'9\']`',
  ],
  examples: [
    {
      input: 'digits = "23"',
      output: '["ad","ae","af","bd","be","bf","cd","ce","cf"]',
    },
    {
      input: 'digits = ""',
      output: '[]',
    },
    {
      input: 'digits = "2"',
      output: '["a","b","c"]',
    },
  ],
  hints: [
    'Use backtracking. At each step, pick the next digit and iterate over its corresponding letters.',
    'A map stores the digit-to-letters mapping: `{ "2": "abc", "3": "def", ... }`.',
    'When the current combination has the same length as `digits`, add it to the results.',
  ],
  functionName: 'letterCombinations',
  params: ['digits'],
  starterCode: {
    javascript: `function letterCombinations(digits) {

}`,
    python: `def letterCombinations(digits):
    pass`,
  },
  visibleTests: [
    {
      args: ['23'],
      expected: ['ad', 'ae', 'af', 'bd', 'be', 'bf', 'cd', 'ce', 'cf'],
    },
    { args: [''], expected: [] },
    { args: ['2'], expected: ['a', 'b', 'c'] },
  ],
  hiddenTests: [
    { args: ['9'], expected: ['w', 'x', 'y', 'z'] },
    {
      args: ['234'],
      expected: [
        'adg', 'adh', 'adi', 'aeg', 'aeh', 'aei', 'afg', 'afh', 'afi',
        'bdg', 'bdh', 'bdi', 'beg', 'beh', 'bei', 'bfg', 'bfh', 'bfi',
        'cdg', 'cdh', 'cdi', 'ceg', 'ceh', 'cei', 'cfg', 'cfh', 'cfi',
      ],
    },
    { args: ['22'], expected: ['aa', 'ab', 'ac', 'ba', 'bb', 'bc', 'ca', 'cb', 'cc'] },
  ],
};
