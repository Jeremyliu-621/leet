import type { Problem } from '../types';

export const problem: Problem = {
  id: 'check-if-pangram',
  title: 'Check if the Sentence Is Pangram',
  difficulty: 'easy',
  tags: ['strings', 'hash-map'],
  description: `A **pangram** is a sentence where every letter of the English alphabet appears at least once.

Given a string \`sentence\` containing only lowercase English letters, return \`true\` if \`sentence\` is a pangram, or \`false\` otherwise.`,
  constraints: [
    '1 <= sentence.length <= 1000',
    'sentence consists of lowercase English letters.',
  ],
  examples: [
    {
      input: 'sentence = "thequickbrownfoxjumpsoverthelazydog"',
      output: 'true',
      explanation: 'Contains every letter from a to z.',
    },
    {
      input: 'sentence = "leetcode"',
      output: 'false',
    },
  ],
  hints: [
    'Level 1: Count distinct characters in the sentence.',
    'Level 2: Use a Set. If its size is 26, every letter appears at least once.',
    'Level 3: return new Set(sentence).size === 26;',
  ],
  functionName: 'checkIfPangram',
  params: ['sentence'],
  starterCode: {
    javascript: 'function checkIfPangram(sentence) {\n  // your code here\n}\n',
    python: 'def checkIfPangram(sentence):\n    # your code here\n    pass\n',
  },
  visibleTests: [
    { args: ['thequickbrownfoxjumpsoverthelazydog'], expected: true },
    { args: ['leetcode'], expected: false },
  ],
  hiddenTests: [
    { args: ['abcdefghijklmnopqrstuvwxyz'], expected: true },
    { args: ['abcdefghijklmnopqrstuvwxy'], expected: false },
    { args: ['aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz'], expected: true },
    { args: ['hello'], expected: false },
  ],
};
