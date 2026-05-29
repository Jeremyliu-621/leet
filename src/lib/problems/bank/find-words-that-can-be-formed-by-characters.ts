import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-words-that-can-be-formed-by-characters',
  title: 'Find Words That Can Be Formed by Characters',
  difficulty: 'easy',
  tags: ['strings', 'hash-map'],
  description: `You are given an array of strings \`words\` and a string \`chars\`.

A string is **good** if it can be formed by characters from \`chars\` (each character in \`chars\` can only be used once per position).

Return the sum of lengths of all **good** strings in \`words\`.`,
  constraints: [
    '`1 <= words.length <= 1000`',
    '`1 <= words[i].length, chars.length <= 100`',
    '`words[i]\` and \`chars\` consist of lowercase English letters.',
  ],
  examples: [
    {
      input: 'words = ["cat","bt","hat","tree"], chars = "atach"',
      output: '6',
      explanation: 'Good strings are "cat" (3) and "hat" (3). Sum = 6.',
    },
    {
      input: 'words = ["hello","world","leetcode"], chars = "welldonehoneyr"',
      output: '10',
      explanation: 'Good strings are "hello" (5) and "world" (5). Sum = 10.',
    },
  ],
  hints: [
    'Count the frequency of each character in `chars`. For each word, check if all its character counts fit within the `chars` frequencies.',
    'If a word requires 2 of some character but `chars` only has 1, that word is not good — check each character\'s count individually.',
    '```js\nfunction countCharacters(words, chars) {\n  const cc = {};\n  for (const c of chars) cc[c] = (cc[c] || 0) + 1;\n  let res = 0;\n  for (const w of words) {\n    const wc = {};\n    for (const c of w) wc[c] = (wc[c] || 0) + 1;\n    let good = true;\n    for (const [c, cnt] of Object.entries(wc)) {\n      if ((cc[c] || 0) < cnt) { good = false; break; }\n    }\n    if (good) res += w.length;\n  }\n  return res;\n}\n```',
  ],
  functionName: 'countCharacters',
  params: ['words', 'chars'],
  starterCode: {
    javascript: `function countCharacters(words, chars) {

}`,
    typescript: `function countCharacters(words: string[], chars: string): number {

}`,
    python: `def countCharacters(words, chars):
    pass`,
  },
  visibleTests: [
    { args: [['cat', 'bt', 'hat', 'tree'], 'atach'], expected: 6 },
    { args: [['hello', 'world', 'leetcode'], 'welldonehoneyr'], expected: 10 },
  ],
  hiddenTests: [
    { args: [['a'], 'a'], expected: 1 },
    { args: [['a'], 'b'], expected: 0 },
    { args: [['aa'], 'a'], expected: 0 },
    { args: [['aa'], 'aa'], expected: 2 },
    { args: [['abc', 'def'], 'abcdef'], expected: 6 },
    { args: [['one', 'two', 'three'], 'oentw'], expected: 6 },
  ],
};
