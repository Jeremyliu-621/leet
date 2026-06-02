import type { Problem } from '../types';

export const problem: Problem = {
  id: 'longest-word-in-dictionary-through-deleting',
  title: 'Longest Word in Dictionary through Deleting',
  difficulty: 'medium',
  tags: ['strings', 'two-pointers'],
  description: `Given a string \`s\` and a string array \`dictionary\`, return the longest string in the dictionary that can be formed by deleting some characters of the given string without reordering the remaining characters.

If there are more than one possible results, return the **longest** word with the **smallest lexicographical order**. If there is no possible result, return the empty string \`""\`.`,
  constraints: [
    '1 <= s.length <= 1000',
    '1 <= dictionary.length <= 1000',
    '1 <= dictionary[i].length <= 1000',
    's and dictionary[i] consist of lowercase English letters',
  ],
  examples: [
    {
      input: 's = "abpcplea", dictionary = ["ale","apple","monkey","plea"]',
      output: '"apple"',
      explanation:
        '"apple" and "plea" are both subsequences of "abpcplea". "apple" is longer. Answer is "apple".',
    },
    {
      input: 's = "abpcplea", dictionary = ["a","b","c"]',
      output: '"a"',
      explanation:
        '"a", "b", and "c" are all subsequences of length 1. Lexicographically smallest is "a".',
    },
    {
      input: 's = "abpcplea", dictionary = ["xyz"]',
      output: '""',
      explanation: '"xyz" is not a subsequence of "abpcplea". No valid word exists.',
    },
  ],
  hints: [
    'Level 1: A word in the dictionary is valid if it is a subsequence of s. Check each word with a two-pointer scan: one pointer on s and one on the word, advance both when characters match.',
    'Level 2: For each word, run the subsequence check in O(|s|) time. Compare valid words by length descending, then lexicographically ascending to find the best answer.',
    'Level 3: Iterate through dictionary. For each word w, check isSubseq(s, w) with two pointers i=0, j=0; advance both on match, advance i on mismatch; valid if j reaches len(w). Track best = longest valid w, preferring smaller lex on ties. O(n * |s|).',
  ],
  functionName: 'findLongestWord',
  params: ['s', 'dictionary'],
  starterCode: {
    javascript: `function findLongestWord(s, dictionary) {

}`,
    typescript: `function findLongestWord(s: string, dictionary: string[]): string {

}`,
    python: `def findLongestWord(s, dictionary):
    pass`,
  },
  visibleTests: [
    { args: ['abpcplea', ['ale', 'apple', 'monkey', 'plea']], expected: 'apple' },
    { args: ['abpcplea', ['a', 'b', 'c']], expected: 'a' },
    { args: ['abpcplea', ['xyz']], expected: '' },
  ],
  hiddenTests: [
    { args: ['a', ['a', 'aa']], expected: 'a' },
    { args: ['aaa', ['a', 'aa', 'aaa']], expected: 'aaa' },
    { args: ['bab', ['ba', 'ab', 'a', 'b']], expected: 'ab' },
    { args: ['abcde', ['a', 'bb', 'acd', 'ace']], expected: 'acd' },
    { args: ['abc', ['bc', 'abc', 'a']], expected: 'abc' },
    { args: ['abcde', ['xyz', 'zyx']], expected: '' },
  ],
};
