import type { Problem } from '../types';

export const problem: Problem = {
  id: 'counting-words-with-a-given-prefix',
  title: 'Counting Words With a Given Prefix',
  difficulty: 'easy',
  tags: ['strings', 'arrays'],
  description: `You are given an array of strings \`words\` and a string \`pref\`.

Return the number of strings in \`words\` that contain \`pref\` as a **prefix**.

A **prefix** of a string \`s\` is any leading contiguous substring of \`s\`.`,
  constraints: [
    '1 <= words.length <= 100',
    '1 <= words[i].length <= 100',
    '1 <= pref.length <= 100',
    'words[i] and pref consist of lowercase English letters.',
  ],
  examples: [
    {
      input: 'words = ["pay","attention","practice","attend"], pref = "at"',
      output: '2',
      explanation: '"attention" and "attend" both start with "at".',
    },
    {
      input: 'words = ["leetcode","win","loops","success"], pref = "code"',
      output: '0',
      explanation: 'No word starts with "code".',
    },
  ],
  hints: [
    'For each word, check if it starts with the prefix using `word.startsWith(pref)` (JavaScript) or `word.startswith(pref)` (Python).',
    'Count how many words pass this check.',
    `\`\`\`js
function prefixCount(words, pref) {
  return words.filter(w => w.startsWith(pref)).length;
}\`\`\``,
  ],
  functionName: 'prefixCount',
  params: ['words', 'pref'],
  starterCode: {
    javascript: `function prefixCount(words, pref) {
  return words.filter(w => w.startsWith(pref)).length;
}`,
    typescript: `function prefixCount(words: string[], pref: string): number {
  return words.filter(w => w.startsWith(pref)).length;
}`,
    python: `def prefixCount(words, pref):
    return sum(1 for w in words if w.startswith(pref))`,
  },
  visibleTests: [
    { args: [['pay', 'attention', 'practice', 'attend'], 'at'], expected: 2 },
    { args: [['leetcode', 'win', 'loops', 'success'], 'code'], expected: 0 },
  ],
  hiddenTests: [
    { args: [['apple', 'app', 'application', 'banana'], 'app'], expected: 3 },
    { args: [['hello'], 'hello'], expected: 1 },
    { args: [['hello'], 'helloo'], expected: 0 },
    { args: [['a', 'b', 'c'], 'a'], expected: 1 },
    { args: [['prefix', 'pre', 'prepare', 'press', 'p'], 'pre'], expected: 4 },
    { args: [['abc', 'def', 'ghi'], 'xyz'], expected: 0 },
  ],
};
