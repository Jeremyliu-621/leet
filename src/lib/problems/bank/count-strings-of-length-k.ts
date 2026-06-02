import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-strings-of-length-k',
  title: 'Count Strings of Length K',
  difficulty: 'easy',
  tags: ['arrays', 'strings'],
  description: `Given an array of strings \`words\` and an integer \`k\`, return the **number of strings** in \`words\` whose length is exactly \`k\`.`,
  constraints: [
    '1 <= words.length <= 10^3',
    '0 <= words[i].length <= 100',
    '0 <= k <= 100',
    'words[i] consists of lowercase English letters.',
  ],
  examples: [
    {
      input: 'words = ["cat","dog","bird","ant"], k = 3',
      output: '3',
      explanation: '"cat", "dog", and "ant" each have length 3. "bird" has length 4 and is excluded.',
    },
    {
      input: 'words = ["hello","world","hi"], k = 5',
      output: '2',
      explanation: '"hello" and "world" have length 5. "hi" has length 2.',
    },
    {
      input: 'words = ["a","bb","ccc"], k = 2',
      output: '1',
      explanation: 'Only "bb" has length 2.',
    },
  ],
  hints: [
    'Iterate through each word and check if its length equals k.',
    'Use a counter that increments whenever word.length === k.',
    'This can be expressed as a single filter call: words.filter(w => w.length === k).length.',
  ],
  functionName: 'countStringsOfLengthK',
  params: ['words', 'k'],
  starterCode: {
    javascript: `function countStringsOfLengthK(words, k) {
  return words.filter(w => w.length === k).length;
}`,
    typescript: `function countStringsOfLengthK(words: string[], k: number): number {
  return words.filter(w => w.length === k).length;
}`,
    python: `def countStringsOfLengthK(words: list[str], k: int) -> int:
    return sum(1 for w in words if len(w) == k)`,
  },
  visibleTests: [
    { args: [['cat', 'dog', 'bird', 'ant'], 3], expected: 3 },
    { args: [['hello', 'world', 'hi'], 5], expected: 2 },
    { args: [['a', 'bb', 'ccc'], 2], expected: 1 },
  ],
  hiddenTests: [
    { args: [['abc', 'def', 'ghi'], 3], expected: 3 },
    { args: [['x', 'yy', 'zzz', 'wwww'], 4], expected: 1 },
    { args: [['abc'], 4], expected: 0 },
    { args: [['one', 'two', 'six'], 3], expected: 3 },
    { args: [['ab', 'cd', 'ef', 'gh'], 2], expected: 4 },
    { args: [['hello', 'world'], 4], expected: 0 },
    { args: [['a', 'b', 'c'], 1], expected: 3 },
    { args: [['apple', 'pie', 'tart'], 3], expected: 1 },
  ],
};
