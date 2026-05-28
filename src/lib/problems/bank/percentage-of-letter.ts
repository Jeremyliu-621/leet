import type { Problem } from '../types';

export const problem: Problem = {
  id: 'percentage-of-letter',
  title: 'Percentage of Letter in String',
  difficulty: 'easy',
  tags: ['strings'],
  description: `Given a string \`s\` and a character \`letter\`, return the **percentage** of characters in \`s\` that equal \`letter\`, **rounded down** to the nearest whole percent.`,
  constraints: [
    '1 <= s.length <= 100',
    's consists of lowercase English letters.',
    'letter is a lowercase English letter.',
  ],
  examples: [
    {
      input: 's = "foobar", letter = "o"',
      output: '33',
      explanation: 'The percentage of "o" in "foobar" is 2/6 * 100 = 33.33..., rounded down to 33.',
    },
    {
      input: 's = "jjjj", letter = "k"',
      output: '0',
    },
  ],
  hints: [
    'Count occurrences of `letter` in `s`.',
    'Return `Math.floor(count / s.length * 100)` (JS) or `count * 100 // len(s)` (Python).',
    `\`\`\`js
function percentageLetter(s, letter) {
  return Math.floor(s.split("").filter(c=>c===letter).length/s.length*100);
}\`\`\``,
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
    { args: ['abcde', 'a'], expected: 20 },
    { args: ['mississippi', 's'], expected: 36 },
    { args: ['zzz', 'a'], expected: 0 },
    { args: ['leetcode', 'e'], expected: 37 },
  ],
};
