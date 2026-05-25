import type { Problem } from '../types';

export const problem: Problem = {
  id: 'number-of-words-that-can-be-typed',
  title: 'Number of Words That Can Be Typed',
  difficulty: 'easy',
  tags: ['strings', 'hash-map'],
  description: `There is a malfunctioning keyboard where some letter keys are broken. A letter key is broken if it appears in a given string \`brokenLetters\`.

You are given a string \`text\` of words separated by a single space (no leading or trailing spaces), and a string \`brokenLetters\` of all **distinct** broken letter keys.

Return the **number of words** in \`text\` you can fully type using this keyboard.`,
  constraints: [
    '1 <= text.length <= 10^4',
    '0 <= brokenLetters.length <= 26',
    'text consists of only lowercase English letters and spaces.',
    'brokenLetters consists of **distinct** lowercase English letters.',
  ],
  examples: [
    {
      input: 'text = "hello world", brokenLetters = "ad"',
      output: '1',
      explanation: '"hello" uses no broken letters. "world" uses \'d\'. Only "hello" can be typed.',
    },
    {
      input: 'text = "leet code", brokenLetters = "lt"',
      output: '1',
      explanation: '"leet" uses \'l\' and \'t\' (broken). "code" uses no broken letters. Only "code" can be typed.',
    },
  ],
  hints: [
    'Put broken letters into a Set. For each word, check if any of its characters are in the set.',
    'A word can be typed only if none of its characters appear in brokenLetters.',
    'Split text by spaces to get words. Use `.some()` / `any()` to test if a word contains a broken letter.',
  ],
  functionName: 'canBeTypedWords',
  params: ['text', 'brokenLetters'],
  starterCode: {
    javascript: `function canBeTypedWords(text, brokenLetters) {

}`,
    python: `def canBeTypedWords(text, brokenLetters):
    pass`,
  },
  visibleTests: [
    { args: ['hello world', 'ad'], expected: 1 },
    { args: ['leet code', 'lt'], expected: 1 },
  ],
  hiddenTests: [
    { args: ['leet code', ''], expected: 2 },
    { args: ['a', 'b'], expected: 1 },
    { args: ['abc def', 'abc'], expected: 1 },
    { args: ['hello', 'aeiou'], expected: 0 },
  ],
};
