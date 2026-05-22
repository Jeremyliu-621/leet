import type { Problem } from '../types';

export const problem: Problem = {
  id: 'vowel-tally',
  title: 'Vowel Tally',
  difficulty: 'easy',
  tags: ['strings'],
  description:
    'Given a string text, count how many of its characters are vowels.\n\nThe vowels are the letters a, e, i, o, and u, and the count is case-insensitive, so both "A" and "a" count as a vowel. The letter y is never counted.\n\nReturn the total number of vowels as a number.',
  constraints: [
    '0 <= text.length <= 1000',
    'text contains only letters and spaces.',
  ],
  examples: [
    {
      input: 'text = "hello"',
      output: '2',
      explanation: 'The vowels are e and o.',
    },
    {
      input: 'text = "SKY"',
      output: '0',
      explanation: 'y is not treated as a vowel.',
    },
    {
      input: 'text = "Education"',
      output: '5',
    },
  ],
  functionName: 'vowelTally',
  params: ['text'],
  starterCode: {
    javascript: 'function vowelTally(text) {\n  // your code here\n}\n',
  },
  visibleTests: [
    { args: ['hello'], expected: 2 },
    { args: ['SKY'], expected: 0 },
    { args: ['Education'], expected: 5 },
  ],
  hiddenTests: [
    { args: [''], expected: 0 },
    { args: ['AEIOU'], expected: 5 },
    { args: ['aeiouaeiou'], expected: 10 },
    { args: ['rhythm'], expected: 0 },
    { args: ['The quick brown fox'], expected: 5 },
    { args: ['BCDFG'], expected: 0 },
  ],
};
