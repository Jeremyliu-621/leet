import type { Problem } from '../types';

export const problem: Problem = {
  id: 'check-if-numbers-are-ascending-in-sentence',
  title: 'Check if Numbers Are Ascending in a Sentence',
  difficulty: 'easy',
  tags: ['strings', 'math'],
  description: `A sentence is a list of **tokens** separated by a **single** space with no leading or trailing spaces. Every token is either a **positive number** consisting of digits \`0-9\` with no leading zeros, or a **word** consisting of lowercase English letters.

Given a string \`s\` representing a sentence, you need to check if all the numbers in \`s\` are **strictly increasing** from left to right (i.e., other than the last number, each number is **strictly smaller** than the number on its right in \`s\`).

Return \`true\` if so, or \`false\` otherwise.`,
  constraints: [
    '3 <= s.length <= 200',
    's consists of lowercase English letters, spaces, and digits 0-9.',
    'The number of tokens in s is between 2 and 100.',
    'The tokens in s are separated by a single space.',
    'There are at least two numbers in s.',
    'Each number in s is a positive number less than 100, with no leading zeros.',
    'The number of words in s is between 1 and 100.',
  ],
  examples: [
    {
      input: 's = "1 box has 3 blue 4 red 6 green and 12 yellow marbles"',
      output: 'true',
      explanation: 'Numbers in order: 1, 3, 4, 6, 12. Each is strictly greater than the previous.',
    },
    {
      input: 's = "hello world 5 x 5"',
      output: 'false',
      explanation: 'Numbers in order: 5, 5. 5 is not strictly greater than 5.',
    },
  ],
  hints: [
    'Split the sentence by spaces, then filter tokens that are numeric. Check if they are strictly increasing.',
    'To check if a token is numeric: `/^\\d+$/`.test(token) or in Python: `token.isdigit()`.',
    'Keep a `prev` variable. For each number found, if it is ≤ prev, return false. Update prev and continue.',
  ],
  functionName: 'areNumbersAscending',
  params: ['s'],
  starterCode: {
    javascript: `function areNumbersAscending(s) {

}`,
    typescript: "function areNumbersAscending(s: string): boolean {\n\n}",

    python: `def areNumbersAscending(s):
    pass`,
  },
  visibleTests: [
    { args: ['1 box has 3 blue 4 red 6 green and 12 yellow marbles'], expected: true },
    { args: ['hello world 5 x 5'], expected: false },
  ],
  hiddenTests: [
    { args: ['1 2 3 4 5'], expected: true },
    { args: ['3 1 4 1 5'], expected: false },
    { args: ['a b c 1'], expected: true },
    { args: ['10 20 15'], expected: false },
  ],
};
