import type { Problem } from '../types';

export const problem: Problem = {
  id: 'reverse-string',
  title: 'Reverse a String',
  difficulty: 'easy',
  tags: ['strings'],
  description: `Given a string \`s\`, return the string with all its characters in reversed order.

For example, reversing \`"hello"\` gives \`"olleh"\`.

Try both the built-in approach and the two-pointer approach (working inward from both ends simultaneously).`,
  constraints: [
    '0 <= s.length <= 1000',
    's consists of printable ASCII characters.',
  ],
  examples: [
    {
      input: 's = "hello"',
      output: '"olleh"',
    },
    {
      input: 's = "Hannah"',
      output: '"hannaH"',
      explanation: 'Case is preserved — H and h are different characters.',
    },
    {
      input: 's = ""',
      output: '""',
      explanation: 'Empty string reversed is still empty.',
    },
  ],
  hints: [
    'The simplest approach is to convert to an array of characters, reverse the array, and join back.',
    'Alternatively, use two pointers `left` and `right` starting at the two ends. Swap the characters at those positions, advance `left` and retreat `right`, and repeat until they meet.',
    '`return s.split("").reverse().join("");` — or the two-pointer swap on a character array if you want O(1) extra space.',
  ],
  functionName: 'reverseString',
  params: ['s'],
  starterCode: {
    javascript: 'function reverseString(s) {\n  // your code here\n}\n',
    python: 'def reverseString(s):\n    # your code here\n    pass\n',
  },
  visibleTests: [
    { args: ['hello'], expected: 'olleh' },
    { args: ['Hannah'], expected: 'hannaH' },
    { args: [''], expected: '' },
  ],
  hiddenTests: [
    { args: ['a'], expected: 'a' },
    { args: ['ab'], expected: 'ba' },
    { args: ['racecar'], expected: 'racecar' },
    { args: ['12345'], expected: '54321' },
    { args: ['Hello, World!'], expected: '!dlroW ,olleH' },
    { args: [' spaces '], expected: ' secaps ' },
  ],
};
