import type { Problem } from '../types';

export const problem: Problem = {
  id: 'reverse-words-order',
  title: 'Reverse Word Order',
  difficulty: 'easy',
  tags: ['strings'],
  description:
    'Given a string sentence containing words separated by single spaces, return a new string with the words in reverse order.\n\nEach word keeps its own letters in the original order; only the order of the words changes. The words in the result are joined with single spaces.\n\nYou may assume the sentence has no leading or trailing spaces and that words are separated by exactly one space.',
  constraints: [
    '1 <= sentence.length <= 1000',
    'Words are separated by exactly one space.',
    'There are no leading or trailing spaces.',
  ],
  examples: [
    {
      input: 'sentence = "the sky is blue"',
      output: '"blue is sky the"',
      explanation: 'The four words appear in reverse order.',
    },
    {
      input: 'sentence = "hello"',
      output: '"hello"',
      explanation: 'A single word is returned unchanged.',
    },
    {
      input: 'sentence = "code every day"',
      output: '"day every code"',
    },
  ],
  hints: [
    'Words are already separated by single spaces and there are no leading/trailing spaces. What does splitting on `\' \'` give you, and what do you need to do with the resulting array?',
    '`.split(\' \')` breaks the sentence into a word array. Reversing that array with `.reverse()` puts the words in the right order. Joining with `\' \'` reconstructs the sentence.',
    '`return sentence.split(\' \').reverse().join(\' \');` — three chained methods. Edge case: a single word splits to `[word]`, reverses to `[word]`, joins to `\'word\'` — correct.',
  ],
  functionName: 'reverseWordOrder',
  params: ['sentence'],
  starterCode: {
    javascript: 'function reverseWordOrder(sentence) {\n  // your code here\n}\n',
    python: 'def reverseWordOrder(sentence):\n    # your code here\n    pass\n',
  },
  visibleTests: [
    { args: ['the sky is blue'], expected: 'blue is sky the' },
    { args: ['hello'], expected: 'hello' },
    { args: ['code every day'], expected: 'day every code' },
  ],
  hiddenTests: [
    { args: ['a b'], expected: 'b a' },
    { args: ['one two three four'], expected: 'four three two one' },
    { args: ['x'], expected: 'x' },
    { args: ['keep calm and carry on'], expected: 'on carry and calm keep' },
    { args: ['ab ab ab'], expected: 'ab ab ab' },
    { args: ['first second'], expected: 'second first' },
  ],
};
