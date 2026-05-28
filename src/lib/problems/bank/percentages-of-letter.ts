import type { Problem } from '../types';

export const problem: Problem = {
  id: 'percentages-of-letter',
  title: 'Percentage of Letter in String',
  difficulty: 'easy',
  tags: ['strings'],
  description: `Given a string \`s\` and a character \`letter\`, return the **percentage** of characters in \`s\` that equal \`letter\` **rounded down** to the nearest whole percent.`,
  constraints: [
    '1 <= s.length <= 100',
    's consists of lowercase English letters.',
    'letter is a lowercase English letter.',
  ],
  examples: [
    {
      input: 's = "foobar", letter = "o"',
      output: '33',
      explanation: 'The percentage of "o" is 2/6 * 100 = 33.33..., rounded down to 33.',
    },
    {
      input: 's = "jjjj", letter = "k"',
      output: '0',
    },
  ],
  hints: [
    'Level 1: Count occurrences of letter in s.',
    'Level 2: Return Math.floor(count / s.length * 100).',
    'Level 3: return Math.floor(s.split("").filter(c=>c===letter).length/s.length*100);',
  ],
  functionName: 'percentageLetter',
  params: ['s', 'letter'],
  starterCode: {
    javascript: 'function percentageLetter(s, letter) {\n  // your code here\n}\n',
    typescript: "function percentageLetter(s: string, letter: string): number {\n  // your code here\n}",

    python: 'def percentageLetter(s, letter):\n    # your code here\n    pass\n',
  },
  visibleTests: [
    { args: ['foobar', 'o'], expected: 33 },
    { args: ['jjjj', 'k'], expected: 0 },
  ],
  hiddenTests: [
    { args: ['aaaa', 'a'], expected: 100 },
    { args: ['abc', 'a'], expected: 33 },
    { args: ['leetcode', 'e'], expected: 37 },
    { args: ['z', 'z'], expected: 100 },
    { args: ['abc', 'd'], expected: 0 },
  ],
};
