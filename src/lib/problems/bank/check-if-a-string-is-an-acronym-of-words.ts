import type { Problem } from '../types';

export const problem: Problem = {
  id: 'check-if-a-string-is-an-acronym-of-words',
  title: 'Check if a String Is an Acronym of Words',
  difficulty: 'easy',
  tags: ['arrays', 'strings'],
  description: `Given an array of strings \`words\` and a string \`s\`, return \`true\` if \`s\` is an **acronym** of \`words\`, and \`false\` otherwise.

The string \`s\` is considered an acronym of \`words\` if it can be formed by concatenating the **first character** of each string in \`words\` **in order**. For example, \`"ab"\` can be formed from \`["alice", "ball"]\`.`,
  constraints: [
    '1 <= words.length <= 100',
    '1 <= words[i].length <= 10',
    '1 <= s.length <= 100',
    'words[i] and s consist of lowercase English letters.',
  ],
  examples: [
    {
      input: 'words = ["alice","bob","charlie"], s = "abc"',
      output: 'true',
      explanation: 'a + b + c = "abc" ✓',
    },
    {
      input: 'words = ["an","apple"], s = "a"',
      output: 'false',
      explanation: 'The acronym would be "aa", but s is "a" (different length).',
    },
    {
      input: 'words = ["never","gonna","give","up","to"], s = "nggut"',
      output: 'true',
      explanation: 'never→n, gonna→g, give→g, up→u, to→t. Concatenated: "nggut" ✓.',
    },
  ],
  hints: [
    'Check if s.length == words.length first.',
    'Then verify each s[i] equals words[i][0].',
    'One-liner: s === words.map(w => w[0]).join("").',
  ],
  functionName: 'isAcronym',
  params: ['words', 's'],
  starterCode: {
    javascript: `function isAcronym(words, s) {
  return s === words.map(w => w[0]).join('');
}`,
    typescript: `function isAcronym(words: string[], s: string): boolean {
  return s === words.map(w => w[0]).join('');
}`,
    python: `def isAcronym(words, s):
    return s == ''.join(w[0] for w in words)`,
  },
  visibleTests: [
    { args: [['alice', 'bob', 'charlie'], 'abc'], expected: true },
    { args: [['an', 'apple'], 'a'], expected: false },
    { args: [['never', 'gonna', 'give', 'up', 'to'], 'nggut'], expected: true },
  ],
  hiddenTests: [
    { args: [['a'], 'a'], expected: true },
    { args: [['hello'], 'h'], expected: true },
    { args: [['hello'], 'e'], expected: false },
    { args: [['hello', 'world'], 'hw'], expected: true },
    { args: [['abc', 'def'], 'ad'], expected: true },
    { args: [['a', 'b', 'c'], 'abc'], expected: true },
  ],
};
