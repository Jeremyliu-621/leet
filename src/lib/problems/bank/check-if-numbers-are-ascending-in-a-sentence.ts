import type { Problem } from '../types';

export const problem: Problem = {
  id: 'check-if-numbers-are-ascending-in-a-sentence',
  title: 'Check if Numbers Are Ascending in a Sentence',
  difficulty: 'easy',
  tags: ['strings'],
  description: `A sentence is a list of **tokens** separated by a single space with no leading or trailing spaces. Every token is either a **positive number** consisting of digits \`0-9\` with no leading zeros, or a **word** consisting of lowercase English letters.

Given a string \`s\` representing a sentence, return \`true\` if all the numbers in \`s\` are **strictly increasing** from left to right, or \`false\` otherwise.`,
  constraints: [
    '`3 <= s.length <= 200`',
    '`s` consists of lowercase English letters, spaces, and digits from `0` to `9`.',
    'The number of tokens in `s` is between `2` and `100`.',
    'The numbers in `s` are in the range `[1, 100]`.',
    'Tokens are separated by a single space with no leading or trailing spaces.',
  ],
  examples: [
    {
      input: 's = "1 box has 3 blue 4 red 6 green and 12 yellow marbles"',
      output: 'true',
      explanation: 'The numbers are 1, 3, 4, 6, 12, which are strictly increasing.',
    },
    {
      input: 's = "hello world 5 x 5"',
      output: 'false',
      explanation: 'The numbers are 5 and 5. Since 5 is not strictly greater than 5, return false.',
    },
    {
      input: 's = "sunset is at 7 51 or 8 anything"',
      output: 'false',
      explanation: 'The numbers are 7, 51, 8. Since 8 is not greater than 51, return false.',
    },
  ],
  hints: [
    'Split the sentence into tokens, then filter out the numeric tokens.',
    'Check if each numeric token (parsed as an integer) is strictly greater than the previous one.',
    '```js\nfunction areNumbersAscending(s) {\n  let prev = -1;\n  for (const token of s.split(\' \')) {\n    if (/^\\d+$/.test(token)) {\n      const n = parseInt(token, 10);\n      if (n <= prev) return false;\n      prev = n;\n    }\n  }\n  return true;\n}\n```',
  ],
  functionName: 'areNumbersAscending',
  params: ['s'],
  starterCode: {
    javascript: `function areNumbersAscending(s) {

}`,
    typescript: 'function areNumbersAscending(s: string): boolean {\n\n}',
    python: `def areNumbersAscending(s):
    pass`,
  },
  visibleTests: [
    { args: ['1 box has 3 blue 4 red 6 green and 12 yellow marbles'], expected: true },
    { args: ['hello world 5 x 5'], expected: false },
    { args: ['sunset is at 7 51 or 8 anything'], expected: false },
  ],
  hiddenTests: [
    { args: ['the 1 cow 1 jumps over the 2 lazy dog'], expected: false },
    { args: ['no numbers here'], expected: true },
    { args: ['1 2 3 4 5'], expected: true },
    { args: ['10 9'], expected: false },
    { args: ['a 1 b 2 c 3'], expected: true },
    { args: ['100 is greater than 99'], expected: false },
    { args: ['99 is less than 100'], expected: true },
  ],
};
