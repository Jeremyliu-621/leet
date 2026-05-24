import type { Problem } from '../types';

export const problem: Problem = {
  id: 'check-if-pangram',
  title: 'Check if the Sentence Is Pangram',
  difficulty: 'easy',
  tags: ['strings'],
  description: `A **pangram** is a sentence where every letter of the English alphabet appears at least once.

Given a string \`sentence\` containing only lowercase English letters, return \`true\` if \`sentence\` is a pangram, or \`false\` otherwise.`,
  constraints: [
    '1 <= sentence.length <= 1000',
    'sentence consists of lowercase English letters',
  ],
  examples: [
    {
      input: 'sentence = "thequickbrownfoxjumpsoverthelazydog"',
      output: 'true',
      explanation: 'The sentence contains every letter of the alphabet.',
    },
    {
      input: 'sentence = "leetcode"',
      output: 'false',
    },
  ],
  hints: [
    'Use a Set to collect all distinct characters in the sentence.',
    'After iterating, check if the set size equals 26.',
  ],
  functionName: 'checkIfPangram',
  params: ['sentence'],
  starterCode: {
    javascript: 'function checkIfPangram(sentence) {\n  \n}\n',
    python: 'def checkIfPangram(sentence):\n    pass\n',
  },
  visibleTests: [
    { args: ['thequickbrownfoxjumpsoverthelazydog'], expected: true },
    { args: ['leetcode'], expected: false },
    { args: ['abcdefghijklmnopqrstuvwxyz'], expected: true },
  ],
  hiddenTests: [
    { args: ['a'], expected: false },
    { args: ['thequickbrownfoxjumpsoverthelazydo'], expected: false },
    { args: ['aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz'], expected: true },
    { args: ['packmyboxwithfivedozenliquorjugs'], expected: true },
  ],
};
