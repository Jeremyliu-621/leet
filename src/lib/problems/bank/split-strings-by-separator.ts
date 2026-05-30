import type { Problem } from '../types';

export const problem: Problem = {
  id: 'split-strings-by-separator',
  title: 'Split Strings by Separator',
  difficulty: 'easy',
  tags: ['strings', 'simulation'],
  description: `Given an array of strings \`words\` and a character \`separator\`, **split** each string in \`words\` by \`separator\`.

Return an array of strings containing the new strings formed after the splits, **excluding any empty strings**.

Notes:
- \`separator\` is used to determine where the split occurs, but it is **not** included as part of the resulting strings.
- A split may result in more than two strings.
- The resulting strings must maintain the same order as they were initially given.`,
  constraints: [
    '`1 <= words.length <= 100`',
    '`1 <= words[i].length <= 20`',
    '`words[i]` consists of lowercase English letters and characters from the string `".,|$#@"`.',
    '`separator` is a character from the string `".,|$#@"`.',
  ],
  examples: [
    {
      input: 'words = ["one.two.three","four.five","six"], separator = "."',
      output: '["one","two","three","four","five","six"]',
      explanation: 'Split each word by "."; all parts are non-empty.',
    },
    {
      input: 'words = ["$easy$","$problem$"], separator = "$"',
      output: '["easy","problem"]',
      explanation: 'Leading/trailing "$" produce empty strings which are excluded.',
    },
    {
      input: 'words = ["|||"], separator = "|"',
      output: '[]',
      explanation: 'All parts are empty after splitting, so the result is empty.',
    },
  ],
  hints: [
    'Split each word by the separator character.',
    'Filter out any empty strings from each split result.',
    'Collect all the non-empty parts into the final array.',
  ],
  functionName: 'splitWordsBySeparator',
  params: ['words', 'separator'],
  starterCode: {
    javascript: `function splitWordsBySeparator(words, separator) {

}`,
    typescript: `function splitWordsBySeparator(words: string[], separator: string): string[] {

}`,
    python: `def splitWordsBySeparator(words, separator):
    pass`,
  },
  visibleTests: [
    { args: [['one.two.three', 'four.five', 'six'], '.'], expected: ['one', 'two', 'three', 'four', 'five', 'six'] },
    { args: [['$easy$', '$problem$'], '$'], expected: ['easy', 'problem'] },
    { args: [['|||'], '|'], expected: [] },
  ],
  hiddenTests: [
    { args: [['a,b,c'], ','], expected: ['a', 'b', 'c'] },
    { args: [['abc'], '.'], expected: ['abc'] },
    { args: [['a..b'], '.'], expected: ['a', 'b'] },
    { args: [['hello|world', 'foo|bar'], '|'], expected: ['hello', 'world', 'foo', 'bar'] },
    { args: [['#one#', '#two#', '#three#'], '#'], expected: ['one', 'two', 'three'] },
  ],
};
