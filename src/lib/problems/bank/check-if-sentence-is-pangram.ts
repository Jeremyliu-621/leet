import type { Problem } from '../types';

export const problem: Problem = {
  id: 'check-if-sentence-is-pangram',
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
      explanation: 'Contains every letter a-z at least once.',
    },
    {
      input: 'sentence = "leetcode"',
      output: 'false',
    },
  ],
  hints: [
    'Put all the characters into a Set. If the set size is 26, it\'s a pangram.',
    'You can also use a bitmask of 26 bits — set bit i when character \'a\'+i is seen.',
  ],
  starterCode: {
    javascript: `function checkIfPangram(sentence) {
  // sentence: string of lowercase letters
  // Return true if every letter a-z appears at least once
}`,
    python: `def checkIfPangram(sentence: str) -> bool:
    # Your code here
    pass`,
  },
  functionName: 'checkIfPangram',
  params: ['sentence'],
  visibleTests: [
    { args: ['thequickbrownfoxjumpsoverthelazydog'], expected: true },
    { args: ['leetcode'], expected: false },
    { args: ['abcdefghijklmnopqrstuvwxyz'], expected: true },
  ],
  hiddenTests: [
    { args: ['a'], expected: false },
    { args: ['abcdefghijklmnopqrstuvwxyzabc'], expected: true },
    { args: ['thequickbrownfoxjumpsoverthelazydo'], expected: false },
    { args: ['packmyboxwithfivedozenliquorjugs'], expected: true },
    { args: ['aaaaaaaaaaaaaaaaaaaaaaaaaaaa'], expected: false },
  ],
};
