import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-words-longer-than-k',
  title: 'Count Words Longer Than K',
  difficulty: 'easy',
  tags: ['arrays', 'strings'],
  description: `Given an array of strings \`words\` and an integer \`k\`, return the **number of words** whose length is **strictly greater than** \`k\`.`,
  constraints: [
    '1 <= words.length <= 10^3',
    '0 <= words[i].length <= 100',
    '0 <= k <= 100',
    'words[i] consists of lowercase English letters.',
  ],
  examples: [
    {
      input: 'words = ["apple","pie","banana","fig"], k = 4',
      output: '2',
      explanation: '"apple" has length 5 > 4 ✓, "banana" has length 6 > 4 ✓. "pie"(3) and "fig"(3) are not.',
    },
    {
      input: 'words = ["cat","dog","ant"], k = 3',
      output: '0',
      explanation: 'All words have length 3, which is not strictly greater than 3.',
    },
    {
      input: 'words = ["hello","world"], k = 2',
      output: '2',
      explanation: 'Both words have length 5 > 2.',
    },
  ],
  hints: [
    'Filter for words where word.length > k and return the count.',
    'Use strictly greater than (>), not >=.',
    'A simple counter loop: increment when word.length > k.',
  ],
  functionName: 'countWordsLongerThanK',
  params: ['words', 'k'],
  starterCode: {
    javascript: `function countWordsLongerThanK(words, k) {

}`,
    typescript: `function countWordsLongerThanK(words: string[], k: number): number {

}`,
    python: `def countWordsLongerThanK(words: list[str], k: int) -> int:
    pass`,
  },
  visibleTests: [
    { args: [['apple', 'pie', 'banana', 'fig'], 4], expected: 2 },
    { args: [['cat', 'dog', 'ant'], 3], expected: 0 },
    { args: [['hello', 'world'], 2], expected: 2 },
  ],
  hiddenTests: [
    { args: [['a'], 0], expected: 1 },
    { args: [['a'], 1], expected: 0 },
    { args: [['abc', 'de', 'f'], 2], expected: 1 },
    { args: [['one', 'two', 'three', 'four'], 3], expected: 2 },
    { args: [['hello', 'world', 'hi', 'bye'], 3], expected: 2 },
    { args: [['a', 'b', 'c'], 0], expected: 3 },
    { args: [['longword', 'tiny'], 4], expected: 1 },
    { args: [['same', 'word', 'four'], 4], expected: 0 },
  ],
};
