import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-consistent-strings',
  title: 'Count the Number of Consistent Strings',
  difficulty: 'easy',
  tags: ['strings', 'arrays'],
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
      explanation: '"aaab" and "baa" use only characters from "ab". The other three use "d" which is not allowed.',
    },
    {
      input: 'allowed = "abc", words = ["a","b","c","ab","ac","bc","abc"]',
      output: '7',
      explanation: 'All words only use characters a, b, and c.',
    },
  ],
  hints: [
    'Build a Set from the allowed string for O(1) lookup.',
    'For each word, check every character against the set. If all pass, count it.',
  ],
  functionName: 'countConsistentStrings',
  params: ['allowed', 'words'],
  starterCode: {
    javascript: `function countConsistentStrings(allowed, words) {

}`,
    python: `def countConsistentStrings(allowed, words):
    pass
`,
  },
  visibleTests: [
    { args: ['ab', ['ad', 'bd', 'aaab', 'baa', 'badab']], expected: 2 },
    { args: ['abc', ['a', 'b', 'c', 'ab', 'ac', 'bc', 'abc']], expected: 7 },
  ],
  hiddenTests: [
    { args: ['cad', ['cc', 'acd', 'b', 'ba', 'bac', 'bad', 'ac', 'd']], expected: 4 },
    { args: ['a', ['a', 'b', 'aa', 'bb', 'ab']], expected: 2 },
    { args: ['abcdefghijklmnopqrstuvwxyz', ['hello', 'world']], expected: 2 },
    { args: ['z', ['z', 'zz', 'zzz', 'a', 'za']], expected: 3 },
  ],
};
