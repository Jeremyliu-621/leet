import type { Problem } from '../types';

export const problem: Problem = {
  id: 'string-matching-in-an-array',
  title: 'String Matching in an Array',
  difficulty: 'easy',
  tags: ['strings'],
  description: `Given an array of string \`words\`, return all strings in \`words\` that are a **substring** of another word. You may return the answer in **any order**.`,
  constraints: [
    '`1 <= words.length <= 100`',
    '`1 <= words[i].length <= 30`',
    '`words[i]` contains only lowercase English letters.',
    'All the strings of `words` are **unique**.',
  ],
  examples: [
    {
      input: 'words = ["mass","as","hero","superhero"]',
      output: '["as","hero"]',
      explanation: '"as" is a substring of "mass" and "hero" is a substring of "superhero".',
    },
    {
      input: 'words = ["leetcode","et","code"]',
      output: '["et","code"]',
      explanation: '"et" and "code" are both substrings of "leetcode".',
    },
  ],
  hints: [
    'For each word, check if it appears as a substring inside any other word in the array.',
    'A word can only be a substring of a strictly longer word.',
    'Use String.prototype.includes (or equivalent) for the containment check.',
  ],
  functionName: 'stringMatching',
  params: ['words'],
  starterCode: {
    javascript: `function stringMatching(words) {

}`,
    typescript: `function stringMatching(words: string[]): string[] {

}`,
    python: `def stringMatching(words):
    pass`,
  },
  visibleTests: [
    { args: [['mass', 'as', 'hero', 'superhero']], expected: ['as', 'hero'] },
    { args: [['leetcode', 'et', 'code']], expected: ['et', 'code'] },
  ],
  hiddenTests: [
    { args: [['a', 'b', 'c']], expected: [] },
    { args: [['a', 'ab', 'abc']], expected: ['a', 'ab'] },
    { args: [['blue', 'bluebell', 'ab', 'abc']], expected: ['blue', 'ab'] },
    { args: [['x']], expected: [] },
    { args: [['word', 'password', 'sword']], expected: ['word', 'sword'] },
  ],
};
