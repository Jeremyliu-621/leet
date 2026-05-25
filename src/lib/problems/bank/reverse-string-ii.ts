import type { Problem } from '../types';

export const problem: Problem = {
  id: 'reverse-string-ii',
  title: 'Reverse String II',
  difficulty: 'easy',
  tags: ['strings', 'two-pointers'],
  description: `Given a string \`s\` and an integer \`k\`, reverse the first \`k\` characters for every \`2k\` characters counting from the start of the string.

If there are fewer than \`k\` characters left, reverse all of them. If there are less than \`2k\` but greater than or equal to \`k\` characters, then reverse the first \`k\` characters and leave the other as original.`,
  constraints: [
    '1 <= s.length <= 10^4',
    's consists of only lowercase English letters.',
    '1 <= k <= 10^4',
  ],
  examples: [
    {
      input: 's = "abcdefg", k = 2',
      output: '"bacdfeg"',
      explanation: 'Reverse first 2 of "abcd" (indices 0-3): "bacd". Reverse first 2 of "efg" (indices 4-6): "feg". Result: "bacdfeg".',
    },
    {
      input: 's = "abcd", k = 2',
      output: '"bacd"',
      explanation: 'Reverse first 2 of "abcd": "bacd".',
    },
  ],
  hints: [
    'Iterate with step 2k. For each block, reverse s[i..i+k-1].',
    'Handle the case where fewer than k characters remain.',
  ],
  functionName: 'reverseStr',
  params: ['s', 'k'],
  starterCode: {
    javascript: `function reverseStr(s, k) {

}`,
    python: `def reverseStr(s, k):
    pass`,
  },
  visibleTests: [
    { args: ['abcdefg', 2], expected: 'bacdfeg' },
    { args: ['abcd', 2], expected: 'bacd' },
  ],
  hiddenTests: [
    { args: ['a', 1], expected: 'a' },
    { args: ['abcdef', 3], expected: 'cbadef' },
    { args: ['abcdefgh', 3], expected: 'cbadefhg' },
    { args: ['abcde', 4], expected: 'dcbae' },
  ],
};
