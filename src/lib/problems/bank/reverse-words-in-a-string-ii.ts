import type { Problem } from '../types';

export const problem: Problem = {
  id: 'reverse-words-in-a-string-ii',
  title: 'Reverse Words in a String II',
  difficulty: 'medium',
  tags: ['strings', 'two-pointers'],
  description: `Given a character array \`s\`, reverse the order of the **words** in-place.

A **word** is defined as a sequence of non-space characters. Words are separated by a single space.

Your solution must be **in-place** (O(1) extra space).

**Example 1:**
\`\`\`
Input: s = ["t","h","e"," ","s","k","y"," ","i","s"," ","b","l","u","e"]
Output: ["b","l","u","e"," ","i","s"," ","t","h","e"," ","s","k","y"]
\`\`\`

**Example 2:**
\`\`\`
Input: s = ["a"]
Output: ["a"]
\`\`\`

**Constraints:**
- \`1 <= s.length <= 10^5\`
- \`s[i]\` is an English letter, digit, or space.
- There is at least one word; no leading or trailing spaces; words separated by single spaces.`,
  constraints: [
    '1 <= s.length <= 10^5',
    'No leading/trailing spaces; words separated by single spaces.',
  ],
  examples: [
    {
      input: 's = ["t","h","e"," ","s","k","y"," ","i","s"," ","b","l","u","e"]',
      output: '["b","l","u","e"," ","i","s"," ","s","k","y"," ","t","h","e"]',
    },
    { input: 's = ["a"]', output: '["a"]' },
  ],
  hints: [
    'Reverse the entire array first. This reverses the word order but also reverses each word.',
    'Then reverse each word individually (segments between spaces) to restore correct word spelling.',
    'Two helper calls: reverseAll(0, n-1), then for each space-delimited segment [start..end] call reverse(start, end).',
  ],
  functionName: 'reverseWords',
  params: ['s'],
  starterCode: {
    javascript:
      'function reverseWords(s) {\n  // modify s in-place, then return s\n}\n',
    typescript: "function reverseWords(s: string[]): string[] {\n  // modify s in-place, then return s\n}",

    python: 'def reverseWords(s):\n    # modify s in-place\n    pass\n',
  },
  visibleTests: [
    {
      args: [['t', 'h', 'e', ' ', 's', 'k', 'y', ' ', 'i', 's', ' ', 'b', 'l', 'u', 'e']],
      expected: ['b', 'l', 'u', 'e', ' ', 'i', 's', ' ', 's', 'k', 'y', ' ', 't', 'h', 'e'],
    },
    { args: [['a']], expected: ['a'] },
    { args: [['a', ' ', 'b']], expected: ['b', ' ', 'a'] },
  ],
  hiddenTests: [
    {
      args: [['h', 'e', 'l', 'l', 'o', ' ', 'w', 'o', 'r', 'l', 'd']],
      expected: ['w', 'o', 'r', 'l', 'd', ' ', 'h', 'e', 'l', 'l', 'o'],
    },
    {
      args: [['a', ' ', 'b', ' ', 'c']],
      expected: ['c', ' ', 'b', ' ', 'a'],
    },
    {
      args: [['o', 'n', 'e', ' ', 't', 'w', 'o', ' ', 't', 'h', 'r', 'e', 'e']],
      expected: ['t', 'h', 'r', 'e', 'e', ' ', 't', 'w', 'o', ' ', 'o', 'n', 'e'],
    },
    {
      args: [['a', ' ', 'b', ' ', 'c', ' ', 'd']],
      expected: ['d', ' ', 'c', ' ', 'b', ' ', 'a'],
    },
  ],
};
