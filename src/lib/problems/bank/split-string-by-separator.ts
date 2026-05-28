import type { Problem } from '../types';

export const problem: Problem = {
  id: 'split-string-by-separator',
  title: 'Split Strings by Separator',
  difficulty: 'easy',
  tags: ['strings'],
  description: `Given an array of strings \`words\` and a character \`separator\`, **split** each string in \`words\` by \`separator\`.

Return an array of strings containing the new strings formed after the splits, **excluding empty strings**.`,
  constraints: [
    '1 <= words.length <= 100',
    '1 <= words[i].length <= 20',
    'characters in words[i] are either lowercase English letters or characters from the string ".,|$#@".',
    'separator is a character from the string ".,|$#@".',
  ],
  examples: [
    {
      input: 'words = ["one.two.three","four.five","six"], separator = "."',
      output: '["one","two","three","four","five","six"]',
      explanation: 'Split each word on "." and collect non-empty parts.',
    },
    {
      input: 'words = ["$easy$question","$easy","$question"], separator = "$"',
      output: '["easy","question","easy","question"]',
      explanation: 'Leading and trailing separators create empty parts, which are excluded.',
    },
    {
      input: 'words = ["|||"], separator = "|"',
      output: '[]',
      explanation: 'Splitting "|||" on "|" yields only empty strings.',
    },
  ],
  hints: [
    'For each word, call word.split(separator). Collect all parts that have length > 0.',
    'JavaScript: words.flatMap(w => w.split(separator)).filter(p => p.length > 0)',
    'Python: [p for w in words for p in w.split(separator) if p]',
  ],
  functionName: 'splitWordsBySeparator',
  params: ['words', 'separator'],
  starterCode: {
    javascript: `function splitWordsBySeparator(words, separator) {

}`,
    python: `def splitWordsBySeparator(words, separator):
    pass`,
  },
  visibleTests: [
    { args: [['one.two.three', 'four.five', 'six'], '.'], expected: ['one', 'two', 'three', 'four', 'five', 'six'] },
    { args: [['$easy$question', '$easy', '$question'], '$'], expected: ['easy', 'question', 'easy', 'question'] },
    { args: [['|||'], '|'], expected: [] },
  ],
  hiddenTests: [
    { args: [['a'], '.'], expected: ['a'] },
    { args: [['a.b', 'c'], '.'], expected: ['a', 'b', 'c'] },
    { args: [['..'], '.'], expected: [] },
    { args: [['a,b,c'], ','], expected: ['a', 'b', 'c'] },
  ],
};
