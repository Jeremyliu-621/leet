import type { Problem } from '../types';

export const problem: Problem = {
  id: 'sorting-the-sentence',
  title: 'Sorting the Sentence',
  difficulty: 'easy',
  tags: ['strings'],
  description: `A **sentence** is a list of words that are separated by a single space with no leading or trailing spaces. Each word consists of lowercase and uppercase English letters.

A sentence can be **shuffled** by appending the **1-indexed word position** to each word then rearranging the words in the sentence.

Given a shuffled sentence \`s\` containing no more than 9 words, reconstruct and return **the original sentence**.`,
  constraints: [
    '2 <= s.length <= 200',
    's consists of lowercase and uppercase English letters, spaces, and digits from 1 to 9.',
    'The number of words in s is between 1 and 9.',
    'The words in s are separated by a single space.',
    's contains no leading or trailing spaces.',
  ],
  examples: [
    {
      input: 's = "is2 sentence4 This1 a3"',
      output: '"This is a sentence"',
      explanation: 'Sort by the appended digit: "This1", "is2", "a3", "sentence4". Remove digit → "This is a sentence".',
    },
    {
      input: 's = "Myself2 Me1 I4 and3"',
      output: '"Me Myself and I"',
      explanation: 'Sort: "Me1", "Myself2", "and3", "I4". Remove digit → "Me Myself and I".',
    },
  ],
  hints: [
    'Split the sentence by spaces. Sort the tokens by the last character (the digit). Strip the digit from each token and join.',
  ],
  functionName: 'sortSentence',
  params: ['s'],
  starterCode: {
    javascript: `function sortSentence(s) {

}`,
    python: `def sortSentence(s):
    pass`,
  },
  visibleTests: [
    { args: ['is2 sentence4 This1 a3'], expected: 'This is a sentence' },
    { args: ['Myself2 Me1 I4 and3'], expected: 'Me Myself and I' },
  ],
  hiddenTests: [
    { args: ['hello1'], expected: 'hello' },
    { args: ['b2 a1'], expected: 'a b' },
    { args: ['c3 a1 b2'], expected: 'a b c' },
    { args: ['world2 Hello1'], expected: 'Hello world' },
  ],
};
