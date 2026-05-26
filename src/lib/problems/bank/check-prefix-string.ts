import type { Problem } from '../types';

export const problem: Problem = {
  id: 'check-prefix-string',
  title: 'Check if String Is a Prefix of Array',
  difficulty: 'easy',
  tags: ['strings', 'arrays'],
  description: `Given a string \`s\` and an array of strings \`words\`, return \`true\` if \`s\` is a **prefix string** of \`words\`, and \`false\` otherwise.

A string \`s\` is a **prefix string** of \`words\` if \`s\` can be made by concatenating the first \`k\` strings in \`words\` for some **positive** \`k\` no larger than \`words.length\`.`,
  constraints: [
    '1 <= words.length <= 100',
    '1 <= words[i].length <= 20',
    '1 <= s.length <= 1000',
    'words[i] and s consist of only lowercase English letters.',
  ],
  examples: [
    { input: 's = "iloveleet", words = ["i","love","leet","code"]', output: 'true', explanation: 'Concatenating "i" + "love" + "leet" = "iloveleet".' },
    { input: 's = "iloveleetco", words = ["i","love","leet","code"]', output: 'false', explanation: '"iloveleetco" is not formed by the first k words for any k.' },
    { input: 's = "ab", words = ["a","b","c"]', output: 'true' },
  ],
  hints: [
    'Build the prefix incrementally by concatenating words one at a time and check if it matches s.',
    'Concatenate words one by one. After each addition, check if the prefix equals `s` (return `true`) or if `s` no longer starts with the prefix (return `false`).',
    `\`\`\`js
let pre = '';
for (const w of words) {
  pre += w;
  if (pre === s) return true;
  if (!s.startsWith(pre)) return false;
}
return false;\`\`\``
  ],
  functionName: 'isPrefixString',
  params: ['s', 'words'],
  starterCode: {
    javascript: 'function isPrefixString(s, words) {\n  \n}\n',
    python: 'def isPrefixString(s, words):\n    pass\n',
  },
  visibleTests: [
    { args: ['iloveleet', ['i','love','leet','code']], expected: true },
    { args: ['iloveleetco', ['i','love','leet','code']], expected: false },
    { args: ['ab', ['a','b','c']], expected: true },
  ],
  hiddenTests: [
    { args: ['a', ['a','b','c']], expected: true },
    { args: ['abc', ['a','b','c']], expected: true },
    { args: ['abcd', ['a','b','c']], expected: false },
    { args: ['b', ['a','b','c']], expected: false },
    { args: ['ilove', ['i','love','leetcode']], expected: true },
  ],
};
