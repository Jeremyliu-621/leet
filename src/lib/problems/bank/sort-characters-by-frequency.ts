import type { Problem } from '../types';

export const problem: Problem = {
  id: 'sort-characters-by-frequency',
  title: 'Sort Characters By Frequency',
  difficulty: 'medium',
  tags: ['heap', 'strings'],
  description: `Given a string \`s\`, sort it in **decreasing order** based on the frequency of the characters. The **frequency** of a character is the number of times it appears in the string.

Return *the sorted string*. If there are multiple valid answers, return any of them.

> **Note:** When characters share the same frequency, break ties by character code (uppercase before lowercase — so \`'A'\` before \`'a'\`, \`'a'\` before \`'b'\`). Your implementation should produce a consistent, deterministic result.`,
  constraints: [
    '1 <= s.length <= 5 * 10^5',
    's consists of uppercase and lowercase English letters and digits',
  ],
  examples: [
    {
      input: 's = "tree"',
      output: '"eert"',
      explanation: '\'e\' appears twice while \'r\' and \'t\' both appear once. "eetr" is also a valid answer.',
    },
    {
      input: 's = "cccaaa"',
      output: '"aaaccc"',
      explanation: 'Both \'c\' and \'a\' appear three times, so "cccaaa" is also valid. Note that "cacaca" is incorrect — all occurrences of the same character must be grouped.',
    },
    {
      input: 's = "Aabb"',
      output: '"bbAa"',
      explanation: '\'b\' appears twice. \'A\' and \'a\' appear once each — note that \'A\' and \'a\' are treated as two different characters.',
    },
  ],
  hints: [
    'Build a frequency map of each character.',
    'Sort the unique characters by frequency descending (break ties alphabetically for consistency).',
    'Concatenate each character repeated by its frequency.',
  ],
  functionName: 'frequencySort',
  params: ['s'],
  starterCode: {
    javascript: `function frequencySort(s) {

}`,
    typescript: "function frequencySort(s: string): string {\n\n}",

    python: `def frequencySort(s):
    pass`,
  },
  visibleTests: [
    { args: ['tree'], expected: 'eert' },
    { args: ['cccaaa'], expected: 'aaaccc' },
    { args: ['Aabb'], expected: 'bbAa' },
  ],
  hiddenTests: [
    { args: ['a'], expected: 'a' },
    { args: ['aab'], expected: 'aab' },
    { args: ['loveleetcode'], expected: 'eeeelloocdtv' },
    { args: ['2a554442f544'], expected: '4444455522af' },
  ],
};
