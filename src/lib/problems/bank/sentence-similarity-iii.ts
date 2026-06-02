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
  const w1 = sentence1.split(' '), w2 = sentence2.split(' ');
  const n1 = w1.length, n2 = w2.length;
  let l = 0, r = 0;
  while (l < n1 && l < n2 && w1[l] === w2[l]) l++;
  while (r < n1 - l && r < n2 - l && w1[n1 - 1 - r] === w2[n2 - 1 - r]) r++;
  return l + r >= Math.min(n1, n2);
}`,
    typescript: `function areSentencesSimilar(sentence1: string, sentence2: string): boolean {
  const w1 = sentence1.split(' '), w2 = sentence2.split(' ');
  const n1 = w1.length, n2 = w2.length;
  let l = 0, r = 0;
  while (l < n1 && l < n2 && w1[l] === w2[l]) l++;
  while (r < n1 - l && r < n2 - l && w1[n1 - 1 - r] === w2[n2 - 1 - r]) r++;
  return l + r >= Math.min(n1, n2);
}`,
    python: `def areSentencesSimilar(sentence1, sentence2):
    if hasattr(sentence1, 'to_py'): sentence1 = sentence1.to_py()
    if hasattr(sentence2, 'to_py'): sentence2 = sentence2.to_py()
    w1 = str(sentence1).split(); w2 = str(sentence2).split()
    n1, n2 = len(w1), len(w2)
    l = 0
    while l < n1 and l < n2 and w1[l] == w2[l]: l += 1
    r = 0
    while r < n1 - l and r < n2 - l and w1[n1-1-r] == w2[n2-1-r]: r += 1
    return l + r >= min(n1, n2)`,
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
