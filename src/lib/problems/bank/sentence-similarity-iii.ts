import type { Problem } from '../types';

export const problem: Problem = {
  id: 'sentence-similarity-iii',
  title: 'Sentence Similarity III',
  difficulty: 'medium',
  tags: ['strings', 'two-pointers'],
  description: `You are given two strings \`sentence1\` and \`sentence2\`, each representing a **sentence** composed of words. A sentence is a list of **words** that are separated by a **single** space with no leading or trailing spaces. Each word consists of only uppercase and lowercase English characters.

Two sentences \`s1\` and \`s2\` are considered **similar** if it is possible to insert an arbitrary sentence (possibly empty) inside one of them such that the two sentences become equal.

More formally, \`s1\` and \`s2\` are similar if there exists a sentence \`t\` (possibly empty) such that \`s1 = left + " " + t + " " + right\` and \`s2 = left + " " + right\` (where \`left\` and \`right\` represent the matching prefix and suffix word groups).

Return \`true\` if the two given sentences are similar, and \`false\` otherwise.`,
  constraints: [
    '1 <= sentence1.length, sentence2.length <= 100',
    'sentence1 and sentence2 consist of lowercase and uppercase English letters and spaces.',
    'The words in sentence1 and sentence2 are separated by a single space.',
  ],
  examples: [
    {
      input: 'sentence1 = "My name is Haley", sentence2 = "My Haley"',
      output: 'true',
      explanation:
        'sentence2 can be turned to sentence1 by inserting "name is" between "My" and "Haley".',
    },
    {
      input: 'sentence1 = "A lot of words", sentence2 = "A words"',
      output: 'true',
      explanation:
        '"A words" can become "A lot of words" by inserting "lot of" between "A" and "words".',
    },
  ],
  hints: [
    'Split both sentences into word arrays and use two pointers.',
    'Count how many words match from the beginning (lead) and from the end (trail), without overlap.',
    'If lead + trail >= min(len1, len2), the shorter sentence is fully "covered" as a prefix + suffix of the longer one.',
  ],
  functionName: 'areSentencesSimilar',
  params: ['sentence1', 'sentence2'],
  starterCode: {
    javascript: `function areSentencesSimilar(sentence1, sentence2) {
  // your code here
}`,
    typescript: `function areSentencesSimilar(sentence1: string, sentence2: string): boolean {
  // your code here
}`,
    python: `def areSentencesSimilar(sentence1, sentence2):
    # your code here
    pass`,
  },
  visibleTests: [
    { args: ['My name is Haley', 'My Haley'], expected: true },
    { args: ['A lot of words', 'A words'], expected: true },
    { args: ['Eating right now', 'Eating'], expected: true },
    { args: ['Luky', 'Luckyy'], expected: false },
    { args: ['I love you', 'I love you'], expected: true },
  ],
  hiddenTests: [
    { args: ['hello world', 'world'], expected: true },
    { args: ['a b c', 'a c'], expected: true },
    { args: ['a b c d', 'b c'], expected: false },
    { args: ['a b c', 'a x b c'], expected: true },
    { args: ['a b c', 'd e f'], expected: false },
  ],
};
