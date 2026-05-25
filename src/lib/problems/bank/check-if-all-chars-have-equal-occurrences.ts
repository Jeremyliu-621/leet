import type { Problem } from '../types';

export const problem: Problem = {
  id: 'check-if-all-chars-have-equal-occurrences',
  title: 'Check if All Characters Have Equal Number of Occurrences',
  difficulty: 'easy',
  tags: ['hash-map', 'strings'],
  description: `Given a string \`s\`, return \`true\` if all the characters of \`s\` appear the **same** number of times, and \`false\` otherwise.`,
  constraints: [
    '1 <= s.length <= 1000',
    's consists of lowercase English letters.',
  ],
  examples: [
    {
      input: 's = "abacbc"',
      output: 'true',
      explanation: 'a:2, b:2, c:2 — all equal.',
    },
    {
      input: 's = "aaabb"',
      output: 'false',
      explanation: 'a:3, b:2 — not equal.',
    },
  ],
  hints: [
    'Count the frequency of each character. Then check that all frequency values are the same.',
    'Once you have the frequency map, collect the set of distinct frequency values. The answer is true if and only if that set has size 1.',
  ],
  functionName: 'areOccurrencesEqual',
  params: ['s'],
  starterCode: {
    javascript: 'function areOccurrencesEqual(s) {\n  \n}\n',
    python: 'def areOccurrencesEqual(s):\n    pass\n',
  },
  visibleTests: [
    { args: ['abacbc'], expected: true },
    { args: ['aaabb'], expected: false },
    { args: ['a'], expected: true },
  ],
  hiddenTests: [
    { args: ['aabbcc'], expected: true },
    { args: ['abc'], expected: true },
    { args: ['aaa'], expected: true },
    { args: ['aaab'], expected: false },
    { args: ['zzzzzz'], expected: true },
  ],
};
