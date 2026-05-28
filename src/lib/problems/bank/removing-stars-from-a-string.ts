import type { Problem } from '../types';

export const problem: Problem = {
  id: 'removing-stars-from-a-string',
  title: 'Removing Stars From a String',
  difficulty: 'medium',
  tags: ['strings', 'stack'],
  description: `You are given a string \`s\`, which contains stars \`*\`.

In one operation, you choose a star in \`s\` and remove the **closest non-star character** to its **left** as well as the star itself.

Return the string after **all** stars have been removed.

It is guaranteed that the operation is always possible, and the result will always be unique.`,
  constraints: [
    '1 <= s.length <= 10^5',
    's consists of lowercase English letters and stars *.',
    'The operation above can always be performed on s.',
  ],
  examples: [
    {
      input: 's = "leet**cod*e"',
      output: '"lecoe"',
      explanation: 'Remove the 2nd t (star 1), the 2nd e (star 2), then d (star 3). Result: "lecoe".',
    },
    {
      input: 's = "erase*****"',
      output: '""',
      explanation: 'All 5 characters are removed by the 5 stars.',
    },
    {
      input: 's = "a*b"',
      output: '"b"',
      explanation: 'The star removes the "a", leaving "b".',
    },
  ],
  hints: [
    'Use a stack: push each non-star character; on encountering *, pop the top.',
    'This is O(n) time — you never need to scan backwards.',
    'Join the stack at the end to form the result string.',
  ],
  functionName: 'removeStars',
  params: ['s'],
  starterCode: {
    javascript: `function removeStars(s) {

}`,
    python: `def removeStars(s):
    pass`,
  },
  visibleTests: [
    { args: ['leet**cod*e'], expected: 'lecoe' },
    { args: ['erase*****'], expected: '' },
    { args: ['a*b'], expected: 'b' },
  ],
  hiddenTests: [
    { args: ['abc'], expected: 'abc' },
    { args: ['ab**'], expected: '' },
    { args: ['a*a*'], expected: '' },
    { args: ['ab*c'], expected: 'ac' },
    { args: ['z*z'], expected: 'z' },
  ],
};
