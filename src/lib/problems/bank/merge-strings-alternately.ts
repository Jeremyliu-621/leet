import type { Problem } from '../types';

export const problem: Problem = {
  id: 'merge-strings-alternately',
  title: 'Merge Strings Alternately',
  difficulty: 'easy',
  tags: ['strings', 'two-pointers'],
  description: `You are given two strings \`word1\` and \`word2\`. Merge the strings by adding letters in alternating order, starting with \`word1\`. If a string is longer than the other, append the additional letters onto the end of the merged string.

Return the merged string.`,
  constraints: [
    '`1 <= word1.length, word2.length <= 100`',
    '`word1` and `word2` consist of lowercase English letters.',
  ],
  examples: [
    {
      input: 'word1 = "abc", word2 = "pqr"',
      output: '"apbqcr"',
      explanation: 'Alternating: a, p, b, q, c, r.',
    },
    {
      input: 'word1 = "ab", word2 = "pqrs"',
      output: '"apbqrs"',
      explanation: 'word2 is longer; append "rs" at the end.',
    },
    {
      input: 'word1 = "abcd", word2 = "pq"',
      output: '"apbqcd"',
      explanation: 'word1 is longer; append "cd" at the end.',
    },
  ],
  hints: [
    'Use a single index and iterate while either string has characters left.',
    'At each step, append the character from word1 (if available), then from word2 (if available).',
    `\`\`\`js
function mergeAlternately(word1, word2) {
  let res = "", i = 0;
  while (i < word1.length || i < word2.length) {
    if (i < word1.length) res += word1[i];
    if (i < word2.length) res += word2[i];
    i++;
  }
  return res;
}\`\`\``,
  ],
  functionName: 'mergeAlternately',
  params: ['word1', 'word2'],
  starterCode: {
    javascript: 'function mergeAlternately(word1, word2) {\n  \n}\n',
    python: 'def mergeAlternately(word1, word2):\n    pass\n',
  },
  visibleTests: [
    { args: ['abc', 'pqr'], expected: 'apbqcr' },
    { args: ['ab', 'pqrs'], expected: 'apbqrs' },
    { args: ['abcd', 'pq'], expected: 'apbqcd' },
  ],
  hiddenTests: [
    { args: ['a', 'b'], expected: 'ab' },
    { args: ['', 'abc'], expected: 'abc' },
    { args: ['abc', ''], expected: 'abc' },
    { args: ['az', 'b'], expected: 'abz' },
  ],
};
