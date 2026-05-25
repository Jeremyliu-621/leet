import type { Problem } from '../types';

export const problem: Problem = {
  id: 'valid-word-abbreviation',
  title: 'Valid Word Abbreviation',
  difficulty: 'easy',
  tags: ['strings', 'two-pointers'],
  description: `A string can be **abbreviated** by replacing any number of **non-adjacent**, **non-empty** substrings with their lengths. The lengths **should not** have leading zeros.

For example, a string such as \`"substitution"\` could be abbreviated as (but not limited to):
- \`"s10n"\` ("s ubstitutio n")
- \`"sub4u4"\` ("sub stit u tion")
- \`"12"\` ("substitution")
- \`"su3i1u2on"\` ("su bst i t u on")
- \`"substitution"\` (no substrings replaced)

The following are **not** valid abbreviations:
- \`"s55n"\` ("s" + "ubstitutio" + "n", the replaced substrings are adjacent)
- \`"s010n"\` (has leading zeros)
- \`"s0ubstitution"\` (replaces an empty substring)

Given a string \`word\` and an abbreviation \`abbr\`, return whether the string **matches** the given abbreviation.

A substring is a contiguous **non-empty** sequence of characters within a string.`,
  constraints: [
    '1 <= word.length <= 20',
    'word consists of only lowercase English letters.',
    '1 <= abbr.length <= 10',
    'abbr consists of lowercase English letters and digits.',
    'All the integers in abbr will fit in a 32-bit integer.',
  ],
  examples: [
    {
      input: 'word = "internationalization", abbr = "i12iz4n"',
      output: 'true',
      explanation: '"i" + 12 chars + "iz" + 4 chars + "n" matches "internationalization".',
    },
    {
      input: 'word = "apple", abbr = "a2e"',
      output: 'false',
      explanation: '"a" + 2 chars = "aXX" but we need "appl" to match — length mismatch.',
    },
  ],
  hints: [
    'Use two pointers i (word) and j (abbr). If abbr[j] is a letter, match it directly. If it\'s a digit, parse the full number and advance i by that count.',
    'Leading zero check: if abbr[j] === "0" and we\'re at the start of a number, return false.',
    'After both pointers finish, return true only if i === word.length and j === abbr.length.',
  ],
  functionName: 'validWordAbbreviation',
  params: ['word', 'abbr'],
  starterCode: {
    javascript: `function validWordAbbreviation(word, abbr) {

}`,
    python: `def validWordAbbreviation(word, abbr):
    pass`,
  },
  visibleTests: [
    { args: ['internationalization', 'i12iz4n'], expected: true },
    { args: ['apple', 'a2e'], expected: false },
  ],
  hiddenTests: [
    { args: ['a', '1'], expected: true },
    { args: ['hi', '2'], expected: true },
    { args: ['word', '4'], expected: true },
    { args: ['word', '04'], expected: false },
    { args: ['abc', 'a1d'], expected: false },
  ],
};
