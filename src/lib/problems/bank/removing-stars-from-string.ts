import type { Problem } from '../types';

export const problem: Problem = {
  id: 'removing-stars-from-string',
  title: 'Removing Stars From a String',
  difficulty: 'medium',
  tags: ['stack', 'strings'],
  description: `You are given a string \`s\`, which contains stars \`*\`.

In one operation, you can:
- Choose a star in \`s\`.
- Remove the closest **non-star** character to its **left**, as well as remove the star itself.

Return the string after **all** stars have been removed.

**Note** that the operation applies to all stars in order from left to right, and it is always possible to perform it.`,
  constraints: [
    '1 <= s.length <= 10^5',
    's consists of lowercase English letters and stars *.',
    'The operation above can always be performed on s.',
  ],
  examples: [
    {
      input: 's = "leet**cod*e"',
      output: '"lecoe"',
      explanation: 'Remove t (closest to first *), e (closest to second *), d (closest to third *). Result: "lecoe".',
    },
    {
      input: 's = "erase*****"',
      output: '""',
      explanation: 'All non-star characters are removed.',
    },
  ],
  hints: [
    'Use a stack. Push characters; on \'*\', pop the top.',
    'Join the stack at the end.',
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
  ],
  hiddenTests: [
    { args: ['a*b'], expected: 'b' },
    { args: ['abc'], expected: 'abc' },
    { args: ['ab*c*d'], expected: 'ad' },
    { args: ['a*'], expected: '' },
  ],
};
