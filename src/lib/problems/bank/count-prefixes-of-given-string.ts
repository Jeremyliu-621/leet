import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-prefixes-of-given-string',
  title: 'Count Prefixes of a Given String',
  difficulty: 'easy',
  tags: ['strings'],
  description: `You are given a string array \`words\` and a string \`s\`, where each element of \`words\` is a prefix of \`s\` **or not**.

Return the number of strings in \`words\` that are a prefix of \`s\`.

A **prefix** of a string is any leading contiguous substring of that string.`,
  constraints: [
    '1 <= words.length <= 1000',
    '1 <= words[i].length, s.length <= 10',
    'words[i] and s consist of lowercase English letters only.',
  ],
  examples: [
    {
      input: 'words = ["a","b","c","ab","bc","abc"], s = "abc"',
      output: '3',
      explanation: '"a", "ab", and "abc" are prefixes of "abc". "b", "c", "bc" are not.',
    },
    {
      input: 'words = ["a","a"], s = "aa"',
      output: '2',
      explanation: 'Both occurrences of "a" are prefixes of "aa".',
    },
  ],
  hints: [
    'Use `String.startsWith()` (JS) or `str.startswith()` (Python) to check each word.',
    'Count how many words satisfy `s.startsWith(word)`.',
    `\`\`\`js
function countPrefixes(words, s) {
  return words.filter(w => s.startsWith(w)).length;
}\`\`\``,
  ],
  functionName: 'countPrefixes',
  params: ['words', 's'],
  starterCode: {
    javascript: 'function countPrefixes(words, s) {\n  \n}\n',
    typescript: "function countPrefixes(words: string[], s: string): number {\n  \n}",

    python: 'def countPrefixes(words, s):\n    pass\n',
  },
  visibleTests: [
    { args: [['a', 'b', 'c', 'ab', 'bc', 'abc'], 'abc'], expected: 3 },
    { args: [['a', 'a'], 'aa'], expected: 2 },
  ],
  hiddenTests: [
    { args: [['x'], 'xyz'], expected: 1 },
    { args: [['xyz', 'xyzw'], 'xyz'], expected: 1 },
    { args: [['a', 'b'], 'c'], expected: 0 },
    { args: [['hello', 'hel', 'he'], 'hello'], expected: 3 },
    { args: [[''], 'abc'], expected: 1 },
  ],
};
