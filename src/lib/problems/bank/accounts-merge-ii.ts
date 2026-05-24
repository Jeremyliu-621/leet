import type { Problem } from '../types';

export const problem: Problem = {
  id: 'sort-characters-by-frequency',
  title: 'Sort Characters By Frequency',
  difficulty: 'medium',
  tags: ['hash-map'],
  description: `Given a string \`s\`, sort it in **decreasing order** based on the **frequency** of the characters. The frequency of a character is the number of times it appears in the string.

Return the sorted string. If there are multiple answers, return any of them.

For this problem, break ties alphabetically (by character code, ascending) so the output is deterministic.`,
  constraints: [
    '1 <= s.length <= 5 * 10^5',
    's consists of uppercase and lowercase English letters and digits',
  ],
  examples: [
    { input: 's = "tree"', output: '"eert"', explanation: '\'e\' appears twice while \'r\' and \'t\' each appear once.' },
    { input: 's = "cccaaa"', output: '"aaaccc"', explanation: 'Both appear 3 times; break ties alphabetically.' },
    { input: 's = "Aabb"', output: '"bbAa"', explanation: '\'b\' appears twice; \'A\' before \'a\' by char code.' },
  ],
  hints: [
    'Build a frequency map, sort entries by (-frequency, charCode), then build the result string.',
  ],
  functionName: 'frequencySort',
  params: ['s'],
  starterCode: {
    javascript: 'function frequencySort(s) {\n  \n}\n',
    python: 'def frequencySort(s):\n    pass\n',
  },
  visibleTests: [
    { args: ['tree'], expected: 'eert' },
    { args: ['cccaaa'], expected: 'aaaccc' },
    { args: ['Aabb'], expected: 'bbAa' },
  ],
  hiddenTests: [
    { args: ['a'], expected: 'a' },
    { args: ['aab'], expected: 'aab' },
    { args: ['aaabbb'], expected: 'aaabbb' },
    { args: ['bbbaaa'], expected: 'aaabbb' },
    { args: ['loveleetcode'], expected: 'eeeelloocdtv' },
  ],
};
