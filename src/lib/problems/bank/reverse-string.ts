import type { Problem } from '../types';

export const problem: Problem = {
  id: 'reverse-string',
  title: 'Reverse String',
  difficulty: 'easy',
  tags: ['two-pointers'],
  description: `Write a function that reverses a string in-place. The input is given as an array of characters \`s\`.

You must do this by modifying the input array **in-place** with O(1) extra memory. Return the resulting array.`,
  constraints: [
    '1 <= s.length <= 10^5',
    's[i] is a printable ASCII character.',
  ],
  examples: [
    {
      input: "s = ['h','e','l','l','o']",
      output: "['o','l','l','e','h']",
    },
    {
      input: "s = ['H','a','n','n','a','h']",
      output: "['h','a','n','n','a','H']",
    },
  ],
  hints: [
    'Use two pointers — one at the start, one at the end. Swap, then move them toward each other.',
    'Continue until the pointers cross.',
    `\`\`\`js
function reverseString(s) {
  let l=0,r=s.length-1;
  while(l<r){[s[l],s[r]]=[s[r],s[l]];l++;r--;}
  // modifies in place
}\`\`\``,
  ],
  functionName: 'reverseString',
  params: ['s'],
  starterCode: {
    javascript: 'function reverseString(s) {\n  \n}\n',
    python: 'def reverseString(s):\n    pass\n',
  },
  visibleTests: [
    { args: [['h', 'e', 'l', 'l', 'o']], expected: ['o', 'l', 'l', 'e', 'h'] },
    { args: [['H', 'a', 'n', 'n', 'a', 'h']], expected: ['h', 'a', 'n', 'n', 'a', 'H'] },
    { args: [['a']], expected: ['a'] },
  ],
  hiddenTests: [
    { args: [['a', 'b']], expected: ['b', 'a'] },
    { args: [['A', 'B', 'C', 'D']], expected: ['D', 'C', 'B', 'A'] },
    { args: [['1', '2', '3']], expected: ['3', '2', '1'] },
    { args: [['x', 'y', 'z', 'w']], expected: ['w', 'z', 'y', 'x'] },
  ],
};
