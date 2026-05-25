import type { Problem } from '../types';

export const problem: Problem = {
  id: 'replace-words',
  title: 'Replace Words',
  difficulty: 'medium',
  tags: ['hash-map', 'strings'],
  description: `In English, a **root** can be followed by some other word to form a longer word called a **derivative**. For example, the root \`"help"\` can be followed by words like \`"ful"\` or \`"ing"\` to form \`"helpful"\` or \`"helping"\`.

Given a dictionary consisting of many **roots** and a \`sentence\` string, replace all the derivatives in the sentence with the **shortest** root in the dictionary. If a derivative can be replaced by more than one root in the dictionary, replace it with the **shortest** root.

Return the \`sentence\` after the replacement.`,
  constraints: [
    '1 <= dictionary.length <= 1000',
    '1 <= dictionary[i].length <= 100',
    'dictionary[i] consists of only lowercase English letters.',
    '1 <= sentence.length <= 10^6',
    'sentence consists of only lowercase English letters and spaces.',
    'The number of words in sentence is in the range [1, 1000].',
    'The length of each word in sentence is in the range [1, 1000].',
    'Every two consecutive words in sentence will be separated by exactly one space.',
    'sentence does not have leading or trailing spaces.',
  ],
  examples: [
    {
      input: 'dictionary = ["cat","bat","rat"], sentence = "the cattle was rattled by the battery"',
      output: '"the cat was rat by the bat"',
      explanation: '"cattle" has root "cat", "rattled" has root "rat", "battery" has root "bat".',
    },
    {
      input: 'dictionary = ["a","b","c"], sentence = "aadsfasf absbs bbab cadsfafs"',
      output: '"a a b c"',
    },
  ],
  hints: [
    'For each word in the sentence, check all prefixes starting from the shortest. The first prefix found in the dictionary replaces the word.',
    'Store the dictionary in a Set for O(1) lookups. For each word, iterate prefix lengths from 1 to word.length and return on first match.',
  ],
  functionName: 'replaceWords',
  params: ['dictionary', 'sentence'],
  starterCode: {
    javascript: 'function replaceWords(dictionary, sentence) {\n  \n}\n',
    python: 'def replaceWords(dictionary, sentence):\n    pass\n',
  },
  visibleTests: [
    { args: [['cat', 'bat', 'rat'], 'the cattle was rattled by the battery'], expected: 'the cat was rat by the bat' },
    { args: [['a', 'b', 'c'], 'aadsfasf absbs bbab cadsfafs'], expected: 'a a b c' },
    { args: [['root', 'floor'], 'the root is in the floor'], expected: 'the root is in the floor' },
  ],
  hiddenTests: [
    { args: [['cat'], 'cat concatenate cataract'], expected: 'cat concatenate cat' },
    { args: [['a', 'aa', 'aaa'], 'aaa aaaa'], expected: 'a a' },
    { args: [['dog'], 'dog dogs doggy'], expected: 'dog dog dog' },
    { args: [['z'], 'apple banana cherry'], expected: 'apple banana cherry' },
    { args: [['pre', 'pro'], 'prepare problem present proof'], expected: 'pre pro pre pro' },
  ],
};
