import type { Problem } from '../types';

export const problem: Problem = {
  id: 'longest-string-in-array',
  title: 'Longest String in Array',
  difficulty: 'easy',
  tags: ['arrays', 'strings'],
  description: `Given an array of non-empty strings \`words\`, return the **longest string** in the array. If multiple strings share the maximum length, return the one that appears **first**.`,
  constraints: [
    '1 <= words.length <= 10^3',
    '1 <= words[i].length <= 100',
    'words[i] consists of lowercase English letters.',
  ],
  examples: [
    {
      input: 'words = ["apple","banana","fig","date"]',
      output: '"banana"',
      explanation: '"banana" has length 6, which is the longest.',
    },
    {
      input: 'words = ["cat","dog","cow"]',
      output: '"cat"',
      explanation: 'All have length 3; return the first one.',
    },
    {
      input: 'words = ["hello"]',
      output: '"hello"',
      explanation: 'Single element is trivially the longest.',
    },
  ],
  hints: [
    'Iterate through words tracking the longest string seen so far.',
    'Update only when a strictly longer word is found to preserve first-occurrence order.',
    'In Python, max(words, key=len) returns the first maximum by default.',
  ],
  functionName: 'longestStringInArray',
  params: ['words'],
  starterCode: {
    javascript: `function longestStringInArray(words) {

}`,
    typescript: `function longestStringInArray(words: string[]): string {

}`,
    python: `def longestStringInArray(words: list[str]) -> str:
    pass`,
  },
  visibleTests: [
    { args: [['apple', 'banana', 'fig', 'date']], expected: 'banana' },
    { args: [['cat', 'dog', 'cow']], expected: 'cat' },
    { args: [['hello']], expected: 'hello' },
  ],
  hiddenTests: [
    { args: [['a', 'bb', 'ccc']], expected: 'ccc' },
    { args: [['abc', 'de', 'f']], expected: 'abc' },
    { args: [['z', 'aa', 'bbb', 'cccc']], expected: 'cccc' },
    { args: [['same', 'word']], expected: 'same' },
    { args: [['one', 'two', 'three']], expected: 'three' },
    { args: [['hi', 'hello', 'hey']], expected: 'hello' },
    { args: [['ab', 'cd', 'ef']], expected: 'ab' },
    { args: [['longword', 'a', 'b']], expected: 'longword' },
  ],
};
