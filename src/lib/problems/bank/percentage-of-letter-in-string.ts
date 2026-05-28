import type { Problem } from '../types';

export const problem: Problem = {
  id: 'percentage-of-letter-in-string',
  title: 'Percentage of Letter in String',
  difficulty: 'easy',
  tags: ['strings'],
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
      explanation: '2 out of 6 characters are "o". 2/6 * 100 = 33.33, rounded down = 33.',
    },
    {
      input: 's = "jjjj", letter = "k"',
      output: '0',
    },
  ],
  hints: [
    'Count occurrences of letter, then return Math.floor(count / s.length * 100).',
    'Count occurrences of `letter` in `s`. Percentage = `Math.floor(count / s.length * 100)`.',
    '`return Math.floor([...s].filter(c => c === letter).length / s.length * 100);`'
  ],
  functionName: 'percentageLetter',
  params: ['s', 'letter'],
  starterCode: {
    javascript: `function percentageLetter(s, letter) {

}`,
    typescript: "function percentageLetter(s: string, letter: string): number {\n\n}",

    python: `def percentageLetter(s, letter):
    pass`,
  },
  visibleTests: [
    { args: ['foobar', 'o'], expected: 33 },
    { args: ['jjjj', 'k'], expected: 0 },
  ],
  hiddenTests: [
    { args: ['a', 'a'], expected: 100 },
    { args: ['a', 'b'], expected: 0 },
    { args: ['aaa', 'a'], expected: 100 },
    { args: ['abcde', 'a'], expected: 20 },
    { args: ['aaab', 'a'], expected: 75 },
    { args: ['leetcode', 'e'], expected: 37 },
  ],
};
