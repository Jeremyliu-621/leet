import type { Problem } from '../types';

export const problem: Problem = {
  id: 'check-if-all-characters-appear-twice',
  title: 'Check if All Characters Have Equal Number of Occurrences',
  difficulty: 'easy',
  tags: ['hash-map', 'strings'],
  description: `Given a string \`s\`, return \`true\` if all characters in \`s\` appear the **same** number of times, \`false\` otherwise.`,
  constraints: [
    '`1 <= s.length <= 1000`',
    '`s` consists of lowercase English letters.',
  ],
  examples: [
    {
      input: 's = "abacbc"',
      output: 'true',
      explanation: '"a", "b", and "c" each appear 2 times.',
    },
    {
      input: 's = "aaabb"',
      output: 'false',
      explanation: '"a" appears 3 times, "b" appears 2 times — not equal.',
    },
  ],
  hints: [
    'Count the frequency of each character using a hash map.',
    'Check that all frequency values are equal (e.g., convert to a Set and verify its size is 1).',
  ],
  functionName: 'areOccurrencesEqual',
  params: ['s'],
  starterCode: {
    javascript: `function areOccurrencesEqual(s) {

}`,
    python: `def areOccurrencesEqual(s):
    pass`,
  },
  visibleTests: [
    { args: ['abacbc'], expected: true },
    { args: ['aaabb'], expected: false },
    { args: ['aabb'], expected: true },
  ],
  hiddenTests: [
    { args: ['a'], expected: true },
    { args: ['aaa'], expected: true },
    { args: ['abc'], expected: true },
    { args: ['aabbc'], expected: false },
    { args: ['zz'], expected: true },
  ],
};
