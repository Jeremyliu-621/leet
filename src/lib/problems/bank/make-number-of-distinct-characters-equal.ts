import type { Problem } from '../types';

export const problem: Problem = {
  id: 'make-number-of-distinct-characters-equal',
  title: 'Make Number of Distinct Characters Equal',
  difficulty: 'medium',
  tags: ['hash-map', 'strings'],
  description: `You are given two 0-indexed strings \`word1\` and \`word2\`.

A **move** consists of choosing two indices \`i\` and \`j\` such that \`0 <= i < word1.length\` and \`0 <= j < word2.length\` and swapping \`word1[i]\` with \`word2[j]\`.

Return \`true\` if it is possible to get the number of distinct characters in \`word1\` and \`word2\` to be equal with **exactly one** move. Otherwise, return \`false\`.`,
  constraints: [
    '`1 <= word1.length, word2.length <= 10^5`',
    '`word1` and `word2` consist of lowercase English letters only.',
  ],
  examples: [
    {
      input: 'word1 = "ab", word2 = "a"',
      output: 'true',
      explanation: 'Swap word1[1] ("b") with word2[0] ("a"): word1 = "aa" (1 distinct), word2 = "b" (1 distinct). Equal!',
    },
    {
      input: 'word1 = "a", word2 = "bc"',
      output: 'false',
      explanation: 'Swapping "a"↔"b" gives word1="b"(1), word2="ac"(2); swapping "a"↔"c" gives word1="c"(1), word2="ba"(2). Neither equalizes.',
    },
  ],
  hints: [
    'Count character frequencies in each word. Distinct count = number of chars with frequency > 0.',
    'Try all 26×26 = 676 pairs (c1, c2): swap one c1 from word1 with one c2 from word2.',
    'For a swap (c1, c2): if c1 ≠ c2, delta1 = -(freq1[c1]==1 ? 1 : 0) + (freq1[c2]==0 ? 1 : 0), similarly for delta2. Check if f1+delta1 == f2+delta2.',
  ],
  functionName: 'isItPossible',
  params: ['word1', 'word2'],
  starterCode: {
    javascript: `function isItPossible(word1, word2) {

}`,
    typescript: `function isItPossible(word1: string, word2: string): boolean {

}`,
    python: `def isItPossible(word1, word2):
    pass`,
  },
  visibleTests: [
    { args: ['ab', 'a'], expected: true },
    { args: ['a', 'bc'], expected: false },
    { args: ['abcde', 'fghij'], expected: true },
  ],
  hiddenTests: [
    { args: ['a', 'a'], expected: true },
    { args: ['ab', 'ab'], expected: true },
    { args: ['aa', 'bb'], expected: true },
    { args: ['abc', 'abc'], expected: true },
    { args: ['aaa', 'bbb'], expected: true },
    { args: ['a', 'bb'], expected: false },
    { args: ['aa', 'b'], expected: false },
    { args: ['ab', 'cd'], expected: true },
    { args: ['ac', 'b'], expected: false },
    { args: ['abcdefghijklmnop', 'qrstuvwx'], expected: false },
  ],
};
