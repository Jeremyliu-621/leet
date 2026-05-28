import type { Problem } from '../types';

export const problem: Problem = {
  id: 'check-if-the-sentence-is-pangram',
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
      explanation: 'sentence contains at least one of every letter of the alphabet.',
    },
    {
      input: 'sentence = "leetcode"',
      output: 'false',
      explanation: 'sentence does not contain all 26 letters.',
    },
    {
      input: 'sentence = "abcdefghijklmnopqrstuvwxyz"',
      output: 'true',
      explanation: 'Every letter appears exactly once.',
    },
  ],
  hints: [
    'Put all characters into a Set and check if its size is 26.',
    'Or use a bitmask: set bit (c - \'a\') for each character and check if the result equals (1 << 26) - 1.',
    `\`\`\`js
function checkIfPangram(sentence) {
  return new Set(sentence).size>=26;
}\`\`\``,
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
    { args: ['thequickbrownfoxjumpsoverthelazydog'], expected: true },
    { args: ['aabbccddee'], expected: false },
    { args: ['abcdefghijklmnopqrstuvwxyza'], expected: true },
    { args: ['qwertyuiopasdfghjklzxcvbnm'], expected: true },
  ],
};
