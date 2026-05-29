import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-even-length-strings',
  title: 'Count Even Length Strings',
  difficulty: 'easy',
  tags: ['arrays', 'strings'],
  description: `Given an array of strings \`words\`, return the **number of strings** whose length is even.`,
  constraints: [
    '1 <= words.length <= 10^3',
    '1 <= words[i].length <= 100',
    'words[i] consists of lowercase English letters.',
  ],
  examples: [
    {
      input: 'words = ["ab","cd","e"]',
      output: '2',
      explanation: '"ab" has length 2 (even) and "cd" has length 2 (even). "e" has length 1 (odd) and is excluded.',
    },
    {
      input: 'words = ["hello","hi","ok"]',
      output: '2',
      explanation: '"hello" has length 5 (odd). "hi" has length 2 (even) and "ok" has length 2 (even).',
    },
    {
      input: 'words = ["a","bb","ccc","dddd"]',
      output: '2',
      explanation: '"a" has length 1 (odd), "bb" has length 2 (even), "ccc" has length 3 (odd), "dddd" has length 4 (even). Two strings have even length.',
    },
  ],
  hints: [
    'Iterate through each word and check if its length is divisible by 2.',
    'A string has even length when word.length % 2 === 0.',
    'You can use filter: words.filter(w => w.length % 2 === 0).length.',
  ],
  functionName: 'countEvenLengthStrings',
  params: ['words'],
  starterCode: {
    javascript: `function countEvenLengthStrings(words) {

}`,
    typescript: `function countEvenLengthStrings(words: string[]): number {

}`,
    python: `def countEvenLengthStrings(words: list[str]) -> int:
    pass`,
  },
  visibleTests: [
    { args: [['ab', 'cd', 'e']], expected: 2 },
    { args: [['hello', 'hi', 'ok']], expected: 2 },
    { args: [['a', 'bb', 'ccc', 'dddd']], expected: 2 },
  ],
  hiddenTests: [
    { args: [['abcd', 'ef', 'ghij', 'kl']], expected: 4 },
    { args: [['abc', 'de', 'fghi', 'j']], expected: 2 },
    { args: [['x']], expected: 0 },
    { args: [['xy']], expected: 1 },
    { args: [['abc', 'def', 'ghi']], expected: 0 },
    { args: [['ab', 'cd', 'ef', 'gh']], expected: 4 },
    { args: [['aa', 'b', 'cc', 'd']], expected: 2 },
    { args: [['wxyz', 'mn']], expected: 2 },
  ],
};
