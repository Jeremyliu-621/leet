import type { Problem } from '../types';

export const problem: Problem = {
  id: 'largest-substring-between-two-equal-characters',
  title: 'Largest Substring Between Two Equal Characters',
  difficulty: 'easy',
  tags: ['strings', 'hash-map'],
  description: `Given a string \`s\`, return the length of the **longest** substring between two **equal** characters, excluding the two characters. If there is no such substring return \`-1\`.

A **substring** is a contiguous sequence of characters within a string.`,
  constraints: [
    '`1 <= s.length <= 300`',
    '`s` contains only lowercase English letters.',
  ],
  examples: [
    {
      input: 's = "aa"',
      output: '0',
      explanation: 'The optimal substring here is an empty substring between the two "a"s.',
    },
    {
      input: 's = "abca"',
      output: '2',
      explanation: 'The optimal substring here is "bc" between positions 1 and 4 (exclusive), length 2.',
    },
  ],
  hints: [
    'Record the first occurrence index of each character.',
    'For each character, if seen before, the substring length between them is current_index - first_index - 1.',
  ],
  functionName: 'maxLengthBetweenEqualCharacters',
  params: ['s'],
  starterCode: {
    javascript: `function maxLengthBetweenEqualCharacters(s) {

}`,
    python: `def maxLengthBetweenEqualCharacters(s):
    pass`,
  },
  visibleTests: [
    { args: ['aa'], expected: 0 },
    { args: ['abca'], expected: 2 },
  ],
  hiddenTests: [
    { args: ['cbzxy'], expected: -1 },
    { args: ['cabbac'], expected: 4 },
    { args: ['a'], expected: -1 },
    { args: ['mgntdygtxrvxjnwksqhxuxtrv'], expected: 18 },
    { args: ['abcba'], expected: 3 },
  ],
};
