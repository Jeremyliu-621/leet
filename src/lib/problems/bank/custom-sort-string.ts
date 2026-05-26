import type { Problem } from '../types';

export const problem: Problem = {
  id: 'custom-sort-string',
  title: 'Custom Sort String',
  difficulty: 'medium',
  tags: ['strings', 'hash-map'],
  description: `You are given two strings \`order\` and \`s\`. All the characters of \`order\` are **unique** and were sorted in some custom order previously.

Permute the characters of \`s\` so that they match the order that \`order\` was sorted. More specifically, if a character \`x\` occurs before a character \`y\` in \`order\`, then \`x\` should occur before \`y\` in the permuted string.

Return **any permutation** of \`s\` that satisfies this property.`,
  constraints: [
    '`1 <= order.length <= 26`',
    '`1 <= s.length <= 200`',
    '`order\` and \`s\` consist of lowercase English letters.',
    'All the characters of \`order\` are **unique**.',
  ],
  examples: [
    {
      input: 'order = "cba", s = "abcd"',
      output: '"cbad"',
      explanation: '"a", "b", "c" all appear in order. "d" does not, so it may appear at any position. "cbad", "cbda", "dcba" are all valid.',
    },
    {
      input: 'order = "bcafg", s = "abcd"',
      output: '"bcad"',
      explanation: '"b", "c", "a" appear in s and are ordered per order. "d" is appended at the end.',
    },
  ],
  hints: [
    'Build a frequency map of characters in `s`. Then output characters in the order they appear in `order`, followed by any remaining characters.',
    'Build a rank map: `order[i]` gets rank `i`. Sort the characters of `s` by rank (characters not in `order` go last).',
    `\`\`\`js
const rank = {};
for (let i = 0; i < order.length; i++) rank[order[i]] = i;
return [...s].sort((a,b) => (rank[a]??26)-(rank[b]??26)).join('');\`\`\``
  ],
  functionName: 'customSortString',
  params: ['order', 's'],
  starterCode: {
    javascript: `function customSortString(order, s) {

}`,
    python: `def customSortString(order, s):
    pass`,
  },
  visibleTests: [
    { args: ['cba', 'abcd'], expected: 'cbad' },
    { args: ['bcafg', 'abcd'], expected: 'bcad' },
  ],
  hiddenTests: [
    { args: ['abc', 'abc'], expected: 'abc' },
    { args: ['kqep', 'pekeq'], expected: 'kqeep' },
    { args: ['z', 'abcz'], expected: 'zabc' },
    { args: ['abc', 'xyz'], expected: 'xyz' },
    { args: ['a', 'aaa'], expected: 'aaa' },
  ],
};
