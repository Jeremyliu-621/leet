import type { Problem } from '../types';

export const problem: Problem = {
  id: 'number-of-different-integers-in-a-string',
  title: 'Number of Different Integers in a String',
  difficulty: 'easy',
  tags: ['strings', 'hash-map'],
  description: `You are given a string \`word\` that consists of digits and lowercase English letters.

You will replace every non-digit character with a space. For example, \`"a123bc34d8ef34"\` will become \`" 123  34 8  34"\`. Notice that you are left with some integers that are **separated by at least one** space: \`"123"\`, \`"34"\`, \`"8"\`, and \`"34"\`.

Return the **number of different** integers after performing the replacement operations on \`word\`.

Two integers are considered the same if their decimal representations **without any leading zeros** are the same.`,
  constraints: [
    '1 <= word.length <= 1000',
    'word consists of digits and lowercase English letters.',
  ],
  examples: [
    {
      input: 'word = "a123bc34d8ef34"',
      output: '3',
      explanation: 'The three different integers are "123", "34", and "8". Note that "34" is only counted once.',
    },
    {
      input: 'word = "leet1234code234"',
      output: '2',
      explanation: 'The two different integers are "1234" and "234".',
    },
    {
      input: 'word = "a1b01c001"',
      output: '1',
      explanation: '"1", "01", and "001" all represent the integer 1.',
    },
  ],
  hints: [
    'Level 1: Split the string on non-digit characters and collect the numeric tokens.',
    'Level 2: Strip leading zeros from each token (e.g. "001" → "1") so you can deduplicate. Use a Set to collect unique trimmed representations.',
    'Level 3: Replace every non-digit with a space, split on spaces, filter empty strings, strip leading zeros from each via replace(/^0+/, \'\') || \'0\', then return the Set size.',
  ],
  functionName: 'numDifferentIntegers',
  params: ['word'],
  starterCode: {
    javascript: `function numDifferentIntegers(word) {

}`,
    typescript: `function numDifferentIntegers(word: string): number {

}`,
    python: `def numDifferentIntegers(word: str) -> int:
    pass`,
  },
  visibleTests: [
    { args: ['a123bc34d8ef34'], expected: 3 },
    { args: ['leet1234code234'], expected: 2 },
    { args: ['a1b01c001'], expected: 1 },
  ],
  hiddenTests: [
    { args: ['0a0'], expected: 1 },
    { args: ['abc'], expected: 0 },
    { args: ['123'], expected: 1 },
    { args: ['0000'], expected: 1 },
    { args: ['a01b001c0001d1'], expected: 1 },
    { args: ['a10b010c100'], expected: 2 },
    { args: ['z9999z09999z009999'], expected: 1 },
  ],
};
