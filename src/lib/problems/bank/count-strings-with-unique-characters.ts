import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-strings-with-unique-characters',
  title: 'Count Strings With Unique Characters',
  difficulty: 'easy',
  tags: ['strings', 'hash-map'],
  description: `Given an array of strings \`words\`, return the number of strings in which **all characters are distinct** (no character appears more than once).`,
  constraints: [
    '1 <= words.length <= 100',
    '1 <= words[i].length <= 100',
    'words[i] consists of lowercase English letters only',
  ],
  examples: [
    {
      input: 'words = ["abc","aab","bcd","aaa"]',
      output: '2',
      explanation: '"abc" and "bcd" have all distinct characters. "aab" and "aaa" have repeated characters.',
    },
    {
      input: 'words = ["a","ab","abc"]',
      output: '3',
      explanation: 'All three strings have unique characters.',
    },
    {
      input: 'words = ["aa","bb","cc"]',
      output: '0',
      explanation: 'Every string contains a repeated character.',
    },
  ],
  hints: [
    'For each word, check whether all characters are distinct by comparing the word\'s length to the number of unique characters it contains.',
    'A `Set` deduplates characters: if `new Set(word).size === word.length`, all characters are unique.',
    'Count the words that pass the check with a simple counter or `filter` + `length`.',
  ],
  functionName: 'countStringsWithUniqueChars',
  params: ['words'],
  starterCode: {
    javascript: `function countStringsWithUniqueChars(words) {
  return words.filter(w => new Set(w).size === w.length).length;
}`,
    typescript: `function countStringsWithUniqueChars(words: string[]): number {
  return words.filter(w => new Set(w).size === w.length).length;
}`,
    python: `def countStringsWithUniqueChars(words):
    return sum(1 for w in words if len(set(w)) == len(w))`,
  },
  visibleTests: [
    { args: [['abc', 'aab', 'bcd', 'aaa']], expected: 2 },
    { args: [['a', 'ab', 'abc']], expected: 3 },
    { args: [['aa', 'bb', 'cc']], expected: 0 },
  ],
  hiddenTests: [
    { args: [['hello', 'world']], expected: 1 },
    { args: [['abcdefg']], expected: 1 },
    { args: [['aabbcc']], expected: 0 },
    { args: [['z']], expected: 1 },
    { args: [['abcd', 'abcda']], expected: 1 },
    { args: [['cat', 'dog', 'rat', 'bat']], expected: 4 },
    { args: [['aaabbb', 'xyz']], expected: 1 },
    { args: [['ab', 'ba', 'a', 'b']], expected: 4 },
  ],
};
