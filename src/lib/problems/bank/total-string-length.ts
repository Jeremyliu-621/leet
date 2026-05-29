import type { Problem } from '../types';

export const problem: Problem = {
  id: 'total-string-length',
  title: 'Total String Length',
  difficulty: 'easy',
  tags: ['arrays', 'strings'],
  description: `Given an array of strings \`words\`, return the **total number of characters** across all strings combined.`,
  constraints: [
    '1 <= words.length <= 10^3',
    '0 <= words[i].length <= 100',
    'words[i] consists of printable ASCII characters.',
  ],
  examples: [
    {
      input: 'words = ["hello","world","foo"]',
      output: '13',
      explanation: 'Lengths: "hello"=5, "world"=5, "foo"=3. Total = 5+5+3 = 13.',
    },
    {
      input: 'words = ["a","b","c"]',
      output: '3',
      explanation: 'Each word has length 1; total = 3.',
    },
    {
      input: 'words = [""]',
      output: '0',
      explanation: 'One empty string contributes 0 characters.',
    },
  ],
  hints: [
    'Sum the length of each word: words.reduce((s, w) => s + w.length, 0).',
    'Alternatively, join all words and return the total length.',
    'In Python, sum(len(w) for w in words) is clean and readable.',
  ],
  functionName: 'totalStringLength',
  params: ['words'],
  starterCode: {
    javascript: `function totalStringLength(words) {

}`,
    typescript: `function totalStringLength(words: string[]): number {

}`,
    python: `def totalStringLength(words: list[str]) -> int:
    pass`,
  },
  visibleTests: [
    { args: [['hello', 'world', 'foo']], expected: 13 },
    { args: [['a', 'b', 'c']], expected: 3 },
    { args: [[''], ], expected: 0 },
  ],
  hiddenTests: [
    { args: [['abc']], expected: 3 },
    { args: [['', '', '']], expected: 0 },
    { args: [['x', 'yy', 'zzz']], expected: 6 },
    { args: [['hello']], expected: 5 },
    { args: [['ab', 'cd', 'ef', 'gh']], expected: 8 },
    { args: [['one', 'two', 'three', 'four', 'five']], expected: 19 },
    { args: [['longword', 'a']], expected: 9 },
    { args: [['cat', 'dog', 'bird', 'ant']], expected: 13 },
  ],
};
