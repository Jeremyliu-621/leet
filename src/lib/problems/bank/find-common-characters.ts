import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-common-characters',
  title: 'Find Common Characters',
  difficulty: 'easy',
  tags: ['strings'],
  description: `Given a string array \`words\`, return *an array of all characters that show up in all strings within the* \`words\` *(including duplicates)*. You may return the answer in **any order**.`,
  constraints: [
    '1 <= words.length <= 100',
    '1 <= words[i].length <= 100',
    'words[i] consists of lowercase English letters.',
  ],
  examples: [
    {
      input: 'words = ["bella","label","roller"]',
      output: '["e","l","l"]',
    },
    {
      input: 'words = ["cool","lock","cook"]',
      output: '["c","o"]',
    },
  ],
  hints: [
    'For each word, build a frequency array of 26 lowercase letters.',
    'Take the element-wise minimum across all frequency arrays.',
    'The minimum frequency of each letter is how many times it appears in all words.',
  ],
  functionName: 'commonChars',
  params: ['words'],
  starterCode: {
    javascript: `function commonChars(words) {

}`,
    typescript: "function commonChars(words: string[]): string[] {\n\n}",

    python: `def commonChars(words):
    pass`,
  },
  visibleTests: [
    { args: [['bella', 'label', 'roller']], expected: ['e', 'l', 'l'] },
    { args: [['cool', 'lock', 'cook']], expected: ['c', 'o'] },
  ],
  hiddenTests: [
    { args: [['a', 'b']], expected: [] },
    { args: [['abc', 'abc', 'abc']], expected: ['a', 'b', 'c'] },
    { args: [['aabb', 'bb', 'bb']], expected: ['b', 'b'] },
    { args: [['ab', 'ab', 'ab']], expected: ['a', 'b'] },
    { args: [['aabbc', 'abc', 'ac']], expected: ['a', 'c'] },
  ],
};
