import type { Problem } from '../types';

export const problem: Problem = {
  id: 'length-of-last-word',
  title: 'Length of Last Word',
  difficulty: 'easy',
  tags: ['strings'],
  description: `Given a string \`s\` consisting of words and spaces, return the **length of the last word** in the string. A **word** is a maximal substring consisting of non-space characters only.`,
  constraints: [
    '1 <= s.length <= 10000',
    's consists of only English letters and spaces',
    'There is at least one word in s',
  ],
  examples: [
    {
      input: 's = "Hello World"',
      output: '5',
      explanation: 'The last word is "World" with length 5.',
    },
    {
      input: 's = "   fly me   to   the moon  "',
      output: '4',
      explanation: 'The last word is "moon" with length 4.',
    },
    {
      input: 's = "luffy is still joyboy"',
      output: '6',
      explanation: 'The last word is "joyboy" with length 6.',
    },
  ],
  hints: [
    'Trim trailing spaces, then find the last space. The last word starts right after the last space.',
    'Split by spaces and return the length of the last non-empty token. Or scan right-to-left: skip trailing spaces, then count non-space characters.',
    '`const t=s.trimEnd(); return t.length-t.lastIndexOf(" ")-1;`',
  ],
  functionName: 'lengthOfLastWord',
  params: ['s'],
  starterCode: {
    javascript: 'function lengthOfLastWord(s) {\n  // your code here\n}\n',
    typescript: "function lengthOfLastWord(s: string): number {\n  // your code here\n}",

    python: 'def lengthOfLastWord(s: str) -> int:\n    # your code here\n    pass\n',
  },
  visibleTests: [
    { args: ['Hello World'], expected: 5 },
    { args: ['   fly me   to   the moon  '], expected: 4 },
    { args: ['luffy is still joyboy'], expected: 6 },
  ],
  hiddenTests: [
    { args: ['a'], expected: 1 },
    { args: ['a '], expected: 1 },
    { args: ['  hello  world '], expected: 5 },
    { args: ['day'], expected: 3 },
  ],
};
