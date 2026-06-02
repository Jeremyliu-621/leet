import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-words-starting-with-vowel',
  title: 'Count Words Starting With a Vowel',
  difficulty: 'easy',
  tags: ['strings', 'arrays'],
  description: `Given an array of strings \`words\` consisting of lowercase English letters, return the number of words that **start with a vowel** (one of \`'a'\`, \`'e'\`, \`'i'\`, \`'o'\`, \`'u'\`).`,
  constraints: [
    '1 <= words.length <= 100',
    '1 <= words[i].length <= 100',
    'words[i] consists of lowercase English letters only',
  ],
  examples: [
    {
      input: 'words = ["apple","banana","orange","grape","umbrella"]',
      output: '3',
      explanation: '"apple", "orange", and "umbrella" start with a vowel.',
    },
    {
      input: 'words = ["sky","fly","dry"]',
      output: '0',
      explanation: 'No word starts with a vowel.',
    },
    {
      input: 'words = ["a","e","i","o","u"]',
      output: '5',
      explanation: 'Every single-character word is itself a vowel.',
    },
  ],
  hints: [
    'Define a vowel set: {\'a\', \'e\', \'i\', \'o\', \'u\'}.',
    'For each word, check if its first character is in the vowel set.',
    'Count and return the number of words that pass the check.',
  ],
  functionName: 'countWordsStartingWithVowel',
  params: ['words'],
  starterCode: {
    javascript: `function countWordsStartingWithVowel(words) {
  const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
  return words.filter(w => vowels.has(w[0])).length;
}`,
    typescript: `function countWordsStartingWithVowel(words: string[]): number {
  const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
  return words.filter(w => vowels.has(w[0]!)).length;
}`,
    python: `def countWordsStartingWithVowel(words: list[str]) -> int:
    vowels = set('aeiou')
    return sum(1 for w in words if w[0] in vowels)`,
  },
  visibleTests: [
    { args: [['apple', 'banana', 'orange', 'grape', 'umbrella']], expected: 3 },
    { args: [['sky', 'fly', 'dry']], expected: 0 },
    { args: [['a', 'e', 'i', 'o', 'u']], expected: 5 },
  ],
  hiddenTests: [
    { args: [['elephant', 'cat', 'igloo', 'frog']], expected: 2 },
    { args: [['zoo']], expected: 0 },
    { args: [['eel']], expected: 1 },
    { args: [['act', 'echo', 'idle', 'open', 'under', 'box']], expected: 5 },
    { args: [['bbb', 'ccc', 'ddd']], expected: 0 },
    { args: [['ax', 'by', 'cz', 'ow']], expected: 2 },
    { args: [['once', 'upon', 'a', 'time']], expected: 3 },
    { args: [['universe', 'atom', 'quark', 'electron', 'meson']], expected: 3 },
  ],
};
