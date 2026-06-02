import type { Problem } from '../types';

export const problem: Problem = {
  id: 'check-if-word-occurs-as-prefix',
  title: 'Check if a Word Occurs As a Prefix of Any Word in a Sentence',
  difficulty: 'easy',
  tags: ['strings'],
  description: `Given a sentence that consists of some words separated by a single space, and a \`searchWord\`, check if \`searchWord\` is a prefix of any word in \`sentence\`.

Return the index of the word in \`sentence\` (1-indexed) where \`searchWord\` is a prefix of this word. If \`searchWord\` is a prefix of more than one word, return the index of the first word (minimum index). If there is no such word return \`-1\`.`,
  constraints: [
    '1 <= sentence.length <= 100',
    '1 <= searchWord.length <= 10',
    'sentence consists of lowercase English letters and spaces',
    'searchWord consists of lowercase English letters',
  ],
  examples: [
    {
      input: 'sentence = "i love eating burger", searchWord = "burg"',
      output: '4',
      explanation: '"burg" is a prefix of "burger" which is the 4th word.',
    },
    {
      input: 'sentence = "this problem is an easy problem", searchWord = "pro"',
      output: '2',
      explanation: '"pro" is a prefix of "problem" in position 2 (and 6).',
    },
    {
      input: 'sentence = "i am tired", searchWord = "you"',
      output: '-1',
      explanation: '"you" is not a prefix of any word.',
    },
  ],
  hints: [
    'Split the sentence into words.',
    'Iterate through words (1-indexed) and check if searchWord is a prefix.',
    'Return the index of the first match, or -1.',
  ],
  functionName: 'isPrefixOfWord',
  params: ['sentence', 'searchWord'],
  starterCode: {
    javascript: `function isPrefixOfWord(sentence, searchWord) {
  const words = sentence.split(' ');
  for (let i = 0; i < words.length; i++) {
    if (words[i].startsWith(searchWord)) return i + 1;
  }
  return -1;
}`,
    typescript: `function isPrefixOfWord(sentence: string, searchWord: string): number {
  const words = sentence.split(' ');
  for (let i = 0; i < words.length; i++) {
    if (words[i]!.startsWith(searchWord)) return i + 1;
  }
  return -1;
}`,
    python: `def isPrefixOfWord(sentence, searchWord):
    for i, word in enumerate(sentence.split(), 1):
        if word.startswith(searchWord):
            return i
    return -1`,
  },
  visibleTests: [
    { args: ['i love eating burger', 'burg'], expected: 4 },
    { args: ['this problem is an easy problem', 'pro'], expected: 2 },
    { args: ['i am tired', 'you'], expected: -1 },
  ],
  hiddenTests: [
    { args: ['hello world', 'world'], expected: 2 },
    { args: ['a', 'a'], expected: 1 },
    { args: ['abc def ghi', 'xyz'], expected: -1 },
    { args: ['prefix test', 'pre'], expected: 1 },
  ],
};
