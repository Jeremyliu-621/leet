import type { Problem } from '../types';

export const problem: Problem = {
  id: 'remove-letter-to-equalize-frequency',
  title: 'Remove Letter To Equalize Frequency',
  difficulty: 'easy',
  tags: ['strings', 'hash-map'],
  description: `You are given a **0-indexed** string \`word\`, consisting of lowercase English letters. You need to select **one** index and **remove** the letter at that index from \`word\` so that the frequency of every letter present in \`word\` is equal.

Return \`true\` if it is possible to remove one letter so that the frequency of all letters in \`word\` are equal, and \`false\` otherwise.`,
  constraints: [
    '`2 <= word.length <= 100`',
    '`word` consists of lowercase English letters only.',
  ],
  examples: [
    {
      input: 'word = "abcc"',
      output: 'true',
      explanation: 'Remove one \'c\' → frequencies {a:1, b:1, c:1} — all equal.',
    },
    {
      input: 'word = "aazz"',
      output: 'false',
      explanation: 'Removing any letter leaves {a:1,z:2} or {a:2,z:1} — neither is uniform.',
    },
  ],
  hints: [
    'Count the frequency of each letter in the word.',
    'Try removing one occurrence of each unique letter and check if the remaining frequencies are all equal.',
    'Since word.length ≤ 100, trying every position individually is efficient enough.',
  ],
  functionName: 'equalFrequency',
  params: ['word'],
  starterCode: {
    javascript: `function equalFrequency(word) {

}`,
    typescript: `function equalFrequency(word: string): boolean {

}`,
    python: `def equalFrequency(word):
    pass`,
  },
  visibleTests: [
    { args: ['abcc'], expected: true },
    { args: ['aazz'], expected: false },
  ],
  hiddenTests: [
    { args: ['aab'], expected: true },
    { args: ['aaab'], expected: true },
    { args: ['aabb'], expected: false },
    { args: ['abcdef'], expected: true },
    { args: ['aabbc'], expected: true },
  ],
};
