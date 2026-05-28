import type { Problem } from '../types';

export const problem: Problem = {
  id: 'first-unique-character-in-string',
  title: 'First Unique Character in a String',
  difficulty: 'easy',
  tags: ['strings', 'hash-map'],
  description: `Given a string \`s\`, find the first non-repeating character in it and return its index. If it does not exist, return \`-1\`.`,
  constraints: [
    '1 <= s.length <= 10^5',
    's consists of only lowercase English letters.',
  ],
  examples: [
    {
      input: 's = "leetcode"',
      output: '0',
      explanation: 'The character \'l\' appears only once at index 0.',
    },
    {
      input: 's = "loveleetcode"',
      output: '2',
      explanation: '\'v\' at index 2 is the first non-repeating character.',
    },
    {
      input: 's = "aabb"',
      output: '-1',
      explanation: 'Every character appears more than once.',
    },
  ],
  hints: [
    'Count the frequency of each character using a hash map.',
    'Then scan left to right and return the first index with frequency 1.',
    `\`\`\`js
function firstUniqChar(s) {
  const freq = {};
  for (const c of s) freq[c] = (freq[c]||0)+1;
  for (let i = 0; i < s.length; i++) if (freq[s[i]] === 1) return i;
  return -1;
}\`\`\``,
  ],
  functionName: 'firstUniqChar',
  params: ['s'],
  starterCode: {
    javascript: `function firstUniqChar(s) {

}`,
    typescript: "function firstUniqChar(s: string): number {\n\n}",

    python: `def firstUniqChar(s):
    pass`,
  },
  visibleTests: [
    { args: ['leetcode'], expected: 0 },
    { args: ['loveleetcode'], expected: 2 },
    { args: ['aabb'], expected: -1 },
  ],
  hiddenTests: [
    { args: ['z'], expected: 0 },
    { args: ['aab'], expected: 2 },
    { args: ['abcabc'], expected: -1 },
    { args: ['abcd'], expected: 0 },
  ],
};
