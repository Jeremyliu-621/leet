import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-flips-to-make-alternating-binary-string',
  title: 'Minimum Flips to Make Alternating Binary String',
  difficulty: 'easy',
  tags: ['strings'],
  description: `You are given a binary string \`s\`. You are allowed to perform two types of operation on the string in any sequence:

- **Type-1:** Remove the character at the start of the string s and append it to the end of the string.
- **Type-2:** Pick any character in s and flip it (i.e., if its value is '0' it becomes '1' and vice versa).

Return the **minimum** number of **type-2** operations you need to do so that \`s\` becomes an **alternating** string.

A string is called **alternating** if no two adjacent characters are equal. For example, "0101" and "1010" are alternating, but "0100" is not.`,
  constraints: [
    '1 <= s.length <= 10^5',
    's[i] is either \'0\' or \'1\'.',
  ],
  examples: [
    {
      input: 's = "111000"',
      output: '2',
      explanation:
        'Use type-1 to make s = "110001", then type-2 twice to get "101010". Minimum flips is 2.',
    },
    {
      input: 's = "010"',
      output: '0',
      explanation: '"010" is already alternating.',
    },
    {
      input: 's = "1110"',
      output: '1',
      explanation: 'One type-2 flip on any one character makes the string alternating.',
    },
  ],
  hints: [
    'Type-1 operations are cyclic rotations — consider the doubled string s+s and slide a window of length n.',
    'For each window position, count how many flips are needed to match "010101..." and "101010..." patterns. Return the minimum over all windows.',
    'With s doubled to length 2n, the minimum flips over all n windows of size n is the answer.',
  ],
  functionName: 'minFlips',
  params: ['s'],
  starterCode: {
    javascript: `function minFlips(s) {

}`,
    typescript: `function minFlips(s: string): number {

}`,
    python: `def minFlips(s):
    pass`,
  },
  visibleTests: [
    { args: ['111000'], expected: 2 },
    { args: ['010'], expected: 0 },
    { args: ['1110'], expected: 1 },
  ],
  hiddenTests: [
    { args: ['0'], expected: 0 },
    { args: ['1'], expected: 0 },
    { args: ['01'], expected: 0 },
    { args: ['11'], expected: 1 },
    { args: ['00'], expected: 1 },
    { args: ['0000'], expected: 2 },
    { args: ['1111'], expected: 2 },
    { args: ['010101'], expected: 0 },
    { args: ['101010'], expected: 0 },
    { args: ['001011'], expected: 2 },
  ],
};
