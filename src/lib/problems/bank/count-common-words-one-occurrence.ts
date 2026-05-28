import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-common-words-one-occurrence',
  title: 'Count Common Words With One Occurrence',
  difficulty: 'easy',
  tags: ['strings', 'hash-map'],
  description: `Given two string arrays \`words1\` and \`words2\`, return the number of strings that appear **exactly once** in each of the two arrays.`,
  constraints: [
    '`1 <= words1.length, words2.length <= 1000`',
    '`1 <= words1[i].length, words2[i].length <= 30`',
    '`words1[i]` and `words2[i]` consist only of lowercase English letters.',
  ],
  examples: [
    {
      input: 'words1 = ["leetcode","is","amazing","as","is"], words2 = ["amazing","leetcode","is"]',
      output: '2',
      explanation: '"leetcode" appears once in both. "amazing" appears once in both. "is" appears twice in words1.',
    },
    {
      input: 'words1 = ["b","bb","bbb"], words2 = ["a","aa","aaa"]',
      output: '0',
    },
    {
      input: 'words1 = ["a","ab"], words2 = ["a","a","a","ab"]',
      output: '1',
    },
  ],
  hints: [
    'Count frequencies in each array using a map. Count words where frequency is exactly 1 in both arrays.',
    'Build frequency maps for both arrays. A word is common if it has frequency exactly 1 in both.',
    `\`\`\`js
const f1 = {}, f2 = {};
for (const w of words1) f1[w] = (f1[w]||0)+1;
for (const w of words2) f2[w] = (f2[w]||0)+1;
return Object.keys(f1).filter(w => f1[w] === 1 && f2[w] === 1).length;\`\`\``
  ],
  functionName: 'countWords',
  params: ['words1', 'words2'],
  starterCode: {
    javascript: `function countWords(words1, words2) {

}`,
    typescript: "function countWords(words1: string[], words2: string[]): number {\n\n}",

    python: `def countWords(words1, words2):
    pass`,
  },
  visibleTests: [
    { args: [['leetcode', 'is', 'amazing', 'as', 'is'], ['amazing', 'leetcode', 'is']], expected: 2 },
    { args: [['b', 'bb', 'bbb'], ['a', 'aa', 'aaa']], expected: 0 },
    { args: [['a', 'ab'], ['a', 'a', 'a', 'ab']], expected: 1 },
  ],
  hiddenTests: [
    { args: [['a'], ['a']], expected: 1 },
    { args: [['a', 'a'], ['a']], expected: 0 },
    { args: [['x', 'y', 'z'], ['x', 'y']], expected: 2 },
    { args: [['hello', 'world'], ['world', 'hello']], expected: 2 },
    { args: [['a', 'a', 'b'], ['a', 'b', 'b']], expected: 0 },
  ],
};
