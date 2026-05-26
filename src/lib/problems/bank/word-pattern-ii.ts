import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-words-from-chars',
  title: 'Find Words That Can Be Formed by Characters',
  difficulty: 'easy',
  tags: ['hash-map'],
  description: `You are given an array of strings \`words\` and a string \`chars\`.

A string is **good** if it can be formed by characters from \`chars\` (each character in \`chars\` can only be used once).

Return the sum of lengths of all good strings in \`words\`.`,
  constraints: [
    '1 <= words.length <= 1000',
    '1 <= words[i].length, chars.length <= 100',
    'words[i] and chars consist of lowercase English letters',
  ],
  examples: [
    {
      input: 'words = ["cat","bt","hat","tree"], chars = "atach"',
      output: '6',
      explanation: '"cat" (3) and "hat" (3) can be formed. Total = 6.',
    },
    {
      input: 'words = ["hello","world","leetcode"], chars = "welldonehoneyr"',
      output: '10',
      explanation: '"hello" (5) and "world" (5) can be formed. Total = 10.',
    },
  ],
  hints: [
    'Build a frequency map of chars. For each word, check if its character frequencies are all ≤ the available frequencies in chars.',
    'For each word in `words`, build its own frequency map and compare against the `chars` frequency map. A word is "good" if every character appears at most as many times as it does in `chars`. Sum the lengths of all good words.',
    '```js\nconst freq = {};\nfor (const c of chars) freq[c] = (freq[c]||0)+1;\nfunction isGood(w) {\n  const wf = {};\n  for (const c of w) {\n    wf[c] = (wf[c]||0)+1;\n    if ((wf[c]||0) > (freq[c]||0)) return false;\n  }\n  return true;\n}\nreturn words.filter(isGood).reduce((a,w) => a+w.length, 0);```',
  ],
  functionName: 'countCharacters',
  params: ['words', 'chars'],
  starterCode: {
    javascript: 'function countCharacters(words, chars) {\n  \n}\n',
    python: 'def countCharacters(words, chars):\n    pass\n',
  },
  visibleTests: [
    { args: [['cat', 'bt', 'hat', 'tree'], 'atach'], expected: 6 },
    { args: [['hello', 'world', 'leetcode'], 'welldonehoneyr'], expected: 10 },
    { args: [['a', 'b', 'c'], 'a'], expected: 1 },
  ],
  hiddenTests: [
    { args: [['dyiclysmffuhibgfvapygkorkqllqlvokosv', 'ngbcszvttyovtuhh', 'nbrvr', 'usimv', 'hpln'], 'usdruypficfbpfbivlrhutcgvyjez'], expected: 0 },
    { args: [['abc'], 'abc'], expected: 3 },
    { args: [['abc', 'xyz'], 'ab'], expected: 0 },
    { args: [['ab', 'cd', 'ef'], 'abcdef'], expected: 6 },
  ],
};
