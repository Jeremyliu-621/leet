import type { Problem } from '../types';

export const problem: Problem = {
  id: 'reformat-the-string',
  title: 'Reformat the String',
  difficulty: 'easy',
  tags: ['strings'],
  description: `You are given an alphanumeric string \`s\`. (**Alphanumeric** string is a string consisting of lowercase English letters and digits.)

You have to find a permutation of the string where no two **adjacent** characters are of the same type (i.e., no two adjacent characters are both digits or both letters). Return *the reformatted string* or return an **empty string** if it is impossible to reformat.

If there are multiple valid reformattings, return **any** of them. For this problem, use the convention: if letters ≥ digits, start with a letter; otherwise start with a digit.`,
  constraints: [
    '1 <= s.length <= 500',
    's consists of only lowercase English letters and/or digits.',
  ],
  examples: [
    {
      input: 's = "a0b1c2"',
      output: '"a0b1c2"',
      explanation: 'No two adjacent characters have the same type.',
    },
    {
      input: 's = "leetcode"',
      output: '""',
      explanation: 'Only letters, no digits → impossible.',
    },
    {
      input: 's = "1229857369"',
      output: '""',
      explanation: 'Only digits → impossible.',
    },
  ],
  hints: [
    'Separate digits and letters into two arrays.',
    'If their lengths differ by more than 1, return "".',
    'If letters.length >= digits.length start with a letter, else start with a digit; then interleave.',
  ],
  functionName: 'reformat',
  params: ['s'],
  starterCode: {
    javascript: 'function reformat(s) {\n\n}\n',
    python: 'def reformat(s):\n    pass\n',
  },
  visibleTests: [
    { args: ['a0b1c2'], expected: 'a0b1c2' },
    { args: ['leetcode'], expected: '' },
    { args: ['1229857369'], expected: '' },
  ],
  hiddenTests: [
    { args: ['covid2019'], expected: 'c2o0v1i9d' },
    { args: ['ab12'], expected: 'a1b2' },
    { args: ['a1b2c3'], expected: 'a1b2c3' },
    { args: ['abc'], expected: '' },
  ],
};
