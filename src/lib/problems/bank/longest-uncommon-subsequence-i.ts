import type { Problem } from '../types';

export const problem: Problem = {
  id: 'longest-uncommon-subsequence-i',
  title: 'Longest Uncommon Subsequence I',
  difficulty: 'easy',
  tags: ['strings'],
  description: `Given two strings \`a\` and \`b\`, return the length of the **longest uncommon subsequence** between \`a\` and \`b\`. If no such uncommon subsequence exists, return \`-1\`.

An **uncommon subsequence** between two strings is a string that is a subsequence of exactly one of them.`,
  constraints: [
    '`1 <= a.length, b.length <= 100`',
    '`a` and `b` consist of lower-case English letters.',
  ],
  examples: [
    { input: 'a = "aba", b = "cdc"', output: '3' },
    { input: 'a = "aaa", b = "bbb"', output: '3' },
    { input: 'a = "aaa", b = "aaa"', output: '-1' },
  ],
  hints: [
    'If the strings are equal, they share all subsequences, so there is no uncommon one.',
    'If they differ, the longer string itself is not a subsequence of the shorter one (or they are different lengths). Return max(len(a), len(b)).',
    `\`\`\`js
function findLUSlength(a, b) {
  if (a === b) return -1;
  return Math.max(a.length, b.length);
}\`\`\``,
  ],
  functionName: 'findLUSlength',
  params: ['a', 'b'],
  starterCode: {
    javascript: 'function findLUSlength(a, b) {\n  \n}\n',
    typescript: "function findLUSlength(a: string, b: string): number {\n  \n}",

    python: 'def findLUSlength(a, b):\n    pass\n',
  },
  visibleTests: [
    { args: ['aba', 'cdc'], expected: 3 },
    { args: ['aaa', 'bbb'], expected: 3 },
    { args: ['aaa', 'aaa'], expected: -1 },
  ],
  hiddenTests: [
    { args: ['a', 'b'], expected: 1 },
    { args: ['a', 'a'], expected: -1 },
    { args: ['abc', 'ab'], expected: 3 },
    { args: ['abcd', 'abc'], expected: 4 },
    { args: ['abc', 'abc'], expected: -1 },
  ],
};
