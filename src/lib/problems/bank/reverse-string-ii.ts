import type { Problem } from '../types';

export const problem: Problem = {
  id: 'reverse-string-ii',
  title: 'Reverse String II',
  difficulty: 'easy',
  tags: ['strings'],
  description: `Given a string \`s\` and an integer \`k\`, reverse the first \`k\` characters for every \`2k\` characters counting from the start of the string.

If there are fewer than \`k\` characters left, reverse all of them. If there are between \`k\` and \`2k\` characters left, reverse the first \`k\` characters and leave the others as they are.`,
  constraints: [
    '1 <= s.length <= 10^4',
    's consists of only lowercase English letters',
    '1 <= k <= 10^4',
  ],
  examples: [
    { input: 's = "abcdefg", k = 2', output: '"bacdfeg"', explanation: 'Reverse first 2 of every 4 chars.' },
    { input: 's = "abcd", k = 2', output: '"bacd"' },
  ],
  hints: [
    'Iterate through the string in steps of 2k. For each block, reverse the first min(k, remaining) characters.',
  ],
  functionName: 'reverseStr',
  params: ['s', 'k'],
  starterCode: {
    javascript: 'function reverseStr(s, k) {\n  \n}\n',
    python: 'def reverseStr(s, k):\n    pass\n',
  },
  visibleTests: [
    { args: ['abcdefg', 2], expected: 'bacdfeg' },
    { args: ['abcd', 2], expected: 'bacd' },
    { args: ['a', 2], expected: 'a' },
  ],
  hiddenTests: [
    { args: ['abcdef', 3], expected: 'cbadef' },
    { args: ['abcdefgh', 3], expected: 'cbadefhg' },
    { args: ['ab', 1], expected: 'ab' },
    { args: ['abcde', 5], expected: 'edcba' },
  ],
};
