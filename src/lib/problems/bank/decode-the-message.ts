import type { Problem } from '../types';

export const problem: Problem = {
  id: 'decode-the-message',
  title: 'Decode the Message',
  difficulty: 'easy',
  tags: ['strings', 'hash-map'],
  description: `You are given the strings \`key\` and \`message\`, which represent a cipher key and a secret message, respectively. The steps to decode \`message\` are as follows:

1. Use the first appearance of all 26 lowercase English letters in \`key\` as the order of the substitution table.
2. Align the substitution table with the plain text alphabet.
3. Each letter in \`message\` is then substituted using the table.
4. Spaces \`' '\` are transformed to spaces.

Return the decoded message.`,
  constraints: [
    '26 <= key.length <= 2000',
    'key consists of lowercase English letters and spaces',
    '1 <= message.length <= 2000',
    'message consists of lowercase English letters and spaces',
  ],
  examples: [
    { input: 'key = "the quick brown fox jumps over the lazy dog", message = "vkbs bs t suepuv"', output: '"this is a secret"', explanation: 'The table maps letters using first occurrences in key.' },
    { input: 'key = "eljuxhpwnyrdgtqkviszcfmabo", message = "zwx hnfx lqantp mnoeius ycgk vcnjrdb"', output: '"the five boxing wizards jump quickly"' },
  ],
  hints: [
    'Build a map from each letter in key (by first appearance) to a, b, c... Then decode each character.',
  ],
  functionName: 'decodeMessage',
  params: ['key', 'message'],
  starterCode: {
    javascript: 'function decodeMessage(key, message) {\n  \n}\n',
    python: 'def decodeMessage(key, message):\n    pass\n',
  },
  visibleTests: [
    { args: ['the quick brown fox jumps over the lazy dog', 'vkbs bs t suepuv'], expected: 'this is a secret' },
    { args: ['eljuxhpwnyrdgtqkviszcfmabo', 'zwx hnfx lqantp mnoeius ycgk vcnjrdb'], expected: 'the five boxing wizards jump quickly' },
    { args: ['abcdefghijklmnopqrstuvwxyz', 'hello world'], expected: 'hello world' },
  ],
  hiddenTests: [
    { args: ['the quick brown fox jumps over the lazy dog', 'helo'], expected: 'bcuk' },
    { args: ['abcdefghijklmnopqrstuvwxyz', 'abc xyz'], expected: 'abc xyz' },
    { args: ['the quick brown fox jumps over the lazy dog', 'the'], expected: 'abc' },
  ],
};
