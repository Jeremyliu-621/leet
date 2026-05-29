import type { Problem } from '../types';

export const problem: Problem = {
  id: 'min-word-length',
  title: 'Minimum Word Length',
  difficulty: 'easy',
  tags: ['arrays', 'strings'],
  description: `Given an array of non-empty strings \`words\`, return the **length of the shortest word**.`,
  constraints: [
    '`1 <= words.length <= 10^3`',
    '`1 <= words[i].length <= 100`',
  ],
  examples: [
    {
      input: 'words = ["hello", "hi", "hey"]',
      output: '2',
      explanation: 'Lengths: hello=5, hi=2, hey=3. Minimum is 2.',
    },
    {
      input: 'words = ["apple", "kiwi", "fig"]',
      output: '3',
      explanation: 'Lengths: apple=5, kiwi=4, fig=3. Minimum is 3.',
    },
    {
      input: 'words = ["a"]',
      output: '1',
      explanation: 'Only one word with length 1. Answer is 1.',
    },
  ],
  functionName: 'minWordLength',
  params: ['words'],
  starterCode: {
    javascript: `/**
 * @param {string[]} words
 * @return {number}
 */
function minWordLength(words) {

}`,
    typescript: `function minWordLength(words: string[]): number {

}`,
    python: `def minWordLength(words: list[str]) -> int:
    pass`,
  },
  hints: [
    'Map each word to its length, then find the minimum among those lengths.',
    'You can iterate and track the minimum: `let min = Infinity; for (const w of words) min = Math.min(min, w.length);`',
    '`return Math.min(...words.map(w => w.length))`',
  ],
  visibleTests: [
    { args: [['hello', 'hi', 'hey']], expected: 2 },
    { args: [['apple', 'kiwi', 'fig']], expected: 3 },
    { args: [['a']], expected: 1 },
  ],
  hiddenTests: [
    { args: [['one', 'two', 'three']], expected: 3 },
    { args: [['x', 'yy', 'zzz']], expected: 1 },
    { args: [['same', 'size', 'word']], expected: 4 },
    { args: [['ab', 'cde', 'f']], expected: 1 },
    { args: [['longword', 'short']], expected: 5 },
    { args: [['aaaa', 'bb', 'ccc', 'dddddd']], expected: 2 },
    { args: [['cat', 'dog', 'ox']], expected: 2 },
    { args: [['z', 'zz', 'zzz', 'zzzz']], expected: 1 },
  ],
};
