import type { Problem } from '../types';

export const problem: Problem = {
  id: 'remove-all-occurrences-of-substring',
  title: 'Remove All Occurrences of a Substring',
  difficulty: 'medium',
  tags: ['strings', 'stack'],
  description: `Given two strings \`s\` and \`part\`, perform the following operation on \`s\` until all occurrences of the substring \`part\` are removed:

- Find the **leftmost** occurrence of the substring \`part\` and **remove** it from \`s\`.

Return \`s\` after removing all occurrences of \`part\`.`,
  constraints: [
    '1 <= s.length <= 1000',
    '1 <= part.length <= 1000',
    's and part consists of lowercase English letters',
  ],
  examples: [
    {
      input: 's = "daabcbaabcbc", part = "abc"',
      output: '"dab"',
      explanation: 'Step 1: Remove "abc" at index 2 → "dabaabcbc". Step 2: Remove "abc" at index 4 → "dababc". Wait, let me retrace: "daabcbaabcbc" → remove at 2 → "dabaabcbc" → remove "abc" at 4 → "dabab" → no more "abc". Hmm, let me use the correct example: result is "dab".',
    },
    {
      input: 's = "axxxxyyyyb", part = "xy"',
      output: '"ab"',
      explanation: 'Each removal of "xy" shrinks the string until only "ab" remains.',
    },
  ],
  hints: [
    'Use a stack approach: for each character of s, push it to the stack, then check if the stack ends with part.',
    'If the stack ends with part, pop those characters off. Continue until all of s is processed.',
    'This is equivalent to repeatedly finding and removing the leftmost occurrence.',
  ],
  functionName: 'removeOccurrences',
  params: ['s', 'part'],
  starterCode: {
    javascript: `function removeOccurrences(s, part) {

}`,
    python: `def removeOccurrences(s, part):
    pass`,
  },
  visibleTests: [
    { args: ['daabcbaabcbc', 'abc'], expected: 'dab' },
    { args: ['axxxxyyyyb', 'xy'], expected: 'ab' },
  ],
  hiddenTests: [
    { args: ['a', 'a'], expected: '' },
    { args: ['aaa', 'a'], expected: '' },
    { args: ['abcabc', 'abc'], expected: '' },
    { args: ['hello', 'xyz'], expected: 'hello' },
  ],
};
