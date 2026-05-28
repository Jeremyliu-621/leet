import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-characters',
  title: 'Find Words That Can Be Formed by Characters',
  difficulty: 'easy',
  tags: ['hash-map', 'strings', 'arrays'],
  description: `You are given an array of strings \`words\` and a string \`chars\`.

A string is **good** if it can be formed by characters from \`chars\` (each character in \`chars\` can only be used once per character occurrence).

Return the sum of lengths of all **good** strings in \`words\`.`,
  constraints: [
    '`1 <= words.length <= 1000`',
    '`1 <= words[i].length, chars.length <= 100`',
    '`words[i]` and `chars` consist of lowercase English letters.',
  ],
  examples: [
    {
      input: 'words = ["cat","bt","hat","tree"], chars = "atach"',
      output: '6',
      explanation: '"cat" (length 3) and "hat" (length 3) can be formed. "bt" lacks \'b\'; "tree" lacks \'r\'.',
    },
    {
      input: 'words = ["hello","world","leetcode"], chars = "welldonehoneyr"',
      output: '10',
      explanation: '"hello" (5) and "world" (5) can be formed. "leetcode" lacks \'t\'.',
    },
  ],
  hints: [
    'Build a frequency map for chars.',
    'For each word, build its own frequency map and check that every character\'s count fits within chars.',
    'Sum the lengths of all words that pass the check.',
  ],
  functionName: 'countCharacters',
  params: ['words', 'chars'],
  starterCode: {
    javascript: `function countCharacters(words, chars) {

}`,
    typescript: "function countCharacters(words: string[], chars: string): number {\n\n}",

    python: `def countCharacters(words, chars):
    pass`,
  },
  visibleTests: [
    { args: [['cat', 'bt', 'hat', 'tree'], 'atach'], expected: 6 },
    { args: [['hello', 'world', 'leetcode'], 'welldonehoneyr'], expected: 10 },
    { args: [['a', 'b'], 'a'], expected: 1 },
  ],
  hiddenTests: [
    { args: [['cat', 'cat', 'cat'], 'cat'], expected: 9 },
    { args: [['xyz'], 'abc'], expected: 0 },
    { args: [['ac', 'ab'], 'abc'], expected: 4 },
    { args: [['a'], 'b'], expected: 0 },
    { args: [['go', 'god'], 'god'], expected: 5 },
  ],
};
