import type { Problem } from '../types';

export const problem: Problem = {
  id: 'number-of-different-integers-in-string',
  title: 'Number of Different Integers in a String',
  difficulty: 'easy',
  tags: ['strings', 'hash-map'],
  description: `You are given a string \`word\` that consists of digits and lowercase English letters.

You will replace every non-digit character with a space. For example, \`"a123bc34d8ef34"\` will become \`" 123  34 8  34"\`. Notice that you are left with some integers and some empty strings. Remove all the empty strings, treating leading zeros as part of the integer.

Return the number of **different** integers after performing the replacement operations on \`word\`.

Two integers are considered the same if their decimal representations **without leading zeros** are the same.`,
  constraints: [
    '1 <= word.length <= 1000',
    'word consists of digits and lowercase English letters.',
  ],
  examples: [
    {
      input: 'word = "a123bc34d8ef34"',
      output: '3',
      explanation: 'Integers found: 123, 34, 8, 34. Unique = {123, 34, 8} → 3.',
    },
    {
      input: 'word = "leet1234code234"',
      output: '2',
      explanation: 'Integers: 1234, 234. Unique = {1234, 234} → 2.',
    },
    {
      input: 'word = "a1b01c001"',
      output: '1',
      explanation: 'Integers: 1, 01, 001. All equal 1. Unique = {1} → 1.',
    },
  ],
  hints: [
    'Extract digit-groups and normalize by removing leading zeros (e.g., "001" → "1").',
    'Use a Set to count distinct normalized integers.',
  ],
  functionName: 'numDifferentIntegers',
  params: ['word'],
  starterCode: {
    javascript: `function numDifferentIntegers(word) {

}`,
    python: `def numDifferentIntegers(word):
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
    { args: ['00a00'], expected: 1 },
    { args: ['1a2b3c'], expected: 3 },
  ],
};
