import type { Problem } from '../types';

export const problem: Problem = {
  id: 'sort-words-by-length',
  title: 'Sort Words by Length',
  difficulty: 'easy',
  tags: ['arrays', 'strings'],
  description: `Given an array of strings \`words\`, return the array sorted by word length in **ascending order**. Words of equal length may appear in any order.`,
  constraints: [
    '1 <= words.length <= 10^3',
    '1 <= words[i].length <= 100',
    'words[i] consists of lowercase English letters.',
  ],
  examples: [
    {
      input: 'words = ["banana","apple","fig","date"]',
      output: '["fig","date","apple","banana"]',
      explanation: 'Lengths: "fig"=3, "date"=4, "apple"=5, "banana"=6. Sorted ascending by length.',
    },
    {
      input: 'words = ["cat","dog","ant"]',
      output: '["cat","dog","ant"]',
      explanation: 'All three words have length 3; any order is acceptable.',
    },
    {
      input: 'words = ["z","ab"]',
      output: '["z","ab"]',
      explanation: '"z" has length 1 and "ab" has length 2.',
    },
  ],
  hints: [
    'Use a sort with a comparator that compares word lengths: (a, b) => a.length - b.length.',
    'In Python, sorted(words, key=lambda w: len(w)) achieves the same result.',
    'Most built-in stable sorts preserve the relative order of equal-length words.',
  ],
  functionName: 'sortWordsByLength',
  params: ['words'],
  starterCode: {
    javascript: `function sortWordsByLength(words) {

}`,
    typescript: `function sortWordsByLength(words: string[]): string[] {

}`,
    python: `def sortWordsByLength(words: list[str]) -> list[str]:
    pass`,
  },
  visibleTests: [
    { args: [['banana', 'apple', 'fig', 'date']], expected: ['fig', 'date', 'apple', 'banana'] },
    { args: [['cat', 'dog', 'ant']], expected: ['cat', 'dog', 'ant'] },
    { args: [['z', 'ab']], expected: ['z', 'ab'] },
  ],
  hiddenTests: [
    { args: [['a']], expected: ['a'] },
    { args: [['hello', 'hi', 'hey']], expected: ['hi', 'hey', 'hello'] },
    { args: [['one', 'two', 'three', 'four']], expected: ['one', 'two', 'four', 'three'] },
    { args: [['zzz', 'zz', 'z']], expected: ['z', 'zz', 'zzz'] },
    { args: [['abc', 'de', 'f', 'ghij']], expected: ['f', 'de', 'abc', 'ghij'] },
    { args: [['longer', 'short']], expected: ['short', 'longer'] },
    { args: [['same', 'name', 'fame']], expected: ['same', 'name', 'fame'] },
    { args: [['aa', 'b', 'ccc', 'dddd']], expected: ['b', 'aa', 'ccc', 'dddd'] },
  ],
};
