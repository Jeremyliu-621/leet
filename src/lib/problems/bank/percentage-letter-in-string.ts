import type { Problem } from '../types';

export const problem: Problem = {
  id: 'percentage-letter-in-string',
  title: 'Percentage of Letter in String',
  difficulty: 'easy',
  tags: ['strings', 'hash-map'],
  description: `Given a string \`s\` and a character \`letter\`, return the **percentage** of characters in \`s\` that equal \`letter\` **rounded down** to the nearest whole percent.`,
  constraints: [
    '`1 <= s.length <= 100`',
    '`s` consists of lowercase English letters.',
    '`letter` is a lowercase English letter.',
  ],
  examples: [
    {
      input: 's = "foobar", letter = "o"',
      output: '33',
      explanation: '"foobar" has 6 characters, 2 of which are "o". 2/6 = 0.333... → 33.',
    },
    {
      input: 's = "jjjj", letter = "k"',
      output: '0',
      explanation: 'No "k" in "jjjj".',
    },
  ],
  hints: [
    'Count how many times `letter` appears, then compute floor(count / s.length * 100).',
  ],
  functionName: 'percentageLetter',
  params: ['s', 'letter'],
  starterCode: {
    javascript: 'function percentageLetter(s, letter) {\n  \n}\n',
    python: 'def percentageLetter(s, letter):\n    pass\n',
  },
  visibleTests: [
    { args: ['foobar', 'o'], expected: 33 },
    { args: ['jjjj', 'k'], expected: 0 },
    { args: ['aaa', 'a'], expected: 100 },
  ],
  hiddenTests: [
    { args: ['a', 'a'], expected: 100 },
    { args: ['z', 'a'], expected: 0 },
    { args: ['abcabc', 'a'], expected: 33 },
    { args: ['aaabbb', 'a'], expected: 50 },
  ],
};
