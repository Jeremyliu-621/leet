import type { Problem } from '../types';

export const problem: Problem = {
  id: 'rearrange-characters-to-make-target',
  title: 'Rearrange Characters to Make Target String',
  difficulty: 'easy',
  tags: ['strings', 'hash-map'],
  description: `You are given two **0-indexed** strings \`s\` and \`target\`. You want to create **copies** of \`target\` from the characters of \`s\`.

Return the **maximum** number of copies of \`target\` that can be formed by taking characters from \`s\` and rearranging them. Each character in \`s\` can only be used once in each copy of \`target\`.`,
  constraints: [
    '`1 <= s.length <= 100`',
    '`1 <= target.length <= 10`',
    '`s` and `target` consist of lowercase English letters.',
  ],
  examples: [
    {
      input: 's = "ilovecodingonleetcode", target = "code"',
      output: '2',
      explanation: '"code" can be formed twice using characters from s.',
    },
    {
      input: 's = "abcba", target = "abc"',
      output: '1',
    },
    {
      input: 's = "abbaccaddaeea", target = "aaaaa"',
      output: '1',
    },
  ],
  hints: [
    'Count frequency of each character in s and target. For each character in target, the number of copies is floor(freq_s[c] / freq_target[c]). Return the minimum across all target characters.',
    'Count frequencies of each character in both `s` and `target`. For each character in `target`, we can form `floor(freq_s[c] / freq_target[c])` copies. The answer is the minimum across all target characters.',
    `\`\`\`js
const fs = {}, ft = {};
for (const c of s) fs[c] = (fs[c]||0)+1;
for (const c of target) ft[c] = (ft[c]||0)+1;
return Math.min(...Object.keys(ft).map(c => Math.floor((fs[c]||0) / ft[c])));\`\`\``
  ],
  functionName: 'rearrangeCharacters',
  params: ['s', 'target'],
  starterCode: {
    javascript: `function rearrangeCharacters(s, target) {

}`,
    python: `def rearrangeCharacters(s, target):
    pass`,
  },
  visibleTests: [
    { args: ['ilovecodingonleetcode', 'code'], expected: 2 },
    { args: ['abcba', 'abc'], expected: 1 },
    { args: ['abbaccaddaeea', 'aaaaa'], expected: 1 },
  ],
  hiddenTests: [
    { args: ['a', 'a'], expected: 1 },
    { args: ['a', 'b'], expected: 0 },
    { args: ['aaa', 'a'], expected: 3 },
    { args: ['abcabc', 'abc'], expected: 2 },
    { args: ['xyz', 'xyzxyz'], expected: 0 },
  ],
};
