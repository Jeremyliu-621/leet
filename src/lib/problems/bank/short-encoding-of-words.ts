import type { Problem } from '../types';

export const problem: Problem = {
  id: 'short-encoding-of-words',
  title: 'Short Encoding of Words',
  difficulty: 'medium',
  tags: ['trie', 'strings', 'hash-map'],
  description: `A **valid encoding** of an array of \`words\` is any reference string \`s\` and array of indices \`indices\` such that:

- \`words.length == indices.length\`
- The reference string \`s\` ends with the \`'#'\` character.
- For each index \`indices[i]\`, the **substring** of \`s\` starting from \`indices[i]\` and up to (not including) the next \`'#'\` character is equal to \`words[i]\`.

Given an array of \`words\`, return the **length of the shortest reference string** \`s\` possible of any valid encoding of \`words\`.`,
  constraints: [
    '`1 <= words.length <= 2000`',
    '`1 <= words[i].length <= 7`',
    '`words[i]` consists of only lowercase English letters.',
  ],
  examples: [
    {
      input: 'words = ["time","me","bell"]',
      output: '10',
      explanation: '"time#bell#" is a valid encoding. "time" starts at 0, "me" starts at 2 (suffix of "time"), "bell" starts at 5.',
    },
    {
      input: 'words = ["t"]',
      output: '2',
      explanation: '"t#" has length 2.',
    },
    {
      input: 'words = ["me","time"]',
      output: '7',
      explanation: '"time#me#" would be 8 but "time" contains "me" as suffix, so "time#" (6 chars) covers both → wait, "me" is at index 2 within "time#".',
    },
  ],
  hints: [
    'A word needs its own encoding slot only if it is NOT a suffix of any other word. If word A is a suffix of word B, A is already encoded within B.',
    'Use a set of all words. For each word, remove all its proper suffixes from the set. The answer is the sum of (length + 1) for each remaining word.',
    'Alternatively, build a trie of reversed words. Each leaf in the trie contributes (depth + 1) to the answer, since a leaf means no other word has it as a suffix.',
  ],
  functionName: 'minimumLengthEncoding',
  params: ['words'],
  starterCode: {
    javascript: `function minimumLengthEncoding(words) {

}`,
    typescript: 'function minimumLengthEncoding(words: string[]): number {\n\n}',
    python: `def minimumLengthEncoding(words):
    pass`,
  },
  visibleTests: [
    { args: [['time', 'me', 'bell']], expected: 10 },
    { args: [['t']], expected: 2 },
    { args: [['me', 'time']], expected: 5 },
  ],
  hiddenTests: [
    { args: [['a']], expected: 2 },
    { args: [['a', 'b']], expected: 4 },
    { args: [['a', 'a']], expected: 2 },
    { args: [['abc', 'bc', 'c']], expected: 4 },
    { args: [['feipourvjotg', 'f', 'fers']], expected: 20 },
    { args: [['time', 'time']], expected: 5 },
    { args: [['abcd', 'bcd', 'cd', 'd']], expected: 5 },
    { args: [['hello', 'llo', 'lo', 'o']], expected: 6 },
  ],
};
