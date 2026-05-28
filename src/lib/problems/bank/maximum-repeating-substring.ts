import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximum-repeating-substring',
  title: 'Maximum Repeating Substring',
  difficulty: 'easy',
  tags: ['strings'],
  description: `For a string \`sequence\`, a string \`word\` is **k-repeating** if \`word\` concatenated \`k\` times is a substring of \`sequence\`. The \`word\`'s **maximum k-repeating value** is the highest value \`k\` where \`word\` is \`k\`-repeating in \`sequence\`. If \`word\` is not a substring of \`sequence\`, then the word's maximum k-repeating value is \`0\`.

Given strings \`sequence\` and \`word\`, return the **maximum k-repeating value** of \`word\` in \`sequence\`.`,
  constraints: [
    '1 <= sequence.length <= 100',
    '1 <= word.length <= 100',
    'sequence and word contain only lowercase English letters',
  ],
  examples: [
    {
      input: 'sequence = "ababc", word = "ab"',
      output: '2',
      explanation: '"abab" is a substring of "ababc".',
    },
    {
      input: 'sequence = "ababc", word = "ba"',
      output: '1',
      explanation: '"ba" is a substring of "ababc". "baba" is not a substring of "ababc".',
    },
    {
      input: 'sequence = "ababc", word = "ac"',
      output: '0',
      explanation: '"ac" is not a substring of "ababc".',
    },
  ],
  hints: [
    'Start with k=1 and keep incrementing k as long as word repeated k times is found in sequence.',
    'The maximum possible k is floor(sequence.length / word.length) + 1.',
    'Use `sequence.includes(word.repeat(k))` in JavaScript or `word * k in sequence` in Python.',
  ],
  functionName: 'maxRepeating',
  params: ['sequence', 'word'],
  starterCode: {
    javascript: 'function maxRepeating(sequence, word) {\n  \n}\n',
    typescript: "function maxRepeating(sequence: string, word: string): number {\n  \n}",

    python: 'def maxRepeating(sequence, word):\n    pass\n',
  },
  visibleTests: [
    { args: ['ababc', 'ab'], expected: 2 },
    { args: ['ababc', 'ba'], expected: 1 },
    { args: ['ababc', 'ac'], expected: 0 },
  ],
  hiddenTests: [
    { args: ['aaabaaaabaaabaaaabaaaabaaaabaaaaba', 'aaaba'], expected: 5 },
    { args: ['a', 'a'], expected: 1 },
    { args: ['aa', 'a'], expected: 2 },
    { args: ['aaa', 'aa'], expected: 1 },
    { args: ['abc', 'abc'], expected: 1 },
    { args: ['xyz', 'a'], expected: 0 },
    { args: ['abcabcabc', 'abc'], expected: 3 },
  ],
};
