import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-number-of-consistent-strings',
  title: 'Count Number of Consistent Strings',
  difficulty: 'easy',
  tags: ['strings', 'hash-map'],
  description: `You are given a string \`allowed\` consisting of **distinct** characters and an array of strings \`words\`. A string is **consistent** if all characters in the string appear in the string \`allowed\`.

Return the number of **consistent** strings in the array \`words\`.`,
  constraints: [
    '1 <= words.length <= 10^4',
    '1 <= allowed.length <= 26',
    '1 <= words[i].length <= 10',
    'The characters in allowed are distinct.',
    'words[i] and allowed contain only lowercase English letters.',
  ],
  examples: [
    {
      input: 'allowed = "ab", words = ["ad","bd","aaab","baa","badab"]',
      output: '2',
      explanation: '"aaab" and "baa" are consistent. Others contain \'d\' which is not in "ab".',
    },
    {
      input: 'allowed = "abc", words = ["a","b","c","ab","ac","bc","abc"]',
      output: '7',
      explanation: 'All words use only characters from "abc".',
    },
  ],
  hints: [
    'Put the allowed characters into a Set for O(1) lookup.',
    'For each word, check that every character is in the set.',
    `\`\`\`js
function countConsistentStrings(allowed, words) {
  const set = new Set(allowed);
  return words.filter(w => [...w].every(c => set.has(c))).length;
}\`\`\``,
  ],
  functionName: 'countConsistentStrings',
  params: ['allowed', 'words'],
  starterCode: {
    javascript: `function countConsistentStrings(allowed, words) {

}`,
    typescript: "function countConsistentStrings(allowed: string, words: string[]): number {\n\n}",

    python: `def countConsistentStrings(allowed, words):
    pass`,
  },
  visibleTests: [
    { args: ['ab', ['ad', 'bd', 'aaab', 'baa', 'badab']], expected: 2 },
    { args: ['abc', ['a', 'b', 'c', 'ab', 'ac', 'bc', 'abc']], expected: 7 },
  ],
  hiddenTests: [
    { args: ['cad', ['cc', 'acd', 'b', 'ba', 'bac', 'bad', 'ac', 'd']], expected: 4 },
    { args: ['z', ['z', 'zz', 'zzz', 'a']], expected: 3 },
    { args: ['a', ['a']], expected: 1 },
    { args: ['abc', ['d', 'e', 'f']], expected: 0 },
  ],
};
