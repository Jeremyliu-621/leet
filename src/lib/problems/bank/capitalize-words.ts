import type { Problem } from '../types';

export const problem: Problem = {
  id: 'capitalize-words',
  title: 'Capitalize Each Word',
  difficulty: 'easy',
  tags: ['strings'],
  description: `Given a sentence string \`sentence\`, return the sentence with the **first letter of every word capitalized** and all other letters in their original case.

Words are separated by single spaces. A word is any sequence of characters between spaces.`,
  constraints: [
    '1 <= sentence.length <= 1000',
    'sentence consists of printable ASCII characters.',
    'Words are separated by exactly one space.',
    'No leading or trailing spaces.',
  ],
  examples: [
    {
      input: 'sentence = "hello world"',
      output: '"Hello World"',
      explanation: 'First letter of each word capitalized.',
    },
    {
      input: 'sentence = "the quick brown fox"',
      output: '"The Quick Brown Fox"',
      explanation: 'All four words start with a capital letter.',
    },
    {
      input: 'sentence = "already DONE"',
      output: '"Already DONE"',
      explanation: 'First letter of each word is uppercased; remaining letters keep their case.',
    },
  ],
  hints: [
    'Split the sentence into words. For each word, capitalize the first character and leave the rest unchanged.',
    '`word[0].toUpperCase() + word.slice(1)` capitalizes a single word (handles single-char words too, since `slice(1)` returns an empty string).',
    '`return sentence.split(" ").map(w => w[0].toUpperCase() + w.slice(1)).join(" ");`',
  ],
  functionName: 'capitalizeWords',
  params: ['sentence'],
  starterCode: {
    javascript: 'function capitalizeWords(sentence) {\n  // your code here\n}\n',
    typescript: "function capitalizeWords(sentence: string): string {\n  // your code here\n}",

    python: 'def capitalizeWords(sentence):\n    # your code here\n    pass\n',
  },
  visibleTests: [
    { args: ['hello world'], expected: 'Hello World' },
    { args: ['the quick brown fox'], expected: 'The Quick Brown Fox' },
    { args: ['already DONE'], expected: 'Already DONE' },
  ],
  hiddenTests: [
    { args: ['a'], expected: 'A' },
    { args: ['one two three'], expected: 'One Two Three' },
    { args: ['123abc def'], expected: '123abc Def' },
    { args: ['Hello World'], expected: 'Hello World' },
    { args: ['x y z'], expected: 'X Y Z' },
    { args: ['mixed CASE words'], expected: 'Mixed CASE Words' },
  ],
};
