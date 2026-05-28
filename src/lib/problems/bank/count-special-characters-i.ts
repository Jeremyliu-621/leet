import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-special-characters-i',
  title: 'Count the Number of Special Characters I',
  difficulty: 'easy',
  tags: ['strings', 'hash-map'],
  description: `You are given a string \`word\`. A letter \`c\` is called **special** if it appears in both lowercase and uppercase in \`word\`.

Return the number of **special** letters in \`word\`.`,
  constraints: [
    '1 <= word.length <= 50',
    'word consists of only lowercase and uppercase English letters.',
  ],
  examples: [
    {
      input: 'word = "aaAbcBC"',
      output: '3',
      explanation: 'The special characters are a (A and a both appear), b (B and b both appear), and c (C and c both appear).',
    },
    {
      input: 'word = "abc"',
      output: '0',
      explanation: 'No uppercase letters, so no character appears in both cases.',
    },
    {
      input: 'word = "abBCab"',
      output: '1',
      explanation: 'Only b/B appears in both cases.',
    },
  ],
  hints: [
    'Collect the set of all lowercase letters in word and the set of all uppercase letters in word.',
    'A letter is special if its lowercase version is in the lowercase set and its uppercase version is in the uppercase set.',
    'Iterate over all 26 letters and check.',
  ],
  functionName: 'numberOfSpecialChars',
  params: ['word'],
  starterCode: {
    javascript: 'function numberOfSpecialChars(word) {\n\n}',
    python: 'def numberOfSpecialChars(word):\n    pass',
  },
  visibleTests: [
    { args: ['aaAbcBC'], expected: 3 },
    { args: ['abc'], expected: 0 },
    { args: ['abBCab'], expected: 1 },
  ],
  hiddenTests: [
    { args: ['A'], expected: 0 },
    { args: ['Aa'], expected: 1 },
    { args: ['AaBb'], expected: 2 },
    { args: ['aAbBcCdDeE'], expected: 5 },
    { args: ['ZZZzzz'], expected: 1 },
    { args: ['abcdefg'], expected: 0 },
    { args: ['ABCDEFGabcdefg'], expected: 7 },
  ],
};
