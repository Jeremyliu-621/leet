import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-the-number-of-consistent-strings',
  title: 'Count the Number of Consistent Strings',
  difficulty: 'easy',
  tags: ['arrays', 'strings', 'hash-map'],
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
      explanation: '"aaab" and "baa" consist only of a and b. "ad", "bd", "badab" contain d which is not in allowed.',
    },
    {
      input: 'allowed = "abc", words = ["a","b","c","ab","ac","bc","abc"]',
      output: '7',
      explanation: 'All 7 strings consist only of a, b, c.',
    },
    {
      input: 'allowed = "cad", words = ["cc","acd","b","ba","bac","bad","ac","d"]',
      output: '4',
      explanation: '"cc", "acd", "ac", "d" are consistent. "b", "ba", "bac", "bad" contain b which is not allowed.',
    },
  ],
  hints: [
    'Convert allowed to a Set for O(1) character lookup.',
    'For each word, check if every character belongs to the allowed set.',
    'Count words that pass the check.',
  ],
  functionName: 'countConsistentStrings',
  params: ['allowed', 'words'],
  starterCode: {
    javascript: `function countConsistentStrings(allowed, words) {
  const set = new Set(allowed);
  return words.filter(w => [...w].every(c => set.has(c))).length;
}`,
    typescript: `function countConsistentStrings(allowed: string, words: string[]): number {
  const set = new Set(allowed);
  return words.filter(w => [...w].every(c => set.has(c))).length;
}`,
    python: `def countConsistentStrings(allowed, words):
    allowed_set = set(allowed)
    return sum(1 for w in words if all(c in allowed_set for c in w))`,
  },
  visibleTests: [
    { args: ['ab', ['ad', 'bd', 'aaab', 'baa', 'badab']], expected: 2 },
    { args: ['abc', ['a', 'b', 'c', 'ab', 'ac', 'bc', 'abc']], expected: 7 },
    { args: ['cad', ['cc', 'acd', 'b', 'ba', 'bac', 'bad', 'ac', 'd']], expected: 4 },
  ],
  hiddenTests: [
    { args: ['a', ['a', 'aa', 'aaa']], expected: 3 },
    { args: ['z', ['a', 'b', 'z']], expected: 1 },
    { args: ['abcdefghijklmnopqrstuvwxyz', ['hello', 'world']], expected: 2 },
    { args: ['xy', ['x', 'y', 'xy', 'yx', 'xz']], expected: 4 },
    { args: ['a', []], expected: 0 },
    { args: ['abc', ['d', 'e', 'f']], expected: 0 },
  ],
};
